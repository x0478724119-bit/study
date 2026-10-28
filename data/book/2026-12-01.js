// 第 31 天 · 周测（2026-11-20）手册
window.BOOK = {
  intro: '今天：数学周测 5、物理第 20 章小测、化学 1–5 单元小测、历史课 3（中世纪）。',
  parts: [
{id: 'math', icon: '📐', title: '数学：周测 5（第 25–28 章）', time: '约 45 分钟', html: `
<div class="sec" id="m1"><h3><span class="n">01</span>考前 3 分钟：这四章的坑</h3>
<table class="t"><tr><th>章</th><th>坑</th></tr>
<tr><td>25 方程</td><td>两边除以 x 丢根；kx² 要 k ≠ 0；应用题检验</td></tr>
<tr><td>26 二次函数</td><td>平移"左加右减"在括号里；范围内最值要画图看两端</td></tr>
<tr><td>27 反比例</td><td>增减性要说"每个象限内"；不同象限的点直接代数比</td></tr>
<tr><td>28 旋转</td><td>顺时针、逆时针 90° 的坐标别搞反</td></tr></table>
</div>
<p>开始：<a data-quiz="math-w5">数学周测 5</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：周测 + 记叙文阅读', time: '约 35 分钟', html: `

<div class="sec" id="e2"><h3><span class="n">02</span>中考记叙文阅读（约 20 分钟）</h3>
<p>一篇真实人物的故事。注意<b>猜词题</b>（用上下文猜）、<b>推断人物性格</b>（从他做的事推）、最后一道<b>按故事顺序排句子</b>。</p>
<div class="tip">📝 <a data-quiz="en-30">阅读：驭风男孩</a></div></div>
`},
{id: 'phy', icon: '⚡', title: '物理：第 20 章小测', time: '约 25 分钟', html: `
<div class="sec" id="p1"><h3><span class="n">01</span>易错表</h3>
<table class="t"><tr><th>易错点</th><th>正确的</th></tr>
<tr><td>磁感线</td><td>假想的，不是真实存在的；外部 N → S</td></tr>
<tr><td>地磁极</td><td>地磁北极在地理南极附近</td></tr>
<tr><td>安培定则</td><td>右手，四指电流方向，大拇指 N 极</td></tr>
<tr><td>电磁铁强弱</td><td>电流大小、匝数、铁芯；和电流<b>方向</b>无关</td></tr>
<tr><td>电动机 vs 发电机</td><td>有电源 = 电动机（电 → 机械）；无电源 = 发电机（机械 → 电）</td></tr>
<tr><td>感应电流条件</td><td>闭合 + 一部分导体 + 切割磁感线</td></tr></table>
<div class="tip">📝 <a data-quiz="phy-24">第 20 章小测</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：第 1–5 单元小测', time: '约 25 分钟', html: `
<div class="sec" id="c1"><h3><span class="n">01</span>易错表</h3>
<table class="t"><tr><th>易错点</th><th>正确的</th></tr>
<tr><td>纯净物 / 混合物</td><td>冰水混合物是<b>纯净物</b>；空气、矿泉水是混合物</td></tr>
<tr><td>化学符号</td><td>2H：2 个氢原子；H₂：一个氢分子里 2 个氢原子；2H₂：2 个氢分子</td></tr>
<tr><td>电解水结论</td><td>水由氢<b>元素</b>和氧<b>元素</b>组成，不是"由氢气和氧气组成"</td></tr>
<tr><td>化合价</td><td>代数和为 0；单质的化合价是 0</td></tr>
<tr><td>质量守恒</td><td>只适用于化学变化；"参加反应"的才算（剩下的不算）</td></tr></table>
<div class="tip">📝 <a data-quiz="chem-24">化学第 1–5 单元小测</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 13 课', time: '约 30 分钟', html: `
<div class="sec" id="py13"><h3><span class="n">01</span>🐍 Python 第 13 课：排序：游戏排行榜</h3>
<p class="lede">sort、sorted、按分数排人——做出自动排名的排行榜。</p>
<a class="go2" href="py.html?l=py13">🐍 打开 Python 第 13 课</a>
<div class="tip">📤 学完可以接订单「评委打分系统」（交完还能开金币盲盒 🎁）。</div>
</div>
`},
  ],
  checks: {
 "d31-hs": {
  "title": "历史课 3：材料题",
  "qs": [
   {"q": "材料一说的是日本历史上的哪次改革？它向谁学习？", "a": "大化改新；向中国唐朝学习。", "pts": ["大化改新", "唐朝"]},
   {"q": "大化改新对日本有什么影响？", "a": "日本建立了中央集权的天皇制国家，由奴隶社会进入封建社会。", "pts": ["中央集权", "进入封建社会"]},
   {"q": "材料二中，城市和大学的出现对西欧社会有什么意义？", "a": "市民获得自治权，冲击了封建统治；大学培养了人才、传播了知识，为后来的文艺复兴打下了基础。", "pts": ["冲击封建统治 / 市民获得自由", "传播知识、培养人才"]}
  ]
 }
},
};
