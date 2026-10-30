// 编程订单自检（py.html?l=free&p=订单id 里的「🧪 自检」按钮）
// 测试格式和课程练习一样：in 输入；has 输出里都要有；any 至少有一个；not 不能有；order 这几个词最后一次出现要按这个顺序；
// py 运行完再执行的检查（assert）；pre 运行前先执行（用来固定随机数）。src = [[正则, 没找到时的提示]] 只查代码不运行。
// rough: true = 只能粗查，推送里写"要看截图决定"。inputs = 显示给她看的输入顺序说明。
window.SELFTEST = {
  J27: {inputs: '名字、职业、等级', tests: [
    {in: ['小予', '法师', '25'], has: ['小予', '法师', '传说'], any: ['═', '║', '★', '♥', '⚔']},
    {in: ['阿湘', '刺客', '12'], has: ['精英'], not: ['传说']},
    {in: ['豆豆', '战士', '3'], has: ['新手'], not: ['精英', '传说']},
  ]},
  J30: {inputs: '难度（1/2/3），然后一行一个猜的数字；答案要用 random.randint(1, 上限) 生成', tests: [
    {pre: 'import random\n_R = []\ndef _ri(a, b):\n    _R.append((a, b))\n    return b\nrandom.randint = _ri', in: ['1', '10', '30', '50'], has: ['天才'], py: "assert (1, 50) in _R, '简单难度的范围应该是 1–50'"},
    {pre: 'import random\n_R = []\ndef _ri(a, b):\n    _R.append((a, b))\n    return b\nrandom.randint = _ri', in: ['2', '1', '2', '3', '4', '5', '100'], has: ['不错'], not: ['天才'], py: "assert (1, 100) in _R, '普通难度的范围应该是 1–100'"},
    {pre: 'import random\n_R = []\ndef _ri(a, b):\n    _R.append((a, b))\n    return b\nrandom.randint = _ri', in: ['2', '1', '2', '3', '4', '5', '6', '7', '8', '100'], has: ['终于猜中'], not: ['天才', '不错']},
    {pre: 'import random\n_R = []\ndef _ri(a, b):\n    _R.append((a, b))\n    return b\nrandom.randint = _ri', in: ['3', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], has: ['游戏结束', '500'], py: "assert (1, 500) in _R, '困难难度的范围应该是 1–500'"},
  ]},
  J32: {inputs: '一行一首歌名，「删 歌名」删歌，输入 完 结束（和第 5 课一样）', tests: [
    {in: ['晴天', '稻香', '晴天', '完'], has: ['这首点过啦', '1. 晴天', '2. 稻香', '一共 2 首'], not: ['3.']},
    {in: ['A', 'B', 'C', '删 B', '完'], has: ['1. A', '2. C', '一共 2 首'], not: ['3.']},
    {in: ['完'], has: ['一共 0 首']},
  ]},
  J33: {inputs: '每局出的招（石头 / 剪刀 / 布）；电脑出拳用 random.choice(["石头", "剪刀", "布"])', tests: [
    {pre: 'import random\nrandom.choice = lambda x: "石头" if "石头" in x else x[0]', in: ['布', '布'], has: ['第 1 局', '第 2 局', '你赢得了比赛'], not: ['第 3 局']},
    {pre: 'import random\nrandom.choice = lambda x: "石头" if "石头" in x else x[0]', in: ['石头', '布', '锤子', '布'], has: ['你赢得了比赛']},
    {pre: 'import random\nrandom.choice = lambda x: "石头" if "石头" in x else x[0]', in: ['剪刀', '剪刀'], has: ['电脑赢了']},
  ]},
  J36: {inputs: '不用输入；伤害函数叫 damage(atk, defense, crit)', tests: [
    {pre: 'import random\nrandom.randint = lambda a, b: b', in: [], has: ['赢'], py: "assert damage(100, 30, False) == 70, 'damage(100, 30, False) 应该是 70'\nassert damage(100, 30, True) == 140, '暴击应该翻倍'\nassert damage(10, 50, False) == 1, '伤害最少是 1'"},
    {in: [], has: ['赢']},
    {in: [], has: ['赢']},
  ]},
  J38: {inputs: '一行一个指令：买 → 下一行东西名；卖 → 下一行东西名；看；退出。金币开始是 100', tests: [
    {in: ['买', '剑', '看', '退出'], has: ['剑', '20']},
    {in: ['买', '剑', '买', '盾牌', '退出'], has: ['金币不够']},
    {in: ['买', '药水', '卖', '药水', '看', '退出'], has: ['90']},
  ]},
  J41: {rough: true, inputs: '（冒险游戏的路线每个人不一样，自检只查代码，姐姐看截图）', tests: [
    {src: [[/【结局/, '没找到新结局（格式【结局 X：……】）'], [/def\s+\w+\s*\(/, '新房间要写成一个函数']]},
  ]},
  J43: {rough: true, inputs: '（冒险游戏的路线每个人不一样，自检只查代码，姐姐看截图）', tests: [
    {src: [[/【结局/, '没找到新结局（格式【结局 X：……】）'], [/random/, '新房间里要有随机事件（random）'], [/共\s*4\s*个结局/, '标题画面上要写"共 4 个结局"'], [/ask\s*\(/, '新房间要用 ask() 提问']]},
  ]},
  J45: {inputs: '英文名（小写）、生日（4 位，比如 0815）', tests: [
    {in: ['mia', '0815'], has: ['Mia_aim15', '★']},
    {in: ['alex', '1203'], has: ['Alex_xel03']},
    {in: ['jo', '0101'], has: ['名字太短'], not: ['Jo_']},
  ]},
  J47: {inputs: '人数；然后每位选手先输入名字，再输入 5 个分数（每个一行）', tests: [
    {in: ['2', '小A', '9', '8', '7', '6', '10', '小B', '10', '10', '9', '9', '1'], has: ['8.0', '9.3'], order: ['小B', '小A']},
    {in: ['3', '甲', '5', '5', '5', '5', '5', '乙', '7', '7', '7', '7', '7', '丙', '6', '6', '6', '6', '6'], has: ['5.0', '7.0', '6.0'], order: ['乙', '丙', '甲']},
  ]},
  J48: {inputs: '一行行输入要下的行、列（1–3）；棋盘变量叫 board（和第 15 课一样）。电脑是随机的，自检会连玩 5 局', tests: [1, 2, 3, 4, 5].map(() => (
    {in: ['1', '1', '1', '2', '1', '3', '2', '1', '2', '2', '2', '3', '3', '1', '3', '2', '3', '3'], any: ['赢了', '平局'],
     py: "_x = sum([r.count('X') for r in board])\n_o = sum([r.count('O') for r in board])\nassert 0 <= _x - _o <= 1, '电脑好像下到了有子的格子（棋盘上 X 和 O 的个数对不上）'"})),
  },
};
