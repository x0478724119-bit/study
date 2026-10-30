// 寒假大作业站的公共代码：设置、课程表、截止日期、存档、导航、导出备份。
// 作业内容在 data/*.js 里，用 W.reg({...}) 登记。
var W = {
  CONFIG: {
    TERM: '2026–27 寒假',
    START: '2026-12-09',
    LAST: '2027-02-28',          // 截止最晚推到这天（姐姐 2-22 回澳洲，3 月前改完出分）
    // 考前复习周：知道学校期末日期后，把那一周的周一写进来，比如 ['2027-01-11']。
    // 这一周和后面的截止日期都会往后推一周（推到春节那周就再推一周，最晚 LAST）。
    PAUSE: [],
    SPRING: ['2027-02-01', '2027-02-07'],  // 春节那周不放截止
    LATE_PCT: 5,                 // 每晚交一天扣这项作业的 5%
    FEISHU: 'https://open.feishu.cn/open-apis/bot/v2/hook/1af9d69f-acb2-491f-824e-037b5537a920',
    KEY: 'w26_'                  // localStorage 前缀（和学习站在同一个域名下，不能撞名）
  },
  // 每周的截止日（周日 23:59）。W0 是学术规范入门。
  WEEKS: {0: '2026-12-13', 1: '2026-12-20', 2: '2026-12-27', 3: '2027-01-03', 4: '2027-01-10', 5: '2027-01-17',
          6: '2027-01-24', 7: '2027-01-31', 8: '2027-02-14', 9: '2027-02-21'},
  COURSES: [
    {id: 'CHN',  code: 'CHN 901',  name: '语文',   color: '#b23a48', intro: '读文言文、读《水浒传》、写作。只用九上学过的知识。'},
    {id: 'MATH', code: 'MATH 901', name: '数学',   color: '#2c5d8f', intro: '开一家奶茶店：用一元二次方程、反比例函数、旋转、二次函数、圆，算清楚开店的每一笔账。'},
    {id: 'ENG',  code: 'ENG 901',  name: '英语',   color: '#6a4c93', intro: '写一篇 1000 词左右的英文文章，把 U1–U8 的语法都用上。'},
    {id: 'PHY',  code: 'PHY 901',  name: '物理',   color: '#d17a22', intro: '调查你家的电器和能量：从内能一直用到生活用电。'},
    {id: 'CHEM', code: 'CHEM 901', name: '化学',   color: '#2f8f6e', intro: '在家做实验，研究厨房里的化学。'},
    {id: 'HIS',  code: 'HIS 901',  name: '历史',   color: '#8a6a1f', intro: '像历史学家一样读史料：从《汉谟拉比法典》到《共产党宣言》。'},
    {id: 'DF',   code: 'DF 901',   name: '道德与法治', color: '#a23b72', intro: '按中考主观题的样子练材料分析，再自己出一道题。'},
    {id: 'PY',   code: 'PY 901',   name: 'Python 编程', color: '#3a5a9f', intro: '设计并做出一个你自己的游戏。'},
    {id: 'DES',  code: 'DES 901',  name: '空间与视觉设计', color: '#d0603f', intro: '给一个真实的客户做房间设计提案：Procreate 情绪板 + 酷家乐方案。'}
  ],
  A: {}, ORDER: [],
  AI: [
    {n: 0, name: '禁止使用 AI', can: '什么都不能用：AI、翻译软件、改写工具都不行', cant: '任何 AI', ex: '作文、英语写作'},
    {n: 1, name: '只能提问', can: '让 AI 解释概念、回答"为什么"，帮你看懂资料', cant: '让 AI 写任何要交上去的句子', ex: '物理报告：可以问"比热容是什么"，但报告自己写'},
    {n: 2, name: '纠错和润色', can: '自己先写完，再让 AI 指出错误、建议改措辞。被 AI 改过的句子后面标（AI 修改）', cant: '让 AI 加新内容、新观点，或者整段重写', ex: '英语终稿：让 DeepSeek 找语法错误，自己改'},
    {n: 3, name: '可以生成', can: 'AI 可以帮你写一部分；也可以自己先写、再让 AI 改。AI 写的标（AI 生成），AI 改过的标（AI 修改）', cant: '不标注就交', ex: 'Python 游戏里让 AI 写一个函数，在代码里注释 # AI 生成'}
  ],
  BANDS: [[85, 'HD', '优秀'], [75, 'D', '良好'], [65, 'C', '中等'], [50, 'P', '及格'], [0, 'F', '未及格']],
  reg: function (a) { W.A[a.id] = a; W.ORDER.push(a.id); }
};

// ---------- 存档 ----------
W.store = {
  get: function (k, d) { try { var v = localStorage.getItem(W.CONFIG.KEY + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem(W.CONFIG.KEY + k, JSON.stringify(v)); } catch (e) {} },
  keys: function () { var o = []; try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k.indexOf(W.CONFIG.KEY) === 0) o.push(k); } } catch (e) {} return o; }
};
W.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); };
W.q = function (k) { return new URLSearchParams(location.search).get(k); };

// ---------- 日期 ----------
W.d = function (s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
W.iso = function (d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
W.add = function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; };
W.fmt = function (d, wk) { return (d.getMonth() + 1) + '月' + d.getDate() + '日' + (wk ? '（周' + '日一二三四五六'[d.getDay()] + '）' : ''); };
W.today = function () { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); };
// 某一周的截止日：考虑考前复习周、春节
W.weekDue = function (wk) {
  var d = W.d(W.WEEKS[wk]), C = W.CONFIG, s0 = W.d(C.SPRING[0]), s1 = W.d(C.SPRING[1]);
  C.PAUSE.forEach(function (m) { if (W.d(m) <= d) d = W.add(d, 7); });
  if (d >= s0 && d <= s1) d = W.add(d, 7);
  var last = W.d(C.LAST); if (d > last) d = last;
  return d;
};
W.due = function (id) { return W.weekDue(W.A[id].week); };
W.daysLeft = function (id) { return Math.round((W.due(id) - W.today()) / 864e5); };

// ---------- 提交 ----------
W.subs = function () { return W.store.get('subs', {}); };
W.sub = function (id) { var v = W.subs()[id]; return v && v.length ? v[v.length - 1] : null; };
W.lateDays = function (id, t) { var dl = W.add(W.due(id), 1); var x = new Date(t) - dl; return x > 0 ? Math.ceil(x / 864e5) : 0; };
W.submit = function (id, data) {
  var all = W.subs(); all[id] = all[id] || [];
  data.t = new Date().toISOString(); data.late = W.lateDays(id, data.t);
  all[id].push(data); W.store.set('subs', all);
  var a = W.A[id], c = W.course(a.course);
  var head = '📮 交了 ' + c.name + ' ' + a.no + '「' + a.title + '」' + (all[id].length > 1 ? '（第 ' + all[id].length + ' 版）' : '') + (data.late ? '，晚交 ' + data.late + ' 天' : '，按时');
  var body = '';
  if (data.text) body += '字数：' + data.count + (a.write && a.write.unit || '') + ' · 打字用时 ' + Math.round((data.ms || 0) / 60000) + ' 分钟 · 切出去 ' + (data.leaves || 0) + ' 次' + (data.pastes ? ' · 挡住的粘贴 ' + data.pastes + ' 次' : '') + '\n\n' + data.text;
  if (data.code) body += '【代码】\n' + data.code;
  if (data.extra) body += '\n\n【' + (a.extraField ? a.extraField.label : '补充') + '】\n' + data.extra;
  if (data.memo) body += '\n\n【想对姐姐说】' + data.memo;
  if (body) W.notifyLong(head, body); else W.notify(head);
  return data;
};
W.status = function (id) {
  var a = W.A[id], s = W.sub(id), left = W.daysLeft(id);
  if (a.submit === 'quiz' && !a.ready) return {k: 'soon', ic: '⏳', txt: '小测还没出'};
  if (s) return s.late ? {k: 'late', ic: '🟧', txt: '已交（晚 ' + s.late + ' 天）'} : {k: 'done', ic: '✅', txt: '已交'};
  if (left < 0) return {k: 'over', ic: '❗', txt: '已过截止 ' + (-left) + ' 天'};
  if (left === 0) return {k: 'due', ic: '📝', txt: '今天截止'};
  return {k: 'open', ic: '📝', txt: '还有 ' + left + ' 天'};
};
W.course = function (cid) { return W.COURSES.filter(function (c) { return c.id === cid; })[0]; };
W.ofCourse = function (cid) { return W.ORDER.filter(function (id) { return W.A[id].course === cid; }).sort(function (x, y) { return W.A[x].n - W.A[y].n; }); };
W.band = function (p) { for (var i = 0; i < W.BANDS.length; i++) if (p >= W.BANDS[i][0]) return W.BANDS[i]; };

// 飞书推送：只在正式网站上发（本机预览不发）
W.notify = function (text) {
  if (!/github\.io$/.test(location.hostname) || !W.CONFIG.FEISHU) return;
  try { fetch(W.CONFIG.FEISHU, {method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'text/plain'}, body: JSON.stringify({msg_type: 'text', content: {text: '【寒假作业】' + text}})}); } catch (e) {}
};

W.notifyLong = function (title, text) {
  if (!/github\.io$/.test(location.hostname) || !W.CONFIG.FEISHU) return;
  var parts = [], n = 3000;
  for (var i = 0; i < text.length; i += n) parts.push(text.slice(i, i + n));
  if (!parts.length) parts = [''];
  parts.reduce(function (p, part, i) {
    return p.then(function () {
      return fetch(W.CONFIG.FEISHU, {method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'text/plain'},
        body: JSON.stringify({msg_type: 'text', content: {text: '【寒假作业】' + title + (parts.length > 1 ? '（' + (i + 1) + '/' + parts.length + '）' : '') + '\n\n' + part}})})
        .catch(function () {}).then(function () { return new Promise(function (r) { setTimeout(r, 1200); }); });
    });
  }, Promise.resolve());
};

// ---------- 备份 ----------
// 上传的 PDF / 图片存在这台 iPad 浏览器的 IndexedDB 里（没有服务器）。备份时一起打包。
W.FILES = (function () {
  var DB = null;
  function open() { return new Promise(function (ok, bad) {
    if (DB) return ok(DB); if (!window.indexedDB) return bad(new Error('no indexedDB'));
    var r; try { r = indexedDB.open('winter-2026', 1); } catch (e) { return bad(e); }
    r.onupgradeneeded = function () { r.result.createObjectStore('files', {keyPath: 'key'}); };
    r.onsuccess = function () { DB = r.result; ok(DB); }; r.onerror = function () { bad(r.error); };
  }); }
  function tx(mode, fn) { return open().then(function (db) { return new Promise(function (ok, bad) {
    var t = db.transaction('files', mode), res = fn(t.objectStore('files'));
    t.oncomplete = function () { ok(res && res.result !== undefined ? res.result : res); }; t.onerror = function () { bad(t.error); };
  }); }); }
  return {
    save: function (id, file) { var rec = {key: id + '|' + Date.now(), id: id, name: file.name, type: file.type, size: file.size, date: new Date().toISOString(), blob: file};
      return tx('readwrite', function (st) { st.put(rec); }).then(function () { return rec; }); },
    list: function (id) { return tx('readonly', function (st) { return st.getAll(); }).then(function (all) {
      return (all || []).filter(function (r) { return !id || r.id === id; }).sort(function (a, b) { return a.date < b.date ? 1 : -1; }); }); },
    exportAll: function () { return this.list().then(function (all) { return Promise.all(all.map(function (r) { return new Promise(function (ok) {
      var fr = new FileReader(); fr.onload = function () { ok({key: r.key, id: r.id, name: r.name, type: r.type, size: r.size, date: r.date, data: fr.result}); }; fr.readAsDataURL(r.blob);
    }); })); }).catch(function () { return []; }); },
    importAll: function (arr) { return Promise.all((arr || []).map(function (r) { return fetch(r.data).then(function (x) { return x.blob(); }).then(function (blob) {
      return tx('readwrite', function (st) { st.put({key: r.key, id: r.id, name: r.name, type: r.type, size: r.size, date: r.date, blob: blob}); }); }); })); }
  };
})();

// 备份文件：所有文字记录（作文、提交记录）+ 上传的文件。onlyId 给了的话只带这一项的文件（文件小，方便微信发）
W.backupFile = function (onlyId) {
  var o = {site: 'winter-2026', at: new Date().toISOString(), data: {}};
  W.store.set('lastBackup', new Date().toISOString());
  W.store.keys().forEach(function (k) { o.data[k] = localStorage.getItem(k); });
  return W.FILES.exportAll().then(function (files) {
    o.files = onlyId ? files.filter(function (r) { return r.id === onlyId; }) : files;
    var name = '寒假作业备份_' + (onlyId ? onlyId + '_' : '') + W.iso(new Date()) + '.json';
    return new File([JSON.stringify(o)], name, {type: 'application/json'});
  });
};
// 只带文字记录（同步做出来，提交时马上分享用）
W.snapshotFile = function (id) {
  var o = {site: 'winter-2026', at: new Date().toISOString(), data: {}, files: []};
  W.store.keys().forEach(function (k) { o.data[k] = localStorage.getItem(k); });
  W.store.set('lastBackup', new Date().toISOString());
  return new File([JSON.stringify(o)], '寒假作业备份_' + id + '_' + W.iso(new Date()) + '.json', {type: 'application/json'});
};
W.download = function (f) { var a = document.createElement('a'); a.href = URL.createObjectURL(f); a.download = f.name; document.body.appendChild(a); a.click(); a.remove(); };
// iPad 上弹出分享菜单（选微信 → 姐姐 / 文件传输助手 / 收藏）；不支持分享的设备就下载
W.shareFile = function (f) {
  if (navigator.canShare && navigator.canShare({files: [f]})) return navigator.share({files: [f], title: f.name}).catch(function () {});
  W.download(f); return Promise.resolve();
};
W.exportAll = function () { return W.backupFile().then(W.download); };
W.importAll = function (file, done) {  // 可以一个一个导入多个备份：文字记录取最新那份，文件累加
  var r = new FileReader();
  r.onload = function () {
    try { var o = JSON.parse(r.result); if (o.site !== 'winter-2026') throw 0;
      Object.keys(o.data).forEach(function (k) { localStorage.setItem(k, o.data[k]); });
      W.FILES.importAll(o.files || []).then(function () { done(true); }, function () { done(true); });
    } catch (e) { done(false); }
  };
  r.readAsText(file);
};

// ---------- 导航 ----------
W.nav = function () {
  var here = location.pathname.split('/').pop() || 'index.html';
  var items = [['index.html', '🏠', '首页'], ['work.html', '📝', '作业'], ['grades.html', '📊', '成绩'], ['intro.html', '🎓', '入门课'], ['backup.html', '💾', '备份']];
  var h = '<a class="nav-logo" href="index.html">寒假<br>大作业</a>';
  items.forEach(function (it) {
    var on = here === it[0] || (it[0] === 'index.html' && (here === 'course.html'));
    h += '<a class="nav-item' + (on ? ' on' : '') + '" href="' + it[0] + '"><span class="ic">' + it[1] + '</span><span>' + it[2] + '</span></a>';
  });
  var n = document.getElementById('nav'); if (!n) return;
  n.className = 'nav'; n.innerHTML = h; document.body.classList.add('has-nav');
  // 返回键：放在导航栏最上面（页面内容会被重画，放在内容里会被冲掉）
  if (here !== 'index.html') {
    var bk = document.createElement('a');
    bk.className = 'nav-item nav-back'; bk.href = 'index.html'; bk.innerHTML = '<span class="ic">↩︎</span><span>返回</span>';
    bk.onclick = function (e) { if (history.length > 1 && document.referrer.indexOf(location.host) >= 0) { e.preventDefault(); history.back(); } };
    n.insertBefore(bk, n.children[1]);
  }
};
W.aiBadge = function (n) { var L = W.AI[n]; return '<span class="ailevel ai' + n + '">AI ' + n + ' · ' + L.name + '</span>'; };
W.aRow = function (id, showCourse) {
  var a = W.A[id], c = W.course(a.course), s = W.status(id);
  return '<a class="aitem" href="assignment.html?id=' + id + '"><span class="ic">' + s.ic + '</span><span class="m"><div class="tt">' +
    (showCourse ? '<span style="color:' + c.color + '">' + c.name + '</span> · ' : '') + a.no + ' ' + W.esc(a.title) + '</div>' +
    '<div class="c">截止 ' + W.fmt(W.due(id), true) + ' · 占 ' + a.weight + '% · ' + s.txt + '</div></span>' + W.aiBadge(a.ai) + '</a>';
};

// 主屏幕 App 里点链接别弹出新窗口（学习站 10-30 踩过的坑）
if (navigator.standalone) document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a || a.origin !== location.origin || a.hasAttribute('download') || a.target) return;
  e.preventDefault(); location.href = a.href;
});

// 交 PDF 的报告，通用步骤
W.REPORT_STEPS = [
  '用 iPad 的 <b>Pages</b>（或 Word）写，<b>所有东西放在同一个文档里</b>，顺序是：<br>① 封面（作业名称、你的名字、日期、字数）→ ② 正文 Q1、Q2…… → ③ <b>参考资料</b>（新起一页）→ ④ <b>AI 声明</b>（用了 AI 才写）→ ⑤ <b>附录</b>（照片、手写过程）。',
  '正文按 Q1、Q2…… 的小标题写。用了资料的句子后面标 [1]；被 AI 改过或生成的句子后面标（AI 修改）或（AI 生成），和标参考资料一样。',
  '<b>计算过程、化学方程式、草图</b>在纸上手写，拍照。重要的直接插在正文里，其他的放附录，正文里写"见附录 2"。',
  '图和表要有编号和标题，比如"图 1 我家电器每月耗电"。',
  '导出 PDF（Pages：右上角 ··· → 导出 → PDF），文件名 <b>作业号_你的名字.pdf</b>。',
  '回到这一页最下面，<b>上传 PDF</b>，点「提交」。不会做的看 <a href="intro.html#sample">入门课里的报告示例</a>。'
];
