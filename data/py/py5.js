window.PY = {
  title: 'Python 第 5 课：列表：点歌单',
  intro: '今天的目标：学 <b>列表（list）</b>，一个变量里装很多东西。游戏里的背包、排行榜、聊天记录，背后都是列表。最后的作品是<b>点歌单</b>：一首一首输入歌名，最后打印带编号的歌单。',
  secs: [
{id: 's1', n: '01', title: '列表：一个变量装很多东西', html: `
<demo>songs = ["晴天", "稻香", "七里香"]
print(songs)
print(songs[0])
print(songs[2])
print(len(songs))</demo>
<p>用方括号 <code>[ ]</code> 把东西装起来，中间用逗号隔开。<code>songs[0]</code> 是<b>第 1 个</b>（编号从 0 开始，和 range 一样），<code>len(songs)</code> 是一共几个。</p>
<table class="t"><tr><th>写法</th><th>意思</th></tr><tr><td><code>songs[0]</code></td><td>第 1 个</td></tr><tr><td><code>songs[-1]</code></td><td>最后一个</td></tr><tr><td><code>len(songs)</code></td><td>一共几个</td></tr></table>
<div class="tryit">✏️ <b>改一改：</b>换成你喜欢的 4 首歌，打印最后一首（用 <code>[-1]</code>）。</div>`},
{id: 's2', n: '02', title: '加、删、改', html: `
<demo>bag = ["木剑", "面包"]
bag.append("药水")
print(bag)
bag.remove("面包")
print(bag)
bag[0] = "铁剑"
print(bag)</demo>
<p><code>.append(x)</code> 加到最后面；<code>.remove(x)</code> 删掉 x；<code>bag[0] = …</code> 把第 1 个换掉。</p>
<div class="why">🤔 <code>remove</code> 一个列表里没有的东西会报错。保险的写法：<code>if "面包" in bag: bag.remove("面包")</code>。<code>in</code> 就是"在不在里面"。</div>
<div class="tryit">✏️ <b>改一改：</b>再 append 一个"盾牌"，然后用 <code>if … in …</code> 判断背包里有没有"药水"，有就打印"可以回血"。</div>`},
{id: 's3', n: '03', title: '用 for 走过列表', html: `
<demo>scores = [88, 95, 72, 60]
total = 0
for s in scores:
    total += s
print("总分", total)
print("平均", total / len(scores))
print("最高", max(scores), "最低", min(scores))</demo>
<p><code>for s in scores:</code> 会把列表里的东西<b>一个一个</b>拿出来放进 s。Python 还自带 <code>sum()</code>、<code>max()</code>、<code>min()</code>。</p>
<div class="tryit">✏️ <b>改一改：</b>在循环里加一个 if，只打印 80 分以上的成绩。</div>`},
{id: 's4', n: '04', title: '带编号打印 + 一直输入到"完"', html: `
<demo>names = []
while True:
    x = input("输入名字（输入 完 结束）：")
    if x == "完":
        break
    names.append(x)
for i in range(len(names)):
    print(f"{i + 1}. {names[i]}")</demo>
<p>先准备一个<b>空列表</b> <code>[]</code>，在 while 里不停 append，遇到"完"就 break。打印时用 <code>range(len(names))</code> 拿到编号 i，显示的时候 +1（人从 1 开始数）。</p>
<p class="s">运行前在上面「程序的输入」框里一行写一个名字，最后一行写"完"。</p>
<div class="tryit">✏️ <b>改一改：</b>最后再打印一句 <code>一共 X 个人</code>。</div>`},
  ],
  ex: [
{id: 'e1', title: '第三个', desc: '已经有 <code>foods = ["面条", "饺子", "火锅", "寿司"]</code>，打印<b>第 3 个</b>（应该是 火锅）。', starter: 'foods = ["面条", "饺子", "火锅", "寿司"]\n# 打印第 3 个\n', tests: [{eq: '火锅'}], hint: '第 3 个的编号是 2：<code>print(foods[2])</code>。'},
{id: 'e2', title: '装进背包', desc: '<code>bag = []</code> 是空背包。输入 3 样东西（每样一行），都 append 进背包，最后 <code>print(bag)</code>。', stdin: '木剑\n面包\n药水', starter: 'bag = []\n# 输入 3 次，每次 append\n\n', tests: [{in: ['木剑', '面包', '药水'], eq: "['木剑', '面包', '药水']"}, {in: ['a', 'b', 'c'], eq: "['a', 'b', 'c']"}], hint: '<code>for i in range(3):</code> 里 <code>bag.append(input())</code>。'},
{id: 'e3', title: '平均分', desc: '<code>scores = [78, 92, 85, 64, 91]</code>，打印 <code>平均分 X</code>（X 直接用 <code>sum(scores) / len(scores)</code> 算出来）。', starter: 'scores = [78, 92, 85, 64, 91]\n', tests: [{has: ['平均分 82.0']}], hint: '<code>print("平均分", sum(scores) / len(scores))</code>。'},
{id: 'e4', title: '及格人数', desc: '<code>scores = [55, 78, 60, 43, 99, 61]</code>，用 for + if 数一数有几个 ≥ 60，打印 <code>及格 X 人</code>。', starter: 'scores = [55, 78, 60, 43, 99, 61]\ncount = 0\n', tests: [{has: ['及格 4 人']}], hint: '<code>for s in scores:</code> 里 <code>if s &gt;= 60: count += 1</code>。'},
{id: 'e5', title: '有没有这件装备', desc: '<code>bag = ["木剑", "盾牌", "药水"]</code>。输入一个东西的名字：在背包里就打印 <code>有</code>，不在就打印 <code>没有</code>。', stdin: '药水', starter: 'bag = ["木剑", "盾牌", "药水"]\n', tests: [{in: ['药水'], eq: '有'}, {in: ['火把'], eq: '没有'}], hint: '<code>if x in bag:</code>。'},
{id: 'e6', project: true, title: '点歌单 🎵', desc: '做一个点歌单：<ol><li>准备空列表 <code>songs</code>；</li><li>一直输入歌名，输入 <code>完</code> 就停（"完"不要放进列表）；</li><li>带编号打印每首歌：<code>1. 晴天</code>、<code>2. 稻香</code>……</li><li>最后打印 <code>一共 X 首</code>。</li></ol>做完可以加料：同一首歌已经在歌单里，就打印"这首点过啦"不再加。', stdin: '晴天\n稻香\n完', starter: '# 第 1 步：空列表 songs\n\n# 第 2 步：while True 输入，遇到 完 就 break，否则 append\n\n# 第 3 步：带编号打印 + 一共几首\n\n', tests: [{in: ['晴天', '稻香', '完'], has: ['1. 晴天', '2. 稻香', '一共 2 首'], not: ['3.']}, {in: ['A', 'B', 'C', 'D', '完'], has: ['4. D', '一共 4 首']}, {in: ['完'], has: ['一共 0 首']}], hint: '打印编号：<code>for i in range(len(songs)): print(f"{i + 1}. {songs[i]}")</code>，然后 <code>print(f"一共 {len(songs)} 首")</code>。'},
  ],
};
