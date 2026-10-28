window.PY = {
  title: 'Python 第 13 课：排序：游戏排行榜',
  intro: '今天学让列表<b>排好队</b>：从高到低、从低到高、按分数排人名。最后的作品是<b>游戏排行榜</b>：输入玩家和分数，自动排出名次。',
  secs: [
{id: 's1', n: '01', title: 'sort 和 sorted', html: `
<demo>scores = [72, 95, 60, 88]
scores.sort()
print(scores)
scores.sort(reverse=True)
print(scores)
nums = [3, 1, 2]
print(sorted(nums), nums)</demo>
<p><code>列表.sort()</code> 把列表<b>本身</b>排好（从小到大），加 <code>reverse=True</code> 就从大到小。<code>sorted(列表)</code> 返回一个排好的<b>新列表</b>，原来的不变。</p>
<div class="tryit">✏️ <b>改一改：</b>把 ["香蕉", "苹果", "橙子"] 排序，看看中文是按什么排的。</div>`},
{id: 's2', n: '02', title: '前三名和去掉最高最低', html: `
<demo>scores = [8, 9, 7, 10, 6]
s = sorted(scores)
print("前三名：", sorted(scores, reverse=True)[:3])
middle = s[1:-1]
print("去掉最高最低：", middle)
print("平均：", sum(middle) / len(middle))</demo>
<p>比赛评委打分常常"去掉一个最高分、去掉一个最低分"：排好序后用切片 <code>[1:-1]</code> 就去掉了两头。</p>
<div class="tryit">✏️ <b>改一改：</b>换 7 个评委分数，算一算最后得分。</div>`},
{id: 's3', n: '03', title: '一个人 = 一个小列表', html: `
<demo>players = [["小熊", 120], ["阿猫", 300], ["大狗", 210]]
for p in players:
    print(p[0], "得了", p[1], "分")
best = players[0]
for p in players:
    if p[1] > best[1]:
        best = p
print("第一名：", best[0])</demo>
<p>列表里还可以放列表：<code>["小熊", 120]</code> 是一个玩家，<code>p[0]</code> 是名字、<code>p[1]</code> 是分数。</p>
<div class="tryit">✏️ <b>改一改：</b>再加一个玩家，并且找出<b>最后一名</b>。</div>`},
{id: 's4', n: '04', title: '按分数排人：key=', html: `
<demo>players = [["小熊", 120], ["阿猫", 300], ["大狗", 210]]
players.sort(key=lambda p: p[1], reverse=True)
for i in range(len(players)):
    print(f"第 {i + 1} 名：{players[i][0]}　{players[i][1]} 分")</demo>
<p><code>key=lambda p: p[1]</code> 的意思是"<b>按每个小列表的第 2 项（分数）来排</b>"。<code>lambda</code> 是一个一行的小函数，先照着用就行。</p>
<div class="tryit">✏️ <b>改一改：</b>改成按名字排（<code>p[0]</code>）。</div>`},
  ],
  ex: [
{id: 'e1', title: '从高到低', desc: '<code>scores = [55, 90, 72, 100, 68]</code>，从大到小排好后 <code>print(scores)</code>。', starter: 'scores = [55, 90, 72, 100, 68]\n', tests: [{eq: '[100, 90, 72, 68, 55]'}], hint: '<code>scores.sort(reverse=True)</code>。'},
{id: 'e2', title: '前三名', desc: '输入 5 个分数（每行一个），打印最高的 3 个，格式像 <code>[98, 90, 85]</code>。', stdin: '85\n60\n98\n90\n70', starter: 'scores = []\n', tests: [{in: ['85', '60', '98', '90', '70'], eq: '[98, 90, 85]'}, {in: ['1', '2', '3', '4', '5'], eq: '[5, 4, 3]'}], hint: '输入时 <code>int(input())</code> 再 append；最后 <code>sorted(scores, reverse=True)[:3]</code>。'},
{id: 'e3', title: '评委打分', desc: '<code>scores = [8, 9, 7, 10, 6, 9]</code>，去掉一个最高分和一个最低分，打印剩下的平均分 <code>最后得分 X</code>（X 直接算出来）。', starter: 'scores = [8, 9, 7, 10, 6, 9]\n', tests: [{has: ['最后得分 8.25']}], hint: '<code>s = sorted(scores)[1:-1]</code>，<code>sum(s) / len(s)</code>。'},
{id: 'e4', title: '找第一名', desc: '<code>players = [["小熊", 120], ["阿猫", 300], ["大狗", 210]]</code>，用 for 找出分数最高的人，打印 <code>第一名是 X</code>。', starter: 'players = [["小熊", 120], ["阿猫", 300], ["大狗", 210]]\n', tests: [{eq: '第一名是 阿猫'}], hint: '<code>best = players[0]</code>，for 里比 <code>p[1] &gt; best[1]</code>。'},
{id: 'e5', title: '按分数排名', desc: '<code>players = [["A", 50], ["B", 80], ["C", 65]]</code>，按分数从高到低排，每行打印 <code>名字 分数</code>。', starter: 'players = [["A", 50], ["B", 80], ["C", 65]]\n', tests: [{eq: 'B 80\nC 65\nA 50'}], hint: '<code>players.sort(key=lambda p: p[1], reverse=True)</code>，然后 for 打印 <code>p[0], p[1]</code>。'},
{id: 'e6', project: true, title: '游戏排行榜 🏆', desc: '一直输入，每行是 <code>名字 分数</code>（中间一个空格），输入 <code>完</code> 结束。然后按分数从高到低打印：<code>第 1 名：阿猫 300</code>、<code>第 2 名：……</code>。<br>提示：<code>name, score = line.split(" ")</code> 可以把一行拆成两部分，分数要 <code>int()</code>。<br>做完可以加料：同分的人名次一样；打印平均分。', stdin: '小熊 120\n阿猫 300\n大狗 210\n完', starter: 'players = []\n# 第 1 步：while 输入，遇到 完 就 break，否则 split 成名字和分数，append [名字, 分数]\n\n# 第 2 步：按分数从高到低排序\n\n# 第 3 步：带名次打印\n', tests: [{in: ['小熊 120', '阿猫 300', '大狗 210', '完'], eq: '第 1 名：阿猫 300\n第 2 名：大狗 210\n第 3 名：小熊 120'}, {in: ['A 5', 'B 9', '完'], eq: '第 1 名：B 9\n第 2 名：A 5'}], hint: '<code>name, score = line.split(" ")</code>，<code>players.append([name, int(score)])</code>；排好后 <code>print(f"第 {i + 1} 名：{players[i][0]} {players[i][1]}")</code>。'},
  ],
};
