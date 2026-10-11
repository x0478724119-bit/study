window.SET = {
  title: '阅读训练 1 + 语法复习',
  intro: '先读文章做阅读题，<b>每题都回原文找依据</b>（摸底时阅读错在"没回原文"）。后面 4 题复习前两天的语法。错题重做到 80%。',
  sections: ['阅读', '语法复习'],
  passages: {
    a: `<b>The Boy Who Built a Library</b><br><br>
When Kenji was twelve, the only library in his village closed because there was no money to repair the roof. Kenji loved books, so he was very sad.<br><br>
Instead of giving up, he put a small wooden box outside his house with a sign: "Take a book, leave a book." At first, only his friends used it. But soon, people from other villages began to come. Some of them brought old books from their homes.<br><br>
Two years later, the box had become three big shelves, and a local company offered to pay for a new roof for the old library. Today, Kenji's "little library" is a real one again, and he works there every Saturday as a volunteer.<br><br>
"I didn't plan to change anything," Kenji says. "I just didn't want to stop reading."`
  },
  passagesCn: {
    a: `<b>建了一座图书馆的男孩</b><br><br>健二十二岁那年，村里唯一的图书馆因为没钱修屋顶关门了。健二很爱看书，所以特别难过。<br><br>他没有放弃，而是在家门口放了一个小木箱，上面写着："拿走一本书，留下一本书。"一开始只有他的朋友用。但很快，别的村子的人也来了，有些人还从家里带来了旧书。<br><br>两年后，小木箱变成了三个大书架，一家本地公司提出出钱给旧图书馆修新屋顶。现在，健二的"小图书馆"又变回了真正的图书馆，他每个星期六都在那里当志愿者。<br><br>"我没打算改变什么，"健二说，"我只是不想停止读书。"`
  },
  qs: [
    {sec:'阅读', p:'a', q:'Why did the library close?', opts:['Nobody wanted to read.','There was no money to repair the roof.','Kenji moved to another village.'], a:1, e:'第一段：closed because there was no money to repair the roof。'},
    {sec:'阅读', p:'a', q:'What did Kenji put outside his house?', opts:['A small wooden box of books','A big shelf','A new roof'], a:0, e:'第二段：a small wooden box ... "Take a book, leave a book."'},
    {sec:'阅读', p:'a', q:'Who used the box at first?', opts:['People from other villages','A local company','Only his friends'], a:2, e:'第二段：At first, only his friends used it.'},
    {sec:'阅读', p:'a', q:'The word "volunteer" probably means someone who ___.', opts:['works without being paid','owns a company','repairs roofs'], a:0, e:'他每周六去帮忙，是志愿者：自愿、不拿钱工作的人。'},
    {sec:'阅读', p:'a', t:'fill', q:'How many years later did the box become three shelves? 填数字', a:['2','two'], e:'第三段：Two years later。'},
    {sec:'阅读', p:'a', q:'What can we learn from the story?', opts:['Small actions can make a big difference.','Libraries are not important.','Old books are useless.'], a:0, e:'一个小木箱最后让图书馆重新开门：小行动带来大改变。'},
    {sec:'语法复习', q:'I am looking forward to ___ the new library.', opts:['visit','visiting','visited'], a:1, e:'look forward to + doing。'},
    {sec:'语法复习', q:'If it ___ tomorrow, we will read at home.', opts:['rains','will rain','rained'], a:0, e:'主将从现。'},
    {sec:'语法复习', q:'The roof ___ last year.', opts:['repaired','was repaired','has repaired'], a:1, e:'屋顶"被修"，过去时被动：was repaired。'},
    {sec:'语法复习', q:'Do you know where ___?', opts:['does Kenji work','Kenji works','is Kenji work'], a:1, e:'宾语从句用陈述语序。'},
  ]
};
