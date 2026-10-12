// 技能课：跟订单挂钩的课，不算每日任务。订单上写 pre: ['d6-plan'] 就要先交这一课的小测才能接单。
window.BOOK = {
  intro: '接某些订单之前要先学的技能。学完、交了小测，对应的订单才能接。',
  parts: [
{id: 'plan', icon: '🏠', title: '室内：平面图', time: '约 20 分钟', html: `
<div class="sec lesson" id="d6-plan"><h3><span class="n">01</span>平面图：从上往下看房间（约 20 分钟）</h3>
<p class="lede"><b>「奶茶店改造」的前置课</b>：学完、交了小测才能接这一单。</p>
<p><b>平面图</b>就是把房间的屋顶拿掉，从正上方往下看。设计师先画平面图定布局，再出效果图。客户、施工队都靠它看懂"东西放在哪、有多大"。</p>
<svg class="fig" viewBox="0 0 320 220" font-size="11" font-family="sans-serif">
 <rect x="30" y="30" width="240" height="170" fill="#fff" stroke="#2b2622" stroke-width="5"/>
 <line x1="30" y1="140" x2="30" y2="185" stroke="#fff" stroke-width="7"/><path d="M30 140 A45 45 0 0 1 75 185" fill="none" stroke="#8a7f74" stroke-dasharray="3 2"/><line x1="30" y1="140" x2="75" y2="140" stroke="#8a7f74"/>
 <line x1="120" y1="30" x2="200" y2="30" stroke="#4a7fc1" stroke-width="5"/><line x1="120" y1="27" x2="200" y2="27" stroke="#fff" stroke-width="1.5"/>
 <rect x="180" y="90" width="85" height="105" fill="#fbe6df" stroke="#2b2622"/><text x="208" y="146">床</text>
 <rect x="35" y="35" width="60" height="30" fill="#e1ebf7" stroke="#2b2622"/><text x="52" y="54">衣柜</text>
 <rect x="120" y="35" width="55" height="28" fill="#ece5f7" stroke="#2b2622"/><text x="134" y="53">书桌</text>
 <path d="M60 170 C 110 160 120 110 160 95" fill="none" stroke="#e07a5f" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ar)"/>
 <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#e07a5f"/></marker></defs>
 <text x="85" y="175" fill="#e07a5f">动线</text>
 <line x1="30" y1="15" x2="270" y2="15" stroke="#5b524a"/><text x="135" y="12">4000</text>
 <line x1="285" y1="30" x2="285" y2="200" stroke="#5b524a"/><text x="288" y="118">3500</text>
 <text x="135" y="24" fill="#4a7fc1">窗</text><text x="36" y="132">门</text>
</svg>
<p><b>一张合格的平面图要有：</b></p>
<table class="t"><tr><th>要素</th><th>怎么画</th></tr>
<tr><td>墙</td><td>粗黑线（外墙比家具线粗很多）</td></tr>
<tr><td>门</td><td>墙上断开一段 + 一条线和一段弧线，表示门往哪边开</td></tr>
<tr><td>窗</td><td>墙上画两三条细线</td></tr>
<tr><td>尺寸</td><td>单位一般是<b>毫米</b>：4000 = 4 米。至少标出房间的长和宽</td></tr>
<tr><td>家具</td><td>按真实大小画方块，写上名字</td></tr>
<tr><td>动线</td><td>用虚线箭头画出人怎么走（从门口到各个区域）</td></tr></table>
<p><b>在酷家乐里：</b>画好户型、摆好家具后，切到 <b>2D / 平面</b> 视图，就是平面图。找"导出"或者直接截图都行。手机屏幕小的话，开一台设备看这页教程，另一台操作。</p>
<p><b>手机上操作太小？</b>也可以用学习站的 <a href="planner.html">📐 户型练习台</a>：按真实尺寸摆家具，会自动检查通道够不够 0.6 米。</p>
<div data-ck="d6-plan"></div></div>
`},
  ],
  checks: {
    'd6-plan': {title: '选学：平面图', qs: [
      {q: '平面图是从哪个方向看房间？它和效果图有什么不同？', a: '从正上方往下看（把屋顶拿掉）。平面图看布局、位置和尺寸；效果图看真实的样子、颜色和氛围。', pts: ['从正上方往下看', '平面图看布局 / 尺寸', '效果图看真实样子 / 颜色']},
      {q: '平面图上写着 3600，房间实际多长？', a: '平面图的单位一般是毫米，3600 毫米 = 3.6 米。', pts: ['知道单位是毫米', '算出 3.6 米']},
      {q: '一张合格的平面图至少要有哪些东西？说出 4 个。', a: '墙、门（开门方向）、窗、尺寸、家具、动线。', pts: ['说出了墙 / 门 / 窗里的至少两个', '说出了尺寸', '说出了家具或动线']},
    ]},
  },
};
