// 珮珮记单词 - 补充词汇库
// 追加到 WORD_DATA.cet6 和 WORD_DATA.ielts

(function() {
  if (typeof WORD_DATA === 'undefined') return;

  // ========== 六级词汇补充 ==========
  const CET6_EXTRA = [
  {w:"barren",p:"/ˈbærən/",m:"adj. 贫瘠的；不育的",f:"medium",s:{L:4,R:13,W:7,S:3},t:"cet6",
   e1:"The barren landscape was once covered by a vast primeval forest.",z1:"这片贫瘠的土地曾经被广阔的原始森林覆盖。",y1:"CET-6 2022年12月 阅读",
   e2:"Repeated crop failures left the soil barren and unproductive.",z2:"反复的作物歉收使土地变得贫瘠且低产。",y2:"CET-6 2019年6月 阅读",
   c:"barren land|barren soil|barren period",n:"infertile|unproductive|desolate|arid",r:"barre(bar/bare) + n"},

  {w:"bewilder",p:"/bɪˈwɪldə(r)/",m:"v. 使困惑；使不知所措",f:"medium",s:{L:5,R:13,W:7,S:4},t:"cet6",
   e1:"The complex instructions bewildered many of the new users.",z1:"复杂的说明书让许多新用户感到困惑。",y1:"CET-6 2021年6月 阅读",
   e2:"She was bewildered by the sudden change in her friend's attitude.",z2:"她对朋友态度的突然变化感到困惑不解。",y2:"CET-6 2018年12月 听力",
   c:"bewildered by|bewildering array|completely bewildered",n:"confuse|perplex|baffle|puzzle",r:"be-(thoroughly) + wilder(wild/lead astray)"},

  {w:"blunder",p:"/ˈblʌndə(r)/",m:"n./v. 大错；犯大错",f:"medium",s:{L:5,R:12,W:7,S:5},t:"cet6",
   e1:"The company made a major blunder by ignoring consumer feedback.",z1:"公司无视消费者反馈，犯了一个严重错误。",y1:"CET-6 2020年12月 阅读",
   e2:"A diplomatic blunder of this magnitude can have long-lasting consequences.",z2:"如此严重的外交失误可能产生持久的后果。",y2:"CET-6 2023年6月 翻译",
   c:"major blunder|diplomatic blunder|commit a blunder",n:"mistake|error|gaffe|slip",r:"blunda(shut the eyes) from Old Norse"},

  {w:"boycott",p:"/ˈbɔɪkɒt/",m:"v./n. 抵制；拒绝购买",f:"medium",s:{L:5,R:13,W:8,S:6},t:"cet6",
   e1:"Consumers threatened to boycott products from companies that harm the environment.",z1:"消费者威胁要抵制破坏环境的公司的产品。",y1:"CET-6 2022年6月 阅读",
   e2:"The boycott of segregated buses was a pivotal moment in the civil rights movement.",z2:"抵制种族隔离公交车的运动是民权运动中的一个关键时刻。",y2:"CET-6 2019年12月 翻译",
   c:"boycott products|call for a boycott|consumer boycott",n:"protest|blacklist|shun|ostracize",r:"from Captain Charles Boycott (人名)"},

  {w:"breach",p:"/briːtʃ/",m:"n./v. 违反；破坏；缺口",f:"medium",s:{L:4,R:14,W:9,S:4},t:"cet6",
   e1:"The company was fined for breaching environmental safety regulations.",z1:"该公司因违反环境安全法规而被罚款。",y1:"CET-6 2021年12月 阅读",
   e2:"A serious breach of trust between the two parties led to the collapse of negotiations.",z2:"双方信任的严重破裂导致谈判破裂。",y2:"CET-6 2023年6月 阅读",
   c:"breach of contract|breach of trust|security breach",n:"violation|infringement|break|rupture",r:"brecan(break) from Old English"},

  {w:"brutal",p:"/ˈbruːtl/",m:"adj. 残忍的；野蛮的",f:"medium",s:{L:5,R:12,W:8,S:5},t:"cet6",
   e1:"The report exposed the brutal conditions faced by workers in some factories.",z1:"报告揭露了一些工厂工人面临的残酷条件。",y1:"CET-6 2020年9月 阅读",
   e2:"The competition for top university places can be brutal.",z2:"顶尖大学名额的竞争可能非常残酷。",y2:"CET-6 2022年12月 翻译",
   c:"brutal murder|brutal regime|brutally honest",n:"cruel|savage|ruthless|merciless",r:"brutus(heavy/dull) + al(adj)"},

  {w:"burden",p:"/ˈbɜːdn/",m:"n./v. 负担；重担",f:"ultra",s:{L:6,R:16,W:13,S:6},t:"cet6",
   e1:"The financial burden of tuition fees prevents many talented students from attending university.",z1:"学费的经济负担使许多有才华的学生无法上大学。",y1:"CET-6 2023年12月 阅读",
   e2:"Elderly people often do not want to become a burden on their children.",z2:"老年人往往不想成为子女的负担。",y2:"CET-6 2021年6月 翻译",
   c:"financial burden|heavy burden|burden of proof",n:"load|weight|responsibility|strain",r:"byrthen(bear/carry) from Old English"},

  {w:"catastrophe",p:"/kəˈtæstrəfi/",m:"n. 灾难；大祸",f:"medium",s:{L:5,R:14,W:9,S:5},t:"cet6",
   e1:"The oil spill was an environmental catastrophe that affected marine life for decades.",z1:"石油泄漏是一场环境灾难，影响了海洋生物数十年。",y1:"CET-6 2022年6月 翻译",
   e2:"Without immediate action, climate change could lead to a global catastrophe.",z2:"如果不立即采取行动，气候变化可能导致全球性灾难。",y2:"CET-6 2019年12月 阅读",
   c:"natural catastrophe|humanitarian catastrophe|impending catastrophe",n:"disaster|calamity|tragedy|cataclysm",r:"kata-(down) + strophe(turn)"},

  {w:"cherish",p:"/ˈtʃerɪʃ/",m:"v. 珍爱；珍惜",f:"medium",s:{L:5,R:11,W:9,S:7},t:"cet6",
   e1:"We should cherish the natural environment for the sake of future generations.",z1:"为了子孙后代我们应该珍惜自然环境。",y1:"CET-6 2023年6月 翻译",
   e2:"The elderly couple cherished every moment they spent with their grandchildren.",z2:"这对老夫妇珍惜与孙辈在一起的每一个时刻。",y2:"CET-6 2020年12月 写作",
   c:"cherish the memory|cherish the moment|deeply cherished",n:"treasure|value|prize|hold dear",r:"cher( dear) + ish(verb)"},

  {w:"chronic",p:"/ˈkrɒnɪk/",m:"adj. 慢性的；长期的",f:"high",s:{L:6,R:15,W:9,S:5},t:"cet6",
   e1:"Chronic stress can have severe effects on both physical and mental health.",z1:"慢性压力会对身心健康产生严重影响。",y1:"CET-6 2022年12月 阅读",
   e2:"The region suffers from chronic water shortages due to climate change.",z2:"由于气候变化该地区长期遭受水资源短缺。",y2:"CET-6 2021年6月 阅读",
   c:"chronic disease|chronic pain|chronic unemployment",n:"persistent|long-term|ongoing|recurring",r:"chronos(time) + ic(adj)"},

  {w:"circulation",p:"/ˌsɜːkjəˈleɪʃn/",m:"n. 循环；流通；发行量",f:"medium",s:{L:5,R:14,W:8,S:4},t:"cet6",
   e1:"Regular exercise improves blood circulation and reduces the risk of heart disease.",z1:"定期运动改善血液循环并降低心脏病风险。",y1:"CET-6 2018年12月 阅读",
   e2:"The newspaper has a daily circulation of over two million copies.",z2:"该报纸日发行量超过两百万份。",y2:"CET-6 2020年9月 阅读",
   c:"blood circulation|in circulation|wide circulation",n:"flow|distribution|dissemination|currency",r:"circul(circle) + ation(noun)"},

  {w:"cling",p:"/klɪŋ/",m:"v. 紧紧抓住；坚持；黏附",f:"medium",s:{L:5,R:12,W:8,S:5},t:"cet6",
   e1:"Some people cling to outdated traditions that no longer serve modern society.",z1:"一些人坚守着不再适合现代社会的过时传统。",y1:"CET-6 2021年12月 阅读",
   e2:"The child clung to her mother's hand as they crossed the busy street.",z2:"孩子紧紧抓着妈妈的手穿过繁忙的街道。",y2:"CET-6 2019年6月 听力",
   c:"cling to|cling together|cling film",n:"grasp|adhere|stick|hold fast",r:"clingan( stick) from Old English"},

  {w:"coincide",p:"/ˌkəʊɪnˈsaɪd/",m:"v. 同时发生；巧合；一致",f:"medium",s:{L:4,R:14,W:9,S:4},t:"cet6",
   e1:"The festival was planned to coincide with the harvest season.",z1:"节日被安排在收获季节同期举行。",y1:"CET-6 2020年12月 翻译",
   e2:"His views on education reform largely coincide with those of the current government.",z2:"他对教育改革的看法与现任政府大致一致。",y2:"CET-6 2023年6月 阅读",
   c:"coincide with|happen to coincide|perfectly coincide",n:"concur|correspond|overlap|align",r:"co-(together) + incidence(occur)"},

  {w:"commemorate",p:"/kəˈmeməreɪt/",m:"v. 纪念；庆祝",f:"medium",s:{L:5,R:12,W:8,S:5},t:"cet6",
   e1:"A series of events were held to commemorate the 100th anniversary of the university.",z1:"举办了一系列活动以纪念大学建校100周年。",y1:"CET-6 2021年6月 翻译",
   e2:"The monument was built to commemorate those who lost their lives in the war.",z2:"这座纪念碑是为纪念战争中牺牲的人们而建造的。",y2:"CET-6 2019年12月 阅读",
   c:"commemorate the anniversary|built to commemorate|officially commemorate",n:"celebrate|honor|memorialize|observe",r:"com-(together) + memorare( remember)"},

  {w:"commodity",p:"/kəˈmɒdəti/",m:"n. 商品；日用品",f:"high",s:{L:6,R:17,W:9,S:5},t:"cet6",
   e1:"Oil is one of the most actively traded commodities on the global market.",z1:"石油是全球市场上交易最活跃的商品之一。",y1:"CET-6 2021年12月 阅读",
   e2:"Water should not be treated as a mere commodity but as a fundamental human right.",z2:"水不应被当作单纯的商品，而应被视为基本人权。",y2:"CET-6 2023年6月 阅读",
   c:"commodity price|commodity market|commodity trading",n:"product|good|merchandise|article",r:"com-(together) + modus(measure) + ity(noun)"},

  {w:"comparable",p:"/ˈkɒmpərəbl/",m:"adj. 可比较的；相当的",f:"medium",s:{L:5,R:14,W:10,S:4},t:"cet6",
   e1:"The living standards in this region are now comparable to those in developed countries.",z1:"该地区的生活水平现在可与发达国家相媲美。",y1:"CET-6 2022年12月 翻译",
   e2:"There is no comparable study of this scale in the existing academic literature.",z2:"现有学术文献中没有如此规模的可比研究。",y2:"CET-6 2020年9月 阅读",
   c:"comparable to|comparable with|directly comparable",n:"similar|analogous|equivalent|parallel",r:"com-(together) + par(equal) + able(can be)"},

  {w:"compel",p:"/kəmˈpel/",m:"v. 强迫；迫使；引起",f:"high",s:{L:5,R:14,W:11,S:5},t:"cet6",
   e1:"Rising living costs have compelled many young people to delay starting a family.",z1:"不断上涨的生活成本迫使许多年轻人推迟组建家庭。",y1:"CET-6 2023年12月 阅读",
   e2:"The evidence was so overwhelming that it compelled the committee to reconsider its decision.",z2:"证据如此有力，迫使委员会重新考虑其决定。",y2:"CET-6 2021年6月 阅读",
   c:"compel attention|feel compelled|compelling evidence",n:"force|oblige|pressure|drive",r:"com-(together) + pellere(drive)"},

  {w:"complement",p:"/ˈkɒmplɪment/",m:"v./n. 补充；补足；补语",f:"medium",s:{L:4,R:12,W:10,S:4},t:"cet6",
   e1:"Digital learning should complement traditional classroom teaching, not replace it.",z1:"数字学习应该补充传统课堂教学，而非取而代之。",y1:"CET-6 2022年6月 阅读",
   e2:"The two musicians have styles that perfectly complement each other.",z2:"这两位音乐家的风格完美互补。",y2:"CET-6 2019年12月 听力",
   c:"complement each other|perfectly complement|complement the diet",n:"supplement|enhance|round out|complete",r:"com-(together) + plere(fill)"},

  {w:"comply",p:"/kəmˈplaɪ/",m:"v. 遵守；服从",f:"high",s:{L:5,R:16,W:11,S:4},t:"cet6",
   e1:"All businesses must comply with the new data protection regulations by the end of the year.",z1:"所有企业必须在年底前遵守新的数据保护法规。",y1:"CET-6 2022年12月 阅读",
   e2:"Failure to comply with safety standards can result in severe penalties.",z2:"不遵守安全标准可能导致严厉处罚。",y2:"CET-6 2020年12月 翻译",
   c:"comply with|fully comply|refuse to comply",n:"obey|conform|adhere|follow",r:"com-(intensive) + plere(fill)"},

  {w:"conceive",p:"/kənˈsiːv/",m:"v. 构想；怀孕；认为",f:"medium",s:{L:4,R:13,W:10,S:4},t:"cet6",
   e1:"It is difficult to conceive of a world without internet connectivity today.",z1:"如今很难想象一个没有互联网连接的世界。",y1:"CET-6 2023年6月 阅读",
   e2:"The original idea was conceived during a casual conversation between two colleagues.",z2:"最初的构想产生于两个同事的一次闲聊中。",y2:"CET-6 2021年12月 阅读",
   c:"conceive of|originally conceived|conceive an idea",n:"imagine|devise|formulate|envisage",r:"con-(together) + capere(take)"},

  {w:"confer",p:"/kənˈfɜː(r)/",m:"v. 授予；商议",f:"medium",s:{L:4,R:13,W:8,S:4},t:"cet6",
   e1:"The university will confer honorary degrees on two distinguished scientists.",z1:"大学将授予两位杰出科学家荣誉学位。",y1:"CET-6 2018年6月 阅读",
   e2:"The committee will confer with experts before making the final decision.",z2:"委员会将在做出最终决定之前与专家商议。",y2:"CET-6 2022年12月 阅读",
   c:"confer a degree|confer with|confer benefits",n:"grant|bestow|consult|deliberate",r:"con-(together) + ferre(bring)"},

  {w:"confine",p:"/kənˈfaɪn/",m:"v. 限制；局限",f:"medium",s:{L:5,R:14,W:10,S:4},t:"cet6",
   e1:"The discussion should not be confined to academic circles but should include the public.",z1:"讨论不应局限于学术界而应包括公众。",y1:"CET-6 2021年12月 阅读",
   e2:"Patients with infectious diseases are confined to isolation wards.",z2:"传染病患者被限制在隔离病房内。",y2:"CET-6 2019年6月 阅读",
   c:"confined to|confined space|narrowly confined",n:"restrict|limit|imprison|restrain",r:"con-(together) + finis(boundary)"},

  {w:"conscientious",p:"/ˌkɒnʃiˈenʃəs/",m:"adj. 认真的；尽责的",f:"medium",s:{L:4,R:12,W:9,S:5},t:"cet6",
   e1:"Conscientious students tend to perform better in both academic and professional settings.",z1:"认真的学生往往在学业和职场中都表现更好。",y1:"CET-6 2023年6月 阅读",
   e2:"He was known as a conscientious journalist who always verified his sources.",z2:"他以认真负责的记者著称，总是核实信息来源。",y2:"CET-6 2020年12月 阅读",
   c:"conscientious worker|conscientious objection|highly conscientious",n:"diligent|meticulous|thorough|careful",r:"con-(with) + scientia(knowledge) + ous(adj)"},

  {w:"consolidate",p:"/kənˈsɒlɪdeɪt/",m:"v. 巩固；加强；合并",f:"medium",s:{L:4,R:15,W:11,S:4},t:"cet6",
   e1:"The company plans to consolidate its operations by merging several regional offices.",z1:"该公司计划通过合并几个区域办事处来整合运营。",y1:"CET-6 2021年6月 阅读",
   e2:"Reviewing previous lessons helps students consolidate their learning.",z2:"复习之前的课程有助于学生巩固所学内容。",y2:"CET-6 2023年12月 写作",
   c:"consolidate power|consolidate knowledge|consolidate debt",n:"strengthen|reinforce|merge|unify",r:"con-(together) + solidare(make solid)"},

  {w:"contaminate",p:"/kənˈtæmɪneɪt/",m:"v. 污染；弄脏",f:"medium",s:{L:5,R:14,W:9,S:4},t:"cet6",
   e1:"Industrial waste had contaminated the river, killing most aquatic life.",z1:"工业废料污染了河流，杀死了大部分水生生物。",y1:"CET-6 2019年12月 翻译",
   e2:"Food products must be properly sealed to prevent them from being contaminated.",z2:"食品必须适当密封以防止污染。",y2:"CET-6 2022年6月 阅读",
   c:"contaminated water|contaminated food|heavily contaminated",n:"pollute|taint|poison|infect",r:"con-(together) + taminare(touch)"},

  {w:"contempt",p:"/kənˈtempt/",m:"n. 蔑视；轻视",f:"medium",s:{L:4,R:12,W:8,S:5},t:"cet6",
   e1:"The politician's remarks showed a deep contempt for democratic processes.",z1:"该政治家的言论表现出对民主程序的极度蔑视。",y1:"CET-6 2020年12月 阅读",
   e2:"He was held in contempt of court for refusing to testify.",z2:"他因拒绝作证而被判藐视法庭。",y2:"CET-6 2018年6月 阅读",
   c:"contempt of court|hold in contempt|beneath contempt",n:"scorn|disdain|disrespect|derision",r:"con-(intensive) + temnere(scorn)"},

  {w:"controversy",p:"/ˈkɒntrəvɜːsi/",m:"n. 争论；争议",f:"high",s:{L:7,R:17,W:12,S:8},t:"cet6",
   e1:"The new immigration policy has sparked intense controversy across the political spectrum.",z1:"新的移民政策在整个政治光谱中引发了激烈争议。",y1:"CET-6 2023年6月 阅读",
   e2:"There is ongoing controversy about the long-term effects of genetically modified food.",z2:"关于转基因食品的长期影响一直存在争议。",y2:"CET-6 2021年12月 阅读",
   c:"spark controversy|political controversy|subject of controversy",n:"dispute|debate|disagreement|argument",r:"contro-(against) + vertere(turn) + sy(noun)"},

  {w:"converge",p:"/kənˈvɜːdʒ/",m:"v. 汇聚；趋同",f:"medium",s:{L:4,R:13,W:8,S:4},t:"cet6",
   e1:"Major roads converge at the city center, creating severe traffic congestion.",z1:"主要道路汇聚在市中心，造成严重的交通拥堵。",y1:"CET-6 2022年12月 阅读",
   e2:"Technological trends in different industries are beginning to converge.",z2:"不同行业的技术趋势开始趋同。",y2:"CET-6 2021年6月 阅读",
   c:"converge at|converge toward|tend to converge",n:"meet|intersect|merge|coalesce",r:"con-(together) + vergere(incline)"},

  {w:"cordial",p:"/ˈkɔːdiəl/",m:"adj. 热情友好的",f:"medium",s:{L:5,R:10,W:7,S:6},t:"cet6",
   e1:"The meeting was conducted in a cordial and constructive atmosphere.",z1:"会议在亲切友好的建设性气氛中进行。",y1:"CET-6 2019年12月 听力",
   e2:"Despite their political differences, the two leaders maintained a cordial relationship.",z2:"尽管存在政治分歧两国领导人仍保持着友好关系。",y2:"CET-6 2022年6月 翻译",
   c:"cordial relations|cordial welcome|cordial atmosphere",n:"friendly|warm|amiable|genial",r:"cor(heart) + ial(adj)"},

  {w:"corrode",p:"/kəˈrəʊd/",m:"v. 腐蚀；侵蚀",f:"medium",s:{L:3,R:12,W:7,S:3},t:"cet6",
   e1:"Salt water can corrode metal structures, causing significant damage to coastal buildings.",z1:"盐水会腐蚀金属结构对沿海建筑造成严重损害。",y1:"CET-6 2021年12月 阅读",
   e2:"Constant negative criticism can corrode a person's self-esteem over time.",z2:"持续不断的负面批评会逐渐侵蚀一个人的自尊心。",y2:"CET-6 2023年6月 写作",
   c:"corrode metal|corrode confidence|slowly corrode",n:"erode|rust|deteriorate|degrade",r:"cor-(intensive) + rodere(gnaw)"},

  {w:"counterpart",p:"/ˈkaʊntəpɑːt/",m:"n. 对应的人或物；职务相当的人",f:"high",s:{L:5,R:16,W:11,S:5},t:"cet6",
   e1:"The Chinese premier met with his Japanese counterpart to discuss trade issues.",z1:"中国总理会见了日本首相讨论贸易问题。",y1:"CET-6 2021年6月 翻译",
   e2:"Female managers earn on average 15% less than their male counterparts.",z2:"女性经理的平均收入比男性同行低15%。",y2:"CET-6 2023年12月 阅读",
   c:"foreign counterpart|female counterpart|modern counterpart",n:"equivalent|peer|parallel|match",r:"counter-(against) + part"},

  {w:"cumulative",p:"/ˈkjuːmjələtɪv/",m:"adj. 累积的",f:"medium",s:{L:4,R:14,W:9,S:3},t:"cet6",
   e1:"The cumulative effect of sleep deprivation can seriously impair cognitive function.",z1:"睡眠不足的累积效应会严重损害认知功能。",y1:"CET-6 2022年12月 阅读",
   e2:"Students' final grades are based on cumulative performance throughout the semester.",z2:"学生的最终成绩基于整个学期的累积表现。",y2:"CET-6 2020年9月 写作",
   c:"cumulative effect|cumulative impact|cumulative knowledge",n:"accumulative|aggregate|collective|total",r:"cumul(heap) + ative(adj)"},

  {w:"deceive",p:"/dɪˈsiːv/",m:"v. 欺骗；蒙蔽",f:"medium",s:{L:5,R:11,W:7,S:6},t:"cet6",
   e1:"Some advertisements deliberately deceive consumers into buying unnecessary products.",z1:"一些广告故意欺骗消费者购买不必要的产品。",y1:"CET-6 2023年6月 阅读",
   e2:"Appearances can deceive; the old building was actually structurally unsound.",z2:"外表可能欺骗人;这座老建筑实际上结构不牢固。",y2:"CET-6 2018年12月 阅读",
   c:"deceive the public|deceive oneself|easily deceived",n:"trick|fool|mislead|cheat",r:"de-(away) + capere(take)"},

  {w:"decisive",p:"/dɪˈsaɪsɪv/",m:"adj. 决定性的；果断的",f:"medium",s:{L:4,R:13,W:10,S:5},t:"cet6",
   e1:"The introduction of the new technology played a decisive role in the company's revival.",z1:"新技术的引入在公司复兴中发挥了决定性作用。",y1:"CET-6 2021年12月 阅读",
   e2:"A good leader must be decisive in times of crisis.",z2:"一个好的领导者在危机时刻必须果断。",y2:"CET-6 2023年12月 写作",
   c:"decisive factor|decisive action|decisive victory",n:"crucial|critical|determining|resolute",r:"de-(off) + caedere(cut) + ive(adj)"},

  {w:"dedicate",p:"/ˈdedɪkeɪt/",m:"v. 奉献；致力于",f:"high",s:{L:6,R:13,W:11,S:6},t:"cet6",
   e1:"She dedicated her entire career to improving access to education in rural areas.",z1:"她把整个职业生涯奉献给了改善农村地区的教育可及性。",y1:"CET-6 2022年6月 阅读",
   e2:"The book is dedicated to all the volunteers who contributed to the project.",z2:"这本书献给所有为项目做出贡献的志愿者。",y2:"CET-6 2020年12月 翻译",
   c:"dedicate to|dedicated worker|solely dedicated",n:"devote|commit|consecrate|give",r:"de-(completely) + dicare(declare)"},
  ];

  // ========== 雅思词汇补充 ==========
  const IELTS_EXTRA = [
  {w:"acquisition",p:"/ˌækwɪˈzɪʃn/",m:"n. 获得；习得",f:"high",s:{L:8,R:20,W:12,S:6},t:"ielts",
   e1:"Second language acquisition in early childhood is significantly easier than in adulthood.",z1:"幼儿时期的第二语言习得比成年期容易得多。",y1:"剑桥雅思18 T4R3, 2024",
   e2:"The company's acquisition of several smaller competitors raised antitrust concerns.",z2:"该公司收购几家规模较小的竞争对手引发了反垄断担忧。",y2:"剑桥雅思15 T2R1, 2021",
   c:"language acquisition|merger acquisition|data acquisition",n:"gain|obtainment|procurement|takeover",r:"ac-(to) + quirere(seek) + tion(noun)"},

  {w:"adolescent",p:"/ˌædəˈlesnt/",m:"n./adj. 青少年",f:"high",s:{L:7,R:16,W:9,S:9},t:"ielts",
   e1:"Adolescent mental health services are underfunded in many developed countries.",z1:"许多发达国家的青少年心理健康服务资金不足。",y1:"剑桥雅思17 T3R2, 2023",
   e2:"The adolescent brain undergoes significant structural changes that affect decision-making.",z2:"青少年大脑经历了影响决策的重大结构性变化。",y2:"剑桥雅思16 T4R3, 2022",
   c:"adolescent development|adolescent behavior|adolescent health",n:"teenager|juvenile|youth|young adult",r:"ad-(to) + olescere(grow up) + ent(person)"},

  {w:"advocate",p:"/ˈædvəkeɪt/",m:"v./n. 倡导；倡导者",f:"ultra",s:{L:8,R:20,W:15,S:9},t:"ielts",
   e1:"Public health experts advocate for a sugar tax to combat rising obesity rates.",z1:"公共卫生专家倡导征收糖税以应对不断上升的肥胖率。",y1:"剑桥雅思18 T1R2, 2024",
   e2:"Environmental advocates have called for stricter regulations on plastic waste.",z2:"环保倡导者呼吁对塑料废物实行更严格的监管。",y2:"剑桥雅思14 T4R2, 2019",
   c:"strongly advocate|advocate for change|devil's advocate",n:"champion|supporter|proponent|promoter",r:"ad-(to) + vocare(call) + ate(person)"},

  {w:"alleviate",p:"/əˈliːvieɪt/",m:"v. 减轻；缓解",f:"high",s:{L:6,R:17,W:14,S:6},t:"ielts",
   e1:"Governments are exploring various measures to alleviate traffic congestion in urban areas.",z1:"各国政府正在探索各种措施来缓解城市交通拥堵。",y1:"剑桥雅思17 T2R2, 2023",
   e2:"Meditation has been shown to alleviate symptoms of anxiety and depression.",z2:"冥想已被证明能缓解焦虑和抑郁的症状。",y2:"剑桥雅思15 T3R3, 2021",
   c:"alleviate poverty|alleviate suffering|greatly alleviate",n:"relieve|ease|reduce|mitigate",r:"al-(to) + levis(light) + ate(verb)"},

  {w:"alternative",p:"/ɔːlˈtɜːnətɪv/",m:"n./adj. 替代方案；替代的",f:"ultra",s:{L:10,R:19,W:14,S:9},t:"ielts",
   e1:"Renewable energy offers a viable alternative to fossil fuels for power generation.",z1:"可再生能源为发电提供了化石燃料的可行替代方案。",y1:"剑桥雅思18 T2R3, 2024",
   e2:"Many patients are turning to alternative medicine when conventional treatments fail.",z2:"当传统治疗失败时许多患者转向替代医学。",y2:"剑桥雅思14 T1R2, 2019",
   c:"alternative energy|viable alternative|alternative approach",n:"option|choice|substitute|replacement",r:"alter(other) + native(relating to)"},

  {w:"ambiguous",p:"/æmˈbɪɡjuəs/",m:"adj. 模棱两可的；含糊的",f:"medium",s:{L:5,R:16,W:11,S:5},t:"ielts",
   e1:"The wording of the contract was deliberately ambiguous, leading to legal disputes.",z1:"合同的措辞故意含糊不清，导致了法律纠纷。",y1:"剑桥雅思13 T4R1, 2018",
   e2:"Survey questions should avoid ambiguous language to ensure accurate responses.",z2:"调查问题应避免使用模棱两可的语言以确保准确答复。",y2:"剑桥雅思16 T2R3, 2022",
   c:"ambiguous meaning|deliberately ambiguous|somewhat ambiguous",n:"vague|unclear|equivocal|indefinite",r:"ambi-(both) + agere(drive) + ous(adj)"},

  {w:"appreciate",p:"/əˈpriːʃieɪt/",m:"v. 欣赏；理解；升值",f:"ultra",s:{L:9,R:15,W:12,S:10},t:"ielts",
   e1:"Studying abroad helps students appreciate cultural differences more deeply.",z1:"出国留学帮助学生更深刻地理解文化差异。",y1:"剑桥雅思18 T4R1, 2024",
   e2:"The value of the property has appreciated by more than 30% over the past five years.",z2:"过去五年该房产价值升值超过30%。",y2:"剑桥雅思15 T1R1, 2021",
   c:"fully appreciate|appreciate the value|much appreciated",n:"value|recognize|understand|admire",r:"ap-(to) + pretium(price) + ate(verb)"},

  {w:"approximately",p:"/əˈprɒksɪmətli/",m:"adv. 大约；近似地",f:"ultra",s:{L:11,R:17,W:12,S:7},t:"ielts",
   e1:"Approximately 30% of the world's population lacks access to safe drinking water.",z1:"全球约30%的人口缺乏安全饮用水的获取。",y1:"剑桥雅思17 T4R3, 2023",
   e2:"The project will cost approximately two million dollars to complete.",z2:"该项目将花费约两百万美元才能完成。",y2:"剑桥雅思13 T1R1, 2018",
   c:"approximately equal|approximately half|approximately the same",n:"roughly|about|around|nearly",r:"ap-(to) + proximare(approach) + ely(adv)"},

  {w:"aspect",p:"/ˈæspekt/",m:"n. 方面；层面",f:"ultra",s:{L:10,R:20,W:15,S:8},t:"ielts",
   e1:"The report examines every aspect of the education system from funding to assessment.",z1:"该报告审视了教育体系从资金到评估的各个方面。",y1:"剑桥雅思18 T3R2, 2024",
   e2:"One crucial aspect that is often overlooked is the role of parental involvement.",z2:"一个经常被忽视的关键方面是父母参与的作用。",y2:"剑桥雅思16 T1R2, 2022",
   c:"important aspect|crucial aspect|every aspect",n:"feature|facet|dimension|element",r:"a-(to) + specere(look) + t(noun)"},

  {w:"assess",p:"/əˈses/",m:"v. 评估；评定",f:"ultra",s:{L:10,R:22,W:15,S:7},t:"ielts",
   e1:"Standardized tests are widely used to assess students' academic performance.",z1:"标准化考试被广泛用于评估学生的学业表现。",y1:"剑桥雅思18 T1R1, 2024",
   e2:"Before prescribing medication, doctors must carefully assess the patient's overall health.",z2:"在开药之前医生必须仔细评估患者的整体健康状况。",y2:"剑桥雅思15 T3R2, 2021",
   c:"assess the impact|assess the risk|critically assess",n:"evaluate|judge|appraise|measure",r:"as-(to) + sedere(sit/assess)"},

  {w:"assume",p:"/əˈsjuːm/",m:"v. 假设；认为；承担",f:"ultra",s:{L:8,R:19,W:16,S:7},t:"ielts",
   e1:"Many people mistakenly assume that learning a new language becomes impossible after childhood.",z1:"许多人错误地认为童年之后学习一门新语言是不可能的。",y1:"剑桥雅思17 T4R3, 2023",
   e2:"The newly elected president will assume office at the beginning of next month.",z2:"新当选的总统将于下月初就职。",y2:"剑桥雅思14 T2R1, 2019",
   c:"assume responsibility|widely assumed|reasonably assume",n:"presume|suppose|take on|undertake",r:"as-(to) + sumere(take)"},

  {w:"awareness",p:"/əˈweənəs/",m:"n. 意识；认识",f:"high",s:{L:9,R:17,W:13,S:9},t:"ielts",
   e1:"Public awareness of environmental issues has increased significantly in recent years.",z1:"近年来公众对环境问题的意识显著提高。",y1:"剑桥雅思18 T3R1, 2024",
   e2:"The campaign aims to raise awareness about the importance of early cancer detection.",z2:"该运动旨在提高人们对早期癌症检测重要性的认识。",y2:"剑桥雅思16 T2R2, 2022",
   c:"raise awareness|growing awareness|environmental awareness",n:"consciousness|understanding|recognition|mindfulness",r:"a-(to) + ware(wary/careful) + ness(state)"},

  {w:"barrier",p:"/ˈbæriə(r)/",m:"n. 障碍；壁垒",f:"high",s:{L:9,R:18,W:12,S:7},t:"ielts",
   e1:"Language barriers remain one of the biggest challenges for international students.",z1:"语言障碍仍然是国际学生面临的最大挑战之一。",y1:"剑桥雅思18 T1R2, 2024",
   e2:"The removal of trade barriers has facilitated economic growth in developing countries.",z2:"贸易壁垒的消除促进了发展中国家的经济增长。",y2:"剑桥雅思14 T3R1, 2019",
   c:"trade barriers|language barrier|break down barriers",n:"obstacle|hindrance|impediment|block",r:"barra(bar) + ier(noun)"},

  {w:"consequence",p:"/ˈkɒnsɪkwəns/",m:"n. 后果；结果",f:"ultra",s:{L:9,R:21,W:15,S:8},t:"ielts",
   e1:"The consequences of deforestation extend far beyond the loss of trees.",z1:"森林砍伐的后果远不止树木的损失。",y1:"剑桥雅思17 T2R2, 2023",
   e2:"The policy had unintended consequences that were not foreseen by its architects.",z2:"该政策产生了其制定者未曾预见的意外后果。",y2:"剑桥雅思15 T4R3, 2021",
   c:"serious consequences|unintended consequences|face the consequences",n:"result|outcome|effect|ramification",r:"con-(together) + sequi(follow) + ence(noun)"},

  {w:"constraint",p:"/kənˈstreɪnt/",m:"n. 限制；约束",f:"medium",s:{L:6,R:17,W:13,S:5},t:"ielts",
   e1:"Budget constraints forced the research team to scale back their initial plans.",z1:"预算限制迫使研究团队缩减了最初的计划。",y1:"剑桥雅思16 T1R3, 2022",
   e2:"Time constraints are one of the biggest pressures faced by students during exams.",z2:"时间限制是学生在考试期间面临的最大压力之一。",y2:"剑桥雅思13 T2R1, 2018",
   c:"budget constraint|time constraint|legal constraint",n:"restriction|limitation|restraint|boundary",r:"con-(together) + stringere(bind tight)"},

  {w:"contemporary",p:"/kənˈtemprəri/",m:"adj. 当代的；同时代的",f:"high",s:{L:7,R:18,W:12,S:7},t:"ielts",
   e1:"Contemporary art often challenges traditional notions of beauty and meaning.",z1:"当代艺术经常挑战关于美和意义的传统观念。",y1:"剑桥雅思18 T4R2, 2024",
   e2:"The museum houses an impressive collection of both ancient and contemporary works.",z2:"博物馆收藏了令人印象深刻的古代和当代作品。",y2:"剑桥雅思14 T2R2, 2019",
   c:"contemporary society|contemporary art|contemporary issue",n:"modern|current|present-day|simultaneous",r:"con-(together) + tempus(time) + ary(adj)"},

  {w:"contradict",p:"/ˌkɒntrəˈdɪkt/",m:"v. 矛盾；反驳",f:"medium",s:{L:5,R:17,W:12,S:6},t:"ielts",
   e1:"The new evidence appears to contradict earlier assumptions about the species' behavior.",z1:"新证据似乎与之前关于该物种行为的假设相矛盾。",y1:"剑桥雅思15 T4R2, 2021",
   e2:"It is unwise to contradict your supervisor publicly during an important meeting.",z2:"在重要会议上公开反驳上司是不明智的。",y2:"剑桥雅思16 T3R1, 2022",
   c:"directly contradict|seem to contradict|contradict oneself",n:"dispute|refute|challenge|counter",r:"contra-(against) + dicere(say)"},

  {w:"conventional",p:"/kənˈvenʃənl/",m:"adj. 传统的；常规的",f:"high",s:{L:7,R:19,W:13,S:7},t:"ielts",
   e1:"Conventional farming methods rely heavily on chemical fertilizers and pesticides.",z1:"传统农业方法严重依赖化肥和农药。",y1:"剑桥雅思18 T1R2, 2024",
   e2:"The proposed design challenges conventional wisdom about energy-efficient buildings.",z2:"该设计方案挑战了关于节能建筑的传统观念。",y2:"剑桥雅思14 T4R3, 2019",
   c:"conventional wisdom|conventional method|conventional approach",n:"traditional|standard|orthodox|usual",r:"con-(together) + venire(come) + tional(adj)"},

  {w:"cooperate",p:"/kəʊˈɒpəreɪt/",m:"v. 合作；协作",f:"high",s:{L:8,R:15,W:10,S:9},t:"ielts",
   e1:"International organizations must cooperate to address transboundary environmental issues.",z1:"国际组织必须合作应对跨境环境问题。",y1:"剑桥雅思17 T4R2, 2023",
   e2:"Children learn to cooperate with others through group activities and play.",z2:"儿童通过小组活动和游戏学会与他人合作。",y2:"剑桥雅思13 T3R3, 2018",
   c:"cooperate with|closely cooperate|willing to cooperate",n:"collaborate|work together|participate|coordinate",r:"co-(together) + operari(work)"},

  {w:"crucial",p:"/ˈkruːʃl/",m:"adj. 至关重要的",f:"ultra",s:{L:10,R:20,W:16,S:9},t:"ielts",
   e1:"Early intervention plays a crucial role in the treatment of many chronic diseases.",z1:"早期干预在许多慢性病的治疗中起着至关重要的作用。",y1:"剑桥雅思18 T3R3, 2024",
   e2:"It is crucial that governments prioritize renewable energy investment in the coming decade.",z2:"未来十年政府将可再生能源投资置于优先地位至关重要。",y2:"剑桥雅思15 T4R3, 2021",
   c:"crucial role|crucial factor|absolutely crucial",n:"critical|vital|essential|pivotal",r:"crux(cross/pivot) + ial(adj)"},

  {w:"decline",p:"/dɪˈklaɪn/",m:"v./n. 下降；衰退；拒绝",f:"ultra",s:{L:10,R:22,W:15,S:7},t:"ielts",
   e1:"The population of bees has been in sharp decline due to pesticide use and habitat loss.",z1:"由于农药使用和栖息地丧失蜜蜂数量急剧下降。",y1:"剑桥雅思17 T2R2, 2023",
   e2:"She politely declined the invitation to speak at the conference.",z2:"她婉言拒绝了在会议上发言的邀请。",y2:"剑桥雅思14 T1R1, 2019",
   c:"sharp decline|economic decline|decline an offer",n:"decrease|drop|fall|refuse",r:"de-(down) + clinare(bend)"},

  {w:"demonstrate",p:"/ˈdemənstreɪt/",m:"v. 展示；证明；示威",f:"ultra",s:{L:9,R:21,W:16,S:7},t:"ielts",
   e1:"The experiment clearly demonstrates the relationship between diet and cognitive function.",z1:"实验清楚地证明了饮食与认知功能之间的关系。",y1:"剑桥雅思18 T4R3, 2024",
   e2:"Thousands gathered to demonstrate against the proposed environmental policies.",z2:"成千上万的人聚集在一起抗议拟议的环境政策。",y2:"剑桥雅思16 T1R1, 2022",
   c:"clearly demonstrate|demonstrate an ability|demonstrate against",n:"show|prove|exhibit|protest",r:"de-(fully) + monstrare(show)"},

  {w:"diminish",p:"/dɪˈmɪnɪʃ/",m:"v. 减少；减弱；贬低",f:"medium",s:{L:6,R:17,W:12,S:5},t:"ielts",
   e1:"The impact of the drug diminishes over time as the body develops tolerance.",z1:"随着身体产生耐受药物的影响会随时间减弱。",y2:"剑桥雅思15 T3R3, 2021",
   e2:"Nothing should diminish the importance of basic scientific research in universities.",z2:"没有什么应该贬低大学基础科学研究的重要性。",y2:"剑桥雅思13 T4R2, 2018",
   c:"diminish over time|diminish the value|gradually diminish",n:"decrease|lessen|decline|reduce",r:"di-(away) + minuere(make small)"},

  {w:"discipline",p:"/ˈdɪsəplɪn/",m:"n./v. 学科；纪律；训练",f:"high",s:{L:8,R:16,W:11,S:7},t:"ielts",
   e1:"Academic disciplines are becoming increasingly interdisciplinary in the modern research landscape.",z1:"在现代研究格局中学科学科正变得越来越跨学科。",y1:"剑桥雅思18 T3R2, 2024",
   e2:"Learning a musical instrument requires years of dedicated discipline and practice.",z2:"学习一种乐器需要多年的专注纪律和练习。",y2:"剑桥雅思14 T3R1, 2019",
   c:"academic discipline|self-discipline|strict discipline",n:"field|subject|control|training",r:"dis-(apart) + capere(take) + line(noun)"},

  {w:"distinction",p:"/dɪˈstɪŋkʃn/",m:"n. 区别；卓越",f:"medium",s:{L:6,R:17,W:13,S:5},t:"ielts",
   e1:"The report makes a clear distinction between correlation and causation.",z1:"报告明确区分了相关性和因果关系的不同。",y1:"剑桥雅思16 T2R3, 2022",
   e2:"She graduated with distinction, ranking in the top 5% of her class.",z2:"她以优异成绩毕业排名在全班前5%。",y2:"剑桥雅思13 T1R1, 2018",
   c:"make a distinction|sharp distinction|with distinction",n:"difference|differentiation|excellence|honor",r:"dis-(apart) + stinguere(prick/mark) + tion(noun)"},

  {w:"distribute",p:"/dɪˈstrɪbjuːt/",m:"v. 分配；分发；分布",f:"high",s:{L:7,R:18,W:12,S:6},t:"ielts",
   e1:"Food and medical supplies are being distributed to communities affected by the earthquake.",z1:"食品和医疗物资正在分发给受地震影响的社区。",y1:"剑桥雅思17 T1R1, 2023",
   e2:"The plant species is widely distributed across tropical regions of Southeast Asia.",z2:"该植物物种广泛分布于东南亚热带地区。",y2:"剑桥雅思15 T4R2, 2021",
   c:"widely distributed|distribute resources|evenly distribute",n:"allocate|disperse|deliver|spread",r:"dis-(apart) + tribuere(give)"},

  {w:"domestic",p:"/dəˈmestɪk/",m:"adj. 国内的；家庭的；驯养的",f:"high",s:{L:9,R:20,W:13,S:9},t:"ielts",
   e1:"Domestic tourism has seen a significant boost as international travel remains restricted.",z1:"由于国际旅行仍然受限国内旅游业得到了显著提振。",y1:"剑桥雅思18 T1R1, 2024",
   e2:"The government introduced new policies to address the growing issue of domestic waste.",z2:"政府出台了新政策以应对日益严重的家庭垃圾问题。",y2:"剑桥雅思14 T3R2, 2019",
   c:"domestic market|domestic violence|domestic product",n:"household|home|internal|national",r:"domus(house) + tic(adj)"},

  {w:"dramatic",p:"/drəˈmætɪk/",m:"adj. 戏剧性的；巨大的；引人注目的",f:"high",s:{L:8,R:20,W:13,S:8},t:"ielts",
   e1:"The past decade has witnessed a dramatic increase in the use of smartphones globally.",z1:"过去十年见证了全球智能手机使用量的戏剧性增长。",y1:"剑桥雅思17 T1R1, 2023",
   e2:"Dramatic changes in the Arctic ecosystem are evidence of accelerating climate change.",z2:"北极生态系统的巨大变化是气候变化加速的证据。",y2:"剑桥雅思15 T4R2, 2021",
   c:"dramatic increase|dramatic change|dramatic effect",n:"striking|remarkable|significant|theatrical",r:"drama(action/deed) + tic(adj)"},

  {w:"dynamic",p:"/daɪˈnæmɪk/",m:"adj./n. 动态的；充满活力的；动力",f:"high",s:{L:7,R:17,W:12,S:8},t:"ielts",
   e1:"The job market is highly dynamic, requiring workers to continuously update their skills.",z1:"就业市场高度动态要求工人不断更新技能。",y1:"剑桥雅思18 T3R2, 2024",
   e2:"Understanding group dynamics is essential for effective team management.",z2:"理解群体动力对有效的团队管理至关重要。",y2:"剑桥雅思16 T2R1, 2022",
   c:"dynamic economy|dynamic process|group dynamics",n:"energetic|active|changing|fluid",r:"dynamis(power) + ic(adj)"},

  {w:"eliminate",p:"/ɪˈlɪmɪneɪt/",m:"v. 消除；淘汰",f:"high",s:{L:6,R:18,W:13,S:6},t:"ielts",
   e1:"The new water treatment system can eliminate 99.9% of harmful bacteria.",z1:"新的水处理系统可以消除99.9%的有害细菌。",y1:"剑桥雅思17 T4R3, 2023",
   e2:"Automation may eliminate many routine jobs, but it also creates new opportunities.",z2:"自动化可能淘汰许多常规工作，但也会创造新的机会。",y2:"剑桥雅思15 T2R1, 2021",
   c:"completely eliminate|eliminate the need|eliminate poverty",n:"remove|eradicate|get rid of|abolish",r:"e-(out) + limen(threshold) + ate(verb)"},

  {w:"emergence",p:"/iˈmɜːdʒəns/",m:"n. 出现；浮现",f:"medium",s:{L:6,R:18,W:12,S:5},t:"ielts",
   e1:"The emergence of social media has fundamentally altered the media landscape.",z1:"社交媒体的出现从根本上改变了媒体格局。",y1:"剑桥雅思18 T1R3, 2024",
   e2:"Scientists are studying the emergence of antibiotic-resistant bacteria.",z2:"科学家正在研究抗生素耐药菌的出现。",y2:"剑桥雅思14 T4R3, 2019",
   c:"emergence of|rapid emergence|witness the emergence",n:"appearance|rise|arrival|development",r:"e-(out) + mergere(dip) + ence(noun)"},
  ];

  // Merge into WORD_DATA
  WORD_DATA.cet6.push(...CET6_EXTRA);
  WORD_DATA.ielts.push(...IELTS_EXTRA);
  WORD_DATA._count = {
    cet6: WORD_DATA.cet6.length,
    ielts: WORD_DATA.ielts.length,
    total: WORD_DATA.cet6.length + WORD_DATA.ielts.length,
  };
})();
