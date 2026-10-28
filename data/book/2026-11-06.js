// 第 21 天 · 周测（2026-11-06）手册
window.BOOK = {
  intro: '周五！今天以复习和周测为主，新内容只有化学一氧化碳和 Python 第 7 课。点上面的科目标签切换。',
  parts: [
{id: 'math', icon: '📐', title: '数学：周测 3 前的易错表', time: '约 45 分钟', html: `
<p class="lede">周测 15 题，<b>不看手册</b>做。做之前花 3 分钟看一遍这张易错表就够了。</p>
<div class="sec" id="m1"><h3><span class="n">01</span>这周的 8 个坑</h3>
<table class="t"><tr><th>章节</th><th>坑</th></tr>
<tr><td>反比例</td><td>面积求 k 要看象限定正负；面积公式是 |k| 和 |k|/2</td></tr>
<tr><td>反比例</td><td>比较 y 的大小：别背增减性，直接代数算</td></tr>
<tr><td>反比例</td><td>"直线在双曲线上方"：别忘了 x = 0 也是分界点</td></tr>
<tr><td>方程</td><td>kx² + … 是一元二次方程 → k ≠ 0</td></tr>
<tr><td>方程</td><td>用了韦达定理，回头检查 Δ ≥ 0</td></tr>
<tr><td>方程</td><td>等腰三角形边长：两种情况 + 检查能不能组成三角形</td></tr>
<tr><td>面积</td><td>铅垂高 = 上面的 y − 下面的 y；水平宽 = 两端点横坐标之差</td></tr>
<tr><td>旋转</td><td>转 60° → 等边三角形；转 90° → 等腰直角三角形，斜边 = 腰 × √2</td></tr></table>
</div>
<p>准备好了就开始：<a data-quiz="math-w3">数学周测 3</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：周测 + 语法大复习', time: '约 30 分钟', html: `
<div class="tip">📸 <b>别忘了：</b>今天交本周 Grammar in Use 照片——两个单元的练习页各拍 1 张，<b>一共 2 张</b>，发工作室群，再<b>找姐姐要取件码</b>，输进首页最后一项才算交了。</div>
<div class="sec" id="e1"><h3><span class="n">01</span>Grammar in Use 周测 4（约 15 分钟）</h3>
<p>考这周做的 Unit 10–11。<b>不看书、不看答案</b>。做完错的回书上那一单元再看一遍。</p>
<div class="tip">📝 <a data-quiz="giu-w4">Grammar in Use 周测 4</a></div></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 U4–U8 语法大复习（约 15 分钟）</h3>
<p>这学期课本的四大语法一套题全考：宾语从句、被动语态、定语从句、主谓一致。错了的回 10-19 ~ 10-29 的手册复习。</p>
<div class="tip">📝 <a data-quiz="en-20">课本 U4–U8 语法大复习</a></div></div>
`},
{id: 'yw', icon: '📖', title: '语文：默写滚动 2', time: '约 30 分钟', html: `
<p class="lede">默写滚动：第一、三、六单元 + 课外古诗，最后两道排顺序。<b>先在纸上默一遍，再上网站做</b>，效果最好。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>今天容易写错的字</h3>
<table class="t"><tr><th>句子</th><th>易错字</th></tr>
<tr><td>引无数英雄<b>竞</b>折腰</td><td>竞（竞争），不是"竟"</td></tr>
<tr><td>惜秦皇汉武，略<b>输</b>文采</td><td>输</td></tr>
<tr><td>病树前头万木春</td><td>"前头"不是"前面"</td></tr>
<tr><td>月有阴晴圆<b>缺</b></td><td>缺</td></tr>
<tr><td>人<b>迹</b>板桥霜</td><td>迹（足迹）</td></tr>
<tr><td>留取丹心照<b>汗青</b></td><td>汗青 = 史册</td></tr>
<tr><td><b>蜡炬</b>成灰泪始干</td><td>蜡炬</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="yw-11">默写滚动 2</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：第 18–19 章小测', time: '约 30 分钟', html: `
<p class="lede">电功率 + 生活用电一起考。先看易错表，再做小测。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>易错表</h3>
<table class="t"><tr><th>易错点</th><th>记住</th></tr>
<tr><td>电功 vs 电功率</td><td>电功（电能）= 做了多少功；电功率 = 做功<b>快慢</b></td></tr>
<tr><td>谁更亮</td><td>看<b>实际功率</b>。并联：额定功率大的亮；串联：电阻大（额定功率小）的亮</td></tr>
<tr><td>电压减半</td><td>电阻不变时，功率变成<b>四分之一</b></td></tr>
<tr><td>电能表转数</td><td>"3000 r/(kW·h)"：转 n 圈 → 用了 n/3000 kW·h</td></tr>
<tr><td>家庭电路</td><td>开关接火线；左零右火上接地；电能表在总开关前</td></tr>
<tr><td>保险丝</td><td>电阻大、熔点低；不能用铜丝代替</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="phy-14">第 18–19 章小测</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：一氧化碳 + 第六单元小测', time: '约 30 分钟', html: `
<p class="lede">一氧化碳 CO 和二氧化碳 CO₂ 只差一个氧原子，性质却完全不同。学完做第六单元小测。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>CO 的三个性质</h3>
<table class="t"><tr><th>性质</th><th>内容</th></tr>
<tr><td><b>可燃性</b></td><td>2CO + O₂ =点燃= 2CO₂，<b>蓝色</b>火焰（煤炉上方的蓝色火苗）</td></tr>
<tr><td><b>毒性</b></td><td>和血液里的<b>血红蛋白</b>结合，让人缺氧（煤气中毒）。CO <b>难溶于水</b>，煤炉上放一盆水没用！</td></tr>
<tr><td><b>还原性</b></td><td>CO + CuO =△= Cu + CO₂；炼铁：3CO + Fe₂O₃ =高温= 2Fe + 3CO₂</td></tr></table>
<div class="warn">⚠️ CO 还原 CuO 的实验：尾气里有没反应完的 CO，要<b>点燃或用气球收集</b>，不能直接排到空气里。</div>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>CO 和 CO₂ 大对比</h3>
<table class="t"><tr><th></th><th>CO</th><th>CO₂</th></tr>
<tr><td>能不能燃烧</td><td>能</td><td>不能，也不支持燃烧</td></tr>
<tr><td>毒性</td><td>有毒</td><td>无毒（但不能供给呼吸）</td></tr>
<tr><td>和石灰水</td><td>不反应</td><td>变浑浊</td></tr>
<tr><td>和石蕊溶液</td><td>不变色</td><td>变红</td></tr>
<tr><td>还原性</td><td>有</td><td>没有</td></tr></table>
<p class="s">性质不同的根本原因：<b>分子构成不同</b>。<br>除杂：CO₂ 里混 CO → 通过灼热的 CuO；CO 里混 CO₂ → 通入石灰水（或氢氧化钠溶液）。</p>
<div class="tip">📝 做题：<a data-quiz="chem-14">一氧化碳 + 第六单元小测</a></div>
</div>
`},
{id: 'hist', icon: '🏛️', title: '历史：古代文明对比', time: '约 25 分钟', html: `
<p class="lede">历史专题 6：把第一、二单元的五大古代文明放在一张表里。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>古代文明对比表</h3>
<table class="t"><tr><th>文明</th><th>在哪</th><th>记住什么</th></tr>
<tr><td>古埃及</td><td>尼罗河</td><td>金字塔（法老的陵墓）、象形文字</td></tr>
<tr><td>古巴比伦</td><td>两河流域</td><td>《汉谟拉比法典》、楔形文字</td></tr>
<tr><td>古印度</td><td>印度河、恒河</td><td>种姓制度（婆罗门 &gt; 刹帝利 &gt; 吠舍 &gt; 首陀罗）、佛教</td></tr>
<tr><td>古希腊</td><td>爱琴海</td><td>雅典民主（伯里克利"黄金时代"）、亚历山大东征</td></tr>
<tr><td>古罗马</td><td>意大利半岛</td><td>共和国 → 帝国（屋大维，前 27 年）、《十二铜表法》</td></tr></table>
<p class="s">前三个都在大河边，叫"大河文明"；希腊、罗马在海边，叫"海洋文明"。</p>
<div class="tip">✍️ 做题：<a data-quiz="hist-09">历史专题：古代文明对比</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 7 课', time: '约 30 分钟', html: `
<div class="sec" id="py7"><h3><span class="n">01</span>🐍 Python 第 7 课：函数：伤害计算器（约 30 分钟）</h3>
<p class="lede">学会函数以后，你就能把游戏里的"攻击""加血""升级"一个个打包好，下周的文字冒险全靠它。</p>
<a class="go2" href="py.html?l=py7">🐍 打开 Python 第 7 课</a>
<div class="tip">📤 学完这课可以接订单「战斗模拟器」（交完还能开一个金币盲盒 🎁）。</div>
</div>
`},
  ],
};
