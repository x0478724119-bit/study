// 第 25 天 · 方案选择和函数应用（2026-11-12）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：方案选择和函数应用', time: '约 60 分钟', html: `
<p class="lede">生活里的数学题：选哪个套餐、怎么租车、定什么价。做法都一样：<b>设未知数 → 写出函数 → 比较或求最值</b>。今天再学一个关键：<b>顶点不在范围里怎么办</b>。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>方案选择：两个一次函数比一比</h3>
<div class="ex"><b>例题 1</b>　甲套餐月租 20 元，每分钟 0.1 元；乙套餐没有月租，每分钟 0.2 元。怎么选？<br><br>
<b>第 1 步：写函数。</b>y甲 = 20 + 0.1x，y乙 = 0.2x。<br>
<b>第 2 步：找"一样贵"的点。</b>20 + 0.1x = 0.2x → x = 200。<br>
<b>第 3 步：分情况说。</b>x &lt; 200 选乙；x = 200 一样；x &gt; 200 选甲。</div>
<p class="s">检查：x = 300 时甲 50、乙 60，甲便宜 ✅。拿不准就代一个数进去。</p>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>最大利润：顶点不在范围里，取端点</h3>
<div class="ex"><b>例题 2</b>　进价 30 元，售价 x 元时每天卖 (−2x + 160) 件。物价局规定售价不能超过 50 元。每天最大利润多少？<br><br>
<b>第 1 步：</b>W = (x − 30)(−2x + 160) = −2x² + 220x − 4800。<br>
<b>第 2 步：</b>对称轴 x = 55。<b>可是 x ≤ 50，55 不在范围里！</b><br>
<b>第 3 步：</b>a = −2 &lt; 0，在对称轴<b>左边</b>，W 随 x 增大而增大。所以 x 越大越好，取 x = 50。<br>
<b>第 4 步：</b>W = (50 − 30)(−100 + 160) = 20 × 60 = <b>1200 元</b>。</div>
<div class="warn">⚠️ 画个草图最清楚：开口向下的抛物线，范围只到顶点左边一段，那段是"上坡"，最高点在范围的<b>右端点</b>。</div>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>分段计费：先判断在哪一段</h3>
<div class="ex"><b>例题 3</b>　水费：每月 10 吨以内每吨 2 元，超出部分每吨 3 元。交了 50 元，用了多少吨？<br><br>
<b>第 1 步：先判断超没超。</b>用满 10 吨才 20 元 &lt; 50，所以超了。<br>
<b>第 2 步：</b>20 + 3(x − 10) = 50 → x = <b>20 吨</b>。</div>
<details class="try"><summary>试一试：出租车 3 公里以内 10 元，超过部分每公里 2 元。坐 8 公里多少钱？</summary><div>答案：10 + 2 × (8 − 3) = <b>20 元</b>。</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-23">基础练习：方案选择和函数应用</a></p>
<p>再做挑战题：<a data-quiz="math-23b">挑战题：方案选择和函数应用</a></p>
<p>最后做综合滚动：<a data-quiz="roll-12">综合滚动 12</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 语法选择 + Grammar in Use', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 21：我想住的房子（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-21">单词课 21</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。今天的话题是你的专长——描述你的理想房间吧！</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>语法单选：找信号词（约 12 分钟）</h3>
<table class="t"><tr><th>看到</th><th>想到</th></tr>
<tr><td>since / for + 时间段 / already / yet / ever</td><td>现在完成时</td></tr>
<tr><td>for … 到现在还在做</td><td>现在完成进行时</td></tr>
<tr><td>If …（如果）</td><td><b>主将从现</b>：If it <b>rains</b>, we <b>will</b> stay home.</td></tr>
<tr><td>look forward to / be used to</td><td>to 是介词 → 后面 <b>doing</b></td></tr>
<tr><td>Do you know / I wonder + 疑问词</td><td>宾语从句，<b>陈述语序</b></td></tr>
<tr><td>东西 + 被 …</td><td>被动语态 be done</td></tr></table>
<p class="s">最后两个信号词（if 条件句、look forward to）是你 10 月摸底时错过的，今天再练一次。</p>
<div class="tip">📝 <a data-quiz="en-24">语法选择（中考题型）</a></div></div>
<div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 13（后半，约 15 分钟）</h3>
<p>做 Unit 13 剩下的练习，用书后答案对，红笔改。书留着当笔记（<b>周五一起拍照交</b>），回首页写一句：做了哪几个练习、错几题。明天周测考 Unit 12–13。</p>
<p class="s">一句话记住 Unit 13：<b>说了具体的过去时间（yesterday、in 2020、ago、when …?）→ 一般过去时；没说时间、和现在有关 → 现在完成时</b>。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：议论文专题', time: '约 30 分钟', html: `
<p class="lede">这学期学了 6 篇议论文（第二单元 4 篇、第五单元 4 篇里的议论文）。今天把议论文阅读的全部题型一次梳理完。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>议论文题型总表</h3>
<table class="t"><tr><th>题型</th><th>方法 / 模板</th></tr>
<tr><td>找论点</td><td>题目 → 开头 → 结尾；必须是<b>完整的判断句</b>（不能是问句、不能是一个词）</td></tr>
<tr><td>辨论据</td><td><b>事实论据</b>（事例、数据、史实）/ <b>道理论据</b>（名言、俗语、公理）</td></tr>
<tr><td>论证方法 + 作用</td><td>举例 → 具体有力；道理 → 增强说服力；对比 → 突出强调；比喻 → 形象易懂</td></tr>
<tr><td>论证思路 / 结构</td><td><b>提出问题（是什么）→ 分析问题（为什么）→ 解决问题（怎么办）</b>；或"总—分—总"</td></tr>
<tr><td>驳论文</td><td>先摆出错误观点 → 反驳 → 立自己的观点（《中国人失掉自信力了吗》）</td></tr>
<tr><td>补充论据</td><td>找一个和论点<b>完全对得上</b>的事例，写清"谁 + 做了什么 + 结果"</td></tr></table>
<p class="s">本单元写作"论证要合理"：论据要真能证明论点，不能"举的例子讲的是另一回事"。</p>
<div class="tip">📝 做题：<a data-quiz="yw-13">议论文专题</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：电流和电压的规律（复习）', time: '约 30 分钟', html: `
<p class="lede">回头复习第 15–16 章：电荷、电路、串并联的电流电压规律、电阻。这些是整个电学的地基。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>串并联规律一张表</h3>
<table class="t"><tr><th></th><th>串联</th><th>并联</th></tr>
<tr><td>电流</td><td>处处相等 I = I₁ = I₂</td><td>干路 = 支路之和 I = I₁ + I₂</td></tr>
<tr><td>电压</td><td>总电压 = 各部分之和 U = U₁ + U₂</td><td>各支路相等 U = U₁ = U₂</td></tr>
<tr><td>开关</td><td>一个开关控制全部</td><td>干路开关控制全部，支路开关只控制那一条</td></tr>
<tr><td>一个坏了</td><td>全都不工作</td><td>别的照常工作</td></tr></table>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>其他速记</h3>
<table class="t"><tr><th>考点</th><th>记住</th></tr>
<tr><td>摩擦起电</td><td>实质是<b>电子转移</b>；得电子带负电，失电子带正电</td></tr>
<tr><td>电荷间作用</td><td>同种排斥，异种吸引</td></tr>
<tr><td>电流表 / 电压表</td><td>电流表<b>串联</b>，电压表<b>并联</b>；都是"正进负出"；电流表不能直接接电源两极</td></tr>
<tr><td>电阻</td><td>导体本身的性质，跟<b>材料、长度、横截面积、温度</b>有关，和电压电流无关</td></tr>
<tr><td>滑动变阻器</td><td>改变接入电路的<b>电阻丝长度</b>来改变电阻；"一上一下"接法</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="phy-18">练习：电流和电压的规律（复习）</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：氧气和二氧化碳的制取对比', time: '约 30 分钟', html: `
<p class="lede">实验题最爱考"<b>制取气体</b>"。把第二单元的氧气和第六单元的二氧化碳放在一张表里，一次搞定。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>对比表</h3>
<table class="t"><tr><th></th><th>氧气 O₂</th><th>二氧化碳 CO₂</th></tr>
<tr><td>药品</td><td>① 高锰酸钾（加热）<br>② 过氧化氢溶液 + 二氧化锰</td><td>大理石 / 石灰石 + 稀盐酸</td></tr>
<tr><td>方程式</td><td>2KMnO₄ =△= K₂MnO₄ + MnO₂ + O₂↑<br>2H₂O₂ =MnO₂= 2H₂O + O₂↑</td><td>CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑</td></tr>
<tr><td>发生装置</td><td>① 固体加热型 ② 固液常温型</td><td>固液常温型</td></tr>
<tr><td>收集</td><td>排水法（不易溶于水）或向上排空气法</td><td>向上排空气法</td></tr>
<tr><td>检验</td><td><b>带火星的木条伸入</b>，复燃</td><td><b>澄清石灰水</b>，变浑浊</td></tr>
<tr><td>验满</td><td>带火星的木条放<b>瓶口</b>，复燃</td><td>燃着的木条放<b>瓶口</b>，熄灭</td></tr></table>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>选装置的两条规则</h3>
<div class="step"><i>1</i><div><b>发生装置看"反应物状态 + 要不要加热"</b>：固体 + 加热 → 固体加热型；固体 + 液体、不加热 → 固液常温型。</div></div>
<div class="step"><i>2</i><div><b>收集装置看"溶不溶于水 + 密度"</b>：不易溶 → 排水法；密度比空气大 → 向上排空气；比空气小（如氢气）→ 向下排空气。</div></div>
<details class="try"><summary>试一试：实验室用锌粒和稀硫酸制氢气（氢气难溶于水、密度比空气小），选什么装置？</summary><div>答案：发生装置选<b>固液常温型</b>；收集用<b>排水法</b>或<b>向下排空气法</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-18">练习：氧气和二氧化碳的制取对比</a></div>
</div>
`},
{id: 'dfz', icon: '⚖️', title: '道法：第三、四单元综合', time: '约 25 分钟', html: `
<p class="lede">道法复习 8：第三、四单元（现代化蓝图、高质量发展、共圆中国梦）。</p>
<div class="sec" id="z1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>考点</th><th>要记住的话</th></tr>
<tr><td>"两步走"</td><td>到 <b>2035 年</b>基本实现社会主义现代化；到<b>本世纪中叶</b>建成社会主义现代化强国</td></tr>
<tr><td>中国式现代化</td><td>人口规模巨大、全体人民共同富裕、物质文明和精神文明相协调、人与自然和谐共生、走和平发展道路</td></tr>
<tr><td>新发展理念</td><td><b>创新、协调、绿色、开放、共享</b>（创新是第一动力）</td></tr>
<tr><td>高质量发展</td><td>从"有没有"转向"好不好"</td></tr>
<tr><td>新发展格局</td><td>以国内大循环为主体、国内国际双循环相互促进</td></tr>
<tr><td>绿色发展</td><td>"绿水青山就是金山银山"</td></tr>
<tr><td>共同富裕</td><td>先富带后富，逐步缩小差距（不是平均分）</td></tr></table>
<div class="warn">⚠️ 新发展理念（创新协调绿色开放共享）和社会主义核心价值观（富强民主文明和谐……）别搞混。</div>
<div class="tip">✍️ 做题：<a data-quiz="dfz-08">道法复习：第三、四单元综合</a></div>
</div>
`},
{id: 'app', icon: '🏠', title: '酷家乐：阳台小花园', time: '约 30 分钟', html: `
<div class="sec lesson" id="d25-kjl"><h3><span class="n">01</span>酷家乐第 9 课：阳台小花园（约 30 分钟）</h3>
<p class="lede">阳台是家里离天空最近的地方。今天把一个普通的晾衣服阳台，设计成能坐下来喝东西、看书的<b>小花园</b>。</p>
<p><b>先学原理：阳台设计的 4 个要点</b></p>
<table class="t"><tr><th>要点</th><th>怎么做</th></tr>
<tr><td><b>分区</b></td><td>阳台一般 1.2–1.5 m 深。一头留晾衣区，另一头做休闲区，别混在一起</td></tr>
<tr><td><b>地面</b></td><td>用<b>防水、防滑</b>的材料：仿木地砖、户外木地板</td></tr>
<tr><td><b>植物</b></td><td>"<b>高 — 中 — 低</b>"分层放：靠墙放高的（龟背竹），中间放中等的，前面放矮的和吊兰。<b>朝南</b>阳光多可以种开花的，朝北选耐阴的绿植</td></tr>
<tr><td><b>座位</b></td><td>阳台窄，用<b>折叠桌椅</b>或靠墙的长条凳（下面还能收纳）；留出 60 cm 以上走路的地方</td></tr></table>
<div class="why">🤔 为什么植物要分层？像舞台上的合唱团：高个子站后排，大家都能被看见，看起来有层次、不乱。</div>
<p><b>动手（酷家乐）：</b></p>
<div class="step"><i>1</i><div>在你的户型里找到阳台（没有就加一个 4 m × 1.4 m 的）。地面换成仿木地砖。</div></div>
<div class="step"><i>2</i><div>左边放晾衣杆，右边放一张小圆桌 + 两把椅子，或一条靠墙长凳。</div></div>
<div class="step"><i>3</i><div>按"高 — 中 — 低"放 5 盆以上植物，加一串暖光的灯串。出一张效果图看看。</div></div>
<div class="tip">📤 想多赚点？上完这节课可以接订单「阳台小花园」（交完小测还能开一个金币盲盒 🎁）。</div>
<div data-ck="d25-kjl"></div></div>
`},
  ],
  checks: {
 "d25-kjl": {
  "title": "酷家乐第 9 课：阳台小花园",
  "qs": [
   {"q": "阳台的地面要用什么样的材料？为什么？", "a": "防水、防滑的材料，比如仿木地砖、户外木地板。因为阳台会淋到雨、浇花有水，普通木地板会泡坏，地滑也容易摔倒。", "pts": ["防水", "防滑", "说出原因"]},
   {"q": "植物为什么要按\"高—中—低\"分层摆放？", "a": "像合唱团一样，高的放后面、矮的放前面，每一盆都能被看到，画面有层次感、不乱。", "pts": ["每盆都能看到 / 不挡住", "有层次"]},
   {"q": "朝南和朝北的阳台选植物有什么不同？", "a": "朝南阳光多，可以种需要阳光的、开花的植物；朝北阳光少，要选耐阴的绿植。", "pts": ["朝南：喜阳 / 开花", "朝北：耐阴"]}
  ]
 }
},
};
