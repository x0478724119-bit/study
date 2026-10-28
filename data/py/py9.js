window.PY = {
  title: 'Python 第 9 课：文字冒险（1）：房间和选择',
  intro: '从今天开始做<b>作品集项目：文字冒险游戏</b>，分 3 课做完。今天先把"地图"搭起来：每个房间是一个函数，玩家输入选择，程序带他去下一个房间，最后走到不同的结局。',
  secs: [
{id: 's1', n: '01', title: '一个房间 = 一个函数', html: `
<demo>def hall():
    print("你站在一座古堡的大厅里。")
    print("左边有一扇木门，右边有一条楼梯。")

def library():
    print("这里是图书馆，书架上落满了灰。")

hall()
library()</demo>
<p>每个房间写成一个函数：进房间 = 叫这个函数。这样房间再多也不会乱。</p>
<div class="tryit">✏️ <b>改一改：</b>再写一个房间 <code>garden()</code>，描述一个花园，叫它一次。</div>`},
{id: 's2', n: '02', title: '在房间里做选择', html: `
<demo>def hall():
    print("大厅：左边一扇木门，右边一条楼梯。")
    c = input("往 左 还是 右？")
    if c == "左":
        print("你推开了木门……")
    elif c == "右":
        print("你爬上了楼梯……")
    else:
        print("你站着发呆。")

hall()</demo>
<p>在房间函数里用 <code>input</code> 问玩家，再用 if 决定发生什么。<b>else 一定要写</b>：玩家可能乱输。</p>
<div class="tryit">✏️ <b>改一改：</b>在「程序的输入」里写"左"运行，再写"上"运行，看 else 起作用。</div>`},
{id: 's3', n: '03', title: '房间连房间：在函数里叫另一个函数', html: `
<demo>def hall():
    print("大厅：左边木门，右边楼梯。")
    c = input("左 / 右：")
    if c == "左":
        library()
    else:
        tower()

def library():
    print("图书馆：你找到一本发光的书。")
    print("【结局 A：知识的守护者】")

def tower():
    print("塔顶：一只乌鸦叼走了你的帽子。")
    print("【结局 B：被乌鸦打劫】")

hall()</demo>
<p>选"左"就叫 <code>library()</code>，选"右"就叫 <code>tower()</code>，这样玩家就"走"到了下一个房间。函数可以写在后面，只要<b>最后一行 hall() 开始游戏时</b>它们都定义好了就行。</p>
<div class="tryit">✏️ <b>改一改：</b>让图书馆里也有一个选择："看书"去结局 A，"离开"回到 <code>hall()</code>。</div>`},
{id: 's4', n: '04', title: '先画地图再写代码', html: `
<p>写之前先在纸上画一张小地图，像这样：</p>
<div class="ex">大厅 ──左──▶ 图书馆 ──看书──▶ 结局 A<br>
　│　　　　　　　└──离开──▶ 回大厅<br>
　└──右──▶ 塔顶 ──跳──▶ 结局 B<br>
　　　　　　　　└──等──▶ 结局 C</div>
<p>每个方框 = 一个函数；每条箭头 = 一个 if 分支。地图画清楚了，代码就是照着"翻译"。</p>
<div class="why">🤔 结局最好写成固定格式，比如 <code>【结局 A：……】</code>，下一课我们会给游戏加血量、背包和钥匙。</div>
<div class="tryit">✏️ <b>改一改：</b>在纸上画出你自己的冒险地图：至少 3 个房间、3 个结局。拍照发工作室群（不算作业，但下节课要用）。</div>`},
  ],
  ex: [
{id: 'e1', title: '第一个房间', desc: '写函数 <code>start()</code>，打印两行：<code>你在一片森林里醒来。</code> 和 <code>前面有一条小路。</code>，然后叫它。', starter: '\n', tests: [{eq: '你在一片森林里醒来。\n前面有一条小路。'}], hint: '<code>def start():</code> 下面两行 print，最后 <code>start()</code>。'},
{id: 'e2', title: '二选一', desc: '写函数 <code>cave()</code>：打印 <code>山洞里有两条路。</code>，输入选择：<code>左</code> 打印 <code>你找到了宝石</code>，<code>右</code> 打印 <code>你遇到了蝙蝠</code>，别的打印 <code>你迷路了</code>。最后叫 <code>cave()</code>。', stdin: '左', starter: 'def cave():\n    # 在这里写\n\ncave()\n', tests: [{in: ['左'], has: ['山洞里有两条路。', '你找到了宝石']}, {in: ['右'], has: ['你遇到了蝙蝠']}, {in: ['上'], has: ['你迷路了']}], hint: '<code>c = input()</code>，<code>if c == "左": … elif c == "右": … else: …</code>。'},
{id: 'e3', title: '走到下一个房间', desc: '写两个函数：<code>door()</code> 打印 <code>你面前有一扇门。</code>，输入 <code>开</code> 就叫 <code>room()</code>，否则打印 <code>你转身离开了。</code>；<code>room()</code> 打印 <code>房间里有一只猫。</code>。最后叫 <code>door()</code>。', stdin: '开', starter: 'def door():\n    pass  # 删掉 pass 写你的代码\n\ndef room():\n    pass\n\ndoor()\n', tests: [{in: ['开'], has: ['你面前有一扇门。', '房间里有一只猫。']}, {in: ['不开'], has: ['你转身离开了。'], not: ['猫']}], hint: '<code>pass</code> 是"先空着"的意思，写代码时删掉它。door 里 <code>if c == "开": room()</code>。'},
{id: 'e4', title: '三条路', desc: '写函数 <code>cross()</code>：打印 <code>十字路口。</code>，输入 <code>北</code>、<code>东</code>、<code>西</code> 分别打印 <code>【结局 A：雪山】</code>、<code>【结局 B：大海】</code>、<code>【结局 C：沙漠】</code>，别的打印 <code>你原地转圈。</code>。', stdin: '东', starter: '\n', tests: [{in: ['北'], has: ['【结局 A：雪山】']}, {in: ['东'], has: ['【结局 B：大海】']}, {in: ['西'], has: ['【结局 C：沙漠】']}, {in: ['南'], has: ['你原地转圈。']}], hint: 'if / elif / elif / else，最后叫 <code>cross()</code>。'},
{id: 'e5', title: '走回原来的房间', desc: '写函数 <code>hall()</code>：打印 <code>大厅。</code>，输入 <code>进</code> 就打印 <code>【结局：你找到了出口】</code>，输入别的就打印 <code>再想想……</code> 然后<b>再叫一次 hall()</b>（回到大厅重新选）。', stdin: '不知道\n进', starter: '\n', tests: [{in: ['不知道', '进'], has: ['再想想……', '【结局：你找到了出口】']}, {in: ['a', 'b', '进'], has: ['【结局：你找到了出口】']}], hint: 'else 里写 <code>print("再想想……")</code> 再写 <code>hall()</code>。函数叫自己也可以！'},
{id: 'e6', project: true, title: '古堡冒险 v1 🏰', desc: '做一个有 <b>4 个房间、3 个结局</b>的小冒险（照第 04 节的地图）：<ol><li><code>hall()</code> 大厅：打印描述，<code>左</code> 去 <code>library()</code>，<code>右</code> 去 <code>tower()</code>，别的打印 <code>你站着发呆。</code> 并回到 hall()；</li><li><code>library()</code> 图书馆：<code>看书</code> → 打印 <code>【结局 A：知识的守护者】</code>；<code>离开</code> → 回 hall()；</li><li><code>tower()</code> 塔顶：<code>跳</code> → 打印 <code>【结局 B：学会了飞】</code>；<code>等</code> → 打印 <code>【结局 C：看了一整晚星星】</code>；</li><li>最后一行 <code>hall()</code> 开始游戏。</li></ol>房间的描述你自己写，越有画面越好（检查只看结局那句）。', stdin: '左\n看书', starter: '# 照着地图写 4 个函数：hall、library、tower\n# 最后一行写 hall() 开始游戏\n\n', tests: [{in: ['左', '看书'], has: ['【结局 A：知识的守护者】']}, {in: ['右', '跳'], has: ['【结局 B：学会了飞】']}, {in: ['右', '等'], has: ['【结局 C：看了一整晚星星】']}, {in: ['左', '离开', '右', '等'], has: ['【结局 C：看了一整晚星星】']}, {in: ['上', '左', '看书'], has: ['你站着发呆。', '【结局 A：知识的守护者】']}], hint: '先写 hall 的 if：<code>if c == "左": library()</code> <code>elif c == "右": tower()</code> <code>else: print("你站着发呆。"); hall()</code>（分两行写）。library 和 tower 照同样的样子写。'},
  ],
};
