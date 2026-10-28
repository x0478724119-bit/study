// 第 22 天 · 看图判断 a、b、c（2026-11-09）手册
window.BOOK = {
  intro: '新的一周！今天大约 4 小时：数学约 60 分钟、英语约 50 分钟，其他每科约 30 分钟。点上面的科目标签切换，一次只学一科。',
  parts: [
{id: 'math', icon: '📐', title: '数学：看图判断 a、b、c', time: '约 60 分钟', html: `
<p class="lede">中考选择题第 10 题左右，几乎每年都有一道"<b>给你抛物线的图，判断下面几个结论对不对</b>"。看起来很乱，其实只有几个套路，今天一次学完。</p>

<div class="sec" id="m1"><h3><span class="n">01</span>a、b、c 的符号：三个看点</h3>
<table class="t"><tr><th>看什么</th><th>判断</th></tr>
<tr><td>开口方向</td><td>向上 a &gt; 0；向下 a &lt; 0</td></tr>
<tr><td>和 y 轴的交点</td><td>交在正半轴 c &gt; 0；负半轴 c &lt; 0；原点 c = 0</td></tr>
<tr><td>对称轴在哪边</td><td><b>左同右异</b>：对称轴在 y 轴左边，a、b 同号；右边，a、b 异号；就是 y 轴，b = 0</td></tr>
<tr><td>和 x 轴几个交点</td><td>2 个：b² − 4ac &gt; 0；1 个：= 0；没有：&lt; 0</td></tr></table>
<p class="s">"左同右异"的来历：对称轴 x = −b/(2a)。在左边 → −b/(2a) &lt; 0 → b/a &gt; 0 → 同号。</p>
</div>

<div class="sec" id="m2"><h3><span class="n">02</span>a + b + c 这种式子：代一个 x 进去</h3>
<p>关键一句话：<b>"a + b + c"就是 x = 1 时的 y</b>。所以看图上 x = 1 那个点在 x 轴上方还是下方。</p>
<table class="t"><tr><th>式子</th><th>就是</th></tr>
<tr><td>a + b + c</td><td>x = 1 时的 y</td></tr>
<tr><td>a − b + c</td><td>x = −1 时的 y</td></tr>
<tr><td>4a + 2b + c</td><td>x = 2 时的 y</td></tr>
<tr><td>4a − 2b + c</td><td>x = −2 时的 y</td></tr></table>
<p><b>对称轴给的式子：</b>对称轴 x = 1 → −b/(2a) = 1 → <b>b = −2a</b>，也就是 2a + b = 0。对称轴 x = −1 → b = 2a，2a − b = 0。</p>
<div class="ex"><b>例题</b>　抛物线开口向下，和 x 轴交于 (−1, 0)、(3, 0)。判断 3a + c 的符号。<br><br>
<b>第 1 步：</b>(−1, 0) 在图上 → x = −1 时 y = 0 → <b>a − b + c = 0</b>。<br>
<b>第 2 步：</b>对称轴 x = (−1 + 3) ÷ 2 = 1 → b = −2a。<br>
<b>第 3 步：</b>代进第 1 步：a − (−2a) + c = 0 → <b>3a + c = 0</b>。</div>
<div class="warn">⚠️ 出现"3a + c""2a + c"这种不是 x = 某数的式子，就用对称轴把 b 换成 a，再代进 a + b + c 或 a − b + c。</div>
</div>

<div class="sec" id="m3"><h3><span class="n">03</span>比较 y 的大小：看离对称轴多远</h3>
<p>开口<b>向上</b>：离对称轴越<b>远</b>，y 越<b>大</b>；开口<b>向下</b>：离对称轴越远，y 越<b>小</b>。</p>
<details class="try"><summary>试一试：y = x² − 2x，点 (−1, y₁)、(2, y₂)、(4, y₃)，比较大小。</summary><div>
<details class="try"><summary>先看提示</summary><div>对称轴 x = 1，开口向上。算三个点到 x = 1 的距离。</div></details>
答案：距离 2、1、3，开口向上远的大 → <b>y₂ &lt; y₁ &lt; y₃</b>。（代进去：y₁ = 3、y₂ = 0、y₃ = 8，对得上 ✅）</div></details>
</div>

<p>学完了，先做基础题：<a data-quiz="math-20">基础练习：看图判断 a、b、c</a></p>
<p>再做挑战题：<a data-quiz="math-20b">挑战题：看图判断 a、b、c</a></p>
<p>最后做综合滚动：<a data-quiz="roll-09">综合滚动 9</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 判断题', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 18：天气（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-18">单词课 18</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，<b>一共至少 40 个英文单词</b>。小心 <b>degree</b>：温度后面要用复数 35 degrees。</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>雅思题型入门：True / False / Not Given（约 12 分钟）</h3>
<table class="t"><tr><th>选</th><th>什么时候</th></tr>
<tr><td><b>True</b></td><td>文章说了，意思一样（常常换了说法）</td></tr>
<tr><td><b>False</b></td><td>文章说了，但意思<b>正好相反</b></td></tr>
<tr><td><b>Not Given</b></td><td>文章<b>根本没提</b>（不能用常识脑补）</td></tr></table>
<div class="warn">⚠️ 最大的坑：<b>all / some / always / never / only</b> 这种词。原文说 some（一些），题目说 all（全部）→ False。</div>
<p class="s">False 和 Not Given 分不清时问自己：文章里有没有一句话能<b>直接反驳</b>它？有 → False；找不到 → Not Given。</p>
<div class="tip">📝 <a data-quiz="en-21">阅读：判断对错（雅思题型入门）</a></div></div>

`},
{id: 'yw', icon: '📖', title: '语文：课外阅读 5', time: '约 30 分钟', html: `
<p class="lede">课外阅读 5：一篇<b>记叙文</b>。今天练两个新题型：<b>标题的作用</b>和<b>细节描写的作用</b>。</p>
<div class="sec" id="y1"><h3><span class="n">01</span>2 个答题模板（8 分钟）</h3>
<table class="t"><tr><th>题型</th><th>答题模板</th></tr>
<tr><td><b>标题有什么作用 / 好在哪</b></td><td>① 内容上：交代了文章的 ___（主要人物 / 事件 / 线索）；② 结构上：是文章的<b>线索</b>，贯穿全文；③ 主题上：<b>点明 / 暗示</b>了 ___ 的主题；④ 吸引读者兴趣（标题新奇时）</td></tr>
<tr><td><b>细节描写的作用</b></td><td>「通过对 ___ 的（动作 / 神态 / 语言）描写，表现了人物 ___ 的性格 / 心情，表达了作者 ___ 的感情」</td></tr></table>
</div>
<div class="sec" id="y2"><h3><span class="n">02</span>课外阅读 5：《那盏灯》（15 分钟）</h3>
<div class="ex">　　我家住在一条很长的巷子尽头。巷子里没有路灯，只有一户人家的窗台上，每天晚上都亮着一盏小台灯。<br><br>
　　那是一个独居的老爷爷的家。小时候我很怕走夜路，每次晚自习放学，都是一路小跑，直到看见那盏灯，心才放下来——走到那儿，离家就只剩一半的路了。<br><br>
　　有一年冬天，我发现那盏灯不亮了。巷子黑得像一口井，我攥着书包带，听着自己的脚步声，一步也不敢停。第二天、第三天，灯还是黑的。<br><br>
　　第四天，我在巷口碰见了老爷爷的女儿。她说老人生病住院了，临走前还念叨："我那盏灯可别忘了开，巷子里的孩子晚上要走路的。"<br><br>
　　我愣在那里，半天说不出话。原来那盏灯，从来就不是为他自己亮的。<br><br>
　　那天晚上，灯又亮了。是他女儿回来开的。<br><br>
　　后来老爷爷出院了，灯一直亮着。我也长大了，不再怕黑。可每次走过那扇窗，我还是会放慢脚步，在心里轻轻说一声：谢谢。</div>
<div data-ck="d22-yd"></div>
</div>
`},
{id: 'phy', icon: '⚡', title: '物理：动态电路分析', time: '约 30 分钟', html: `
<p class="lede">电学专题 1：<b>动态电路</b>。滑动变阻器一动，电流表、电压表怎么变？期末选择题必有一道。</p>
<div class="sec" id="p1"><h3><span class="n">01</span>串联电路：四步推下去</h3>
<p>定值电阻 R₁ 和滑动变阻器 R₂ 串联，电源电压不变。滑片移动使 R₂ <b>变大</b>：</p>
<div class="step"><i>1</i><div>R₂ 变大 → 总电阻 R = R₁ + R₂ <b>变大</b>。</div></div>
<div class="step"><i>2</i><div>I = U/R → 电流 <b>变小</b>（电流表示数变小）。</div></div>
<div class="step"><i>3</i><div>U₁ = IR₁ → R₁ 两端电压 <b>变小</b>。</div></div>
<div class="step"><i>4</i><div>U₂ = U − U₁ → R₂ 两端电压 <b>变大</b>。</div></div>
<p class="s">口诀：<b>串联分压，电阻大的分得多</b>。谁的电阻变大，谁的电压就变大。</p>
<div class="warn">⚠️ 先看清电压表接在谁两端！电压表测 R₁ 和测 R₂，答案正好相反。</div>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>并联电路 + 传感器</h3>
<p><b>并联：</b>各支路电压都等于电源电压，<b>互不影响</b>。一条支路电阻变大 → 那条支路电流变小，另一条不变 → 干路电流变小。</p>
<p><b>传感器题</b>换汤不换药：光敏电阻（光越强电阻越小）、热敏电阻、气敏电阻（酒精测试仪），就是一个"会自己变的滑动变阻器"。</p>
<details class="try"><summary>试一试：电源 6 V，R₁ = 10 Ω，R₂ 是 0 ~ 20 Ω 的滑动变阻器，串联。电流表最大、最小是多少？</summary><div>答案：R₂ = 0 时最大 6 ÷ 10 = <b>0.6 A</b>；R₂ = 20 Ω 时最小 6 ÷ 30 = <b>0.2 A</b>。</div></details>
<div class="tip">📝 做题：<a data-quiz="phy-15">练习：动态电路分析</a></div>
</div>
`},
{id: 'chem', icon: '🧪', title: '化学：燃烧和灭火', time: '约 30 分钟', html: `
<p class="lede">第七单元<b>能源的合理利用与开发</b>。第一课：燃烧需要什么？灭火就是"拿走其中一样"。</p>
<div class="sec" id="c1"><h3><span class="n">01</span>燃烧的三个条件（缺一不可）</h3>
<div class="step"><i>1</i><div><b>可燃物</b>（木头、纸、酒精……）</div></div>
<div class="step"><i>2</i><div><b>氧气（或空气）</b></div></div>
<div class="step"><i>3</i><div><b>温度达到着火点</b>（每种物质着火点不同：白磷约 40 ℃，红磷约 240 ℃）</div></div>
<p><b>经典实验：</b>80 ℃ 热水上方的铜片放白磷和红磷，热水里放一块白磷。</p>
<table class="t"><tr><th>位置</th><th>燃烧吗</th><th>说明</th></tr>
<tr><td>铜片上的白磷</td><td>✅</td><td>三个条件都有</td></tr>
<tr><td>铜片上的红磷</td><td>❌</td><td>没达到着火点</td></tr>
<tr><td>水里的白磷</td><td>❌ → 通氧气后 ✅</td><td>缺氧气</td></tr></table>
</div>
<div class="sec" id="c2"><h3><span class="n">02</span>灭火的三个原理</h3>
<table class="t"><tr><th>原理</th><th>例子</th></tr>
<tr><td>清除或隔离可燃物</td><td>森林着火开隔离带；关掉燃气灶阀门</td></tr>
<tr><td>隔绝氧气（空气）</td><td>油锅着火盖锅盖；酒精灯用灯帽盖灭；沙土盖灭</td></tr>
<tr><td>降温到着火点以下</td><td>用水浇；吹灭蜡烛</td></tr></table>
<div class="warn">⚠️ 着火点是物质自己的属性，<b>不能降低</b>！只能"降低温度到着火点以下"。选项里写"降低着火点"一定是错的。</div>
<details class="try"><summary>试一试：为什么油锅着火不能用水浇？</summary><div>答案：油比水轻，会浮在水面上继续烧，而且热油遇水会飞溅，火反而更大。要<b>盖锅盖</b>（隔绝空气）或放入大量青菜（降温）。</div></details>
<div class="tip">📝 做题：<a data-quiz="chem-15">练习：燃烧和灭火</a></div>
</div>
`},
{id: 'hist', icon: '🏛️', title: '历史：工业革命和马克思主义', time: '约 25 分钟', html: `
<p class="lede">历史专题 7：第七单元。<b>机器 → 工厂 → 两大阶级 → 马克思主义</b>，一条线串下来。</p>
<div class="sec" id="h1"><h3><span class="n">01</span>时间轴</h3>
<table class="t"><tr><th>时间</th><th>事件</th><th>意义</th></tr>
<tr><td>18 世纪 60 年代</td><td>工业革命从<b>英国</b>开始，哈格里夫斯发明<b>珍妮机</b></td><td>工业革命开始的标志</td></tr>
<tr><td>1785 年</td><td><b>瓦特</b>改良的蒸汽机投入使用</td><td>人类进入"<b>蒸汽时代</b>"</td></tr>
<tr><td>19 世纪初</td><td><b>史蒂芬孙</b>发明蒸汽机车（火车）</td><td>交通运输业革命</td></tr>
<tr><td>1848 年</td><td>马克思、恩格斯发表《<b>共产党宣言</b>》</td><td><b>马克思主义诞生</b></td></tr>
<tr><td>1864 年</td><td><b>第一国际</b>成立</td><td>第一个国际工人组织</td></tr>
<tr><td>1871 年</td><td><b>巴黎公社</b></td><td>无产阶级建立政权的第一次伟大尝试</td></tr></table>
<p><b>工业革命的影响：</b>机器代替手工；建立<b>工厂</b>；形成<b>工业资产阶级和工业无产阶级</b>两大对立阶级；城市化加快；也带来环境污染、童工等问题。</p>
<div class="tip">✍️ 做题：<a data-quiz="hist-10">历史专题：工业革命和马克思主义</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 8 课', time: '约 30 分钟', html: `
<div class="sec" id="py8"><h3><span class="n">01</span>🐍 Python 第 8 课：字典：背包系统（约 30 分钟）</h3>
<p class="lede">学会字典，就能做出游戏里那种「药水 × 3」的背包。这是文字冒险游戏的最后一块拼图。</p>
<a class="go2" href="py.html?l=py8">🐍 打开 Python 第 8 课</a>
<div class="tip">📤 学完这课可以接订单「背包商店」（交完还能开一个金币盲盒 🎁）。</div>
</div>
`},
  ],
  checks: {
 "d22-yd": {
  "title": "课外阅读 5：那盏灯",
  "qs": [
   {"q": "以\"那盏灯\"为标题有什么作用？", "a": "① 交代了文章的主要描写对象；② 是文章的线索，全文围绕那盏灯亮—灭—又亮展开；③ 灯象征老爷爷对孩子们默默的关爱，点明了主题。", "pts": ["交代描写对象", "是文章线索", "象征 / 点明主题（老人的关爱）"]},
   {"q": "第 3 段\"我攥着书包带，听着自己的脚步声，一步也不敢停\"是什么描写？表现了\"我\"怎样的心情？", "a": "动作描写（和细节描写）。写出了灯灭后\"我\"走夜路时的害怕、紧张，从侧面衬托出那盏灯对\"我\"的重要。", "pts": ["动作 / 细节描写", "害怕、紧张", "衬托灯的重要"]},
   {"q": "\"原来那盏灯，从来就不是为他自己亮的。\"这句话怎么理解？", "a": "\"我\"这时才明白，老爷爷每天开灯是为了给巷子里走夜路的孩子照亮，表现了老人默默关心别人、善良无私的品质，也表达了\"我\"的感动。", "pts": ["灯是为走夜路的孩子开的", "老人善良 / 默默关心别人", "我的感动 / 恍然大悟"]},
   {"q": "结尾\"我还是会放慢脚步，在心里轻轻说一声：谢谢\"，有什么作用？", "a": "照应开头和标题，表达了\"我\"对老爷爷的感激和敬意；以\"谢谢\"结尾，含蓄深沉，留有余味。", "pts": ["照应开头 / 标题", "表达感激 / 敬意", "含蓄 / 留有余味"]}
  ]
 }
},
};
