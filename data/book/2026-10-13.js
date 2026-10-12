// 第 3 天（周二）手册：数学 二次函数 · 软件 Swift While 循环 + logo 设计原则
window.BOOK = {
  intro: '今天大约 3.5 小时。点下面的「数学 / 英语 / 软件」切换科目，顺序随你。',
  parts: [

// ======================= 数学 =======================
{id: 'math', icon: '📐', title: '数学：二次函数', time: '约 75 分钟', html: `
<p class="lede">二次函数 y = ax² + bx + c 是初中数学最重要的函数，也是 A-Level Pure 1 的第一个大块。前 4 节是基础（做「二次函数入门」），第 5、6 节是今天的新内容（做挑战题）。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>形状：看 a</h3>
<p>二次函数的图像叫<b>抛物线</b>，像一个 U 或倒过来的 U。</p>
<svg class="fig" viewBox="0 0 320 160" font-size="13" font-family="sans-serif">
 <g stroke="#ccc"><line x1="10" y1="80" x2="150" y2="80"/><line x1="80" y1="10" x2="80" y2="150"/><line x1="170" y1="80" x2="310" y2="80"/><line x1="240" y1="10" x2="240" y2="150"/></g>
 <path d="M40 20 Q80 140 120 20" fill="none" stroke="#e07a5f" stroke-width="2.5"/>
 <path d="M200 140 Q240 20 280 140" fill="none" stroke="#4a7fc1" stroke-width="2.5"/>
 <text x="45" y="150" fill="#e07a5f">a &gt; 0 开口向上</text><text x="195" y="20" fill="#4a7fc1">a &lt; 0 开口向下</text>
</svg>
<ul><li><b>a &gt; 0 开口向上</b>（有最低点），<b>a &lt; 0 开口向下</b>（有最高点）。</li><li><b>|a| 越大，开口越小</b>（越"瘦"）。y = 5x² 比 y = 2x² 瘦。</li></ul>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>顶点和对称轴</h3>
<p><b>顶点式 y = a(x − h)² + k</b>：顶点是 <b>(h, k)</b>，对称轴是直线 <b>x = h</b>。</p>
<div class="warn">⚠️ 符号陷阱：y = (x − 2)² + 1 的顶点是 (2, 1)；y = (x + 3)² − 4 的顶点是 <b>(−3, −4)</b>，因为 x + 3 = x − (−3)。</div>
<p><b>一般式 y = ax² + bx + c</b>：对称轴 <b>x = −b / 2a</b>，算出 x 再代回去求 y。或者配方成顶点式（周五会细讲配方）。</p>
<div class="ex"><b>例题</b>　y = x² − 4x + 1 的顶点？<br>对称轴 x = −(−4) / 2 = 2，y = 4 − 8 + 1 = −3，顶点 <b>(2, −3)</b>。<br>配方验证：x² − 4x + 4 − 4 + 1 = (x − 2)² − 3 ✓</div>
<details class="try"><summary>试一试：y = 2x² + 8x − 1 的对称轴？</summary><div>x = −8 / (2 × 2) = −2。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>平移：左加右减，上加下减</h3>
<table class="t"><tr><th>怎么移</th><th>式子怎么变</th><th>例子（从 y = x² 出发）</th></tr>
<tr><td>向右 3</td><td>x 换成 (x − 3)</td><td>y = (x − 3)²</td></tr>
<tr><td>向左 3</td><td>x 换成 (x + 3)</td><td>y = (x + 3)²</td></tr>
<tr><td>向上 2</td><td>整体 + 2</td><td>y = x² + 2</td></tr>
<tr><td>向下 2</td><td>整体 − 2</td><td>y = x² − 2</td></tr></table>
<div class="tip">💡 左右平移的加减是"反着的"：向右是减。最好的记法：看顶点怎么移。顶点从 (0,0) 移到 (3,0)，顶点式就是 (x − 3)²。</div>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>最大值和最小值</h3>
<p>开口向上 → 顶点是最低点 → 最小值 = k；开口向下 → 顶点是最高点 → 最大值 = k。</p>
<div class="ex"><b>例题</b>　用 20 米篱笆围矩形，面积最大多少？<br>一边 x，另一边 10 − x，S = x(10 − x) = −x² + 10x。对称轴 x = 5，S = 25。<b>围成正方形时面积最大，25 平方米。</b></div>
<a data-quiz="math-02">基础：二次函数入门</a>
</div>

<div class="sec" id="m5"><h3><span class="n">05</span>新：抛物线和 x 轴的交点 = 方程的根</h3>
<p>图像和 x 轴相交的地方，y = 0。所以<b>求交点就是解方程 ax² + bx + c = 0</b>。这把昨天的方程和今天的函数连起来了。</p>
<svg class="fig" viewBox="0 0 330 150" font-size="12" font-family="sans-serif">
 <g stroke="#ccc"><line x1="5" y1="90" x2="105" y2="90"/><line x1="115" y1="90" x2="215" y2="90"/><line x1="225" y1="90" x2="325" y2="90"/></g>
 <path d="M20 20 Q55 180 90 20" fill="none" stroke="#e07a5f" stroke-width="2.5"/>
 <path d="M130 20 Q165 160 200 20" fill="none" stroke="#e07a5f" stroke-width="2.5"/>
 <path d="M240 20 Q275 110 310 20" fill="none" stroke="#e07a5f" stroke-width="2.5"/>
 <text x="15" y="140">Δ &gt; 0：两个交点</text><text x="125" y="140">Δ = 0：一个交点</text><text x="235" y="140">Δ &lt; 0：没有交点</text>
</svg>
<div class="ex"><b>例题</b>　y = x² − 2x − 3 和 x 轴的交点？<br>x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → <b>(3, 0) 和 (−1, 0)</b>。<br>和 y 轴的交点：令 x = 0，y = −3 → <b>(0, −3)</b>。</div>
<details class="try"><summary>试一试：y = x² + 4x + 4 和 x 轴有几个交点？</summary><div>Δ = 16 − 16 = 0，一个交点，就是顶点 (−2, 0)。</div></details>
</div>

<div class="sec" id="m6"><h3><span class="n">06</span>新：看图判断 a、b、c 的符号</h3>
<table class="t"><tr><th>看什么</th><th>说明什么</th></tr>
<tr><td>开口方向</td><td>向上 a &gt; 0，向下 a &lt; 0</td></tr>
<tr><td>和 y 轴交点在哪</td><td>交点是 (0, c)：上方 c &gt; 0，下方 c &lt; 0，过原点 c = 0</td></tr>
<tr><td>对称轴在 y 轴哪边</td><td>x = −b/2a。口诀<b>"左同右异"</b>：在左边 a、b 同号；在右边 a、b 异号；在 y 轴上 b = 0</td></tr>
<tr><td>和 x 轴几个交点</td><td>两个 Δ &gt; 0，一个 Δ = 0，没有 Δ &lt; 0</td></tr></table>
<div class="ex"><b>例题</b>　抛物线开口向上，对称轴在 y 轴右边，和 y 轴交在下方。<br>a &gt; 0；右边 → 异号 → b &lt; 0；c &lt; 0。</div>
</div>

<div class="why"><b>🔤 英文术语</b><br>quadratic function 二次函数 · parabola 抛物线 · vertex 顶点 · line of symmetry 对称轴<br>maximum / minimum 最大 / 最小值 · translation 平移 · x-intercept 和 x 轴交点 · y-intercept 和 y 轴交点</div>
<div class="sum"><b>📌 小结</b><br>
① a 管开口；顶点式 a(x − h)² + k 顶点 (h, k)；一般式对称轴 x = −b/2a<br>
② 平移看顶点怎么移<br>
③ 最值在顶点<br>
④ 和 x 轴交点 = 解方程，个数看 Δ<br>
⑤ 看图判断：a 看开口，c 看 y 轴交点，b 看对称轴（左同右异）</div>
<a data-quiz="math-02b">挑战题：二次函数进阶</a>
`},

// ======================= 英语 =======================
{id: 'en', icon: '🔤', title: '英语：单词 + 句子 + 语法 + BBC', time: '约 90 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 2 + 用新词写句子（约 25 分钟）</h3>
<p>先做单词课，再从里面挑 5 个新词各写一句英文（首页「用新词写句子」那一项）。</p>
<a data-quiz="vocab-02">单词课 2</a></div>
<div class="sec" id="e2"><h3><span class="n">02</span>Grammar in Use（约 20 分钟）</h3>
<p>从 <b>Unit 1</b> 开始。先读左页讲解，再做右页练习（铅笔写在书上），用书后的答案对，错的划掉改正。<b>拍照发到工作室群</b>，再回首页写一句今天做了什么。</p>
<p class="s">每周五会有一个网站上的小测，考这周做过的单元。</p></div>
<div class="sec" id="e3"><h3><span class="n">03</span>语法专练（约 20 分钟）</h3>
<p>专门练摸底时错的句型：动名词、条件句、被动语态、宾语从句。</p>
<a data-quiz="en-02">英语语法专练 1</a></div>
<div class="sec" id="e4"><h3><span class="n">04</span>BBC 6 分钟英语：孩子该不该有手机（约 20 分钟）</h3>
<p>先读题，第一遍只听不看字幕，第二遍看字幕补答案。这一集讲的是很多家长在纠结要不要给孩子买手机，你可以想想自己的看法。</p>
<a data-quiz="bbc-03">BBC 6 分钟英语</a></div>
`},

// ======================= 软件 =======================
{id: 'app', icon: '🛠️', title: '软件：Swift While 循环 + logo 设计原则', time: '约 30 分钟', html: `
<div class="sec lesson" id="d3-sw"><h3><span class="n">01</span>Swift 第 6 章：While 循环（约 15 分钟）</h3>
<p class="lede">你已经闯到第 6 章了。For 循环是"重复固定次数"，可是如果不知道要走几步呢？</p>
<pre>while !isBlocked {     // 只要前面没有墙
    moveForward()      // 就一直往前走
}</pre>
<ul><li><code>while 条件 { … }</code>：<b>只要条件是 true，就一直重复</b>；条件变成 false 就停。</li>
<li><code>!</code> 读作"不"：<code>!isBlocked</code> = 前面没有被挡住。</li>
<li>和 for 的区别：for 是"走 5 步"，while 是"走到墙为止"。关卡长短变了，while 写的代码照样能用。</li></ul>
<div class="warn">⚠️ 小心死循环：如果循环里的代码永远不会让条件变成 false（比如忘了写 moveForward()），程序会一直转下去停不下来。</div>
<p><b>动手：</b>闯第 6 章前 3 关，每关先想"什么时候该停"。</p>
<div data-ck="d3-sw"></div></div>

<div class="sec lesson" id="d3-cv"><h3><span class="n">02</span>设计：好 logo 的 4 条原则（约 15 分钟）</h3>
<p class="lede">你的小熊图标已经被选成学习站的图标了！今天学学专业设计师怎么评价一个 logo，下次接 logo 单就有标准了。</p>
<table class="t"><tr><th>原则</th><th>意思</th><th>怎么检查</th></tr>
<tr><td>简单</td><td>细节越少越好认</td><td>缩到指甲盖大小，还认得出吗？</td></tr>
<tr><td>好记</td><td>有一个让人记住的点</td><td>别人看 3 秒，闭眼能说出画了什么吗？</td></tr>
<tr><td>颜色少</td><td>一般 1–3 种</td><td>变成黑白的还好看吗？</td></tr>
<tr><td>贴合主题</td><td>一眼看出是做什么的</td><td>不看名字能猜到是哪一行吗？</td></tr></table>
<div class="tip">💡 设计师常用的小技巧：<b>负空间</b>（用留白藏一个图形，比如 FedEx 的 E 和 x 中间藏了个箭头）、<b>把字母变成图形</b>（你的图标就是把「学」字和小熊、铅笔组合在一起）。</div>
<p><b>动手：</b>用上面 4 条，给你自己的学习站图标打分，再在 App 里找 2 个你觉得好看的 logo，也用这 4 条分析。</p>
<div data-ck="d3-cv"></div></div>
`},
  ],

  checks: {
    'd3-sw': {title: 'Swift 第 6 章：While 循环', qs: [
      {q: 'for 循环和 while 循环有什么区别？各举一个什么时候用的例子。', a: 'for 重复<b>固定次数</b>（比如走 5 步）；while <b>只要条件成立就一直重复</b>，不知道要几次的时候用（比如一直走到墙为止）。', pts: ['for 是固定次数', 'while 是条件成立就继续', '举了合理的例子']},
      {q: '写代码：只要前面没被挡住，就一直往前走。', a: '<pre style="margin:4px 0">while !isBlocked {\n    moveForward()\n}</pre>', pts: ['用了 while', '条件是 !isBlocked', '循环里有 moveForward()']},
      {q: '什么是死循环？怎么避免？', a: '循环的条件永远不会变成 false，程序一直重复停不下来。要保证循环里的代码会让情况改变（比如往前走，最后会碰到墙）。', pts: ['停不下来 / 一直重复', '循环里要有让条件改变的代码']},
    ]},
    'd3-cv': {title: '设计：好 logo 的 4 条原则', qs: [
      {q: '好 logo 的 4 条原则是什么？', a: '简单、好记、颜色少（1–3 种）、贴合主题。', pts: ['简单', '好记', '颜色少', '贴合主题']},
      {q: '用这 4 条给你的学习站图标打分（每条 1–5 分），哪条最好、哪条可以改进？', a: '没有标准答案。比如：贴合主题 5 分（学字 + 铅笔 + 坐标图，一看就是学习）；简单 3 分（纸上的小字和坐标图缩小后看不清，可以去掉）。', pts: ['4 条都打了分', '说出了一个可以改进的地方，而且有理由']},
      {q: '为什么要检查 logo 缩小和变成黑白以后的样子？', a: 'logo 会用在很多地方：手机图标、头像、盖章、黑白打印……缩小后细节会糊掉，黑白时只能靠形状。这两种情况下还好认，才是好 logo。', pts: ['提到会用在很小的地方 / 头像图标', '提到黑白打印或只靠形状']},
    ]},
  },
};
