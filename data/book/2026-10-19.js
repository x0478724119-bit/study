// 第 7 天 · 反比例函数（2026-10-19）手册：7 科，约 4 小时
window.BOOK = {
  intro: '今天大约 4 小时：英语、数学各约 45 分钟，语文、物理、化学、历史、软件各约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：反比例函数', time: '约 45 分钟', html: `
<p class="lede">学校已经讲完第 27 章反比例函数，但你在学习站上还没练过，今天帮你从头过一遍。内容不多，一共 4 小节：<b>什么是反比例 → 图象长什么样 → k 的面积秘密 → 和一次函数一起出题</b>。读完做基础题，再做挑战题。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>什么是反比例：两个量"一个变大，另一个按比例变小"</h3>
<p><b>先看生活里的例子：</b>你有 12 块巧克力，要平均分给几个人。</p>
<table class="t"><tr><th>人数 x</th><td>1</td><td>2</td><td>3</td><td>4</td><td>6</td></tr><tr><th>每人分到 y</th><td>12</td><td>6</td><td>4</td><td>3</td><td>2</td></tr></table>
<p>人数翻倍，每人分到的就减半。不管怎么分，<b>x × y 永远等于 12</b>。这种关系就叫<b>反比例</b>，写成 <b>y = 12/x</b>。</p>
<p>一般的写法：<b>y = k/x（k 是常数，k ≠ 0）</b>。它还有两种"变装"写法，考试会拿来考你认不认识：</p>
<ul><li><b>xy = k</b>（两个量的乘积是定值）</li><li><b>y = kx⁻¹</b>（x 的 −1 次方就是 1/x）</li></ul>
<div class="warn">⚠️ 两个陷阱：① x 不能等于 0（分母不能为 0）；② <b>y = x/3 不是反比例</b>，它是正比例（x 在分子上）。y = 2/(x + 1) 也不是，分母必须只有 x。</div>
<div class="ex"><b>例题</b>　下面哪些是反比例函数？① y = 3/x　② y = x/5　③ xy = −2　④ y = 1/(x − 1)　⑤ y = 4x⁻¹<br><br>
<b>第 1 步：</b>看能不能变成 y = k/x 的样子。<br>
① 直接就是，k = 3 ✅　② x 在上面，是正比例 ❌　③ 两边除以 x：y = −2/x，k = −2 ✅　④ 分母是 x − 1，不是只有 x ❌　⑤ x⁻¹ = 1/x，所以 y = 4/x ✅<br>
<b>答案：①③⑤</b></div>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>图象：两条分开的曲线，叫"双曲线"</h3>
<svg viewBox="0 0 520 220" style="width:100%;max-width:520px;font-size:12px">
<g transform="translate(130,110)"><line x1="-110" y1="0" x2="110" y2="0" stroke="#999"/><line x1="0" y1="-100" x2="0" y2="100" stroke="#999"/>
<polyline points="12,-100.0 14,-85.7 17,-70.6 20,-60.0 25,-48.0 30,-40.0 40,-30.0 50,-24.0 65,-18.5 80,-15.0 95,-12.6 110,-10.9" fill="none" stroke="#d26a4a" stroke-width="2.5"/><polyline points="-12,100.0 -14,85.7 -17,70.6 -20,60.0 -25,48.0 -30,40.0 -40,30.0 -50,24.0 -65,18.5 -80,15.0 -95,12.6 -110,10.9" fill="none" stroke="#d26a4a" stroke-width="2.5"/>
<text x="-100" y="-80" fill="#d26a4a">k &gt; 0</text><text x="45" y="-40">第一象限</text><text x="-95" y="50">第三象限</text></g>
<g transform="translate(390,110)"><line x1="-110" y1="0" x2="110" y2="0" stroke="#999"/><line x1="0" y1="-100" x2="0" y2="100" stroke="#999"/>
<polyline points="-12,-100.0 -14,-85.7 -17,-70.6 -20,-60.0 -25,-48.0 -30,-40.0 -40,-30.0 -50,-24.0 -65,-18.5 -80,-15.0 -95,-12.6 -110,-10.9" fill="none" stroke="#4a7fc1" stroke-width="2.5"/><polyline points="12,100.0 14,85.7 17,70.6 20,60.0 25,48.0 30,40.0 40,30.0 50,24.0 65,18.5 80,15.0 95,12.6 110,10.9" fill="none" stroke="#4a7fc1" stroke-width="2.5"/>
<text x="55" y="-80" fill="#4a7fc1">k &lt; 0</text><text x="-95" y="-40">第二象限</text><text x="45" y="50">第四象限</text></g></svg>
<p><b>为什么是两条？</b>x 可以是正数也可以是负数（只是不能是 0）。k &gt; 0 时，x 正 y 就正（第一象限），x 负 y 就负（第三象限），所以分成两支。</p>
<table class="t"><tr><th></th><th>k &gt; 0</th><th>k &lt; 0</th></tr>
<tr><td>在哪两个象限</td><td>一、三</td><td>二、四</td></tr>
<tr><td>增减性</td><td><b>在每个象限内</b>，x 越大 y 越小</td><td><b>在每个象限内</b>，x 越大 y 越大</td></tr></table>
<div class="warn">⚠️ 最常考的陷阱："在每个象限内"这几个字不能丢。y = 6/x 里，x = −1 时 y = −6，x = 1 时 y = 6：x 变大了，y 也变大了！因为这两个点不在同一支上。所以<b>比较两个点的 y 时，先看它们在不在同一个象限</b>。</div>
<p>另外两个性质：曲线越来越靠近坐标轴，但<b>永远碰不到</b>；整个图象<b>关于原点对称</b>（周三学中心对称时会再用到）。</p>
<div class="ex"><b>例题</b>　点 A(−2, y₁)、B(−1, y₂)、C(3, y₃) 都在 y = −4/x 上，比较 y₁、y₂、y₃ 的大小。<br><br>
<b>方法一（最稳）：直接代进去算。</b>y₁ = −4 ÷ (−2) = 2；y₂ = −4 ÷ (−1) = 4；y₃ = −4 ÷ 3 = −4/3。<br>
所以 <b>y₃ &lt; y₁ &lt; y₂</b>。<br>
<b>方法二（不用算）：</b>k = −4 &lt; 0，图象在二、四象限。A、B 的 x 是负数，在第二象限，y 是正的；C 的 x 是正数，在第四象限，y 是负的，所以 y₃ 最小。A、B 在同一个象限里，k &lt; 0 时 x 越大 y 越大，−1 &gt; −2，所以 y₂ &gt; y₁。</div>
<details class="try"><summary>试一试：y = k/x 的图象经过点 (2, −3)。k = ? 图象在哪两个象限？</summary><div>
<details class="try"><summary>先看提示</summary><div>把 x = 2、y = −3 代进去；或者直接用 k = x × y。</div></details>
答案：k = 2 × (−3) = −6，k &lt; 0，在第二、四象限。</div></details>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>k 的面积秘密：一个必考小技巧</h3>
<p>在 y = k/x 上随便取一个点 P(x, y)，从 P 往两条坐标轴画垂线，和坐标轴围成一个长方形。</p>
<p>长方形的长是 |x|，宽是 |y|，面积 = |x| × |y| = |xy| = <b>|k|</b>。</p>
<p><b>神奇的地方：</b>不管 P 取在曲线的哪里，这个长方形的面积都一样，永远是 |k|！如果只要一半（P、原点 O、垂足连成的三角形），面积就是 <b>|k|/2</b>。</p>
<div class="ex"><b>例题 1</b>　P 是 y = 6/x 上的一点，PA ⊥ x 轴于 A，求 △OPA 的面积。<br><br>
<b>第 1 步：</b>△OPA 是长方形的一半。<br><b>第 2 步：</b>面积 = |k|/2 = 6/2 = <b>3</b>。（不用知道 P 在哪！）</div>
<div class="ex"><b>例题 2（倒过来用）</b>　P 在 y = k/x 上，而且在第二象限，P 向两轴作垂线围成的长方形面积是 5，求 k。<br><br>
<b>第 1 步：</b>|k| = 5，所以 k = 5 或 −5。<br><b>第 2 步：</b>图象过第二象限 → k &lt; 0 → <b>k = −5</b>。<br>
<small>（最容易错：忘了看象限定正负号）</small></div>
</div>

<div class="sec" id="m4"><h3><span class="n">04</span>和一次函数一起出题：求交点、比大小</h3>
<p>两个函数的图象相交，交点同时在两个图象上，所以<b>把两个式子联立成方程组</b>就能求交点。</p>
<div class="ex"><b>例题</b>　y = x + 1 和 y = 2/x 的图象交于 A、B 两点。① 求 A、B 的坐标；② x 取什么值时，x + 1 &gt; 2/x？<br><br>
<b>第 1 步：让两个 y 相等。</b>x + 1 = 2/x。<br>
<b>第 2 步：两边乘 x，变成一元二次方程。</b>x² + x = 2 → x² + x − 2 = 0 → (x + 2)(x − 1) = 0 → x = −2 或 x = 1。<br>
<b>第 3 步：求 y。</b>x = 1 时 y = 2；x = −2 时 y = −1。交点 <b>(1, 2) 和 (−2, −1)</b>。<br>
<b>第 4 步：比大小要看图。</b>"x + 1 &gt; 2/x" 意思是直线在双曲线<b>上方</b>。画个草图：两个交点把 x 轴分成几段，再加上 x = 0 这个"断点"（双曲线在这里断开）。<br>
在 x &gt; 1 时直线在上面；在 −2 &lt; x &lt; 0 时直线也在上面。<br>
<b>答案：−2 &lt; x &lt; 0 或 x &gt; 1。</b></div>
<div class="warn">⚠️ 别忘了 x = 0 这个断点！只写 "x &gt; −2" 是错的。拿不准的时候，在每一段里随便挑一个数代进去试试（比如 x = −1：直线 y = 0，双曲线 y = −2，0 &gt; −2 ✅）。</div>
<p><b>生活中的反比例（物理课马上会用到）：</b>电压一定时，电流和电阻成反比：<b>I = U/R</b>。比如 U = 6 V，电阻 R = 3 Ω 时电流 I = 2 A，电阻变成 6 Ω，电流就减半变成 1 A。周三物理学欧姆定律时你会再见到它。</p>
</div>

<p>学完了，先做基础题：<a data-quiz="math-08">基础练习：反比例函数</a></p>
<p>再做挑战题：<a data-quiz="math-08b">挑战题：反比例函数</a></p>

`},
{id: 'en', icon: '🔤', title: '英语：单词 + 宾语从句 + Grammar in Use', time: '约 45 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 6：奶奶的相册（约 12 分钟）+ 造句（约 10 分钟）</h3>
<p>先读文章学 12 个新词（点单词看中文、听发音），再做题。这周的单词和课本 Unit 4「Our Memory」、Unit 5「发明」、Unit 6「太空」的话题对应。</p>
<div class="tip">📝 <a data-quiz="vocab-06">单词课 6</a></div>
<p><b>然后回首页做「用新词写句子」：</b>挑 5 个新词各写一句，<b>一共至少 40 个英文单词</b>（输入框下面会显示词数）。每句加点东西：because…、when…、一个具体的人或事。写完检查<b>单复数和句首大写</b>（上周错在这里）。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 Unit 4 语法：宾语从句（疑问词）（约 10 分钟）</h3>
<p>宾语从句 = 一个句子放在动词后面，当宾语。Unit 3 学了用 that / if / whether 引导，Unit 4 学用<b>疑问词</b>（what、where、when、why、how、who……）引导。</p>
<p><b>规则 1（最重要）：从句用陈述句语序。</b>"问句里套问句，后半句不倒装。"</p>
<table class="t"><tr><th>原来的问句</th><th>放进句子里以后</th></tr>
<tr><td>Where <b>is</b> the library?</td><td>Can you tell me where <b>the library is</b>?</td></tr>
<tr><td>What <b>does he want</b>?</td><td>I don't know what <b>he wants</b>.（去掉 does，动词加 s）</td></tr>
<tr><td>When <b>did we</b> first <b>meet</b>?</td><td>Do you remember when <b>we</b> first <b>met</b>?（去掉 did，动词变过去式）</td></tr></table>
<p><b>规则 2：时态跟着主句走。</b>主句是过去时（said、asked、told），从句也要用过去的时态：will → would，is → was。<br><small>例外：客观真理（地球绕太阳转）永远用一般现在时。</small></p>
<p><b>规则 3：if / whether 表示"是否"。</b>后面直接有 or not 时只能用 whether。</p>
<div class="warn">⚠️ 摸底时你在"宾语从句语序"上错过。做题时每次都问自己：从句里是不是"主语在前、动词在后"？</div>
<div class="tip">📝 <a data-quiz="en-06">课本 U4 语法：宾语从句</a></div></div><div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 4（约 15 分钟）</h3>
<p>拿出蓝色的 Grammar in Use，做 <b>Unit 4</b>：先读左页讲解，再做右页练习，用书后答案自己对，错的改过来。<b>做完拍照发到工作室群</b>，回首页写一句：做了第几单元、讲什么、错几题。这一单元讲 I am doing 和 I do 的第二部分：有些动词（like、know、want、understand）一般不用进行时。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：默写第三单元', time: '约 30 分钟', html: `
<p class="lede">学校语文已经上完第一、二、三、六单元。你作文好，弱点是<b>古诗文默写</b>，所以这周有三天专门练默写。今天是<b>第三单元</b>：岳阳楼记、醉翁亭记、湖心亭看雪、诗词三首。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>怎么背最快（15 分钟）</h3>
<div class="step"><i>1</i><div><b>只背"名句"，不背全文。</b>考试默写 90% 考的是下面表里这些句子。</div></div>
<div class="step"><i>2</i><div><b>先理解再背。</b>每句先看懂意思（表里有），懂了的句子背一遍就记住。</div></div>
<div class="step"><i>3</i><div><b>遮住右边，自己说。</b>说不出来再看，反复两三轮。</div></div>
<div class="step"><i>4</i><div><b>易错字单独记</b>（标红的）。默写错一个字就是 0 分。</div></div>
<table class="t"><tr><th>篇目</th><th>名句</th><th>意思</th></tr>
<tr><td>岳阳楼记</td><td>先天下之忧而忧，后天下之乐而乐</td><td>在天下人忧愁之前先忧愁，在天下人快乐之后才快乐（全文主旨）</td></tr>
<tr><td>岳阳楼记</td><td>不以物喜，不以己悲</td><td>不因为外物好坏、自己得失而高兴或悲伤</td></tr>
<tr><td>岳阳楼记</td><td>居庙堂之高则忧其民，处江湖之远则忧其君</td><td>在朝做官就担忧百姓，被贬到远方就担忧君主</td></tr>
<tr><td>岳阳楼记</td><td>衔远山，吞长江，浩浩<b style="color:#d26a4a">汤汤</b>，横无际<b style="color:#d26a4a">涯</b></td><td>洞庭湖的壮阔（汤汤读 shāng shāng）</td></tr>
<tr><td>岳阳楼记</td><td>沙鸥<b style="color:#d26a4a">翔集</b>，锦<b style="color:#d26a4a">鳞</b>游泳</td><td>春天湖景</td></tr>
<tr><td>醉翁亭记</td><td>醉翁之意不在酒，在乎山水之间也</td><td>醉翁的心思不在酒上，在山水之间</td></tr>
<tr><td>醉翁亭记</td><td>山水之乐，得之心而<b style="color:#d26a4a">寓</b>之酒也</td><td>山水的乐趣，领会在心里，寄托在酒上</td></tr>
<tr><td>醉翁亭记</td><td>野芳发而幽香，佳木秀而<b style="color:#d26a4a">繁阴</b></td><td>春天野花香、夏天树荫浓</td></tr>
<tr><td>湖心亭看雪</td><td>雾<b style="color:#d26a4a">凇沆砀</b>，天与云与山与水，上下一白</td><td>冰花弥漫，天地一片白</td></tr>
<tr><td>湖心亭看雪</td><td>莫说相公<b style="color:#d26a4a">痴</b>，更有痴似相公者</td><td>别说您痴，还有比您更痴的人</td></tr>
<tr><td>行路难</td><td>长风破浪会有时，直挂云<b style="color:#d26a4a">帆济</b>沧海</td><td>总有一天能乘风破浪，到达理想的彼岸（表达自信）</td></tr>
<tr><td>行路难</td><td>欲渡黄河冰<b style="color:#d26a4a">塞</b>川，将登太行雪满山</td><td>比喻人生道路上的阻碍</td></tr>
<tr><td>酬乐天</td><td>沉舟侧<b style="color:#d26a4a">畔</b>千帆过，病树前头万木春</td><td>新事物必将取代旧事物（表达乐观）</td></tr>
<tr><td>水调歌头</td><td>但愿人长久，千里共<b style="color:#d26a4a">婵娟</b></td><td>只愿亲人平安，虽相隔千里也能共赏明月</td></tr>
<tr><td>水调歌头</td><td>人有悲欢离合，月有阴晴圆缺，此事古难全</td><td>以月的变化说人生的离合</td></tr></table>
<div class="tip">✍️ 背完做默写：<a data-quiz="yw-01">默写：第三单元</a>（不要看上面的表！）</div>
</div>

`},
{id: 'phy', icon: '⚡', title: '物理：摸底', time: '约 25 分钟', html: `
<p class="lede">学校物理已经上完第 13–16 章（内能、内能的利用、电流和电路、电压电阻），下周开始学第 17 章欧姆定律。今天先做一套<b>摸底</b>，看看前面学会了多少。<b>不看书，自己做</b>，错的看解析。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>做之前看一眼：13–16 章最重要的 8 句话</h3>
<table class="t"><tr><th>章</th><th>一句话</th></tr>
<tr><td>13 内能</td><td>Q = cmΔt；水的比热容大（4.2 × 10³ J/(kg·℃)），所以沿海温差小</td></tr>
<tr><td>13 内能</td><td>改变内能两种方式：<b>做功</b>（搓手）和<b>热传递</b>（烤火）</td></tr>
<tr><td>14 热机</td><td>压缩冲程：机械能 → 内能；做功冲程：内能 → 机械能</td></tr>
<tr><td>14 热机</td><td>燃料放热 Q = mq（q 是热值）；效率 = 有用的能量 ÷ 总能量</td></tr>
<tr><td>15 电流</td><td>同种电荷相互排斥，异种电荷相互吸引；电流方向 = 正电荷移动方向</td></tr>
<tr><td>15 电流</td><td>串联：电流处处相等；并联：干路电流 = 各支路电流之和</td></tr>
<tr><td>16 电压</td><td>串联：总电压 = 各部分电压之和；并联：各支路电压相等</td></tr>
<tr><td>16 电阻</td><td>电阻和材料、长度、横截面积、温度有关；滑动变阻器接法"一上一下"</td></tr></table>
<div class="tip">✍️ 开始摸底：<a data-quiz="phy-diag">物理摸底（13–16 章）</a></div>
</div>

`},
{id: 'chem', icon: '🧪', title: '化学：摸底', time: '约 25 分钟', html: `
<p class="lede">学校化学已经上完第一到三单元（走进化学世界、空气和氧气、物质构成的奥秘），接下来学第四单元<b>自然界的水</b>。今天先做<b>摸底</b>。<b>不看书，自己做</b>。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>做之前看一眼：1–3 单元最重要的 8 句话</h3>
<table class="t"><tr><th>单元</th><th>一句话</th></tr>
<tr><td>一</td><td>化学变化 = 有<b>新物质</b>生成（燃烧、生锈）；物理变化只是形状、状态变了（冰化成水）</td></tr>
<tr><td>一</td><td>量筒读数：视线和凹液面<b>最低处</b>保持水平；酒精灯用<b>外焰</b>加热，用灯帽盖灭</td></tr>
<tr><td>二</td><td>空气按体积：氮气 78%、氧气 21%、稀有气体 0.94%、二氧化碳 0.03%</td></tr>
<tr><td>二</td><td>检验氧气：带火星的木条<b>复燃</b>；铁丝在氧气中燃烧火星四射，瓶底要放水或细沙</td></tr>
<tr><td>二</td><td>制氧气：高锰酸钾加热（试管口放棉花）、过氧化氢 + 二氧化锰（MnO₂ 是催化剂）</td></tr>
<tr><td>三</td><td>化学变化中，<b>分子可以再分，原子不能再分</b></td></tr>
<tr><td>三</td><td>原子中：质子数 = 核电荷数 = 核外电子数；相对原子质量 ≈ 质子数 + 中子数</td></tr>
<tr><td>三</td><td>元素种类由<b>质子数</b>决定；地壳里最多的元素是氧，其次是硅、铝、铁</td></tr></table>
<div class="tip">✍️ 开始摸底：<a data-quiz="chem-diag">化学摸底（1–3 单元）</a></div>
</div>

`},
{id: 'hist', icon: '🏛️', title: '历史：古代亚非欧', time: '约 25 分钟', html: `
<p class="lede">历史学校已经全部上完，只做题复习。这周分三次复习完整本书。今天是<b>第一、二单元：古代亚非文明和古代欧洲文明</b>。先花 10 分钟看速记表，再做题。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>文明</th><th>必记</th></tr>
<tr><td>人类起源</td><td>最早的人类出现在<b>非洲</b>（东非，"露西"）；大河流域最早出现文明</td></tr>
<tr><td>两河流域（古巴比伦）</td><td>幼发拉底河、底格里斯河；<b>楔形文字</b>（苏美尔人）；<b>《汉谟拉比法典》</b>：现存世界上第一部比较完备的成文法典</td></tr>
<tr><td>古代埃及</td><td>尼罗河；<b>金字塔</b>（法老的陵墓）；<b>象形文字</b>；法老是最高统治者</td></tr>
<tr><td>古代印度</td><td>印度河、恒河；<b>种姓制度</b>：婆罗门（祭司）＞ 刹帝利（武士）＞ 吠舍（农民、商人）＞ 首陀罗；<b>佛教</b>：公元前 6 世纪，乔达摩·悉达多（释迦牟尼）创立，主张众生平等</td></tr>
<tr><td>古代希腊</td><td>城邦"小国寡民"；<b>雅典民主</b>在<b>伯里克利</b>时期达到顶峰（但只属于成年男性公民）；<b>亚历山大东征</b>促进东西方文化交流</td></tr>
<tr><td>古代罗马</td><td>共和 → <b>公元前 27 年屋大维</b>建立帝国；<b>《十二铜表法》</b>是罗马第一部成文法；<b>基督教</b>公元 1 世纪产生于巴勒斯坦；<b>476 年西罗马帝国灭亡</b>（世界古代史 → 中古史的分界）</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="hist-01">历史复习 1：古代亚非欧</a></div>
</div>

`},
{id: 'app', icon: '🛠️', title: '软件：Swift 逻辑运算符', time: '约 30 分钟', html: `
<div class="sec lesson" id="d7-sw"><h3><span class="n">01</span>Swift 第 5 课：逻辑运算符（约 30 分钟）</h3>
<p class="lede">打开 Swift Playgrounds →「学习编程 1」→「逻辑运算符」这一章。上次学了 <code>if</code>，一次只能判断一个条件。今天学怎么<b>把几个条件组合起来</b>。</p>
<table class="t"><tr><th>写法</th><th>读作</th><th>什么时候是 true</th><th>生活例子</th></tr>
<tr><td><code>!</code></td><td>非（不是）</td><td>把 true 变 false，false 变 true</td><td><code>!isBlocked</code>：前面<b>没有</b>挡住</td></tr>
<tr><td><code>&amp;&amp;</code></td><td>与（并且）</td><td><b>两个都</b>成立才成立</td><td>作业做完 <b>并且</b> 已经 10 点前 → 可以玩</td></tr>
<tr><td><code>||</code></td><td>或（或者）</td><td><b>只要一个</b>成立就成立</td><td>下雨 <b>或者</b> 太晒 → 带伞</td></tr></table>
<pre>if isOnGem &amp;&amp; isBlocked {
    collectGem()
    turnLeft()
}

if !isBlocked {
    moveForward()
}

if isBlocked || isOnClosedSwitch {
    turnRight()
}</pre>
<div class="why">🤔 为什么要学这个？以后做游戏一定会用到：比如"<b>按下跳跃键 并且 角色站在地上</b>"才能跳；"<b>血量为 0 或者 掉出地图</b>"就游戏结束。</div>
<p><b>动手：</b>闯完这一章的所有关卡。每关写之前先用中文说一遍条件，比如"如果前面被挡住并且左边也被挡住，就右转"，再翻译成代码。</p>
<div data-ck="d7-sw"></div></div>

`},
  ],
  checks: {
 "d7-sw": {
  "title": "Swift 第 5 课：逻辑运算符",
  "qs": [
   {
    "q": "isBlocked && isOnGem 什么时候是 true？isBlocked || isOnGem 呢？",
    "a": "&amp;&amp;：<b>两个都</b>成立才是 true（前面被挡住，<b>并且</b>脚下有宝石）。||：<b>只要一个</b>成立就是 true。",
    "pts": [
     "&& 要两个都成立",
     "|| 一个成立就行"
    ]
   },
   {
    "q": "!isBlocked 是什么意思？用中文说一遍。",
    "a": "\"前面<b>没有</b>被挡住\"。! 把 true 和 false 反过来。",
    "pts": [
     "说出\"没有被挡住\"",
     "知道 ! 是取反"
    ]
   },
   {
    "q": "举一个你玩的游戏里可能用到 && 或 || 的例子。",
    "a": "没有标准答案。比如：<b>按下攻击键 && 技能冷却好了</b> → 放技能；<b>血量为 0 || 时间到了</b> → 游戏结束。",
    "pts": [
     "举了具体的游戏例子",
     "用对了 && 或 ||"
    ]
   }
  ]
 }
},
};
