// 第 20 天 · 旋转综合（2026-11-05）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：旋转综合', time: '约 60 分钟', html: `
<p class="lede">旋转的压轴题看起来很吓人，其实套路就一个：<b>把分散的线段"转"到一起</b>，转完会出现<b>等边三角形</b>或<b>等腰直角三角形</b>，再用勾股定理。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>旋转会送你一个特殊三角形</h3>
<p>旋转前后，<b>对应点到旋转中心的距离相等</b>，而且它们和中心的夹角 = 旋转角。所以：</p>
<table class="t"><tr><th>旋转角</th><th>点、对应点、中心组成</th><th>能直接得到</th></tr>
<tr><td>60°</td><td><b>等边三角形</b></td><td>三边相等、三个角都是 60°</td></tr>
<tr><td>90°</td><td><b>等腰直角三角形</b></td><td>斜边 = 腰 × √2，底角 45°</td></tr></table>
<p><b>坐标里绕原点旋转（口诀）：</b>逆时针 90°：(x, y) → (−y, x)；顺时针 90°：(x, y) → (y, −x)；180°：(x, y) → (−x, −y)。</p>
<p class="s">不放心就画图：A(3, 1) 逆时针转 90°，"横 3 竖 1"变成"往左 1、往上 3"，得 (−1, 3)。</p>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>经典题：三条线段 PA、PB、PC 求角</h3>
<div class="ex"><b>例题 1</b>　正方形 ABCD 内有一点 P，PA = 1，PB = 2，PC = 3，求 ∠APB。<br><br>
<b>思路：</b>三条线段散在三个方向，用不上勾股。把 △ABP 绕点 B <b>顺时针旋转 90°</b>，让 A 转到 C，P 转到 P′。<br>
<b>第 1 步：</b>BP = BP′ = 2，∠PBP′ = 90° → △PBP′ 是等腰直角三角形，PP′ = 2√2，∠BP′P = 45°。<br>
<b>第 2 步：</b>P′C = PA = 1（旋转前后对应线段相等）。<br>
<b>第 3 步：</b>看 △PP′C：PP′² + P′C² = 8 + 1 = 9 = PC²，所以 <b>∠PP′C = 90°</b>（勾股定理的逆定理）。<br>
<b>第 4 步：</b>∠BP′C = 45° + 90° = 135°，它就是 ∠APB 转过来的，所以 <b>∠APB = 135°</b>。</div>
<p class="s">等边三角形版本也一样：转 60°，会出现一个<b>等边</b>三角形，第 1 步的角变成 60°。挑战题第 1 题就是它。</p>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>半角模型：正方形里的 45°</h3>
<div class="ex"><b>例题 2</b>　正方形 ABCD 中，E 在 BC 上，F 在 CD 上，∠EAF = 45°。证明 EF = BE + DF。<br><br>
<b>第 1 步：</b>把 △ADF 绕 A 顺时针转 90°，D 转到 B，F 转到 G（G 在 CB 的延长线上）。AG = AF，BG = DF。<br>
<b>第 2 步：</b>∠GAE = ∠GAB + ∠BAE = ∠DAF + ∠BAE = 90° − 45° = 45° = ∠EAF。<br>
<b>第 3 步：</b>△GAE 和 △FAE：AG = AF，∠GAE = ∠FAE，AE 公共 → 全等（SAS）→ EF = GE = GB + BE = <b>DF + BE</b>。</div>
<details class="try"><summary>试一试：半角模型里 BE = 1，DF = 2，EF 是多少？</summary><div>答案：EF = BE + DF = <b>3</b>。（再追问边长：设边长 a，(a − 1)² + (a − 2)² = 9，可以解出 a = 3。）</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-19">基础练习：旋转综合</a></p>
<p>再做挑战题：<a data-quiz="math-19b">挑战题：旋转综合</a></p>
<p>最后做综合滚动：<a data-quiz="roll-08">综合滚动 8</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + U7–U8 复习 + Grammar in Use', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 17：不只是游戏（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-17">单词课 17</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。今天的话题你最熟，写写你玩游戏时的感受吧。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>U7–U8 易错点（约 12 分钟）</h3>
<table class="t"><tr><th>易错点</th><th>规则</th><th>例句</th></tr>
<tr><td>只能用 that</td><td>先行词被 all / everything / anything / nothing / 最高级 / the first / the only 修饰</td><td>the best film <b>that</b> I have seen</td></tr>
<tr><td>从句里别重复</td><td>关系词已经代替了那个人 / 物</td><td>The boy who <s>he</s> is singing …</td></tr>
<tr><td>时间、钱、距离</td><td>看成整体 → 单数</td><td>Ten minutes <b>is</b> enough.</td></tr>
<tr><td>the number of / a number of</td><td>前者单数，后者 = many 复数</td><td>The number of … <b>is</b> / A number of … <b>are</b></td></tr>
<tr><td>就近原则</td><td>neither … nor / either … or / not only … but also 看后面那个</td><td>Neither he nor I <b>am</b> …</td></tr>
<tr><td>with / as well as</td><td>后面的不算主语</td><td>The teacher with two students <b>is</b> …</td></tr></table>
<div class="tip">📝 <a data-quiz="en-19">课本 U7–U8 复习</a></div></div>
<div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 11（后半，约 15 分钟）</h3>
<p>做 Unit 11 剩下的练习，用书后答案对，红笔改。书留着当笔记，<b>明天（周五）把这周两个单元的练习页各拍 1 张交上来</b>，回首页写一句：做了哪几个练习、错几题。明天周测考 Unit 10–11。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：精神的三间小屋 + 致巴特勒上尉的信', time: '约 30 分钟', html: `
<p class="lede">第五单元另外两篇：一篇用<b>比喻</b>讲道理，一篇是雨果写的<b>一封信</b>。课文在<a href="https://basic.smartedu.cn/tchMaterial" target="_blank">电子课本</a>里，先读梳理，有时间再读原文。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>《精神的三间小屋》（毕淑敏）</h3>
<table class="t"><tr><th>小屋</th><th>安放什么</th></tr>
<tr><td>第一间</td><td>我们的<b>爱和恨</b></td></tr>
<tr><td>第二间</td><td>我们的<b>事业</b></td></tr>
<tr><td>第三间</td><td>我们<b>自身</b></td></tr></table>
<p><b>中心观点：</b>人的精神也需要空间，要好好营造、经营自己精神的小屋。</p>
<p><b>论证方法：</b>整篇是<b>比喻论证</b>——把看不见的"精神世界"比作看得见的"房子"，抽象的道理就变得形象、好懂了。</p>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>《致巴特勒上尉的信》（雨果，法国）</h3>
<table class="t"><tr><th>问题</th><th>答案</th></tr>
<tr><td>为什么写信</td><td>巴特勒上尉问雨果怎么看英法联军远征中国，雨果回信</td></tr>
<tr><td>写了什么事</td><td>1860 年<b>英法联军火烧圆明园</b></td></tr>
<tr><td>怎么写圆明园</td><td>说它是"一个奇迹"，是人类艺术的宝库 → 赞美</td></tr>
<tr><td>"两个强盗"</td><td><b>英国和法国</b> → 谴责</td></tr>
<tr><td>"文明对野蛮所干的事情"</td><td><b>反语</b>：表面说欧洲"文明"，实际讽刺他们才是野蛮的</td></tr>
<tr><td>体现了雨果什么品质</td><td>正义感、良知，尊重人类文明（法国人谴责法国，更难得）</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="yw-10">议论文：精神的三间小屋 + 致巴特勒上尉的信</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：电学综合计算', time: '约 30 分钟', html: `
<p class="lede">欧姆定律 + 电功率合起来，就是期末的电学计算大题。今天按"<b>先判断串并联 → 写已知 → 选公式</b>"的顺序练。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>串联、并联的"三个一样"</h3>
<table class="t"><tr><th></th><th>串联</th><th>并联</th></tr>
<tr><td>一样的</td><td><b>电流</b>处处相等</td><td>各支路<b>电压</b>相等</td></tr>
<tr><td>要相加的</td><td>电压 U = U₁ + U₂；电阻 R = R₁ + R₂</td><td>电流 I = I₁ + I₂</td></tr>
<tr><td>比功率用</td><td>P = I²R</td><td>P = U²/R</td></tr></table>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>例题：让灯正常发光</h3>
<div class="ex"><b>例题</b>　"6 V 3 W"的灯泡接在 9 V 电源上，要串联一个多大的电阻才能让它正常发光？这个电阻的功率是多少？<br><br>
<b>第 1 步：正常发光 = 电压电流都是额定的。</b>灯两端 6 V，电流 I = P/U = 3 ÷ 6 = 0.5 A。<br>
<b>第 2 步：串联分压。</b>电阻分到 9 − 6 = 3 V。<br>
<b>第 3 步：</b>R = U/I = 3 ÷ 0.5 = <b>6 Ω</b>。<br>
<b>第 4 步：</b>P = UI = 3 × 0.5 = <b>1.5 W</b>。</div>
<p class="s">记住：<b>1 kW·h = 3.6 × 10⁶ J</b>。用 W = Pt 时，P 用 kW、t 用 h，算出来是 kW·h；P 用 W、t 用 s，算出来是 J。</p>
<details class="try"><summary>试一试：R₁ = 6 Ω、R₂ = 12 Ω 并联在 6 V 电源上，总电流是多少？</summary><div>答案：I₁ = 1 A，I₂ = 0.5 A，总电流 <b>1.5 A</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-13">练习：电学综合计算</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：二氧化碳的性质和用途', time: '约 30 分钟', html: `
<p class="lede">二氧化碳的性质，每一条都对应一个实验。记实验现象，比死背结论容易得多。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>三个实验，三个性质</h3>
<table class="t"><tr><th>实验</th><th>现象</th><th>说明</th></tr>
<tr><td>往放了高低两支蜡烛的烧杯里倒 CO₂</td><td><b>下面的先灭</b></td><td>不燃烧、不支持燃烧；<b>密度比空气大</b></td></tr>
<tr><td>往装 CO₂ 的软塑料瓶里倒水，拧紧摇一摇</td><td>瓶子<b>变瘪</b></td><td><b>能溶于水</b></td></tr>
<tr><td>CO₂ 通入紫色石蕊溶液</td><td>变<b>红</b>；加热后又变回紫色</td><td>CO₂ + H₂O = H₂CO₃（碳酸使石蕊变红）；H₂CO₃ = H₂O + CO₂↑（碳酸不稳定）</td></tr></table>
<div class="warn">⚠️ 让石蕊变红的是<b>碳酸</b>，不是 CO₂ 本身！干燥的 CO₂ 不能让干燥的石蕊纸花变红。</div>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>用途和影响</h3>
<table class="t"><tr><th>用途</th><th>利用了什么</th></tr>
<tr><td>灭火</td><td>不燃烧、不支持燃烧、密度比空气大</td></tr>
<tr><td>干冰：人工降雨、舞台烟雾、冷藏</td><td>干冰升华<b>吸热</b></td></tr>
<tr><td>气体肥料</td><td>光合作用的原料</td></tr>
<tr><td>汽水、碳酸饮料</td><td>能溶于水，和水反应</td></tr></table>
<p><b>温室效应：</b>CO₂ 太多 → 全球变暖。减少办法：少用化石燃料、开发新能源、多植树。</p>
<p class="s">CO₂ <b>无毒</b>，但不能供给呼吸。进菜窖、枯井前要做"灯火试验"。</p>
<div class="tip">📝 做题：<a data-quiz="chem-13">练习：二氧化碳的性质和用途</a></div>
</div>
`},
{id: 'dfz', icon: '⚖️', title: '道法：祖国统一和中国梦', time: '约 25 分钟', html: `
<p class="lede">道法复习 6：第四单元，<b>维护祖国统一</b>和<b>共圆中国梦</b>。</p>
<div class="sec" id="z1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>考点</th><th>要记住的话</th></tr>
<tr><td>一国两制</td><td>在一个中国的前提下，国家主体实行社会主义制度，香港、澳门、台湾保持原有的资本主义制度长期不变</td></tr>
<tr><td>前提和基础</td><td><b>一个中国原则</b></td></tr>
<tr><td>回归时间</td><td>香港 <b>1997</b> 年 7 月 1 日，澳门 <b>1999</b> 年 12 月 20 日</td></tr>
<tr><td>台湾</td><td>自古以来就是中国领土不可分割的一部分</td></tr>
<tr><td>中国梦的内涵</td><td><b>国家富强、民族振兴、人民幸福</b></td></tr>
<tr><td>怎么实现</td><td>走中国道路、弘扬中国精神、凝聚中国力量</td></tr>
<tr><td>中国精神</td><td>以<b>爱国主义</b>为核心的民族精神 + 以<b>改革创新</b>为核心的时代精神</td></tr>
<tr><td>青少年</td><td>树立远大理想，努力学习，把个人梦想融入国家发展</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="dfz-06">道法复习：祖国统一和中国梦</a></div>
</div>
`},
{id: 'app', icon: '🏠', title: '酷家乐：玄关和收纳', time: '约 30 分钟', html: `
<div class="sec lesson" id="d20-kjl"><h3><span class="n">01</span>酷家乐第 8 课：玄关和收纳（约 30 分钟）</h3>
<p class="lede"><b>玄关</b>就是进门的那一小块地方：换鞋、放钥匙、挂外套。面积很小，但每天都要用，是最考验"收纳设计"的地方。</p>
<p><b>先学原理：玄关的 4 件事和尺寸</b></p>
<table class="t"><tr><th>要满足的事</th><th>设计</th><th>尺寸</th></tr>
<tr><td>放鞋</td><td>鞋柜</td><td>深 <b>35–40 cm</b>（一只鞋的长度），太深浪费，太浅放不下</td></tr>
<tr><td>坐着换鞋</td><td>换鞋凳</td><td>高 <b>40–45 cm</b></td></tr>
<tr><td>挂外套、包</td><td>挂钩或衣柜</td><td>挂钩离地 <b>160–170 cm</b></td></tr>
<tr><td>出门前照一下</td><td>穿衣镜</td><td>镜子<b>别正对大门</b>（开门就看到自己会吓一跳）</td></tr></table>
<div class="why">🤔 收纳的诀窍：<b>往上要空间</b>。鞋柜做到顶，顶上放不常用的东西；鞋柜下面<b>悬空 15–20 cm</b>，常穿的鞋直接塞下面，进门不用开柜门。</div>
<p>通道要留 <b>至少 90 cm</b> 宽，两个人才能错身走过。</p>
<p><b>动手（酷家乐）：</b></p>
<div class="step"><i>1</i><div>打开你之前做过的户型（或新建一个），在入户门旁边划出一块玄关区域。</div></div>
<div class="step"><i>2</i><div>放一个到顶的鞋柜（下面悬空）、一张换鞋凳、一面镜子、两个挂钩。按上面的尺寸改大小。</div></div>
<div class="step"><i>3</i><div>站在门口的角度截一张图，看看进门第一眼是什么感觉。</div></div>
<div class="tip">📤 想多赚点？上完这节课可以接订单「改造一个玄关」（交完小测还能开一个金币盲盒 🎁）。</div>
<div data-ck="d20-kjl"></div></div>
`},
  ],
  checks: {
 "d20-kjl": {
  "title": "酷家乐第 8 课：玄关和收纳",
  "qs": [
   {"q": "鞋柜一般做多深？为什么不能太深？", "a": "35–40 cm，大约一只鞋的长度。太深会浪费玄关本来就不大的空间，鞋放进去也不好拿。", "pts": ["35–40 cm", "说出太深浪费空间 / 不好拿"]},
   {"q": "鞋柜下面悬空 15–20 cm 有什么好处？", "a": "常穿的鞋可以直接塞在下面，进门换鞋不用开柜门，玄关看起来也更轻、不压抑。", "pts": ["常穿的鞋放下面，不用开门", "看起来更轻 / 方便打扫（说一个就行）"]},
   {"q": "玄关通道至少留多宽？镜子要注意什么？", "a": "至少 90 cm；镜子不要正对大门。", "pts": ["90 cm", "镜子不正对大门"]}
  ]
 }
},
};
