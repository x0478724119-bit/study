// 第 23 天 · 动点问题（2026-11-10）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：动点问题', time: '约 60 分钟', html: `
<p class="lede">"点 P 从 A 出发，以每秒 1 cm 的速度……"——看到这种题很多人就慌了。其实动点题就是<b>把长度写成含 t 的式子</b>，然后变成你已经会的方程或二次函数。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>动点题四步法</h3>
<div class="step"><i>1</i><div><b>画图，标出 t 秒时点在哪。</b></div></div>
<div class="step"><i>2</i><div><b>用 t 表示线段长：</b>走过的 = 速度 × t；剩下的 = 总长 − 速度 × t。</div></div>
<div class="step"><i>3</i><div><b>写出 t 的范围：</b>哪个点先到终点，就按它算（"一个到了两个都停"）。</div></div>
<div class="step"><i>4</i><div><b>按题目要求列式：</b>问"什么时候面积是…" → 列方程；问"最大面积" → 二次函数求顶点。</div></div>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>例题：三角形里的两个动点</h3>
<div class="ex"><b>例题 1</b>　Rt△ABC 中 ∠B = 90°，AB = 8 cm，BC = 6 cm。P 从 A 沿 AB 向 B 以 2 cm/s 移动，Q 从 B 沿 BC 向 C 以 1 cm/s 移动，同时出发。△PBQ 的面积 S 什么时候最大？<br><br>
<b>第 1 步：</b>t 秒时 AP = 2t，所以 <b>BP = 8 − 2t</b>；<b>BQ = t</b>。<br>
<b>第 2 步：范围。</b>P 到 B 要 8 ÷ 2 = 4 秒，Q 到 C 要 6 秒，P 先到 → <b>0 ≤ t ≤ 4</b>。<br>
<b>第 3 步：</b>∠B = 90°，S = ½ × BP × BQ = ½(8 − 2t)t = <b>−t² + 4t</b>。<br>
<b>第 4 步：</b>对称轴 t = 2，在范围里 ✅，S 最大 = −4 + 8 = <b>4 cm²</b>。</div>
<div class="warn">⚠️ 求出 t 以后一定要检查<b>在不在范围里</b>。比如解出 t = 2 或 t = 8，而范围是 0 ≤ t ≤ 4，就只能要 t = 2。顶点不在范围里时，最大值在端点取（周测会考！）。</div>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>点走折线：分段写</h3>
<div class="ex"><b>例题 2</b>　正方形 ABCD 边长 4，P 从 A 出发沿 A → B → C 以每秒 1 个单位移动。△APD 的面积 y 和时间 t 是什么关系？<br><br>
<b>第 1 段（0 ≤ t ≤ 4，P 在 AB 上）：</b>底 AD = 4，高 AP = t，<b>y = 2t</b>，图像是上升的直线。<br>
<b>第 2 段（4 &lt; t ≤ 8，P 在 BC 上）：</b>P 到 AD 的距离一直是 4，<b>y = 8</b>，图像是水平线。</div>
<details class="try"><summary>试一试：例题 2 里，△APD 的面积是 6 时，t 是多少？</summary><div>
<details class="try"><summary>先看提示</summary><div>两段都看一下：第 2 段面积永远是 8。</div></details>
答案：第 1 段 2t = 6 → <b>t = 3</b>；第 2 段 y = 8 ≠ 6。所以只有 t = 3。</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-21">基础练习：动点问题</a></p>
<p>再做挑战题：<a data-quiz="math-21b">挑战题：动点问题</a></p>
<p>最后做综合滚动：<a data-quiz="roll-10">综合滚动 10</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 完形填空', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 19：购物（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-19">单词课 19</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。注意 <b>afford</b> 一般和 can / can't 一起用：I can't afford it.</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>完形填空 2（约 12 分钟）</h3>
<p>还是三步：<b>先通读 → 看前后词和固定搭配 → 看上下文和感情</b>。今天多一个小技巧：</p>
<div class="tip">💡 看到 <b>But / However</b>，后面的意思和前面<b>相反</b>；看到 <b>so / because</b>，前后是<b>因果</b>。连接词是完形的"路标"。</div>
<div class="tip">📝 <a data-quiz="en-22">完形填空 2：学手机的爷爷</a></div></div>

`},
{id: 'yw', icon: '📖', title: '语文：小说专题复习', time: '约 30 分钟', html: `
<p class="lede">第四单元四篇小说一起复习。小说题万变不离其宗：<b>人物、情节、环境、主题</b>。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>四篇小说一张表</h3>
<table class="t"><tr><th>篇目</th><th>作者</th><th>主要人物</th><th>主题</th></tr>
<tr><td>《故乡》</td><td>鲁迅</td><td>"我"、闰土、杨二嫂</td><td>揭示旧中国农村的衰败和农民的苦难；人与人之间的隔膜；对新生活的希望</td></tr>
<tr><td>《我的叔叔于勒》</td><td>莫泊桑（法国）</td><td>菲利普夫妇、于勒、若瑟夫</td><td>揭示资本主义社会人与人之间赤裸裸的<b>金钱关系</b></td></tr>
<tr><td>《孤独之旅》</td><td>曹文轩（选自《草房子》）</td><td>杜小康</td><td>成长需要经历孤独和磨难</td></tr>
<tr><td>《蒲柳人家》</td><td>刘绍棠</td><td>何满子、一丈青大娘</td><td>展现京东运河边乡村的风土人情和人情美</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>四个答题模板</h3>
<table class="t"><tr><th>题型</th><th>模板</th></tr>
<tr><td>人物形象</td><td>性格词 + 文中事例：「___ 是一个 ___ 的人，从 ___ 可以看出」</td></tr>
<tr><td>情节作用</td><td>结构上：设置悬念 / 埋下伏笔 / 推动情节 / 照应前文；内容上：表现人物 ___、突出主题 ___</td></tr>
<tr><td>环境描写</td><td>渲染 ___ 气氛 + 烘托人物 ___ 心情 + 推动情节 / 暗示社会背景</td></tr>
<tr><td>结尾作用</td><td>出人意料又在情理之中 / 照应开头 / 深化主题 / 留下想象空间（10-22 学过的三种结局）</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="yw-12">小说专题复习</a></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：电路故障分析', time: '约 30 分钟', html: `
<p class="lede">电学专题 2：<b>电路故障</b>。灯不亮了，是哪里坏了？靠电流表和电压表"破案"。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>破案两步</h3>
<div class="step"><i>1</i><div><b>看电流表（或灯亮不亮）判断类型：</b>电流表<b>没示数</b>、所有灯都不亮 → <b>断路</b>；电流表<b>有示数</b>、有的灯亮有的不亮 → <b>短路</b>（不亮的那个被短路了）。</div></div>
<div class="step"><i>2</i><div><b>看电压表找位置：</b>断路时，电压表<b>有示数（接近电源电压）</b> → 断在电压表<b>两端之间</b>；电压表<b>没示数</b> → 断在电压表<b>外面</b>。</div></div>
<div class="why">🤔 为什么断在电压表"里面"电压表反而有示数？因为电压表通过另一个灯连到了电源两极，相当于直接测电源电压。</div>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>常见情况速查（L₁、L₂ 串联，电压表接在 L₁ 两端）</h3>
<table class="t"><tr><th>现象</th><th>故障</th></tr>
<tr><td>两灯都不亮，电流表 0，电压表接近电源电压</td><td>L₁ 断路</td></tr>
<tr><td>两灯都不亮，电流表 0，电压表 0</td><td>L₂ 断路</td></tr>
<tr><td>L₁ 不亮、L₂ 亮，电压表 0</td><td>L₁ 短路</td></tr>
<tr><td>L₁ 亮、L₂ 不亮，电压表接近电源电压</td><td>L₂ 短路</td></tr></table>
<details class="try"><summary>试一试：两灯串联都不亮，用一根导线并在 L₂ 两端，L₁ 亮了。故障是什么？</summary><div>答案：<b>L₂ 断路</b>。导线把 L₂ 断开的地方"接通"了，电流能走了，L₁ 就亮了。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-16">练习：电路故障分析</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：易燃易爆物 + 化石燃料', time: '约 30 分钟', html: `
<div class="sec" id="c1"><h3><span class="n">01</span>爆炸和安全</h3>
<p><b>爆炸</b>：可燃物在<b>有限的空间</b>里急剧燃烧，气体体积迅速膨胀。面粉、煤粉这些<b>粉尘</b>和空气混合，遇到明火也会爆炸！</p>
<table class="t"><tr><th>情况</th><th>正确做法</th></tr>
<tr><td>燃气泄漏</td><td><b>关阀门、开门窗</b>；不能开灯、开排气扇、打电话（电火花）</td></tr>
<tr><td>加油站、面粉厂</td><td>严禁烟火</td></tr>
<tr><td>点燃可燃气体（H₂、CH₄、CO）前</td><td>一定要<b>检验纯度</b></td></tr></table>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>三大化石燃料</h3>
<table class="t"><tr><th>燃料</th><th>记住</th></tr>
<tr><td>煤</td><td>"工业的粮食"；<b>干馏</b>得到焦炭、煤焦油、焦炉气 → <b>化学变化</b></td></tr>
<tr><td>石油</td><td>"工业的血液"；<b>分馏</b>（按沸点不同分开）得到汽油、煤油、柴油 → <b>物理变化</b></td></tr>
<tr><td>天然气</td><td>主要成分<b>甲烷 CH₄</b>：CH₄ + 2O₂ =点燃= CO₂ + 2H₂O</td></tr></table>
<p>三者都是<b>不可再生能源</b>。燃煤产生的 SO₂、NO₂ 溶于雨水 → <b>酸雨</b>。</p>
<details class="try"><summary>试一试：怎么证明甲烷里含有碳元素和氢元素？</summary><div>答案：点燃甲烷，在火焰上方罩一个<b>干冷的烧杯</b>，内壁有水珠 → 含<b>氢</b>；再罩一个<b>内壁涂有澄清石灰水的烧杯</b>，石灰水变浑浊 → 含<b>碳</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-16">练习：易燃易爆物 + 化石燃料</a></div>
</div>
`},
{id: 'dfz', icon: '⚖️', title: '道法：第一、二单元综合', time: '约 25 分钟', html: `
<p class="lede">道法复习 7：开始全书综合。今天是第一、二单元（党的领导、新时代）。</p>
<div class="sec" id="z1"><h3><span class="n">01</span>速记表</h3>
<table class="t"><tr><th>考点</th><th>要记住的话</th></tr>
<tr><td>最本质的特征</td><td>中国共产党领导是中国特色社会主义<b>最本质的特征</b>，是中国特色社会主义制度的<b>最大优势</b></td></tr>
<tr><td>根本宗旨</td><td><b>全心全意为人民服务</b></td></tr>
<tr><td>以人民为中心</td><td>发展为了人民、发展依靠人民、发展成果由人民共享</td></tr>
<tr><td>新时代的社会主要矛盾</td><td>人民日益增长的<b>美好生活需要</b>和<b>不平衡不充分的发展</b>之间的矛盾</td></tr>
<tr><td>指导思想</td><td>习近平新时代中国特色社会主义思想</td></tr>
<tr><td>五位一体</td><td>经济、政治、文化、社会、生态文明建设</td></tr>
<tr><td>总任务</td><td>实现社会主义现代化和中华民族伟大复兴</td></tr></table>
<div class="warn">⚠️ 主要矛盾有新旧两个说法，常拿旧的（"物质文化需要同落后的社会生产"）当错误选项。</div>
<div class="tip">✍️ 做题：<a data-quiz="dfz-07">道法复习：第一、二单元综合</a></div>
</div>
`},
{id: 'app', icon: '🎨', title: '美术：游戏图标设计', time: '约 30 分钟', html: `
<div class="sec lesson" id="d23-art"><h3><span class="n">01</span>美术第 6 课：游戏图标设计（约 30 分钟）</h3>
<p class="lede">游戏里的技能、道具、App 图标都很小，有时候只有手指甲那么大。今天学怎么设计<b>小到一眼就能认出来</b>的图标。你画过学习站的小熊图标，今天让它更专业。</p>
<p><b>先学原理：好图标的 4 条规则</b></p>
<table class="t"><tr><th>规则</th><th>意思</th></tr>
<tr><td><b>1. 一个图标只说一件事</b></td><td>火球技能就只画火球，不要再加人、背景</td></tr>
<tr><td><b>2. 剪影清楚</b></td><td>上节课学的：涂黑了也能认出来</td></tr>
<tr><td><b>3. 颜色少</b></td><td>2–3 种主色就够；同一套图标用同一种风格（同样的描边粗细、同样的光源方向）</td></tr>
<tr><td><b>4. 缩小测试</b></td><td>画完缩小到很小看一下，糊成一团就要简化</td></tr></table>
<div class="why">🤔 为什么要"一整套风格统一"？玩家一看就知道它们是同一个游戏的，界面也不乱。就像学习站首页的科目图标都是 emoji，看起来才整齐。</div>
<p><b>动手（Procreate）：</b></p>
<div class="step"><i>1</i><div>新建一个正方形画布（比如 1024 × 1024），先画一个圆角方框当底。</div></div>
<div class="step"><i>2</i><div>设计一个技能图标：比如"冰冻""治疗""冲刺"选一个。先用黑色画剪影，确定形状，再上 2–3 种颜色，加一点高光（光从左上来）。</div></div>
<div class="step"><i>3</i><div>做缩小测试：双指把画布缩到最小，还能认出来吗？</div></div>
<div class="tip">📤 想多赚点？上完这节课可以接订单「一套技能图标」（交完小测还能开一个金币盲盒 🎁）。</div>
<div data-ck="d23-art"></div></div>
`},
  ],
  checks: {
 "d23-art": {
  "title": "美术第 6 课：游戏图标设计",
  "qs": [
   {"q": "好图标的 4 条规则是什么？", "a": "1. 一个图标只说一件事；2. 剪影清楚；3. 颜色少（2–3 种），一套风格统一；4. 缩小测试。", "pts": ["只说一件事", "剪影清楚", "颜色少 / 风格统一", "缩小测试"]},
   {"q": "同一套图标为什么要用统一的风格？可以统一哪些东西？", "a": "让玩家一看就知道是同一个游戏的，界面整齐不乱。可以统一描边粗细、光源方向、配色、底框形状。", "pts": ["看起来是一套 / 界面整齐", "说出至少 2 样可以统一的东西"]},
   {"q": "你今天画的是什么技能？做缩小测试时发现了什么？", "a": "没有标准答案。好的回答会说出画了什么，以及缩小后哪里看不清、怎么改的（比如去掉了细节、加粗了轮廓）。", "pts": ["说出画了什么", "说出缩小后的发现或修改"]}
  ]
 }
},
};
