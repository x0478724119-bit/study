// 第 4 天（周三）手册：数学 圆（基础 + 内接四边形、弧长扇形）· 英语 · 软件 Swift 算法 + 构图
window.BOOK = {
  intro: '今天大约 3.5 小时。点下面的「数学 / 英语 / 软件」切换科目，顺序随你。',
  parts: [
{id: 'math', icon: '📐', title: '数学：圆', time: '约 75 分钟', html: `
<p class="lede">摸底时圆周角还没学，今天从头讲。前 3 节是基础（做「圆（一）」），第 4、5 节是新内容（做挑战题）。圆这一章只要记住<b>三个工具</b>：半径都相等、垂径定理、圆周角定理。后面的切线也是在这基础上。</p>

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

<a data-quiz="math-03">基础：圆（一）认识圆</a>

<div class="sec" id="m4"><h3><span class="n">04</span>新：圆内接四边形</h3>
<p>四个顶点都在圆上的四边形，叫<b>圆内接四边形</b>。它有一个很好用的性质：</p>
<p style="text-align:center;font-size:17px"><b>对角互补：∠A + ∠C = 180°，∠B + ∠D = 180°</b></p>
<p class="s">为什么：∠A 和 ∠C 对着的两段弧合起来正好是整个圆（360°），圆周角是圆心角的一半，所以加起来是 180°。</p>
<div class="ex"><b>例题</b>　四边形 ABCD 内接于圆，∠A = 75°，∠B = 100°，求 ∠C、∠D。<br>∠C = 180° − 75° = <b>105°</b>，∠D = 180° − 100° = <b>80°</b>。</div>
<details class="try"><summary>试一试：为什么矩形一定能内接于圆，一般的平行四边形不行？</summary><div>矩形对角都是 90°，加起来 180°，满足对角互补；一般的平行四边形对角相等但不一定是 90°，加起来不是 180°。</div></details>
</div>

<div class="sec" id="m5"><h3><span class="n">05</span>新：弧长和扇形面积</h3>
<p>圆心角 n° 占整个圆（360°）的 n/360，所以弧长、扇形面积都按这个比例从整圆里切出来：</p>
<table class="t"><tr><th></th><th>整个圆</th><th>圆心角 n° 的部分</th></tr>
<tr><td>长度</td><td>周长 2πr</td><td><b>弧长 = (n/360) × 2πr</b></td></tr>
<tr><td>面积</td><td>πr²</td><td><b>扇形面积 = (n/360) × πr²</b>，也等于 ½ × 弧长 × r</td></tr></table>
<div class="ex"><b>例题</b>　半径 6，圆心角 120°。<br>弧长 = (120/360) × 12π = <b>4π</b>；扇形面积 = (120/360) × 36π = <b>12π</b>。检验：½ × 4π × 6 = 12π ✓</div>
<div class="why">🎓 <b>A-Level 预告：弧度</b>。A-Level 不用"度"，用<b>弧度</b>（radian）：180° = π 弧度。用弧度时公式特别简单：<b>弧长 = rθ，扇形面积 = ½r²θ</b>。先记住 180° = π，以后会细讲。</div>
<details class="try"><summary>试一试：半径 3，圆心角 90°，弧长是多少？</summary><div>(90/360) × 6π = 1.5π（或写成 3π/2）。</div></details>
</div>

<div class="why"><b>🔤 英文术语</b><br>circle 圆 · centre 圆心 · radius 半径 · diameter 直径 · chord 弦 · arc 弧<br>angle at the centre 圆心角 · angle at the circumference 圆周角<br>"The angle at the centre is twice the angle at the circumference." · "The angle in a semicircle is 90°."<br>cyclic quadrilateral 圆内接四边形 · arc length 弧长 · sector 扇形 · radian 弧度</div>

<div class="sum"><b>📌 小结</b><br>
① 两条半径 → 等腰三角形<br>
② 垂径定理：r² = d² + (弦 ÷ 2)²，先除以 2<br>
③ 圆周角 = 圆心角 ÷ 2；同弧圆周角相等；直径对 90°<br>④ 圆内接四边形对角互补<br>⑤ 弧长 = (n/360) × 2πr，扇形 = (n/360) × πr²</div>
<a data-quiz="math-03b">挑战题：圆的进阶</a>
`},
// ======================= 英语 =======================
{id: 'en', icon: '🔤', title: '英语：单词 + 句子 + 语法 + 阅读 + BBC', time: '约 90 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 3 + 用新词写句子（约 25 分钟）</h3>
<p>先做单词课，再从里面挑 5 个新词各写一句英文（首页「用新词写句子」那一项）。</p>
<a data-quiz="vocab-03">单词课 3</a></div>
<div class="sec" id="e2"><h3><span class="n">02</span>Grammar in Use（约 20 分钟）</h3>
<p>接着做下一个单元（昨天 Unit 1，今天 Unit 2）。做完对答案、改错，<b>拍照发到工作室群</b>，再回首页写一句今天做了什么。</p></div>
<div class="sec" id="e3"><h3><span class="n">03</span>阅读训练（约 20 分钟）</h3>
<p>阅读题每题都要回原文找依据，后面还有 4 道语法复习。</p>
<a data-quiz="en-03">阅读训练 1 + 语法复习</a></div>
<div class="sec" id="e4"><h3><span class="n">04</span>BBC 6 分钟英语：为什么要读书而不是看屏幕（约 20 分钟）</h3>
<p>先读题，第一遍只听不看字幕，第二遍看字幕补答案。这一集结尾会讲 skimming（略读），雅思阅读就要用这个技巧。</p>
<a data-quiz="bbc-04">BBC 6 分钟英语</a></div>
`},

// ======================= 软件 =======================
{id: 'app', icon: '🛠️', title: '软件：Swift 算法 + 构图', time: '约 30 分钟', html: `
<div class="sec lesson" id="d4-sw"><h3><span class="n">01</span>Swift 第 7 章：算法（约 15 分钟）</h3>
<p class="lede"><b>算法</b>就是"解决一个问题的步骤"。第 7 章教一个经典算法：<b>右手法则</b>走迷宫。</p>
<p>规则很简单：<b>一直让右手贴着墙走</b>。能右转就右转；右边是墙就直走；前面也是墙就左转。只要迷宫是连在一起的，一定能走出去。</p>
<pre>while !isOnGem {
    if isBlockedRight {        // 右边是墙
        if isBlocked {         // 前面也是墙
            turnLeft()
        } else {
            moveForward()
        }
    } else {                   // 右边是空的
        turnRight()
        moveForward()
    }
}</pre>
<p>你会发现：这段代码把之前学的 <b>while + if/else + 函数</b> 全用上了。算法 = 把学过的工具组合起来解决问题。</p>
<p><b>动手：</b>闯第 7 章前 2–3 关。</p>
<div data-ck="d4-sw"></div></div>

<div class="sec lesson" id="d4-art"><h3><span class="n">02</span>美术：构图的 3 个规则（约 15 分钟）</h3>
<p class="lede">同样的东西，放在画面不同的位置，好看程度差很多。这就是<b>构图</b>。画画、拍照、做效果图、做海报都用得上。</p>
<svg class="fig" viewBox="0 0 300 200" font-size="12" font-family="sans-serif">
 <rect x="10" y="10" width="280" height="180" fill="#fdf6e8" stroke="#2b2622"/>
 <g stroke="#4a7fc1" stroke-dasharray="5 4"><line x1="103" y1="10" x2="103" y2="190"/><line x1="197" y1="10" x2="197" y2="190"/><line x1="10" y1="70" x2="290" y2="70"/><line x1="10" y1="130" x2="290" y2="130"/></g>
 <g fill="#e07a5f"><circle cx="103" cy="70" r="6"/><circle cx="197" cy="70" r="6"/><circle cx="103" cy="130" r="6"/><circle cx="197" cy="130" r="6"/></g>
 <text x="112" y="62" fill="#e07a5f">把主体放在交点附近</text>
</svg>
<ol><li><b>三分法：</b>横竖各画两条线，把画面分成 9 格。主体（人物、重点家具）放在 4 个交点附近，比放正中间更生动；地平线放在上或下 1/3 处，不要正好在中间。</li>
<li><b>主次分明：</b>一张画只有一个主角。主角最大、最清楚、颜色最突出，其他东西都是配角。</li>
<li><b>留白：</b>别把画面塞满。主体周围留一点空，眼睛才有地方"呼吸"，主体也更突出。</li></ol>
<div class="tip">💡 iPad 相机设置里打开「网格」，拍照时就能看到三分线。今天就试试。</div>
<p><b>动手：</b>用 iPad 相机打开网格，拍 2 张照片（房间一角、桌上的东西都行）：一张主体放正中间，一张放在交点上。对比一下哪张更好看。</p>
<div data-ck="d4-art"></div></div>
`},
  ],
  checks: {
    'd4-sw': {title: 'Swift 第 7 章：算法', qs: [
      {q: '什么是算法？用自己的话说。', a: '解决一个问题的一系列步骤。比如走迷宫的右手法则、做菜的菜谱，都是算法。', pts: ['解决问题的步骤 / 方法', '举了例子或说清楚是一步一步的']},
      {q: '右手法则怎么走迷宫？', a: '一直让右手贴着墙：能右转就右转，右边是墙就直走，前面也是墙就左转。', pts: ['右手贴墙', '能右转先右转', '前面是墙就左转']},
      {q: '这一章的代码用到了之前学过的哪些东西？', a: 'while 循环（一直走到宝石为止）、if/else 条件判断（看右边和前面是不是墙）、命令/函数（moveForward、turnRight）。', pts: ['while 循环', 'if / else', '命令或函数']},
    ]},
    'd4-art': {title: '美术：构图的 3 个规则', qs: [
      {q: '构图的 3 个规则是什么？', a: '三分法、主次分明、留白。', pts: ['三分法', '主次分明', '留白']},
      {q: '三分法是怎么用的？地平线应该放在哪？', a: '横竖各两条线把画面分成 9 格，主体放在 4 个交点附近；地平线放在上 1/3 或下 1/3 的线上，不要放正中间。', pts: ['分成 9 格 / 两横两竖', '主体放在交点附近', '地平线在 1/3 处，不在中间']},
      {q: '你拍的两张照片对比：主体在中间和在交点上，哪张更好看？为什么？', a: '没有标准答案。一般放在交点上的那张更生动、有空间感；放正中间显得呆板、对称。', pts: ['真的拍了两张做对比', '说出了理由']},
    ]},
  },
};
