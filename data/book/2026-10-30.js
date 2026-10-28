// 第 16 天 · 周测（2026-10-30）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：周测', time: '约 45 分钟', html: `
<p class="lede">周五数学是<b>周测 2</b>：这周的二次函数综合、圆综合、利润问题、几何综合，加上前面的内容，15 题。<b>不看手册，自己做</b>，做完看解析，错的回到对应那天的手册复习。</p>
<div class="sec" id="m1"><h3><span class="n">01</span>做题前 5 分钟：这周的易错点</h3>
<table class="t"><tr><th>内容</th><th>最容易错的地方</th></tr>
<tr><td>看图判断 a、b、c</td><td>对称轴"左同右异"；a + b + c 看 x = 1 处</td></tr>
<tr><td>平移</td><td>向左是 x + h（加），向右是 x − h（减）</td></tr>
<tr><td>范围内最值</td><td>先看顶点在不在范围里</td></tr>
<tr><td>利润问题</td><td>问"售价"别只答涨价的 x</td></tr>
<tr><td>证切线</td><td>有交点 → 连半径证垂直</td></tr>
<tr><td>阴影面积</td><td>弓形 = 扇形 − 三角形</td></tr></table>
<div class="tip">✍️ 开始周测：<a data-quiz="math-w2">数学周测 2</a></div>
</div>

`},
{id: 'en', icon: '🔤', title: '英语：周测 + 课本复习', time: '约 50 分钟', html: `
<div class="tip">📸 <b>别忘了：</b>今天交本周 Grammar in Use 照片——两个单元的练习页各拍 1 张，<b>一共 2 张</b>，发工作室群。首页最后一项。</div>

<div class="sec" id="e1"><h3><span class="n">01</span>Grammar in Use 周测 3（约 15 分钟）</h3>
<p>考这周做的 Unit 8–9。<b>不看书、不看答案</b>。错的回书上对应单元看一遍再订正。</p>
<div class="tip">📝 <a data-quiz="giu-w3">Grammar in Use 周测 3</a></div></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 U4–U6 复习（约 15 分钟）</h3>
<p>宾语从句 + 被动语态（现在 / 过去 / 将来）。这两个是摸底时的弱点，期末也一定考。</p>
<div class="tip">📝 <a data-quiz="en-15">课本 U4–U6 复习</a></div></div>
`},
{id: 'yw', icon: '📖', title: '语文：默写复习', time: '约 30 分钟', html: `
<p class="lede">周五语文：<b>默写滚动复习</b>。第一、三、六单元和课外古诗混在一起考，最后有一道<b>古诗句排顺序</b>。先花 10 分钟翻一翻前几周的名句表（10-19、10-21、10-23 的手册），再闭卷做。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>复习方法（5 分钟）</h3>
<p>上次错过的句子，就是最该再背一遍的。打开首页「复习错题」，或者回 <a href="book.html?d=2026-10-19#yw">10-19</a>、<a href="book.html?d=2026-10-21#yw">10-21</a>、<a href="book.html?d=2026-10-23#yw">10-23</a> 的名句表，遮住右边自己说一遍。</p>
<div class="tip">✍️ 闭卷默写：<a data-quiz="yw-08">默写滚动复习</a></div>
</div>

`},
{id: 'phy', icon: '⚡', title: '物理：焦耳定律', time: '约 30 分钟', html: `
<p class="lede">18.4 <b>焦耳定律</b>：电流通过导体会发热。电热水壶、电暖器就是利用这一点；电脑要装风扇散热，是在防止它。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>焦耳定律：Q = I²Rt</h3>
<p>电流产生的热量和三样东西有关：<b>电流的平方、电阻、通电时间</b>。</p>
<p style="text-align:center;font-size:18px"><b>Q = I²Rt</b></p>
<p class="s">电流影响最大：电流变成 2 倍，热量变成 4 倍。</p>
<div class="ex"><b>例题</b>　电阻 10 Ω，电流 2 A，通电 1 分钟，产生多少热量？<br><br>
Q = I²Rt = 4 × 10 × 60 = <b>2400 J</b>。</div>
<div class="tip">💡 电热器（电水壶、电饭锅、电热毯）这种只发热的"纯电阻"电器：<b>Q = W = UIt = Pt</b>，四个公式都能用。但电动机（电风扇）大部分电能变成了机械能，只有一小部分发热，<b>Q 比 W 小</b>，只能用 Q = I²Rt 算热量。</div>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>探究实验和生活应用</h3>
<p><b>实验：</b>两个电阻丝串联（电流相同），比较哪个放出的热量多。用 U 形管里液面的高度差表示热量多少（<b>转换法</b>），研究一个因素时保持其他不变（<b>控制变量法</b>）。结论：电流和时间相同时，<b>电阻越大，产生的热量越多</b>。</p>
<table class="t"><tr><th>利用电热</th><th>防止电热</th></tr>
<tr><td>电热水壶、电饭锅、电熨斗、电暖器</td><td>电脑散热风扇、电视机后盖的散热孔、电动机的散热片</td></tr></table>
<details class="try"><summary>试一试：为什么电炉丝热得发红，而连着它的导线却几乎不热？</summary><div>答案：电炉丝和导线<b>串联</b>，电流相同；电炉丝的电阻比导线大得多，根据 Q = I²Rt，电炉丝产生的热量多得多。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-09">练习：焦耳定律</a></div>
</div>

`},
{id: 'chem', icon: '🧪', title: '化学：方程式计算', time: '约 30 分钟', html: `
<p class="lede">课题 2 最后一部分：<b>根据化学方程式计算</b>。已知一种物质的质量，算出另一种。期末一定有一道大题，<b>格式</b>也要给分。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>六步格式：设、写、找、列、求、答</h3>
<div class="ex"><b>例题</b>　加热分解 31.6 g 高锰酸钾，最多能得到多少克氧气？（K 39，Mn 55，O 16）<br><br>
<b>设：</b>可以得到氧气的质量为 x。<br>
<b>写：</b>2KMnO₄ =△= K₂MnO₄ + MnO₂ + O₂↑<br>
<b>找：</b>在方程式下面写出相关物质的"相对分子质量 × 系数"和已知量、未知量：<br>
　　2KMnO₄：2 × 158 = 316　　　O₂：32<br>
　　　　　　31.6 g　　　　　　　　x<br>
<b>列：</b>316 / 32 = 31.6 g / x<br>
<b>求：</b>x = 32 × 31.6 g ÷ 316 = <b>3.2 g</b><br>
<b>答：</b>最多能得到氧气 3.2 g。</div>
<div class="warn">⚠️ 常丢分的地方：① "设"的时候 x 后面<b>不带单位</b>，算出来再带；② 相对分子质量要<b>乘系数</b>（2KMnO₄ 是 2 × 158）；③ 代进去的必须是<b>纯净物</b>的质量；④ 最后要写"答"。</div>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>再来一道</h3>
<div class="ex"><b>例题</b>　电解 36 g 水，能得到多少克氢气？（H 1，O 16）<br><br>
2H₂O =通电= 2H₂↑ + O₂↑<br>
2 × 18 = 36　　2 × 2 = 4<br>
36 g　　　　　x<br>
36 / 4 = 36 g / x → <b>x = 4 g</b></div>
<details class="try"><summary>试一试：12 g 碳完全燃烧（C + O₂ =点燃= CO₂），生成多少克二氧化碳？</summary><div>答案：C 12，CO₂ 44；12 / 44 = 12 g / x → <b>x = 44 g</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-09">练习：根据化学方程式计算</a></div>
</div>

`},
{id: 'hist', icon: '🏛️', title: '历史：文件和制度', time: '约 25 分钟', html: `
<p class="lede">历史专题 3：<b>法典、宣言和制度</b>。这些"文件"最容易混，今天放在一张表里对比着记。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>文件对比表（10 分钟）</h3>
<table class="t"><tr><th>文件</th><th>哪里 / 什么时候</th><th>意义</th></tr>
<tr><td>《汉谟拉比法典》</td><td>古巴比伦</td><td>现存第一部比较完备的成文法典</td></tr>
<tr><td>《十二铜表法》</td><td>古罗马</td><td>罗马第一部成文法</td></tr>
<tr><td>《民法大全》</td><td>拜占庭（查士丁尼）</td><td>罗马法的集大成</td></tr>
<tr><td>《权利法案》</td><td>英国 1689</td><td>限制王权，确立君主立宪制</td></tr>
<tr><td>《独立宣言》</td><td>美国 1776</td><td>美国诞生</td></tr>
<tr><td>1787 年宪法</td><td>美国</td><td>第一部比较完整的资产阶级成文宪法，联邦制、三权分立</td></tr>
<tr><td>《人权宣言》</td><td>法国 1789</td><td>宣布人生而自由平等</td></tr>
<tr><td>《法国民法典》</td><td>法国 1804（拿破仑）</td><td>巩固资产阶级革命成果</td></tr>
<tr><td>《共产党宣言》</td><td>1848</td><td>马克思主义诞生</td></tr></table>
<p><b>制度：</b>种姓制度（印度）、雅典民主、封君封臣制度和庄园（西欧）、君主立宪制（英国）、三权分立和联邦制（美国）。</p>
<div class="tip">✍️ 做题：<a data-quiz="hist-06">历史专题 3：文件和制度</a></div>
</div>

`},
{id: 'app', icon: '🐍', title: 'Python 第 4 课', time: '约 30 分钟', html: `
<div class="sec" id="py4"><h3><span class="n">01</span>🐍 Python 第 4 课：for循环：星星金字塔（约 30 分钟）</h3>
<p class="lede">Python 课在单独的练习台上：先看 4 小节讲解（每节有「✏️ 改一改」），再到练习区一题一题做，最后做作品。全部通过后首页会自动打勾。</p>
<a class="go2" href="py.html?l=py4">🐍 打开 Python 第 4 课</a>
<div class="tip">💡 第一次打开要等 Python 加载（顶部显示"✅ Python 准备好了"再点运行）。卡住了先看题目下面的「卡住了？看提示」，提交错 3 次也会自动给提示。</div>
</div>

`},
  ],
  checks: {},
};
