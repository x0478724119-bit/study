window.PY = {
  title: 'Python 第 6 课：random + 石头剪刀布',
  intro: '今天的目标：用 <b>random</b> 让电脑"随机出招"，再把第 2 课的 if、第 5 课的列表组合起来。最后的作品是<b>石头剪刀布</b>：你出一招，电脑随机出一招，程序判断谁赢。',
  secs: [
{id: 's1', n: '01', title: 'random 的三个常用工具', html: `
<demo>import random
print(random.randint(1, 6))
print(random.choice(["石头", "剪刀", "布"]))
cards = ["A", "K", "Q", "J"]
random.shuffle(cards)
print(cards)</demo>
<table class="t"><tr><th>写法</th><th>意思</th></tr><tr><td><code>random.randint(1, 6)</code></td><td>1 到 6 之间随机一个整数（包括 1 和 6）</td></tr><tr><td><code>random.choice(列表)</code></td><td>从列表里随机挑一个</td></tr><tr><td><code>random.shuffle(列表)</code></td><td>把列表打乱（洗牌）</td></tr></table>
<p class="s">多点几次 ▶，每次结果都不一样。</p>
<div class="tryit">✏️ <b>改一改：</b>做一个"今天吃什么"：把 5 种食物放进列表，随机挑一个打印。</div>`},
{id: 's2', n: '02', title: '列表的编号 ↔ 招式', html: `
<demo>moves = ["石头", "剪刀", "布"]
n = int(input("输入 1 石头 / 2 剪刀 / 3 布："))
print("你出了", moves[n - 1])</demo>
<p>玩家输入 1、2、3，而列表编号是 0、1、2，所以要 <code>n - 1</code>。这个"差 1"的坑以后会经常遇到。</p>
<div class="tryit">✏️ <b>改一改：</b>在「程序的输入」里写 3 运行，再写 1 运行。</div>`},
{id: 's3', n: '03', title: '判断胜负：先平局，再列出"赢"的情况', html: `
<demo>me = "布"
pc = "石头"
if me == pc:
    print("平局")
elif (me == "石头" and pc == "剪刀") or (me == "剪刀" and pc == "布") or (me == "布" and pc == "石头"):
    print("你赢了")
else:
    print("你输了")</demo>
<p>9 种组合不用写 9 个 if：<b>先判平局</b>，再把<b>你赢的 3 种</b>用 <code>or</code> 连起来，剩下的全是输。</p>
<div class="why">🤔 <code>and</code> = 两个都要成立；<code>or</code> = 有一个成立就行。括号让它们不会搞混。</div>
<div class="tryit">✏️ <b>改一改：</b>把 me 和 pc 改成别的组合，看看判断对不对。</div>`},
{id: 's4', n: '04', title: '玩好几局：计分', html: `
<demo>import random
moves = ["石头", "剪刀", "布"]
win = 0
for i in range(3):
    pc = random.choice(moves)
    print(f"第 {i + 1} 局，电脑出了 {pc}")
    if pc == "剪刀":
        win += 1
print("电脑出剪刀的次数：", win)</demo>
<p>用 for 玩固定几局，用一个变量（比如 <code>win</code>）记分。作品做完可以照这个思路改成"三局两胜"。</p>
<div class="tryit">✏️ <b>改一改：</b>改成 10 局，看看电脑出剪刀大概几次。</div>`},
  ],
  ex: [
{id: 'e1', title: '数字变招式', desc: '<code>moves = ["石头", "剪刀", "布"]</code>。输入 1、2 或 3，打印对应的招式。', stdin: '2', starter: 'moves = ["石头", "剪刀", "布"]\n', tests: [{in: ['2'], eq: '剪刀'}, {in: ['3'], eq: '布'}, {in: ['1'], eq: '石头'}], hint: '<code>n = int(input())</code>，<code>print(moves[n - 1])</code>。'},
{id: 'e2', title: '平局吗', desc: '输入两行：你的招式、电脑的招式。一样就打印 <code>平局</code>，不一样就打印 <code>不是平局</code>。', stdin: '布\n布', starter: '\n', tests: [{in: ['布', '布'], eq: '平局'}, {in: ['布', '石头'], eq: '不是平局'}], hint: '<code>if me == pc:</code>。'},
{id: 'e3', title: '判断胜负', desc: '输入两行：你的招式、电脑的招式（都是 石头 / 剪刀 / 布）。打印 <code>平局</code>、<code>你赢了</code> 或 <code>你输了</code>。', stdin: '布\n石头', starter: 'me = input()\npc = input()\n', tests: [{in: ['布', '石头'], eq: '你赢了'}, {in: ['石头', '布'], eq: '你输了'}, {in: ['剪刀', '剪刀'], eq: '平局'}, {in: ['剪刀', '布'], eq: '你赢了'}, {in: ['剪刀', '石头'], eq: '你输了'}], hint: '照着第 03 节写：先 if 平局，elif 三种赢用 or 连起来，else 输。'},
{id: 'e4', title: '掷骰子', desc: '用 <code>random.randint(1, 6)</code> 掷 5 次骰子，每次打印 <code>第 N 次：X</code>，最后打印 <code>总点数 Y</code>。', starter: 'import random\n', tests: [{pre: 'import random\nrandom.randint = lambda a, b: 4', has: ['第 1 次：4', '第 5 次：4', '总点数 20'], not: ['第 6 次']}], hint: '<code>total = 0</code>；<code>for i in range(5):</code> 里 <code>d = random.randint(1, 6)</code>、打印、<code>total += d</code>。'},
{id: 'e5', title: '抽卡', desc: '<code>cards = ["普通", "普通", "普通", "稀有", "传说"]</code>。用 <code>random.choice</code> 抽一张：抽到 <code>传说</code> 打印 <code>出金了！</code>，否则打印 <code>抽到了 X</code>。', starter: 'import random\ncards = ["普通", "普通", "普通", "稀有", "传说"]\n', tests: [{pre: 'import random\nrandom.choice = lambda x: x[-1]', eq: '出金了！'}, {pre: 'import random\nrandom.choice = lambda x: x[0]', eq: '抽到了 普通'}], hint: '<code>c = random.choice(cards)</code>，然后 if / else。'},
{id: 'e6', project: true, title: '石头剪刀布 ✊✌️🖐', desc: '做一个完整的石头剪刀布：<ol><li><code>moves = ["石头", "剪刀", "布"]</code>；</li><li>玩家输入招式（直接输入文字"石头 / 剪刀 / 布"），存在 <code>me</code>；</li><li>电脑用 <code>random.choice(moves)</code> 出招（只调用一次），存在 <code>pc</code>，打印 <code>电脑出了 X</code>；</li><li>打印 <code>平局</code>、<code>你赢了</code> 或 <code>你输了</code>。</li></ol>做完可以加料：用 for 玩 3 局并计分，最后宣布"三局两胜"谁赢。', stdin: '布', starter: '# 第 1 步：import random，准备 moves\n\n# 第 2 步：玩家输入 me，电脑随机出 pc，打印电脑出了什么\n\n# 第 3 步：判断胜负\n\n', tests: [{pre: 'import random\nrandom.choice = lambda x: x[0]', in: ['布'], has: ['电脑出了 石头', '你赢了']}, {pre: 'import random\nrandom.choice = lambda x: x[0]', in: ['剪刀'], has: ['你输了']}, {pre: 'import random\nrandom.choice = lambda x: x[0]', in: ['石头'], has: ['平局']}, {pre: 'import random\nrandom.choice = lambda x: x[2]', in: ['剪刀'], has: ['电脑出了 布', '你赢了']}], hint: '<code>pc = random.choice(moves)</code>，<code>print("电脑出了", pc)</code>，然后用练习 3 的判断。'},
  ],
};
