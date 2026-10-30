// 英语：A1 小测（等 5·3）、A2 提纲 + 前半篇（写作框，AI 0）、A3 1000 词终稿（写作框，AI 2 + 修改记录）
var ENG_PLAN =
  '<p>整篇文章的题目：<b>My Changing World</b>（我身边正在变化的世界）。从九上 8 个单元的话题里挑 <b>4 个</b>，每个话题写一个主体段：</p>' +
  '<div class="tscroll"><table class="t"><tr><th>单元</th><th>话题</th><th>可以写什么（只是例子）</th></tr>' +
  '<tr><td>U1</td><td>The Changing World</td><td>你的城市、你家这几年的变化</td></tr>' +
  '<tr><td>U2</td><td>Inspiring People</td><td>一个影响过你的人</td></tr>' +
  '<tr><td>U3</td><td>Smart Learning</td><td>你现在在家用网站和 AI 学习</td></tr>' +
  '<tr><td>U4</td><td>Our Memory</td><td>一段难忘的回忆、一张老照片</td></tr>' +
  '<tr><td>U5</td><td>Power of Ideas</td><td>一个改变生活的发明（手机、外卖 App……）</td></tr>' +
  '<tr><td>U6</td><td>Beyond Earth</td><td>中国的航天（嫦娥、空间站）</td></tr>' +
  '<tr><td>U7</td><td>Feel the Rhythm</td><td>你喜欢的音乐，以及听音乐的方式怎么变了</td></tr>' +
  '<tr><td>U8</td><td>More than a Game</td><td>你玩的游戏、体育比赛</td></tr></table></div>' +
  '<h3>每一段写什么</h3><div class="tscroll"><table class="t"><tr><th>段落</th><th>长度</th><th>要包含</th></tr>' +
  '<tr><td>Introduction 开头</td><td>100–120 词</td><td>① 一个吸引人的开头（一个问题，或者一个小场景）② 背景：为什么说世界在变 ③ 中心句：说出你要写的 4 个话题</td></tr>' +
  '<tr><td>Body 1–4 主体段</td><td>每段 180–200 词</td><td>① 主题句：这一段讲什么 ② 例子 1：你自己的经历 ③ 例子 2：你读到的文章或新闻（标 [1]）④ 解释：这个变化好不好、对你意味着什么 ⑤ 结尾句：回扣主题</td></tr>' +
  '<tr><td>Conclusion 结尾</td><td>100–120 词</td><td>① 换个说法重述中心句 ② 你从这 4 个变化里学到了什么 ③ 对未来的一句展望</td></tr></table></div>' +
  '<h3>⭐ 语法要求：把九上 8 个单元的语法都用上</h3>' +
  '<p>整篇文章里，每种语法至少用 <b>2 次</b>。用到的句子后面写上标记，比如 <code>[G1]</code>，姐姐打分的时候一眼就能看到。</p>' +
  '<div class="tscroll"><table class="t"><tr><th>标记</th><th>语法（单元）</th><th>例句</th></tr>' +
  '<tr><td>[G1]</td><td>现在完成时 vs 一般过去时（U1）</td><td>My town <i>has changed</i> a lot since I <i>was</i> born.</td></tr>' +
  '<tr><td>[G2]</td><td>It is + 形容词 + to do / It is … that …（U2）</td><td><i>It is</i> hard <i>to</i> imagine life without phones.</td></tr>' +
  '<tr><td>[G3]</td><td>宾语从句 that / if / whether（U3）</td><td>I wonder <i>whether</i> AI will replace teachers.</td></tr>' +
  '<tr><td>[G4]</td><td>宾语从句 + 疑问词（U4）</td><td>I still remember <i>what</i> my grandma said to me.</td></tr>' +
  '<tr><td>[G5]</td><td>被动语态：一般现在 / 一般过去（U5）</td><td>The phone <i>was invented</i> in 1876.</td></tr>' +
  '<tr><td>[G6]</td><td>被动语态：一般将来（U6）</td><td>More astronauts <i>will be sent</i> to the Moon.</td></tr>' +
  '<tr><td>[G7]</td><td>定语从句 that / which / who（U7）</td><td>She is a singer <i>who</i> writes her own songs.</td></tr>' +
  '<tr><td>[G8]</td><td>主谓一致（U8）</td><td><i>Each</i> of my friends <i>has</i> a phone. / <i>The number of</i> players <i>is</i> growing.</td></tr></table></div>' +
  '<div class="tip"><b>读什么：</b>每个话题找至少 1 篇英文文章读（BBC Learning English、China Daily、21st Century 英文报都可以），把用到的信息标 [1] [2]，最后列参考资料。读不懂的词可以查词典。</div>';

W.reg({id: 'ENG-A1', course: 'ENG', n: 1, no: 'A1', title: '九上英语小测', weight: 15, week: 3, ai: 0, submit: 'quiz', ready: false,
  intro: 'U1–U8 的语法和阅读，中考题型，自动打分。'});

W.reg({id: 'ENG-A2', course: 'ENG', n: 2, no: 'A2', title: 'My Changing World：提纲 + 前半篇', weight: 20, week: 6, ai: 0, submit: 'write',
  time: '4–5 小时（可以分几天）', length: '至少 450 词（不算提纲）',
  intro: '这是一篇 1000 词文章的前半部分：先写提纲，再写开头和前两个主体段。A4 会在这个基础上写完、改好。',
  dataTitle: '文章怎么写', data: ENG_PLAN,
  how: [
    '全部在下面的写作框里打字（AI 0：不能用 AI，不能用翻译软件，可以查词典）。',
    '先写 <b>Plan</b>：中心句 + 4 个主体段的主题句 + 每段打算用的两个例子（可以用中文写提纲）。',
    '再写 <b>Introduction、Body 1、Body 2</b>，用英文。',
    '用到的语法句子后面标 [G1]…[G8]，这一半至少用到 5 种。',
    '最后写 References：读过的英文文章，按 [1] [2] 列出来。'
  ],
  tasks: [
    {q: 'Q1', pts: 15, title: 'Plan 提纲', text: '中心句、4 个主题句、每段两个例子。', full: '4 个话题来自不同单元；每段都有"自己的经历 + 读到的文章"两个例子。'},
    {q: 'Q2', pts: 20, title: 'Introduction', text: '100–120 词，三样东西：开头、背景、中心句。', full: '三样都有；中心句里能看出 4 个话题。'},
    {q: 'Q3', pts: 40, title: 'Body 1 和 Body 2', text: '每段 180–200 词，按"主题句 → 自己的例子 → 文章里的例子 [1] → 解释 → 结尾句"写。', full: '每段五样都有；文章里的信息标了来源；例子具体（有时间、地点、数字），不是空话。'},
    {q: 'Q4', pts: 15, title: '语法标记', text: '这一半至少用到 5 种 [G] 语法，每个标记都用对。', full: '至少 5 种，标的句子语法正确。'},
    {q: 'Q5', pts: 10, title: 'References', text: '至少 2 篇英文文章。', full: '格式：网站名.《标题》.链接（查看日期）。'}
  ],
  refs: {min: 2},
  write: {unit: '词', min: 450, placeholder: 'Plan\n中心句：\nBody 1（U?）：\n\nIntroduction\n\nBody 1\n\nBody 2\n\nReferences\n[1]'}
});

W.reg({id: 'ENG-A4', course: 'ENG', n: 4, no: 'A4', title: 'My Changing World：1000 词终稿', weight: 40, week: 9, ai: 2, submit: 'write',
  time: '6–8 小时（可以分几天）', length: '900–1100 词',
  intro: '把 A2 改好，写完 Body 3、Body 4 和 Conclusion，变成一篇完整的 1000 词左右的文章。这次可以用 DeepSeek 帮你找错（AI 2），但每一处都要你自己改，并写进修改记录。',
  dataTitle: '文章怎么写（和 A2 一样）', data: ENG_PLAN,
  method: '<ol class="steps"><li>点写作框上面的按钮，把 A2 交过的内容放进来（删掉 Plan）。</li>' +
    '<li>写完 Body 3、Body 4、Conclusion。<b>先自己写完整篇</b>，这一步不用 AI。</li>' +
    '<li>开一个 DeepSeek 对话，一段一段发给它，只问：<i>"请指出这段英文里的语法和用词错误，用中文解释为什么错，不要帮我重写。"</i></li>' +
    '<li>看懂以后，<b>自己</b>在写作框里改。不要让它整段重写，也不要加它提的新内容。</li>' +
    '<li>挑 10 处你改过的地方，填在「修改记录」里：原来怎么写 → 改成什么 → 为什么。改过的句子后面标（AI 修改）。</li><li>文章最后写 References 和 AI 声明（对话链接 + 两三句说明）。</li>' +
    '<li>检查 8 种语法 [G1]–[G8] 是不是每种都用了 2 次。</li></ol>' +
    '<div class="tip"><b>为什么这样做：</b>大学写论文也是"自己写 → 别人挑错 → 自己改"。修改记录能看出你真的学到了什么，比一篇完美的文章更重要。</div>',
  methodTitle: '怎么用 AI 改（AI 2）',
  tasks: [
    {q: 'Q1', pts: 30, title: '结构和内容', text: '开头、4 个主体段、结尾都完整，每段按要求写。', full: '7 段齐全、长度合适；每个主体段有自己的经历和文章里的例子；结尾不是简单重复开头。'},
    {q: 'Q2', pts: 25, title: '语言', text: '语法和拼写正确，句子有长有短，段落之间有连接词（First, However, What is more…）。', full: '错误很少，不影响理解；连接词用得自然。'},
    {q: 'Q3', pts: 20, title: '语法标记', text: '[G1]–[G8] 每种至少 2 次。', full: '16 处以上，全部用对。'},
    {q: 'Q4', pts: 15, title: '修改记录', text: '10 处修改：原句 → 改后 → 原因（用中文写原因）。', full: '10 处都写了；原因说得清楚，能看出你懂了（比如"主语 everyone 是单数，所以动词加 s"）。'},
    {q: 'Q5', pts: 10, title: 'References 和 AI 声明', text: '文章最后：至少 3 篇英文文章；AI 声明（DeepSeek 对话链接 + 说明）。', full: '格式正确；对话里能看到你只让它挑错，没有让它重写。'}
  ],
  refs: {min: 3, nonAI: 3},
  extraField: {label: '修改记录（10 处）', small: '每行一处：原句 → 改后 → 为什么'},
  write: {unit: '词', min: 900, fromPrev: 'A2', fromPrevId: 'ENG-A2', placeholder: 'My Changing World\n\nIntroduction ……\n\nReferences\n[1]\n\nAI 声明\nDeepSeek 对话链接：\n用它做了什么：'}
});

// A3 英文读书报告（2026-10-30 加）
W.reg({id: 'ENG-A3', course: 'ENG', n: 3, no: 'A3', title: '英文读书报告', weight: 25, week: 7, ai: 0, submit: 'write',
  time: '6 小时（读书 4 小时 + 写 2 小时）', length: '至少 450 词',
  intro: '读一本简写版的英文书（分级读物），用英文写一份读书报告。读书可以分几天，每天读一两章。',
  dataTitle: '选一本书',
  data: '<p>推荐《书虫》（Oxford Bookworms）第 2–3 级，比如：</p><ul><li><i>The Railway Children</i>（铁路边的孩子们）</li><li><i>Sherlock Holmes Short Stories</i>（福尔摩斯短篇）</li><li><i>The Secret Garden</i>（秘密花园）</li><li><i>Alice\'s Adventures in Wonderland</i>（爱丽丝漫游奇境）</li></ul>' +
    '<div class="tip"><b>去哪找：</b>淘宝、京东搜"书虫 牛津英汉双语读物 2级"（外研社出的，一本十几块钱，买一本就够）；也可以先在微信读书里搜一下书名。姐姐可以帮你买。</div><p class="note">纸书、电子书都可以。读的时候不用每个词都查，看懂故事就行；遇到喜欢的句子抄下来，写报告时要用。</p>',
  method: '<div class="tscroll"><table class="t"><tr><th>部分</th><th>长度</th><th>要包含</th></tr>' +
    '<tr><td>Book information</td><td>—</td><td>书名、作者、级别、你读了几天</td></tr>' +
    '<tr><td>Summary 故事梗概</td><td>120–150 词</td><td>主要人物、发生在哪里、发生了什么、结局（用一般过去时）</td></tr>' +
    '<tr><td>The main character 主要人物</td><td>100 词</td><td>他 / 她是什么样的人，用书里的一件事证明</td></tr>' +
    '<tr><td>My favourite part 最喜欢的部分</td><td>100 词</td><td>引用书里的一句原话（加引号、写页码），说为什么喜欢</td></tr>' +
    '<tr><td>My opinion 我的看法</td><td>100 词</td><td>推荐不推荐、推荐给谁、你学到了什么</td></tr>' +
    '<tr><td>New words 生词表</td><td>10 个</td><td>单词 + 中文 + 书里的原句</td></tr></table></div>',
  methodTitle: '读书报告怎么写',
  how: ['在下面的写作框里用英文写（生词表的中文意思可以用中文）。', 'AI 0：不能用 AI 和翻译软件，可以查词典。', '最后写 References：书名、作者、出版社。'],
  tasks: [
    {q: 'Q1', pts: 25, title: 'Summary', text: '120–150 词的故事梗概。', full: '人物、地点、经过、结局都有；用自己的话；时态正确。'},
    {q: 'Q2', pts: 20, title: 'Main character', text: '人物分析 + 一件事做证据。', full: '形容词准确，证据具体。'},
    {q: 'Q3', pts: 20, title: 'Favourite part', text: '引用一句原话并解释。', full: '引号、页码齐全；理由真实。'},
    {q: 'Q4', pts: 20, title: 'Opinion', text: '推荐与否 + 理由 + 收获。', full: '有明确态度和两个理由。'},
    {q: 'Q5', pts: 15, title: 'New words + 语言', text: '10 个生词；全文语法和拼写。', full: '生词都配原句；错误少。'}
  ],
  refs: {min: 1},
  write: {unit: '词', min: 450, placeholder: 'Book information\nTitle:\nAuthor:\n\nSummary\n\nThe main character\n\nMy favourite part\n\nMy opinion\n\nNew words\n1.\n\nReferences\n[1]'}
});
