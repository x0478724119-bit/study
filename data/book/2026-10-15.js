// 第 5 天（周四）手册：数学 直线和圆、切线 · 英语 现在完成时 · 软件 酷家乐配色 + Swift 条件代码
window.BOOK = {
  intro: '今天大约 3 小时：英语 75 分钟、数学 75 分钟、软件 30 分钟。点下面的「数学 / 英语 / 软件」切换科目，顺序随你。',
  parts: [

// ======================= 数学 =======================
{id: 'math', icon: '📐', title: '数学：直线和圆、切线', time: '约 75 分钟', html: `
<p class="lede">昨天学了圆"里面"的东西（弦、圆周角），今天看圆"外面"的一条直线和圆是什么关系。最重要的是<b>切线</b>：直线刚好擦着圆过去。还是老规矩：大白话 → 一步一步的例题 → 自己试（先看提示）。前 4 节学完做基础题，第 5 节学完做挑战题。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>直线和圆的三种关系</h3>
<p><b>先想象：</b>桌上放一个圆盘，拿一把尺子从远处慢慢推向圆盘。</p>
<ol><li>一开始尺子碰不到圆盘：没有交点；</li><li>推到某个位置，尺子<b>刚好擦到</b>圆盘边上的一个点：一个交点；</li><li>再往里推，尺子就压在圆盘上了，和圆的边有两个交点。</li></ol>
<svg class="fig" viewBox="0 0 420 160" font-size="13" font-family="sans-serif">
 <g fill="none" stroke="#e07a5f" stroke-width="2"><circle cx="70" cy="70" r="40"/><circle cx="210" cy="70" r="40"/><circle cx="350" cy="70" r="40"/></g>
 <g stroke="#2b2622" stroke-width="2"><line x1="10" y1="135" x2="130" y2="135"/><line x1="150" y1="110" x2="270" y2="110"/><line x1="290" y1="92" x2="410" y2="92"/></g>
 <g stroke="#4a7fc1" stroke-dasharray="4 3" stroke-width="1.5"><line x1="70" y1="70" x2="70" y2="135"/><line x1="210" y1="70" x2="210" y2="110"/><line x1="350" y1="70" x2="350" y2="92"/></g>
 <g fill="#2b2622"><circle cx="70" cy="70" r="2.5"/><circle cx="210" cy="70" r="2.5"/><circle cx="350" cy="70" r="2.5"/><circle cx="210" cy="110" r="3.5" fill="#3d9970"/><circle cx="317" cy="92" r="3.5" fill="#3d9970"/><circle cx="383" cy="92" r="3.5" fill="#3d9970"/></g>
 <g fill="#4a7fc1"><text x="75" y="108">d</text><text x="215" y="95">d</text><text x="355" y="86">d</text></g>
 <g text-anchor="middle" fill="#2b2622"><text x="70" y="155">相离：0 个交点</text><text x="210" y="155">相切：1 个交点</text><text x="350" y="155">相交：2 个交点</text></g>
</svg>
<p><b>怎么判断是哪种？</b>不用画图数交点，只要比较两个长度：</p>
<ul><li><b>d</b> = 圆心到直线的距离（从圆心往直线画垂线，垂线有多长）；</li><li><b>r</b> = 半径。</li></ul>
<table class="t"><tr><th>比较</th><th>关系</th><th>怎么理解</th></tr>
<tr><td>d &gt; r</td><td>相离</td><td>直线离圆心比半径还远，够不着圆</td></tr>
<tr><td>d = r</td><td>相切</td><td>直线离圆心正好一个半径，刚好擦到</td></tr>
<tr><td>d &lt; r</td><td>相交</td><td>直线离圆心比半径近，穿进圆里去了</td></tr></table>
<div class="ex"><b>例题</b>　圆的半径是 5，圆心到直线 l 的距离是 3，l 和圆是什么关系？<br><br>
<b>第 1 步：找 d 和 r。</b>d = 3，r = 5。<br>
<b>第 2 步：比大小。</b>3 &lt; 5，也就是 d &lt; r。<br>
<b>第 3 步：下结论。</b>直线离圆心比半径近 → <b>相交</b>，有 2 个交点。</div>
<details class="try"><summary>试一试：半径 6，圆心到直线的距离 6.5，什么关系？</summary><div>
<details class="try"><summary>先看提示</summary><div>比一比 6.5 和 6 谁大。</div></details>
答案：6.5 &gt; 6，d &gt; r，相离，没有交点。</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>切线最重要的性质：和半径垂直</h3>
<p>直线和圆<b>刚好碰到一个点</b>的时候，这条直线叫<b>切线</b>，碰到的那个点叫<b>切点</b>。</p>
<p>切线有一个最重要的性质：<b>连接圆心和切点（这是一条半径），这条半径一定和切线垂直，成 90°。</b></p>
<svg class="fig" viewBox="0 0 320 170" font-size="14" font-family="sans-serif">
 <circle cx="110" cy="105" r="55" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="20" y1="50" x2="300" y2="50" stroke="#2b2622" stroke-width="2"/>
 <line x1="110" y1="105" x2="110" y2="50" stroke="#4a7fc1" stroke-width="2"/>
 <line x1="110" y1="105" x2="260" y2="50" stroke="#8a7f74" stroke-width="1.5" stroke-dasharray="5 3"/>
 <path d="M110 62 h12 v-12" fill="none" stroke="#2b2622"/>
 <circle cx="110" cy="105" r="3" fill="#2b2622"/><circle cx="110" cy="50" r="3" fill="#2b2622"/><circle cx="260" cy="50" r="3" fill="#2b2622"/>
 <text x="96" y="122">O</text><text x="100" y="42">A</text><text x="262" y="42">P</text><text x="88" y="82" fill="#4a7fc1">r</text><text x="120" y="160" fill="#5b524a" font-size="12">PA 是切线，A 是切点，OA ⊥ PA</text>
</svg>
<details class="try"><summary>为什么一定垂直？（选看）</summary><div>从圆心到切线上各个点，切点 A 是最近的（其他点都在圆外面，离圆心比半径远）。而"从一个点到一条直线，最短的就是垂线"，所以 OA 就是垂线，OA ⊥ 切线。</div></details>
<p><b>这个性质怎么用？</b>只要看到切线，就把<b>圆心和切点连起来</b>，马上得到一个<b>直角</b>。有直角就能用<b>勾股定理</b>（两条直角边的平方和 = 斜边的平方）。</p>
<div class="ex"><b>例题</b>　PA 切 ⊙O 于点 A，OA = 3，OP = 5，求 PA 的长。<br><br>
<b>第 1 步：找直角。</b>PA 是切线，A 是切点 → OA ⊥ PA → ∠OAP = 90°，三角形 OAP 是直角三角形。<br>
<b>第 2 步：分清斜边。</b>直角在 A，对着直角的边 OP 是斜边；OA 和 PA 是两条直角边。<br>
<b>第 3 步：列勾股定理。</b>OA² + PA² = OP²，也就是 3² + PA² = 5²，9 + PA² = 25。<br>
<b>第 4 步：解。</b>PA² = 16，PA = <b>4</b>。</div>
<div class="tip">💡 常见勾股数：3-4-5、6-8-10、5-12-13、8-15-17。看到这些数字，基本就是直角三角形，可以直接写答案。</div>
<details class="try"><summary>试一试：PA 切 ⊙O 于 A，半径 5，PA = 12，求 OP。</summary><div>
<details class="try"><summary>先看提示</summary><div>OA ⊥ PA，OP 是斜边。5² + 12² = OP²。</div></details>
答案：OP² = 25 + 144 = 169，OP = 13。（5-12-13）</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>怎么证明一条直线是切线</h3>
<p>反过来：怎么判断一条直线是不是切线？要同时满足<b>两个条件</b>：</p>
<ol><li>直线经过圆上的一个点（这个点和圆心连起来是一条<b>半径</b>）；</li><li>直线和这条半径<b>垂直</b>。</li></ol>
<p>证明题只有两种情况，看题目给了什么：</p>
<table class="t"><tr><th>题目情况</th><th>怎么做</th><th>口诀</th></tr>
<tr><td>已经知道直线和圆<b>有一个公共点</b></td><td>把圆心和这个点连起来（就是半径），再证明它和直线垂直</td><td><b>连半径，证垂直</b></td></tr>
<tr><td><b>不知道</b>有没有公共点</td><td>从圆心往直线画一条垂线，再证明这条垂线的长度等于半径（也就是 d = r）</td><td><b>作垂直，证半径</b></td></tr></table>
<div class="ex"><b>例题</b>　D 是 ⊙O 上的一点，直线 CD 经过点 D，已知 ∠ODC = 90°。求证：CD 是 ⊙O 的切线。<br><br>
<b>想：</b>题目说了 D 在圆上，是公共点 → 用"连半径，证垂直"。<br>
<b>写：</b><br>① 连接 OD。因为 D 在 ⊙O 上，所以 OD 是半径。<br>② 因为 ∠ODC = 90°，所以 OD ⊥ CD。<br>③ 直线 CD 经过半径 OD 的外端 D，并且垂直于 OD，所以 <b>CD 是 ⊙O 的切线</b>。</div>
<div class="warn">⚠️ 常见扣分：只写了"OD ⊥ CD 所以是切线"，忘了说明 D 在圆上（OD 是半径）。<b>两个条件都要写出来</b>。</div>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>切线长定理：两条切线一样长</h3>
<p>从圆外一个点 P，可以给圆画<b>两条</b>切线，切点分别是 A 和 B。线段 PA、PB 的长度叫<b>切线长</b>。</p>
<svg class="fig" viewBox="0 0 340 200" font-size="14" font-family="sans-serif">
 <circle cx="110" cy="100" r="50" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <g stroke="#2b2622" stroke-width="2"><line x1="300" y1="100" x2="123.2" y2="51.8"/><line x1="300" y1="100" x2="123.2" y2="148.2"/></g>
 <g stroke="#4a7fc1" stroke-width="1.8"><line x1="110" y1="100" x2="123.2" y2="51.8"/><line x1="110" y1="100" x2="123.2" y2="148.2"/></g>
 <line x1="110" y1="100" x2="300" y2="100" stroke="#8a7f74" stroke-dasharray="5 3"/>
 <g fill="#2b2622"><circle cx="110" cy="100" r="3"/><circle cx="123.2" cy="51.8" r="3"/><circle cx="123.2" cy="148.2" r="3"/><circle cx="300" cy="100" r="3"/></g>
 <text x="94" y="105">O</text><text x="118" y="42">A</text><text x="118" y="168">B</text><text x="306" y="105">P</text>
</svg>
<p><b>结论：PA = PB，两条切线一样长。</b>并且 PO 正好把 ∠APB 分成相等的两半。</p>
<details class="try"><summary>为什么？（选看）</summary><div>看两个三角形 OAP 和 OBP：OA = OB（都是半径），OP 是共同的边，∠OAP = ∠OBP = 90°（切线 ⊥ 半径）。两个直角三角形斜边和一条直角边对应相等，所以全等（HL），于是 PA = PB。</div></details>
<p><b>再算一个角：</b>四边形 OAPB 有四个角，加起来是 360°。其中 ∠OAP 和 ∠OBP 都是 90°，加起来 180°，所以剩下两个角加起来也是 180°：</p>
<p style="text-align:center;font-size:17px"><b>∠AOB + ∠APB = 180°</b></p>
<div class="ex"><b>例题</b>　PA、PB 分别切 ⊙O 于 A、B，∠APB = 60°，求 ∠AOB。<br><br>
<b>第 1 步：</b>∠OAP = ∠OBP = 90°（切线 ⊥ 半径）。<br>
<b>第 2 步：</b>四边形内角和 360°：∠AOB = 360° − 90° − 90° − 60° = <b>120°</b>。<br>
（熟练以后可以直接用 180° − 60° = 120°）</div>
<details class="try"><summary>试一试：上题里如果 PA = 5，那么弦 AB 多长？</summary><div>
<details class="try"><summary>先看提示</summary><div>PA = PB，∠APB = 60°。一个三角形两条边相等、夹角 60°，它是什么三角形？</div></details>
答案：三角形 PAB 是等边三角形，AB = 5。</div></details>
</div>

<a data-quiz="math-04">基础练习：切线</a>

<div class="sec" id="m5"><h3><span class="n">05</span>三角形的内切圆</h3>
<p>在三角形里面画一个圆，让它和三角形的<b>三条边都相切</b>（三条边都刚好擦到圆），这个圆就叫<b>内切圆</b>，圆心叫<b>内心</b>。</p>
<p><b>内心在哪？</b>内心到三条边的距离都相等（都等于内切圆的半径），而"到一个角两边距离相等的点"都在这个角的平分线上，所以<b>内心是三条角平分线的交点</b>。</p>
<p><b>怎么求内切圆的半径 r？</b>两种方法：</p>
<p><b>方法一（所有三角形都能用）：r = 2 × 面积 ÷ 周长</b></p>
<p class="s">为什么：从内心连向三个顶点，把大三角形切成 3 个小三角形。每个小三角形的底是大三角形的一条边，高都是 r。3 个小三角形面积加起来 = ½ × r × (三条边加起来) = ½ × r × 周长 = 大三角形面积。倒过来就是 r = 2 × 面积 ÷ 周长。</p>
<p><b>方法二（只适用于直角三角形）：r = (两条直角边之和 − 斜边) ÷ 2</b></p>
<div class="ex"><b>例题</b>　直角三角形三边是 3、4、5，求内切圆半径。<br><br>
<b>方法二：</b>直角边 3 和 4，斜边 5：r = (3 + 4 − 5) ÷ 2 = <b>1</b>。<br>
<b>方法一检查：</b>面积 = 3 × 4 ÷ 2 = 6，周长 = 3 + 4 + 5 = 12，r = 2 × 6 ÷ 12 = <b>1</b> ✓<br>
两种方法答案一样，考试时可以用一种算、另一种检查。</div>
<details class="try"><summary>试一试：直角三角形两条直角边是 6 和 8，内切圆半径是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>先用勾股定理算斜边：6-8-10。</div></details>
答案：r = (6 + 8 − 10) ÷ 2 = 2。</div></details>
</div>

<div class="sum"><b>📌 今天学了 5 件事</b><br>
① 比 d 和 r：d &gt; r 相离，d = r 相切，d &lt; r 相交<br>
② 看到切线 → 连圆心和切点 → 得到直角 → 勾股定理<br>
③ 证切线：有公共点就"连半径，证垂直"；没有就"作垂直，证半径"<br>
④ 两条切线：PA = PB，∠AOB + ∠APB = 180°<br>
⑤ 内切圆：内心是角平分线的交点；r = 2 × 面积 ÷ 周长；直角三角形 r = (a + b − c) ÷ 2</div>
<a data-quiz="math-05">挑战题：切线</a>
`},

// ======================= 英语 =======================
{id: 'en', icon: '🔤', title: '英语：单词 + 现在完成时 + 听力', time: '约 75 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 4：我的表哥做游戏（约 15 分钟）</h3>
<p>今天的文章讲一个游戏开发者怎么做出一款游戏。读的时候点划线的词，听发音、看中文。</p>
<a data-quiz="vocab-04">单词课 4</a></div>

<div class="sec" id="e2"><h3><span class="n">02</span>语法：现在完成时 vs 一般过去时（约 15 分钟读）</h3>
<p class="lede">这是中国学生最容易混的一对，也是雅思写作、口语天天要用的。</p>
<p><b>样子：</b>现在完成时 = <b>have / has + 过去分词</b>（I have finished. She has gone.）</p>
<p><b>核心区别：说话的人在看哪个时间。</b></p>
<table class="t"><tr><th></th><th>一般过去时</th><th>现在完成时</th></tr>
<tr><td>关注</td><td>过去某个时间发生了什么（和现在没关系）</td><td>过去的事<b>对现在</b>有什么影响 / 从过去<b>一直到现在</b></td></tr>
<tr><td>例子</td><td>I <b>lost</b> my key yesterday.（昨天丢的，讲故事）</td><td>I <b>have lost</b> my key.（现在没钥匙，进不了门）</td></tr>
<tr><td>信号词</td><td>yesterday, last week, ago, in 2020, when I was young</td><td>already, yet, ever, never, just, so far, for…, since…</td></tr></table>
<div class="warn">⚠️ 铁律：句子里有<b>具体的过去时间</b>（yesterday、last year、two days ago、When…?），就<b>只能用过去时</b>。<br>❌ I have seen him yesterday. → ✅ I saw him yesterday.<br>❌ When have you started? → ✅ When did you start?</div>
<p><b>for 和 since：</b>都表示"持续到现在"，配现在完成时。</p>
<ul><li><b>for + 一段时间</b>：for three years, for a long time</li><li><b>since + 一个时间点</b>：since 2020, since Monday, since I was ten</li></ul>
<div class="warn">⚠️ 短暂动词不能和 for/since 连用（买、来、死、离开都是一瞬间的事）：<br>❌ I have bought this phone for two years. → ✅ I <b>have had</b> this phone for two years.（buy → have）<br>❌ He has come here for a week. → ✅ He <b>has been</b> here for a week.（come → be）</div>
<p><b>gone to 和 been to：</b></p>
<ul><li>He <b>has gone to</b> Beijing. 他去北京了（人现在<b>不在这里</b>）</li><li>He <b>has been to</b> Beijing. 他去过北京（<b>回来了</b>）</li></ul>
<details class="try"><summary>试一试：I ___ (live) in this town since 2023.</summary><div>have lived。since 2023 = 从 2023 年一直到现在。</div></details>
<details class="try"><summary>试一试：She ___ (finish) the book last night.</summary><div>finished。last night 是具体的过去时间，只能用过去时。</div></details>
<div class="sum"><b>📌 一句话记住</b>：有具体过去时间 → 过去时；想说"到现在为止 / 对现在的影响" → 现在完成时。</div>
<a data-quiz="en-04">语法 + 阅读练习</a></div>

<div class="sec" id="e3"><h3><span class="n">03</span>听力：BBC 6 分钟英语《珍珠奶茶的来历》（约 20 分钟）</h3>
<p>每天一集 BBC 的《6 Minute English》：两个主持人聊一个话题，教 6 个地道的词。点题目页最上面的按钮去 B站 看指定的那一集（视频带中英字幕）。</p>
<div class="step"><i>1</i><div><b>先打开题目，把 12 道题读一遍</b>，知道要听什么。</div></div>
<div class="step"><i>2</i><div><b>第一遍：只听不看字幕</b>，眼睛看题目，能答多少答多少。</div></div>
<div class="step"><i>3</i><div><b>第二遍：看字幕</b>，把没听懂的补上。注意视频开头会问一个问题，答案在<b>最后</b>才公布。</div></div>
<div class="step"><i>4</i><div>看完马上回来交卷。<b>只看这一集</b>，别在 B站 刷别的视频。</div></div>
<div class="tip">💡 每集结尾会把 6 个新词再讲一遍，题目里的"单词"部分就考这几个。</div>
<a data-quiz="bbc-01">BBC 6 分钟英语</a></div>
`},

// ======================= 软件 =======================
{id: 'app', icon: '🛠️', title: '软件：酷家乐配色 + Swift 条件', time: '约 30 分钟', html: `
<div class="sec lesson" id="d5-kjl"><h3><span class="n">01</span>酷家乐 第 4 课：材质和配色（约 15 分钟）</h3>
<p class="lede">接着用你第 2、3 课画好、摆好家具的那间卧室。今天给它"穿衣服"。</p>
<p><b>先学原理：60-30-10 配色法</b>（设计师最常用的规则）</p>
<table class="t"><tr><th>占比</th><th>叫什么</th><th>用在哪</th></tr>
<tr><td>60%</td><td>主色</td><td>面积最大的：墙、地板、天花板</td></tr>
<tr><td>30%</td><td>辅助色</td><td>大家具：床、衣柜、窗帘、沙发</td></tr>
<tr><td>10%</td><td>点缀色</td><td>小东西：抱枕、挂画、花瓶、台灯</td></tr></table>
<div class="why">🤔 为什么？如果三种颜色一样多，眼睛不知道看哪儿，房间就显得乱。主色铺底，点缀色只出现几处，画面就有主次。</div>
<p><b>三个常见风格，选一个：</b></p>
<table class="t"><tr><th>风格</th><th>主色</th><th>辅助色</th><th>点缀色</th></tr>
<tr><td>奶油风</td><td>奶白、米色</td><td>浅木色</td><td>焦糖色、棕色</td></tr>
<tr><td>北欧</td><td>白、浅灰</td><td>原木色</td><td>墨绿、雾蓝</td></tr>
<tr><td>日式</td><td>米白</td><td>原木、竹</td><td>深灰、藏青</td></tr></table>
<div class="tip">💡 小房间墙面用<b>浅色</b>：浅色反光多，房间显得又亮又大；深色会让墙看起来"压过来"。</div>
<p><b>动手：</b></p>
<div class="step"><i>1</i><div>打开你的卧室方案，点一下<b>地板</b>，找"替换材质"，换成木地板。</div></div>
<div class="step"><i>2</i><div>点<b>墙面</b>，换成你选的风格的主色。</div></div>
<div class="step"><i>3</i><div>换<b>床品、窗帘</b>（辅助色），最后加 2–3 个<b>抱枕或挂画</b>（点缀色）。</div></div>
<div class="step"><i>4</i><div>切到 3D 看一眼：颜色是不是有主有次？</div></div>
<div data-ck="d5-kjl"></div></div>

<div class="sec lesson" id="d5-sw"><h3><span class="n">02</span>Swift 第 4 课：条件代码 if（约 15 分钟）</h3>
<p class="lede">打开 Swift Playgrounds →「学习编程 1」→「条件代码」这一章。</p>
<p>到现在为止，你的代码都是"一条一条照着做"。但如果宝石有时在、有时不在呢？代码需要<b>先看一看，再决定做什么</b>。这就是 <code>if</code>。</p>
<pre>if isOnGem {
    collectGem()      // 条件成立（true）时做这个
} else {
    moveForward()     // 条件不成立（false）时做这个
}</pre>
<ul><li><code>isOnGem</code> 是一个<b>条件</b>，它的值只有两种：<code>true</code>（真）或 <code>false</code>（假）。这种值叫 <b>Bool（布尔值）</b>。</li>
<li>花括号 <code>{ }</code> 里的代码只在条件成立时运行。</li><li><code>else</code> 是"否则"，可以不写。</li></ul>
<p>这一章常用的条件：<code>isOnGem</code>（在宝石上）、<code>isOnClosedSwitch</code>（在关着的开关上）、<code>isBlocked</code>（前面有墙）。</p>
<div class="tip">💡 if 可以放进 for 循环里：走 6 步，每走一步检查一次有没有宝石。这是这一章的核心套路。</div>
<pre>for i in 1 ... 6 {
    moveForward()
    if isOnGem {
        collectGem()
    }
}</pre>
<p><b>动手：</b>闯这一章的前 3 关。每关先想清楚"什么时候要做判断"，再写代码。</p>
<div data-ck="d5-sw"></div></div>
`},
  ],

  checks: {
    'd5-kjl': {title: '酷家乐第 4 课：材质和配色', qs: [
      {q: '60-30-10 配色法里，60% 的主色一般用在哪里？', a: '墙面、地板、天花板这些<b>面积最大</b>的地方。', pts: ['提到墙或地板（或天花板）', '知道是面积最大的部分']},
      {q: '房间很小，墙面选浅色还是深色？为什么？', a: '浅色。浅色反光多，让房间显得更亮、更大；深色会让墙看起来压过来，房间显小。', pts: ['选了浅色', '说出原因：显大 / 显亮 / 反光多']},
      {q: '你的卧室选了什么风格？主色、辅助色、点缀色分别是什么、用在哪？', a: '没有标准答案。例：奶油风 —— 主色奶白（墙和地板），辅助色浅木色（床和衣柜），点缀色焦糖色（抱枕和挂画）。', pts: ['写了风格', '三种颜色都写了', '点缀色用在小物件上']},
    ]},
    'd5-sw': {title: 'Swift 第 4 课：条件代码', qs: [
      {q: 'if 后面的条件（比如 isOnGem），它的值只能是哪两种？', a: '<code>true</code>（真）或 <code>false</code>（假），这种值叫 Bool（布尔值）。', pts: ['true / false（或真 / 假）']},
      {q: '用 Swift 写：如果在宝石上，就收集宝石；否则向前走一步。', a: '<pre style="margin:4px 0">if isOnGem {\n    collectGem()\n} else {\n    moveForward()\n}</pre>', pts: ['写了 if isOnGem', '花括号里是 collectGem()', '用了 else 和 moveForward()']},
      {q: '为什么需要 if？如果不用 if，遇到宝石位置会变的关卡会怎样？', a: '因为关卡里的情况会变（宝石位置随机），代码要先判断再行动。不用 if 就只能把步骤写死，宝石一换位置就失败。', pts: ['提到情况会变 / 随机', '先判断，再决定做什么']},
    ]},
  },
};
