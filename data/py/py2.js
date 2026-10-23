window.PY = {
  title: 'Python 第 2 课：if 判断：让程序会"做决定"',
  intro: '今天的目标：学会让程序<b>根据情况做不同的事</b>。游戏里"血量为 0 就倒下""分数够了就升级"，靠的都是 if。最后的作品是一个<b>角色状态检测器</b>：输入血量，程序告诉你角色是满血、受伤、危险还是倒下了。',
  secs: [
{id: 's1', n: '01', title: '比较：问 Python 一个"是不是"', html: `
<p>Python 可以比较两个东西，回答 <code>True</code>（是）或 <code>False</code>（不是）：</p>
<demo>print(5 > 3)
print(5 < 3)
print(10 == 10)
print(10 != 10)</demo>
<table class="t"><tr><th>写法</th><th>意思</th></tr><tr><td><code>&gt;</code> <code>&lt;</code></td><td>大于、小于</td></tr><tr><td><code>&gt;=</code> <code>&lt;=</code></td><td>大于等于、小于等于</td></tr><tr><td><code>==</code></td><td>等于（<b>两个</b>等号！）</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr></table>
<div class="warn">⚠️ 一个 <code>=</code> 是"放进格子"（赋值），两个 <code>==</code> 才是"问是不是相等"。这是新手最常见的错。</div>
<div class="tryit">✏️ <b>改一改：</b>加一行，问 Python「100 大于等于 60 吗？」，运行看看是 True 还是 False。</div>`},
{id: 's2', n: '02', title: 'if：如果……就……', html: `
<demo>hp = 0
if hp == 0:
    print("角色倒下了")
print("这一行不管怎样都会运行")</demo>
<p>三个规矩：</p>
<ol><li><code>if</code> 后面写条件，末尾一定有<b>冒号 :</b></li>
<li>下一行要<b>缩进 4 格</b>（点代码框下面的 ⇥ 键，或者打完冒号回车会自动缩进）。缩进的代码只在条件成立时运行；</li>
<li>不缩进的代码不归 if 管，一定会运行。</li></ol>
<div class="tryit">✏️ <b>改一改：</b>把 <code>hp = 0</code> 改成 <code>hp = 50</code>，再运行。第一句还会出现吗？</div>`},
{id: 's3', n: '03', title: 'else 和 elif：否则……', html: `
<p><code>else</code> = 否则；<code>elif</code> = 否则如果（else if 的缩写），可以有很多个，从上往下检查，<b>碰到第一个成立的就停</b>：</p>
<demo>score = int(input("分数："))
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")</demo>
<p>在输入框写 95、70、30 分别试试。</p>
<div class="why">🤔 为什么输入 95 只打印"优秀"，不会再打印"及格"？因为 95 &gt;= 90 已经成立了，后面的 elif 和 else 就直接跳过。所以<b>条件要从严到松排</b>。</div>
<div class="tryit">✏️ <b>改一改：</b>在"优秀"和"及格"中间加一档：80 分以上打印"良好"。</div>`},
{id: 's4', n: '04', title: 'and、or 和 %：更复杂的条件', html: `
<p>上 Swift 时学过的逻辑运算，在 Python 里用英文单词写：<code>and</code>（并且）、<code>or</code>（或者）、<code>not</code>（不是）。</p>
<demo>level = 12
coins = 300
if level >= 10 and coins >= 200:
    print("可以解锁新地图")</demo>
<p>再学一个常用的符号 <code>%</code>：<b>取余数</b>。<code>7 % 2</code> 是 1（7 除以 2 余 1）。一个数 <code>% 2 == 0</code> 就是偶数。</p>
<demo>n = 7
if n % 2 == 0:
    print("偶数")
else:
    print("奇数")</demo>
<div class="tryit">✏️ <b>改一改：</b>把第一段的条件改成 <code>or</code>，再把 coins 改成 100，运行看看结果有什么不同。</div>`},
  ],
  ex: [
{id: 'e1', title: '能不能玩', desc: '输入年龄。如果<b>大于等于 18</b>，打印 <code>可以玩</code>；否则打印 <code>还不能玩</code>。', stdin: '16', starter: '# 第 1 步：输入年龄（要能比较大小）\n\n# 第 2 步：if / else 判断\n\n', tests: [{in: ['16'], has: ['还不能玩']}, {in: ['18'], has: ['可以玩'], not: ['还不能']}, {in: ['30'], has: ['可以玩'], not: ['还不能']}], hint: '<code>age = int(input("你几岁？"))</code>，然后 <code>if age &gt;= 18:</code> 下一行缩进 <code>print("可以玩")</code>，<code>else:</code> 下一行缩进 <code>print("还不能玩")</code>。'},
{id: 'e2', title: '奇数还是偶数', desc: '输入一个整数，是偶数打印 <code>偶数</code>，否则打印 <code>奇数</code>。（用 %）', stdin: '7', starter: '\n', tests: [{in: ['7'], has: ['奇数'], not: ['偶数']}, {in: ['10'], has: ['偶数'], not: ['奇数']}, {in: ['0'], has: ['偶数'], not: ['奇数']}], hint: '<code>if n % 2 == 0:</code>'},
{id: 'e3', title: '成绩等级', desc: '输入分数：90 及以上打印 <code>A</code>，75 到 89 打印 <code>B</code>，60 到 74 打印 <code>C</code>，60 以下打印 <code>D</code>。（input 的提示文字用中文，别写字母）', stdin: '82', starter: '\n', tests: [{in: ['95'], has: ['A'], not: ['B', 'C', 'D']}, {in: ['82'], has: ['B'], not: ['A', 'C', 'D']}, {in: ['60'], has: ['C'], not: ['A', 'B', 'D']}, {in: ['59'], has: ['D'], not: ['A', 'B', 'C']}], hint: '从高到低：<code>if s &gt;= 90</code> → <code>elif s &gt;= 75</code> → <code>elif s &gt;= 60</code> → <code>else</code>。'},
{id: 'e4', title: '解锁新地图', desc: '依次输入等级和金币。等级<b>至少 10</b> <b>并且</b>金币<b>至少 200</b>，打印 <code>解锁成功</code>；否则打印 <code>还不够</code>。', stdin: '12\n150', starter: '\n', tests: [{in: ['12', '300'], has: ['解锁成功'], not: ['还不够']}, {in: ['12', '150'], has: ['还不够'], not: ['解锁成功']}, {in: ['5', '500'], has: ['还不够'], not: ['解锁成功']}, {in: ['10', '200'], has: ['解锁成功'], not: ['还不够']}], hint: '两个 input，各自 int()。条件 <code>level &gt;= 10 and coins &gt;= 200</code>。'},
{id: 'e5', title: '暴击判定', desc: '输入一个 1 到 100 的数 r（假装是游戏抽出来的）。r <b>大于 90</b> 打印 <code>暴击！伤害翻倍</code>，<b>小于 10</b> 打印 <code>miss</code>，其他打印 <code>普通攻击</code>。', stdin: '95', starter: '\n', tests: [{in: ['95'], has: ['暴击'], not: ['miss', '普通']}, {in: ['5'], has: ['miss'], not: ['暴击', '普通']}, {in: ['50'], has: ['普通攻击'], not: ['暴击', 'miss']}, {in: ['90'], has: ['普通攻击'], not: ['暴击']}], hint: '<code>if r &gt; 90</code> → <code>elif r &lt; 10</code> → <code>else</code>。90 正好不算暴击（是"大于"）。'},
{id: 'e6', project: true, title: '角色状态检测器', desc: '输入角色的<b>最大血量</b>和<b>当前血量</b>，判断状态并打印：<ul><li>当前血量 = 最大血量：<code>满血 💪</code></li><li>一半及以上（但没满）：<code>受伤了</code></li><li>大于 0 但不到一半：<code>危险！快加血</code></li><li>等于 0：<code>倒下了</code></li></ul>最后再打印一行 <code>血量：当前/最大</code>（比如 <code>血量：30/100</code>）。变量名请用 <code>max_hp</code>、<code>hp</code>。', stdin: '100\n30', starter: '# 第 1 步：输入最大血量和当前血量\n\n# 第 2 步：用 if / elif / else 判断状态（想想顺序！）\n\n# 第 3 步：打印 血量：当前/最大\n\n', tests: [{in: ['100', '100'], has: ['满血', '血量：100/100'], not: ['受伤', '危险', '倒下']}, {in: ['100', '60'], has: ['受伤了', '血量：60/100'], not: ['满血', '危险', '倒下']}, {in: ['100', '50'], has: ['受伤了'], not: ['危险']}, {in: ['200', '30'], has: ['危险', '血量：30/200'], not: ['满血', '受伤', '倒下']}, {in: ['80', '0'], has: ['倒下了'], not: ['满血', '受伤', '危险']}], hint: '顺序：先判断 <code>hp == max_hp</code>，再 <code>hp == 0</code>，再 <code>hp &gt;= max_hp / 2</code>，最后 else。最后一行 <code>print(f"血量：{hp}/{max_hp}")</code>。'},
  ],
};
