window.SET = {
  title: '英语摸底测试',
  mode: 'diag',
  intro: '大约 30–40 分钟。<b>不会的可以猜，但不要查、不要问 AI</b>，这次只是看看你现在的水平，考多少都没关系。',
  sections: ['词汇', '语法', '阅读'],
  passages: {
    garden: `<b>Mia's Little Garden</b><br><br>
Mia lived with her parents in a small flat in the middle of a busy city. There was no garden, only a narrow balcony. One spring, she decided to grow tomatoes there.<br><br>
She bought some seeds, planted them in pots and watered them three times a day. She wanted them to grow fast. But after two weeks, the young plants <b>wilted</b>: their leaves hung down, and some turned yellow.<br><br>
Her neighbour, Mr Chen, used to work as a gardener before he retired. When he saw the plants, he smiled. "You love them too much," he said. "Tomatoes need lots of sunshine, but not so much water." Mia moved the pots to the sunniest corner and watered them only when the soil felt dry.<br><br>
By the end of summer, she had more tomatoes than her family could eat, so she gave the rest to her neighbours. Soon, other people in the building wanted to try too. Mia and Mr Chen started a "Balcony Garden Club". Now twelve people meet every Saturday to share seeds and advice.`
  },
  qs: [
    // 词汇
    {sec:'词汇', q:'It is very ___ today. Let\'s go to the beach!', opts:['rainy','sunny','snowy'], a:1, e:'去海边，天气应该是晴天 sunny。'},
    {sec:'词汇', q:'The opposite of "ancient" is ___.', opts:['old','famous','modern'], a:2, e:'ancient 古老的 ↔ modern 现代的。'},
    {sec:'词汇', q:'She was too ___ to speak in front of the class.', opts:['shy','loud','brave'], a:0, e:'too…to… 太……而不能……，害羞 shy 才说不出话。'},
    {sec:'词汇', q:'"improve" 的意思是：', opts:['证明','改善','移动'], a:1, e:'improve 改善、提高；证明是 prove，移动是 move。'},
    {sec:'词汇', q:'We need to ___ a decision before Friday.', opts:['do','have','make'], a:2, e:'固定搭配：make a decision 做决定。'},
    {sec:'词汇', q:'A person who visits a place for fun is a ___.', opts:['tourist','driver','patient'], a:0, e:'tourist 游客；driver 司机；patient 病人。'},
    {sec:'词汇', q:'"environment" 的意思是：', opts:['设备','实验','环境'], a:2, e:'environment 环境；设备 equipment；实验 experiment。'},
    {sec:'词汇', q:'This phone is too ___. I can\'t afford it.', opts:['expensive','cheap','light'], a:0, e:'can\'t afford 买不起，说明太贵 expensive。'},
    // 语法
    {sec:'语法', q:'I\'m looking forward ___ you again.', opts:['to see','to seeing','see'], a:1, e:'look forward to 里的 to 是介词，后面接动名词 seeing。'},
    {sec:'语法', q:'If it ___ tomorrow, we will stay at home.', opts:['rains','will rain','rained'], a:0, e:'if 引导的条件句"主将从现"：主句用将来时，从句用一般现在时。'},
    {sec:'语法', q:'She has lived here ___ 2015.', opts:['for','since','from'], a:1, e:'现在完成时 + 时间点用 since；+ 一段时间用 for。'},
    {sec:'语法', q:'This book ___ by millions of people.', opts:['has read','have read','has been read'], a:2, e:'书是"被读"，用被动语态；现在完成时的被动是 has been done。'},
    {sec:'语法', q:'This is the town ___ I was born.', opts:['which','where','what'], a:1, e:'先行词是地点 town，在从句里作地点状语，用 where。'},
    {sec:'语法', q:'He asked me where ___.', opts:['did I live','do I live','I lived'], a:2, e:'宾语从句要用陈述语序（主语在前），而且跟主句时态一致，用 I lived。'},
    {sec:'语法', q:'Neither Tom nor his sisters ___ at home now.', opts:['is','are','was'], a:1, e:'neither…nor… 遵循"就近原则"，离谓语近的是 sisters（复数），用 are。'},
    {sec:'语法', t:'fill', q:'填空：She is good at ______ (swim).', a:['swimming'], e:'be good at 后面接动名词，swim 要双写 m 再加 ing：swimming。'},
    // 阅读
    {sec:'阅读', p:'garden', q:'Why did Mia grow tomatoes on her balcony?', opts:['Her parents asked her to.','Her flat had no garden.','Mr Chen gave her the seeds.'], a:1, e:'第一段：There was no garden, only a narrow balcony.'},
    {sec:'阅读', p:'garden', q:'What went wrong the first time?', opts:['She gave the plants too much water.','The plants got too much sunshine.','She forgot to water them.'], a:0, e:'她一天浇三次水，Mr Chen 说 "not so much water"。'},
    {sec:'阅读', p:'garden', q:'The word "wilted" most likely means ___.', opts:['grew very tall','became weak and dropped down','produced fruit'], a:1, e:'后面解释了：叶子垂下来、有的发黄，说明植物蔫了。'},
    {sec:'阅读', p:'garden', q:'"You love them too much." What did Mr Chen mean?', opts:['Mia spent too much money.','Mia should give the plants away.','Mia was watering the plants too often.'], a:2, e:'他接着说番茄不需要那么多水，"爱得太多"指的是浇水太勤。'},
    {sec:'阅读', p:'garden', t:'fill', q:'How many people meet every Saturday now? 填数字', a:['12','twelve'], e:'最后一句：Now twelve people meet every Saturday.'},
    {sec:'阅读', p:'garden', q:'What is the best title for the story?', opts:['How to Cook Tomatoes','A Small Garden Brings People Together','Why City Life Is Boring'], a:1, e:'故事从一个人种番茄，发展到整栋楼的人一起组了俱乐部。'},
  ]
};
