// 第 4 天（周三）手册：数学 圆（基础 + 内接四边形、弧长扇形）· 英语 · 软件 Swift 算法 + 构图
window.BOOK = {
  intro: '今天大约 3.5 小时。点下面的「数学 / 英语 / 软件」切换科目，顺序随你。',
  parts: [
{id: 'math', icon: '📐', title: '数学：圆', time: '约 75 分钟', html: `
<p class="lede">今天从零开始讲圆。不用怕，<b>我们一步一步来</b>：每个知识点都先用大白话讲，再看一道一步一步拆开的例题，最后你自己试一道（先看提示，实在不会再看答案）。前 4 节学完做「圆（一）」，第 5、6 节学完做挑战题。</p>

<div class="sec" id="m0"><h3><span class="n">01</span>圆是怎么来的：半径都一样长</h3>
<p>用圆规画圆的时候：一只脚扎在纸上不动，另一只脚绕一圈。</p>
<ul><li>扎住不动的那个点，叫<b>圆心</b>，一般写成 O；</li>
<li>圆规两只脚之间的距离，就是<b>半径</b>，写成 r。</li></ul>
<p>画的时候圆规两脚的距离一直没变，所以：<b>圆心到圆上任何一个点，距离都一样，都等于半径。</b></p>
<div class="why">🤔 这句话听起来是废话，但它是圆这一章<b>最常用的一句话</b>。很多题目卡住了，就是因为没想到"这两条线都是半径，所以一样长"。</div>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="140" cy="100" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="60" y1="100" x2="220" y2="100" stroke="#4a7fc1" stroke-width="2"/>
 <line x1="140" y1="100" x2="196.6" y2="43.4" stroke="#3d9970" stroke-width="2"/>
 <line x1="80" y1="153" x2="200" y2="153" stroke="#8b6cc1" stroke-width="2"/>
 <circle cx="140" cy="100" r="3" fill="#2b2622"/>
 <text x="128" y="118">O</text><text x="150" y="94" fill="#4a7fc1">直径</text><text x="172" y="80" fill="#3d9970">半径</text><text x="128" y="148" fill="#8b6cc1">弦</text>
 <text x="232" y="60" fill="#e07a5f">弧（圆上的一段）</text>
</svg>
<p>再认识几个名字（对照上面的图）：</p>
<table class="t"><tr><th>名字</th><th>是什么</th><th>怎么记</th></tr>
<tr><td>弦</td><td>圆上任意两个点连起来的线段</td><td>像弓上的弦，两头都挂在圆上</td></tr>
<tr><td>直径</td><td>穿过圆心的弦</td><td>两条半径接起来，所以 直径 = 2 × 半径。它是最长的弦</td></tr>
<tr><td>弧</td><td>圆上的一段曲线</td><td>就是圆的"一段边"</td></tr>
<tr><td>圆心角</td><td>顶点在圆心的角</td><td>两条半径夹出来的角</td></tr></table>
</div>

<div class="sec" id="m1"><h3><span class="n">02</span>两条半径 = 一个等腰三角形</h3>
<p>在圆里随便画两条半径 OA、OB，再把 A、B 连起来，就得到一个三角形 OAB。</p>
<p>因为 OA 和 OB <b>都是半径，一样长</b>，所以三角形 OAB 是<b>等腰三角形</b>。等腰三角形有个性质你初二学过：<b>两个底角相等</b>，也就是 ∠OAB = ∠OBA。</p>
<div class="ex"><b>例题</b>　OA、OB 是 ⊙O 的半径，∠AOB = 100°，求 ∠OAB。<br><br>
<b>第 1 步：找关系。</b>OA、OB 都是半径 → OA = OB → 三角形 OAB 是等腰三角形 → ∠OAB = ∠OBA。<br>
<b>第 2 步：用三角形内角和。</b>三个角加起来是 180°，顶角是 100°，剩下两个底角一共 180° − 100° = 80°。<br>
<b>第 3 步：平分。</b>两个底角相等，每个 80° ÷ 2 = <b>40°</b>。</div>
<details class="try"><summary>试一试：OA、OB 是半径，∠OAB = 35°，∠AOB = ?</summary><div>
<details class="try"><summary>先看提示</summary><div>两个底角相等，所以 ∠OBA 也是 35°。再用 180° 减。</div></details>
答案：180° − 35° − 35° = 110°。</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">03</span>垂径定理：把弦对半分</h3>
<p><b>先想象一下：</b>把一张圆形的纸，沿着一条直径对折，两半完全重合。如果这条直径正好和某条弦<b>垂直</b>，那么对折以后，弦的左半段和右半段也会完全重合，说明<b>弦被分成了一样长的两半</b>。</p>
<p>这就是<b>垂径定理</b>：<b>垂直于弦的直径，把这条弦平分。</b>（"垂"= 垂直，"径"= 直径）</p>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="160" cy="95" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="96" y1="143" x2="224" y2="143" stroke="#2b2622" stroke-width="2"/>
 <line x1="160" y1="95" x2="160" y2="143" stroke="#4a7fc1" stroke-width="2" stroke-dasharray="5 3"/>
 <line x1="160" y1="95" x2="224" y2="143" stroke="#3d9970" stroke-width="2"/>
 <path d="M160 133 h10 v10" fill="none" stroke="#2b2622"/>
 <circle cx="160" cy="95" r="3" fill="#2b2622"/>
 <text x="146" y="92">O</text><text x="84" y="160">A</text><text x="226" y="160">B</text><text x="155" y="160">M</text>
 <text x="128" y="124" fill="#4a7fc1">d</text><text x="196" y="112" fill="#3d9970">r</text><text x="186" y="138">AB 的一半</text>
</svg>
<p><b>它怎么用来算长度？</b>看上图：从圆心 O 往弦 AB 画一条垂线，垂足是 M。这条垂线的长度叫<b>弦心距</b>（圆心到弦的距离），写成 d。再连一条半径 OB。</p>
<p>现在三角形 OMB 有三条边：</p>
<ul><li>OM = 弦心距 d</li><li>MB = 弦的<b>一半</b>（因为垂径定理，M 是 AB 的中点）</li><li>OB = 半径 r</li></ul>
<p>而且 ∠OMB = 90°，这是个<b>直角三角形</b>。还记得勾股定理吗？<b>直角三角形里，两条直角边的平方加起来 = 斜边的平方</b>。斜边就是对着直角的那条最长的边，这里是半径 r。所以：</p>
<p style="text-align:center;font-size:17px"><b>d² + (弦长的一半)² = r²</b></p>
<div class="ex"><b>例题 1</b>　圆的半径是 5，圆心到弦 AB 的距离是 3，弦 AB 多长？<br><br>
<b>第 1 步：画图，标数字。</b>r = 5，d = 3，弦的一半 MB 不知道，设为 x。<br>
<b>第 2 步：列勾股定理。</b>3² + x² = 5²，也就是 9 + x² = 25。<br>
<b>第 3 步：解出来。</b>x² = 16，x = 4。所以弦的<b>一半</b>是 4。<br>
<b>第 4 步：别忘了乘 2！</b>整条弦 AB = 4 × 2 = <b>8</b>。</div>
<div class="ex"><b>例题 2（倒过来问）</b>　弦长 24，半径 13，圆心到这条弦的距离是多少？<br><br>
<b>第 1 步：先把弦除以 2。</b>弦的一半 = 24 ÷ 2 = 12。<br>
<b>第 2 步：列式。</b>d² + 12² = 13²，d² + 144 = 169。<br>
<b>第 3 步：</b>d² = 25，d = <b>5</b>。</div>
<div class="warn">⚠️ 最常见的错误：直接拿<b>整条弦</b>去算。公式里用的是弦的<b>一半</b>：算之前先除以 2，算完记得乘 2。</div>
<div class="tip">💡 常见的勾股数，记住能省时间：3-4-5、6-8-10、5-12-13。例题 1 就是 3-4-5，例题 2 就是 5-12-13。</div>
<details class="try"><summary>试一试：半径 10，弦长 16，弦心距是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>先把 16 除以 2 得到 8，再用 d² + 8² = 10²。</div></details>
答案：d² = 100 − 64 = 36，d = 6。（这是 6-8-10）</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">04</span>圆周角：圆心角的一半</h3>
<p>前面说过，<b>圆心角</b>是顶点在圆心的角。现在认识一个新的角：</p>
<p><b>圆周角</b>：顶点在<b>圆上</b>，两条边都穿过圆的角。（"圆周"就是圆的那一圈边）</p>
<svg class="fig" viewBox="0 0 320 200" font-size="13" font-family="sans-serif">
 <circle cx="160" cy="105" r="80" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <g stroke="#4a7fc1" stroke-width="2"><line x1="160" y1="105" x2="90" y2="144"/><line x1="160" y1="105" x2="230" y2="144"/></g>
 <g stroke="#3d9970" stroke-width="2"><line x1="160" y1="25" x2="90" y2="144"/><line x1="160" y1="25" x2="230" y2="144"/></g>
 <circle cx="160" cy="105" r="3" fill="#2b2622"/>
 <text x="150" y="124">O</text><text x="76" y="158">A</text><text x="232" y="158">B</text><text x="155" y="18">C</text>
 <text x="168" y="100" fill="#4a7fc1">圆心角 ∠AOB</text><text x="170" y="50" fill="#3d9970">圆周角 ∠ACB</text>
</svg>
<p>看图：蓝色的 ∠AOB（顶点在圆心）和绿色的 ∠ACB（顶点在圆上），它们"张开"对着的是<b>同一段弧 AB</b>（下面那段）。</p>
<p><b>结论 1：对着同一段弧，圆周角 = 圆心角的一半。</b>比如 ∠AOB = 80°，那 ∠ACB = 40°。</p>
<details class="try"><summary>想知道为什么是一半？（选看）</summary><div>看一种特殊情况：圆周角的一条边正好穿过圆心。连 OC，OC 和 OA 都是半径，三角形 OAC 是等腰三角形，两个底角都设为 x。三角形的外角等于不相邻的两个内角之和，所以圆心角 = x + x = 2x，正好是圆周角 x 的 2 倍。其他情况可以拆成两个这样的特殊情况，结论一样。</div></details>
<p><b>结论 2：对着同一段弧的圆周角，都一样大。</b>在图里把 C 点沿着圆的上半边随便挪，∠ACB 都不变，因为它永远是 ∠AOB 的一半。</p>
<p><b>结论 3：直径对着的圆周角是 90°。</b>为什么？直径是一条直线穿过圆心，它对的圆心角是一个平角 180°，圆周角是一半，就是 90°。</p>
<div class="tip">💡 结论 3 是考试最爱考的：<b>看到直径，就在圆上找一个点连起来，马上得到一个直角</b>。</div>
<div class="ex"><b>例题 1</b>　∠AOB = 80°，同一段弧对着的圆周角 ∠ACB = ?<br><br>
圆周角是圆心角的一半：80° ÷ 2 = <b>40°</b>。</div>
<div class="ex"><b>例题 2</b>　AB 是直径，C 在圆上，∠A = 30°，求 ∠B。<br><br>
<b>第 1 步：看到直径。</b>AB 是直径 → 它对着的圆周角 ∠C = 90°。<br>
<b>第 2 步：用内角和。</b>三角形 ABC 里，∠B = 180° − 90° − 30° = <b>60°</b>。</div>
<details class="try"><summary>试一试：圆周角 ∠ACB = 35°，它对的圆心角 ∠AOB = ?</summary><div>
<details class="try"><summary>先看提示</summary><div>圆周角是圆心角的一半，反过来，圆心角就是圆周角的 2 倍。</div></details>
答案：35° × 2 = 70°。</div></details>
</div>

<a data-quiz="math-03">基础：圆（一）认识圆</a>

<div class="sec" id="m4"><h3><span class="n">05</span>新：圆内接四边形，对角加起来 180°</h3>
<p>一个四边形，<b>四个顶点都在圆上</b>，就叫<b>圆内接四边形</b>（四边形被"装"在圆里面）。</p>
<p>它有一个很好用的性质：<b>相对的两个角加起来是 180°。</b>比如四边形 ABCD，∠A + ∠C = 180°，∠B + ∠D = 180°。</p>
<details class="try"><summary>为什么？（选看）</summary><div>∠A 和 ∠C 都是圆周角，它们对着的两段弧合起来正好是一整个圆。一整圈的圆心角是 360°，两个圆周角都是各自圆心角的一半，加起来就是 360° ÷ 2 = 180°。</div></details>
<div class="ex"><b>例题</b>　四边形 ABCD 内接于圆，∠A = 75°，∠B = 100°，求 ∠C 和 ∠D。<br><br>
<b>找对角：</b>A 对着 C，B 对着 D。<br>
∠C = 180° − 75° = <b>105°</b>；∠D = 180° − 100° = <b>80°</b>。<br>
<b>检查：</b>四个角加起来 75 + 100 + 105 + 80 = 360° ✓（四边形内角和就是 360°）</div>
<details class="try"><summary>试一试：为什么长方形一定能放进一个圆里（四个顶点都在圆上）？</summary><div>长方形四个角都是 90°，相对的两个角加起来 90° + 90° = 180°，满足"对角加起来 180°"。</div></details>
</div>

<div class="sec" id="m5"><h3><span class="n">06</span>新：弧长和扇形面积（切披萨）</h3>
<p>想象一个圆形披萨，从中心切一块。这一块的形状叫<b>扇形</b>，它外面那条弯弯的边就是<b>弧</b>。</p>
<p>整个披萨的圆心角是 360°。如果这一块的圆心角是 60°，它就占整个披萨的 60/360 = <b>1/6</b>。所以：</p>
<ul><li>这块的<b>弧长</b> = 整个圆周长的 1/6</li><li>这块的<b>面积</b> = 整个圆面积的 1/6</li></ul>
<p>写成公式（n 是圆心角的度数）：</p>
<table class="t"><tr><th></th><th>整个圆</th><th>圆心角 n° 的那一块</th></tr>
<tr><td>边的长度</td><td>周长 = 2πr</td><td><b>弧长 = (n ÷ 360) × 2πr</b></td></tr>
<tr><td>面积</td><td>πr²</td><td><b>扇形面积 = (n ÷ 360) × πr²</b></td></tr></table>
<div class="ex"><b>例题</b>　半径 6，圆心角 120°，求弧长和扇形面积。<br><br>
<b>第 1 步：算占几分之几。</b>120 ÷ 360 = 1/3。<br>
<b>第 2 步：算整个圆。</b>周长 = 2π × 6 = 12π；面积 = π × 6² = 36π。<br>
<b>第 3 步：取 1/3。</b>弧长 = 12π ÷ 3 = <b>4π</b>；扇形面积 = 36π ÷ 3 = <b>12π</b>。</div>
<div class="tip">💡 答案里的 π 保留不算，直接写 4π、12π 就行，考试也是这样写的。</div>
<div class="why">🎓 <b>A-Level 预告</b>：A-Level 量角度不用"度"，用"弧度"（radian），180° = π 弧度。用弧度算，公式会变得特别简单：弧长 = rθ。现在先知道有这么个东西就行，以后会细讲。</div>
<details class="try"><summary>试一试：半径 3，圆心角 90°，弧长是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>90° 是整圈的几分之几？再算整个圆的周长 2π × 3。</div></details>
答案：90 ÷ 360 = 1/4，周长 6π，弧长 = 6π ÷ 4 = 1.5π。</div></details>
</div>

<div class="why"><b>🔤 英文术语</b><br>circle 圆 · centre 圆心 · radius 半径 · diameter 直径 · chord 弦 · arc 弧<br>angle at the centre 圆心角 · angle at the circumference 圆周角 · cyclic quadrilateral 圆内接四边形 · sector 扇形 · arc length 弧长</div>
<div class="sum"><b>📌 今天学了 6 件事</b><br>
① 圆心到圆上任意一点都等于半径<br>
② 两条半径 + 一条弦 = 等腰三角形，两个底角相等<br>
③ 垂径定理：弦心距² + (弦的一半)² = 半径²（先除以 2！）<br>
④ 圆周角 = 圆心角 ÷ 2；同一段弧的圆周角都相等；直径对的圆周角 = 90°<br>
⑤ 圆内接四边形：对角加起来 180°<br>
⑥ 弧长、扇形面积 = 整个圆 × (n ÷ 360)</div>
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
