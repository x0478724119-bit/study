window.PY = {
  title: 'Python 第 8 课：字典：背包系统',
  intro: '今天的目标：学 <b>字典（dict）</b>，用"名字 → 数量"的方式存东西，就像游戏背包里的「药水 × 3」。最后的作品是<b>背包系统</b>：能查看、捡东西、用东西。',
  secs: [
{id: 's1', n: '01', title: '字典：名字 → 值', html: `
<demo>bag = {"药水": 3, "金币": 120, "钥匙": 1}
print(bag)
print(bag["金币"])
print(len(bag))</demo>
<p>字典用花括号 <code>{ }</code>，每一项是 <code>键: 值</code>。列表靠编号 [0] 找东西，字典靠<b>名字</b>找：<code>bag["金币"]</code>。</p>
<table class="t"><tr><th></th><th>列表</th><th>字典</th></tr><tr><td>样子</td><td><code>["药水", "钥匙"]</code></td><td><code>{"药水": 3, "钥匙": 1}</code></td></tr><tr><td>怎么找</td><td>编号 <code>bag[0]</code></td><td>名字 <code>bag["药水"]</code></td></tr></table>
<div class="tryit">✏️ <b>改一改：</b>做一个你的角色属性字典：名字、等级、血量，打印血量。</div>`},
{id: 's2', n: '02', title: '加、改、删', html: `
<demo>bag = {"药水": 3}
bag["盾牌"] = 1
bag["药水"] = bag["药水"] - 1
print(bag)
del bag["盾牌"]
print(bag)</demo>
<p><code>bag["新名字"] = 值</code>：没有就加，有就改。<code>del bag["名字"]</code> 删掉。</p>
<div class="why">🤔 找一个不存在的名字会报错（KeyError）。先用 <code>if "火把" in bag:</code> 判断在不在，就安全了。</div>
<div class="tryit">✏️ <b>改一改：</b>再加 5 个金币，打印 bag。</div>`},
{id: 's3', n: '03', title: '用 for 走过字典', html: `
<demo>bag = {"药水": 3, "金币": 120, "钥匙": 1}
for name in bag:
    print(f"{name} × {bag[name]}")</demo>
<p><code>for name in bag:</code> 会一个一个拿出<b>名字</b>，用 <code>bag[name]</code> 拿到数量。</p>
<div class="tryit">✏️ <b>改一改：</b>只打印数量大于 1 的东西。</div>`},
{id: 's4', n: '04', title: '捡东西：有就 +1，没有就新建', html: `
<demo>bag = {"药水": 1}
items = ["药水", "宝石", "药水"]
for it in items:
    if it in bag:
        bag[it] += 1
    else:
        bag[it] = 1
print(bag)</demo>
<p>这是字典最常用的套路：<b>数东西</b>。背包、统计投票、统计每个字出现几次都用它。</p>
<div class="tryit">✏️ <b>改一改：</b>用这个套路数一数 <code>"banana"</code> 里每个字母出现几次。</div>`},
  ],
  ex: [
{id: 'e1', title: '查金币', desc: '<code>bag = {"药水": 2, "金币": 50}</code>，打印 <code>金币 50</code>（数字从字典里取）。', starter: 'bag = {"药水": 2, "金币": 50}\n', tests: [{eq: '金币 50'}], hint: '<code>print("金币", bag["金币"])</code>。'},
{id: 'e2', title: '买东西', desc: '<code>bag = {"金币": 100}</code>。买一把剑花 30 金币：金币减 30，再加一项 <code>"剑": 1</code>，最后 <code>print(bag)</code>。', starter: 'bag = {"金币": 100}\n', tests: [{eq: "{'金币': 70, '剑': 1}"}], hint: '<code>bag["金币"] -= 30</code>，<code>bag["剑"] = 1</code>。'},
{id: 'e3', title: '列出背包', desc: '<code>bag = {"药水": 3, "钥匙": 1, "宝石": 2}</code>，每行打印一项，格式 <code>药水 × 3</code>。', starter: 'bag = {"药水": 3, "钥匙": 1, "宝石": 2}\n', tests: [{eq: '药水 × 3\n钥匙 × 1\n宝石 × 2'}], hint: '<code>for name in bag: print(f"{name} × {bag[name]}")</code>。'},
{id: 'e4', title: '有没有', desc: '<code>bag = {"药水": 3, "钥匙": 1}</code>。输入一个名字：有就打印 <code>有 X 个</code>，没有就打印 <code>没有这个</code>。', stdin: '药水', starter: 'bag = {"药水": 3, "钥匙": 1}\n', tests: [{in: ['药水'], eq: '有 3 个'}, {in: ['火把'], eq: '没有这个'}], hint: '<code>if x in bag: print(f"有 {bag[x]} 个")</code>。'},
{id: 'e5', title: '数投票', desc: '输入 5 行，每行是一个人投的游戏名。用字典数票，最后每行打印 <code>游戏名 X 票</code>（按第一次出现的顺序）。', stdin: '第五人格\n我的世界\n第五人格\n原神\n第五人格', starter: 'votes = {}\n', tests: [{in: ['第五人格', '我的世界', '第五人格', '原神', '第五人格'], eq: '第五人格 3 票\n我的世界 1 票\n原神 1 票'}, {in: ['a', 'a', 'a', 'a', 'b'], eq: 'a 4 票\nb 1 票'}], hint: '第 04 节的套路：<code>if g in votes: votes[g] += 1</code> 否则 <code>votes[g] = 1</code>。最后 for 打印。'},
{id: 'e6', project: true, title: '背包系统 🎒', desc: '背包开始是 <code>bag = {"药水": 2}</code>。一直输入指令，直到输入 <code>退出</code>：<ul><li><code>看</code>：每行打印一项 <code>药水 × 2</code>（背包空了就打印 <code>背包是空的</code>）；</li><li><code>捡</code>：再输入一行东西的名字，有就 +1、没有就新建，打印 <code>捡到了 X</code>；</li><li><code>用</code>：再输入一行名字，有就 −1 并打印 <code>用掉了 X</code>（减到 0 就从背包删掉），没有就打印 <code>背包里没有 X</code>。</li></ul>做完可以加料：「卖」指令，卖掉换金币。', stdin: '捡\n宝石\n看\n退出', starter: 'bag = {"药水": 2}\n# while True：输入指令\n#   退出 → break\n#   看 → 打印背包\n#   捡 → 再输入名字，+1\n#   用 → 再输入名字，-1，到 0 就 del\n\n', tests: [{in: ['捡', '宝石', '看', '退出'], has: ['捡到了 宝石', '药水 × 2', '宝石 × 1']}, {in: ['用', '药水', '用', '药水', '看', '退出'], has: ['用掉了 药水', '背包是空的'], not: ['药水 × 0']}, {in: ['用', '火把', '退出'], has: ['背包里没有 火把']}, {in: ['捡', '药水', '看', '退出'], has: ['药水 × 3']}], hint: '「看」：<code>if len(bag) == 0:</code> 打印空，否则 for 打印。「用」：<code>if x in bag:</code> 里 <code>bag[x] -= 1</code>，<code>if bag[x] == 0: del bag[x]</code>。'},
  ],
};
