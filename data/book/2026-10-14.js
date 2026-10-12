// 第 4 天（周三）手册：只补了数学（圆的基础），英语和软件还是原来的任务
window.BOOK = {
  intro: '这一天只补了数学讲解：圆的基础。读完再去做「圆（一）」的题。',
  parts: [
{id: 'math', icon: '📐', title: '数学：认识圆', time: '约 30 分钟读', html: `
<p class="lede">摸底时圆周角还没学，今天从头讲。圆这一章只要记住<b>三个工具</b>：半径都相等、垂径定理、圆周角定理。后面的切线也是在这基础上。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>圆里的几个名字</h3>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="140" cy="100" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="60" y1="100" x2="220" y2="100" stroke="#4a7fc1" stroke-width="2"/>
 <line x1="140" y1="100" x2="196.6" y2="43.4" stroke="#3d9970" stroke-width="2"/>
 <line x1="80" y1="153" x2="200" y2="153" stroke="#8b6cc1" stroke-width="2"/>
 <circle cx="140" cy="100" r="3" fill="#2b2622"/>
 <text x="128" y="118">O</text><text x="150" y="94" fill="#4a7fc1">直径</text><text x="172" y="80" fill="#3d9970">半径</text><text x="128" y="148" fill="#8b6cc1">弦</text>
 <text x="232" y="60" fill="#e07a5f">弧（圆上的一段）</text>
</svg>
<table class="t"><tr><th>名字</th><th>是什么</th></tr>
<tr><td>半径 r</td><td>圆心到圆上任意一点的线段。<b>同一个圆所有半径都相等</b>（这句话是很多题的突破口）</td></tr>
<tr><td>弦</td><td>连接圆上两点的线段</td></tr>
<tr><td>直径</td><td>经过圆心的弦，<b>最长的弦</b>，= 2r</td></tr>
<tr><td>弧</td><td>圆上的一段。比半圆小的叫劣弧，比半圆大的叫优弧</td></tr>
<tr><td>圆心角</td><td>顶点在<b>圆心</b>的角</td></tr></table>
<div class="tip">💡 看到圆里有两条半径，马上想到：<b>它们组成一个等腰三角形</b>，两个底角相等。</div>
<details class="try"><summary>试一试：OA、OB 是 ⊙O 的半径，∠AOB = 100°，∠OAB = ?</summary><div>OA = OB，三角形 OAB 是等腰三角形，∠OAB = (180° − 100°) ÷ 2 = 40°。</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>垂径定理：半径、弦心距、半弦 = 直角三角形</h3>
<p><b>垂直于弦的直径，平分这条弦。</b>（也平分弦对着的两段弧）</p>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="160" cy="95" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="96" y1="143" x2="224" y2="143" stroke="#2b2622" stroke-width="2"/>
 <line x1="160" y1="95" x2="160" y2="143" stroke="#4a7fc1" stroke-width="2" stroke-dasharray="5 3"/>
 <line x1="160" y1="95" x2="224" y2="143" stroke="#3d9970" stroke-width="2"/>
 <path d="M160 133 h10 v10" fill="none" stroke="#2b2622"/>
 <circle cx="160" cy="95" r="3" fill="#2b2622"/>
 <text x="146" y="92">O</text><text x="84" y="160">A</text><text x="226" y="160">B</text><text x="155" y="160">M</text>
 <text x="128" y="124" fill="#4a7fc1">d</text><text x="196" y="112" fill="#3d9970">r</text><text x="186" y="138">AB/2</text>
</svg>
<p>圆心到弦的距离 d 叫<b>弦心距</b>。连一条半径 OB，就得到直角三角形 OMB：</p>
<p style="text-align:center;font-size:17px"><b>r² = d² + (弦长 ÷ 2)²</b></p>
<div class="ex"><b>例题</b>　半径 5，弦心距 3，弦长多少？<br>半弦 = √(5² − 3²) = 4，弦长 = <b>8</b>。</div>
<div class="ex"><b>例题</b>　弦长 24，半径 13，弦心距多少？<br>半弦 12，d = √(13² − 12²) = <b>5</b>。</div>
<div class="warn">⚠️ 最常见的错：直接用整条弦去算。记得<b>先除以 2</b>。</div>
<details class="try"><summary>试一试：半径 10，弦长 16，弦心距是多少？</summary><div>半弦 8，d = √(100 − 64) = 6。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>圆周角定理</h3>
<p><b>圆周角</b>：顶点在<b>圆上</b>，两条边都和圆相交的角。</p>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="160" cy="105" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <g stroke="#4a7fc1" stroke-width="2"><line x1="160" y1="105" x2="90" y2="144"/><line x1="160" y1="105" x2="230" y2="144"/></g>
 <g stroke="#3d9970" stroke-width="2"><line x1="160" y1="25" x2="90" y2="144"/><line x1="160" y1="25" x2="230" y2="144"/></g>
 <circle cx="160" cy="105" r="3" fill="#2b2622"/>
 <text x="150" y="124">O</text><text x="76" y="158">A</text><text x="232" y="158">B</text><text x="155" y="18">C</text>
 <text x="168" y="100" fill="#4a7fc1">圆心角 ∠AOB</text><text x="170" y="50" fill="#3d9970">圆周角 ∠ACB</text>
</svg>
<p>三条结论，全章最常用：</p>
<ol><li><b>同一条弧对的圆周角 = 圆心角的一半。</b>∠ACB = ½∠AOB</li>
<li><b>同一条弧对的圆周角都相等。</b>C 在圆上怎么移（只要在同一侧），∠ACB 都不变。</li>
<li><b>直径对的圆周角是 90°。</b>（圆心角 180° 的一半）反过来，90° 的圆周角对的弦是直径。</li></ol>
<div class="ex"><b>例题</b>　∠AOB = 80°，∠ACB = ?<br>80° ÷ 2 = <b>40°</b>。</div>
<div class="ex"><b>例题</b>　AB 是直径，C 在圆上，∠A = 30°，∠B = ?<br>AB 是直径 → ∠C = 90° → ∠B = 180° − 90° − 30° = <b>60°</b>。</div>
<div class="tip">💡 看到<b>直径</b>，马上在圆上找一点连起来，造出 90°。这是考试最爱的一步。</div>
<details class="try"><summary>试一试：圆周角 ∠ACB = 35°，它对的圆心角 ∠AOB = ?</summary><div>圆心角是圆周角的 2 倍：70°。</div></details>
</div>

<div class="why"><b>🔤 英文术语</b><br>circle 圆 · centre 圆心 · radius 半径 · diameter 直径 · chord 弦 · arc 弧<br>angle at the centre 圆心角 · angle at the circumference 圆周角<br>"The angle at the centre is twice the angle at the circumference." · "The angle in a semicircle is 90°."</div>

<div class="sum"><b>📌 小结</b><br>
① 两条半径 → 等腰三角形<br>
② 垂径定理：r² = d² + (弦 ÷ 2)²，先除以 2<br>
③ 圆周角 = 圆心角 ÷ 2；同弧圆周角相等；直径对 90°</div>
<a data-quiz="math-03">圆（一）：认识圆</a>
`},
  ],
  checks: {},
};
