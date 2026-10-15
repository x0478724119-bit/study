// 第 9 天 · 中心对称（2026-10-21）手册：7 科，约 4 小时
window.BOOK = {
  intro: '今天大约 4 小时：英语、数学各约 45 分钟，语文、物理、化学、历史、软件各约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：中心对称', time: '约 45 分钟', html: `
<p class="lede">今天学 28.2 <b>中心对称</b>。它其实就是"旋转 180°"这个特殊情况，所以昨天的性质今天全都能用。4 小节：<b>中心对称 → 中心对称图形 → 关于原点对称的点 → 和反比例函数的联系</b>。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>中心对称：转 180° 能重合</h3>
<p>把一个图形绕某个点旋转 <b>180°</b>，如果能和另一个图形重合，就说这两个图形<b>关于这个点中心对称</b>，这个点叫<b>对称中心</b>。</p>
<p><b>最重要的性质：</b>对应点的连线<b>经过对称中心</b>，而且<b>被对称中心平分</b>。</p>
<p class="s">为什么：A 绕 O 转 180°，转了半圈，A、O、A' 在一条直线上；又因为 OA = OA'（旋转的性质），所以 O 是 AA' 的中点。</p>
<div class="ex"><b>例题</b>　怎么找两个中心对称图形的对称中心？<br><br>
<b>第 1 步：</b>找一对对应点 A 和 A'，连起来。<br>
<b>第 2 步：</b>再找一对 B 和 B'，连起来。<br>
<b>第 3 步：</b>两条连线的交点就是对称中心（或者直接取 AA' 的中点）。</div>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>中心对称图形：自己转 180° 和自己重合</h3>
<p>注意区分两个说法：01 节说的"<b>两个</b>图形成中心对称"；这一节说的"<b>一个</b>图形是中心对称图形"（它自己绕中心转 180° 后和原来一模一样）。</p>
<table class="t"><tr><th>图形</th><th>轴对称？</th><th>中心对称？</th></tr>
<tr><td>等腰三角形、等边三角形</td><td>✅</td><td>❌</td></tr>
<tr><td>平行四边形</td><td>❌（一般的）</td><td>✅</td></tr>
<tr><td>矩形、菱形、正方形</td><td>✅</td><td>✅</td></tr>
<tr><td>圆</td><td>✅</td><td>✅</td></tr>
<tr><td>正五边形</td><td>✅</td><td>❌</td></tr>
<tr><td>正六边形</td><td>✅</td><td>✅</td></tr></table>
<p class="s">规律：正多边形，<b>边数是偶数</b>才是中心对称图形（正方形、正六边形、正八边形……）；奇数的（正三角形、正五边形）不是。</p>
<p><b>字母和数字也常考：</b>N、S、Z 是中心对称（转 180° 还是自己）但不是轴对称；H、O、X、I 两种都是；A、M、T 只是轴对称。拿不准就把手机倒过来看一看！</p>
<details class="try"><summary>试一试：线段是中心对称图形吗？对称中心在哪？</summary><div>
答案：是。对称中心是线段的<b>中点</b>（它也是轴对称图形，对称轴是垂直平分线，以及线段本身所在的直线）。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>坐标系里的对称点：一张表全搞定</h3>
<table class="t"><tr><th>点 P(x, y) 关于……对称</th><th>变成</th><th>口诀</th></tr>
<tr><td>x 轴</td><td>(x, −y)</td><td>关于谁，谁不变，另一个变号</td></tr>
<tr><td>y 轴</td><td>(−x, y)</td><td>同上</td></tr>
<tr><td><b>原点</b></td><td><b>(−x, −y)</b></td><td>两个都变号</td></tr></table>
<div class="ex"><b>例题</b>　点 A(a, 3) 和点 B(−2, b) 关于原点对称，求 a + b。<br><br>
<b>第 1 步：</b>关于原点对称，横纵坐标都互为相反数：a = 2，b = −3。<br>
<b>第 2 步：</b>a + b = 2 + (−3) = <b>−1</b>。</div>
<details class="try"><summary>试一试：点 P(m − 1, 4) 关于原点的对称点在第三象限，m 的范围是？</summary><div>
<details class="try"><summary>先看提示</summary><div>对称点是 (1 − m, −4)。第三象限要求横坐标 &lt; 0。</div></details>
答案：1 − m &lt; 0，<b>m &gt; 1</b>。</div></details>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>和反比例函数的联系：交点关于原点对称</h3>
<p>周一说过：反比例函数 y = k/x 的图象<b>关于原点中心对称</b>（点 (x, y) 在图象上，(−x, −y) 也一定在：因为 (−x)(−y) = xy = k）。</p>
<p>正比例函数 y = ax 的图象（过原点的直线）也关于原点对称。所以它们俩的两个交点，<b>一定关于原点对称</b>。</p>
<div class="ex"><b>例题</b>　直线 y = ax 和双曲线 y = k/x 交于 A、B 两点，A(2, 3)。求 B 的坐标。<br><br>
<b>不用解方程：</b>A、B 关于原点对称，所以 <b>B(−2, −3)</b>。<br>
<small>（想验证：k = 2 × 3 = 6，a = 3/2，联立 (3/2)x = 6/x → x² = 4 → x = ±2，确实是 (−2, −3)。）</small></div>
</div>

<p>基础题：<a data-quiz="math-10">基础练习：中心对称</a></p>
<p>挑战题：<a data-quiz="math-10b">挑战题：旋转 + 中心对称综合</a></p>

`},
{id: 'en', icon: '🔤', title: '英语：单词 + 被动语态 + Grammar in Use', time: '约 45 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 8：改变生活的发明（约 12 分钟）+ 造句（约 10 分钟）</h3>
<p>先读文章学 12 个新词（点单词看中文、听发音），再做题。</p>
<div class="tip">📝 <a data-quiz="vocab-08">单词课 8</a></div>
<p><b>然后回首页做「用新词写句子」：</b>挑 5 个新词各写一句，<b>一共至少 40 个英文单词</b>（输入框下面会显示词数）。每句加点东西：because…、when…、一个具体的人或事。写完检查<b>单复数和句首大写</b>（上周错在这里）。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 Unit 5 语法：被动语态（约 10 分钟）</h3>
<p>摸底时你在被动语态上错过，课本 Unit 5 正好学这个。</p>
<p><b>什么时候用被动？</b>当"谁做的"不重要，或者主语是<b>被做</b>的那一方：<br>
English <b>is spoken</b> all over the world.（英语"被"说）<br>
The phone <b>was invented</b> by Bell.（电话"被"发明）</p>
<p><b>公式：be + 过去分词</b>。be 负责时态，过去分词不变。</p>
<table class="t"><tr><th>时态</th><th>be 用</th><th>例句</th></tr>
<tr><td>一般现在时</td><td>am / is / are</td><td>These cars <b>are made</b> in Germany.</td></tr>
<tr><td>一般过去时</td><td>was / were</td><td>The window <b>was broken</b> yesterday.</td></tr></table>
<p><b>主动变被动三步：</b>① 原来的宾语变主语；② 动词变 be + 过去分词（时态和原句一样）；③ 原来的主语用 by 放到后面（不重要可以省）。<br>
Lu Xun <b>wrote</b> this story. → This story <b>was written</b> by Lu Xun.</p>
<div class="warn">⚠️ 常考的不规则过去分词：write → <b>written</b>，make → <b>made</b>，speak → <b>spoken</b>，break → <b>broken</b>，build → <b>built</b>，grow → <b>grown</b>，find → <b>found</b>。</div>
<div class="tip">📝 <a data-quiz="en-08">课本 U5 语法：被动语态</a></div></div><div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 6（约 15 分钟）</h3>
<p>拿出蓝色的 Grammar in Use，做 <b>Unit 6</b>：先读左页讲解，再做右页练习，用书后答案自己对，错的改过来。<b>做完拍照发到工作室群</b>，回首页写一句：做了第几单元、讲什么、错几题。过去进行时（I was doing）：过去某一刻正在做的事，常和 when 连用。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：默写第六单元', time: '约 30 分钟', html: `
<p class="lede">默写第二练：<b>第六单元</b>（曹刿论战、邹忌讽齐王纳谏、陈涉世家、出师表、诗词曲五首）和第一单元《沁园春·雪》。方法和周一一样：先懂意思，再遮住右边背。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>名句表（15 分钟）</h3>
<table class="t"><tr><th>篇目</th><th>名句</th><th>意思</th></tr>
<tr><td>曹刿论战</td><td>肉食者<b style="color:#d26a4a">鄙</b>，未能远<b style="color:#d26a4a">谋</b></td><td>当官的目光短浅，不能深谋远虑</td></tr>
<tr><td>曹刿论战</td><td>一鼓作气，再而<b style="color:#d26a4a">衰</b>，三而<b style="color:#d26a4a">竭</b></td><td>第一次击鼓士气最旺，第二次减弱，第三次就没了</td></tr>
<tr><td>邹忌讽齐王纳谏</td><td>群臣吏民能面<b style="color:#d26a4a">刺</b>寡人之过者，受上赏</td><td>能当面指出我过错的，受上等奖赏</td></tr>
<tr><td>陈涉世家</td><td>燕雀安知<b style="color:#d26a4a">鸿鹄</b>之志哉</td><td>小鸟怎么知道大雁天鹅的志向（比喻志向远大）</td></tr>
<tr><td>陈涉世家</td><td>王侯将相宁有种乎</td><td>王侯将相难道是天生的吗</td></tr>
<tr><td>出师表</td><td>亲贤臣，远小人，此先汉所以兴隆也</td><td>亲近贤臣、疏远小人，是西汉兴盛的原因</td></tr>
<tr><td>出师表</td><td>受任于败军之际，奉命于危难之间</td><td>在战败时接受任务，在危难中奉命出使</td></tr>
<tr><td>出师表</td><td><b style="color:#d26a4a">苟</b>全性命于乱世，不求闻达于诸侯</td><td>只想在乱世里保全性命，不求在诸侯中出名</td></tr>
<tr><td>出师表</td><td>不宜妄自<b style="color:#d26a4a">菲薄</b>，引喻失义，以塞忠谏之路也</td><td>不应该随便看轻自己，说不恰当的话，堵住忠臣劝谏的路</td></tr>
<tr><td>十五从军征</td><td>十五从军征，八十始得归</td><td>十五岁去当兵，八十岁才回来</td></tr>
<tr><td>白雪歌送武判官归京</td><td>忽如一夜春风来，千树万树<b style="color:#d26a4a">梨</b>花开</td><td>用梨花比喻雪（千古名句）</td></tr>
<tr><td>白雪歌送武判官归京</td><td>山回路转不见君，雪上空留马行处</td><td>送别：人看不见了，只剩雪上的马蹄印</td></tr>
<tr><td>南乡子</td><td>天下英雄谁敌手？曹刘。生子当如孙仲<b style="color:#d26a4a">谋</b></td><td>赞孙权，暗讽南宋朝廷无能</td></tr>
<tr><td>过零丁洋</td><td>人生自古谁无死？留取丹心照<b style="color:#d26a4a">汗青</b></td><td>人都会死，要留下一颗忠心照耀史册</td></tr>
<tr><td>过零丁洋</td><td>山河破碎风飘<b style="color:#d26a4a">絮</b>，身世浮沉雨打<b style="color:#d26a4a">萍</b></td><td>国家和个人命运都飘摇不定</td></tr>
<tr><td>山坡羊·潼关怀古</td><td>兴，百姓苦；亡，百姓苦</td><td>朝代兴也好亡也好，受苦的都是百姓（主旨）</td></tr>
<tr><td>沁园春·雪</td><td>江山如此多<b style="color:#d26a4a">娇</b>，引无数英雄竞<b style="color:#d26a4a">折腰</b></td><td>承上启下，从写景转到评人</td></tr></table>
<div class="tip">✍️ 背完做默写：<a data-quiz="yw-03">默写：第六单元</a>（不要看表！）</div>
</div>

`},
{id: 'phy', icon: '⚡', title: '物理：欧姆定律', time: '约 30 分钟', html: `
<p class="lede">17.2 <b>欧姆定律</b>：把昨天两个实验的结论合成一个公式。这是初中电学最核心的公式，后面的电功率、期末大题全靠它。</p>

<div class="sec" id="p1"><h3><span class="n">01</span>欧姆定律：I = U / R</h3>
<p>昨天：电流和电压成正比，和电阻成反比。合起来就是：</p>
<p style="text-align:center;font-size:20px"><b>I = U / R</b></p>
<table class="t"><tr><th>字母</th><th>名称</th><th>单位</th></tr>
<tr><td>I</td><td>电流</td><td>安培 A</td></tr><tr><td>U</td><td>电压</td><td>伏特 V</td></tr><tr><td>R</td><td>电阻</td><td>欧姆 Ω</td></tr></table>
<p>它可以变形成两个式子：<b>U = IR</b>（求电压）、<b>R = U / I</b>（求电阻）。记法：U 在上面，I 和 R 在下面并排，盖住要求的那个，剩下的就是算法。</p>
<div class="warn">⚠️ 必考概念题：R = U/I 只是<b>计算</b>电阻的方法，<b>不是</b>说电阻由电压和电流决定。电阻是导体自己的性质（材料、长度、粗细、温度），<b>电压变成 0，电阻也不会变成 0</b>。</div>
</div>

<div class="sec" id="p2"><h3><span class="n">02</span>计算题怎么写（考试要按这个格式）</h3>
<div class="ex"><b>例题 1</b>　一个电阻两端的电压是 6 V，通过它的电流是 0.3 A，它的电阻是多少？如果电压增大到 12 V，电流是多少？<br><br>
<b>第 1 步：写已知。</b>U = 6 V，I = 0.3 A。<br>
<b>第 2 步：写公式，代数，带单位。</b>R = U / I = 6 V ÷ 0.3 A = <b>20 Ω</b>。<br>
<b>第 3 步：电压变了，电阻不变。</b>R 还是 20 Ω。<br>
<b>第 4 步：</b>I' = U' / R = 12 V ÷ 20 Ω = <b>0.6 A</b>。</div>
<div class="warn">⚠️ <b>同一性</b>：公式里的 I、U、R 必须是<b>同一个导体、同一个时刻</b>的。电路里有两个电阻时，给每个量加下标（U₁、I₁、R₁），别把 R₁ 的电压拿去除 R₂。</div>
<div class="ex"><b>例题 2（单位换算）</b>　一个灯泡的电阻是 10 Ω，通过它的电流是 200 mA，灯两端的电压是多少？<br><br>
<b>第 1 步：先换单位。</b>200 mA = 0.2 A（1 A = 1000 mA）。<br>
<b>第 2 步：</b>U = IR = 0.2 A × 10 Ω = <b>2 V</b>。</div>
<details class="try"><summary>试一试：一段导体两端加 3 V 电压时电流是 0.15 A；电压变成 0 时，它的电阻是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>先用 R = U/I 算出电阻。电压变成 0，电阻会变吗？</div></details>
答案：R = 3 ÷ 0.15 = 20 Ω。电压为 0 时电阻<b>还是 20 Ω</b>（电阻是导体自己的性质）。</div></details>
</div>

<div class="sec" id="p3"><h3><span class="n">03</span>看图读数：I-U 图象</h3>
<p>以 U 为横轴、I 为纵轴，定值电阻的图象是一条过原点的直线。<b>直线越陡，电阻越小</b>（同样的电压，电流更大）。</p>
<div class="ex"><b>例题</b>　甲、乙两个电阻的 I-U 图象都是过原点的直线，当 U = 3 V 时，I甲 = 0.6 A，I乙 = 0.3 A。哪个电阻大？<br><br>
R甲 = 3 ÷ 0.6 = 5 Ω，R乙 = 3 ÷ 0.3 = 10 Ω，<b>乙大</b>（乙的线更平）。</div>
<div class="tip">📝 做题：<a data-quiz="phy-02">练习：欧姆定律</a></div>
</div>

`},
{id: 'chem', icon: '🧪', title: '化学：水的组成', time: '约 30 分钟', html: `
<p class="lede">课题 2：<b>水的组成</b>。水是由什么组成的？科学家用两个实验找到了答案：让氢气燃烧生成水，以及把水电解成氢气和氧气。顺便学怎么给物质分类。</p>

<div class="sec" id="c1"><h3><span class="n">01</span>氢气：最轻的气体，能燃烧</h3>
<ul><li>物理性质：无色、无味，<b>密度最小</b>的气体，难溶于水。</li>
<li>化学性质：能燃烧，产生<b>淡蓝色火焰</b>，罩在火焰上的干冷烧杯内壁有<b>水珠</b>。<br>文字表达式：氢气 + 氧气 →（点燃）水，即 2H₂ + O₂ =点燃= 2H₂O</li></ul>
<div class="warn">⚠️ 点燃氢气前<b>一定要验纯</b>：氢气混有空气，点燃可能爆炸。方法：收集一小试管氢气，拇指堵住，靠近火焰再松开。发出<b>尖锐的爆鸣声</b> = 不纯；声音很小 = 较纯。</div>
</div>

<div class="sec" id="c2"><h3><span class="n">02</span>电解水：正氧负氢，氢二氧一</h3>
<p>给水通直流电（水里加少量硫酸钠或氢氧化钠，<b>增强导电性</b>），两个电极上都会冒气泡。</p>
<table class="t"><tr><th></th><th>正极</th><th>负极</th></tr>
<tr><td>气体</td><td>氧气</td><td>氢气</td></tr>
<tr><td>体积</td><td>1</td><td>2</td></tr>
<tr><td>检验</td><td>带火星木条复燃</td><td>能燃烧，淡蓝色火焰</td></tr></table>
<p class="s">口诀：<b>正氧负氢，氢二氧一</b>（氢气和氧气体积比 2 : 1）。</p>
<p><b>结论：</b>水是由<b>氢元素和氧元素</b>组成的。（反应前后元素种类不变：生成了含氢的氢气和含氧的氧气，说明水里有这两种元素）</p>
<div class="warn">⚠️ 说法要准确：水是由氢<b>元素</b>和氧<b>元素</b>组成的，<b>不能</b>说"水是由氢气和氧气组成的"（水里没有氢气和氧气）。微观上：一个水分子由两个氢原子和一个氧原子构成。</div>
<details class="try"><summary>试一试：电解水时，负极得到 10 mL 气体，正极得到多少？</summary><div>答案：负极是氢气 10 mL，氢二氧一，正极氧气 <b>5 mL</b>。</div></details>
</div>

<div class="sec" id="c3"><h3><span class="n">03</span>物质分类：一张图记住</h3>
<table class="t"><tr><th>类别</th><th>定义</th><th>例子</th></tr>
<tr><td>混合物</td><td>两种或多种物质</td><td>空气、海水、矿泉水</td></tr>
<tr><td>纯净物</td><td>一种物质（能写出化学式）</td><td>氧气、水、蒸馏水</td></tr>
<tr><td>　└ 单质</td><td>纯净物里，<b>只有一种元素</b></td><td>O₂、H₂、Fe</td></tr>
<tr><td>　└ 化合物</td><td>纯净物里，<b>两种或以上元素</b></td><td>H₂O、CO₂、KMnO₄</td></tr>
<tr><td>　　　└ 氧化物</td><td>化合物里，<b>两种元素，其中一种是氧</b></td><td>H₂O、CO₂、MnO₂</td></tr></table>
<div class="warn">⚠️ 两个陷阱：① KMnO₄ 含氧但有<b>三种</b>元素，不是氧化物；② O₂ 只有一种元素，是单质，也不是氧化物。判断顺序：先看是不是纯净物 → 再数元素种类。</div>
<div class="tip">📝 做题：<a data-quiz="chem-02">练习：水的组成和物质分类</a></div>
</div>

`},
{id: 'hist', icon: '🏛️', title: '历史：中古时期', time: '约 25 分钟', html: `
<p class="lede">历史复习第二次：<b>第三、四单元：封建时代的欧洲 + 中古时期的亚非美</b>。先看 10 分钟速记表，再做题。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>内容</th><th>必记</th></tr>
<tr><td>法兰克王国</td><td>481 年克洛维建立；<b>查理·马特改革</b>（采邑制：服兵役才能得到土地）；<b>"丕平献土"</b>形成教皇国</td></tr>
<tr><td>西欧封建制度</td><td>封君封臣制度："<b>我的附庸的附庸不是我的附庸</b>"；庄园里的<b>农奴</b>依附领主，没有人身自由</td></tr>
<tr><td>西欧城市和大学</td><td>11 世纪城市兴起，市民争取<b>自治权</b>；最早的大学：<b>博洛尼亚大学、巴黎大学、牛津大学</b></td></tr>
<tr><td>拜占庭帝国</td><td>东罗马帝国，首都<b>君士坦丁堡</b>；查士丁尼主持编纂<b>《民法大全》</b>；<b>1453 年</b>被奥斯曼土耳其灭亡</td></tr>
<tr><td>日本</td><td><b>646 年大化改新</b>：学习隋唐制度，从奴隶社会走向封建社会；后来出现<b>幕府</b>统治和<b>武士</b>阶层</td></tr>
<tr><td>阿拉伯帝国</td><td><b>伊斯兰教</b>：7 世纪初<b>穆罕默德</b>创立；<b>阿拉伯数字</b>其实是<b>印度人</b>发明，阿拉伯人传到欧洲；<b>《一千零一夜》</b></td></tr>
<tr><td>非洲和美洲</td><td>非洲：马里、桑海；美洲：<b>玛雅文明</b>（会用"0"，天文历法发达）、阿兹特克、<b>印加</b>（南美安第斯山区）</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="hist-02">历史复习 2：中古时期</a></div>
</div>

`},
{id: 'app', icon: '🛠️', title: '软件：酷家乐客厅', time: '约 30 分钟', html: `
<div class="sec lesson" id="d9-kjl"><h3><span class="n">01</span>酷家乐第 6 课：客厅布局和动线（约 30 分钟）</h3>
<p class="lede">卧室你已经会做了。客厅更难：人来人往，要考虑"<b>怎么走</b>"。今天学 3 个设计师必背的尺寸，再在酷家乐里摆一个客厅。</p>
<p><b>先学原理：动线</b></p>
<p>动线就是人在房间里走的路线。好的客厅：从门口走到沙发、走到阳台，<b>不用绕、不会撞到家具</b>。</p>
<table class="t"><tr><th>尺寸</th><th>多少</th><th>为什么</th></tr>
<tr><td>主要通道宽度</td><td>至少 <b>90 cm</b></td><td>一个人正常走过去需要大约这么宽</td></tr>
<tr><td>沙发到茶几</td><td>约 <b>40–45 cm</b></td><td>坐着伸手能拿到东西，腿也放得下</td></tr>
<tr><td>沙发到电视</td><td>约 <b>2.5–3.5 m</b>（约是屏幕对角线的 2.5–3 倍）</td><td>太近看着累，太远看不清</td></tr></table>
<div class="why">🤔 为什么沙发一般背靠墙、对着电视？背后有依靠，人坐着有安全感；而且这样最省空间，中间留出完整的通道。</div>
<p><b>动手：</b></p>
<div class="step"><i>1</i><div>新建一个方案，画一个大约 4 m × 5 m 的房间，开一扇门、一扇通往阳台的窗或门。</div></div>
<div class="step"><i>2</i><div>先放<b>沙发</b>（靠墙），再放对面的<b>电视柜</b>，量一下距离在 2.5–3.5 m 之间。</div></div>
<div class="step"><i>3</i><div>放<b>茶几</b>，离沙发 40–45 cm。再加一个单人椅或边几。</div></div>
<div class="step"><i>4</i><div>用手指在平面图上"走"一遍：从门口 → 沙发 → 阳台。路上有没有地方小于 90 cm？</div></div>
<div class="step"><i>5</i><div>用第 4 课的 60-30-10 配色换材质，切 3D 截一张图。</div></div>
<div class="tip">📤 做得满意的话，可以接订单「客厅设计」，把它做完整。</div>
<div data-ck="d9-kjl"></div></div>

`},
  ],
  checks: {
 "d9-kjl": {
  "title": "酷家乐第 6 课：客厅布局和动线",
  "qs": [
   {
    "q": "什么是动线？客厅主通道至少要多宽？",
    "a": "动线是人在房间里走的路线。主通道至少 <b>90 cm</b>。",
    "pts": [
     "说出动线的意思",
     "90 cm"
    ]
   },
   {
    "q": "沙发到茶几、沙发到电视，分别大约多远？",
    "a": "沙发到茶几约 <b>40–45 cm</b>；沙发到电视约 <b>2.5–3.5 m</b>（屏幕对角线的 2.5–3 倍）。",
    "pts": [
     "40–45 cm",
     "2.5–3.5 m"
    ]
   },
   {
    "q": "你的客厅里，从门口走到阳台要经过哪些家具？有没有哪里太窄？",
    "a": "没有标准答案。如果有地方小于 90 cm，挪家具或换小一点的茶几。",
    "pts": [
     "描述了路线",
     "检查了宽度"
    ]
   }
  ]
 }
},
};
