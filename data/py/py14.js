window.PY = {
  title: 'Python 第 14 课：二维列表：画出井字棋棋盘',
  intro: '游戏地图、棋盘、表格，都是"行 + 列"的样子。今天学<b>二维列表</b>（列表里装列表），做出井字棋的棋盘：能显示、能落子、能判断某一行有没有连成一条线。下节课就做成完整的井字棋游戏。',
  secs: [
{id: 's1', n: '01', title: '一个 3 × 3 的棋盘', html: `
<demo>board = [[".", ".", "."],
         [".", ".", "."],
         [".", ".", "."]]
board[0][2] = "X"
board[1][1] = "O"
for row in board:
    print(" ".join(row))</demo>
<p><code>board[行][列]</code>：<code>board[0][2]</code> 是第 1 行第 3 列（编号都从 0 开始）。打印时每一行用 <code>" ".join(row)</code> 拼成一串。</p>
<div class="tryit">✏️ <b>改一改：</b>在左下角（第 3 行第 1 列）放一个 X。</div>`},
{id: 's2', n: '02', title: '用 for 造棋盘', html: `
<demo>board = []
for r in range(3):
    board.append(["."] * 3)
board[2][0] = "X"
for row in board:
    print(" ".join(row))</demo>
<div class="why">🤔 为什么不写 <code>[["."] * 3] * 3</code>？那样三行其实是<b>同一个</b>列表，改一格三行都会变！用 for 一行一行 append 才是三个独立的行。</div>
<div class="tryit">✏️ <b>改一改：</b>做一个 5 × 5 的棋盘。</div>`},
{id: 's3', n: '03', title: '玩家输入行和列', html: `
<demo>board = [["."] * 3 for i in range(3)]
r = int(input("行（1-3）："))
c = int(input("列（1-3）："))
if board[r - 1][c - 1] == ".":
    board[r - 1][c - 1] = "X"
else:
    print("这里已经有棋子了")
for row in board:
    print(" ".join(row))</demo>
<p>玩家习惯从 1 数，列表从 0 数，又是那个"差 1"。落子前先检查这一格是不是空的。</p>
<p class="s"><code>[["."] * 3 for i in range(3)]</code> 是第 02 节 for 的一行写法，效果一样。</p>
<div class="tryit">✏️ <b>改一改：</b>输入 2、2，再输入 1、3 试试。</div>`},
{id: 's4', n: '04', title: '判断连成一线', html: `
<demo>board = [["X", "X", "X"],
         [".", "O", "."],
         ["O", ".", "."]]
def win(b, p):
    for r in range(3):
        if b[r][0] == p and b[r][1] == p and b[r][2] == p:
            return True
    for c in range(3):
        if b[0][c] == p and b[1][c] == p and b[2][c] == p:
            return True
    if b[0][0] == p and b[1][1] == p and b[2][2] == p:
        return True
    if b[0][2] == p and b[1][1] == p and b[2][0] == p:
        return True
    return False
print(win(board, "X"), win(board, "O"))</demo>
<p>井字棋一共 8 条线：3 行、3 列、2 条对角线。<code>win(b, p)</code> 检查玩家 p 有没有占满其中一条。</p>
<div class="tryit">✏️ <b>改一改：</b>把棋盘改成 O 占满一条对角线，看看结果。</div>`},
  ],
  ex: [
{id: 'e1', title: '打印棋盘', desc: '<code>board = [["X", ".", "O"], [".", "X", "."], ["O", ".", "X"]]</code>，每行用空格连起来打印。', starter: 'board = [["X", ".", "O"], [".", "X", "."], ["O", ".", "X"]]\n', tests: [{eq: 'X . O\n. X .\nO . X'}], hint: '<code>for row in board: print(" ".join(row))</code>。'},
{id: 'e2', title: '中间放子', desc: '造一个全是 <code>.</code> 的 3 × 3 棋盘，在正中间放 <code>O</code>，打印出来。', starter: '\n', tests: [{eq: '. . .\n. O .\n. . .'}], hint: '正中间是 <code>board[1][1]</code>。'},
{id: 'e3', title: '玩家落子', desc: '空棋盘。输入行、列（1–3），在那里放 <code>X</code>，打印棋盘。', stdin: '1\n3', starter: 'board = [["."] * 3 for i in range(3)]\n', tests: [{in: ['1', '3'], eq: '. . X\n. . .\n. . .'}, {in: ['3', '1'], eq: '. . .\n. . .\nX . .'}], hint: '<code>board[r - 1][c - 1] = "X"</code>。'},
{id: 'e4', title: '已经有子了', desc: '<code>board[1][1]</code> 已经是 <code>O</code>。输入行、列：空的就放 <code>X</code> 并打印 <code>放好了</code>；有子就打印 <code>这里已经有棋子了</code>。', stdin: '2\n2', starter: 'board = [["."] * 3 for i in range(3)]\nboard[1][1] = "O"\n', tests: [{in: ['2', '2'], eq: '这里已经有棋子了'}, {in: ['1', '1'], eq: '放好了'}], hint: '<code>if board[r - 1][c - 1] == ".":</code>。'},
{id: 'e5', title: '判断某一行', desc: '写函数 <code>row_win(b, p)</code>：棋盘 b 里有<b>任何一行</b>三个都是 p 就 return True，否则 False。', starter: 'def row_win(b, p):\n    # 在这里写\n\nprint(row_win([["X","X","X"],[".",".","."],[".",".","."]], "X"))\n', tests: [{py: 'assert row_win([["X","X","X"],[".",".","."],[".",".","."]], "X") == True\nassert row_win([[".",".","."],["O","O","O"],[".",".","."]], "O") == True\nassert row_win([["X","O","X"],[".",".","."],[".",".","."]], "X") == False\nassert row_win([["X",".","."],["X",".","."],["X",".","."]], "X") == False'}], hint: '<code>for r in range(3):</code> 里判断 <code>b[r][0] == p and b[r][1] == p and b[r][2] == p</code>，循环外 return False。'},
{id: 'e6', project: true, title: '完整的胜负判断 ✅', desc: '写函数 <code>win(b, p)</code>，检查 8 条线（3 行、3 列、2 条对角线），玩家 p 占满任何一条就 return True，否则 False。这是下节课井字棋的核心！', starter: 'def win(b, p):\n    # 3 行\n    # 3 列\n    # 2 条对角线\n    return False\n', tests: [{py: 'E = "."\nassert win([["X","X","X"],[E,E,E],[E,E,E]], "X")\nassert win([[E,"O",E],[E,"O",E],[E,"O",E]], "O")\nassert win([["X",E,E],[E,"X",E],[E,E,"X"]], "X")\nassert win([[E,E,"O"],[E,"O",E],["O",E,E]], "O")\nassert not win([["X","O","X"],["X","O","O"],["O","X","X"]], "X")\nassert not win([["X","X",E],[E,E,E],[E,E,E]], "X")'}], hint: '照着第 04 节写。列：<code>b[0][c] == p and b[1][c] == p and b[2][c] == p</code>。'},
  ],
};
