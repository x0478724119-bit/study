// 第 6 天（周五）手册：数学 一元二次方程进阶 · 英语 定语从句 · 软件 酷家乐灯光 + 美术一点透视
window.BOOK = {
  intro: '今天大约 3 小时：英语 75 分钟、数学 75 分钟、软件 30 分钟。点下面的「数学 / 英语 / 软件」切换科目。做完就是周末！',
  parts: [

// ======================= 数学 =======================
{id: 'math', icon: '📐', title: '数学：一元二次方程进阶', time: '约 75 分钟', html: `
<p class="lede">摸底时方程错了 2 道，今天补上。这一章也是 A-Level 数学第一本书（Pure 1）的开头：<b>判别式、根与系数、配方</b>在 A-Level 里天天用。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>判别式 Δ：不解方程就知道有几个根</h3>
<p>方程 ax² + bx + c = 0（a ≠ 0），<b>Δ = b² − 4ac</b>：</p>
<table class="t"><tr><th>Δ</th><th>根的情况</th></tr><tr><td>Δ &gt; 0</td><td>两个<b>不相等</b>的实数根</td></tr><tr><td>Δ = 0</td><td>两个<b>相等</b>的实数根</td></tr><tr><td>Δ &lt; 0</td><td><b>没有</b>实数根</td></tr></table>
<p>"有实数根"= Δ ≥ 0（包括相等的情况）。</p>
<div class="ex"><b>例题</b>　x² + 2x + k = 0 有两个不相等的实数根，求 k 的范围。<br>Δ = 2² − 4·1·k = 4 − 4k &gt; 0 → <b>k &lt; 1</b>。</div>
<div class="warn">⚠️ 陷阱：如果 x² 前面的系数里有字母，比如 (k − 1)x² + 2x + 1 = 0，题目说"一元二次方程"或"两个根"，就要<b>额外写上 k − 1 ≠ 0</b>。最后答案是两个条件一起。</div>
<details class="try"><summary>试一试：x² − 6x + m = 0 有两个相等的实数根，m = ?</summary><div>Δ = 36 − 4m = 0 → m = 9。（此时方程是 (x − 3)² = 0）</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>根与系数的关系（韦达定理）</h3>
<p>如果 x₁、x₂ 是 ax² + bx + c = 0 的两个根，那么：</p>
<p style="text-align:center;font-size:18px"><b>x₁ + x₂ = −b/a　　x₁ · x₂ = c/a</b></p>
<div class="ex"><b>验证一下</b>　x² − 5x + 6 = 0 的根是 2 和 3。<br>两根之和 = 5 = −(−5)/1 ✓　两根之积 = 6 = 6/1 ✓</div>
<div class="warn">⚠️ 和是 <b>−b/a</b>，前面有负号！最常错的地方。另外，用之前要确认 Δ ≥ 0（有根才能用）。</div>
<p><b>它有什么用？不解方程，直接算和根有关的式子。</b>要记两个变形：</p>
<ul><li><b>x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂</b></li><li><b>1/x₁ + 1/x₂ = (x₁ + x₂) ÷ (x₁x₂)</b></li><li>(x₁ − x₂)² = (x₁ + x₂)² − 4x₁x₂</li></ul>
<div class="ex"><b>例题</b>　x₁、x₂ 是 x² − 3x − 1 = 0 的两根，求 x₁² + x₂²。<br>x₁ + x₂ = 3，x₁x₂ = −1。<br>x₁² + x₂² = 3² − 2 × (−1) = 9 + 2 = <b>11</b>。</div>
<div class="ex"><b>例题</b>　x² + mx − 8 = 0 的一个根是 2，求另一个根。<br>两根之积 = −8，所以另一个根 = −8 ÷ 2 = <b>−4</b>。（比把 2 代进去求 m 再解方程快多了）</div>
<details class="try"><summary>试一试：x² − 4x + 2 = 0，求 1/x₁ + 1/x₂。</summary><div>和 = 4，积 = 2，所以 1/x₁ + 1/x₂ = 4 ÷ 2 = 2。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>应用题：增长率和面积</h3>
<p><b>增长率模型：</b>原来是 a，连续两次增长，每次增长率都是 x，最后是 b：</p>
<p style="text-align:center;font-size:17px"><b>a(1 + x)² = b</b>　　（下降就是 a(1 − x)² = b）</p>
<div class="ex"><b>例题</b>　一个账号粉丝从 1000 涨到 1210，用了两个月，平均每月增长率是多少？<br>1000(1 + x)² = 1210 → (1 + x)² = 1.21 → 1 + x = ±1.1<br>x = 0.1 或 x = −2.1（增长率不能是负的，舍去）→ <b>10%</b>。</div>
<div class="warn">⚠️ 应用题解出两个根后一定要<b>检验</b>：长度不能是负数、百分率要符合实际、人数要是整数。不合理的写"舍去"。</div>
<p><b>面积题：</b>设一条边是 x，用 x 表示另一条边，列"长 × 宽 = 面积"。</p>
<div class="ex"><b>例题</b>　用 20 米的篱笆围一个长方形，面积 21 平方米，长和宽是多少？<br>长 + 宽 = 10，设长为 x，宽为 10 − x：x(10 − x) = 21 → x² − 10x + 21 = 0 → (x − 3)(x − 7) = 0<br>x = 7 时宽 3；x = 3 时宽 7（就是同一个长方形）→ 长 <b>7 米</b>，宽 <b>3 米</b>。</div>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>配方：求最小值（A-Level 必考）</h3>
<p>把 x² + bx + c 写成 <b>(x + p)² + q</b> 的样子，叫<b>配方</b>（英文 completing the square）。</p>
<div class="step"><i>1</i><div>看 x 的系数，<b>取一半</b>：x² − 6x 的一半是 −3。</div></div>
<div class="step"><i>2</i><div>写成 (x − 3)²，它展开是 x² − 6x + 9，比原来多了 9，所以要<b>减掉 9</b>。</div></div>
<div class="ex"><b>例题</b>　x² − 6x + 11 = (x − 3)² − 9 + 11 = <b>(x − 3)² + 2</b><br>因为 (x − 3)² ≥ 0，所以整个式子 ≥ 2：<b>最小值是 2</b>，在 x = 3 时取到。</div>
<p>如果 x² 前面有系数，先把它提出来：2x² − 8x + 3 = 2(x² − 4x) + 3 = 2[(x − 2)² − 4] + 3 = 2(x − 2)² − 5，最小值 −5。</p>
<details class="try"><summary>试一试：x² + 4x + 7 的最小值是多少？</summary><div>(x + 2)² − 4 + 7 = (x + 2)² + 3，最小值 3（x = −2 时）。</div></details>
<div class="why">🤔 这和周二学的二次函数是同一件事：y = (x − 3)² + 2 的顶点就是 (3, 2)。配方 = 找顶点。</div>
</div>

<div class="why"><b>🔤 英文术语（A-Level 考试全是英文，先混个脸熟）</b><br>
quadratic equation 一元二次方程 · root / solution 根 · coefficient 系数<br>
discriminant 判别式（b² − 4ac）· real roots 实数根 · equal roots 相等的根<br>
sum of roots 两根之和 · product of roots 两根之积<br>
completing the square 配方 · minimum value 最小值 · percentage increase 增长率</div>
<div class="sum"><b>📌 今天的小结</b><br>
① Δ = b² − 4ac：&gt;0 两个不等根，=0 两个相等根，&lt;0 没有实数根；二次项系数有字母要写 ≠ 0<br>
② x₁ + x₂ = −b/a，x₁x₂ = c/a；x₁² + x₂² = (和)² − 2积<br>
③ 增长率 a(1 + x)² = b；应用题解完要检验、舍去不合理的根<br>
④ 配方：一半、平方、减回去 → 最小值</div>
<a data-quiz="math-06">基础练习：方程进阶</a>
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
