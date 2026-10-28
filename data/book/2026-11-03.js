// 第 18 天 · 一元二次方程综合（2026-11-03）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：一元二次方程综合', time: '约 60 分钟', html: `
<p class="lede">一元二次方程是中考的"地基"，二次函数、几何题最后都要解它。今天学三个让你算得又快又不出错的工具：<b>韦达定理变形</b>、<b>整体代入</b>、<b>回头检查 Δ</b>。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>韦达定理：不解方程也能算</h3>
<p>方程 ax² + bx + c = 0 的两根 x₁、x₂：<b>x₁ + x₂ = −b/a，x₁x₂ = c/a</b>。</p>
<p>题目常常问 x₁² + x₂²、1/x₁ + 1/x₂，这时<b>先把它变成"和"与"积"</b>：</p>
<table class="t"><tr><th>要求的</th><th>变成</th><th>为什么</th></tr>
<tr><td>x₁² + x₂²</td><td>(x₁ + x₂)² − 2x₁x₂</td><td>(x₁ + x₂)² = x₁² + 2x₁x₂ + x₂²，减掉多出来的 2x₁x₂</td></tr>
<tr><td>1/x₁ + 1/x₂</td><td>(x₁ + x₂) / (x₁x₂)</td><td>通分</td></tr>
<tr><td>x₁²x₂ + x₁x₂²</td><td>x₁x₂(x₁ + x₂)</td><td>提公因式</td></tr></table>
<div class="ex"><b>例题 1</b>　x₁、x₂ 是 x² − 4x + 1 = 0 的两根，求 x₁² + x₂²。<br><br>
<b>第 1 步：</b>和 = 4，积 = 1。<br>
<b>第 2 步：</b>x₁² + x₂² = 4² − 2 × 1 = <b>14</b>。</div>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>整体代入：不用求出 a</h3>
<div class="ex"><b>例题 2</b>　a 是方程 x² − 2x − 3 = 0 的一个根，求 3a² − 6a + 1。<br><br>
<b>第 1 步：</b>a 是根 → 代进去成立：a² − 2a − 3 = 0，也就是 <b>a² − 2a = 3</b>。<br>
<b>第 2 步：</b>看要求的式子：3a² − 6a = 3(a² − 2a)，正好是 3 倍！<br>
<b>第 3 步：</b>3a² − 6a + 1 = 3 × 3 + 1 = <b>10</b>。</div>
<p class="s">看到"a 是方程的根，求一个含 a 的式子"，第一反应：把方程变成"某某 = 数"，再在要求的式子里找它的倍数。</p>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>参数题：别忘了两个"检查"</h3>
<div class="step"><i>1</i><div><b>二次项系数 ≠ 0。</b>题目说"一元二次方程 kx² + …"，k 就不能是 0。</div></div>
<div class="step"><i>2</i><div><b>用了韦达定理，回头检查 Δ。</b>方程要有实数根才能用韦达定理。</div></div>
<div class="ex"><b>例题 3</b>　关于 x 的方程 x² − 2x + m = 0 有两个实数根 x₁、x₂，且 x₁x₂ = −3，求 m。<br><br>
<b>第 1 步：</b>x₁x₂ = m = −3。<br>
<b>第 2 步：检查 Δ。</b>Δ = 4 − 4m = 4 + 12 = 16 ≥ 0 ✅，所以 <b>m = −3</b>。</div>
<div class="warn">⚠️ 等腰三角形的边长是方程的根时，要分两种情况讨论谁是腰，还要检查三边能不能组成三角形（两边之和大于第三边）。</div>
<details class="try"><summary>试一试：方程 x² − 5x + 6 = 0 的两根是等腰三角形的两边，周长是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>两根是 2 和 3。腰 2 还是腰 3？</div></details>
答案：腰 2：2、2、3（2 + 2 &gt; 3 ✅），周长 7；腰 3：3、3、2，周长 8。所以 <b>7 或 8</b>。</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-17">基础练习：一元二次方程综合</a></p>
<p>再做挑战题：<a data-quiz="math-17b">挑战题：一元二次方程综合</a></p>
<p>最后做综合滚动：<a data-quiz="roll-06">综合滚动 6</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 课本阅读 + Grammar in Use', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 15：友谊（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-15">单词课 15</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。今天多注意一个：<b>apologise / depend 后面要跟介词</b>（apologise to sb for sth，depend on）。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 Unit 8 阅读：细节题和推断题（约 12 分钟）</h3>
<table class="t"><tr><th>题型</th><th>怎么认</th><th>怎么做</th></tr>
<tr><td>细节题</td><td>问 what / when / how many，答案就在某一句里</td><td>回原文定位那一句，<b>同义替换</b>的选项就是答案</td></tr>
<tr><td>推断题</td><td>问 why … feel …、We can infer / learn that …</td><td>答案原文没直接写，但<b>能从原文推出来</b>；别选自己"脑补"的</td></tr></table>
<p class="s">"不是…而是…"（not … but …、don't … ; … ）这种句子，答案一般在"而是"后面。</p>
<div class="tip">📝 <a data-quiz="en-17">课本 U8：运动阅读 + 主谓一致</a></div></div>
<div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 10（后半，约 15 分钟）</h3>
<p>做 Unit 10 剩下的练习，用书后答案对，红笔改。<b>拍照发工作室群</b>，回首页写一句：做了哪几个练习、错几题。</p>
<p class="s">一句话记住 Unit 10：<b>强调"做了多久、一直在做" → have been doing；强调"做完了几个、结果" → have done</b>。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：怀疑与学问', time: '约 30 分钟', html: `
<p class="lede">第五单元第 1 篇：顾颉刚《怀疑与学问》。上周学过议论文三要素，今天加上<b>四种论证方法</b>。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>四种论证方法（10 分钟）</h3>
<table class="t"><tr><th>方法</th><th>怎么认</th><th>作用（答题模板）</th></tr>
<tr><td><b>举例论证</b></td><td>举了具体的人、事、数据</td><td>举 ___ 的例子，<b>具体有力</b>地证明了 ___</td></tr>
<tr><td><b>道理论证</b></td><td>引用名言、俗语、公认的道理</td><td>引用 ___，<b>增强说服力 / 权威性</b>地证明了 ___</td></tr>
<tr><td><b>对比论证</b></td><td>正反两面放在一起比</td><td>把 ___ 和 ___ 对比，<b>突出强调</b>了 ___</td></tr>
<tr><td><b>比喻论证</b></td><td>用比喻讲道理</td><td>把 ___ 比作 ___，<b>形象生动、通俗易懂</b>地证明了 ___</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>课文梳理（10 分钟）</h3>
<p>课本第五单元第 1 课。没带课本的话看<a href="https://basic.smartedu.cn/tchMaterial" target="_blank">国家中小学智慧教育平台电子课本</a>（九年级上册语文）。</p>
<table class="t"><tr><th>部分</th><th>内容</th></tr>
<tr><td>提出论点</td><td>开头引用程颐"学者先要会疑"、张载"在可疑而不疑者，不曾学；学则须疑"，提出：<b>做学问要有怀疑精神</b>。</td></tr>
<tr><td>分析（分论点 1）</td><td>从<b>消极方面</b>说，怀疑是<b>辨伪去妄</b>的必须步骤：不轻信书上和别人的话，经过自己思考、查证。</td></tr>
<tr><td>分析（分论点 2）</td><td>从<b>积极方面</b>说，怀疑是<b>建设新学说、启发新发明</b>的基础：发现旧说法的问题，才能有新东西。</td></tr>
<tr><td>结论</td><td>怀疑不是目的，是为了得到真知识。</td></tr></table>
<div class="warn">⚠️ 别把"怀疑"理解成"什么都不信"。文章说的是<b>不盲从，经过思考判断</b>。考试常拿"怀疑一切"这种极端说法来当错误选项。</div>
<div class="tip">📝 做题：<a data-quiz="yw-09">议论文：怀疑与学问</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：电流过大的原因', time: '约 30 分钟', html: `
<p class="lede">19.2：家里为什么会"跳闸"、保险丝为什么会烧断？就两个原因。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>电流过大的两个原因</h3>
<table class="t"><tr><th>原因</th><th>怎么回事</th><th>公式</th></tr>
<tr><td><b>用电器总功率过大</b></td><td>同时开了太多大功率电器（空调 + 热水器 + 电饭锅……）</td><td>I = P总 / U，P 越大 I 越大</td></tr>
<tr><td><b>短路</b></td><td>火线和零线没经过用电器，直接碰在一起</td><td>I = U/R，R 几乎是 0，I 特别大</td></tr></table>
<div class="ex"><b>例题</b>　电能表上写着"220 V 10 A"，家里最多能同时用多大功率的电器？<br><br>
<b>第 1 步：</b>P = UI = 220 V × 10 A = <b>2200 W</b>。<br>
<b>第 2 步：</b>如果已经开着 1500 W 的空调，最多还能再开 700 W 的东西。</div>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>保护电路的三样东西</h3>
<table class="t"><tr><th>东西</th><th>管什么</th><th>特点</th></tr>
<tr><td>保险丝</td><td>电流太大</td><td>电阻较大、<b>熔点较低</b>，先烧断；烧了要换新的。<b>不能用铜丝、铁丝代替</b>（熔点太高，不会断）</td></tr>
<tr><td>空气开关</td><td>电流太大</td><td>自动"跳闸"，排除故障后推上去就能用</td></tr>
<tr><td>漏电保护器</td><td>电流漏到人身上 / 大地</td><td>有人触电时迅速断电</td></tr></table>
<details class="try"><summary>试一试：电热水器 2000 W、电饭锅 800 W 同时工作，干路电流多大？</summary><div>答案：P = 2800 W，I = 2800 ÷ 220 ≈ <b>12.7 A</b>。如果电能表只允许 10 A，就会跳闸。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-11">练习：电流过大的原因</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：碳的化学性质', time: '约 30 分钟', html: `
<p class="lede">昨天学的是碳单质的<b>物理性质</b>（硬、软、导电、吸附）。今天学<b>化学性质</b>：3 条。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>碳的三个化学性质</h3>
<div class="step"><i>1</i><div><b>常温下稳定</b>：古代的字画、用碳素墨水写的档案，几百年都不褪色。</div></div>
<div class="step"><i>2</i><div><b>可燃性</b>：氧气充足 → <b>C + O₂ =点燃= CO₂</b>；氧气不足 → <b>2C + O₂ =点燃= 2CO</b>（这就是煤炉不通风会产生有毒的一氧化碳的原因）。</div></div>
<div class="step"><i>3</i><div><b>还原性</b>：能把金属氧化物里的氧"抢"走：<b>C + 2CuO =高温= 2Cu + CO₂↑</b>。</div></div>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>木炭还原氧化铜实验</h3>
<table class="t"><tr><th>步骤 / 现象</th><th>说明</th></tr>
<tr><td>黑色粉末逐渐变成<b>红色</b></td><td>黑色的 CuO 变成了红色的铜</td></tr>
<tr><td>澄清石灰水变<b>浑浊</b></td><td>生成了 CO₂</td></tr>
<tr><td>酒精灯加网罩</td><td>集中火焰、提高温度（要高温）</td></tr>
<tr><td><b>先撤导管，再熄灭酒精灯</b></td><td>防止石灰水倒吸进热试管，使试管炸裂</td></tr></table>
<p><b>还原剂</b>：夺走氧的那个（C），它具有<b>还原性</b>。被夺走氧的 CuO 发生了还原反应。</p>
<details class="try"><summary>试一试：为什么方程式里 CO₂ 要标 ↑，而木炭燃烧 C + O₂ = CO₂ 不标？</summary><div>答案：标 ↑ 的规则是"<b>反应物里没有气体</b>、生成物里有气体"。还原氧化铜的反应物 C、CuO 都是固体，所以标；燃烧的反应物里有 O₂ 气体，所以不标。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-11">练习：碳的化学性质</a></div>
</div>
`},
{id: 'dfz', icon: '⚖️', title: '道法：民族团结', time: '约 25 分钟', html: `
<p class="lede">道法复习 5：第四单元，<b>民族团结</b>。（第四单元后面的目录没拍到，按课标的常考内容出题；以后拍到再补。）</p>
<div class="sec" id="z1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>考点</th><th>要记住的话</th></tr>
<tr><td>我国的民族</td><td>统一的多民族国家，<b>56 个民族</b></td></tr>
<tr><td>民族关系的基本特征</td><td><b>平等、团结、互助、和谐</b></td></tr>
<tr><td>基本政治制度</td><td><b>民族区域自治制度</b>：在少数民族聚居的地方实行区域自治，核心是保障少数民族当家作主</td></tr>
<tr><td>为什么要维护民族团结</td><td>民族团结是社会稳定、国家统一的保证；是各族人民的生命线</td></tr>
<tr><td>铸牢中华民族共同体意识</td><td>各民族像<b>石榴籽</b>一样紧紧抱在一起</td></tr>
<tr><td>中学生怎么做</td><td>尊重各民族风俗习惯；不说、不做不利于民族团结的话和事；积极参加民族团结活动</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="dfz-05">道法复习：民族团结</a></div>
</div>
`},
{id: 'app', icon: '🎨', title: '美术：角色设计——剪影', time: '约 30 分钟', html: `
<div class="sec lesson" id="d18-art"><h3><span class="n">01</span>美术第 5 课：角色设计从剪影开始（约 30 分钟）</h3>
<p class="lede">前 4 课学了透视、明暗、色彩。今天开始学游戏美术最核心的一件事：<b>设计角色</b>。专业设计师的第一步不是画细节，而是画<b>剪影</b>。</p>
<p><b>先学原理：什么是剪影？</b>把角色整个涂成黑色，只剩一个外轮廓。好的角色设计，<b>只看剪影也能认出是谁</b>——想想第五人格里的角色，就算站在很远的地方、只看到一个黑影，你也知道是谁。</p>
<table class="t"><tr><th>好剪影的 3 个秘诀</th><th>例子</th></tr>
<tr><td><b>1. 有一个夸张的特征</b></td><td>超大的帽子、很长的围巾、背上的大剑、尖耳朵</td></tr>
<tr><td><b>2. 大小形状有对比</b></td><td>大头小身、宽肩细腿、大斗篷配细手杖</td></tr>
<tr><td><b>3. 动作能看出性格</b></td><td>叉腰 = 自信；缩着身子 = 胆小；张开双臂 = 热情</td></tr></table>
<div class="why">🤔 形状也有"性格"：<b>圆形</b>让人觉得可爱、友好；<b>方形</b>让人觉得稳重、强壮；<b>三角形 / 尖角</b>让人觉得危险、狡猾。反派常常用很多尖角。</div>
<p><b>动手（Procreate）：</b></p>
<div class="step"><i>1</i><div>新建画布，用<b>纯黑色</b>和大号的笔刷，直接涂出 3 个角色的剪影（不画线稿、不画五官）：一个<b>英雄</b>、一个<b>反派</b>、一个<b>可爱的小伙伴</b>。</div></div>
<div class="step"><i>2</i><div>每个控制在 5 分钟以内。不满意就用橡皮擦掉一块、再涂一块——剪影就是要快速试。</div></div>
<div class="step"><i>3</i><div>给自己看一下：3 个剪影放在一起，能不能一眼分出谁是谁？谁用了圆形、谁用了尖角？</div></div>
<div class="tip">📤 想多赚点？上完这节课可以接订单「三个角色剪影」（交完小测还能开一个金币盲盒 🎁）。</div>
<div data-ck="d18-art"></div></div>
`},
  ],
  checks: {
 "d18-art": {
  "title": "美术第 5 课：角色设计——剪影",
  "qs": [
   {"q": "为什么角色设计要先画剪影？", "a": "因为好的角色只看外轮廓就能认出来；先画剪影可以快速试很多造型，确定大的形状，再画细节。", "pts": ["只看剪影也能认出角色", "能快速试造型 / 先定大形"]},
   {"q": "好剪影的 3 个秘诀是什么？", "a": "1. 有一个夸张的特征；2. 大小形状有对比；3. 动作能看出性格。", "pts": ["夸张的特征", "大小形状对比", "动作体现性格"]},
   {"q": "圆形、方形、三角形分别给人什么感觉？你的反派用了哪种？", "a": "圆形：可爱、友好；方形：稳重、强壮；三角形：危险、狡猾。反派一般用三角形 / 尖角多一些（说出自己的就行）。", "pts": ["圆形可爱友好", "方形稳重强壮", "三角形危险狡猾"]}
  ]
 }
},
};
