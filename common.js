// ===== 学习站公共功能：存档、金币、飞书推送 =====
const CONFIG = {
  RATE: 5,                 // 5 金币 = 1 元
  TASK_COIN: 2,            // 每完成一项任务（当天）
  DAILY_COIN: 5,           // 当天全部完成的额外奖励
  WAKE: [ ['14:00', 5], ['15:00', 3] ],   // 起床打卡：14:00 前 +5，15:00 前 +3，再晚没有
  MISS: 2,                 // 工作日没做完的任务，每项扣 2 金币（第二天早上 6 点结算，可以欠成负数）
  REFUND: 0.2,             // 补完后退还：第二天补退 80%，每晚一天少退 20%
  LEAVE: 2,                // 每月可以请假 2 天，请假当天不扣金币
  DEPOSIT: 0.3,            // 接单时甲方先付定金 = 报酬的 30%
  BREACH: 0.2,             // 放弃或超时：退还定金，另外赔付报酬的 20%
  GOOD_ENOUGH: 0.6,        // 验收"一般"：总共只拿到报酬的 60%
  WEEK_JOBS: 2,            // 周作业：每周（周一到周日）要交 2 单订单，哪天交都行
  WEEK_JOBS_FROM: '2026-10-26',
  WEEK_JOBS_PEN: 10,       // 周日前没交够（周一早上 6 点后结算），少一单扣 10
  WEEK_JOBS_OFF: ['2026-11-02', '2026-11-09'],  // 这几周（周一日期）不要求交订单：期中冲刺和期中考试
  JOB_LIMIT: 2,            // 同时最多 2 个进行中的单；可以放弃换别的
  STALE: 7,                // 作业欠超过 7 天：不能接单、不能兑换；请假的作业 7 天内没补完照样扣
  FEISHU: 'https://open.feishu.cn/open-apis/bot/v2/hook/1af9d69f-acb2-491f-824e-037b5537a920',
};

const pad = n => String(n).padStart(2, '0');
function todayStr(d = new Date()){ return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate()); }
// 学习日：早上 6 点前算前一天
function dayStr(){ return todayStr(new Date(Date.now() - 6*3600*1000)); }
function hm(d = new Date()){ return pad(d.getHours()) + ':' + pad(d.getMinutes()); }

function load(key, def){ try { const v = JSON.parse(localStorage.getItem(key)); return v ?? def; } catch(e){ return def; } }
function save(key, v){ try { localStorage.setItem(key, JSON.stringify(v)); } catch(e){} }

// 钱包：coins 余额，earned 累计，log 记录
function wallet(){ return load('wallet', {coins:0, earned:0, log:[]}); }
function addCoins(n, why){
  const w = wallet(); w.coins += n; if (n > 0) w.earned += n;
  w.seq = (w.seq || 0) + 1;
  w.log.unshift({t: dayStr() + ' ' + hm(), n, why, q: w.seq}); w.log = w.log.slice(0, 200);
  save('wallet', w); return w;
}

// 推送到飞书群。没配置时什么都不做。
// 姐姐自己的浏览器不推送：打开过 ?me=1，或者登录过后台
try { if (new URLSearchParams(location.search).get('me') === '1') localStorage.setItem('isAdmin', 'true'); } catch(e){}
// 新设备：没有任何完成记录（做题、课、文字作业、打卡、订单、任务金币）。
// 妈妈的手机、别的浏览器打开网站时只看内容：不结算、不扣金币、不推送（10-18、10-29 都误扣过）
function freshDevice(){
  try {
    const has = k => { const v = load(k, null); return !!v && Object.keys(v).length > 0; };
    if (['taskpaid', 'lesson', 'wake', 'jobs', 'py', 'paid'].some(has)) return false;
    for (let i = 0; i < localStorage.length; i++){
      const k = localStorage.key(i);
      if (/^day-\d/.test(k) && has(k)) return false;
      if (/^quiz-/.test(k)){ const q = load(k, null); if (q && q.first != null) return false; }
    }
    return true;
  } catch(e){ return true; }
}
// iPad / iPhone 上不是从主屏幕 App 打开（Safari，或 App 里弹出的带 ✕ 的窗口）：存档和 App 不是同一份
const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const inApp = () => !!(navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches));
const outsideApp = () => isIOS() && !inApp();
// 只看不记：新设备，或者 iOS 上不在主屏幕 App 里。不结算、不扣金币、不推送
function viewOnly(){ return freshDevice() || outsideApp(); }
function notify(text){
  if (!CONFIG.FEISHU || load('isAdmin', false) || load('adminToken', '') || viewOnly()) return;
  const body = JSON.stringify({msg_type: 'text', content: {text: '【学习站】' + text + '\n' + notifyTail()}});
  try { fetch(CONFIG.FEISHU, {method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'text/plain'}, body}); } catch(e){}
}

// 主屏幕 App 里点站内链接，iPad 有时会弹出带 ✕ 的单独浏览器窗口，那个窗口的存档是空的（10-30 扣到 −115）。
// 所以在 App 里站内链接一律用 location.href 在原窗口打开
if (inApp()) document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('a[href]');
  if (!a || e.defaultPrevented || a.origin !== location.origin || a.hasAttribute('download')) return;
  if (a.pathname === location.pathname && a.search === location.search && a.hash) return;  // 同一页里的锚点，照常
  e.preventDefault(); location.href = a.href;
});

// 订单编号：类别缩写 + 序号，比如 画画 J04 → ART-04（只是显示用，内部还是用 id）
const JOB_PREFIX = {室内: 'INT', 设计: 'DSN', 画画: 'ART', 编程: 'COD', 英语: 'ENG'};
function jobNo(j){ const m = String(j.id).match(/^J(\d+)$/); return (JOB_PREFIX[j.type] || 'JOB') + '-' + (m ? m[1].padStart(2, '0') : String(j.id).slice(-3)); }

// 验收码校验：只存哈希，不存原码
function fnv(s){ let h = 0x811c9dc5; for (const b of new TextEncoder().encode(s)){ h ^= b; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); }

function toast(m){
  let t = document.getElementById('toast');
  if (!t){ t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2000);
}

// ===== 任务金币：按时长给（任务说明里写"约 N 分钟"）=====
// ≤10 分钟 1 · 15–20 分钟 2 · 30 分钟左右 3 · 45 分钟以上 4；没写时长的老任务 2。也可以在任务上直接写 c:3。
function taskCoin(t){
  if (t.c) return t.c;
  const m = (String(t.d || '').match(/约\s*(\d+)\s*分钟/) || [])[1];
  if (!m) return 2;
  return +m <= 10 ? 1 : +m <= 20 ? 2 : +m <= 35 ? 3 : 4;
}

// ===== 写作防作弊：不能粘贴、记录切出页面、用时、一次冒出一大段 =====
// guardWrite(输入框, 记录名) 绑上；提交时 writeStats(记录名, 正文) 得到一行说明，clearWrite(记录名) 清掉。
let _wsActive = null;
function _wsGet(key){ return load('ws', {})[key] || {ms: 0, keys: 0, del: 0, paste: 0, away: 0, chunk: 0}; }
function _wsPut(key, st){ const s = load('ws', {}); s[key] = st; save('ws', s); }
function guardWrite(el, key){
  if (!el || el._g) return; el._g = 1;
  let last = 0, len = el.value.length;
  const bump = f => { const st = _wsGet(key), n = Date.now(); if (last && n - last < 60000) st.ms += n - last; last = n; f(st); _wsPut(key, st); };
  el.addEventListener('focus', () => { _wsActive = key; });
  el.addEventListener('paste', e => { e.preventDefault(); bump(st => st.paste++); toast('这里不能粘贴，要自己打哦'); });
  el.addEventListener('drop', e => e.preventDefault());
  el.addEventListener('beforeinput', e => {
    if (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop'){ e.preventDefault(); bump(st => st.paste++); return; }
    bump(st => { if (String(e.inputType).startsWith('delete')) st.del++; else st.keys++; });
  });
  el.addEventListener('input', () => { const d = el.value.length - len; len = el.value.length; if (d > 40) bump(st => st.chunk++); });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden && _wsActive){ const st = _wsGet(_wsActive); st.away++; _wsPut(_wsActive, st); }
});
// 英文单词数（用于英文写作要求和推送统计）
const wordCount = s => (String(s || '').match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g) || []).length;
function writeStats(key, text){
  const st = _wsGet(key), min = Math.max(1, Math.round(st.ms / 60000)), n = String(text || '').length;
  const flags = [];
  if (st.away) flags.push(`切出页面 ${st.away} 次`);
  if (st.paste) flags.push(`想粘贴 ${st.paste} 次（被拦下）`);
  if (st.chunk) flags.push(`一次冒出一大段 ${st.chunk} 次`);
  if (n > 120 && n / min > 150) flags.push('打字快得不正常');
  const cjk = (String(text || '').match(/[\u4e00-\u9fff]/g) || []).length, en = wordCount(text);
  return `⏱ 写了约 ${min} 分钟 · ${en > cjk ? en + ' 个英文单词' : n + ' 字'} · 删改 ${st.del} 次` + (flags.length ? `\n⚠️ ${flags.join('；')}` : ' · ✅ 没发现异常');
}
function clearWrite(key){ const s = load('ws', {}); delete s[key]; save('ws', s); if (_wsActive === key) _wsActive = null; }

// ===== 课程 id → 名字 / 链接（订单前置课用）=====
// d5-kjl 这种 = 第 5 天手册里的课；sk-xxx / d6-plan = 技能课
const LESSON_NAMES = {'d6-plan': '平面图', 'sk-3v': '三视图', 'sk-canva': '可画入门', 'd6-kjl': '酷家乐第 5 课：灯光和效果图', 'd6-art': '美术第 1 课：一点透视', 'd5-kjl': '酷家乐第 4 课：材质和配色', 'd3-cv': '好 logo 的 4 条原则', 'd7-sw': 'Swift 第 5 课：逻辑运算符', 'd8-art': '美术第 2 课：两点透视', 'd9-kjl': '酷家乐第 6 课：客厅布局和动线', 'd10-cv': '设计第 2 课：字体和排版', 'd11-art': '美术第 3 课：明暗', 'py1': 'Python 第 1 课：游戏角色卡', 'py2': 'Python 第 2 课：if 判断', 'py3': 'Python 第 3 课：猜数字游戏', 'py4': 'Python 第 4 课：星星金字塔', 'd12-yd': '课外阅读 1：外婆的旧缝纫机', 'd13-art': '美术第 4 课：色彩基础', 'd14-yd': '课外阅读 2：楼下的那棵桂花树', 'd15-kjl': '酷家乐第 7 课：设计一个学习角', 'py5': 'Python 第 5 课：点歌单', 'py6': 'Python 第 6 课：石头剪刀布', 'py7': 'Python 第 7 课：伤害计算器', 'py8': 'Python 第 8 课：背包系统', 'py9': 'Python 第 9 课：文字冒险（1）', 'py10': 'Python 第 10 课：文字冒险（2）', 'd17-yd': '课外阅读 3：修自行车的人', 'd18-art': '美术第 5 课：角色剪影', 'd19-yd': '课外阅读 4：慢一点，也是一种本事', 'd20-kjl': '酷家乐第 8 课：玄关和收纳', 'd22-yd': '课外阅读 5：那盏灯', 'd23-art': '美术第 6 课：游戏图标', 'd24-yd': '课外阅读 6：墙角的那丛草', 'd25-kjl': '酷家乐第 9 课：阳台小花园', 'py11': 'Python 第 11 课：文字冒险（3）', 'py12': 'Python 第 12 课：密码强度检测器', 'py13': 'Python 第 13 课：游戏排行榜', 'py14': 'Python 第 14 课：井字棋棋盘', 'py15': 'Python 第 15 课：井字棋', 'py16': 'Python 第 16 课：bug 侦探', 'd27-yd': '课外阅读 7：一张没寄出的明信片', 'd27-hs': '历史课 1：文明从大河边长出来', 'd28-dz': '道法：坚持党的全面领导', 'd28-art': '美术第 7 课：像素画', 'd29-hs': '历史课 2：希腊人和罗马人', 'd30-yd': '课外阅读 8：会呼吸的房子', 'd30-dz': '道法：进入新时代', 'd30-kjl': '酷家乐第 10 课：小卫生间', 'd31-hs': '历史课 3：中世纪', 'd32-yd': '课外阅读 9：冬天的菜市场', 'd32-hs': '历史课 4：文艺复兴和新航路', 'd33-dz': '道法：现代化和高质量发展', 'd33-art': '美术第 8 课：角色表情', 'd34-hs': '历史课 5：三场革命', 'd35-yd': '课外阅读 10：补鞋', 'd35-dz': '道法：共圆中国梦', 'd35-kjl': '酷家乐第 11 课：小户型整体方案', 'd36-hs': '历史课 6：工业革命和马克思主义'};
function lessonDay(id){ const D = window.DAYS || {}; return Object.keys(D).sort().find(k => D[k].tasks.some(t => t.lesson === id)) || null; }
function lessonUrl(id){
  if (/^py\d/.test(id)) return `py.html?l=${id}`;
  const day = id !== 'd6-plan' && lessonDay(id);
  if (day) return `book.html?d=${day}#${id}`;
  return `book.html?k=skills#${id}`;
}
function lessonName(id){
  const day = id !== 'd6-plan' && lessonDay(id);
  return (LESSON_NAMES[id] || id) + (day ? `（${+day.slice(5,7)}/${+day.slice(8)} 的课，可以提前学）` : /^py\d/.test(id) ? '（Python 练习台）' : '（技能课）');
}


// 预览模式：姐姐的浏览器（开过后台或 ?me=1）什么都不锁，方便检查内容
const PREVIEW = (() => { try { return load('isAdmin', false) || !!load('adminToken', ''); } catch(e){ return false; } })();

// ===== 推送末尾：今天的进度 + 余额变化（和上一条推送比）=====
// 每周必做订单：这一周（周一到周日）提交过几单（提交时记了 sub 日期）
function weekMon(key){ const d = new Date(key + 'T12:00'); return todayStr(new Date(d - ((d.getDay() + 6) % 7) * 864e5)); }
function jobsInWeek(key){ const a = weekMon(key), b = todayStr(new Date(new Date(a + 'T12:00').getTime() + 6 * 864e5));  /* 周一到周日 */ return Object.values(load('jobs', {})).filter(v => v && v.sub && v.sub >= a && v.sub <= b).length; }
function taskDoneLS(key, i, t){
  if (t.job) return jobsInWeek(key) >= t.job;
  if (t.lesson) return !!load('lesson', {})[t.lesson];
  if (t.quiz){ const q = load('quiz-' + t.quiz, null); return !!(q && q.done); }
  return !!load('day-' + key, {})[i];
}
function todayProgress(){
  const D = window.DAYS || load('daysCache', null), key = dayStr();
  if (!D || !D[key]) return '';
  const ts = D[key].tasks, left = ts.filter((t, i) => !taskDoneLS(key, i, t));
  return `📋 今天 ${ts.length - left.length}/${ts.length} 项` + (left.length ? '' : ' 🎉');  // 详细的看每天的「📅 日报」
}
function notifyTail(){
  const w = wallet(), last = load('lastNotify', null), seq = w.seq || 0;
  let money = `💰 余额 ${w.coins}`;
  if (last){
    const d = w.coins - last.coins, items = w.log.filter(l => (l.q || 0) > last.seq).reverse();
    if (d || items.length) money += `（${d >= 0 ? '+' : ''}${d}` + (items.length ? '：' + items.slice(-6).map(l => `${l.why.replace(/^完成：/, '')} ${l.n > 0 ? '+' : ''}${l.n}`).join('、') + (items.length > 6 ? ' 等' : '') : '') + '）';
  }
  save('lastNotify', {coins: w.coins, seq});
  return [todayProgress(), money].filter(Boolean).join('\n');
}

// ===== 错题本：第一遍做错的题自动记下来，第二天复习 =====
// mistakes = [{s: 题库 id, i: 题号, d: 做错那天, ok: 复习做对了}]
function addMistakes(setId, idxs){
  const m = load('mistakes', []), d = dayStr();
  idxs.forEach(i => { if (!m.some(x => x.s === setId && x.i === i)) m.push({s: setId, i, d, ok: false}); });
  save('mistakes', m);
}
// 第 D 天的复习题：D 之前做错、还没复习对的题（第一次打开时固定下来）
function reviewList(D){
  const fixed = load('reviewList', {});
  if (fixed[D]) return fixed[D];
  return load('mistakes', []).map((x, k) => ({...x, k})).filter(x => x.d < D && !x.ok).map(x => x.k);
}
