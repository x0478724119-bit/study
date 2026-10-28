window.PY = {
  title: 'Python 第 7 课：函数：伤害计算器',
  intro: '今天的目标：学 <b>函数（def）</b>，把一段代码打包起来起个名字，想用就"叫"它一下。游戏里的"攻击""升级""存档"都是一个个函数。最后的作品是<b>伤害计算器</b>：算出一次攻击打掉多少血，暴击还要翻倍。',
  secs: [
{id: 's1', n: '01', title: 'def：把代码打包', html: `
<demo>def hello():
    print("欢迎来到冒险世界！")
    print("————————")

hello()
hello()</demo>
<p><code>def 名字():</code> 下面缩进的就是函数里的代码。<b>光写 def 不会运行</b>，要写 <code>hello()</code> "叫"它一次，它才运行一次。</p>
<div class="tryit">✏️ <b>改一改：</b>写一个函数 <code>line()</code> 打印一行 ★★★★★，叫它 3 次。</div>`},
{id: 's2', n: '02', title: '参数：每次给它不同的东西', html: `
<demo>def greet(name):
    print(f"你好，{name}！")

greet("小熊")
greet("小明")

def show(name, hp):
    print(f"{name} 血量 {hp}")

show("史莱姆", 30)</demo>
<p>括号里的 <code>name</code> 叫<b>参数</b>：叫函数时给什么，name 就是什么。可以有好几个参数，用逗号隔开，<b>顺序要对上</b>。</p>
<div class="tryit">✏️ <b>改一改：</b>再叫一次 <code>show</code>，换成"巨龙"和 500。</div>`},
{id: 's3', n: '03', title: 'return：把结果交回来', html: `
<demo>def area(w, h):
    return w * h

a = area(3, 4)
print(a)
print(area(5, 6) + area(1, 2))</demo>
<p><code>print</code> 是"说出来给人看"；<code>return</code> 是"把结果交回去给程序用"。有了 return，算出来的数可以存进变量、拿去再算。</p>
<div class="why">🤔 函数里一碰到 return 就立刻结束，后面的代码不会运行。</div>
<div class="tryit">✏️ <b>改一改：</b>写一个 <code>double(x)</code>，return x 的 2 倍，打印 <code>double(21)</code>。</div>`},
{id: 's4', n: '04', title: '函数里也能用 if', html: `
<demo>def title(level):
    if level &gt;= 20:
        return "传说"
    elif level &gt;= 10:
        return "精英"
    else:
        return "新手"

print(title(25))
print(title(3))</demo>
<p>不同情况 return 不同的结果。还记得角色卡 2.0 的称号吗？现在可以把它做成一个函数了。</p>
<div class="tryit">✏️ <b>改一改：</b>加一档：level ≥ 50 是"神话"（想想要加在哪一行前面）。</div>`},
  ],
  ex: [
{id: 'e1', title: '打招呼函数', desc: '写一个函数 <code>welcome()</code>，运行时打印 <code>欢迎回来！</code>。然后叫它 2 次。', starter: '# 定义 welcome\n\n# 叫它 2 次\n', tests: [{eq: '欢迎回来！\n欢迎回来！'}], hint: '<code>def welcome():</code> 下一行缩进 <code>print("欢迎回来！")</code>，然后写两行 <code>welcome()</code>。'},
{id: 'e2', title: '加血', desc: '写函数 <code>heal(hp)</code>，return <code>hp + 50</code>，但<b>最多 100</b>（超过 100 就 return 100）。', starter: 'def heal(hp):\n    # 在这里写\n\nprint(heal(30))\nprint(heal(80))\n', tests: [{py: 'assert heal(30) == 80\nassert heal(80) == 100\nassert heal(50) == 100\nassert heal(0) == 50', has: ['80', '100']}], hint: '<code>new = hp + 50</code>，<code>if new &gt; 100: return 100</code>，否则 <code>return new</code>。'},
{id: 'e3', title: '圆的面积', desc: '写函数 <code>circle(r)</code>，return 圆的面积 <code>3.14 * r * r</code>。', starter: 'def circle(r):\n    # 在这里写\n\nprint(circle(10))\n', tests: [{py: 'assert circle(10) == 314.0\nassert circle(1) == 3.14', has: ['314']}], hint: '<code>return 3.14 * r * r</code>。'},
{id: 'e4', title: '成绩等级', desc: '写函数 <code>grade(score)</code>：≥ 90 return <code>A</code>，≥ 75 return <code>B</code>，≥ 60 return <code>C</code>，否则 return <code>D</code>。', starter: 'def grade(score):\n    # 在这里写\n\nprint(grade(95))\n', tests: [{py: 'assert grade(95) == "A"\nassert grade(90) == "A"\nassert grade(80) == "B"\nassert grade(60) == "C"\nassert grade(59) == "D"'}], hint: '从大到小 if / elif / else，每种情况 return。'},
{id: 'e5', title: '最大的那个', desc: '写函数 <code>biggest(a, b, c)</code>，return 三个数里最大的。<b>不许用 max()</b>，用 if 自己比。', starter: 'def biggest(a, b, c):\n    # 在这里写\n\nprint(biggest(3, 9, 5))\n', tests: [{py: 'assert biggest(3, 9, 5) == 9\nassert biggest(10, 2, 7) == 10\nassert biggest(1, 2, 3) == 3\nassert biggest(4, 4, 1) == 4'}], hint: '先 <code>big = a</code>，<code>if b &gt; big: big = b</code>，<code>if c &gt; big: big = c</code>，<code>return big</code>。'},
{id: 'e6', project: true, title: '伤害计算器 ⚔️', desc: '写一个函数 <code>damage(atk, defense, crit)</code>：<ol><li>基础伤害 = <code>atk - defense</code>；</li><li>如果基础伤害小于 1，就算 1（再弱也至少掉 1 滴血）；</li><li><code>crit</code> 是 <code>True</code>（暴击）时伤害 × 2；</li><li>return 最后的伤害。</li></ol>然后在下面输入两行：攻击力、防御力，打印 <code>普通攻击 X</code> 和 <code>暴击 Y</code>（分别用 crit = False 和 True 叫两次函数）。', stdin: '100\n30', starter: 'def damage(atk, defense, crit):\n    # 第 1 步：基础伤害\n    # 第 2 步：最少 1\n    # 第 3 步：暴击翻倍\n    # 第 4 步：return\n\n# 输入攻击力、防御力，打印普通攻击和暴击\n', tests: [{in: ['100', '30'], has: ['普通攻击 70', '暴击 140'], py: 'assert damage(100, 30, False) == 70\nassert damage(100, 30, True) == 140\nassert damage(10, 50, False) == 1\nassert damage(10, 50, True) == 2'}, {in: ['5', '20'], has: ['普通攻击 1', '暴击 2']}], hint: '<code>d = atk - defense</code>；<code>if d &lt; 1: d = 1</code>；<code>if crit: d = d * 2</code>；<code>return d</code>。下面：<code>print("普通攻击", damage(a, b, False))</code>。'},
  ],
};
