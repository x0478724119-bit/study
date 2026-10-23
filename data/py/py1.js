window.PY = {
  title: 'Python 第 1 课：做一张游戏角色卡',
  intro: '今天的目标：30 分钟后，你会做出一个<b>游戏角色卡生成器</b>，输入名字、职业、等级，程序自动算出属性，打印一张角色卡。先跟着 4 小节学（每段代码都可以<b>直接改、点 ▶ 运行</b>试试），然后做 5 道小练习 + 1 个作品。练习点「✓ 提交检查」会自动判对错。',
  secs: [
{id: 's1', n: '01', title: '第一行代码：print', html: `
<p>print 就是"显示到屏幕上"。括号里放什么，屏幕上就显示什么。点 ▶ 运行看看：</p>
<demo>print("你好，Python！")
print(3 + 5)
print("3 + 5")</demo>
<p>注意第 2 行和第 3 行的区别：</p>
<ul><li>不加引号的 <code>3 + 5</code>，Python 会<b>算出来</b>，显示 8；</li><li>加了引号的 <code>"3 + 5"</code> 是<b>文字</b>（叫"字符串"），原样显示。</li></ul>
<div class="tryit">✏️ <b>改一改：</b>把第一行改成打印你自己的名字；再加一行，让 Python 算出 2 的 10 次方。改完点 ▶ 运行。</div>
<p>算术符号：<code>+</code> 加、<code>-</code> 减、<code>*</code> 乘、<code>/</code> 除、<code>**</code> 乘方（<code>2 ** 10</code> 是 1024）。</p>
<div class="tip">⌨️ iPad 小提示：引号、括号、冒号要用<b>英文</b>的。用中文键盘打出来的（“ ” （ ） ：）练习台会自动帮你换掉，但最好养成切英文键盘的习惯。代码框下面那排灰色按钮可以直接点出常用符号，⇥ 是缩进。</div>`},
{id: 's2', n: '02', title: '变量：游戏里的属性栏', html: `
<p>变量就是一个<b>贴了名字的格子</b>，用 <code>=</code> 把东西放进去，以后用名字就能拿出来：</p>
<demo>name = "小予"
hp = 100
attack = 25
print(name)
print(hp - attack)</demo>
<div class="tryit">✏️ <b>改一改：</b>把名字换成你在游戏里的名字，把 attack 改成 40，再加一行 <code>hp = hp - attack</code>，最后打印 hp。看看血还剩多少。</div>
<div class="why">🤔 编程里的 <code>=</code> 不是"等于"，是"<b>放进去</b>"：把右边的值放进左边的格子。所以 <code>hp = hp - 30</code> 的意思是"把 hp 减 30，再放回 hp"——就是游戏里扣血。</div>
<p>起名字的规矩：用英文字母、数字、下划线 <code>_</code>，不能用数字开头，不能有空格。好名字一看就知道装的是什么：<code>hp</code>、<code>player_name</code> 比 <code>a</code>、<code>b</code> 好懂得多。</p>`},
{id: 's3', n: '03', title: 'input：让程序问你问题', html: `
<p><code>input()</code> 会停下来等你输入。在练习台里，要输入的东西先写在代码下面的「程序的输入」框里，<b>每行一个</b>。在输入框里写一个名字，再点运行：</p>
<demo>name = input("你叫什么名字？")
print("你好，" + name)</demo>
<div class="warn">⚠️ 最重要的坑：<code>input()</code> 拿到的永远是<b>文字</b>。就算你输入 15，它也是 <code>"15"</code>，不能直接做加法。要先用 <b><code>int()</code></b> 变成数字（int 是 integer 整数的缩写）：</div>
<demo>age = int(input("你几岁？"))
print(age + 1)</demo>
<div class="tryit">✏️ <b>改一改：</b>在上面这段代码里加一行，打印「你 10 年后几岁」。</div>
<p>试试把 <code>int(</code> 和最后的 <code>)</code> 删掉再运行，看看会报什么错——报错不可怕，练习台会用中文告诉你哪里错了。</p>`},
{id: 's4', n: '04', title: 'f-string：把变量填进句子里', html: `
<p>在引号前面加一个 <code>f</code>，文字里就可以用 <code>{变量}</code> 把值填进去：</p>
<demo>name = "小予"
level = 5
print(f"{name} 现在是 {level} 级，再升 {10 - level} 级就满级了！")</demo>
<div class="tryit">✏️ <b>改一改：</b>加一个变量 coins = 152，再打印一句：<code>小予有 152 个金币，能换 30 块钱</code>（30 要让 Python 用 {coins // 5} 算出来，// 是整除）。</div>
<p><code>{ }</code> 里面还能直接做计算，就像上面的 <code>{10 - level}</code>。写游戏时显示血量、分数、等级，全靠它。</p>`},
  ],
  ex: [
{id: 'e1', title: '第一句话', desc: '用 print 显示下面这句话（一模一样，包括逗号和感叹号）：<br><code>Hello, Python!</code>', starter: '# 在下面写代码\n', tests: [{eq: 'Hello, Python!'}], hint: '<code>print("Hello, Python!")</code>，引号和标点都用英文的。'},
{id: 'e2', title: '一天有多少秒', desc: '一天 24 小时，一小时 60 分钟，一分钟 60 秒。用 print 让 Python <b>算出</b>一天有多少秒（不要自己算好再写数字）。', starter: '# 用 * 做乘法\n', tests: [{eq: '86400'}], hint: '<code>print(24 * 60 * 60)</code>'},
{id: 'e3', title: '扣血', desc: '角色本来有 120 点血（<code>hp</code>），被打了 35 点（<code>damage</code>）。把剩下的血<b>放回 hp</b>，再打印出来。', starter: 'hp = 120\ndamage = 35\n# 把剩下的血放回 hp，再打印 hp\n', tests: [{eq: '85', py: "assert hp == 85, 'hp 里的值应该变成 85（用 hp = hp - damage）'"}], hint: '<code>hp = hp - damage</code>，下一行 <code>print(hp)</code>。'},
{id: 'e4', title: '打招呼', desc: '程序问名字，然后打招呼。输入 <code>小明</code> 时，要输出：<br><code>你好，小明！欢迎来到 Python 世界</code><br>用 f-string 写。', stdin: '小明', starter: '# 第 1 步：用 input 问名字，存进 name\n\n# 第 2 步：用 f-string 打招呼\n\n', tests: [{in: ['小明'], has: ['你好，小明！欢迎来到 Python 世界']}, {in: ['诗予'], has: ['你好，诗予！欢迎来到 Python 世界']}], hint: '<code>print(f"你好，{name}！欢迎来到 Python 世界")</code>'},
{id: 'e5', title: '明年几岁', desc: '输入年龄，输出明年的年龄。输入 15 时输出：<code>明年你 16 岁</code>', stdin: '15', starter: '# 第 1 步：问年龄（记住：input 拿到的是文字）\n\n# 第 2 步：打印明年几岁\n\n', tests: [{in: ['15'], has: ['明年你 16 岁']}, {in: ['20'], has: ['明年你 21 岁']}], hint: '第一行改成 <code>age = int(input("你几岁？"))</code>，再 <code>print(f"明年你 {age + 1} 岁")</code>。'},
{id: 'e6', project: true, title: '游戏角色卡生成器', desc: '把今天学的全部用上！程序依次问：名字、职业、等级，然后算出属性，打印一张角色卡：<ul><li>生命值 = 等级 × 50 + 100</li><li>攻击力 = 等级 × 12</li><li>距离满级（30 级）还差几级</li></ul>卡片长什么样你自己设计（可以用 ═ ★ ♥ ⚔ 这些符号装饰），但一定要有名字、职业、等级和这三个数。<b>变量名请用</b> <code>name</code>、<code>job</code>、<code>level</code>、<code>hp</code>、<code>attack</code>（检查程序要找这几个名字）。做完截图发到工作室群给姐姐看 😎', stdin: '小予\n法师\n5', starter: '# 第 1 步：依次问名字、职业、等级（等级要能做计算）\n\n\n# 第 2 步：算出生命值 hp 和攻击力 attack\n\n\n# 第 3 步：打印你的角色卡（自己设计样子）\n\n', tests: [{in: ['小予', '法师', '5'], has: ['小予', '法师', '350', '60', '25'], py: "assert hp == level * 50 + 100, '生命值公式不对'\nassert attack == level * 12, '攻击力公式不对'"}, {in: ['阿湘', '刺客', '12'], has: ['阿湘', '刺客', '700', '144', '18']}], hint: '<code>hp = level * 50 + 100</code>；<code>attack = level * 12</code>；还差几级可以直接写在 f-string 里：<code>{30 - level}</code>。'},
  ],
};
