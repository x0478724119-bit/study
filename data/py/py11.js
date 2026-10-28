window.PY = {
  title: 'Python 第 11 课：文字冒险（3）：做成完整的游戏',
  intro: '古堡冒险的最后一课！今天给它加上 <b>标题画面、防止乱输、随机事件、"再玩一次"</b>，把它变成一个能拿给别人玩、能放进作品集的完整游戏。',
  secs: [
{id: 's1', n: '01', title: '一个"只收合法答案"的提问函数', html: `
<demo>def ask(question, options):
    while True:
        c = input(question)
        if c in options:
            return c
        print("只能选：", " / ".join(options))

c = ask("往哪走？", ["左", "右"])
print("你选了", c)</demo>
<p>以前每个房间都要写 else 处理乱输。现在写一个 <code>ask()</code>：<b>不合法就一直问</b>，合法了才 return。所有房间都用它，代码一下子干净了。</p>
<p class="s"><code>" / ".join(列表)</code> 把列表里的字用 " / " 连起来。在「程序的输入」里先写"上"，再写"左"试试。</p>
<div class="tryit">✏️ <b>改一改：</b>选项改成 ["攻击", "逃跑", "喝药"]。</div>`},
{id: 's2', n: '02', title: '随机事件：每次玩都不一样', html: `
<demo>import random

def corridor():
    print("你走进一条黑暗的走廊……")
    if random.randint(1, 3) == 1:
        print("一只蝙蝠扑了过来！")
    else:
        print("什么也没发生。")

corridor()</demo>
<p>三分之一的概率遇到蝙蝠。多点几次 ▶ 看看。游戏有了随机，才有"再玩一次"的理由。</p>
<div class="tryit">✏️ <b>改一改：</b>改成二分之一的概率，并且遇到蝙蝠时打印扣多少血。</div>`},
{id: 's3', n: '03', title: '再玩一次', html: `
<demo>def game():
    print("（这里是一局游戏）")

while True:
    game()
    again = input("再玩一次吗？（是/否）")
    if again != "是":
        print("谢谢游玩！")
        break</demo>
<p>把一整局游戏装进 <code>game()</code> 函数，外面套一个 while：玩完问一下，不是"是"就结束。</p>
<div class="why">🤔 每局开始时，血量和背包要<b>重新设置</b>，不然第二局会带着上一局的东西。所以 player 字典要在 game() 里面重新建（或者在开头重置）。</div>
<div class="tryit">✏️ <b>改一改：</b>加一个变量记录玩了几局，最后打印"你一共玩了 X 局"。</div>`},
{id: 's4', n: '04', title: '标题画面 + 作品说明', html: `
<demo>def title():
    print("╔══════════════════╗")
    print("║   🏰 古堡冒险    ║")
    print("║  作者：你的名字  ║")
    print("╚══════════════════╝")

title()</demo>
<p>作品集里的作品，要让别人一眼知道<b>这是什么、谁做的、怎么玩</b>。在代码最上面写几行注释：</p>
<demo># 古堡冒险 v3
# 作者：____　　完成时间：2026 年 11 月
# 玩法：输入"左/右"等选择前进，找到钥匙逃出古堡。共 3 个结局。
print("注释不会运行，只给人看")</demo>
<div class="tryit">✏️ <b>改一改：</b>把标题画面改成你自己的游戏名字，加一行"按提示输入文字进行选择"。</div>`},
  ],
  ex: [
{id: 'e1', title: '只收合法答案', desc: '写函数 <code>ask(question, options)</code>：一直 input，输入在 options 里就 return 它；不在就打印 <code>请重新选择</code>。然后 <code>c = ask("选：", ["A", "B"])</code>，打印 <code>你选了 X</code>。', stdin: 'C\nB', starter: 'def ask(question, options):\n    # 在这里写\n\nc = ask("选：", ["A", "B"])\nprint("你选了", c)\n', tests: [{in: ['C', 'B'], has: ['请重新选择', '你选了 B']}, {in: ['A'], has: ['你选了 A'], not: ['请重新选择']}, {in: ['x', 'y', 'A'], has: ['你选了 A']}], hint: '<code>while True:</code> 里 <code>c = input(question)</code>，<code>if c in options: return c</code>，否则 print。'},
{id: 'e2', title: '随机陷阱', desc: '<code>player = {"hp": 100}</code>。写函数 <code>trap()</code>：用 <code>random.randint(10, 30)</code> 得到伤害，hp 减掉它，打印 <code>受到 X 点伤害，剩 Y 血</code>。叫一次 trap()。', starter: 'import random\nplayer = {"hp": 100}\n', tests: [{pre: 'import random\nrandom.randint = lambda a, b: 20', eq: '受到 20 点伤害，剩 80 血'}, {pre: 'import random\nrandom.randint = lambda a, b: 10', eq: '受到 10 点伤害，剩 90 血'}], hint: '<code>d = random.randint(10, 30)</code>，<code>player["hp"] -= d</code>，<code>print(f"受到 {d} 点伤害，剩 {player[\'hp\']} 血")</code>。'},
{id: 'e3', title: '再玩一次', desc: '写函数 <code>game()</code>，里面只打印 <code>开始一局</code>。外面用 while 循环：玩一局后 input 问一次，输入 <code>是</code> 就再玩，否则打印 <code>再见</code> 并结束。', stdin: '是\n否', starter: 'def game():\n    print("开始一局")\n\n# while 循环\n', tests: [{in: ['是', '否'], eq: '开始一局\n开始一局\n再见'}, {in: ['不'], eq: '开始一局\n再见'}], hint: '<code>while True:</code> 里 <code>game()</code>，<code>if input() != "是":</code> 打印再见 + <code>break</code>。'},
{id: 'e4', title: '数局数', desc: '接练习 3：最后打印 <code>一共玩了 X 局</code>。', stdin: '是\n是\n否', starter: 'def game():\n    print("开始一局")\n\ncount = 0\n', tests: [{in: ['是', '是', '否'], has: ['一共玩了 3 局']}, {in: ['否'], has: ['一共玩了 1 局']}], hint: '每次 <code>game()</code> 后 <code>count += 1</code>，break 之前 print。'},
{id: 'e5', title: '每局重新开始', desc: '写 <code>game()</code>：开头 <code>player = {"hp": 100}</code>，然后 hp 减 30，打印 <code>剩 X 血</code>。连续叫 2 次 game()，两次都要打印 <code>剩 70 血</code>（说明每局都重置了）。', starter: '\n', tests: [{eq: '剩 70 血\n剩 70 血'}], hint: 'player 写在 game() 函数里面，每次叫 game() 都会重新建一个。'},
{id: 'e6', project: true, title: '古堡冒险 v3 🏆（作品集）', desc: '在 v2 的基础上做出完整版：<ol><li>开头打印标题画面（要包含 <code>古堡冒险</code> 四个字）；</li><li>写 <code>ask(question, options)</code>，所有选择都用它（乱输会重新问）；</li><li>房间：<code>hall</code>（<code>左</code> 去 library，<code>右</code> 去 gate）、<code>library</code>（<code>翻书</code>：hp −30、得到钥匙、打印 <code>你找到了钥匙！</code> 回 hall；<code>离开</code> 回 hall）、<code>gate</code>（有钥匙打印 <code>【结局：逃出古堡】</code>，没有打印 <code>门锁着。</code> 回 hall）；</li><li>每局用 <code>game()</code> 包起来，开头重置 <code>player = {"hp": 100, "bag": []}</code>（可以用 global 或把 player 放在函数外、game() 开头重新赋值）；</li><li>一局结束问 <code>再玩一次吗？</code>，输入 <code>是</code> 再来，否则打印 <code>谢谢游玩！</code>。</li></ol>做完可以加料：随机陷阱房间、更多结局、计分。', stdin: '左\n翻书\n右\n否', starter: '# 古堡冒险 v3\n# 作者：\n# 玩法：\n\nplayer = {"hp": 100, "bag": []}\n\n# 标题画面、ask、hall、library、gate、game、再玩一次\n', tests: [{in: ['左', '翻书', '右', '否'], has: ['古堡冒险', '你找到了钥匙！', '【结局：逃出古堡】', '谢谢游玩！']}, {in: ['上', '右', '左', '翻书', '右', '否'], has: ['门锁着。', '【结局：逃出古堡】']}, {in: ['左', '翻书', '右', '是', '右', '左', '翻书', '右', '否'], has: ['门锁着。', '谢谢游玩！']}], hint: '最后一个检查：第二局一开始就去"右"，应该是"门锁着。"——说明第二局背包清空了。重置写法：<code>def game():</code> 第一行 <code>player["hp"] = 100</code>、<code>player["bag"] = []</code>。'},
  ],
};
