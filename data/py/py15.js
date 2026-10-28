window.PY = {
  title: 'Python 第 15 课：井字棋：两个人对战',
  intro: '把上节课的棋盘、落子、胜负判断组装起来，做成一个<b>两个人轮流下的井字棋</b>。这是你第二个完整的游戏作品！',
  secs: [
{id: 's1', n: '01', title: '轮流：换人', html: `
<demo>player = "X"
for turn in range(4):
    print("轮到", player)
    if player == "X":
        player = "O"
    else:
        player = "X"</demo>
<p>用一个变量记住"现在轮到谁"，每下完一步就换。</p>
<div class="tryit">✏️ <b>改一改：</b>用一行写法换人：<code>player = "O" if player == "X" else "X"</code>。</div>`},
{id: 's2', n: '02', title: '游戏主循环', html: `
<demo>board = [["."] * 3 for i in range(3)]
player = "X"
moves = 0
while moves &lt; 9:
    r = int(input(player + " 下在第几行："))
    c = int(input(player + " 下在第几列："))
    board[r - 1][c - 1] = player
    moves += 1
    for row in board:
        print(" ".join(row))
    player = "O" if player == "X" else "X"
print("下满了")</demo>
<p>最多下 9 步（棋盘满了）。每一步：输入 → 落子 → 打印 → 换人。（这个版本还没判断输赢，也没检查格子有没有人。）</p>`},
{id: 's3', n: '03', title: '赢了就停，下满算平局', html: `
<demo>moves = 0
winner = ""
# ……落子以后：
# if win(board, player):
#     winner = player
#     break
if winner:
    print(winner, "赢了！")
else:
    print("平局！")</demo>
<p>每次落子后<b>先判断这个人赢没赢</b>，赢了就 break；循环正常结束（9 步下满）还没人赢，就是平局。</p>
<div class="why">🤔 判断要在"换人"<b>之前</b>，不然判断的就是下一个人了。</div>`},
{id: 's4', n: '04', title: '下错了怎么办', html: `
<demo>board = [["."] * 3 for i in range(3)]
board[0][0] = "O"
r, c = 1, 1
if r &lt; 1 or r &gt; 3 or c &lt; 1 or c &gt; 3:
    print("没有这一格")
elif board[r - 1][c - 1] != ".":
    print("这里已经有棋子了，重新下")
else:
    board[r - 1][c - 1] = "X"</demo>
<p>两种错：超出棋盘、格子有人。下错了<b>不换人、不算步数</b>，用 <code>continue</code> 回到循环开头重新输入。</p>`},
  ],
  ex: [
{id: 'e1', title: '换人', desc: '从 <code>X</code> 开始，打印 5 次 <code>轮到 X</code> / <code>轮到 O</code>，交替。', starter: 'player = "X"\n', tests: [{eq: '轮到 X\n轮到 O\n轮到 X\n轮到 O\n轮到 X'}], hint: 'for 5 次，print 后换人。'},
{id: 'e2', title: '数空格', desc: '写函数 <code>empty(b)</code>，return 棋盘上还有几个 <code>.</code>。', starter: 'def empty(b):\n    # 在这里写\n\n', tests: [{py: 'assert empty([["."]*3 for i in range(3)]) == 9\nassert empty([["X","O","."],[".",".","."],["X","X","O"]]) == 4'}], hint: '两层 for：<code>for row in b: for x in row: if x == ".": n += 1</code>（第二个 for 要换行缩进）。'},
{id: 'e3', title: '合法吗', desc: '写函数 <code>ok(b, r, c)</code>（r、c 是 1–3 的数）：超出 1–3 return False；那一格不是 <code>.</code> return False；否则 True。', starter: 'def ok(b, r, c):\n    # 在这里写\n\n', tests: [{py: 'B = [["X",".","."],[".",".","."],[".",".","."]]\nassert ok(B, 1, 1) == False\nassert ok(B, 1, 2) == True\nassert ok(B, 0, 2) == False\nassert ok(B, 3, 4) == False\nassert ok(B, 3, 3) == True'}], hint: '<code>if r &lt; 1 or r &gt; 3 or c &lt; 1 or c &gt; 3: return False</code>；<code>return b[r - 1][c - 1] == "."</code>。'},
{id: 'e4', title: '下三步', desc: '空棋盘，X 先下，轮流输入 3 步（每步两行：行、列），然后打印棋盘。不用判断输赢。', stdin: '1\n1\n2\n2\n3\n3', starter: 'board = [["."] * 3 for i in range(3)]\nplayer = "X"\n', tests: [{in: ['1', '1', '2', '2', '3', '3'], eq: 'X . .\n. O .\n. . X'}], hint: 'for 3 次：输入 r、c，落子，换人。最后打印。'},
{id: 'e5', title: '把棋盘画漂亮', desc: '写函数 <code>show(b)</code>，打印成这样（格子之间用 <code> | </code>，行之间用 <code>---------</code>）：<pre style="margin:4px 0">X | . | O\n---------\n. | X | .\n---------\nO | . | X</pre>', starter: 'def show(b):\n    # 在这里写\n\nshow([["X", ".", "O"], [".", "X", "."], ["O", ".", "X"]])\n', tests: [{eq: 'X | . | O\n---------\n. | X | .\n---------\nO | . | X'}], hint: '<code>for i in range(3):</code> 里 <code>print(" | ".join(b[i]))</code>，<code>if i &lt; 2: print("---------")</code>。'},
{id: 'e6', project: true, title: '井字棋 ⭕❌（作品）', desc: '两人对战的完整井字棋：<ol><li>空棋盘，<code>X</code> 先下；</li><li>每步输入行、列（两行）；超出棋盘或有子就打印 <code>不能下这里</code>，同一个人重新下；</li><li>落子后打印棋盘（每行用空格连起来，像 <code>X . O</code>）；</li><li>有人连成一线就打印 <code>X 赢了！</code>（或 <code>O 赢了！</code>）并结束；</li><li>9 格下满没人赢，打印 <code>平局！</code>。</li></ol>用上节课的 <code>win()</code>。做完可以加料：用练习 5 的漂亮棋盘、加"再来一局"。', stdin: '1\n1\n2\n1\n1\n2\n2\n2\n1\n3', starter: 'def win(b, p):\n    # 把上节课写的贴过来\n    return False\n\nboard = [["."] * 3 for i in range(3)]\nplayer = "X"\nmoves = 0\n# while 循环\n', tests: [{in: ['1', '1', '2', '1', '1', '2', '2', '2', '1', '3'], has: ['X 赢了！'], not: ['平局']}, {in: ['1', '1', '1', '1', '2', '2', '1', '2', '3', '3', '1', '3'], has: ['不能下这里', 'X 赢了！']}, {in: ['2', '2', '1', '1', '1', '2', '3', '2', '2', '1', '2', '3', '1', '3', '3', '1', '3', '3'], has: ['平局！'], not: ['赢了']}, {in: ['1', '1', '2', '1', '1', '2', '2', '2', '3', '3', '2', '3'], has: ['O 赢了！']}], hint: '<code>while moves &lt; 9:</code> 输入 r、c；不合法 print + <code>continue</code>；落子、打印、<code>moves += 1</code>；<code>if win(board, player): print(player, "赢了！"); break</code>（分两行）；换人。循环后：如果没人赢就打印平局（可以用一个 winner 变量）。'},
  ],
};
