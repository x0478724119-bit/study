window.PY = {
  title: 'Python 第 10 课：文字冒险（2）：血量和钥匙',
  intro: '上节课的冒险只有"选路"。今天给它加上<b>状态</b>：玩家有血量，会受伤；背包里有东西，比如钥匙——<b>没有钥匙就开不了门</b>。这是让文字冒险变好玩的关键。',
  secs: [
{id: 's1', n: '01', title: '用字典存玩家状态', html: `
<demo>player = {"hp": 100, "bag": []}

def trap():
    print("地板塌了！你摔了下去。")
    player["hp"] -= 30
    print("血量：", player["hp"])

trap()
trap()</demo>
<p>把血量、背包装进一个字典 <code>player</code>，所有房间函数都能读、能改它。<b>字典和列表在函数里改了，外面也跟着变</b>，很方便。</p>
<div class="tryit">✏️ <b>改一改：</b>给 player 再加一项 <code>"gold": 0</code>，写一个 <code>treasure()</code> 让金币 +50。</div>`},
{id: 's2', n: '02', title: '捡到东西 → 放进背包', html: `
<demo>player = {"hp": 100, "bag": []}

def chest():
    print("你打开宝箱，里面有一把生锈的钥匙。")
    player["bag"].append("钥匙")

chest()
print(player["bag"])</demo>
<p><code>player["bag"]</code> 是一个列表，所以可以 <code>.append</code>（第 5 课）。</p>
<div class="tryit">✏️ <b>改一改：</b>宝箱里再放一瓶"药水"。</div>`},
{id: 's3', n: '03', title: '有钥匙才能开门', html: `
<demo>player = {"hp": 100, "bag": ["钥匙"]}

def gate():
    if "钥匙" in player["bag"]:
        print("咔哒——门开了！")
        print("【结局：逃出古堡】")
    else:
        print("门锁着。你需要一把钥匙。")

gate()</demo>
<p><code>if "钥匙" in player["bag"]</code>：用第 5 课的 <code>in</code> 判断背包里有没有。把第一行改成 <code>"bag": []</code> 再运行看看。</p>
<div class="tryit">✏️ <b>改一改：</b>门打开后，把钥匙从背包里 <code>remove</code> 掉（钥匙插在锁上了）。</div>`},
{id: 's4', n: '04', title: '血量归零 = 游戏结束', html: `
<demo>player = {"hp": 40, "bag": []}

def hurt(n):
    player["hp"] -= n
    print(f"你受了 {n} 点伤，剩 {player['hp']} 血")
    if player["hp"] &lt;= 0:
        print("【结局：倒下了……】")
        return True
    return False

if not hurt(30):
    print("你咬牙继续前进。")
if not hurt(30):
    print("还能走。")</demo>
<p>把"受伤"写成一个函数 <code>hurt(n)</code>：扣血、打印，血 ≤ 0 时宣布结局并 return True（"死了"）。房间里用 <code>if not hurt(30):</code> 判断还活着才继续。</p>
<div class="why">🤔 f-string 里面要用字典时，外面是双引号，里面就用单引号：<code>{player['hp']}</code>。</div>
<div class="tryit">✏️ <b>改一改：</b>写一个 <code>drink()</code>：背包里有药水就 hp +50 并用掉药水，没有就打印"没有药水"。</div>`},
  ],
  ex: [
{id: 'e1', title: '扣血', desc: '<code>player = {"hp": 100}</code>。写函数 <code>hit()</code>：hp 减 25 并打印 <code>剩余血量 X</code>。叫它 2 次。', starter: 'player = {"hp": 100}\n', tests: [{eq: '剩余血量 75\n剩余血量 50'}], hint: '<code>player["hp"] -= 25</code>，<code>print("剩余血量", player["hp"])</code>。'},
{id: 'e2', title: '捡钥匙', desc: '<code>player = {"bag": []}</code>。写函数 <code>chest()</code>：打印 <code>你找到了钥匙！</code> 并把 <code>"钥匙"</code> 放进背包。叫它一次后 <code>print(player["bag"])</code>。', starter: 'player = {"bag": []}\n', tests: [{eq: "你找到了钥匙！\n['钥匙']"}], hint: '<code>player["bag"].append("钥匙")</code>。'},
{id: 'e3', title: '锁着的门', desc: '<code>player = {"bag": []}</code>。输入 <code>拿</code> 就把 "钥匙" 放进背包，输入别的就不拿。然后叫 <code>gate()</code>：有钥匙打印 <code>门开了</code>，没有打印 <code>门锁着</code>。', stdin: '拿', starter: 'player = {"bag": []}\n\ndef gate():\n    pass  # 删掉 pass 写你的代码\n\n# 输入，拿就 append\n\ngate()\n', tests: [{in: ['拿'], eq: '门开了'}, {in: ['不拿'], eq: '门锁着'}], hint: 'gate 里 <code>if "钥匙" in player["bag"]:</code>。'},
{id: 'e4', title: '喝药水', desc: '<code>player = {"hp": 40, "bag": ["药水"]}</code>。写函数 <code>drink()</code>：背包里有药水 → hp +50、药水 remove 掉、打印 <code>血量 X</code>；没有 → 打印 <code>没有药水</code>。叫它 2 次。', starter: 'player = {"hp": 40, "bag": ["药水"]}\n', tests: [{eq: '血量 90\n没有药水'}], hint: '<code>if "药水" in player["bag"]:</code> 里 <code>player["hp"] += 50</code>、<code>player["bag"].remove("药水")</code>、打印。'},
{id: 'e5', title: '会结束的受伤', desc: '<code>player = {"hp": 50}</code>。写函数 <code>hurt(n)</code>：hp 减 n，打印 <code>剩 X 血</code>；如果 hp ≤ 0 再打印 <code>游戏结束</code>。然后依次叫 <code>hurt(20)</code>、<code>hurt(40)</code>。', starter: 'player = {"hp": 50}\n', tests: [{eq: '剩 30 血\n剩 -10 血\n游戏结束'}], hint: '<code>if player["hp"] &lt;= 0: print("游戏结束")</code>。'},
{id: 'e6', project: true, title: '古堡冒险 v2 🗝️', desc: '在 v1 的基础上加状态。<code>player = {"hp": 100, "bag": []}</code>，房间：<ol><li><code>hall()</code>：<code>左</code> → <code>library()</code>，<code>右</code> → <code>gate()</code>，别的打印 <code>你站着发呆。</code> 回 hall()；</li><li><code>library()</code>：<code>翻书</code> → 一本书砸下来，hp −30，打印 <code>剩 X 血</code>，并且找到钥匙（放进背包），打印 <code>你找到了钥匙！</code>，然后回 hall()；<code>离开</code> → 回 hall()；</li><li><code>gate()</code>：背包有钥匙 → 打印 <code>【结局：逃出古堡】</code>；没有 → 打印 <code>门锁着。</code> 回 hall()。</li></ol>最后一行 <code>hall()</code>。描述自己发挥！做完可以加料：再加一个陷阱房间，血量 ≤ 0 时打印 <code>【结局：倒在了古堡里】</code>。', stdin: '左\n翻书\n右', starter: 'player = {"hp": 100, "bag": []}\n\n# 写 hall、library、gate 三个函数\n\nhall()\n', tests: [{in: ['左', '翻书', '右'], has: ['剩 70 血', '你找到了钥匙！', '【结局：逃出古堡】']}, {in: ['右', '左', '翻书', '右'], has: ['门锁着。', '【结局：逃出古堡】']}, {in: ['左', '离开', '右', '左', '翻书', '右'], has: ['门锁着。', '【结局：逃出古堡】']}, {in: ['x', '左', '翻书', '右'], has: ['你站着发呆。', '【结局：逃出古堡】']}], hint: 'library 里：<code>if c == "翻书":</code> → <code>player["hp"] -= 30</code>、<code>print("剩", player["hp"], "血")</code>、<code>player["bag"].append("钥匙")</code>、<code>print("你找到了钥匙！")</code>、<code>hall()</code>。'},
  ],
};
