window.PY = {
  title: 'Python 第 12 课：字符串：密码强度检测器',
  intro: '今天学怎么"拆开"一段文字：取其中几个字、变大小写、检查有没有数字。最后的作品是<b>密码强度检测器</b>——很多网站注册时就有这个功能。',
  secs: [
{id: 's1', n: '01', title: '切片：取出一段', html: `
<demo>s = "Python"
print(s[0], s[-1])
print(s[0:3])
print(s[2:])
print(s[::-1])</demo>
<table class="t"><tr><th>写法</th><th>结果</th><th>意思</th></tr><tr><td><code>s[0:3]</code></td><td>Pyt</td><td>第 0 到第 2 个（不包括 3）</td></tr><tr><td><code>s[2:]</code></td><td>thon</td><td>从第 2 个到最后</td></tr><tr><td><code>s[:2]</code></td><td>Py</td><td>前 2 个</td></tr><tr><td><code>s[::-1]</code></td><td>nohtyP</td><td>倒过来</td></tr></table>
<div class="tryit">✏️ <b>改一改：</b>把你的英文名倒过来打印。</div>`},
{id: 's2', n: '02', title: '大小写和长度', html: `
<demo>name = "Alice"
print(name.upper())
print(name.lower())
print(len(name))
print("li" in name)</demo>
<p><code>.upper()</code> 全变大写，<code>.lower()</code> 全变小写。比较答案时先都变成小写，"Yes"和"yes"就一样了。</p>
<div class="tryit">✏️ <b>改一改：</b>输入一个词，不管大小写，只要是 yes 就打印"好的"。</div>`},
{id: 's3', n: '03', title: '一个字一个字检查', html: `
<demo>pw = "abc123XY"
digits = 0
uppers = 0
for ch in pw:
    if ch.isdigit():
        digits += 1
    if ch.isupper():
        uppers += 1
print("数字", digits, "个，大写字母", uppers, "个")</demo>
<table class="t"><tr><th>方法</th><th>判断</th></tr><tr><td><code>ch.isdigit()</code></td><td>是不是数字</td></tr><tr><td><code>ch.isupper()</code></td><td>是不是大写字母</td></tr><tr><td><code>ch.islower()</code></td><td>是不是小写字母</td></tr><tr><td><code>ch.isalpha()</code></td><td>是不是字母</td></tr></table>
<div class="tryit">✏️ <b>改一改：</b>再数一数小写字母有几个。</div>`},
{id: 's4', n: '04', title: '把条件攒成分数', html: `
<demo>pw = "hello2025"
score = 0
if len(pw) >= 8:
    score += 1
has_digit = False
for ch in pw:
    if ch.isdigit():
        has_digit = True
if has_digit:
    score += 1
print("满足", score, "条")</demo>
<p>每满足一条要求就 <code>score += 1</code>，最后看 score 有多高。用一个 <code>True / False</code> 变量（叫"开关"）记住"有没有出现过"。</p>
<div class="tryit">✏️ <b>改一改：</b>再加一条：有大写字母也加 1 分。</div>`},
  ],
  ex: [
{id: 'e1', title: '大写名字', desc: '输入一个英文名，打印它的全大写。', stdin: 'mia', starter: '\n', tests: [{in: ['mia'], eq: 'MIA'}, {in: ['Leo'], eq: 'LEO'}], hint: '<code>print(input().upper())</code>。'},
{id: 'e2', title: '倒着说', desc: '输入一个词，打印倒过来的样子。', stdin: 'hello', starter: '\n', tests: [{in: ['hello'], eq: 'olleh'}, {in: ['abc'], eq: 'cba'}], hint: '<code>s[::-1]</code>。'},
{id: 'e3', title: '回文', desc: '输入一个词：正着读和倒着读一样（比如 level），打印 <code>是回文</code>，否则打印 <code>不是回文</code>。不分大小写（Level 也算）。', stdin: 'level', starter: '\n', tests: [{in: ['level'], eq: '是回文'}, {in: ['Level'], eq: '是回文'}, {in: ['hello'], eq: '不是回文'}], hint: '先 <code>s = input().lower()</code>，再比 <code>s == s[::-1]</code>。'},
{id: 'e4', title: '隐藏手机号', desc: '输入 11 位手机号，打印前 3 位 + <code>****</code> + 后 4 位。比如 13812345678 → 138****5678。', stdin: '13812345678', starter: '\n', tests: [{in: ['13812345678'], eq: '138****5678'}, {in: ['15900001111'], eq: '159****1111'}], hint: '<code>p[:3] + "****" + p[-4:]</code>。'},
{id: 'e5', title: '数数字', desc: '输入一段文字，数出里面有几个数字字符，打印 <code>数字有 X 个</code>。', stdin: 'abc123', starter: '\n', tests: [{in: ['abc123'], eq: '数字有 3 个'}, {in: ['no digits'], eq: '数字有 0 个'}, {in: ['2026年11月'], eq: '数字有 6 个'}], hint: '<code>for ch in s:</code> 里 <code>if ch.isdigit(): n += 1</code>。'},
{id: 'e6', project: true, title: '密码强度检测器 🔐', desc: '输入一个密码，检查 4 条：<ol><li>长度 ≥ 8</li><li>有数字</li><li>有大写字母</li><li>有小写字母</li></ol>满足 4 条打印 <code>强</code>，2–3 条打印 <code>中</code>，0–1 条打印 <code>弱</code>。再在下一行打印 <code>满足 X 条</code>。<br>做完可以加料：没满足的那几条，告诉用户"还缺什么"。', stdin: 'Hello2025', starter: '# 第 1 步：输入密码\n\n# 第 2 步：用开关变量检查有没有数字、大写、小写\n\n# 第 3 步：算出满足几条，打印强 / 中 / 弱\n\n', tests: [{in: ['Hello2025'], eq: '强\n满足 4 条'}, {in: ['hello2025'], eq: '中\n满足 3 条'}, {in: ['abc'], eq: '弱\n满足 1 条'}, {in: ['ABCDEFGH'], eq: '中\n满足 2 条'}, {in: ['123'], eq: '弱\n满足 1 条'}], hint: '<code>score = 0</code>；<code>if len(pw) &gt;= 8: score += 1</code>；三个开关 <code>d = u = l = False</code>，for 里分别设 True，最后每个 True 加 1 分。'},
  ],
};
