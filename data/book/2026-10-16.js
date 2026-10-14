// 第 6 天（周五）手册：数学 一元二次方程进阶 · 英语 定语从句 · 软件 酷家乐灯光 + 美术一点透视
window.BOOK = {
  intro: '今天大约 3 小时：英语 75 分钟、数学 75 分钟、软件 30 分钟。点下面的「数学 / 英语 / 软件」切换科目。做完就是周末！',
  parts: [

// ======================= 数学 =======================
{id: 'math', icon: '📐', title: '数学：一元二次方程进阶', time: '约 75 分钟', html: `
<p class="lede">摸底时方程错了 2 道，今天补上。周一学过一元二次方程的解法，今天学 4 个进阶的东西：<b>不解方程就知道有几个根、不解方程就算出两根的和与积、应用题、配方求最小值</b>。还是大白话 → 一步一步的例题 → 先看提示再自己试。前 3 节学完做基础题，第 4 节学完做挑战题。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>判别式 Δ：不解方程，先知道有几个根</h3>
<p>还记得求根公式吗？ax² + bx + c = 0 的根是 x = [−b ± √(b² − 4ac)] ÷ 2a。</p>
<p>注意根号里面的 <b>b² − 4ac</b>，它决定了根号能不能开：</p>
<ul><li>根号里是<b>正数</b>：能开出一个数，"+" 和 "−" 各算一次 → <b>两个不一样的根</b>；</li>
<li>根号里是 <b>0</b>：√0 = 0，"+0" 和 "−0" 一样 → <b>两个一样的根</b>（只有一个值）；</li>
<li>根号里是<b>负数</b>：负数不能开平方 → <b>没有实数根</b>。</li></ul>
<p>所以给 b² − 4ac 起了个名字，叫<b>判别式</b>，用希腊字母 <b>Δ</b>（读"德尔塔"）表示：</p>
<table class="t"><tr><th>Δ = b² − 4ac</th><th>根的情况</th></tr><tr><td>Δ &gt; 0</td><td>两个<b>不相等</b>的实数根</td></tr><tr><td>Δ = 0</td><td>两个<b>相等</b>的实数根</td></tr><tr><td>Δ &lt; 0</td><td><b>没有</b>实数根</td></tr></table>
<p class="s">题目说"有实数根"，意思是 Δ ≥ 0（大于或等于 0 都算有根）。</p>
<div class="ex"><b>例题 1</b>　方程 2x² + 3x + 5 = 0 有几个实数根？<br><br>
<b>第 1 步：找 a、b、c。</b>a = 2，b = 3，c = 5。（注意带上符号）<br>
<b>第 2 步：算 Δ。</b>Δ = 3² − 4 × 2 × 5 = 9 − 40 = −31。<br>
<b>第 3 步：看正负。</b>−31 &lt; 0 → <b>没有实数根</b>。</div>
<div class="ex"><b>例题 2（带字母）</b>　方程 x² + 2x + k = 0 有两个不相等的实数根，求 k 的范围。<br><br>
<b>第 1 步：</b>a = 1，b = 2，c = k。<br>
<b>第 2 步：</b>"两个不相等的实数根" → Δ &gt; 0。<br>
<b>第 3 步：</b>Δ = 2² − 4 × 1 × k = 4 − 4k &gt; 0。<br>
<b>第 4 步：解不等式。</b>4 &gt; 4k，所以 <b>k &lt; 1</b>。</div>
<div class="warn">⚠️ 陷阱：如果 x² 前面的系数里也有字母，比如 (k − 1)x² + 2x + 1 = 0，题目又说它是"一元二次方程"或"有两个根"，那 x² 前面的系数不能是 0，要<b>额外加一个条件：k − 1 ≠ 0</b>。最后的答案是两个条件一起。</div>
<details class="try"><summary>试一试：x² − 6x + m = 0 有两个相等的实数根，m = ?</summary><div>
<details class="try"><summary>先看提示</summary><div>"两个相等的实数根" → Δ = 0。a = 1，b = −6，c = m。</div></details>
答案：Δ = (−6)² − 4m = 36 − 4m = 0，m = 9。</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>根与系数的关系：不解方程，算两根的和与积</h3>
<p><b>先看一个例子：</b>x² − 5x + 6 = 0，分解成 (x − 2)(x − 3) = 0，两个根是 2 和 3。</p>
<ul><li>两根相加：2 + 3 = 5，正好是方程里 −5 去掉负号；</li><li>两根相乘：2 × 3 = 6，正好是方程里的常数 6。</li></ul>
<p>这不是巧合。对任何方程 ax² + bx + c = 0，如果它的两个根是 x₁ 和 x₂，都有：</p>
<p style="text-align:center;font-size:18px"><b>x₁ + x₂ = −b ÷ a　　　x₁ × x₂ = c ÷ a</b></p>
<p class="s">这叫<b>根与系数的关系</b>，也叫韦达定理。</p>
<div class="warn">⚠️ 最容易错的两个地方：① 两根之和是 <b>−b</b> ÷ a，前面有个负号；② a 不是 1 的时候，<b>别忘了除以 a</b>。</div>
<p><b>它有什么用？</b>有些题让你算 x₁² + x₂²、1/x₁ + 1/x₂ 这种式子，如果先把根解出来再代进去，会很麻烦（尤其根带根号的时候）。用这两个公式，可以直接算。要记住两个变形：</p>
<ul><li><b>x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂</b><br><small>为什么：(x₁ + x₂)² 展开是 x₁² + 2x₁x₂ + x₂²，多了一个 2x₁x₂，减掉就行</small></li>
<li><b>1/x₁ + 1/x₂ = (x₁ + x₂) ÷ (x₁x₂)</b><br><small>为什么：通分，分母是 x₁x₂，分子是 x₂ + x₁</small></li></ul>
<div class="ex"><b>例题 1</b>　x₁、x₂ 是 x² − 3x − 1 = 0 的两个根，求 x₁² + x₂²。<br><br>
<b>第 1 步：找 a、b、c。</b>a = 1，b = −3，c = −1。<br>
<b>第 2 步：算和与积。</b>x₁ + x₂ = −(−3) ÷ 1 = 3；x₁x₂ = −1 ÷ 1 = −1。<br>
<b>第 3 步：套变形。</b>x₁² + x₂² = 3² − 2 × (−1) = 9 + 2 = <b>11</b>。</div>
<div class="ex"><b>例题 2</b>　方程 x² + mx − 8 = 0 的一个根是 2，求另一个根。<br><br>
<b>第 1 步：用两根之积。</b>x₁ × x₂ = c ÷ a = −8。<br>
<b>第 2 步：</b>已知一个根是 2，所以另一个根 = −8 ÷ 2 = <b>−4</b>。<br>
<small>（比先把 2 代进去求 m、再解方程快多了）</small></div>
<details class="try"><summary>试一试：x² − 4x + 2 = 0，求 1/x₁ + 1/x₂。</summary><div>
<details class="try"><summary>先看提示</summary><div>先算和 = 4、积 = 2，再用 (和) ÷ (积)。</div></details>
答案：4 ÷ 2 = 2。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>应用题：增长率和面积</h3>
<p><b>增长率问题。</b>先理解"增长 10%"：原来 100，增长 10% 就是 100 × (1 + 10%) = 110。再增长 10%，就是 110 × (1 + 10%) = 121，也就是 100 × (1 + 10%)²。</p>
<p>所以：原来是 a，<b>连续两次</b>增长，每次增长率都是 x，最后变成 b：</p>
<p style="text-align:center;font-size:17px"><b>a × (1 + x)² = b</b>　　（如果是下降，就是 a × (1 − x)² = b）</p>
<div class="ex"><b>例题</b>　一个账号的粉丝两个月从 1000 涨到 1210，平均每个月增长百分之几？<br><br>
<b>第 1 步：设未知数。</b>设每月增长率为 x。<br>
<b>第 2 步：列方程。</b>1000 × (1 + x)² = 1210。<br>
<b>第 3 步：解。</b>两边除以 1000：(1 + x)² = 1.21 → 1 + x = 1.1 或 1 + x = −1.1 → x = 0.1 或 x = −2.1。<br>
<b>第 4 步：检验。</b>增长率不能是 −2.1（−210%），舍去。所以 x = 0.1 = <b>10%</b>。</div>
<div class="warn">⚠️ 应用题解出两个答案以后一定要<b>检验</b>：长度不能是负数，百分率要合理，人数要是整数。不合理的答案写"舍去"。</div>
<p><b>面积问题。</b>思路：设一条边为 x，用 x 把另一条边表示出来，再列"长 × 宽 = 面积"。</p>
<div class="ex"><b>例题</b>　用 20 米长的篱笆围一个长方形菜园，面积要 21 平方米，长和宽各是多少？<br><br>
<b>第 1 步：</b>周长 20，所以长 + 宽 = 10。设长为 x，宽就是 10 − x。<br>
<b>第 2 步：</b>x(10 − x) = 21，展开整理：x² − 10x + 21 = 0。<br>
<b>第 3 步：</b>分解 (x − 3)(x − 7) = 0，x = 3 或 7。<br>
<b>第 4 步：检验。</b>x = 7 时宽是 3；x = 3 时宽是 7，其实是同一个长方形。长比宽大，所以长 <b>7 米</b>、宽 <b>3 米</b>。</div>
</div>

<a data-quiz="math-06">基础练习：方程进阶</a>

<div class="sec" id="m4"><h3><span class="n">04</span>配方：求式子的最小值</h3>
<p><b>问题：</b>x² − 6x + 11，x 取多少时它最小？最小是多少？</p>
<p><b>思路：</b>任何数的平方都 ≥ 0，最小就是 0。如果能把式子写成 <b>(某个东西)² + 一个数</b> 的样子，那么平方那部分等于 0 的时候，整个式子就最小。这个变形叫<b>配方</b>。</p>
<p><b>配方三步</b>（以 x² − 6x + 11 为例）：</p>
<div class="step"><i>1</i><div><b>看 x 前面的数，取一半：</b>−6 的一半是 −3。</div></div>
<div class="step"><i>2</i><div><b>写成平方：</b>(x − 3)²。把它展开是 x² − 6x + 9，前两项和原式一样，但多出来一个 9。</div></div>
<div class="step"><i>3</i><div><b>把多出来的减掉：</b>x² − 6x + 11 = (x − 3)² − 9 + 11 = <b>(x − 3)² + 2</b>。</div></div>
<p><b>下结论：</b>(x − 3)² 最小是 0（当 x = 3 时），所以整个式子最小是 0 + 2 = <b>2</b>。</p>
<div class="ex"><b>例题（x² 前面有数）</b>　求 2x² − 8x + 3 的最小值。<br><br>
<b>第 1 步：先把 2 提出来</b>（只提前两项）：2(x² − 4x) + 3。<br>
<b>第 2 步：括号里配方。</b>−4 的一半是 −2：x² − 4x = (x − 2)² − 4。<br>
<b>第 3 步：代回去。</b>2[(x − 2)² − 4] + 3 = 2(x − 2)² − 8 + 3 = 2(x − 2)² − 5。<br>
<b>第 4 步：</b>x = 2 时平方部分是 0，最小值 = <b>−5</b>。</div>
<details class="try"><summary>试一试：x² + 4x + 7 的最小值是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>4 的一半是 2，写成 (x + 2)²，展开多了 4，减掉。</div></details>
答案：(x + 2)² − 4 + 7 = (x + 2)² + 3，最小值 3（x = −2 时）。</div></details>
<div class="why">🤔 这和周二学的二次函数是同一件事：y = (x − 3)² + 2 的顶点就是 (3, 2)，最低点的 y 值就是最小值 2。<b>配方 = 找顶点。</b></div>
</div>

<div class="sum"><b>📌 今天学了 4 件事</b><br>
① Δ = b² − 4ac：大于 0 两个不等根，等于 0 两个相等根，小于 0 没有实数根；x² 前的系数有字母，要加"≠ 0"<br>
② 两根之和 = −b ÷ a，两根之积 = c ÷ a；x₁² + x₂² = (和)² − 2 × 积<br>
③ 增长率：a(1 + x)² = b；应用题解完要检验，不合理的舍去<br>
④ 配方三步：取一半 → 写成平方 → 减掉多出来的；配方后就能看出最小值</div>
<a data-quiz="math-07">挑战题：方程进阶</a>
`},

// ======================= 英语 =======================
{id: 'en', icon: '🔤', title: '英语：单词 + 定语从句 + 听力', time: '约 75 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 5：在香港读大学的第一周（约 15 分钟）</h3>
<p>讲一个女生去香港读大学的故事——说不定就是三年后的你。</p>
<a data-quiz="vocab-05">单词课 5</a></div>

<div class="sec" id="e2"><h3><span class="n">02</span>语法：定语从句（约 15 分钟读）</h3>
<p class="lede">定语从句就是<b>用一个句子来修饰名词</b>，相当于中文的"……的"。</p>
<div class="ex">the girl <b>who is singing</b>　= <b>正在唱歌的</b>女孩<br>the book <b>which I bought yesterday</b>　= <b>我昨天买的</b>书</div>
<p>中文把"……的"放在名词<b>前面</b>，英文把从句放在名词<b>后面</b>。被修饰的名词叫<b>先行词</b>。</p>
<p><b>用哪个词引导？看先行词是什么：</b></p>
<table class="t"><tr><th>引导词</th><th>先行词</th><th>例子</th></tr>
<tr><td>who</td><td>人</td><td>the man <b>who</b> lives next door</td></tr>
<tr><td>which</td><td>物</td><td>the phone <b>which</b> is on the desk</td></tr>
<tr><td>that</td><td>人或物都行</td><td>the film <b>that</b> we watched</td></tr>
<tr><td>whose</td><td>"……的"（所属）</td><td>a friend <b>whose</b> father is a pilot（他的爸爸）</td></tr>
<tr><td>where</td><td>地点（从句里不缺主语和宾语）</td><td>the town <b>where</b> I was born</td></tr></table>
<p><b>最难的一点：where 还是 which/that？</b>别看先行词，<b>看从句缺不缺东西</b>：</p>
<ul><li>This is the park <b>where</b> we played.　→ we played 已经完整，不缺 → where</li>
<li>This is the park <b>that</b> we visited.　→ we visited <b>什么</b>？缺宾语 → which / that</li></ul>
<div class="warn">⚠️ 常见错误：从句里重复主语。<br>❌ The man who <b>he</b> lives next door is a doctor. → ✅ The man who lives next door is a doctor.（who 已经代替了 he）</div>
<details class="try"><summary>试一试：I have a cousin ___ makes games.</summary><div>who（或 that）。先行词 cousin 是人，从句缺主语。</div></details>
<details class="try"><summary>试一试：This is the room ___ I sleep.</summary><div>where。I sleep 完整，不缺主语宾语，表示地点。</div></details>
<div class="sum"><b>📌 三步做题</b>：① 找先行词（人 / 物）② 看从句缺什么（缺主语宾语 → who/which/that；不缺 → where；"谁的" → whose）③ 从句里别重复主语。</div>
<a data-quiz="en-05">语法 + 阅读练习</a></div>

<div class="sec" id="e3"><h3><span class="n">03</span>听力：BBC 6 分钟英语《为什么我们爱吃饺子》（约 20 分钟）</h3>
<p>每天一集 BBC 的《6 Minute English》：两个主持人聊一个话题，教 6 个地道的词。点题目页最上面的按钮去 B站 看指定的那一集（视频带中英字幕）。</p>
<div class="step"><i>1</i><div><b>先打开题目，把 12 道题读一遍</b>，知道要听什么。</div></div>
<div class="step"><i>2</i><div><b>第一遍：只听不看字幕</b>，眼睛看题目，能答多少答多少。</div></div>
<div class="step"><i>3</i><div><b>第二遍：看字幕</b>，把没听懂的补上。注意视频开头会问一个问题，答案在<b>最后</b>才公布。</div></div>
<div class="step"><i>4</i><div>看完马上回来交卷。<b>只看这一集</b>，别在 B站 刷别的视频。</div></div>
<div class="tip">💡 每集结尾会把 6 个新词再讲一遍，题目里的"单词"部分就考这几个。</div>
<a data-quiz="bbc-02">BBC 6 分钟英语</a></div>
`},

// ======================= 软件 =======================
{id: 'app', icon: '🛠️', title: '软件：酷家乐灯光 + 美术一点透视', time: '约 30 分钟', html: `
<div class="sec lesson" id="d6-kjl"><h3><span class="n">01</span>酷家乐 第 5 课：灯光和效果图（约 15 分钟）</h3>
<p class="lede">昨天配好了颜色，今天打灯、出图。做完这一课，就可以交订单「我的理想卧室」了。</p>
<p><b>原理 1：三层照明</b>（设计师不会只装一个吸顶灯）</p>
<table class="t"><tr><th>层</th><th>作用</th><th>灯</th></tr>
<tr><td>主照明</td><td>照亮整个房间</td><td>吸顶灯、筒灯</td></tr>
<tr><td>辅助照明</td><td>照亮一块要用的地方</td><td>台灯、床头灯、落地灯</td></tr>
<tr><td>重点照明</td><td>突出某样东西，做氛围</td><td>射灯照挂画、柜子里的灯带</td></tr></table>
<p><b>原理 2：色温</b>（灯光的"冷暖"，单位 K）</p>
<ul><li><b>暖光</b> 2700–3000K（暖黄）：放松、好睡觉 → 卧室、客厅</li><li><b>中性光</b> 4000K（自然白）：书桌、看书</li><li><b>冷光</b> 5000K 以上（冷白）：提神 → 厨房、办公室</li></ul>
<p><b>原理 3：好的效果图选什么角度</b></p>
<ul><li>站在门口看进去（看整体）</li><li>从床的位置看书桌那一侧（看另一面）</li><li>一个局部特写（床头、书桌角落，看细节）</li></ul>
<p><b>动手：</b></p>
<div class="step"><i>1</i><div>给卧室加一盏吸顶灯 + 一盏床头灯 + 一处灯带或射灯。</div></div>
<div class="step"><i>2</i><div>把灯光调成暖光。</div></div>
<div class="step"><i>3</i><div>按上面 3 个角度摆相机，渲染出图。</div></div>
<div class="tip">📤 出好的 3 张图就是订单「我的理想卧室」的作品，发到工作室群。</div>
<div data-ck="d6-kjl"></div></div>

<div class="sec lesson" id="d6-art"><h3><span class="n">02</span>美术 第 1 课：一点透视（约 15 分钟）</h3>
<p class="lede">为什么有的房间画出来是"平的"，有的像能走进去？秘诀是<b>透视</b>。今天学最简单的一种：一点透视。</p>
<p><b>三个词：</b></p>
<ul><li><b>视平线</b>：和你眼睛一样高的那条水平线。站着看，视平线高；坐着看，视平线低。</li>
<li><b>消失点</b>：视平线上的一个点。所有<b>往远处延伸</b>的线，最后都会汇聚到这个点（就像站在铁轨中间，两条铁轨在远处合成一个点）。</li>
<li><b>近大远小</b>：一样大的东西，离得越远画得越小。</li></ul>
<svg class="fig" viewBox="0 0 400 260" font-size="12" font-family="sans-serif">
 <rect x="20" y="20" width="360" height="220" fill="#fdf6e8" stroke="#2b2622" stroke-width="2"/>
 <rect x="140" y="90" width="120" height="80" fill="#fff" stroke="#2b2622" stroke-width="2"/>
 <g stroke="#2b2622" stroke-width="2"><line x1="20" y1="20" x2="140" y2="90"/><line x1="380" y1="20" x2="260" y2="90"/><line x1="20" y1="240" x2="140" y2="170"/><line x1="380" y1="240" x2="260" y2="170"/></g>
 <g stroke="#e07a5f" stroke-dasharray="4 3"><line x1="140" y1="90" x2="200" y2="130"/><line x1="260" y1="90" x2="200" y2="130"/><line x1="140" y1="170" x2="200" y2="130"/><line x1="260" y1="170" x2="200" y2="130"/><line x1="165" y1="175.5" x2="200" y2="130"/><line x1="102" y1="175.5" x2="200" y2="130"/></g>
 <line x1="20" y1="130" x2="380" y2="130" stroke="#4a7fc1" stroke-width="1.5" stroke-dasharray="8 4"/>
 <rect x="175" y="105" width="50" height="30" fill="#e1ebf7" stroke="#2b2622"/>
 <polygon points="60,195 150,195 165,175.5 102,175.5" fill="#fbe6df" stroke="#2b2622" stroke-width="1.5"/>
 <polygon points="150,195 165,175.5 165,196.5 150,225" fill="#f3cfc4" stroke="#2b2622" stroke-width="1.5"/>
 <rect x="60" y="195" width="90" height="30" fill="#fbe6df" stroke="#2b2622" stroke-width="1.5"/>
 <circle cx="200" cy="130" r="4" fill="#e07a5f"/>
 <text x="207" y="146" fill="#e07a5f">消失点</text><text x="300" y="124" fill="#4a7fc1">视平线</text><text x="185" y="86" fill="#5b524a">后墙</text><text x="85" y="214" fill="#5b524a">床</text><text x="178" y="123" fill="#4a7fc1" font-size="10">窗</text>
</svg>
<p><b>规则只有三条：</b></p>
<ol><li><b>横线</b>保持水平（后墙的上下边、床的前边）</li><li><b>竖线</b>保持竖直（墙角、床腿）</li><li><b>往深处去的线</b>，全部连到消失点（地板和墙的交线、床的侧边）</li></ol>
<p><b>动手（纸笔或 Procreate 都行，用尺子）：</b></p>
<div class="step"><i>1</i><div>画一条横线当视平线，在中间点一个消失点。</div></div>
<div class="step"><i>2</i><div>在消失点周围画一个长方形，这是后墙。</div></div>
<div class="step"><i>3</i><div>从后墙的四个角，往画面的四个角拉线：地板、天花、两面侧墙就出来了。</div></div>
<div class="step"><i>4</i><div>在地板上画一张床：先画前面的长方形，再从它的上面两个角往消失点连线，截一段，就有了床的厚度和长度。</div></div>
<div class="step"><i>5</i><div>后墙上加一扇窗。完成后用尺子检查：每条往深处的线延长后，是不是都穿过消失点？</div></div>
<div class="tip">📤 想多赚点？画好以后可以接订单「一点透视的卧室」，把这张练习画完整（加家具、加明暗）。</div>
<div data-ck="d6-art"></div></div>
`},
  ],

  checks: {
    'd6-kjl': {title: '酷家乐第 5 课：灯光和效果图', qs: [
      {q: '卧室用暖光还是冷光？为什么？书桌那里呢？', a: '卧室用<b>暖光</b>（暖黄，约 2700–3000K），让人放松、好入睡。书桌看书用中性光（4000K 左右）更清楚，冷白光提神，适合厨房、办公室。', pts: ['卧室用暖光', '原因：放松 / 好睡觉', '知道书桌或工作区用更白的光']},
      {q: '三层照明是哪三层？各举一个灯的例子。', a: '主照明（吸顶灯，照亮整间房）、辅助照明（台灯、床头灯，照亮局部）、重点照明（射灯、灯带，突出挂画或柜子）。', pts: ['主照明 + 例子', '辅助 / 局部照明 + 例子', '重点 / 氛围照明 + 例子']},
      {q: '出效果图时，为什么要从 3 个不同角度出图？', a: '一张图只能看到房间的一部分。几个角度合起来，客户才能看清整体布局，也能看到细节。', pts: ['一张图看不全', '既要看整体，也要看细节']},
    ]},
    'd6-art': {title: '美术第 1 课：一点透视', qs: [
      {q: '什么是视平线？你站着画和坐着画，视平线有什么不同？', a: '视平线是和眼睛一样高的那条水平线。站着画视平线高，坐着画视平线低。', pts: ['和眼睛一样高', '是一条水平线', '站着高、坐着低']},
      {q: '一点透视里，哪些线要连到消失点？哪些线保持不变？', a: '往远处（深处）延伸的线都连到消失点；横线保持水平，竖线保持竖直。', pts: ['往深处的线连到消失点', '横线保持水平', '竖线保持竖直']},
      {q: '画完用尺子检查你的画：往深处的线延长后都穿过消失点了吗？哪一条没对上？', a: '没有标准答案。用尺子把每条往深处的线延长，交不到消失点的那条就是画歪了，下次画之前先从消失点拉辅助线。', pts: ['真的用尺子检查了', '写出了哪里没对上（或者确认全部对上）']},
    ]},
  },
};
