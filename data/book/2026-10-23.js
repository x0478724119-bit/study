// 第 11 天 · 周测（2026-10-23）手册：7 科，约 4 小时
window.BOOK = {
  intro: '今天大约 4 小时：英语、数学各约 45 分钟，语文、物理、化学、历史、软件各约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：周测', time: '约 40 分钟', html: `
<p class="lede">周五数学是<b>周测</b>：这周学的反比例函数、旋转、中心对称、正多边形，再加上前面的一元二次方程、二次函数、圆，一共 15 题，接近期末考的难度。<b>不看手册，自己做</b>，做完看解析，错的回到对应那天的手册复习。</p>
<div class="sec" id="m1"><h3><span class="n">01</span>做题前 5 分钟：快速过一遍这张表</h3>
<table class="t"><tr><th>内容</th><th>最容易错的地方</th></tr>
<tr><td>反比例函数</td><td>增减性要说"在每个象限内"；k 的面积是 |k|，最后看象限定正负</td></tr>
<tr><td>旋转</td><td>对应点到中心距离相等 → 找等腰三角形</td></tr>
<tr><td>中心对称</td><td>关于原点对称：(x, y) → (−x, −y)；等边三角形、正五边形不是中心对称图形</td></tr>
<tr><td>正多边形</td><td>中心角 = 360°/n；正六边形半径 = 边长</td></tr>
<tr><td>一元二次方程</td><td>两根之和是 −b/a（有负号）；二次项系数含字母时要 ≠ 0</td></tr>
<tr><td>二次函数</td><td>顶点式 y = a(x − h)² + k 的顶点是 (h, k)，括号里是减号</td></tr></table>
<div class="tip">✍️ 开始周测：<a data-quiz="math-w1">数学周测 1</a></div>
</div>

`},
{id: 'en', icon: '🔤', title: '英语：周测 + 课本复习', time: '约 45 分钟', html: `

<div class="sec" id="e1"><h3><span class="n">01</span>Grammar in Use 周测 2（约 15 分钟）</h3>
<p>周五不做书，在网上考这周的 Unit 4–7。<b>不看书、不看答案</b>。错的回书上对应单元看一遍再订正。</p>
<div class="tip">📝 <a data-quiz="giu-w2">Grammar in Use 周测 2</a></div></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 U1–U3 复习（约 20 分钟）</h3>
<p>学校上完的前三单元：一般过去时 vs 现在完成时、It is … to do / It is … that、宾语从句 that / if / whether。先自己做，错了看解析。</p>
<table class="t"><tr><th>考点</th><th>一句话</th></tr>
<tr><td>过去时 vs 完成时</td><td>有具体过去时间（last year、in 2023）→ 过去时；since / for / ever / already / in the last 10 years → 完成时</td></tr>
<tr><td>It is … of / for sb</td><td>夸人的品质（kind、clever）用 of；说事情（hard、important）用 for</td></tr>
<tr><td>has gone vs has been</td><td>gone 去了还没回；been 去过已经回来</td></tr></table>
<div class="tip">📝 <a data-quiz="en-10">课本 U1–U3 复习</a></div></div>
`},
{id: 'yw', icon: '📖', title: '语文：课外古诗 + 文言词', time: '约 30 分钟', html: `
<p class="lede">默写第三练：两次<b>课外古诗词诵读</b>的 8 首诗，再加文言文<b>重点词语</b>。期末默写和文言选择题常从这里出。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>名句表（10 分钟）</h3>
<table class="t"><tr><th>篇目</th><th>名句</th><th>意思</th></tr>
<tr><td>月夜忆舍弟（杜甫）</td><td>露从今夜白，月是故乡明</td><td>思乡：明明月亮哪里都一样，却觉得故乡的最亮</td></tr>
<tr><td>商山早行（温庭筠）</td><td>鸡声<b style="color:#d26a4a">茅</b>店月，人迹板桥<b style="color:#d26a4a">霜</b></td><td>只用名词组成画面，写早行的辛苦</td></tr>
<tr><td>左迁至蓝关示侄孙湘（韩愈）</td><td>云横秦岭家何在？雪<b style="color:#d26a4a">拥</b>蓝关马不前</td><td>被贬路上的艰难和悲伤</td></tr>
<tr><td>咸阳城东楼（许浑）</td><td>溪云初起日沉阁，山雨欲来风满楼</td><td>现在用来比喻大事发生前的紧张气氛</td></tr>
<tr><td>无题（李商隐）</td><td>相见时难别亦难，东风无力百花<b style="color:#d26a4a">残</b></td><td>离别的痛苦</td></tr>
<tr><td>无题（李商隐）</td><td>春<b style="color:#d26a4a">蚕</b>到死丝方尽，<b style="color:#d26a4a">蜡炬</b>成灰泪始干</td><td>至死不渝的爱，现在也用来赞美老师的奉献</td></tr>
<tr><td>浣溪沙（秦观）</td><td>自在飞花轻似梦，无边丝雨细如愁</td><td>把"愁"比作细雨，很有名的比喻</td></tr>
<tr><td>丑奴儿（辛弃疾）</td><td>少年不识愁滋味，爱上层楼</td><td>年少时不懂愁，偏要登楼说愁</td></tr>
<tr><td>丑奴儿（辛弃疾）</td><td>而今识尽愁滋味，欲说还休</td><td>现在尝尽了愁，想说又说不出来</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>文言文重点词（5 分钟）</h3>
<table class="t"><tr><th>句子</th><th>加点词</th><th>意思</th></tr>
<tr><td>肉食者<b>鄙</b>（曹刿论战）</td><td>鄙</td><td>目光短浅</td></tr>
<tr><td>先帝不以臣<b>卑鄙</b>（出师表）</td><td>卑鄙</td><td>古义：地位低微、见识短浅（不是今天"品质恶劣"的意思）</td></tr>
<tr><td><b>属</b>予作文以记之（岳阳楼记）</td><td>属</td><td>通"嘱"，嘱托</td></tr>
<tr><td>忠之<b>属</b>也（曹刿论战）</td><td>属</td><td>类</td></tr>
<tr><td>将军身<b>被</b>坚执锐（陈涉世家）</td><td>被</td><td>通"披"，穿着</td></tr>
<tr><td><b>苟</b>富贵，无相忘（陈涉世家）</td><td>苟</td><td>如果</td></tr>
<tr><td>以<b>塞</b>忠谏之路也（出师表）</td><td>塞</td><td>堵塞</td></tr>
<tr><td><b>野芳</b>发而幽香（醉翁亭记）</td><td>芳</td><td>花</td></tr></table>
<div class="tip">✍️ 背完做题：<a data-quiz="yw-05">默写 + 文言词</a></div>
</div>

`},
{id: 'phy', icon: '⚡', title: '物理：串并联计算', time: '约 30 分钟', html: `
<p class="lede">17.4 <b>欧姆定律在串、并联电路中的应用</b>：两个电阻接在一起，总电阻是多少？电压、电流怎么分？这是电学大题的基本功。</p>

<div class="sec" id="p1"><h3><span class="n">01</span>串联：电阻"越串越大"，电压按电阻分</h3>
<p><b>总电阻：R = R₁ + R₂</b>。为什么：串联相当于把导体接长了，长度越长电阻越大。</p>
<p><b>分压：U₁ : U₂ = R₁ : R₂</b>。为什么：串联电流相等，U = IR，所以谁电阻大，谁分到的电压就大。</p>
<div class="ex"><b>例题</b>　R₁ = 10 Ω、R₂ = 20 Ω 串联在 6 V 的电源上，求电流和各自的电压。<br><br>
<b>第 1 步：总电阻。</b>R = 10 + 20 = 30 Ω。<br>
<b>第 2 步：电流。</b>I = U / R = 6 ÷ 30 = <b>0.2 A</b>（串联，两个电阻的电流都是 0.2 A）。<br>
<b>第 3 步：各自的电压。</b>U₁ = IR₁ = 0.2 × 10 = <b>2 V</b>；U₂ = 0.2 × 20 = <b>4 V</b>。<br>
<b>检查：</b>2 + 4 = 6 V ✅；2 : 4 = 10 : 20 ✅</div>
</div>

<div class="sec" id="p2"><h3><span class="n">02</span>并联：电阻"越并越小"，电流按电阻反着分</h3>
<p><b>总电阻：1/R = 1/R₁ + 1/R₂</b>，两个电阻时可以直接用 <b>R = R₁R₂ / (R₁ + R₂)</b>。为什么越并越小：并联相当于把导体加粗了，多了一条路给电流走。</p>
<p class="s">并联的总电阻<b>比任何一个分电阻都小</b>。两个相同的电阻 R 并联，总电阻是 R/2。</p>
<p><b>分流：I₁ : I₂ = R₂ : R₁</b>（反过来）。为什么：并联电压相等，I = U/R，电阻小的那条路电流大。</p>
<div class="ex"><b>例题</b>　R₁ = 10 Ω、R₂ = 15 Ω 并联在 6 V 电源上，求各支路电流、干路电流和总电阻。<br><br>
<b>第 1 步：</b>并联，每个电阻两端都是 6 V。<br>
<b>第 2 步：</b>I₁ = 6 ÷ 10 = <b>0.6 A</b>；I₂ = 6 ÷ 15 = <b>0.4 A</b>。<br>
<b>第 3 步：</b>干路 I = 0.6 + 0.4 = <b>1 A</b>。<br>
<b>第 4 步：</b>总电阻 R = U / I = 6 ÷ 1 = <b>6 Ω</b>（用公式检查：10 × 15 ÷ 25 = 6 ✅，比 10 和 15 都小 ✅）。</div>
</div>

<div class="sec" id="p3"><h3><span class="n">03</span>动态电路：滑片一动，电表怎么变？</h3>
<p><b>万能四步：</b></p>
<div class="step"><i>1</i><div>看清串联还是并联，电压表测谁、电流表测谁。</div></div>
<div class="step"><i>2</i><div>滑片移动 → 变阻器电阻变大还是变小 → 总电阻怎么变。</div></div>
<div class="step"><i>3</i><div>串联电路：总电阻变大 → 电流变小（I = U/R）。</div></div>
<div class="step"><i>4</i><div>定值电阻的电压 U₁ = IR₁ 跟着电流变；变阻器的电压 = 总电压 − U₁，反着变。</div></div>
<div class="ex"><b>例题</b>　定值电阻 R₁ 和滑动变阻器 R₂ 串联，电压表测 R₁。滑片移动使 R₂ 变大，电流表和电压表示数怎么变？<br><br>
R₂ 变大 → 总电阻变大 → 电流<b>变小</b> → U₁ = IR₁ <b>变小</b>（电压表示数变小）。</div>
<div class="tip">📝 做题：<a data-quiz="phy-04">练习：串并联电路的计算</a></div>
</div>

`},
{id: 'chem', icon: '🧪', title: '化学：根据化学式计算', time: '约 30 分钟', html: `
<p class="lede">课题 3（下）：<b>根据化学式计算</b>。只要会乘法和除法就能做，期末计算题必考。先记几个常用的相对原子质量：<b>H = 1，C = 12，N = 14，O = 16，Na = 23，S = 32，Ca = 40，Fe = 56</b>。</p>

<div class="sec" id="c1"><h3><span class="n">01</span>相对分子质量：把所有原子加起来</h3>
<div class="ex"><b>例题</b>　求 H₂O 和 Ca(OH)₂ 的相对分子质量。<br><br>
H₂O = 1 × 2 + 16 = <b>18</b><br>
Ca(OH)₂ = 40 + (16 + 1) × 2 = 40 + 34 = <b>74</b>（括号外的 2 要乘括号里的每一个）</div>
<p class="s">相对分子质量<b>没有单位</b>（写成 1，一般不写）。</p>
</div>

<div class="sec" id="c2"><h3><span class="n">02</span>元素质量比</h3>
<p>每种元素的总质量 = 相对原子质量 × 原子个数，然后相比。</p>
<div class="ex"><b>例题</b>　求 CO₂ 中碳、氧元素的质量比。<br><br>
碳：12 × 1 = 12；氧：16 × 2 = 32。<br>C : O = 12 : 32 = <b>3 : 8</b>（记得约分）</div>
<div class="warn">⚠️ 别和"原子个数比"搞混：CO₂ 里碳、氧原子个数比是 1 : 2，质量比是 3 : 8。</div>
</div>

<div class="sec" id="c3"><h3><span class="n">03</span>元素质量分数</h3>
<p style="text-align:center"><b>某元素的质量分数 = 该元素的相对原子质量 × 原子个数 ÷ 相对分子质量 × 100%</b></p>
<div class="ex"><b>例题 1</b>　求 NH₄NO₃（硝酸铵，一种化肥）中氮元素的质量分数。<br><br>
<b>第 1 步：相对分子质量</b> = 14 + 1 × 4 + 14 + 16 × 3 = 80。<br>
<b>第 2 步：</b>注意氮原子有 <b>2</b> 个（NH₄ 里一个，NO₃ 里一个）：14 × 2 = 28。<br>
<b>第 3 步：</b>28 ÷ 80 × 100% = <b>35%</b>。</div>
<div class="ex"><b>例题 2（倒过来用）</b>　多少克水中含有 8 g 氧元素？<br><br>
<b>第 1 步：</b>水中氧的质量分数 = 16 ÷ 18。<br>
<b>第 2 步：</b>水的质量 × 16/18 = 8 g → 水的质量 = 8 × 18 ÷ 16 = <b>9 g</b>。</div>
<details class="try"><summary>试一试：Fe₂O₃ 中铁元素的质量分数是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>相对分子质量 = 56 × 2 + 16 × 3。</div></details>
答案：相对分子质量 = 160；铁 = 112；112 ÷ 160 = <b>70%</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-04">练习：根据化学式计算</a></div>
</div>

`},
{id: 'hist', icon: '🏛️', title: '历史：走向近代', time: '约 25 分钟', html: `
<p class="lede">历史复习第三次：<b>第五、六、七单元：走向近代、资本主义制度确立、工业革命和马克思主义</b>。这部分是期末重点，年份多，先看 10 分钟速记表再做题。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>内容</th><th>必记</th></tr>
<tr><td>文艺复兴</td><td>14 世纪起源于<b>意大利</b>；核心是<b>人文主义</b>（以人为中心）；但丁《神曲》、达·芬奇《蒙娜丽莎》、莎士比亚</td></tr>
<tr><td>新航路</td><td>迪亚士（好望角）；<b>1492 年哥伦布到达美洲</b>；达·伽马（到印度）；<b>麦哲伦船队环球航行</b>（证明地球是圆的）</td></tr>
<tr><td>早期殖民</td><td><b>"三角贸易"</b>（黑奴贸易）：欧洲 → 非洲 → 美洲 → 欧洲</td></tr>
<tr><td>英国</td><td><b>1640 年</b>英国资产阶级革命开始；<b>1689 年《权利法案》</b>→ 君主立宪制</td></tr>
<tr><td>美国</td><td>1775 年来克星顿枪声；<b>1776 年 7 月 4 日《独立宣言》</b>（美国诞生）；萨拉托加大捷是转折点；华盛顿；1787 年宪法</td></tr>
<tr><td>法国</td><td><b>1789 年 7 月 14 日攻占巴士底狱</b>（大革命开始）；《人权宣言》；<b>1804 年拿破仑称帝</b>，颁布<b>《法国民法典》</b>（拿破仑法典）</td></tr>
<tr><td>工业革命</td><td><b>18 世纪 60 年代</b>从<b>英国</b>开始；哈格里夫斯"珍妮机"；<b>瓦特改良蒸汽机</b> → "蒸汽时代"；史蒂芬孙蒸汽机车</td></tr>
<tr><td>马克思主义</td><td><b>1848 年《共产党宣言》</b>发表，标志马克思主义诞生；1864 年第一国际；<b>1871 年巴黎公社</b>：第一次建立无产阶级政权的尝试</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="hist-03">历史复习 3：走向近代</a></div>
</div>

`},
{id: 'app', icon: '🛠️', title: '软件：明暗', time: '约 30 分钟', html: `
<div class="sec lesson" id="d11-art"><h3><span class="n">01</span>美术第 3 课：明暗（约 30 分钟）</h3>
<p class="lede">透视让东西"站得住"，<b>明暗</b>让东西"立起来"。今天学光照在物体上的规律，画一个立方体和一个球。</p>
<p><b>先学原理：三大面</b></p>
<table class="t"><tr><th>面</th><th>在哪</th><th>涂多深</th></tr>
<tr><td>亮面</td><td>正对着光的面</td><td>最浅，几乎不涂</td></tr>
<tr><td>灰面</td><td>斜着对光的面</td><td>中间</td></tr>
<tr><td>暗面</td><td>背对光的面</td><td>最深</td></tr></table>
<p>另外两个必须画的东西：</p>
<ul><li><b>明暗交界线</b>：亮面和暗面交接的地方，是物体上<b>最暗</b>的一条（球上是一条弧线）。</li>
<li><b>投影</b>：物体挡住光，在地面上留下的影子，方向和光源相反，<b>离物体越近越深</b>。</li></ul>
<div class="why">🤔 为什么暗面里靠近边缘的地方反而亮一点？那是<b>反光</b>：地面把一点光反射回来了。画出反光，物体会显得更圆、更有空气感。</div>
<p><b>动手（铅笔或 Procreate）：</b></p>
<div class="step"><i>1</i><div>在画面左上角画一个小太阳，定好光从哪边来。</div></div>
<div class="step"><i>2</i><div>用第 1、2 课的透视画一个立方体：朝光的顶面最浅，侧面一个中间、一个最深。</div></div>
<div class="step"><i>3</i><div>画一个圆，从背光的一侧开始一层层加深，留出亮的地方，找到那条弧形的明暗交界线。</div></div>
<div class="step"><i>4</i><div>给两个物体都加上投影（往右下方，和光相反）。</div></div>
<div class="tip">📤 想多赚点？可以接订单「明暗静物」。</div>
<div data-ck="d11-art"></div></div>

`},
  ],
  checks: {
 "d11-art": {
  "title": "美术第 3 课：明暗",
  "qs": [
   {
    "q": "三大面是哪三个？分别涂多深？",
    "a": "亮面（最浅）、灰面（中间）、暗面（最深）。",
    "pts": [
     "亮面",
     "灰面",
     "暗面",
     "深浅顺序对"
    ]
   },
   {
    "q": "物体上最暗的地方在哪？",
    "a": "<b>明暗交界线</b>（亮面和暗面交接处），不是暗面的边缘。",
    "pts": [
     "明暗交界线"
    ]
   },
   {
    "q": "投影的方向和深浅有什么规律？",
    "a": "方向和光源<b>相反</b>；离物体越近越深，越远越浅。",
    "pts": [
     "和光源相反",
     "近深远浅"
    ]
   }
  ]
 }
},
};
