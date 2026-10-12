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
  w.log.unshift({t: dayStr() + ' ' + hm(), n, why}); w.log = w.log.slice(0, 200);
  save('wallet', w); return w;
}

// 推送到飞书群。没配置时什么都不做。
// 姐姐自己的浏览器不推送：打开过 ?me=1，或者登录过后台
try { if (new URLSearchParams(location.search).get('me') === '1') localStorage.setItem('isAdmin', 'true'); } catch(e){}
function notify(text){
  if (!CONFIG.FEISHU || load('isAdmin', false) || load('adminToken', '')) return;
  const body = JSON.stringify({msg_type: 'text', content: {text: '【学习站】' + text}});
  try { fetch(CONFIG.FEISHU, {method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'text/plain'}, body}); } catch(e){}
}

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
function writeStats(key, text){
  const st = _wsGet(key), min = Math.max(1, Math.round(st.ms / 60000)), n = String(text || '').length;
  const flags = [];
  if (st.away) flags.push(`切出页面 ${st.away} 次`);
  if (st.paste) flags.push(`想粘贴 ${st.paste} 次（被拦下）`);
  if (st.chunk) flags.push(`一次冒出一大段 ${st.chunk} 次`);
  if (n > 120 && n / min > 150) flags.push('打字快得不正常');
  return `⏱ 写了约 ${min} 分钟 · ${n} 字 · 删改 ${st.del} 次` + (flags.length ? `\n⚠️ ${flags.join('；')}` : ' · ✅ 没发现异常');
}
function clearWrite(key){ const s = load('ws', {}); delete s[key]; save('ws', s); if (_wsActive === key) _wsActive = null; }
