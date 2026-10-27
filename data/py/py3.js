window.PY = {
  title: 'Python 第 3 课：while 循环：做一个猜数字游戏',
  intro: '今天的目标：学会让程序<b>重复做一件事</b>，直到满足条件才停。最后的作品是一个真正能玩的<b>猜数字游戏</b>：电脑想一个 1–100 的数，你来猜，它告诉你大了还是小了。',
  secs: [
{id: 's1', n: '01', title: 'while：只要……就一直做', html: `
<demo>n = 1
while n <= 5:
    print(n)
    n = n + 1
print("数完了")</demo>
<p>读法："<b>只要</b> n &lt;= 5，就打印 n，然后 n 加 1"。每做一圈，回到 while 那一行再检查一次条件，条件不成立了才往下走。</p>
<div class="warn">⚠️ 一定要让条件<b>最终会变成不成立</b>。如果忘了写 <code>n = n + 1</code>，n 永远是 1，程序就停不下来（叫"死循环"）。练习台会在 5 秒后自动停掉。</div>
<div class="tryit">✏️ <b>改一改：</b>改成从 1 数到 10；再试试每次加 2（<code>n = n + 2</code>），看看打印出什么。</div>`},
{id: 's2', n: '02', title: '用循环累加：一个"计数器"', html: `
<p>游戏里的总分、总伤害，都是一次一次加上去的。准备一个从 0 开始的变量，每圈往里加：</p>
<demo>total = 0
n = 1
while n <= 10:
    total = total + n
    n = n + 1
print(total)</demo>
<p class="s"><code>total = total + n</code> 可以简写成 <code>total += n</code>，意思一样。</p>
<div class="tryit">✏️ <b>改一改：</b>改成算 1 + 2 + … + 100。（答案是 5050，据说数学家高斯小时候一下就算出来了）</div>`},
{id: 's3', n: '03', title: 'while True + break：一直重复，直到……', html: `
<p>有时候不知道要重复几次，比如"一直让玩家输入，直到输对密码"。可以写一个<b>永远成立</b>的循环，在里面用 <code>break</code> 跳出：</p>
<demo>while True:
    pw = input("密码：")
    if pw == "1234":
        print("登录成功")
        break
    print("密码错误，再试一次")</demo>
<p>在输入框里写三行：<code>1111</code>、<code>0000</code>、<code>1234</code>，再运行。</p>
<div class="tryit">✏️ <b>改一改：</b>加一个变量 <code>tries</code> 记录试了几次，登录成功时打印"你试了 3 次"。</div>`},
{id: 's4', n: '04', title: 'random：让电脑随机想一个数', html: `
<p>Python 自带一个"工具箱"叫 <code>random</code>，用之前先 <code>import</code>（导入）：</p>
<demo>import random
secret = random.randint(1, 100)
print(secret)</demo>
<p><code>random.randint(1, 100)</code> = 随机给一个 1 到 100 之间的整数（包括 1 和 100）。多运行几次，每次都不一样。</p>
<p>现在你已经有了做猜数字游戏的全部零件：<b>random</b> 想数字，<b>while True</b> 一直猜，<b>if / elif</b> 判断大了小了，<b>break</b> 猜中就停。</p>
<div class="tryit">✏️ <b>改一改：</b>改成随机掷一个骰子（1 到 6），打印"你掷出了 4 点"这样的句子。</div>`},
  ],
  ex: [
{id: 'e1', title: '倒计时', desc: '用 while 打印 5、4、3、2、1（每个数一行），最后打印 <code>出发！</code>', starter: '\n', tests: [{eq: '5\n4\n3\n2\n1\n出发！'}], hint: '从 n = 5 开始，<code>while n &gt;= 1:</code>，每圈 <code>n = n - 1</code>。'},
{id: 'e2', title: '1 加到 100', desc: '用 while 算出 1 + 2 + 3 + … + 100，打印结果。', starter: '\n', tests: [{eq: '5050'}], hint: '<code>total = 0</code>、<code>n = 1</code>，<code>while n &lt;= 100:</code> 里面 <code>total += n</code> 和 <code>n += 1</code>，最后（不缩进）<code>print(total)</code>。'},
{id: 'e3', title: '输对密码才能进', desc: '一直让玩家输入密码，直到输入 <code>abc</code> 为止。输错打印 <code>错误</code>，输对打印 <code>欢迎回来</code> 并结束。', stdin: 'aaa\nabc', starter: '\n', tests: [{in: ['aaa', 'xyz', 'abc'], has: ['错误', '欢迎回来']}, {in: ['abc'], has: ['欢迎回来'], not: ['错误']}], hint: '<code>while True:</code> → <code>pw = input()</code> → <code>if pw == "abc":</code> 打印欢迎并 <code>break</code> → 否则打印错误。'},
{id: 'e4', title: '存钱罐', desc: '一直输入每天存的钱（整数），输入 <code>0</code> 表示结束。结束后打印 <code>一共存了 X 元</code>。', stdin: '10\n20\n5\n0', starter: '\n', tests: [{in: ['10', '20', '5', '0'], has: ['一共存了 35 元']}, {in: ['0'], has: ['一共存了 0 元']}, {in: ['100', '1', '0'], has: ['一共存了 101 元']}], hint: '<code>total = 0</code>，<code>while True:</code> 里 <code>m = int(input())</code>，<code>if m == 0: break</code>，否则 <code>total += m</code>。循环外打印。'},
{id: 'e5', title: '数一数要几年', desc: '你有 100 个金币，每年变成原来的 2 倍（100 → 200 → 400 …）。用 while 算出<b>要过几年才能超过 10000</b>，打印 <code>需要 X 年</code>。', starter: 'coins = 100\nyears = 0\n', tests: [{has: ['需要 7 年']}], hint: '<code>while coins &lt;= 10000:</code> 里 <code>coins = coins * 2</code>、<code>years += 1</code>。100 × 2⁷ = 12800。'},
{id: 'e6', project: true, title: '猜数字游戏 🎲', desc: '做一个完整的猜数字游戏：<ol><li>用 <code>random.randint(1, 100)</code> 让电脑想一个数，存在 <code>secret</code> 里（只调用一次 random）；</li><li>一直让玩家猜：猜大了打印 <code>大了</code>，猜小了打印 <code>小了</code>；</li><li>猜中时打印 <code>猜对了！你用了 X 次</code>，游戏结束。</li></ol>做完自己玩几局！想挑战的话可以加：最多只能猜 7 次。', stdin: '50\n25\n37', starter: '# 第 1 步：import random，让电脑想一个 1-100 的数\n\n# 第 2 步：准备一个计数器 count\n\n# 第 3 步：while True 循环：输入、计数、判断大了 / 小了 / 猜对\n\n', tests: [{pre: 'import random\nrandom.seed(7)', in: ['50', '3', '8'], has: ['大了', '小了', '猜对了！你用了 3 次']}, {pre: 'import random\nrandom.seed(7)', in: ['8'], has: ['猜对了！你用了 1 次'], not: ['大了', '小了']}, {pre: 'import random\nrandom.seed(7)', in: ['10', '90', '5', '7', '8'], has: ['猜对了！你用了 5 次']}], hint: '<code>count = 0</code>；<code>while True:</code> 里 <code>g = int(input("猜："))</code>、<code>count += 1</code>，然后 <code>if g &gt; secret:</code> 大了 <code>elif g &lt; secret:</code> 小了 <code>else:</code> 猜对了 + <code>break</code>。'},
  ],
};
