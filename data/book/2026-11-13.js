// 第 26 天 · 周测（2026-11-13）手册
window.BOOK = {
  intro: '周五！今天以周测和大复习为主，新内容只有物理多档位电热器和 Python 第 10 课。点上面的科目标签切换。',
  parts: [
{id: 'math', icon: '📐', title: '数学：周测 4 前的易错表', time: '约 45 分钟', html: `
<p class="lede">周测 15 题，<b>不看手册</b>做。先花 3 分钟看易错表。</p>
<div class="sec" id="m1"><h3><span class="n">01</span>这周的 8 个坑</h3>
<table class="t"><tr><th>章节</th><th>坑</th></tr>
<tr><td>看图判断</td><td>"左同右异"：对称轴在 y 轴左边 a、b 同号</td></tr>
<tr><td>看图判断</td><td>a + b + c 是 x = 1 时的 y；a − b + c 是 x = −1 时的 y</td></tr>
<tr><td>看图判断</td><td>比较 y：开口向上，离对称轴越远越大</td></tr>
<tr><td>动点</td><td>先写 t 的范围（先到终点的那个点说了算）</td></tr>
<tr><td>动点</td><td>解出的 t 要检查在不在范围里；顶点不在范围里，最大值在端点</td></tr>
<tr><td>最短路径</td><td>同侧才对称，两侧直接连</td></tr>
<tr><td>最短路径</td><td>正方形对角线 AC 是对称轴，B 和 D 对称</td></tr>
<tr><td>函数应用</td><td>分段计费先判断在哪一段；题目问"售价"别答"涨价"</td></tr></table>
</div>
<p>准备好了就开始：<a data-quiz="math-w4">数学周测 4</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：周测 + 综合阅读', time: '约 30 分钟', html: `
<div class="tip">📸 <b>别忘了：</b>今天交本周 Grammar in Use 照片——两个单元的练习页各拍 1 张，<b>一共 2 张</b>，发工作室群，再<b>找姐姐要取件码</b>，输进首页最后一项才算交了。</div>
<div class="sec" id="e1"><h3><span class="n">01</span>Grammar in Use 周测 5（约 15 分钟）</h3>
<p>考这周做的 Unit 12–13。<b>不看书、不看答案</b>。做完错的回书上那一单元再看一遍。</p>
<div class="tip">📝 <a data-quiz="giu-w5">Grammar in Use 周测 5</a></div></div>
<div class="sec" id="e2"><h3><span class="n">02</span>综合阅读：小房子（约 15 分钟）</h3>
<p>这两周单词课学过的词（rent、salary、apartment、spacious、storage……）都藏在文章里。题型混合：细节、判断、猜词、主旨，用上两周学的所有方法。</p>
<p class="s">遇到 <b>NOT</b> 题（哪个没有提到）：把选项一个个回原文对，找不到的那个就是答案。</p>
<div class="tip">📝 <a data-quiz="en-25">阅读：小房子（综合题型）</a></div></div>
`},
{id: 'yw', icon: '📖', title: '语文：古诗文默写 + 文言字词', time: '约 30 分钟', html: `
<p class="lede">第三、六单元文言文：默写 + 常考实词。古今异义最容易丢分。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>常考实词表</h3>
<table class="t"><tr><th>句子</th><th>字</th><th>意思</th></tr>
<tr><td>属予作文以记之（岳阳楼记）</td><td>属</td><td>同"嘱"，嘱托</td></tr>
<tr><td>百废具兴（岳阳楼记）</td><td>具</td><td>同"俱"，全、都</td></tr>
<tr><td>微斯人，吾谁与归（岳阳楼记）</td><td>微</td><td>没有</td></tr>
<tr><td>肉食者鄙（曹刿论战）</td><td>鄙</td><td>目光短浅</td></tr>
<tr><td>小信未孚（曹刿论战）</td><td>孚</td><td>使人信服</td></tr>
<tr><td>先帝不以臣卑鄙（出师表）</td><td>卑鄙</td><td><b>古今异义</b>：身份低微、见识短浅（不是品质恶劣）</td></tr>
<tr><td>度已失期（陈涉世家）</td><td>度</td><td>估计（读 duó）</td></tr>
<tr><td>燕雀安知鸿鹄之志哉（陈涉世家）</td><td>安</td><td>怎么、哪里</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>易错字</h3>
<p>浩浩<b>汤汤</b>（shāng）、佳木<b>秀</b>而繁阴、<b>鸿鹄</b>之志、<b>亲</b>贤臣<b>远</b>小人、山<b>回</b>路转、似曾相识燕归来。</p>
<div class="tip">📝 做题：<a data-quiz="yw-14">古诗文默写 + 文言字词</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：多档位电热器', time: '约 30 分钟', html: `
<p class="lede">电学专题 3：电饭锅、电热水壶、电暖器为什么有"高温档""低温档"？期末计算题的压轴常常就是它。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>一句话原理</h3>
<div class="tip">📌 家里电压 U = 220 V 不变，<b>P = U²/R</b>：<b>总电阻越小 → 功率越大 → 高温档</b>；总电阻越大 → 功率越小 → 低温档。</div>
<table class="t"><tr><th>接法</th><th>总电阻</th><th>档位</th></tr>
<tr><td>R₁、R₂ <b>串联</b></td><td>最大</td><td>低温档</td></tr>
<tr><td>只接 R₁（R₂ 被短路或断开）</td><td>中间</td><td>中温档 / 高温档</td></tr>
<tr><td>R₁、R₂ <b>并联</b></td><td>最小</td><td>高温档</td></tr></table>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>例题</h3>
<div class="ex"><b>例题</b>　电饭锅内有 R₁ = 44 Ω、R₂ = 176 Ω。开关 S 闭合时 R₂ 被短路；S 断开时 R₁、R₂ 串联。电压 220 V。求两个档位的功率。<br><br>
<b>第 1 步：S 闭合，只有 R₁。</b>P = U²/R₁ = 220² ÷ 44 = 48400 ÷ 44 = <b>1100 W</b>（高温档，煮饭）。<br>
<b>第 2 步：S 断开，串联。</b>R = 44 + 176 = 220 Ω，P = 48400 ÷ 220 = <b>220 W</b>（低温档，保温）。<br>
<b>第 3 步（常追问）：</b>高温档电流 I = P/U = 1100 ÷ 220 = 5 A；工作 0.5 h 用电 1.1 kW × 0.5 h = 0.55 kW·h。</div>
<p class="s">和热学结合：烧水吸热 Q = cmΔt，不计损失时 Q = W = Pt，可以求加热时间 t = Q/P。</p>
<details class="try"><summary>试一试：上面的电饭锅，220² 为什么等于 48400？算一下可以背下来。</summary><div>220 × 220 = 48400。家庭电路题会反复用到它，记住能省很多时间。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-19">练习：多档位电热器</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：化学方程式大复习', time: '约 30 分钟', html: `
<p class="lede">第 1–7 单元必背的化学方程式，一次过一遍。<b>先在纸上默写一遍</b>，再做题。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>必背方程式清单</h3>
<table class="t"><tr><th>反应</th><th>方程式</th><th>类型</th></tr>
<tr><td>红磷燃烧</td><td>4P + 5O₂ =点燃= 2P₂O₅</td><td>化合</td></tr>
<tr><td>铁丝燃烧</td><td>3Fe + 2O₂ =点燃= Fe₃O₄</td><td>化合</td></tr>
<tr><td>高锰酸钾制氧气</td><td>2KMnO₄ =△= K₂MnO₄ + MnO₂ + O₂↑</td><td>分解</td></tr>
<tr><td>过氧化氢制氧气</td><td>2H₂O₂ =MnO₂= 2H₂O + O₂↑</td><td>分解</td></tr>
<tr><td>电解水</td><td>2H₂O =通电= 2H₂↑ + O₂↑</td><td>分解</td></tr>
<tr><td>碳充分燃烧</td><td>C + O₂ =点燃= CO₂</td><td>化合</td></tr>
<tr><td>木炭还原氧化铜</td><td>C + 2CuO =高温= 2Cu + CO₂↑</td><td></td></tr>
<tr><td>实验室制 CO₂</td><td>CaCO₃ + 2HCl = CaCl₂ + H₂O + CO₂↑</td><td></td></tr>
<tr><td>CO₂ 和石灰水</td><td>CO₂ + Ca(OH)₂ = CaCO₃↓ + H₂O</td><td></td></tr>
<tr><td>CO₂ 和水 / 碳酸分解</td><td>CO₂ + H₂O = H₂CO₃ / H₂CO₃ = H₂O + CO₂↑</td><td>化合 / 分解</td></tr>
<tr><td>CO 燃烧</td><td>2CO + O₂ =点燃= 2CO₂</td><td>化合</td></tr>
<tr><td>甲烷燃烧</td><td>CH₄ + 2O₂ =点燃= CO₂ + 2H₂O</td><td></td></tr></table>
<p class="s">化合反应"多变一"，分解反应"一变多"。</p>
<div class="tip">📝 做题：<a data-quiz="chem-19">化学方程式大复习</a></div>
</div>
`},
{id: 'hist', icon: '🏛️', title: '历史：全书期末模拟', time: '约 30 分钟', html: `
<p class="lede">历史全书 7 个单元，一套题全考。<b>不看手册</b>，像考试一样做。做完错的回去看对应那天的表。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>全书速记（考前扫一眼）</h3>
<table class="t"><tr><th>单元</th><th>一句话</th></tr>
<tr><td>一 古代亚非</td><td>埃及金字塔、巴比伦法典、印度种姓和佛教</td></tr>
<tr><td>二 古代欧洲</td><td>雅典民主（伯里克利）、亚历山大东征、罗马帝国（屋大维）</td></tr>
<tr><td>三 封建欧洲</td><td>采邑改革、封君封臣、庄园、城市自治、大学、拜占庭《民法大全》</td></tr>
<tr><td>四 中古亚非美</td><td>大化改新、伊斯兰教、玛雅文明</td></tr>
<tr><td>五 走向近代</td><td>文艺复兴（人文主义）、新航路、殖民掠夺和三角贸易</td></tr>
<tr><td>六 资本主义制度</td><td>英国《权利法案》、美国《独立宣言》、法国《人权宣言》和拿破仑</td></tr>
<tr><td>七 工业革命和马克思主义</td><td>珍妮机、蒸汽机、火车；《共产党宣言》、巴黎公社</td></tr></table>
<div class="tip">✍️ 做题：<a data-quiz="hist-12">历史期末模拟（全书）</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 10 课', time: '约 30 分钟', html: `
<div class="sec" id="py10"><h3><span class="n">01</span>🐍 Python 第 10 课：文字冒险（2）：血量和钥匙（约 30 分钟）</h3>
<p class="lede">给古堡加上血量、背包和锁着的门。做完这课，你的冒险游戏就真的"能玩"了。</p>
<a class="go2" href="py.html?l=py10">🐍 打开 Python 第 10 课</a>
</div>
`},
  ],
};
