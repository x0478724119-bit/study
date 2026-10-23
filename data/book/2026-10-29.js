// 第 15 天 · 几何综合（2026-10-29）手册
window.BOOK = {
  intro: '今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：几何综合', time: '约 60 分钟', html: `
<p class="lede">今天专题：<b>几何综合：全等 + 旋转 + 勾股</b>。期末几何大题常常是一个图里藏着一对全等三角形，找到它（往往靠旋转），再用勾股定理算长度。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>找全等三角形的 3 个信号</h3>
<table class="t"><tr><th>信号</th><th>想到什么</th></tr>
<tr><td>两个共顶点的等边三角形 / 正方形 / 等腰直角三角形</td><td>"手拉手"：一对全等（SAS），对应线段相等，夹角 = 旋转角</td></tr>
<tr><td>正方形里一个 45° 角（半角）</td><td>把一个小三角形旋转 90° 拼过去</td></tr>
<tr><td>等腰三角形 + 中点</td><td>三线合一（中线 = 高 = 角平分线）</td></tr></table>
<p class="s">全等判定复习：SSS、SAS、ASA、AAS，直角三角形还有 HL。<b>SSA 不行</b>。</p>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>例题：正方形里的旋转</h3>
<div class="ex"><b>例题</b>　正方形 ABCD 的边长是 4，E 是 BC 的中点。把 △ABE 绕点 A 逆时针旋转 90°，得到 △ADF（B 转到 D）。① 求 EF 的长；② 求 △AEF 的面积。<br><br>
<b>第 1 步：找旋转带来的条件。</b>AE = AF，∠EAF = 90°（旋转角）→ △AEF 是等腰直角三角形。<br>
<b>第 2 步：算 AE（勾股）。</b>BE = 2，AB = 4，AE = √(16 + 4) = √20 = 2√5。<br>
<b>第 3 步：</b>EF = AE × √2 = 2√5 × √2 = <b>2√10</b>。<br>
<b>第 4 步：</b>面积 = AE × AF ÷ 2 = 20 ÷ 2 = <b>10</b>。</div>
<div class="tip">💡 另一种算 EF 的方法：F 在 CD 的延长线上，DF = BE = 2。△ECF 是直角三角形，EC = 2，CF = 4 + 2 = 6，EF = √(4 + 36) = √40 = 2√10。两种方法结果一样，可以互相检查。</div>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>勾股定理的几个常用数</h3>
<p>考试经常用这几组，背下来能省很多时间：</p>
<table class="t"><tr><th>直角边</th><th>斜边</th></tr>
<tr><td>3、4</td><td>5</td></tr><tr><td>5、12</td><td>13</td></tr><tr><td>6、8</td><td>10</td></tr><tr><td>8、15</td><td>17</td></tr>
<tr><td>1、1</td><td>√2（等腰直角）</td></tr><tr><td>1、√3</td><td>2（30°、60° 的直角三角形）</td></tr></table>
<details class="try"><summary>试一试：等边三角形边长 6，它的高是多少？</summary><div>答案：高把它分成两个 30°-60°-90° 的直角三角形，斜边 6，短边 3，高 = √(36 − 9) = <b>3√3</b>。</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-15">基础练习：几何综合</a></p>
<p>再做挑战题：<a data-quiz="math-15b">挑战题：几何综合</a></p>
<p>最后做综合滚动：<a data-quiz="roll-04">综合滚动（复习以前的章节）</a></p>

`},
{id: 'en', icon: '🔤', title: '英语：单词 + 主谓一致 + Grammar in Use', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 13：屏幕时间（约 12 分钟）+ 造句（约 10 分钟）</h3>
<p>先读文章学 12 个新词（点单词看中文、听发音），再做题。</p>
<div class="tip">📝 <a data-quiz="vocab-13">单词课 13</a></div>
<p><b>然后回首页做「用新词写句子」：</b>挑 5 个新词各写一句，<b>一共至少 40 个英文单词</b>。写完检查三样：<b>句首大写、单复数（a + 单数，some / two + 复数）、want / need 后面加 to</b>。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>课本 Unit 8 语法：主谓一致（约 12 分钟）</h3>
<p>主谓一致 = <b>主语是单数，动词就用单数；主语是复数，动词就用复数</b>。难的是判断"主语到底是单数还是复数"：</p>
<table class="t"><tr><th>情况</th><th>单 / 复</th><th>例句</th></tr>
<tr><td>A and B</td><td>复数</td><td>Tom and Jerry <b>are</b> friends.</td></tr>
<tr><td>each / every / everyone / nobody</td><td>单数</td><td>Everyone <b>likes</b> it.</td></tr>
<tr><td>时间、金钱、距离（看成整体）</td><td>单数</td><td>Two hours <b>is</b> enough.</td></tr>
<tr><td>动名词作主语</td><td>单数</td><td>Running <b>is</b> fun.</td></tr>
<tr><td>A as well as / with B</td><td>看 A</td><td>The coach, with the players, <b>is</b> here.</td></tr>
<tr><td>there be、either…or、neither…nor</td><td><b>就近</b></td><td>There <b>is</b> a ball and two bats.</td></tr>
<tr><td>the number of / a number of</td><td>单 / 复</td><td>The number of fans <b>is</b>…；A number of fans <b>are</b>…</td></tr></table>
<div class="tip">📝 <a data-quiz="en-14">课本 U8 语法：主谓一致</a></div></div><div class="sec" id="e3"><h3><span class="n">03</span>Grammar in Use Unit 9（后半，约 15 分钟）</h3>
<p>做右页<b>剩下的练习</b>（9.3 以后）。不会的回左页讲解找。用书后答案自己对，错的用红笔改。<b>做完拍照发工作室群</b>，回首页写一句：做了哪几个练习、错几题。</p></div>
`},
{id: 'yw', icon: '📖', title: '语文：议论文 + 想和做', time: '约 30 分钟', html: `
<p class="lede">第五单元是<b>议论文</b>。学校会考议论文阅读，今天先学议论文的"三要素"，再读胡绳的<b>《想和做》</b>（课本第 112 页）。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>议论文三要素（10 分钟）</h3>
<table class="t"><tr><th>要素</th><th>是什么</th><th>怎么找 / 怎么答</th></tr>
<tr><td><b>论点</b></td><td>作者的观点（是一个判断句）</td><td>常在标题、开头、结尾；中心论点只有一个</td></tr>
<tr><td><b>论据</b></td><td>支持观点的材料</td><td>两类：<b>事实论据</b>（事例、数据）和<b>道理论据</b>（名言、公认的道理）</td></tr>
<tr><td><b>论证方法</b></td><td>怎么用论据证明论点</td><td>举例论证、道理论证、对比论证、比喻论证</td></tr></table>
<p><b>论证方法的作用模板：</b>「运用了 ____ 论证，用 ____（具体内容）证明了 ____（论点），使论证更加 ____（具体有力 / 生动形象 / 鲜明突出）。」</p>
<table class="t"><tr><th>方法</th><th>最后一空填</th></tr>
<tr><td>举例论证</td><td>具体有力、令人信服</td></tr><tr><td>道理论证</td><td>深刻、有说服力</td></tr>
<tr><td>对比论证</td><td>鲜明突出</td></tr><tr><td>比喻论证</td><td>生动形象、通俗易懂</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>读《想和做》（12 分钟）</h3>
<div class="tip">📚 没带课本？在<a href="https://basic.smartedu.cn" target="_blank">国家中小学智慧教育平台</a>看电子版。</div>
<p>边读边找：① 作者的中心论点是什么（想和做是什么关系）？② 作者批评了哪两种人？③ 文中用了什么论证方法？</p>
<details class="try"><summary>读完对照</summary><div>中心论点：<b>想和做要结合起来</b>，只想不做、只做不想都不行。作者批评了"只想不做"的空想家和"只做不想"的盲目做事的人。文章正反对比，说理很清楚。</div></details>
<div class="tip">📝 做题：<a data-quiz="yw-07">议论文入门 + 想和做</a></div>
</div>

`},
{id: 'phy', icon: '⚡', title: '物理：测小灯泡电功率', time: '约 30 分钟', html: `
<p class="lede">实验：<b>测量小灯泡的电功率</b>。和上上周的"伏安法测电阻"几乎是同一套电路，只是最后用 P = UI 算。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>原理、电路、步骤</h3>
<p><b>原理：P = UI</b>。电路：电源、开关、小灯泡、滑动变阻器、电流表<b>串联</b>，电压表<b>并联</b>在灯两端。</p>
<div class="step"><i>1</i><div>开关断开连电路，滑片放在阻值最大处。</div></div>
<div class="step"><i>2</i><div>闭合开关，<b>调滑片使电压表示数等于额定电压</b>（比如 2.5 V），读电流，算出的就是<b>额定功率</b>。</div></div>
<div class="step"><i>3</i><div>再调到略低、略高于额定电压，各测一次，观察亮度。</div></div>
<table class="t"><tr><th>U/V</th><td>2.0</td><td>2.5</td><td>3.0</td></tr><tr><th>I/A</th><td>0.26</td><td>0.30</td><td>0.32</td></tr><tr><th>P/W</th><td>0.52</td><td><b>0.75</b></td><td>0.96</td></tr><tr><th>亮度</th><td>较暗</td><td>正常</td><td>较亮</td></tr></table>
<p>结论：<b>实际功率越大，灯越亮</b>；额定功率是 2.5 V 时的 0.75 W。</p>
<div class="warn">⚠️ 和测电阻一样，<b>不能求平均值</b>：三次是三种不同情况下的功率，平均没有意义。题目问"额定功率"，只认额定电压下那一次。</div>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>常考的操作题</h3>
<table class="t"><tr><th>现象</th><th>原因 / 做法</th></tr>
<tr><td>电压表示数 2 V，要测额定功率（2.5 V）</td><td>滑片往<b>让变阻器电阻变小</b>的方向移（灯分到的电压变大）</td></tr>
<tr><td>灯不亮，电流表无示数，电压表接近电源电压</td><td>小灯泡<b>断路</b></td></tr>
<tr><td>灯不亮，电流表有示数，电压表为 0</td><td>小灯泡<b>短路</b></td></tr>
<tr><td>怎么调滑片灯都很暗、两表示数不变</td><td>变阻器接了下面两个接线柱</td></tr></table>
<div class="tip">📝 做题：<a data-quiz="phy-08">练习：测量小灯泡的电功率</a></div>
</div>

`},
{id: 'chem', icon: '🧪', title: '化学：方程式书写', time: '约 30 分钟', html: `
<p class="lede">化学方程式<b>书写专项</b>：初三上学期要会写的方程式其实就十来个，今天把前三个单元学过的反应全部写一遍。<b>每个都自己动手写在纸上</b>，写完对答案。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>必会方程式清单</h3>
<table class="t"><tr><th>反应</th><th>化学方程式</th></tr>
<tr><td>氢气燃烧</td><td>2H₂ + O₂ =点燃= 2H₂O</td></tr>
<tr><td>碳充分燃烧</td><td>C + O₂ =点燃= CO₂</td></tr>
<tr><td>硫燃烧</td><td>S + O₂ =点燃= SO₂</td></tr>
<tr><td>磷燃烧</td><td>4P + 5O₂ =点燃= 2P₂O₅</td></tr>
<tr><td>铁丝燃烧</td><td>3Fe + 2O₂ =点燃= Fe₃O₄</td></tr>
<tr><td>镁带燃烧</td><td>2Mg + O₂ =点燃= 2MgO</td></tr>
<tr><td>电解水</td><td>2H₂O =通电= 2H₂↑ + O₂↑</td></tr>
<tr><td>过氧化氢制氧气</td><td>2H₂O₂ =MnO₂= 2H₂O + O₂↑</td></tr>
<tr><td>高锰酸钾制氧气</td><td>2KMnO₄ =△= K₂MnO₄ + MnO₂ + O₂↑</td></tr>
<tr><td>氯酸钾制氧气</td><td>2KClO₃ =MnO₂、△= 2KCl + 3O₂↑</td></tr></table>
<p class="s">记法：燃烧类都是"某某 + O₂ =点燃="；制氧气的三个都会生成 O₂↑。</p>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>反应类型（顺便复习）</h3>
<table class="t"><tr><th>类型</th><th>特点</th><th>例子</th></tr>
<tr><td>化合反应</td><td>多变一：A + B → C</td><td>各种燃烧生成氧化物</td></tr>
<tr><td>分解反应</td><td>一变多：A → B + C</td><td>电解水、三种制氧气</td></tr></table>
<p><b>写方程式常见的 4 个错：</b>① 化学式写错（Mg 和 O 生成的是 MgO 不是 MgO₂）；② 没配平；③ 忘了写条件；④ 该标的 ↑ 没标，或者反应物有气体还标了 ↑。</p>
<div class="tip">📝 做题：<a data-quiz="chem-08">练习：化学方程式书写</a></div>
</div>

`},
{id: 'dfz', icon: '⚖️', title: '道法：高质量发展', time: '约 25 分钟', html: `
<p class="lede">道法复习第三单元第 8 课：<b>实现高质量发展</b>（新发展理念、新发展格局、高质量发展）。先看速记表，再做题。</p>
<div class="sec" id="d1"><h3><span class="n">01</span>速记表（10 分钟）</h3>
<table class="t"><tr><th>考点</th><th>必记</th></tr>
<tr><td>新发展理念</td><td><b>创新、协调、绿色、开放、共享</b>。创新是引领发展的<b>第一动力</b>；协调是持续健康发展的内在要求；绿色是永续发展的必要条件；开放是国家繁荣发展的必由之路；共享是中国特色社会主义的本质要求</td></tr>
<tr><td>新发展格局</td><td>以<b>国内大循环为主体</b>、<b>国内国际双循环相互促进</b></td></tr>
<tr><td>高质量发展</td><td>是全面建设社会主义现代化国家的<b>首要任务</b></td></tr></table>
<div class="tip">💡 做题技巧：看到"科技、自主研发" → 创新；"城乡、区域差距" → 协调；"环保、节能" → 绿色；"一带一路、对外合作" → 开放；"人人受益、民生" → 共享。</div>
<div class="tip">✍️ 做题：<a data-quiz="dfz-04">道法复习 4：高质量发展</a></div>
</div>

`},
{id: 'app', icon: '🛠️', title: '酷家乐：学习角', time: '约 30 分钟', html: `
<div class="sec lesson" id="d15-kjl"><h3><span class="n">01</span>酷家乐第 7 课：设计一个学习角（约 30 分钟）</h3>
<p class="lede">今天做一个小而有用的设计：<b>学习角</b>（书桌 + 椅子 + 灯 + 收纳）。不用画整个房间，在你卧室的方案里改一角就行。</p>
<p><b>先学原理：人体工学（让人坐着舒服）</b></p>
<table class="t"><tr><th>尺寸</th><th>多少</th><th>为什么</th></tr>
<tr><td>书桌高度</td><td>约 <b>75 cm</b></td><td>手臂放上去手肘差不多 90°，不耸肩</td></tr>
<tr><td>椅子座高</td><td>约 <b>45 cm</b></td><td>脚能平放在地上，膝盖约 90°</td></tr>
<tr><td>书桌深度</td><td>至少 <b>60 cm</b></td><td>放得下电脑或书，眼睛离屏幕够远</td></tr>
<tr><td>椅子后面留空</td><td>至少 <b>70 cm</b></td><td>能拉开椅子站起来</td></tr></table>
<div class="why">🤔 台灯为什么要放在<b>写字那只手的对面</b>？右手写字，灯放左边，手的影子就不会挡住纸。</div>
<p><b>收纳：</b>常用的放手边（桌面笔筒、抽屉），不常用的放高处（书架上层），桌面只留正在用的东西，看起来就清爽。</p>
<p><b>动手：</b></p>
<div class="step"><i>1</i><div>打开你的卧室方案，选一面靠窗或靠墙的位置。</div></div>
<div class="step"><i>2</i><div>放一张书桌（检查高度和深度），配一把椅子，后面留够 70 cm。</div></div>
<div class="step"><i>3</i><div>加一盏台灯（放在写字手的对面）、一个书架或墙上的搁板。</div></div>
<div class="step"><i>4</i><div>切 3D，换个角度截一张图。</div></div>
<div class="tip">📤 上完这节课可以接订单「我的学习角」（交完小测能开金币盲盒 🎁）。</div>
<div data-ck="d15-kjl"></div></div>

`},
  ],
  checks: {
 "d15-kjl": {
  "title": "酷家乐第 7 课：设计一个学习角",
  "qs": [
   {
    "q": "书桌、椅子大概多高？椅子后面要留多少空间？",
    "a": "书桌约 75 cm，椅子座高约 45 cm，椅子后面至少留 70 cm。",
    "pts": [
     "书桌约 75 cm",
     "椅子约 45 cm",
     "后面留 70 cm"
    ]
   },
   {
    "q": "右手写字的人，台灯应该放在哪边？为什么？",
    "a": "放在左边（写字手的对面），这样手的影子不会挡住纸。",
    "pts": [
     "放在左边 / 对面",
     "原因：影子不挡纸"
    ]
   },
   {
    "q": "你的学习角里，哪些东西放在手边、哪些放高处？",
    "a": "没有标准答案。常用的（笔、正在看的书）放手边，不常用的放高处。",
    "pts": [
     "说出了手边放什么",
     "说出了高处放什么"
    ]
   }
  ]
 }
},
};
