// 第 5 天（周四）手册：数学 直线和圆、切线 · 英语 现在完成时 · 软件 酷家乐配色 + Swift 条件代码
window.BOOK = {
  intro: '今天大约 3 小时：英语 75 分钟、数学 75 分钟、软件 30 分钟。按顺序往下走就行。',
  parts: [

// ======================= 数学 =======================
{id: 'math', icon: '📐', title: '数学：直线和圆、切线', time: '约 75 分钟', html: `
<p class="lede">昨天学了圆里面的东西（弦、圆周角），今天看圆和外面的直线是什么关系。<b>切线</b>是这一章最重要的考点，A-Level 数学的"圆的坐标几何"也天天用到它。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>直线和圆的三种位置关系</h3>
<p>拿一把尺子在圆旁边慢慢往圆心移：一开始碰不到，然后刚好擦到一个点，再往里就穿过去、和圆有两个交点。</p>
<svg class="fig" viewBox="0 0 420 160" font-size="13" font-family="sans-serif">
 <g fill="none" stroke="#e07a5f" stroke-width="2"><circle cx="70" cy="70" r="40"/><circle cx="210" cy="70" r="40"/><circle cx="350" cy="70" r="40"/></g>
 <g stroke="#2b2622" stroke-width="2"><line x1="10" y1="135" x2="130" y2="135"/><line x1="150" y1="110" x2="270" y2="110"/><line x1="290" y1="92" x2="410" y2="92"/></g>
 <g stroke="#4a7fc1" stroke-dasharray="4 3" stroke-width="1.5"><line x1="70" y1="70" x2="70" y2="135"/><line x1="210" y1="70" x2="210" y2="110"/><line x1="350" y1="70" x2="350" y2="92"/></g>
 <g fill="#2b2622"><circle cx="70" cy="70" r="2.5"/><circle cx="210" cy="70" r="2.5"/><circle cx="350" cy="70" r="2.5"/><circle cx="210" cy="110" r="3.5" fill="#3d9970"/><circle cx="317" cy="92" r="3.5" fill="#3d9970"/><circle cx="383" cy="92" r="3.5" fill="#3d9970"/></g>
 <g fill="#4a7fc1"><text x="75" y="108">d</text><text x="215" y="95">d</text><text x="355" y="86">d</text></g>
 <g text-anchor="middle" fill="#2b2622"><text x="70" y="155">相离 d &gt; r</text><text x="210" y="155">相切 d = r</text><text x="350" y="155">相交 d &lt; r</text></g>
</svg>
<p>判断方法只看一件事：<b>圆心到直线的距离 d</b> 和 <b>半径 r</b> 比大小。</p>
<table class="t"><tr><th>关系</th><th>d 和 r</th><th>公共点</th></tr>
<tr><td>相离</td><td>d &gt; r</td><td>0 个</td></tr><tr><td>相切</td><td>d = r</td><td>1 个（叫<b>切点</b>，这条直线叫<b>切线</b>）</td></tr><tr><td>相交</td><td>d &lt; r</td><td>2 个</td></tr></table>
<div class="ex"><b>例题</b>　⊙O 半径是 5，圆心到直线 l 的距离是 3，l 和圆什么关系？<br>3 &lt; 5，d &lt; r → <b>相交</b>。</div>
<details class="try"><summary>试一试：半径 6，圆心到直线距离 6.5，什么关系？</summary><div>6.5 &gt; 6 → 相离，没有公共点。</div></details>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>切线的性质：切线 ⊥ 半径</h3>
<p>最重要的一句话：<b>圆的切线垂直于经过切点的半径。</b></p>
<svg class="fig" viewBox="0 0 320 170" font-size="14" font-family="sans-serif">
 <circle cx="110" cy="105" r="55" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <line x1="20" y1="50" x2="300" y2="50" stroke="#2b2622" stroke-width="2"/>
 <line x1="110" y1="105" x2="110" y2="50" stroke="#4a7fc1" stroke-width="2"/>
 <line x1="110" y1="105" x2="260" y2="50" stroke="#8a7f74" stroke-width="1.5" stroke-dasharray="5 3"/>
 <path d="M110 62 h12 v-12" fill="none" stroke="#2b2622"/>
 <circle cx="110" cy="105" r="3" fill="#2b2622"/><circle cx="110" cy="50" r="3" fill="#2b2622"/><circle cx="260" cy="50" r="3" fill="#2b2622"/>
 <text x="96" y="122">O</text><text x="100" y="42">A</text><text x="262" y="42">P</text><text x="88" y="82" fill="#4a7fc1">r</text><text x="150" y="160" fill="#5b524a" font-size="12">PA 是切线，A 是切点</text>
</svg>
<p>所以 <b>O、A、P 三点组成一个直角三角形，直角在切点 A</b>。一看到切线，就要条件反射：<b>连接圆心和切点</b>，马上得到一个直角，然后就能用勾股定理。</p>
<div class="ex"><b>例题</b>　PA 切 ⊙O 于点 A，OA = 3，OP = 5，求 PA。<br>∠OAP = 90°，勾股定理：PA = √(5² − 3²) = √16 = <b>4</b>。</div>
<details class="try"><summary>试一试：PA 切 ⊙O 于 A，半径 5，PA = 12，求 OP。</summary><div>OP = √(5² + 12²) = √169 = 13。（5-12-13 是常见的勾股数，记住它省时间）</div></details>
<div class="tip">💡 常见勾股数：3-4-5、6-8-10、5-12-13、8-15-17。看到这几个数字，基本就是直角三角形。</div>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>怎么证明一条线是切线</h3>
<p>判定定理：<b>经过半径的外端，并且垂直于这条半径的直线，是圆的切线。</b>两个条件缺一不可：①过半径的外端（就是在圆上）②和半径垂直。</p>
<p>证明题只有两种套路，看题目给了什么：</p>
<table class="t"><tr><th>题目情况</th><th>套路</th><th>口诀</th></tr>
<tr><td>已经知道直线和圆<b>有公共点</b></td><td>连接圆心和这个点（得到半径），证明它和直线垂直</td><td><b>连半径，证垂直</b></td></tr>
<tr><td><b>不知道</b>有没有公共点</td><td>从圆心向直线作垂线，证明垂线段长度 = 半径</td><td><b>作垂直，证半径</b></td></tr></table>
<div class="ex"><b>例题</b>　D 是 ⊙O 上的一点，直线 CD 经过点 D，已知 ∠ODC = 90°，求证 CD 是 ⊙O 的切线。<br>D 是公共点 → 连 OD（已经是半径）→ ∠ODC = 90° 说明 OD ⊥ CD → 所以 CD 是切线。三步写完。</div>
<div class="warn">⚠️ 常见错误：只说"CD 和 OD 垂直，所以是切线"，没说明 D 在圆上（OD 是半径）。两个条件都要写。</div>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>切线长定理</h3>
<p>从圆外一点 P 可以画<b>两条</b>切线，切点是 A 和 B。PA、PB 的长度叫<b>切线长</b>。</p>
<svg class="fig" viewBox="0 0 340 200" font-size="14" font-family="sans-serif">
 <circle cx="110" cy="100" r="50" fill="none" stroke="#e07a5f" stroke-width="2"/>
 <g stroke="#2b2622" stroke-width="2"><line x1="300" y1="100" x2="123.2" y2="51.8"/><line x1="300" y1="100" x2="123.2" y2="148.2"/></g>
 <g stroke="#4a7fc1" stroke-width="1.8"><line x1="110" y1="100" x2="123.2" y2="51.8"/><line x1="110" y1="100" x2="123.2" y2="148.2"/></g>
 <line x1="110" y1="100" x2="300" y2="100" stroke="#8a7f74" stroke-dasharray="5 3"/>
 <g fill="#2b2622"><circle cx="110" cy="100" r="3"/><circle cx="123.2" cy="51.8" r="3"/><circle cx="123.2" cy="148.2" r="3"/><circle cx="300" cy="100" r="3"/></g>
 <text x="94" y="105">O</text><text x="118" y="42">A</text><text x="118" y="168">B</text><text x="306" y="105">P</text>
</svg>
<p>切线长定理有两句：</p>
<ol><li><b>PA = PB</b>（两条切线一样长）</li><li><b>PO 平分 ∠APB</b>（也平分 ∠AOB）</li></ol>
<p>再加上 ∠OAP = ∠OBP = 90°，四边形 OAPB 的四个角加起来是 360°，所以 <b>∠AOB + ∠APB = 180°</b>。</p>
<div class="ex"><b>例题</b>　PA、PB 切 ⊙O 于 A、B，∠APB = 60°，求 ∠AOB。<br>∠AOB = 180° − 60° = <b>120°</b>。</div>
<details class="try"><summary>试一试：上题中如果 PA = 5，那么 AB 多长？</summary><div>PA = PB 而且 ∠APB = 60°，所以三角形 PAB 是等边三角形，AB = 5。</div></details>
</div>

<div class="sec" id="m5"><h3><span class="n">05</span>三角形的内切圆</h3>
<p>和三角形三条边都相切的圆叫<b>内切圆</b>，圆心叫<b>内心</b>。内心是<b>三条角平分线的交点</b>（因为它到三条边距离都相等）。</p>
<p>求内切圆半径 r，两个公式：</p>
<ul><li>任意三角形：<b>r = 2S ÷ 周长</b>（S 是面积）。原理：把三角形从内心切成 3 个小三角形，高都是 r。</li>
<li>直角三角形（a、b 是直角边，c 是斜边）：<b>r = (a + b − c) ÷ 2</b></li></ul>
<div class="ex"><b>例题</b>　直角三角形三边 3、4、5，求内切圆半径。<br>方法一：r = (3 + 4 − 5) ÷ 2 = <b>1</b>。<br>方法二：面积 S = 3 × 4 ÷ 2 = 6，周长 12，r = 2 × 6 ÷ 12 = <b>1</b>。两种方法答案一样，可以互相检查。</div>
</div>

<div class="sum"><b>📌 今天的小结</b><br>
① 看 d 和 r：d&gt;r 相离，d=r 相切，d&lt;r 相交<br>
② 看到切线 → 连圆心和切点 → 直角 → 勾股定理<br>
③ 证切线：有公共点"连半径证垂直"，没有就"作垂直证半径"<br>
④ 两条切线：PA = PB，∠AOB + ∠APB = 180°<br>
⑤ 内切圆：r = 2S ÷ 周长；直角三角形 r = (a+b−c)÷2</div>
<p>读完了就去做题。先做基础，再做挑战。草稿纸画图！</p>
<a data-quiz="math-04">基础练习：切线</a>
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

<div class="sec" id="e3"><h3><span class="n">03</span>听力 1：打电话报名（约 20 分钟）</h3>
<p>这是<b>雅思听力第一部分</b>的样子：一个人打电话问事情，你边听边记数字、名字、时间。</p>
<div class="step"><i>1</i><div><b>先读题再听。</b>看每题要填什么：数字？名字？时间？心里先猜。</div></div>
<div class="step"><i>2</i><div><b>第一遍不停，直接听完</b>，能填多少填多少。</div></div>
<div class="step"><i>3</i><div><b>第二遍</b>补没听清的。最多听 3 遍。</div></div>
<div class="step"><i>4</i><div>交卷后可以看原文，<b>对着原文再听一遍</b>，找出没听出来的词。</div></div>
<div class="step"><i>5</i><div><b>影子跟读</b>：打开原文，跟着录音<b>大声读 2 遍</b>，尽量跟上速度和语调。这一步练口语，也让耳朵记住发音。</div></div>
<div class="tip">💡 拼写题注意：名字会一个字母一个字母念出来（C-L-A-R-K-E），先在草稿纸上记字母。</div>
<a data-quiz="listen-01">听力 1</a></div>
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
