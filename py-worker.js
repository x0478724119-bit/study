// Python 练习台的后台：在 Web Worker 里跑 Pyodide，死循环时主页面可以直接把它关掉重开
importScripts('vendor/pyodide/pyodide.js');
let py = null, out = '';
const ready = (async () => {
  py = await loadPyodide({indexURL: 'vendor/pyodide/'});
  py.setStdout({batched: s => { out += s + '\n'; }});
  py.setStderr({batched: s => { out += s + '\n'; }});
  // input()：从输入框里一行一行取，并像终端一样把输入的内容显示出来
  py.runPython(`
import builtins
_inq = []
def _input(prompt=''):
    print(prompt, end='')
    if not _inq:
        print()
        raise EOFError('程序要输入，但输入框里已经没有内容了')
    v = _inq.pop(0)
    print(v)
    return v
builtins.input = _input
`);
  postMessage({ready: true});
})();

onmessage = async e => {
  await ready;
  const {id, code, stdin, after} = e.data;
  out = '';
  let err = null, ok = true;
  try {
    py.globals.get('_inq').clear();
    for (const s of stdin || []) py.globals.get('_inq').append(s);
    const ns = py.globals.get('dict')();
    ns.set('__name__', '__main__');
    py.runPython(code, {globals: ns});
    if (after){ try { py.runPython(after, {globals: ns}); } catch (x){ ok = false; err = 'CHECK:' + String(x.message || x); } }
    ns.destroy();
  } catch (x){ ok = false; err = String(x.message || x); }
  postMessage({id, out, err, ok});
};
