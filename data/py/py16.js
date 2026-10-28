window.PY = {
  title: 'Python 第 16 课：当一回 bug 侦探',
  intro: '程序员一半的时间在<b>找 bug</b>。今天不写新东西，而是修别人写错的代码：练习区每题都给了一段<b>有错的代码</b>，找出错在哪、改对它。把前 15 课学的东西全部复习一遍。',
  secs: [
{id: 's1', n: '01', title: '三种 bug', html: `
<table class="t"><tr><th>种类</th><th>表现</th><th>例子</th></tr>
<tr><td><b>语法错误</b></td><td>一运行就报错，程序一行都不跑</td><td>少了冒号、括号没配对、缩进不对</td></tr>
<tr><td><b>运行错误</b></td><td>跑到一半报错停下</td><td>文字和数字相加、下标超出范围、名字拼错</td></tr>
<tr><td><b>逻辑错误</b></td><td>不报错，但结果不对</td><td>&lt; 写成 &lt;=、少加 1、条件顺序错</td></tr></table>
<p>前两种 Python 会告诉你在第几行；<b>逻辑错误最难找</b>，只能自己读代码、算一算。</p>`},
{id: 's2', n: '02', title: '侦探方法 1：读报错', html: `
<demo>age = input("年龄：")
print("明年你", age + 1, "岁")</demo>
<p>在「程序的输入」写 15 运行。报错说"文字和数字不能直接相加"：<code>input()</code> 拿到的是文字 "15"，要 <code>int()</code>。</p>
<div class="tryit">✏️ <b>改一改：</b>把它修好。</div>`},
{id: 's3', n: '03', title: '侦探方法 2：加 print 看中间结果', html: `
<demo>nums = [3, 8, 2, 9]
big = 0
for n in nums:
    if n &lt; big:
        big = n
print("最大的是", big)</demo>
<p>结果是 0，明显不对。在 if 前面加一行 <code>print("现在 n =", n, "big =", big)</code>，看每一步 big 怎么变，就能发现 <code>&lt;</code> 应该是 <code>&gt;</code>。</p>
<div class="tryit">✏️ <b>改一改：</b>加 print 看一看，再修好。</div>`},
{id: 's4', n: '04', title: '侦探方法 3：用小例子手算', html: `
<demo>total = 0
for i in range(1, 10):
    total += i
print("1 到 10 的和：", total)</demo>
<p>1 加到 10 应该是 55，它却是 45。手算一下 range(1, 10) 给出哪些数？<b>不包括 10！</b> 应该是 <code>range(1, 11)</code>。</p>
<div class="why">🤔 先用一个很小、你自己能算出答案的例子测试程序，对了再用大的。</div>`},
  ],
  ex: [
{id: 'e1', title: '修：冒号和缩进', desc: '下面的代码有 2 个语法错误，修好它。输入分数，≥ 60 打印 <code>及格</code>，否则 <code>不及格</code>。', stdin: '75', starter: 's = int(input())\nif s >= 60\nprint("及格")\nelse:\n    print("不及格")\n', tests: [{in: ['75'], eq: '及格'}, {in: ['40'], eq: '不及格'}], hint: 'if 后面少了冒号；print("及格") 要缩进。'},
{id: 'e2', title: '修：求平均', desc: '下面算平均分的代码结果不对（逻辑错误），修好它。应该打印 <code>平均 80.0</code>。', starter: 'scores = [70, 80, 90]\ntotal = 0\nfor s in scores:\n    total = s\nprint("平均", total / len(scores))\n', tests: [{eq: '平均 80.0'}], hint: 'total = s 每次都被覆盖了，应该是 total += s。'},
{id: 'e3', title: '修：倒计时', desc: '下面的倒计时应该打印 5 4 3 2 1 和 <code>发射！</code>（每个一行），但它永远停不下来。修好它。', starter: 'n = 5\nwhile n > 0:\n    print(n)\nprint("发射！")\n', tests: [{eq: '5\n4\n3\n2\n1\n发射！'}], hint: '死循环：n 从来没变过。循环里加 n -= 1。'},
{id: 'e4', title: '修：列表下标', desc: '下面的代码想打印最后一个英雄，但报错了。修好它（应该打印 <code>弓箭手</code>）。', starter: 'heroes = ["战士", "法师", "弓箭手"]\nprint(heroes[3])\n', tests: [{eq: '弓箭手'}], hint: '3 个东西，下标是 0、1、2。用 heroes[2] 或 heroes[-1]。'},
{id: 'e5', title: '修：等级判断', desc: '下面的代码，输入 95 却打印了 <code>良好</code>。修好它：≥ 90 <code>优秀</code>，≥ 75 <code>良好</code>，否则 <code>加油</code>。', stdin: '95', starter: 's = int(input())\nif s >= 75:\n    print("良好")\nelif s >= 90:\n    print("优秀")\nelse:\n    print("加油")\n', tests: [{in: ['95'], eq: '优秀'}, {in: ['80'], eq: '良好'}, {in: ['50'], eq: '加油'}], hint: '条件顺序错了：先判断大的（≥ 90），再判断小的。'},
{id: 'e6', project: true, title: '修：坏掉的背包 🎒', desc: '下面的背包程序有 <b>4 个 bug</b>（语法、运行、逻辑都有）。修好它，让它：一直输入指令直到 <code>退出</code>；<code>捡</code> 再输入名字，数量 +1（没有就新建），打印 <code>捡到了 X</code>；<code>看</code> 每行打印 <code>名字 × 数量</code>。', stdin: '捡\n药水\n捡\n药水\n看\n退出', starter: 'bag = {}\nwhile True\n    c = input()\n    if c = "退出":\n        break\n    elif c == "捡":\n        x = input()\n        if x in bag:\n            bag[x] = 1\n        else:\n            bag[x] = 1\n        print("捡到了", x)\n    elif c == "看":\n        for k in bag:\n            print(f"{k} × {bag[x]}")\n', tests: [{in: ['捡', '药水', '捡', '药水', '看', '退出'], has: ['捡到了 药水', '药水 × 2']}, {in: ['捡', 'A', '捡', 'B', '看', '退出'], has: ['A × 1', 'B × 1']}], hint: '① while True 少冒号；② if c = 要写 ==；③ 已经有的东西应该 bag[x] += 1；④ 打印时用的是 bag[x]，应该是 bag[k]。'},
  ],
};
