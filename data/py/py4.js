window.PY = {
  title: 'Python 第 4 课：for 循环：用星星画图',
  intro: '今天的目标：学 <b>for 循环</b>，它是"数着次数重复"的循环，比 while 更简单。最后的作品是<b>用星星 ★ 画图案</b>：输入几层，就画出几层的三角形，像像素画一样。',
  secs: [
{id: 's1', n: '01', title: 'for 和 range：重复固定的次数', html: `
<demo>for i in range(5):
    print("第", i, "圈")</demo>
<p><code>range(5)</code> 会依次给出 0、1、2、3、4（<b>从 0 开始，不包括 5</b>），每给一个，下面缩进的代码就运行一次。</p>
<table class="t"><tr><th>写法</th><th>给出</th></tr><tr><td><code>range(5)</code></td><td>0 1 2 3 4</td></tr><tr><td><code>range(1, 6)</code></td><td>1 2 3 4 5</td></tr><tr><td><code>range(0, 10, 2)</code></td><td>0 2 4 6 8（每次加 2）</td></tr><tr><td><code>range(5, 0, -1)</code></td><td>5 4 3 2 1（倒着数）</td></tr></table>
<div class="why">🤔 什么时候用 for，什么时候用 while？<b>知道要重复几次</b>用 for；<b>不知道几次、要等某个条件</b>（比如猜中为止）用 while。</div>
<div class="tryit">✏️ <b>改一改：</b>用 range 打印 10、20、30、…、100。</div>`},
{id: 's2', n: '02', title: '字符串乘法：画一排星星', html: `
<p>在 Python 里，文字可以<b>乘</b>一个数，意思是重复几次：</p>
<demo>print("★" * 5)
print("ha" * 3)
for i in range(1, 4):
    print("★" * i)</demo>
<p>最后两行就是一个小三角形：第 1 圈 1 颗星，第 2 圈 2 颗，第 3 圈 3 颗。</p>
<div class="tryit">✏️ <b>改一改：</b>改成 6 层；再把 "★" 换成 "🌸" 试试。</div>`},
{id: 's3', n: '03', title: '遍历文字：一个字一个字地看', html: `
<p>for 还可以直接走过一段文字的<b>每个字</b>：</p>
<demo>word = "banana"
count = 0
for ch in word:
    if ch == "a":
        count += 1
print("a 出现了", count, "次")</demo>
<div class="tryit">✏️ <b>改一改：</b>把单词换成你的英文名或者你喜欢的游戏名，数一数里面有几个 e。</div>`},
{id: 's4', n: '04', title: '空格 + 星星：画居中的金字塔', html: `
<p>想让三角形居中，每行前面要先放一些<b>空格</b>。5 层的金字塔：第 1 层 4 个空格 + 1 颗星，第 2 层 3 个空格 + 3 颗星……</p>
<demo>n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))</demo>
<p class="s">规律：第 i 层有 <code>n − i</code> 个空格、<code>2i − 1</code> 颗星。找规律就是数学课的"找通项"！</p>
<div class="tryit">✏️ <b>改一改：</b>把 n 改成 8 看看；再试着倒过来画（从最宽的一层开始）。</div>`},
  ],
  ex: [
{id: 'e1', title: '1 到 10', desc: '用 for 和 range 打印 1 到 10（每个数一行）。', starter: '\n', tests: [{eq: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10'}], hint: '<code>for i in range(1, 11):</code> 下一行缩进 <code>print(i)</code>。'},
{id: 'e2', title: '7 的乘法表', desc: '打印 7 的乘法表，一共 9 行，格式：<code>7 x 1 = 7</code>、<code>7 x 2 = 14</code> … <code>7 x 9 = 63</code>（用小写字母 x）。', starter: '\n', tests: [{has: ['7 x 1 = 7', '7 x 5 = 35', '7 x 9 = 63'], not: ['7 x 10']}], hint: '<code>for i in range(1, 10):</code> 里 <code>print(f"7 x {i} = {7 * i}")</code>。'},
{id: 'e3', title: '3 的倍数有几个', desc: '用 for 和 if 数一数 1 到 100 里有几个数是 3 的倍数，打印这个个数。', starter: '\n', tests: [{eq: '33'}], hint: '<code>count = 0</code>，<code>for i in range(1, 101):</code> 里 <code>if i % 3 == 0: count += 1</code>，最后打印 count。'},
{id: 'e4', title: '数元音', desc: '输入一个英文单词，数出里面 a、e、i、o、u 一共有几个，打印 <code>元音有 X 个</code>。', stdin: 'banana', starter: '\n', tests: [{in: ['banana'], has: ['元音有 3 个']}, {in: ['education'], has: ['元音有 5 个']}, {in: ['sky'], has: ['元音有 0 个']}], hint: '<code>if ch in "aeiou":</code> 可以一次判断 5 个字母（in 的意思是"在不在里面"）。'},
{id: 'e5', title: '星星直角三角形', desc: '输入层数 n，打印一个直角三角形：第 1 行 1 个 <code>*</code>，第 2 行 2 个 …… 第 n 行 n 个。', stdin: '4', starter: '\n', tests: [{in: ['4'], eq: '*\n**\n***\n****'}, {in: ['2'], eq: '*\n**'}], hint: '<code>for i in range(1, n + 1):</code> 里 <code>print("*" * i)</code>。'},
{id: 'e6', project: true, title: '星星金字塔 ✨', desc: '输入层数 n，画一个<b>居中的金字塔</b>：第 i 层先打印 <code>n − i</code> 个空格，再打印 <code>2i − 1</code> 个 <code>*</code>。<br>比如 n = 3：<pre style="margin:4px 0">  *\n ***\n*****</pre>做完可以自己发挥：换成别的符号、画倒金字塔、画菱形（上面一个金字塔 + 下面一个倒的）！', stdin: '3', starter: '# 第 1 步：输入层数 n\n\n# 第 2 步：for 循环，每层打印 空格 + 星星\n\n', tests: [{in: ['3'], eq: '  *\n ***\n*****'}, {in: ['5'], eq: '    *\n   ***\n  *****\n *******\n*********'}], hint: '<code>for i in range(1, n + 1):</code> 里 <code>print(" " * (n - i) + "*" * (2 * i - 1))</code>。'},
  ],
};
