// 第 29 天 · 反比例函数总复习（2026-11-18）手册
window.BOOK = {
  intro: '今天：数学第 27 章、物理电磁铁、化学第四单元、历史课 2（希腊和罗马）、Python 字符串。',
  parts: [
{id: 'math', icon: '📐', title: '数学：第 27 章 反比例函数', time: '约 60 分钟', html: `
<div class="sec" id="m1"><h3><span class="n">01</span>知识卡</h3>
<table class="t"><tr><th>考点</th><th>要记住</th></tr>
<tr><td>定义</td><td>y = k/x（k ≠ 0），也可以写成 xy = k。<b>求 k 就是横纵坐标相乘</b></td></tr>
<tr><td>图像位置</td><td>k &gt; 0：一、三象限；k &lt; 0：二、四象限</td></tr>
<tr><td>增减性</td><td>k &gt; 0：每个象限内 y 随 x 增大而减小；k &lt; 0：增大。<b>"每个象限内"</b>不能省</td></tr>
<tr><td>k 和面积</td><td>矩形 |k|，三角形 |k|/2</td></tr>
<tr><td>和直线交点</td><td>联立，去分母变成一元二次方程；比大小看图，x = 0 也是分界</td></tr>
<tr><td>实际应用</td><td>压强 p = F/S、电流 I = U/R、路程一定时速度和时间</td></tr></table>
<div class="warn">⚠️ 比较 y 的大小时，如果两个点在<b>不同象限</b>，增减性用不了！最稳的方法永远是代入算。</div>
</div>
<p>基础：<a data-quiz="math-26">基础练习</a>　挑战：<a data-quiz="math-26b">挑战题</a>　滚动：<a data-quiz="roll-15">综合滚动 15</a></p>
`},
{id: 'en', icon: '🔤', title: '英语：单词 + 应用文阅读', time: '约 50 分钟', html: `
<div class="sec" id="e1"><h3><span class="n">01</span>单词课 24：人工智能（约 12 分钟）+ 造句（约 10 分钟）</h3>
<div class="tip">📝 <a data-quiz="vocab-24">单词课 24</a></div>
<p><b>然后回首页做「用新词写句子」：</b>5 个新词各写一句，一共至少 40 个英文单词。可以试试被动语态：Jobs may be replaced by …</p></div>
<div class="sec" id="e2"><h3><span class="n">02</span>应用文阅读：不用全读（约 12 分钟）</h3>
<p>中考阅读 A 篇常是海报、通知、菜单、时刻表。<b>它不是让你从头读到尾的</b>：</p>
<div class="step"><i>1</i><div>先扫一眼结构：有几个活动 / 几个部分，每部分有哪些项目（时间、年龄、价格）。</div></div>
<div class="step"><i>2</i><div>读题，带着关键词（free、weekend、age）回到表里找对应那一格。</div></div>
<div class="step"><i>3</i><div>注意"陷阱条件"：members only、age 14+、weekends（周五晚上不算周末！）。</div></div>
<div class="tip">📝 <a data-quiz="en-28">阅读：应用文（海报和通知）</a></div></div>

`},
{id: 'phy', icon: '⚡', title: '物理：电磁铁和电磁继电器', time: '约 35 分钟', html: `
<div class="sec" id="p1"><h3><span class="n">01</span>电磁铁：可以"开关"的磁铁</h3>
<p>在通电螺线管里插一根<b>铁芯</b>，铁芯被磁化，磁性一下子强了很多，这就是<b>电磁铁</b>。</p>
<table class="t"><tr><th>想让磁性更强</th><th>办法</th></tr>
<tr><td>电流越大</td><td>磁性越强</td></tr>
<tr><td>线圈匝数越多</td><td>磁性越强</td></tr>
<tr><td>有铁芯</td><td>比没有强得多</td></tr></table>
<p><b>比永磁体好在哪：</b>① 通电有磁、断电没磁（有无可控）；② 改变电流大小能调强弱；③ 改变电流方向能换磁极。电磁起重机断电，铁块就掉下来。</p>
<p><b>实验方法</b>（期末必考）：<b>转换法</b>——看不见磁性，就数它吸了几个大头针；<b>控制变量法</b>——比较匝数时把两个电磁铁<b>串联</b>（保证电流一样）。</p>
</div>
<div class="sec" id="p2"><h3><span class="n">02</span>电磁继电器：用小电流管大电流</h3>
<p>电磁继电器就是一个<b>电磁铁控制的开关</b>。它有两个电路：</p>
<div class="step"><i>1</i><div><b>控制电路</b>：低电压、小电流，里面有电磁铁。</div></div>
<div class="step"><i>2</i><div><b>工作电路</b>：高电压、大电流，接电动机、灯等。</div></div>
<p>控制电路一通电 → 电磁铁吸下衔铁 → 工作电路的触点接通。断电 → 弹簧把衔铁拉回 → 接到另一个触点。</p>
<p class="s">期末常考：水位自动报警器、温度自动报警器——水（导体）或水银温度计把控制电路接通，红灯亮、电铃响。</p>
<div class="tip">📝 基础：<a data-quiz="phy-22">练习：电磁铁</a>　真题风格：<a data-quiz="phy-22b">真题风格</a></div>
</div>
`},
{id: 'app', icon: '🐍', title: 'Python 第 12 课', time: '约 30 分钟', html: `
<div class="sec" id="py12"><h3><span class="n">01</span>🐍 Python 第 12 课：字符串：密码强度检测器</h3>
<p class="lede">切片、大小写、一个字一个字检查——学会"拆开"文字。</p>
<a class="go2" href="py.html?l=py12">🐍 打开 Python 第 12 课</a>
<div class="tip">📤 学完可以接订单「游戏昵称生成器」（交完还能开金币盲盒 🎁）。</div>
</div>
`},
  ],
  checks: {
 "d29-hs": {
  "title": "历史课 2：材料题",
  "qs": [
   {"q": "材料一反映了雅典什么政治制度？它在谁执政时达到顶峰？", "a": "民主政治（奴隶制民主政治）；伯里克利。", "pts": ["民主政治", "伯里克利"]},
   {"q": "雅典的这种制度有什么局限性？", "a": "只有成年男性公民享有权利，妇女、奴隶、外邦人没有政治权利，是少数人的民主。", "pts": ["妇女、奴隶、外邦人没有权利", "少数人的民主"]},
   {"q": "材料二说明罗马的政治制度发生了什么变化？", "a": "罗马从共和国变成了帝国。屋大维名义上保留共和制度的外壳，实际上掌握了全部大权，是独裁统治。", "pts": ["共和国 → 帝国", "名义共和、实际独裁"]}
  ]
 }
},
};
