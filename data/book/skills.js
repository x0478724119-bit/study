// 技能课：跟订单挂钩的课，不算每日任务。订单上写 pre: ['d6-plan'] 就要先交这一课的小测才能接单。
window.BOOK = {
  intro: '接某些订单之前要先学的技能。学完、交了小测，对应的订单才能接。',
  parts: [
{id: 'plan', icon: '🏠', title: '室内：平面图', time: '约 20 分钟', html: `
<div class="sec lesson" id="d6-plan"><h3><span class="n">01</span>平面图：从上往下看房间（约 20 分钟）</h3>
<p class="lede"><b>「奶茶店改造」的前置课</b>：学完、交了小测才能接这一单。</p>
<p><b>平面图</b>就是把房间的屋顶拿掉，从正上方往下看。设计师先画平面图定布局，再出效果图。客户、施工队都靠它看懂"东西放在哪、有多大"。</p>
<svg class="fig" viewBox="0 0 320 220" font-size="11" font-family="sans-serif">
 <rect x="30" y="30" width="240" height="170" fill="#fff" stroke="#2b2622" stroke-width="5"/>
 <line x1="30" y1="140" x2="30" y2="185" stroke="#fff" stroke-width="7"/><path d="M30 140 A45 45 0 0 1 75 185" fill="none" stroke="#8a7f74" stroke-dasharray="3 2"/><line x1="30" y1="140" x2="75" y2="140" stroke="#8a7f74"/>
 <line x1="120" y1="30" x2="200" y2="30" stroke="#4a7fc1" stroke-width="5"/><line x1="120" y1="27" x2="200" y2="27" stroke="#fff" stroke-width="1.5"/>
 <rect x="180" y="90" width="85" height="105" fill="#fbe6df" stroke="#2b2622"/><text x="208" y="146">床</text>
 <rect x="35" y="35" width="60" height="30" fill="#e1ebf7" stroke="#2b2622"/><text x="52" y="54">衣柜</text>
 <rect x="120" y="35" width="55" height="28" fill="#ece5f7" stroke="#2b2622"/><text x="134" y="53">书桌</text>
 <path d="M60 170 C 110 160 120 110 160 95" fill="none" stroke="#e07a5f" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ar)"/>
 <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#e07a5f"/></marker></defs>
 <text x="85" y="175" fill="#e07a5f">动线</text>
 <line x1="30" y1="15" x2="270" y2="15" stroke="#5b524a"/><text x="135" y="12">4000</text>
 <line x1="285" y1="30" x2="285" y2="200" stroke="#5b524a"/><text x="288" y="118">3500</text>
 <text x="135" y="24" fill="#4a7fc1">窗</text><text x="36" y="132">门</text>
</svg>
<p><b>一张合格的平面图要有：</b></p>
<table class="t"><tr><th>要素</th><th>怎么画</th></tr>
<tr><td>墙</td><td>粗黑线（外墙比家具线粗很多）</td></tr>
<tr><td>门</td><td>墙上断开一段 + 一条线和一段弧线，表示门往哪边开</td></tr>
<tr><td>窗</td><td>墙上画两三条细线</td></tr>
<tr><td>尺寸</td><td>单位一般是<b>毫米</b>：4000 = 4 米。至少标出房间的长和宽</td></tr>
<tr><td>家具</td><td>按真实大小画方块，写上名字</td></tr>
<tr><td>动线</td><td>用虚线箭头画出人怎么走（从门口到各个区域）</td></tr></table>
<p><b>在酷家乐里：</b>画好户型、摆好家具后，切到 <b>2D / 平面</b> 视图，就是平面图。找"导出"或者直接截图都行。手机屏幕小的话，开一台设备看这页教程，另一台操作。</p>
<p><b>手机上操作太小？</b>也可以用学习站的 <a href="planner.html">📐 户型练习台</a>：按真实尺寸摆家具，会自动检查通道够不够 0.6 米。</p>
<div data-ck="d6-plan"></div></div>
`},
{id: 'three', icon: '🪑', title: '画画：三视图', time: '约 25 分钟', html: `
<div class="sec lesson" id="sk-3v"><h3><span class="n">01</span>三视图：一个东西画三面（约 25 分钟）</h3>
<p class="lede"><b>「椅子三视图」的前置课。</b>设计师、工程师给工厂看的图，都是三视图：不画透视，只画"正对着看"的样子，尺寸一看就清楚。</p>
<svg class="fig" viewBox="0 0 330 250" font-size="12" font-family="sans-serif">
 <g fill="none" stroke="#2b2622" stroke-width="2">
  <rect x="40" y="30" width="80" height="60"/><line x1="40" y1="90" x2="40" y2="150"/><line x1="120" y1="90" x2="120" y2="150"/><rect x="36" y="86" width="88" height="10" fill="#fbe6df"/>
  <rect x="190" y="86" width="70" height="10" fill="#fbe6df"/><line x1="190" y1="30" x2="190" y2="150"/><line x1="196" y1="30" x2="196" y2="86"/><line x1="255" y1="96" x2="255" y2="150"/>
  <rect x="36" y="175" width="88" height="70" fill="#fbe6df"/><rect x="36" y="175" width="88" height="8" fill="#e1ebf7"/>
 </g>
 <g stroke="#4a7fc1" stroke-dasharray="4 3"><line x1="130" y1="30" x2="185" y2="30"/><line x1="130" y1="91" x2="185" y2="91"/><line x1="130" y1="150" x2="185" y2="150"/><line x1="36" y1="155" x2="36" y2="172"/><line x1="124" y1="155" x2="124" y2="172"/></g>
 <text x="45" y="20">① 正视图（从前面看）</text><text x="190" y="20">② 侧视图（从左边看）</text><text x="135" y="215">③ 俯视图（从上往下看）</text>
</svg>
<p><b>三条规矩</b>（口诀"长对正、高平齐、宽相等"）：</p>
<ol><li><b>高平齐：</b>正视图和侧视图并排放，<b>一样高</b>（椅背顶、座面、脚的高度对得上，可以拉横线检查）。</li>
<li><b>长对正：</b>俯视图放在正视图正下方，<b>一样宽</b>（左右对齐，可以拉竖线检查）。</li>
<li><b>宽相等：</b>侧视图的宽 = 俯视图的上下深度（椅子从前到后有多深）。</li></ol>
<div class="tip">💡 三视图<b>不画透视、不画阴影</b>，线条全是横平竖直的（椅子本身是斜的除外）。看不见的边可以用虚线画。</div>
<p><b>在 Procreate 里画：</b></p>
<div class="step"><i>1</i><div>新建画布，打开 <b>操作（扳手）→ 画布 → 绘图指引 → 编辑绘图指引 → 2D 网格</b>，线条就能对齐格子。</div></div>
<div class="step"><i>2</i><div>画直线：画一笔后<b>笔尖按住不放</b>，线会自动变直（"快速形状"）。</div></div>
<div class="step"><i>3</i><div>先画正视图，再拉横线画侧视图（保证一样高），再拉竖线画俯视图（保证一样宽）。</div></div>
<div class="step"><i>4</i><div>标几个关键尺寸（单位厘米）：座高约 45、总高约 80、座面宽约 45。</div></div>
<div data-ck="sk-3v"></div></div>
`},
{id: 'canva', icon: '🎨', title: '设计：可画入门', time: '约 25 分钟', html: `
<div class="sec lesson" id="sk-canva"><h3><span class="n">01</span>可画（Canva）入门（约 25 分钟）</h3>
<p class="lede"><b>「钢琴工作室 Logo」的前置课。</b>Procreate 适合手绘；可画适合<b>排版</b>：字体多、对齐方便、改颜色快，做 logo、海报、名片都用它。</p>
<div class="step"><i>1</i><div><b>新建设计：</b>首页点「+」/「创建设计」，搜「Logo」，选 500 × 500 像素的空白画布（logo 都是正方形）。</div></div>
<div class="step"><i>2</i><div><b>加图形：</b>左边「元素」里搜「钢琴」「音符」，挑一个<b>简单的线条图形</b>（不要选复杂的插画，缩小后看不清）。</div></div>
<div class="step"><i>3</i><div><b>加文字：</b>「文字」→ 加一个标题，打上工作室名字。试 3 种字体：圆润的、细长的、手写的，看哪个最像"钢琴工作室"。</div></div>
<div class="step"><i>4</i><div><b>改颜色：</b>点图形，上面会出现颜色块，最多用 2–3 种颜色。黑白 + 一个点缀色最稳。</div></div>
<div class="step"><i>5</i><div><b>对齐：</b>拖动时会出现粉色的辅助线，图形和文字要居中对齐；选中多个元素可以用「位置 → 对齐」。</div></div>
<div class="step"><i>6</i><div><b>导出：</b>右上角「分享 → 下载 → PNG」，勾选「透明背景」（如果有）。</div></div>
<div class="tip">💡 用模板可以，但一定要<b>改到看不出原模板</b>：换图形、换字体、换颜色。订单要的是你的设计。</div>
<div data-ck="sk-canva"></div></div>
`}
  ],
  checks: {
    'sk-3v': {title: '技能课：三视图', qs: [
      {q: '三视图是哪三个图？分别从哪个方向看？', a: '正视图（从前面看）、侧视图（从左边看）、俯视图（从上往下看）。', pts: ['正视图 / 前面', '侧视图 / 侧面', '俯视图 / 上面']},
      {q: '"长对正、高平齐、宽相等"是什么意思？', a: '正视图和俯视图一样宽（上下对正）；正视图和侧视图一样高（左右平齐）；侧视图的宽等于俯视图的深度。', pts: ['长对正：正视图和俯视图对齐', '高平齐：正视图和侧视图一样高', '宽相等：侧视图和俯视图的深度一样']},
      {q: '三视图和透视图（比如一点透视）最大的区别是什么？', a: '三视图没有透视，不会近大远小，线条横平竖直，可以直接量尺寸；透视图是眼睛看到的样子，有近大远小。', pts: ['三视图没有近大远小', '三视图可以量尺寸 / 给工厂看']},
    ]},
    'sk-canva': {title: '技能课：可画入门', qs: [
      {q: 'Logo 画布为什么一般用正方形？', a: '因为 logo 经常放在头像、App 图标、印章这些正方形或圆形的地方，正方形最容易适配。', pts: ['提到头像 / 图标 / 方形的地方']},
      {q: '可画里怎么把文字和图形对齐？', a: '拖动时看粉色辅助线；或者同时选中，用「位置 → 对齐」。', pts: ['辅助线', '或者「位置 / 对齐」功能']},
      {q: '用模板做 logo 要注意什么？', a: '要改到看不出原来的模板：换图形、换字体、换颜色，订单要的是自己的设计。', pts: ['不能直接用模板', '要改图形 / 字体 / 颜色']},
    ]},
    'd6-plan': {title: '选学：平面图', qs: [
      {q: '平面图是从哪个方向看房间？它和效果图有什么不同？', a: '从正上方往下看（把屋顶拿掉）。平面图看布局、位置和尺寸；效果图看真实的样子、颜色和氛围。', pts: ['从正上方往下看', '平面图看布局 / 尺寸', '效果图看真实样子 / 颜色']},
      {q: '平面图上写着 3600，房间实际多长？', a: '平面图的单位一般是毫米，3600 毫米 = 3.6 米。', pts: ['知道单位是毫米', '算出 3.6 米']},
      {q: '一张合格的平面图至少要有哪些东西？说出 4 个。', a: '墙、门（开门方向）、窗、尺寸、家具、动线。', pts: ['说出了墙 / 门 / 窗里的至少两个', '说出了尺寸', '说出了家具或动线']},
    ]},
  },
};
