// Python 练习台的后台：在 Web Worker 里跑 Pyodide，死循环时主页面可以直接把它关掉重开
// 线路：cn = 国内镜像（npmmirror + jsdmirror，浏阳打开快）；gh = 本站（GitHub）
const SRC = new URL(location.href).searchParams.get('src') || 'cn';
const BASE = SRC === 'cn' ? 'https://registry.npmmirror.com/pyodide/0.26.4/files/' : 'vendor/pyodide/';
const STD = SRC === 'cn' ? 'https://cdn.jsdmirror.com/npm/pyodide@0.26.4/python_stdlib.zip' : undefined;
importScripts(BASE + 'pyodide.js');
let py = null, out = '';
const ready = (async () => {
  py = await loadPyodide({indexURL: BASE, stdLibURL: STD});
  py.setStdout({batched: s => { out += s + '\n'; }});
  py.setStderr({batched: s => { out += s + '\n'; }});
  // input()：从输入框里一行一行取，并像终端一样把输入的内容显示出来
  py.runPython(`
import builtins
_inq = []
def _input(prompt=''):
    # 输入回显的那一行开头加 \x01，判题时跳过（显示时去掉）
    if not _inq:
        print('\x01' + str(prompt))
        raise EOFError('程序要输入，但输入框里已经没有内容了')
    v = _inq.pop(0)
    print('\x01' + str(prompt) + v)
    return v
builtins.input = _input
`);
  postMessage({ready: true});
})().catch(x => postMessage({fail: String(x && x.message || x)}));

onmessage = async e => {
  await ready;
  const {id, code, stdin, after, pre} = e.data;
  out = '';
  let err = null, ok = true;
  try {
    py.globals.get('_inq').clear();
    for (const s of stdin || []) py.globals.get('_inq').append(s);
    const ns = py.globals.get('dict')();
    ns.set('__name__', '__main__');
    if (pre) py.runPython(pre, {globals: ns});
    py.runPython(code, {globals: ns});
    if (after){ try { py.runPython(after, {globals: ns}); } catch (x){ ok = false; err = 'CHECK:' + String(x.message || x); } }
    ns.destroy();
  } catch (x){ ok = false; err = String(x.message || x); }
  postMessage({id, out, err, ok});
};
