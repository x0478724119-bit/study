// 第 24 天 · 最短路径（2026-11-11）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：最短路径（将军饮马）', time: '约 60 分钟', html: `
<p class="lede">一个古老的问题：将军从营地 A 出发，先到河边让马喝水，再去 B 地。在河边哪一点饮马，走的路最短？这就是<b>"将军饮马"</b>，中考填空选择题的常客。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>两种情况</h3>
<table class="t"><tr><th>A、B 和直线 l 的位置</th><th>做法</th><th>原理</th></tr>
<tr><td>在 l 的<b>两侧</b></td><td>直接连 AB，和 l 的交点就是 P</td><td>两点之间线段最短</td></tr>
<tr><td>在 l 的<b>同侧</b></td><td>作 A 关于 l 的<b>对称点 A′</b>，连 A′B，和 l 的交点就是 P</td><td>PA = PA′（轴对称）→ PA + PB = PA′ + PB ≥ A′B</td></tr></table>
<p class="s">同侧的思路就是：用对称把它"变成"两侧。最小值就是 <b>A′B 的长</b>。</p>
<div class="ex"><b>例题 1</b>　A(0, 2)、B(4, 4)，在 x 轴上找一点 P，使 PA + PB 最小。<br><br>
<b>第 1 步：</b>A 关于 x 轴的对称点 A′(0, −2)（横坐标不变，纵坐标变号）。<br>
<b>第 2 步：</b>最小值 = A′B = √(4² + 6²) = √52 = <b>2√13</b>。<br>
<b>第 3 步（求 P）：</b>直线 A′B 过 (0, −2)、(4, 4)：y = 1.5x − 2，令 y = 0 → x = 4/3，<b>P(4/3, 0)</b>。</div>
<p class="s">对称点口诀：关于 x 轴 → (x, −y)；关于 y 轴 → (−x, y)。</p>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>藏在图形里的"河"：对称轴</h3>
<p>很多题没有河，但图形自己有<b>对称轴</b>，对称点直接就有：</p>
<table class="t"><tr><th>图形</th><th>对称轴</th><th>谁和谁对称</th></tr>
<tr><td>正方形 ABCD</td><td>对角线 AC</td><td><b>B 和 D</b></td></tr>
<tr><td>正方形 ABCD</td><td>对角线 BD</td><td><b>A 和 C</b></td></tr>
<tr><td>等边 △ABC</td><td>BC 边上的中线 AD</td><td><b>B 和 C</b></td></tr>
<tr><td>抛物线</td><td>对称轴 x = h</td><td>和 x 轴的两个交点</td></tr></table>
<div class="ex"><b>例题 2</b>　正方形 ABCD 边长 4，E 在 AB 上，AE = 3，P 在对角线 AC 上，求 PE + PB 的最小值。<br><br>
<b>第 1 步：</b>B 关于 AC 的对称点是 D，所以 PB = PD。<br>
<b>第 2 步：</b>PE + PB = PE + PD ≥ DE。<br>
<b>第 3 步：</b>DE = √(AD² + AE²) = √(16 + 9) = <b>5</b>。</div>
<details class="try"><summary>试一试：抛物线 y = x² − 2x − 3 和 x 轴交于 A(−1, 0)、B(3, 0)，和 y 轴交于 C(0, −3)。在对称轴上找 P 使 PA + PC 最小，P 在哪？</summary><div>
<details class="try"><summary>先看提示</summary><div>A 关于对称轴 x = 1 的对称点是 B。连 BC。</div></details>
答案：直线 BC：y = x − 3，x = 1 时 y = −2，<b>P(1, −2)</b>，最小值 BC = 3√2。</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-22">基础练习：最短路径</a></p>
<p>再做挑战题：<a data-quiz="math-22b">挑战题：最短路径</a></p>
<p>最后做综合滚动：<a data-quiz="roll-11">综合滚动 11</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 排顺序 + Grammar in Use', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 20：教育（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-20">单词课 20</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。注意 <b>graduate from</b> + 学校、<b>be absent from</b> + 地方。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>连接词：排顺序和选标题的钥匙（约 12 分钟）</h3>
<table class="t"><tr><th>作用</th><th>连接词</th></tr>
<tr><td>顺序</td><td>First, Next, Then, After that, Finally / In the end</td></tr>
<tr><td>转折</td><td>But, However, Although</td></tr>
<tr><td>因果</td><td>because, so, As a result</td></tr>
<tr><td>举例 / 补充</td><td>For example, Also, Besides</td></tr></table>
<p><b>代词也是线索：</b>it / this / they 一定指<b>前面</b>出现过的东西，所以带代词的句子不可能排第一。</p>
<p class="s">选段落标题：先找段落的<b>第一句</b>（主题句），再看全段在讲"原因 / 建议 / 好处 / 例子"哪一种。</p>
<div class="tip">📝 <a data-quiz="en-23">排顺序 + 任务型阅读</a></div></div>
<div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 13（前半，约 15 分钟）</h3>
<p>Unit 13：<b>现在完成时 vs 一般过去时（1）</b>。读讲解，做<b>前 2 个练习</b>，用书后答案对，红笔改。<b>拍照发工作室群</b>，回首页写一句：做了哪几个练习、错几题。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：课外阅读 6', time: '约 30 分钟', html: `
<p class="lede">课外阅读 6：一篇<b>散文</b>。两周 4 篇课外阅读的最后一篇，用上之前学过的所有模板。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>散文常考：托物言志 + 段落作用（8 分钟）</h3>
<table class="t"><tr><th>题型</th><th>答题模板</th></tr>
<tr><td><b>托物言志</b>（写一样东西，其实在说人 / 道理）</td><td>「文章借写 ___（物）的 ___（特点），赞美了 / 表达了 ___（人的品质 / 道理）」</td></tr>
<tr><td><b>某段在结构上的作用</b></td><td>开头段：开篇点题、引出下文、设置悬念；中间段：承上启下、过渡；结尾段：总结全文、照应开头、深化主题</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>课外阅读 6：《墙角的那丛草》（15 分钟）</h3>
<div class="ex">　　学校的围墙角落里，长着一丛草。<br><br>
　　它长的地方实在不好：一边是水泥墙，一边是水泥地，中间只有一道窄窄的裂缝。阳光每天只能照进来一小会儿，下雨时，雨水还会被墙挡住一大半。<br><br>
　　第一次注意到它，是开学的时候。那时它只有几根细细的叶子，黄绿色，蔫蔫地贴在地上。我想，它大概活不过这个秋天。<br><br>
　　可是它没有死。秋天过去了，冬天来了，它的叶子被冻得发紫，却一直没有倒下。第二年春天，我惊讶地发现，裂缝里竟然冒出了一大片新绿，比去年多了一倍。它们挤挤挨挨，把那道灰色的裂缝变成了一条绿色的线。<br><br>
　　我蹲下来仔细看，才发现它的根早已顺着裂缝钻到了墙底下，钻到了我看不见的地方。原来它把大部分的力气，都用在了我看不见的地方。<br><br>
　　从那以后，每当我觉得自己的处境不够好、条件不够多的时候，我就会想起墙角的那丛草。它从来没有选择过自己的位置，却在没人看好的地方，活成了自己的样子。</div>
<div data-ck="d24-yd"></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：内能和比热容（复习）', time: '约 30 分钟', html: `
<p class="lede">回头复习第 13–14 章。学校早就讲完了，但期末一定考，而且比热容计算是送分题。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>核心公式：Q = cmΔt</h3>
<table class="t"><tr><th>字母</th><th>意思</th><th>单位</th></tr>
<tr><td>Q</td><td>吸收 / 放出的热量</td><td>J</td></tr>
<tr><td>c</td><td>比热容（水是 4.2 × 10³）</td><td>J/(kg·℃)</td></tr>
<tr><td>m</td><td>质量</td><td>kg</td></tr>
<tr><td>Δt</td><td>温度<b>变化了</b>多少（末温 − 初温）</td><td>℃</td></tr></table>
<div class="ex"><b>例题</b>　5 kg 水从 20 ℃ 加热到 60 ℃，吸收多少热量？<br><br>
Δt = 60 − 20 = 40 ℃；Q = 4.2 × 10³ × 5 × 40 = <b>8.4 × 10⁵ J</b>。</div>
<div class="warn">⚠️ "升高了 40 ℃"Δt 就是 40；"升高到 40 ℃"要用 40 减初温。一字之差！</div>
<p><b>燃料放热：</b>Q = mq（q 是热值）。<b>热机效率</b> = 有用的能量 ÷ 燃料放出的总热量，总是小于 100%。</p>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>概念速记</h3>
<table class="t"><tr><th>概念</th><th>记住</th></tr>
<tr><td>分子动理论</td><td>物质由分子组成；分子不停地做无规则运动（扩散）；分子间有引力和斥力</td></tr>
<tr><td>改变内能</td><td><b>做功</b>（搓手、钻木取火）和<b>热传递</b>（晒太阳、烤火）</td></tr>
<tr><td>水的比热容大</td><td>沿海昼夜温差小；暖气、汽车发动机用水做冷却剂 / 取暖</td></tr>
<tr><td>汽油机四冲程</td><td>吸气 → <b>压缩</b>（机械能 → 内能）→ <b>做功</b>（内能 → 机械能）→ 排气</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="phy-17">练习：内能和比热容（复习）</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：新能源和化学反应中的能量', time: '约 30 分钟', html: `
<div class="sec" id="c1"><h3><span class="n">01</span>乙醇和氢气</h3>
<table class="t"><tr><th>燃料</th><th>化学方程式</th><th>记住</th></tr>
<tr><td>乙醇（酒精）</td><td>C₂H₅OH + 3O₂ =点燃= 2CO₂ + 3H₂O</td><td>可以用粮食发酵得到，<b>可再生</b>；乙醇汽油节约石油、减少污染</td></tr>
<tr><td>氢气</td><td>2H₂ + O₂ =点燃= 2H₂O</td><td><b>最理想的燃料</b>：热值高、产物是水无污染、来源广。缺点：制取成本高、储存运输难</td></tr></table>
<p class="s">配平乙醇：先配 C（右边 2CO₂）、再配 H（6 个 → 3H₂O）、最后配 O：右边 4 + 3 = 7，乙醇自己带 1 个，还要 6 个 → 3O₂。</p>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>新能源 + 反应中的能量</h3>
<p><b>新能源：</b>太阳能、风能、地热能、潮汐能、核能、氢能。</p>
<table class="t"><tr><th>放热反应</th><th>吸热反应</th></tr>
<tr><td>所有燃烧；生石灰和水 CaO + H₂O = Ca(OH)₂（自热米饭）；镁和盐酸</td><td>碳和二氧化碳在高温下反应：C + CO₂ =高温= 2CO</td></tr></table>
<details class="try"><summary>试一试：为什么说氢气是"最理想"的燃料，却还没有被普遍使用？</summary><div>答案：优点是热值高、燃烧只生成水、可以用水制取；但目前<b>制取成本高</b>，而且<b>储存和运输困难</b>（容易泄漏、遇火爆炸）。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-17">练习：新能源和化学反应中的能量</a></div>
</div>
`},
{id: 'hist', icon: '🏛️', title: '历史：中古时期的世界', time: '约 25 分钟', html: `
<p class="lede">历史专题 8：第三、四单元——<b>封建时代的欧洲</b>和<b>中古亚非</b>。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>地区</th><th>要记住</th></tr>
<tr><td>西欧</td><td>查理·马特<b>采邑改革</b>（有条件分封土地）；<b>封君封臣</b>制度："我的附庸的附庸，不是我的附庸"；<b>庄园</b>是基本经济单位</td></tr>
<tr><td>西欧城市和大学</td><td>市民争取<b>自治权</b>；最早的大学：意大利<b>博洛尼亚大学</b>，还有巴黎大学、牛津大学</td></tr>
<tr><td>拜占庭</td><td>查士丁尼编纂《<b>民法大全</b>》；<b>1453</b> 年被奥斯曼土耳其灭亡</td></tr>
<tr><td>日本</td><td><b>646</b> 年大化改新，学习中国<b>唐朝</b>，从奴隶社会进入封建社会</td></tr>
<tr><td>阿拉伯</td><td><b>穆罕默德</b>创立伊斯兰教，统一阿拉伯半岛</td></tr></table>
<p class="s">排时间小心：大化改新 646 年 → 查理·马特改革 8 世纪 → 拜占庭灭亡 1453 年。</p>
<div class="tip">✍️ 做题：<a data-quiz="hist-11">历史专题：中古时期的世界</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 9 课', time: '约 30 分钟', html: `
<div class="sec" id="py9"><h3><span class="n">01</span>🐍 Python 第 9 课：文字冒险（1）：房间和选择（约 30 分钟）</h3>
<p class="lede">作品集项目开工！用函数搭出一座有好几个房间、好几个结局的古堡。</p>
<a class="go2" href="py.html?l=py9">🐍 打开 Python 第 9 课</a>
<div class="tip">📤 学完这课可以接订单「给古堡加一个房间」（交完还能开一个金币盲盒 🎁）。</div>
</div>
`},
  ],
  checks: {
 "d24-yd": {
  "title": "课外阅读 6：墙角的那丛草",
  "qs": [
   {"q": "第 2 段写草生长的地方\"实在不好\"，有什么作用？", "a": "写出草生长环境的恶劣（阳光少、雨水少、只有一道裂缝），为下文写它顽强地活下来、越长越多做铺垫，突出草顽强的生命力。", "pts": ["写出环境恶劣", "铺垫 / 衬托", "突出草顽强"]},
   {"q": "\"我\"对这丛草的看法有什么变化？", "a": "开始觉得它活不过秋天（不看好、同情）→ 第二年春天看到一大片新绿时惊讶 → 发现它的根扎得很深后明白、敬佩，并从中得到启发。", "pts": ["开始不看好", "后来惊讶", "最后敬佩 / 受到启发"]},
   {"q": "\"原来它把大部分的力气，都用在了我看不见的地方\"，这句话有什么含义？", "a": "表面说草把力气用在往深处扎根；深层是说一个人要默默打好基础、在别人看不见的地方努力，才能成长。", "pts": ["表面：草在扎根", "深层：默默努力 / 打基础"]},
   {"q": "这篇文章用了什么写法？表达了什么？", "a": "托物言志。借写墙角那丛草在恶劣环境中顽强生长的特点，表达了人不管处境多不好，都要扎根努力、活出自己的样子的道理。", "pts": ["托物言志", "草：环境差却顽强生长", "道理：处境不好也要努力 / 活出自己"]}
  ]
 }
},
};
