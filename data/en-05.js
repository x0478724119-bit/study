window.SET = {
  title: '语法 + 阅读：定语从句',
  intro: '<a class="btn2 light" href="book.html?d=2026-10-16#e2">📖 先读手册：定语从句</a><br>前 8 题语法，后面阅读（文章里有很多定语从句，找找看）。<b>阅读每题都回原文找依据</b>。错题重做到 80%。',
  sections: ['语法', '阅读'],
  passages: {
    a: `<b>Small Flats, Big Ideas</b><br><br>
In cities like Hong Kong, many people live in flats that are smaller than 30 square metres. For interior designers, this is a challenge which they enjoy.<br><br>
Mia Chan is a designer who specialises in small homes. Her most famous project was a 25-square-metre flat where a family of three lived. "The parents told me they had no room for their son's desk," she says. Mia designed a bed which folds up into the wall during the day. Under the window, she built a long table that works as both a desk and a dining table.<br><br>
"The secret is to use the height of a room," Mia explains. She puts shelves high on the walls and chooses furniture whose legs are thin, so the floor looks bigger. Mirrors and light colours also help.<br><br>
The family were delighted. "Our son, whose grades were falling, now has a proper place to study," his mother said. "And the flat feels twice as big."`
  },
  passagesCn: {
    a: `<b>小房子，大想法</b><br><br>在香港这样的城市，很多人住在不到 30 平方米的房子里。对室内设计师来说，这是他们喜欢的挑战。<br><br>陈米娅是一位专做小户型的设计师。她最有名的项目是一套 25 平方米、住着一家三口的房子。"父母跟我说，他们没地方给儿子放书桌，"她说。米娅设计了一张白天可以折叠收进墙里的床。在窗户下面，她做了一张长桌，既是书桌又是餐桌。<br><br>"秘诀是利用房间的高度，"米娅解释说。她把架子装在墙的高处，选腿很细的家具，这样地板看起来更大。镜子和浅色也有帮助。<br><br>这家人高兴极了。"我们儿子的成绩之前一直在下滑，现在他终于有了一个像样的学习的地方，"他妈妈说，"而且房子感觉大了一倍。"`
  },
  qs: [
    {sec:'语法', q:'The girl ___ is singing is my sister.', opts:['who','which','whose'], a:0, e:'先行词 girl 是人，从句缺主语 → who。'},
    {sec:'语法', q:'This is the book ___ I bought yesterday.', opts:['who','which','where'], a:1, e:'先行词 book 是物，bought 缺宾语 → which / that。'},
    {sec:'语法', q:'I have a friend ___ father is a pilot.', opts:['who','whose','which'], a:1, e:'"他的爸爸" → whose。'},
    {sec:'语法', q:'This is the town ___ I was born.', opts:['which','where','who'], a:1, e:'I was born 完整，不缺主语宾语，表示地点 → where。'},
    {sec:'语法', q:'Is this the park ___ you visited last week?', opts:['where','that','who'], a:1, e:'陷阱题！visited 后面缺宾语（visited 什么？）→ that / which，不能用 where。'},
    {sec:'语法', q:'The phone ___ is on the desk is mine.', opts:['that','who','what'], a:0, e:'先行词是物，缺主语 → that / which。what 不能引导定语从句。'},
    {sec:'语法', t:'fill', q:'I know a boy. He can play five instruments.<br>合成一句：I know a boy ___ can play five instruments.', a:['who','that'], e:'先行词 boy 是人，从句缺主语 → who（或 that）。'},
    {sec:'语法', q:'哪一句是对的？', opts:['The man who lives next door is a doctor.','The man who he lives next door is a doctor.','The man which lives next door is a doctor.'], a:0, e:'第二句重复了主语 he；第三句人不能用 which。'},
    {sec:'阅读', p:'a', q:'What kind of homes does Mia specialise in?', opts:['Big houses','Small homes','Old buildings'], a:1, e:'第二段：a designer who specialises in small homes。'},
    {sec:'阅读', p:'a', t:'fill', q:'How many square metres was the family\'s flat? 填数字', a:['25'], e:'第二段：a 25-square-metre flat。30 是第一段说的"很多人的房子小于 30 平方米"，别看错。'},
    {sec:'阅读', p:'a', q:'What does the bed do during the day?', opts:['It becomes a sofa.','It folds up into the wall.','It moves under the window.'], a:1, e:'第二段：a bed which folds up into the wall during the day。'},
    {sec:'阅读', p:'a', q:'Why does Mia choose furniture with thin legs?', opts:['It is cheaper.','It makes the floor look bigger.','It is easier to move.'], a:1, e:'第三段：furniture whose legs are thin, so the floor looks bigger。'},
    {sec:'阅读', p:'a', q:'Which idea is NOT mentioned in the passage?', opts:['Using mirrors','Using light colours','Using dark carpets'], a:2, e:'第三段提到了 mirrors 和 light colours，没有提深色地毯。NOT 题要一个一个回原文排除。'},
  ]
};
