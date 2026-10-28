// 第 34 天 · 二次函数存在性问题（2026-11-25）手册
window.BOOK = {
  intro: '今天：数学压轴题入门（存在性问题）、物理复习第 13–14 章、化学用语专题、历史课 5（三场革命）、Python 井字棋。',
  parts: [
{id: 'math', icon: '📐', title: '数学：二次函数存在性问题', time: '约 60 分钟', html: `
<p class="lede">中考最后一道大题常问："<b>是否存在点 P，使 △PAC 是等腰三角形？若存在，求出 P 的坐标</b>"。听起来吓人，其实是固定套路：<b>设坐标 → 算距离 → 分情况列方程 → 检查</b>。</p>
<div class="sec" id="m1"><h3><span class="n">01</span>工具：两点距离公式</h3>
<div class="tip">📌 A(x₁, y₁)、B(x₂, y₂)：<b>AB² = (x₁ − x₂)² + (y₁ − y₂)²</b>（就是勾股定理）。用平方算，不用开根号，省事。</div>
</div>
<div class="sec" id="m2"><h3><span class="n">02</span>例题：对称轴上的等腰三角形</h3>
<div class="ex"><b>例题</b>　抛物线 y = x² − 2x − 3 和 x 轴交于 A(−1, 0)，和 y 轴交于 C(0, −3)。对称轴 x = 1 上是否存在点 P，使 △PAC 是等腰三角形？<br><br>
<b>第 1 步：设点。</b>P 在 x = 1 上，设 P(1, t)。<br>
<b>第 2 步：算三条边的平方。</b><br>
PA² = (1 + 1)² + t² = 4 + t²<br>
PC² = 1² + (t + 3)² = 1 + (t + 3)²<br>
AC² = 1² + 3² = 10<br>
<b>第 3 步：分三种情况（谁和谁相等）。</b><br>
① PA = PC：4 + t² = 1 + t² + 6t + 9 → t = −1。<br>
② PA = AC：4 + t² = 10 → t = ±√6。<br>
③ PC = AC：1 + (t + 3)² = 10 → t + 3 = ±3 → t = 0 或 t = −6。<br>
<b>第 4 步：检查共线！</b>直线 AC：y = −3x − 3。x = 1 时 y = −6，所以 P(1, −6) 在直线 AC 上，三点共线，<b>组不成三角形，舍去</b>。<br>
<b>答：</b>存在，P 是 (1, −1)、(1, √6)、(1, −√6)、(1, 0)，共 <b>4 个</b>。</div>
<div class="warn">⚠️ 第 4 步最容易忘。求出的点要代进直线 AC 看看是不是在上面。</div>
</div>
<div class="sec" id="m3"><h3><span class="n">03</span>变成直角三角形呢？</h3>
<p>"使 ∠PAC = 90°"：直角对的边最长，用<b>勾股定理</b>：<b>PA² + AC² = PC²</b>（直角顶点是 A，对边是 PC）。列方程解 t 就行。</p>
<details class="try"><summary>试一试：例题里，∠PAC = 90° 时 t 是多少？</summary><div>
4 + t² + 10 = 1 + (t + 3)² → 14 + t² = t² + 6t + 10 → t = <b>2/3</b>。</div></details>
</div>
<p>基础：<a data-quiz="math-30">基础练习</a>　挑战：<a data-quiz="math-30b">挑战题</a>　滚动：<a data-quiz="roll-19">综合滚动 19</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 词形变换 2', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 28：城市和乡村（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-28">单词课 28</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，一共至少 40 个英文单词。注意 exciting / excited、stressed 的区别。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>作文段落的两种结构（约 12 分钟）</h3>
<table class="t"><tr><th>类型</th><th>结构</th><th>连接词</th></tr>
<tr><td>观点（议论）</td><td>观点 → 理由 1 → 理由 2 → 总结</td><td>I think … / One reason is … / Another reason is … / In conclusion, …</td></tr>
<tr><td>经历（记叙）</td><td>时间地点 → 先 → 然后 → 感受</td><td>Last Sunday, … / First, … / Then … / Although I was tired, I felt …</td></tr></table>
<p class="s">中考英语作文 80–100 词，照这两个结构写，再用上几个单词课学的词，就是一篇条理清楚的作文。</p>
<div class="tip">📝 <a data-quiz="en-33">词形变换 2 + 排顺序</a></div></div>

`},
{id: 'yw', icon: '📖', title: '语文：文言文复习（第六单元）', time: '约 30 分钟', html: `
<div class="sec" id="y1"><h3><span class="n">01</span>四篇一张表</h3>
<table class="t"><tr><th>篇目</th><th>人物</th><th>主旨 / 道理</th></tr>
<tr><td>《曹刿论战》（《左传》）</td><td>曹刿：有政治远见、深谋远虑</td><td>战争胜利要<b>取信于民</b>、把握时机（一鼓作气）</td></tr>
<tr><td>《邹忌讽齐王纳谏》（《战国策》）</td><td>邹忌：善于思考、善于讽谏</td><td>国君要<b>广开言路</b>，虚心纳谏</td></tr>
<tr><td>《陈涉世家》（司马迁《史记》）</td><td>陈胜：有远大志向、有谋略</td><td>秦末农民起义的经过；"王侯将相宁有种乎"</td></tr>
<tr><td>《出师表》（诸葛亮）</td><td>诸葛亮：忠诚、有责任感</td><td>三条建议：<b>广开言路、严明赏罚、亲贤远佞</b>；报答先帝、北伐中原</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>答"人物形象"题的格式</h3>
<p>「___ 是一个 ___ 的人。从 ___（文中的事 / 话）可以看出。」</p>
<div class="ex"><b>例</b>　曹刿是一个有政治远见的人。从"肉食者鄙，未能远谋"、他认为"忠之属也，可以一战"（看重民心）可以看出。</div>
<div class="tip">📝 做题：<a data-quiz="yw-19">文言文复习：第六单元</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：化学用语专题', time: '约 35 分钟', html: `
<p class="lede">化学用语（符号、化学式、数字的意思）是化学的"语言"，期末每张卷子都有一道填空，全是送分题——前提是你分得清每个数字的位置。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>数字在哪，意思就是什么</h3>
<table class="t"><tr><th>位置</th><th>意思</th><th>例</th></tr>
<tr><td><b>前面</b></td><td>粒子的<b>个数</b></td><td>2H：2 个氢原子；2H₂O：2 个水分子；2Na⁺：2 个钠离子</td></tr>
<tr><td><b>右下角</b></td><td>一个分子里有几个这种原子</td><td>H₂O：一个水分子里有 2 个氢原子</td></tr>
<tr><td><b>右上角</b></td><td>一个离子带几个单位电荷</td><td>Mg²⁺：一个镁离子带 2 个单位正电荷</td></tr>
<tr><td><b>正上方</b></td><td>元素的化合价</td><td>Mg 上方写 +2：镁元素显 +2 价</td></tr></table>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>写化学式：交叉法</h3>
<div class="step"><i>1</i><div>正价写左边，负价写右边：Al O。</div></div>
<div class="step"><i>2</i><div>标化合价：Al +3，O −2。</div></div>
<div class="step"><i>3</i><div>化合价的数字<b>交叉</b>写到对方右下角：Al₂O₃。能约分的要约分（如 Ca₂O₂ → CaO）。</div></div>
<p class="s">金属（Fe、Cu）、稀有气体（He）、固态非金属（C、S、P）由原子直接构成，元素符号就是化学式，所以 "Fe" 能表示元素、一个原子、这种物质。</p>
<div class="tip">📝 基础：<a data-quiz="chem-27">化学用语专题</a>　真题风格：<a data-quiz="chem-27b">真题风格</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 15 课', time: '约 30 分钟', html: `
<div class="sec" id="py15"><h3><span class="n">01</span>🐍 Python 第 15 课：井字棋：两个人对战</h3>
<p class="lede">把棋盘、落子、胜负判断组装成一个完整的双人游戏——你的第二个作品！</p>
<a class="go2" href="py.html?l=py15">🐍 打开 Python 第 15 课</a>
<div class="tip">📤 学完可以接订单「井字棋：和电脑下」（交完还能开金币盲盒 🎁）。</div>
</div>
`},
  ],
  checks: {
 "d34-hs": {
  "title": "历史课 5：材料题",
  "qs": [
   {"q": "材料一出自哪个文件？它的发表有什么意义？", "a": "《独立宣言》（1776 年）。它宣告了美国的诞生，宣传了\"人人生而平等\"的思想。", "pts": ["《独立宣言》", "标志美国诞生"]},
   {"q": "材料二中拿破仑说的\"民法典\"是指什么？他为什么这样评价？", "a": "《法国民法典》。它用法律的形式巩固了法国大革命的成果，确立了资本主义的社会秩序，对后来很多国家的法律影响深远，比打胜仗更长久。", "pts": ["《法国民法典》", "巩固革命成果", "影响深远"]},
   {"q": "英、美、法三国的资产阶级革命有什么共同的作用？", "a": "都推翻了封建统治（美国是殖民统治），确立了资本主义制度，推动了资本主义的发展。", "pts": ["推翻封建 / 殖民统治", "确立资本主义制度"]}
  ]
 }
},
};
