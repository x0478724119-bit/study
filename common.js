// ===== 学习站公共功能：存档、金币、飞书推送 =====
const CONFIG = {
  RATE: 5,                 // 5 金币 = 1 元
  TASK_COIN: 2,            // 每完成一项任务（当天）
  DAILY_COIN: 5,           // 当天全部完成的额外奖励
  WAKE: [ ['14:00', 5], ['15:00', 3] ],   // 起床打卡：14:00 前 +5，15:00 前 +3，再晚没有
  MISS: 2,                 // 工作日没做完的任务，每项扣 2 金币（第二天早上 6 点结算，可以欠成负数）
  REFUND: 0.2,             // 补完后退还：第二天补退 80%，每晚一天少退 20%
  LEAVE: 2,                // 每月可以请假 2 天，请假当天不扣金币
  FEISHU: 'https://open.feishu.cn/open-apis/bot/v2/hook/7ab344b3-6dc5-40f9-a39b-d73f3c5f5358',
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
function notify(text){
  if (!CONFIG.FEISHU) return;
  const body = JSON.stringify({msg_type: 'text', content: {text: '【学习站】' + text}});
  try { fetch(CONFIG.FEISHU, {method: 'POST', mode: 'no-cors', headers: {'Content-Type': 'text/plain'}, body}); } catch(e){}
}

// 验收码校验：只存哈希，不存原码
function fnv(s){ let h = 0x811c9dc5; for (const b of new TextEncoder().encode(s)){ h ^= b; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, '0'); }

function toast(m){
  let t = document.getElementById('toast');
  if (!t){ t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2000);
}
