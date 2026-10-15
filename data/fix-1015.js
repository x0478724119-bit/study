window.SET = {
  title: '订正：10-15 造句',
  intro: '专练你昨天造句错的地方：<b>单复数</b>和<b>句首大写</b>。填空要写完整的单词。',
  sections: ['单复数', '大写'],
  qs: [
    {sec:'单复数', t:'fill', q:'This game has ten ______ (level).', a:['levels'], e:'ten 是复数，后面的名词要加 s：ten levels。'},
    {sec:'单复数', t:'fill', q:'I like the characters because ______ are beautiful.（填代词）', a:['they'], e:'characters 是复数，指它们要用 they，不能用 she。'},
    {sec:'单复数', t:'fill', q:'I like this character because ______ is brave.（填代词，这个角色是女生）', a:['she'], e:'this character 是单数，女角色用 she，后面配 is。'},
    {sec:'单复数', t:'fill', q:'There are three new ______ (feature) in the update.', a:['features'], e:'three 后面加复数 features。'},
    {sec:'单复数', t:'fill', q:'My cousin made two ______ (game) last year.', a:['games'], e:'two 后面加复数 games。'},
    {sec:'单复数', t:'fill', q:'The developers ______ (be) testing the game now.', a:['are'], e:'developers 是复数，用 are。'},
    {sec:'单复数', t:'fill', q:'Each level ______ (have) a new challenge.', a:['has'], e:'each + 单数名词，动词用单数 has。'},
    {sec:'大写', q:'哪一句写对了？', opts:["let's test the new game.","Let's test the new game.","Let's Test The New Game."], a:1, e:'只有句子的第一个字母大写：Let\'s。其他单词不用大写（人名、地名除外）。'}
  ]
};
