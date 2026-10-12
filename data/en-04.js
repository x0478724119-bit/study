window.SET = {
  title: '语法 + 阅读：现在完成时',
  intro: '<a class="btn2 light" href="book.html?d=2026-10-15#e2">📖 先读手册：现在完成时 vs 一般过去时</a><br>前 10 题语法，后面阅读。<b>阅读每题都回原文找依据</b>。错题重做到 80%。',
  sections: ['语法', '阅读'],
  passages: {
    a: `<b>Lin's Little Games</b><br><br>
Lin Yue is sixteen. She has loved drawing since she was a little girl, but two years ago she found something new: coding. Her cousin showed her a free app, and that weekend she made her first tiny game — a cat that jumped over boxes.<br><br>
Since then, Lin has made five more games. Her favourite one is about a girl who decorates an old house room by room. "I have always liked designing rooms," she says, "so I put that into a game." She has shared it online, and more than 300 people have played it so far.<br><br>
Not everything has been easy. Last month her tablet broke and she lost two weeks of work. "I was really upset," she remembers. "But I learned to save my files in the cloud."<br><br>
Lin hasn't decided what to study at university yet, but she knows one thing: she wants to make things that people enjoy.`
  },
  passagesCn: {
    a: `<b>林悦的小游戏</b><br><br>林悦十六岁。她从小就喜欢画画，但两年前她发现了一样新东西：编程。表哥给她看了一个免费的 App，那个周末她就做出了第一个小游戏——一只跳过箱子的猫。<br><br>从那以后，林悦又做了五个游戏。她最喜欢的一个讲的是一个女孩一间一间地装修一座老房子。"我一直都喜欢设计房间，"她说，"所以就把它做进了游戏里。"她把游戏分享到网上，到现在已经有 300 多人玩过。<br><br>也不是什么都顺利。上个月她的平板坏了，丢了两个星期的成果。"我当时特别难过，"她回忆说，"但我学会了把文件存到云端。"<br><br>林悦还没决定大学学什么，但她清楚一件事：她想做出让人喜欢的东西。`
  },
  qs: [
    {sec:'语法', q:'I ___ my homework already. Can I go out now?', opts:['finish','have finished','finished'], a:1, e:'already + 对现在有影响（作业做完了，所以现在能出去）→ 现在完成时。'},
    {sec:'语法', q:'She ___ to Beijing last year.', opts:['went','has gone','has been'], a:0, e:'last year 是具体的过去时间 → 只能用过去时。'},
    {sec:'语法', q:'___ you ever ___ sushi?', opts:['Did … eat','Have … eaten','Do … eat'], a:1, e:'ever（曾经）→ 现在完成时：Have you ever eaten …?'},
    {sec:'语法', q:'We have lived here ___ 2020.', opts:['for','since','ago'], a:1, e:'2020 是一个时间点 → since。'},
    {sec:'语法', q:'He has worked at this company ___ three years.', opts:['for','since','in'], a:0, e:'three years 是一段时间 → for。'},
    {sec:'语法', q:'— Where\'s Tom? — He ___ to the shop. He\'ll be back soon.', opts:['has gone','has been','went'], a:0, e:'人现在不在这里 → has gone to。has been to 是"去过（已经回来了）"。'},
    {sec:'语法', q:'I have ___ this phone for two years.', opts:['bought','had','got'], a:1, e:'buy 是一瞬间的动作，不能和 for two years 连用，要换成能持续的 have → have had。'},
    {sec:'语法', t:'fill', q:'I ________ (not see) him since Monday.（填动词的正确形式）', a:["haven't seen","haven’t seen","have not seen","havent seen"], e:'since Monday → 现在完成时，否定：haven\'t seen。'},
    {sec:'语法', t:'fill', q:'She ________ (lose) her key yesterday.（填动词的正确形式）', a:['lost'], e:'yesterday → 过去时 lost。'},
    {sec:'语法', q:'When ___ you start learning English?', opts:['did','have','has'], a:0, e:'When 问具体时间 → 过去时，不能用现在完成时。'},
    {sec:'阅读', p:'a', q:'When did Lin start coding?', opts:['When she was a little girl','Two years ago','Last month'], a:1, e:'第一段：two years ago she found something new: coding。小时候开始的是画画。'},
    {sec:'阅读', p:'a', t:'fill', q:'How many games has Lin made in total? 填数字', a:['6','six'], e:'第一个游戏 + since then five more games = 6 个。这题要自己加一下！'},
    {sec:'阅读', p:'a', q:'What is her favourite game about?', opts:['A cat jumping over boxes','A girl decorating an old house','A robot looking for home'], a:1, e:'第二段：a girl who decorates an old house room by room。猫是第一个游戏。'},
    {sec:'阅读', p:'a', q:'What happened last month?', opts:['Her tablet broke and she lost some work.','She shared a game online.','She decided what to study.'], a:0, e:'第三段：Last month her tablet broke and she lost two weeks of work。'},
    {sec:'阅读', p:'a', q:'"more than 300 people have played it so far" — "so far" means', opts:['very far away','until now','in the future'], a:1, e:'so far = 到目前为止，现在完成时的信号词。'},
  ]
};
