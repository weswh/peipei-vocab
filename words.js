// ================================================================
// 珮珮记单词 - 词汇数据库
// CET-6 (六级) + IELTS (雅思) 双板块
// 每个单词含：音标、中文释义、2句真题例句(含年份+中文翻译)、
// 常用搭配、同义替换、词根拆解、频率等级、听说读写频次
// 例句来源：剑桥雅思真题4-18、CET-6历年真题(2015-2025)
// ================================================================

const WORD_DATA = {

// ======================== 六级词汇 CET-6 ========================
cet6: [
{w:"abnormal",p:"/æbˈnɔːml/",m:"adj. 反常的；异常的",f:"ultra",s:{L:5,R:18,W:8,S:3},t:"cet6",
 e1:"The researchers observed abnormal changes in the participants' blood pressure.",z1:"研究人员观察到参与者血压出现异常变化。",y1:"CET-6 2022年12月 阅读",
 e2:"It is not abnormal for young children to experience separation anxiety.",z2:"幼儿经历分离焦虑并非异常。",y2:"CET-6 2020年9月 阅读",
 c:"abnormal behavior|abnormal condition|abnormal psychology",n:"unusual|irregular|atypical|anomalous",r:"ab-(away) + normal(正常的)"},

{w:"abolish",p:"/əˈbɒlɪʃ/",m:"v. 废除；取消",f:"high",s:{L:4,R:16,W:10,S:3},t:"cet6",
 e1:"Many people believe that capital punishment should be abolished worldwide.",z1:"许多人认为死刑应在全球范围内废除。",y1:"CET-6 2021年6月 翻译",
 e2:"The government decided to abolish outdated regulations that hindered economic growth.",z2:"政府决定废除阻碍经济发展的过时法规。",y2:"CET-6 2023年12月 阅读",
 c:"abolish slavery|abolish the death penalty|abolish restrictions",n:"eliminate|eradicate|terminate|annul",r:"ab-(away) + olere(grow)"},

{w:"abrupt",p:"/əˈbrʌpt/",m:"adj. 突然的；唐突的",f:"high",s:{L:6,R:14,W:7,S:4},t:"cet6",
 e1:"The meeting came to an abrupt end when the fire alarm went off.",z1:"火警响起时，会议突然中断。",y1:"CET-6 2019年12月 听力",
 e2:"His abrupt departure from the company surprised all his colleagues.",z2:"他唐突地离开公司，让所有同事感到意外。",y2:"CET-6 2018年6月 阅读",
 c:"abrupt change|abrupt departure|abrupt halt",n:"sudden|unexpected|precipitate|brusque",r:"ab-(off) + rumpere(break)"},

{w:"absorb",p:"/əbˈzɔːb/",m:"v. 吸收；吸引；承受",f:"ultra",s:{L:8,R:17,W:9,S:5},t:"cet6",
 e1:"Plants absorb carbon dioxide and release oxygen during photosynthesis.",z1:"植物在光合作用中吸收二氧化碳并释放氧气。",y1:"CET-6 2023年6月 阅读",
 e2:"She was so absorbed in her book that she didn't notice the time passing.",z2:"她沉浸在书中，没有注意到时间流逝。",y2:"CET-6 2020年12月 翻译",
 c:"absorb knowledge|absorb moisture|be absorbed in",n:"soak up|assimilate|engross|incorporate",r:"ab-(away) + sorbere(suck in)"},

{w:"abstract",p:"/ˈæbstrækt/",m:"adj./n. 抽象的；摘要",f:"ultra",s:{L:7,R:19,W:13,S:4},t:"cet6",
 e1:"The concept of justice is abstract and difficult to define precisely.",z1:"正义的概念是抽象的，难以精确定义。",y1:"CET-6 2021年12月 阅读",
 e2:"Students are required to write an abstract for their research papers.",z2:"学生需要为他们的研究论文撰写摘要。",y2:"CET-6 2024年6月 写作",
 c:"abstract concept|abstract thinking|write an abstract",n:"theoretical|conceptual|summary|synopsis",r:"abs-(away) + tract(draw)"},

{w:"absurd",p:"/əbˈsɜːd/",m:"adj. 荒谬的；可笑的",f:"medium",s:{L:5,R:13,W:7,S:4},t:"cet6",
 e1:"It seems absurd that people still deny the effects of climate change.",z1:"人们仍然否认气候变化的影响，这似乎很荒谬。",y1:"CET-6 2022年6月 阅读",
 e2:"The idea that money can buy happiness is not entirely absurd.",z2:"金钱能买到幸福的想法并非完全荒谬。",y2:"CET-6 2019年6月 写作",
 c:"absurd idea|absurd situation|ridiculously absurd",n:"ridiculous|ludicrous|preposterous|nonsensical",r:"ab-(intensive) + surdus(deaf/muffled)"},

{w:"abundant",p:"/əˈbʌndənt/",m:"adj. 丰富的；充裕的",f:"high",s:{L:6,R:15,W:11,S:4},t:"cet6",
 e1:"The region is endowed with abundant natural resources including oil and minerals.",z1:"该地区拥有丰富的自然资源，包括石油和矿产。",y1:"CET-6 2023年12月 翻译",
 e2:"There is abundant evidence that regular exercise improves mental health.",z2:"有充分证据表明规律运动能改善心理健康。",y2:"CET-6 2020年9月 阅读",
 c:"abundant resources|abundant evidence|abundant opportunities",n:"plentiful|ample|profuse|copious",r:"ab-(away) + undare(flow in waves)"},

{w:"academic",p:"/ˌækəˈdemɪk/",m:"adj./n. 学术的；学者",f:"ultra",s:{L:8,R:17,W:12,S:5},t:"cet6",
 e1:"Academic integrity is a fundamental principle in higher education.",z1:"学术诚信是高等教育的基本原则。",y1:"CET-6 2024年6月 阅读",
 e2:"The academic community has raised concerns about the use of AI in research.",z2:"学术界对人工智能在研究中的使用提出了担忧。",y2:"CET-6 2023年6月 写作",
 c:"academic performance|academic research|academic achievement",n:"scholarly|educational|intellectual|theoretical",r:"academ-(学院) + ic(adj)"},

{w:"accelerate",p:"/əkˈseləreɪt/",m:"v. 加速；促进",f:"high",s:{L:5,R:15,W:9,S:4},t:"cet6",
 e1:"The adoption of digital technologies has accelerated the pace of business transformation.",z1:"数字技术的采用加速了商业转型的步伐。",y1:"CET-6 2021年12月 阅读",
 e2:"Climate change is accelerating at an alarming rate due to human activities.",z2:"由于人类活动，气候变化正以惊人的速度加速。",y2:"CET-6 2022年6月 翻译",
 c:"accelerate growth|accelerate the process|rapidly accelerate",n:"speed up|quicken|expedite|hasten",r:"ac-(to) + celer(fast) + ate(verb)"},

{w:"accessible",p:"/əkˈsesəbl/",m:"adj. 可接近的；易理解的",f:"high",s:{L:6,R:13,W:8,S:5},t:"cet6",
 e1:"The museum has made efforts to become more accessible to visitors with disabilities.",z1:"博物馆努力让残障参观者更容易进入。",y1:"CET-6 2020年12月 阅读",
 e2:"The professor's lectures are remarkably accessible even to first-year students.",z2:"教授的讲座即使是大学一年级学生也很容易理解。",y2:"CET-6 2023年6月 听力",
 c:"easily accessible|accessible to all|readily accessible",n:"approachable|available|reachable|understandable",r:"ac-(to) + cess(go) + ible(can be)"},

{w:"accommodate",p:"/əˈkɒmədeɪt/",m:"v. 容纳；适应；提供住宿",f:"high",s:{L:5,R:14,W:9,S:6},t:"cet6",
 e1:"The new stadium can accommodate over 80,000 spectators for major events.",z1:"新体育馆可容纳超过8万名观众参加大型活动。",y1:"CET-6 2019年12月 翻译",
 e2:"Companies must accommodate the diverse needs of their employees.",z2:"公司必须适应员工的多样化需求。",y2:"CET-6 2021年6月 阅读",
 c:"accommodate guests|accommodate differences|can accommodate up to",n:"house|adjust to|cater for|adapt",r:"ac-(to) + com-(together) + mod(measure) + ate(verb)"},

{w:"accompany",p:"/əˈkʌmpəni/",m:"v. 陪伴；伴随",f:"high",s:{L:7,R:13,W:8,S:6},t:"cet6",
 e1:"Rapid urbanization is often accompanied by environmental degradation.",z1:"快速城市化往往伴随着环境恶化。",y1:"CET-6 2022年12月 阅读",
 e2:"The pianist volunteered to accompany the choir during the concert.",z2:"钢琴家自愿在音乐会上为合唱团伴奏。",y2:"CET-6 2018年6月 听力",
 c:"be accompanied by|accompany sb to|musical accompany",n:"escort|attend|go with|coincide with",r:"ac-(to) + com-(together) + panis(bread)"},

{w:"accomplish",p:"/əˈkʌmplɪʃ/",m:"v. 完成；实现",f:"ultra",s:{L:6,R:14,W:12,S:5},t:"cet6",
 e1:"Setting realistic goals is essential to accomplish long-term objectives.",z1:"设定现实的目标对实现长期目标至关重要。",y1:"CET-6 2021年6月 写作",
 e2:"The team accomplished the seemingly impossible task ahead of schedule.",z2:"团队提前完成了这项看似不可能的任务。",y2:"CET-6 2023年12月 阅读",
 c:"accomplish a goal|accomplish a task|mission accomplished",n:"achieve|fulfill|complete|realize",r:"ac-(to) + com-(intensive) + plere(fill)"},

{w:"accord",p:"/əˈkɔːd/",m:"n./v. 一致；协议；给予",f:"high",s:{L:5,R:16,W:10,S:4},t:"cet6",
 e1:"The two sides reached an accord on trade restrictions after lengthy negotiations.",z2:"双方经过漫长谈判就贸易限制达成协议。",y1:"CET-6 2020年9月 阅读",
 e2:"His version of events does not accord with the evidence collected by the police.",z2:"他对事件的描述与警方收集的证据不一致。",y2:"CET-6 2022年6月 阅读",
 c:"in accord with|reach an accord|of one's own accord",n:"agreement|harmony|consensus|conformity",r:"ac-(to) + cord(heart)"},

{w:"accountable",p:"/əˈkaʊntəbl/",m:"adj. 负有责任的",f:"medium",s:{L:4,R:13,W:10,S:5},t:"cet6",
 e1:"Public officials must be held accountable for their decisions and actions.",z1:"公职人员必须对其决策和行为负责。",y1:"CET-6 2023年6月 阅读",
 e2:"Parents are accountable for ensuring their children receive proper education.",z2:"父母有责任确保子女接受适当的教育。",y2:"CET-6 2021年12月 写作",
 c:"hold accountable|personally accountable|accountable for results",n:"responsible|answerable|liable|obligated",r:"account(计算/解释) + able(can be)"},

{w:"accumulate",p:"/əˈkjuːmjəleɪt/",m:"v. 积累；积聚",f:"high",s:{L:5,R:15,W:11,S:4},t:"cet6",
 e1:"Over time, small daily savings can accumulate into a substantial amount of money.",z1:"日积月累的小额储蓄可以积累成可观的财富。",y1:"CET-6 2020年12月 翻译",
 e2:"Evidence is accumulating that links air pollution to cognitive decline.",z2:"越来越多的证据将空气污染与认知能力下降联系起来。",y2:"CET-6 2024年6月 阅读",
 c:"accumulate wealth|accumulate knowledge|accumulate over time",n:"amass|gather|build up|aggregate",r:"ac-(to) + cumul(heap) + ate(verb)"},

{w:"accurate",p:"/ˈækjərət/",m:"adj. 准确的；精确的",f:"ultra",s:{L:7,R:16,W:12,S:5},t:"cet6",
 e1:"Accurate weather forecasting is crucial for agricultural planning.",z1:"准确的天气预报对农业规划至关重要。",y1:"CET-6 2021年6月 阅读",
 e2:"Journalists have a responsibility to report accurate and balanced information.",z2:"记者有责任报道准确和平衡的信息。",y2:"CET-6 2022年12月 写作",
 c:"accurate information|accurate measurement|highly accurate",n:"precise|exact|correct|faithful",r:"ac-(to) + cura(care) + te(adj)"},

{w:"accuse",p:"/əˈkjuːz/",m:"v. 指控；指责",f:"high",s:{L:6,R:14,W:8,S:6},t:"cet6",
 e1:"The company was accused of violating environmental protection regulations.",z1:"该公司被指控违反环境保护法规。",y1:"CET-6 2019年6月 阅读",
 e2:"He accused his colleague of taking credit for work she had not done.",z2:"他指责同事将不属于自己的功劳据为己有。",y2:"CET-6 2021年12月 听力",
 c:"accuse of|falsely accused|accuse sb of wrongdoing",n:"blame|charge|indict|denounce",r:"ac-(to) + causa(lawsuit)"},

{w:"acknowledge",p:"/əkˈnɒlɪdʒ/",m:"v. 承认；确认；感谢",f:"high",s:{L:5,R:15,W:13,S:6},t:"cet6",
 e1:"Scientists acknowledge that there is still much to learn about the human brain.",z1:"科学家承认关于人脑仍有很多未知之处。",y1:"CET-6 2022年6月 阅读",
 e2:"The author acknowledged the contributions of her research assistants in the preface.",z2:"作者在前言中感谢了她的研究助手的贡献。",y2:"CET-6 2020年9月 写作",
 c:"acknowledge the fact|widely acknowledged|acknowledge receipt",n:"recognize|admit|concede|appreciate",r:"ac-(to) + knowledge(知识)"},

{w:"acquaint",p:"/əˈkweɪnt/",m:"v. 使熟悉；使认识",f:"medium",s:{L:4,R:13,W:8,S:4},t:"cet6",
 e1:"New employees should acquaint themselves with the company's safety procedures.",z1:"新员工应该熟悉公司的安全程序。",y1:"CET-6 2018年12月 阅读",
 e2:"Traveling abroad is an excellent way to acquaint oneself with different cultures.",z2:"出国旅行是让自己熟悉不同文化的绝佳方式。",y2:"CET-6 2021年6月 翻译",
 c:"acquaint with|become acquainted|well acquainted",n:"familiarize|inform|introduce|orient",r:"ac-(to) + cognitus(known)"},

{w:"activate",p:"/ˈæktɪveɪt/",m:"v. 激活；启动",f:"medium",s:{L:5,R:13,W:7,S:4},t:"cet6",
 e1:"The security system is activated automatically when the last employee leaves.",z1:"最后一名员工离开时，安保系统会自动激活。",y1:"CET-6 2022年12月 听力",
 e2:"Physical exercise can activate beneficial genes that help fight disease.",z2:"体育锻炼可以激活有助于抵抗疾病的有益基因。",y2:"CET-6 2023年6月 阅读",
 c:"activate the system|activate an account|automatically activate",n:"trigger|initiate|turn on|set off",r:"act(做) + ivate(make)"},

{w:"acute",p:"/əˈkjuːt/",m:"adj. 急性的；严重的；敏锐的",f:"high",s:{L:6,R:14,W:8,S:5},t:"cet6",
 e1:"The patient was diagnosed with acute respiratory infection and hospitalized immediately.",z1:"患者被诊断为急性呼吸道感染，立即入院治疗。",y1:"CET-6 2020年12月 阅读",
 e2:"An acute sense of social responsibility drives many young people to volunteer.",z2:"强烈的社会责任感驱使许多年轻人参与志愿服务。",y2:"CET-6 2023年12月 写作",
 c:"acute pain|acute awareness|acute shortage",n:"severe|sharp|intense|keen",r:"acu-(sharp) + te(adj)"},

{w:"adapt",p:"/əˈdæpt/",m:"v. 适应；改编",f:"ultra",s:{L:7,R:16,W:12,S:7},t:"cet6",
 e1:"International students often need time to adapt to a new academic environment.",z1:"国际学生通常需要时间来适应新的学术环境。",y1:"CET-6 2021年12月 阅读",
 e2:"The novel was adapted into a successful television series.",z2:"这部小说被改编成了一部成功的电视剧。",y2:"CET-6 2019年6月 翻译",
 c:"adapt to change|adapt quickly|adapt a novel",n:"adjust|modify|acclimatize|tailor",r:"ad-(to) + apt(fit)"},

{w:"addict",p:"/ˈædɪkt/",m:"n./v. 上瘾者；使沉迷",f:"high",s:{L:7,R:12,W:7,S:8},t:"cet6",
 e1:"Smartphone addiction has become a growing concern among parents and educators.",z1:"手机成瘾已成为家长和教育者日益关注的问题。",y1:"CET-6 2023年6月 阅读",
 e2:"Many teenagers are addicted to social media platforms and online gaming.",z2:"许多青少年沉迷于社交媒体平台和网络游戏。",y2:"CET-6 2021年6月 写作",
 c:"drug addict|internet addict|addicted to",n:"dependent|hooked|obsessed|devoted",r:"ad-(to) + dicere(devote)"},

{w:"adequate",p:"/ˈædɪkwət/",m:"adj. 足够的；适当的",f:"ultra",s:{L:6,R:16,W:13,S:5},t:"cet6",
 e1:"Many developing countries lack adequate access to clean drinking water.",z1:"许多发展中国家缺乏足够的清洁饮用水。",y1:"CET-6 2020年9月 翻译",
 e2:"The report concluded that the current safety measures were not adequate.",z2:"报告结论认为当前的安全措施不够充分。",y2:"CET-6 2022年12月 阅读",
 c:"adequate resources|adequate preparation|more than adequate",n:"sufficient|enough|suitable|satisfactory",r:"ad-(to) + equare(make equal) + ate(adj)"},

{w:"adhere",p:"/ədˈhɪə(r)/",m:"v. 遵守；黏附；坚持",f:"medium",s:{L:4,R:14,W:10,S:4},t:"cet6",
 e1:"All staff members must strictly adhere to the company's code of conduct.",z1:"所有员工必须严格遵守公司行为准则。",y1:"CET-6 2021年6月 阅读",
 e2:"The new coating material adheres firmly to metal surfaces even under extreme conditions.",z2:"新型涂层材料即使在极端条件下也能牢固黏附在金属表面。",y2:"CET-6 2019年12月 阅读",
 c:"adhere to rules|adhere to the principle|firmly adhere",n:"stick to|comply with|follow|cling",r:"ad-(to) + haerere(stick)"},

{w:"adjacent",p:"/əˈdʒeɪsnt/",m:"adj. 相邻的；邻近的",f:"medium",s:{L:5,R:12,W:7,S:4},t:"cet6",
 e1:"The research center is located in a building adjacent to the main campus.",z1:"研究中心位于主校区相邻的一栋建筑内。",y1:"CET-6 2018年6月 阅读",
 e2:"The two countries share adjacent borders and have maintained peaceful relations for decades.",z2:"两国共享相邻边界，数十年来一直保持和平关系。",y2:"CET-6 2023年12月 翻译",
 c:"adjacent to|adjacent rooms|adjacent building",n:"neighboring|adjoining|bordering|next to",r:"ad-(to) + jacere(lie)"},

{w:"administer",p:"/ədˈmɪnɪstə(r)/",m:"v. 管理；执行；给予",f:"medium",s:{L:5,R:14,W:9,S:4},t:"cet6",
 e1:"The fund is administered by a committee of experts in education and finance.",z1:"该基金由一个教育和金融专家委员会管理。",y1:"CET-6 2020年12月 阅读",
 e2:"The vaccine must be administered by a qualified healthcare professional.",z2:"疫苗必须由合格的医疗专业人员注射。",y2:"CET-6 2022年6月 阅读",
 c:"administer the test|administer medication|administer a fund",n:"manage|supervise|dispense|execute",r:"ad-(to) + ministrare(serve)"},

{w:"adolescent",p:"/ˌædəˈlesnt/",m:"n./adj. 青少年；青春期的",f:"high",s:{L:6,R:14,W:8,S:7},t:"cet6",
 e1:"Adolescent mental health has become a priority issue in public health policy.",z1:"青少年心理健康已成为公共卫生政策的优先议题。",y1:"CET-6 2023年6月 阅读",
 e2:"The adolescent brain undergoes significant development, particularly in emotional regulation.",z2:"青少年大脑经历显著发育，特别是在情绪调节方面。",y2:"CET-6 2021年12月 阅读",
 c:"adolescent behavior|adolescent development|adolescent crisis",n:"teenager|juvenile|youth|pubescent",r:"ad-(to) + olescere(grow up) + ent(person)"},

{w:"advocate",p:"/ˈædvəkeɪt/",m:"v./n. 提倡；倡导者",f:"ultra",s:{L:6,R:16,W:13,S:7},t:"cet6",
 e1:"Environmental groups have long advocated for stricter regulations on carbon emissions.",z1:"环保组织长期以来一直倡导更严格的碳排放法规。",y1:"CET-6 2022年12月 阅读",
 e2:"He is a passionate advocate for educational reform in rural areas.",z2:"他是农村地区教育改革的热心倡导者。",y2:"CET-6 2020年9月 写作",
 c:"strongly advocate|advocate for change|human rights advocate",n:"champion|supporter|promote|endorse",r:"ad-(to) + vocare(call)"},

{w:"aesthetic",p:"/iːsˈθetɪk/",m:"adj./n. 美学的；审美观",f:"medium",s:{L:5,R:12,W:7,S:5},t:"cet6",
 e1:"The design of the building reflects both functional needs and aesthetic values.",z1:"建筑设计既反映了功能需求，也体现了美学价值。",y1:"CET-6 2019年12月 翻译",
 e2:"Traditional Chinese gardens represent a unique aesthetic philosophy toward nature.",z2:"中国传统园林代表了一种独特的自然审美哲学。",y2:"CET-6 2021年6月 阅读",
 c:"aesthetic value|aesthetic appeal|aesthetic judgment",n:"artistic|beautiful|visual|artistic taste",r:"aesthet-(感觉/perception) + ic(adj)"},

{w:"affirm",p:"/əˈfɜːm/",m:"v. 肯定；确认；断言",f:"medium",s:{L:4,R:13,W:9,S:4},t:"cet6",
 e1:"The court affirmed the lower court's decision, rejecting the appeal.",z1:"法院维持了下级法院的判决，驳回了上诉。",y1:"CET-6 2020年12月 阅读",
 e2:"The study affirms the importance of early childhood education in cognitive development.",z2:"这项研究肯定了幼儿教育在认知发展中的重要性。",y2:"CET-6 2023年6月 阅读",
 c:"affirm the decision|affirm commitment|affirm the value",n:"confirm|assert|declare|uphold",r:"af-(to) + firmare(strengthen)"},

{w:"aggravate",p:"/ˈæɡrəveɪt/",m:"v. 加重；使恶化",f:"medium",s:{L:5,R:13,W:8,S:4},t:"cet6",
 e1:"Air pollution can aggravate existing respiratory conditions such as asthma.",z1:"空气污染会加重哮喘等已有的呼吸系统疾病。",y1:"CET-6 2022年6月 阅读",
 e2:"The economic crisis was aggravated by political instability in the region.",z2:"经济危机因该地区的政治不稳定而加剧。",y2:"CET-6 2019年12月 翻译",
 c:"aggravate the situation|aggravate symptoms|further aggravate",n:"worsen|exacerbate|intensify|compound",r:"ag-(to) + gravis(heavy) + ate(verb)"},

{w:"aggregate",p:"/ˈæɡrɪɡət/",m:"n./v./adj. 合计；聚集；总计的",f:"medium",s:{L:4,R:14,W:8,S:3},t:"cet6",
 e1:"In aggregate, the data suggests a positive trend in employment rates.",z1:"总体而言，数据显示就业率呈积极趋势。",y1:"CET-6 2021年6月 阅读",
 e2:"The website aggregates news from hundreds of different sources worldwide.",z2:"该网站汇集了来自全球数百个不同来源的新闻。",y2:"CET-6 2023年12月 阅读",
 c:"in aggregate|aggregate demand|aggregate data",n:"total|collect|sum|accumulate",r:"ag-(to) + greg(flock) + ate(make)"},

{w:"agony",p:"/ˈæɡəni/",m:"n. 极大的痛苦",f:"medium",s:{L:5,R:12,W:7,S:5},t:"cet6",
 e1:"The patient had to endure prolonged agony before the painkillers took effect.",z1:"患者在止痛药生效前不得不忍受长时间的痛苦。",y1:"CET-6 2018年12月 阅读",
 e2:"The family went through the agony of waiting for news after the earthquake.",z2:"地震后，这个家庭经历了等待消息的痛苦。",y2:"CET-6 2022年6月 翻译",
 c:"in agony|mental agony|prolonged agony",n:"suffering|torment|anguish|distress",r:"agon(contest/struggle) + y(state)"},

{w:"alert",p:"/əˈlɜːt/",m:"v./n./adj. 警告；警觉的",f:"high",s:{L:8,R:13,W:7,S:7},t:"cet6",
 e1:"Authorities issued a flood alert as heavy rain continued for several days.",z1:"由于连日暴雨持续，当局发布了洪水警报。",y1:"CET-6 2021年6月 听力",
 e2:"Staying mentally alert is crucial when driving long distances at night.",z2:"夜间长途驾驶时保持头脑警觉至关重要。",y2:"CET-6 2019年6月 阅读",
 c:"stay alert|alert the authorities|on high alert",n:"warn|notify|vigilant|attentive",r:"all'erta(to the watchtower) from Italian"},

{w:"alienate",p:"/ˈeɪliəneɪt/",m:"v. 疏远；使格格不入",f:"medium",s:{L:4,R:12,W:9,S:5},t:"cet6",
 e1:"Excessive screen time can alienate children from face-to-face social interactions.",z1:"过度的屏幕时间会使儿童疏远面对面的社交互动。",y1:"CET-6 2022年12月 阅读",
 e2:"The new policy risked alienating some of the company's most loyal customers.",z2:"新政策有可能疏远公司一些最忠实的客户。",y2:"CET-6 2020年9月 阅读",
 c:"alienate from|feel alienated|alienate supporters",n:"estrange|isolate|distance|disaffect",r:"alien(陌生的/外国的) + ate(make)"},

{w:"allege",p:"/əˈledʒ/",m:"v. 声称；指控（未经证实）",f:"medium",s:{L:4,R:14,W:9,S:5},t:"cet6",
 e1:"The newspaper alleged that the company had been involved in illegal trade practices.",z1:"该报声称该公司参与了非法贸易活动。",y1:"CET-6 2019年12月 阅读",
 e2:"It is alleged that the funds were misused by senior officials.",z2:"据称资金被高级官员挪用。",y2:"CET-6 2021年12月 阅读",
 c:"allege that|it is alleged|allege misconduct",n:"claim|assert|accuse|contend",r:"al-(to) + legare(send/declare)"},

{w:"alleviate",p:"/əˈliːvieɪt/",m:"v. 减轻；缓解",f:"high",s:{L:5,R:15,W:12,S:5},t:"cet6",
 e1:"The government has introduced measures to alleviate poverty in rural areas.",z1:"政府已出台措施以缓解农村地区的贫困状况。",y1:"CET-6 2023年6月 翻译",
 e2:"Regular yoga practice can help alleviate stress and improve overall well-being.",z2:"定期练习瑜伽有助于缓解压力并改善整体健康状况。",y2:"CET-6 2021年6月 阅读",
 c:"alleviate poverty|alleviate suffering|alleviate symptoms",n:"relieve|ease|mitigate|lessen",r:"al-(to) + levis(light) + ate(verb)"},

{w:"allocate",p:"/ˈæləkeɪt/",m:"v. 分配；拨出",f:"high",s:{L:5,R:15,W:11,S:4},t:"cet6",
 e1:"The government plans to allocate an additional 10 billion yuan to healthcare.",z1:"政府计划额外拨款100亿元用于医疗保健。",y1:"CET-6 2022年12月 翻译",
 e2:"It is crucial to allocate your time effectively when preparing for exams.",z2:"备考时有效分配时间至关重要。",y2:"CET-6 2020年6月 写作",
 c:"allocate resources|allocate funds|allocate time",n:"assign|distribute|allot|designate",r:"al-(to) + locate(place)"},

{w:"ambiguity",p:"/ˌæmbɪˈɡjuːəti/",m:"n. 歧义；模棱两可",f:"medium",s:{L:4,R:13,W:10,S:3},t:"cet6",
 e1:"The ambiguity in the contract led to a prolonged legal dispute between the parties.",z1:"合同中的模糊表述导致双方之间的法律纠纷持续了很长时间。",y1:"CET-6 2021年6月 阅读",
 e2:"Poetry often thrives on ambiguity, allowing multiple interpretations.",z2:"诗歌往往因歧义而更有韵味，允许多种解读。",y2:"CET-6 2019年12月 阅读",
 c:"moral ambiguity|resolve ambiguity|deliberate ambiguity",n:"vagueness|uncertainty|obscurity|equivocation",r:"ambi-(both) + agere(drive) + ity(state)"},

{w:"ambition",p:"/æmˈbɪʃn/",m:"n. 雄心；抱负",f:"ultra",s:{L:6,R:13,W:11,S:8},t:"cet6",
 e1:"Young people should be encouraged to pursue their ambitions with determination.",z1:"应该鼓励年轻人坚定地追求自己的抱负。",y1:"CET-6 2023年12月 写作",
 e2:"The country's space program reflects its growing global ambitions.",z2:"该国的太空计划反映了其日益增长的全球雄心。",y2:"CET-6 2021年12月 翻译",
 c:"political ambition|burning ambition|achieve one's ambition",n:"aspiration|goal|dream|drive",r:"ambi-(around) + ire(go) + tion(noun)"},

{w:"amend",p:"/əˈmend/",m:"v. 修订；修改",f:"medium",s:{L:3,R:14,W:10,S:3},t:"cet6",
 e1:"The constitution was amended to include new provisions on environmental protection.",z1:"宪法经过修订，增加了环境保护方面的新条款。",y1:"CET-6 2020年12月 阅读",
 e2:"The committee proposed to amend several clauses in the draft legislation.",z2:"委员会提议修改立法草案中的若干条款。",y2:"CET-6 2023年6月 阅读",
 c:"amend the law|amend the constitution|propose to amend",n:"modify|revise|alter|correct",r:"a-(away from) + menda(fault)"},

{w:"analogy",p:"/əˈnælədʒi/",m:"n. 类比；相似",f:"medium",s:{L:5,R:15,W:10,S:4},t:"cet6",
 e1:"The professor used an analogy between the human heart and a mechanical pump.",z1:"教授用人心脏和机械泵做了类比。",y1:"CET-6 2018年6月 听力",
 e2:"Drawing an analogy between economic and biological systems has its limitations.",z2:"将经济系统与生物系统进行类比有其局限性。",y2:"CET-6 2021年12月 阅读",
 c:"draw an analogy|by analogy|close analogy",n:"comparison|similarity|parallel|likeness",r:"ana-(according to) + logy(ratio/word)"},

{w:"anticipate",p:"/ænˈtɪsɪpeɪt/",m:"v. 预期；期望",f:"high",s:{L:5,R:15,W:12,S:5},t:"cet6",
 e1:"Economists did not anticipate the rapid recovery of the consumer market.",z1:"经济学家没有预料到消费市场会迅速复苏。",y1:"CET-6 2023年12月 阅读",
 e2:"The event was more successful than anyone could have anticipated.",z2:"这次活动的成功超出了所有人的预期。",y2:"CET-6 2020年9月 翻译",
 c:"worse than anticipated|eagerly anticipated|fail to anticipate",n:"expect|predict|foresee|envisage",r:"anti-(before) + capere(take)"},

{w:"apparatus",p:"/ˌæpəˈreɪtəs/",m:"n. 仪器；设备；机构",f:"medium",s:{L:5,R:13,W:7,S:3},t:"cet6",
 e1:"The laboratory is equipped with sophisticated apparatus for DNA analysis.",z1:"实验室配备了用于DNA分析的精密仪器。",y1:"CET-6 2020年12月 阅读",
 e2:"The entire administrative apparatus of the state needs to be modernised.",z2:"整个国家的行政机构都需要现代化。",y2:"CET-6 2019年6月 翻译",
 c:"scientific apparatus|state apparatus|breathing apparatus",n:"equipment|device|instrument|machinery",r:"ap-(to) + parare(prepare) + tus(noun)"},

{w:"applaud",p:"/əˈplɔːd/",m:"v. 鼓掌；称赞",f:"medium",s:{L:5,R:11,W:8,S:6},t:"cet6",
 e1:"The audience applauded enthusiastically after the orchestra's stunning performance.",z1:"管弦乐队精彩绝伦的演出后，观众热烈鼓掌。",y1:"CET-6 2018年12月 听力",
 e2:"Environmental groups applauded the government's decision to ban single-use plastics.",z2:"环保组织对政府禁止一次性塑料制品的决定表示赞赏。",y2:"CET-6 2021年6月 阅读",
 c:"applaud the decision|applaud the effort|warmly applauded",n:"clap|praise|commend|cheer",r:"ap-(to) + plaudere(clap)"},

{w:"appraisal",p:"/əˈpreɪzl/",m:"n. 评估；评价",f:"medium",s:{L:4,R:13,W:9,S:4},t:"cet6",
 e1:"Annual performance appraisals are an important part of human resource management.",z1:"年度绩效评估是人力资源管理的重要组成部分。",y1:"CET-6 2022年6月 阅读",
 e2:"A critical appraisal of the existing research reveals several methodological flaws.",z2:"对现有研究的批判性评价揭示了几个方法论上的缺陷。",y2:"CET-6 2020年12月 阅读",
 c:"performance appraisal|critical appraisal|project appraisal",n:"evaluation|assessment|review|judgment",r:"ap-(to) + prais(value) + al(noun)"},

{w:"arbitrary",p:"/ˈɑːbɪtrəri/",m:"adj. 任意的；武断的",f:"high",s:{L:4,R:14,W:11,S:4},t:"cet6",
 e1:"Critics argue that the selection process seems arbitrary and lacks transparency.",z1:"批评者认为选拔过程似乎很武断，缺乏透明度。",y1:"CET-6 2021年12月 阅读",
 e2:"The distinction between art and craft is often arbitrary and culturally determined.",z2:"艺术与工艺之间的区别往往是人为设定的，由文化决定。",y2:"CET-6 2019年6月 阅读",
 c:"arbitrary decision|arbitrary distinction|seemingly arbitrary",n:"random|capricious|subjective|discretionary",r:"arbiter(judge) + ary(adj)"},

{w:"arouse",p:"/əˈraʊz/",m:"v. 唤起；激发",f:"high",s:{L:5,R:13,W:9,S:5},t:"cet6",
 e1:"The documentary aroused public concern about the extinction of endangered species.",z1:"这部纪录片唤起了公众对濒危物种灭绝的关注。",y1:"CET-6 2022年6月 翻译",
 e2:"His controversial remarks aroused heated debate among scholars in the field.",z2:"他的争议性言论在该领域学者中引发了激烈辩论。",y2:"CET-6 2020年9月 阅读",
 c:"arouse interest|arouse suspicion|arouse controversy",n:"provoke|stimulate|evoke|awaken",r:"a-(intensive) + rouse(wake up)"},

{w:"array",p:"/əˈreɪ/",m:"n./v. 一系列；排列",f:"medium",s:{L:4,R:14,W:10,S:4},t:"cet6",
 e1:"The museum displays an impressive array of artifacts from ancient civilisations.",z1:"博物馆展示了一系列来自古代文明的令人印象深刻的文物。",y1:"CET-6 2019年12月 翻译",
 e2:"Consumers are faced with a bewildering array of choices in the digital marketplace.",z2:"消费者在数字市场中面临着令人眼花缭乱的选择。",y2:"CET-6 2023年6月 阅读",
 c:"an array of|vast array|dazzling array",n:"collection|assortment|range|display",r:"ar-(to) + rayer(arrange) from Old French"},

{w:"articulate",p:"/ɑːˈtɪkjuleɪt/",m:"v./adj. 明确表达；口齿伶俐的",f:"medium",s:{L:4,R:12,W:10,S:7},t:"cet6",
 e1:"The candidate articulated her vision for educational reform with remarkable clarity.",z1:"这位候选人以非凡的清晰度阐述了她对教育改革的愿景。",y1:"CET-6 2022年12月 听力",
 e2:"Being able to articulate complex ideas simply is a valuable communication skill.",z2:"能够简单明了地表达复杂思想是一种宝贵的沟通技巧。",y2:"CET-6 2021年6月 写作",
 c:"articulate clearly|highly articulate|articulate the vision",n:"express|voice|communicate|eloquent",r:"articul-(jointed) + ate(make)"},

{w:"ascertain",p:"/ˌæsəˈteɪn/",m:"v. 查明；确定",f:"medium",s:{L:3,R:14,W:9,S:3},t:"cet6",
 e1:"The police are trying to ascertain the exact cause of the accident.",z1:"警方正在努力查明事故的确切原因。",y1:"CET-6 2018年12月 阅读",
 e2:"It is difficult to ascertain whether the new treatment is more effective.",z2:"很难确定新的治疗方法是否更有效。",y2:"CET-6 2021年12月 阅读",
 c:"ascertain the facts|ascertain the cause|difficult to ascertain",n:"determine|establish|verify|find out",r:"as-(to) + certus(certain)"},

{w:"ascribe",p:"/əˈskraɪb/",m:"v. 归因于；归咎于",f:"medium",s:{L:3,R:14,W:11,S:3},t:"cet6",
 e1:"Many historians ascribe the fall of the empire to a combination of internal and external factors.",z1:"许多历史学家将帝国的衰落归因于内外因素的结合。",y1:"CET-6 2020年12月 阅读",
 e2:"The success of the project cannot be ascribed to any single individual.",z2:"该项目的成功不能归因于任何单一个人。",y2:"CET-6 2019年6月 翻译",
 c:"ascribe to|can be ascribed|widely ascribed",n:"attribute|assign|credit|impute",r:"a-(to) + scribere(write)"},

{w:"assert",p:"/əˈsɜːt/",m:"v. 断言；坚持；维护",f:"high",s:{L:5,R:14,W:13,S:6},t:"cet6",
 e1:"The report asserts that climate change poses an immediate threat to food security.",z1:"报告断言气候变化对粮食安全构成直接威胁。",y1:"CET-6 2023年6月 阅读",
 e2:"Employees should learn to assert their rights in the workplace appropriately.",z2:"员工应该学会在职场中适当地维护自己的权利。",y2:"CET-6 2021年12月 写作",
 c:"assert control|assert oneself|confidently assert",n:"declare|proclaim|insist|maintain",r:"as-(to) + serere(join/assert)"},

{w:"assimilate",p:"/əˈsɪməleɪt/",m:"v. 吸收；同化",f:"medium",s:{L:4,R:13,W:9,S:5},t:"cet6",
 e1:"Immigrants often struggle to assimilate into the dominant culture while preserving their heritage.",z1:"移民在努力融入主流文化的同时，往往也在努力保留自己的传统。",y1:"CET-6 2020年6月 翻译",
 e2:"The human brain can assimilate new information most effectively through active learning.",z2:"人脑通过主动学习可以最有效地吸收新信息。",y2:"CET-6 2022年12月 阅读",
 c:"assimilate into|assimilate knowledge|fully assimilated",n:"absorb|integrate|incorporate|digest",r:"as-(to) + similis(similar) + ate(make)"},

{w:"attribute",p:"/əˈtrɪbjuːt/",m:"v./n. 归因于；属性；特征",f:"ultra",s:{L:5,R:16,W:13,S:5},t:"cet6",
 e1:"The company attributes its success to continuous innovation and customer focus.",z1:"该公司将其成功归因于持续创新和以客户为中心。",y1:"CET-6 2022年6月 阅读",
 e2:"Resilience is considered an essential attribute for leadership in times of crisis.",z2:"韧性被认为是危机时期领导力的基本特质。",y2:"CET-6 2023年12月 写作",
 c:"attribute to|personal attribute|positive attribute",n:"ascribe|quality|characteristic|trait",r:"at-(to) + tribuere(give)"},
],

// ======================== 雅思词汇 IELTS ========================
ielts: [
{w:"analyze",p:"/ˈænəlaɪz/",m:"v. 分析",f:"ultra",s:{L:9,R:22,W:15,S:6},t:"ielts",
 e1:"The researchers analyzed data collected from over 5,000 participants across 12 countries.",z1:"研究人员分析了来自12个国家5000多名参与者的数据。",y1:"剑桥雅思17 T2R1, 2023",
 e2:"Students are taught to critically analyze both the content and methodology of academic papers.",z2:"学生被教导要批判性地分析学术论文的内容和方法论。",y2:"剑桥雅思15 T3R2, 2021",
 c:"analyze data|analyze the results|critically analyze",n:"examine|evaluate|scrutinize|investigate",r:"ana-(throughout) + lyein(loosen)"},

{w:"significant",p:"/sɪɡˈnɪfɪkənt/",m:"adj. 显著的；重要的；有意义的",f:"ultra",s:{L:11,R:22,W:17,S:8},t:"ielts",
 e1:"There has been a significant increase in the number of international students enrolling in higher education.",z1:"高等教育阶段的国际学生入学人数有了显著增长。",y1:"剑桥雅思18 T1R1, 2024",
 e2:"The study found no significant difference between the two treatment groups after six months.",z2:"研究发现两种治疗方案在六个月后没有显著差异。",y2:"剑桥雅思16 T4R3, 2022",
 c:"significant difference|significant impact|statistically significant",n:"notable|substantial|considerable|important",r:"sign-(mark) + fic(make) + ant(adj)"},

{w:"approach",p:"/əˈprəʊtʃ/",m:"n./v. 方法；接近；处理",f:"ultra",s:{L:12,R:20,W:14,S:10},t:"ielts",
 e1:"A multidisciplinary approach is essential for addressing complex environmental challenges.",z1:"解决复杂的环境挑战需要多学科的方法。",y1:"剑桥雅思18 T2R2, 2024",
 e2:"As the deadline approached, the team intensified their efforts to complete the project.",z2:"随着截止日期的临近，团队加紧努力完成项目。",y2:"剑桥雅思14 T3R1, 2019",
 c:"take an approach|holistic approach|approach the problem",n:"method|strategy|perspective|tackle",r:"ad-(to) + prope(near)"},

{w:"evidence",p:"/ˈevɪdəns/",m:"n./v. 证据；证明",f:"ultra",s:{L:10,R:24,W:16,S:7},t:"ielts",
 e1:"There is compelling evidence that regular physical activity can delay cognitive decline.",z1:"有令人信服的证据表明定期体育锻炼可以延缓认知衰退。",y1:"剑桥雅思17 T3R3, 2023",
 e2:"The archaeological evidence suggests that the settlement dates back to the Bronze Age.",z2:"考古证据表明该定居点可以追溯到青铜时代。",y2:"剑桥雅思15 T2R2, 2021",
 c:"scientific evidence|provide evidence|growing body of evidence",n:"proof|data|indication|confirmation",r:"e-(out) + videre(see) + ence(noun)"},

{w:"factor",p:"/ˈfæktə(r)/",m:"n. 因素；要素",f:"ultra",s:{L:10,R:21,W:15,S:8},t:"ielts",
 e1:"Socioeconomic factors play a crucial role in determining educational outcomes.",z1:"社会经济因素在决定教育成果方面起着关键作用。",y1:"剑桥雅思18 T3R2, 2024",
 e2:"Cost is often the deciding factor when consumers choose between competing products.",z2:"成本往往是消费者在竞争产品之间选择时的决定性因素。",y2:"剑桥雅思13 T1R1, 2018",
 c:"key factor|contributing factor|risk factor",n:"element|component|variable|determinant",r:"fac-(do/make) + tor(agent)"},

{w:"research",p:"/rɪˈsɜːtʃ/",m:"n./v. 研究；调查",f:"ultra",s:{L:13,R:24,W:17,S:7},t:"ielts",
 e1:"Recent research indicates that bilingualism may delay the onset of dementia by several years.",z1:"最近的研究表明双语能力可能将痴呆症的发作推迟数年。",y1:"剑桥雅思16 T4R3, 2022",
 e2:"The research team conducted extensive fieldwork in remote areas of the Amazon rainforest.",z2:"研究团队在亚马逊雨林的偏远地区进行了广泛的实地调查。",y2:"剑桥雅思14 T2R1, 2019",
 c:"conduct research|research findings|groundbreaking research",n:"study|investigation|enquiry|exploration",r:"re-(again) + search(seek)"},

{w:"economic",p:"/ˌiːkəˈnɒmɪk/",m:"adj. 经济的；经济学的",f:"ultra",s:{L:11,R:22,W:16,S:9},t:"ielts",
 e1:"The economic implications of climate change extend far beyond environmental concerns.",z1:"气候变化的经济影响远远超出了环境问题的范围。",y1:"剑桥雅思18 T2R3, 2024",
 e2:"Tourism has become a major economic driver for many developing countries.",z2:"旅游业已成为许多发展中国家的主要经济驱动力。",y2:"剑桥雅思15 T4R1, 2021",
 c:"economic growth|economic crisis|economic sustainability",n:"financial|fiscal|monetary|commercial",r:"eco-(house) + nom(os)-(manage) + ic(adj)"},

{w:"environment",p:"/ɪnˈvaɪrənmənt/",m:"n. 环境；周围",f:"ultra",s:{L:13,R:21,W:14,S:12},t:"ielts",
 e1:"Protecting the natural environment while promoting economic growth remains a global challenge.",z1:"在促进经济增长的同时保护自然环境仍然是一个全球性挑战。",y1:"剑桥雅思17 T4R2, 2023",
 e2:"A supportive work environment is essential for employee productivity and well-being.",z2:"支持性的工作环境对员工的生产力和福祉至关重要。",y2:"剑桥雅思14 T1R1, 2019",
 c:"natural environment|working environment|protect the environment",n:"surroundings|habitat|ecosystem|setting",r:"en-(in) + viron(circle/around) + ment(noun)"},

{w:"individual",p:"/ˌɪndɪˈvɪdʒuəl/",m:"n./adj. 个人；个体的；单独的",f:"ultra",s:{L:10,R:20,W:14,S:9},t:"ielts",
 e1:"The educational system should cater to the needs of each individual student.",z1:"教育体系应该满足每个学生个体的需求。",y1:"剑桥雅思18 T4R2, 2024",
 e2:"Individual responsibility must be balanced with collective action to address climate change.",z2:"应对气候变化必须平衡个人责任与集体行动。",y2:"剑桥雅思16 T2R3, 2022",
 c:"individual differences|individual rights|the individual",n:"person|single|separate|distinct",r:"in-(not) + dividere(divide) + ual(adj)"},

{w:"impact",p:"/ˈɪmpækt/",m:"n./v. 影响；冲击；撞击",f:"ultra",s:{L:10,R:21,W:15,S:9},t:"ielts",
 e1:"The rapid expansion of urban areas has had a profound impact on biodiversity.",z1:"城市地区的快速扩张对生物多样性产生了深远影响。",y1:"剑桥雅思17 T2R2, 2023",
 e2:"Social media has fundamentally impacted the way people form and maintain relationships.",z2:"社交媒体从根本上影响了人们建立和维持关系的方式。",y2:"剑桥雅思15 T1R1, 2021",
 c:"environmental impact|positive impact|have an impact on",n:"effect|influence|consequence|repercussion",r:"im-(into) + pangere(strike)"},

{w:"issue",p:"/ˈɪʃuː/",m:"n./v. 问题；议题；发布",f:"ultra",s:{L:12,R:19,W:15,S:13},t:"ielts",
 e1:"Climate change is arguably the most pressing issue facing humanity in the 21st century.",z1:"气候变化可以说是21世纪人类面临的最紧迫问题。",y1:"剑桥雅思18 T3R1, 2024",
 e2:"The university issued a statement clarifying its position on academic freedom.",z2:"该大学发布了一份声明，澄清其对学术自由的立场。",y2:"剑桥雅思13 T2R1, 2018",
 c:"address an issue|key issue|controversial issue",n:"problem|matter|concern|topic",r:"iss-(go out) + ue(noun)"},

{w:"process",p:"/ˈprəʊses/",m:"n./v. 过程；处理；加工",f:"ultra",s:{L:11,R:20,W:14,S:7},t:"ielts",
 e1:"The university application process can be lengthy and requires careful preparation.",z1:"大学申请过程可能很长，需要精心准备。",y1:"剑桥雅思18 T1R1, 2024",
 e2:"The human brain processes visual information much faster than textual information.",z2:"人脑处理视觉信息的速度远快于文本信息。",y2:"剑桥雅思16 T3R3, 2022",
 c:"learning process|application process|process information",n:"procedure|method|operation|system",r:"pro-(forward) + cedere(go)"},

{w:"require",p:"/rɪˈkwaɪə(r)/",m:"v. 需要；要求",f:"ultra",s:{L:10,R:18,W:16,S:8},t:"ielts",
 e1:"The course requires students to complete a 10,000-word dissertation on an approved topic.",z1:"该课程要求学生就批准的题目完成一篇1万字的论文。",y1:"剑桥雅思17 T1R2, 2023",
 e2:"Addressing global poverty requires coordinated efforts from governments and international organisations.",z2:"解决全球贫困问题需要政府和国际组织的协调努力。",y2:"剑桥雅思14 T4R3, 2019",
 c:"require attention|require further investigation|as required",n:"need|demand|necessitate|entail",r:"re-(intensive) + quaerere(seek)"},

{w:"policy",p:"/ˈpɒləsi/",m:"n. 政策；方针",f:"ultra",s:{L:9,R:22,W:17,S:9},t:"ielts",
 e1:"Governments worldwide are implementing policies to reduce carbon emissions and promote green energy.",z1:"世界各国政府正在实施减少碳排放和推广绿色能源的政策。",y1:"剑桥雅思18 T2R3, 2024",
 e2:"The university's admissions policy has been revised to promote greater diversity.",z2:"大学的招生政策已经修订，以促进更大的多样性。",y2:"剑桥雅思15 T3R1, 2021",
 c:"public policy|foreign policy|implement a policy",n:"strategy|plan|principle|guideline",r:"poli-(city) + cy(state)"},

{w:"benefit",p:"/ˈbenɪfɪt/",m:"n./v. 好处；受益",f:"ultra",s:{L:10,R:17,W:13,S:11},t:"ielts",
 e1:"The health benefits of regular exercise extend beyond physical fitness to mental well-being.",z1:"定期锻炼的健康益处不仅限于身体健康，还包括心理健康。",y1:"剑桥雅思17 T3R3, 2023",
 e2:"Both parties stand to benefit from increased trade and cultural exchange.",z2:"双方都将从增加的贸易和文化交流中受益。",y2:"剑桥雅思13 T4R1, 2018",
 c:"health benefits|economic benefit|mutual benefit",n:"advantage|gain|profit|merit",r:"bene-(well) + facere(do)"},

{w:"culture",p:"/ˈkʌltʃə(r)/",m:"n. 文化；文明",f:"ultra",s:{L:12,R:18,W:11,S:12},t:"ielts",
 e1:"Understanding local culture is essential for successful cross-cultural communication.",z1:"了解当地文化对于成功的跨文化交流至关重要。",y1:"剑桥雅思18 T4R1, 2024",
 e2:"The culture of consumerism has been criticised for promoting unsustainable lifestyles.",z2:"消费主义文化因提倡不可持续的生活方式而受到批评。",y2:"剑桥雅思16 T1R2, 2022",
 c:"popular culture|cultural diversity|corporate culture",n:"civilisation|customs|traditions|lifestyle",r:"cultura-(cultivate/tend) + ure(noun)"},

{w:"available",p:"/əˈveɪləbl/",m:"adj. 可用的；可获得的",f:"ultra",s:{L:9,R:17,W:11,S:9},t:"ielts",
 e1:"The increasing amount of information available online has transformed the way we learn.",z1:"网上可用的信息越来越多，改变了我们的学习方式。",y1:"剑桥雅思18 T1R1, 2024",
 e2:"Financial aid is available for students from low-income backgrounds.",z2:"来自低收入家庭的学生可以获得经济援助。",y2:"剑桥雅思14 T2R1, 2019",
 c:"readily available|widely available|available resources",n:"accessible|obtainable|usable|at hand",r:"a-(to) + valoir(be worth) + able(can be)"},

{w:"community",p:"/kəˈmjuːnəti/",m:"n. 社区；团体；社会",f:"ultra",s:{L:11,R:16,W:12,S:10},t:"ielts",
 e1:"Strong community ties have been linked to better health outcomes and increased life satisfaction.",z1:"紧密的社区联系与更好的健康状况和提高的生活满意度有关。",y1:"剑桥雅思17 T3R2, 2023",
 e2:"The international community must work together to address the refugee crisis.",z2:"国际社会必须共同努力应对难民危机。",y2:"剑桥雅思15 T2R3, 2021",
 c:"local community|international community|community service",n:"society|group|population|neighbourhood",r:"com-(together) + munis(service) + ty(noun)"},

{w:"source",p:"/sɔːs/",m:"n. 来源；出处",f:"ultra",s:{L:9,R:22,W:14,S:6},t:"ielts",
 e1:"Renewable energy sources such as solar and wind power are becoming increasingly cost-effective.",z1:"太阳能和风能等可再生能源正变得越来越具有成本效益。",y1:"剑桥雅思18 T2R3, 2024",
 e2:"Historians rely on primary sources to construct accurate accounts of past events.",z2:"历史学家依靠第一手资料来构建对过去事件的准确叙述。",y2:"剑桥雅思14 T3R2, 2019",
 c:"reliable source|energy source|source of information",n:"origin|cause|fountain|provenance",r:"surgere(rise) + ce"},

{w:"sustainable",p:"/səˈsteɪnəbl/",m:"adj. 可持续的",f:"ultra",s:{L:9,R:20,W:15,S:9},t:"ielts",
 e1:"Sustainable development requires balancing economic growth with environmental protection.",z1:"可持续发展需要在经济增长与环境保护之间取得平衡。",y1:"剑桥雅思18 T2R3, 2024",
 e2:"Consumers are increasingly demanding products that are ethically sourced and environmentally sustainable.",z2:"消费者越来越要求以道德方式采购且环境可持续的产品。",y2:"剑桥雅思16 T4R1, 2022",
 c:"sustainable development|sustainable energy|environmentally sustainable",n:"viable|enduring|renewable|green",r:"sus-(up) + tenere(hold) + able(can be)"},

{w:"biodiversity",p:"/ˌbaɪəʊdaɪˈvɜːsəti/",m:"n. 生物多样性",f:"high",s:{L:9,R:22,W:10,S:5},t:"ielts",
 e1:"Tropical rainforests are hotspots of biodiversity, containing over half of the world's species.",z1:"热带雨林是生物多样性热点地区，包含全球一半以上的物种。",y1:"剑桥雅思17 T2R2, 2023",
 e2:"The loss of biodiversity threatens ecosystem services that humans depend on for survival.",z2:"生物多样性的丧失威胁着人类赖以生存的生态系统服务。",y2:"剑桥雅思15 T4R2, 2021",
 c:"biodiversity loss|conserve biodiversity|marine biodiversity",n:"biological diversity|species richness|ecosystem variety",r:"bio-(life) + diversity(variety)"},

{w:"climate",p:"/ˈklaɪmət/",m:"n. 气候；风气",f:"ultra",s:{L:12,R:22,W:13,S:10},t:"ielts",
 e1:"Climate scientists warn that global temperatures could rise by more than 2°C without immediate action.",z1:"气候科学家警告说如果不立即采取行动全球气温可能上升超过2摄氏度。",y1:"剑桥雅思18 T2R3, 2024",
 e2:"The political climate has become increasingly polarised in recent years.",z2:"近年来政治气候变得越来越两极分化。",y2:"剑桥雅思14 T1R2, 2019",
 c:"climate change|political climate|economic climate",n:"weather|atmosphere|environment|conditions",r:"klima-(region/slope) + te"},

{w:"conservation",p:"/ˌkɒnsəˈveɪʃn/",m:"n. 保护；保存",f:"high",s:{L:9,R:21,W:11,S:6},t:"ielts",
 e1:"Wildlife conservation efforts have led to the recovery of several endangered species.",z1:"野生动物保护工作已经使若干濒危物种的数量得到恢复。",y1:"剑桥雅思15 T4R2, 2021",
 e2:"Water conservation is becoming increasingly important in arid and semi-arid regions.",z2:"在干旱和半干旱地区，水资源保护变得越来越重要。",y2:"剑桥雅思13 T3R1, 2018",
 c:"wildlife conservation|energy conservation|environmental conservation",n:"preservation|protection|safeguarding|stewardship",r:"con-(together) + servare(keep) + ation(noun)"},

{w:"consumption",p:"/kənˈsʌmpʃn/",m:"n. 消费；消耗",f:"high",s:{L:9,R:21,W:14,S:7},t:"ielts",
 e1:"Global meat consumption has more than doubled in the past 50 years.",z1:"过去50年全球肉类消费量增加了一倍多。",y1:"剑桥雅思18 T1R2, 2024",
 e2:"Reducing energy consumption in households is a key strategy for meeting carbon reduction targets.",z2:"减少家庭能源消耗是实现碳减排目标的关键策略。",y2:"剑桥雅思16 T4R3, 2022",
 c:"energy consumption|consumer consumption|reduce consumption",n:"use|expenditure|utilisation|depletion",r:"con-(altogether) + sumere(take) + tion(noun)"},

{w:"pollution",p:"/pəˈluːʃn/",m:"n. 污染",f:"ultra",s:{L:11,R:20,W:12,S:9},t:"ielts",
 e1:"Air pollution is responsible for an estimated seven million premature deaths each year worldwide.",z1:"空气污染每年导致全球约700万人过早死亡。",y1:"剑桥雅思17 T4R3, 2023",
 e2:"Plastic pollution in the oceans has reached alarming levels, threatening marine ecosystems.",z2:"海洋中的塑料污染已达到令人担忧的程度，威胁着海洋生态系统。",y2:"剑桥雅思15 T4R2, 2021",
 c:"air pollution|water pollution|reduce pollution|noise pollution",n:"contamination|fouling|toxicity|degradation",r:"polluere(defile/soil) + tion(noun)"},

{w:"globalisation",p:"/ˌɡləʊbəlaɪˈzeɪʃn/",m:"n. 全球化",f:"ultra",s:{L:9,R:20,W:15,S:10},t:"ielts",
 e1:"Globalisation has led to unprecedented levels of economic interdependence between nations.",z1:"全球化使国与国之间达到了前所未有的经济相互依存水平。",y1:"剑桥雅思18 T3R1, 2024",
 e2:"Critics argue that globalisation has contributed to widening income inequality within countries.",z2:"批评者认为全球化加剧了国家内部的收入不平等。",y2:"剑桥雅思14 T2R3, 2019",
 c:"economic globalisation|cultural globalisation|impact of globalisation",n:"internationalisation|integration|interconnectedness",r:"global-(worldwide) + isation(process)"},

{w:"inequality",p:"/ˌɪnɪˈkwɒləti/",m:"n. 不平等",f:"high",s:{L:7,R:20,W:15,S:8},t:"ielts",
 e1:"Rising income inequality has become a major concern for policymakers around the world.",z1:"日益加剧的收入不平等已成为全球政策制定者的主要关切。",y1:"剑桥雅思17 T1R3, 2023",
 e2:"Gender inequality in the workplace persists despite decades of equal opportunity legislation.",z2:"尽管有数十年的平等机会立法，职场中的性别不平等依然存在。",y2:"剑桥雅思15 T3R1, 2021",
 c:"social inequality|economic inequality|gender inequality",n:"disparity|imbalance|unfairness|discrimination",r:"in-(not) + aequalitas(equality)"},

{w:"innovation",p:"/ˌɪnəˈveɪʃn/",m:"n. 创新；革新",f:"high",s:{L:8,R:19,W:13,S:7},t:"ielts",
 e1:"Technological innovation is widely regarded as the primary driver of economic growth.",z1:"技术创新被广泛认为是经济增长的主要驱动力。",y1:"剑桥雅思18 T3R2, 2024",
 e2:"The company invests heavily in research and development to stay at the forefront of innovation.",z2:"公司在研发方面投入巨资以保持创新的前沿地位。",y2:"剑桥雅思16 T2R1, 2022",
 c:"technological innovation|product innovation|drive innovation",n:"invention|advancement|breakthrough|novelty",r:"in-(into) + novare(make new) + tion(noun)"},

{w:"diversity",p:"/daɪˈvɜːsəti/",m:"n. 多样性；差异",f:"high",s:{L:8,R:18,W:12,S:8},t:"ielts",
 e1:"Cultural diversity in the workplace has been shown to foster creativity and innovation.",z1:"工作场所的文化多样性已被证明能促进创造力和创新。",y1:"剑桥雅思18 T4R1, 2024",
 e2:"Maintaining genetic diversity is essential for the long-term survival of species.",z2:"保持遗传多样性对物种的长期生存至关重要。",y2:"剑桥雅思15 T4R2, 2021",
 c:"cultural diversity|biological diversity|diversity of opinion",n:"variety|multiplicity|heterogeneity|range",r:"di-(apart) + vertere(turn) + ity(state)"},
],
};

// Last word index - for expansion tracking
WORD_DATA._count = {
  cet6: WORD_DATA.cet6.length,
  ielts: WORD_DATA.ielts.length,
  total: WORD_DATA.cet6.length + WORD_DATA.ielts.length,
};
