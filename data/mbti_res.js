var mbti_id = ["ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ"]
var mbti_img = [
"/image/16Results/ISTJ.png", 
"/image/16Results/ISFJ.png",
"/image/16Results/INFJ.png",
"/image/16Results/INTJ.jpg",
"/image/16Results/ISTP.png",
"/image/16Results/ISFP.png",
"/image/16Results/INFP.png",
"/image/16Results/INTP.png",
"/image/16Results/ESTP.png",
"/image/16Results/ESFP.png",
"/image/16Results/ENFP.png",
"/image/16Results/ENTP.png",
"/image/16Results/ESTJ.png",
"/image/16Results/ESFJ.png",
"/image/16Results/ENFJ.png",
"/image/16Results/ENTJ.png",]

var mbti_name_en = ["Inspector", "Protector", "Counselor", "Mastermind/Scientist",
  "Operator/Instrumentor", "Composer/Artist", "Healer/Tutor", "Architect/Designer",
  "Promotor", "Performer/Demonstrator", "Champion/Advocate/Motivator", "Invertor",
  "Supervisor", "Provider/Seller", "Teacher", "Fieldmarshall/Mobilizer"]//来源：网络
var mbti_name_cn = ["公务员", "监护人", "作  家", "策  划",
  "魔术师", "作曲家", "诗  人", "建筑师",
  "传销员", "表演家", "梦想家", "发明家",
  "大管家", "庄  主", "导  师", "领  袖"]//来源：大春物与分析心理学
var mbti_easy_des=[//主导功能，辅助功能，优点，缺点，职业，代表人物
  ["内倾感觉（Si）习惯常规，维护旧有制度","外倾思考（Te）逻辑性决定，压制冲动","忠诚、内敛、刻苦、低调、踏实肯干、信任权威、遵守规则","教条、传统、缺乏想象力","公务员，副官","弗洛伊德，巴菲特，尼克松，杰弗里·贝索"],//ISTJ
  ["内倾感觉（Si）细节敏感，坚持教化", "外倾情感（Fe）亲密联系，传播道德", "温柔、坚强、保护弱者、吃苦、最理想的老婆", "自我牺牲、极度现实、苦难的承受者", "监护人，秘书，图书管理员，医生，神职人员", "Rosa Parks"],//ISFJ
  ["内倾直觉（Ni）洞察力敏锐，有预见性", "外倾情感（Fe）感受他人需要，表达内心", "思想深刻、情绪强烈、灵魂深邃、文字天赋、促成他人和谐", "理想主义、执拗、神秘感、改造世界", "作家，心理学家，人文教育", "柏拉图，叔本华，荣格，甘地，陀思妥耶夫斯基"],//INFJ
  ["内倾直觉（Ni）洞察力，预见性，掌握事物本质和发展规律", "外倾思考（Te）在做决定的时候服从逻辑", "独立、自信而冷静、理性、淡泊名利、性格坚强、气质神秘、富有知性", "冷漠、高傲而自我、情商极低、内心封闭、特立独行、控制欲", "智囊", "乔治·纳什，扎克·伯格，马斯克，牛顿，特斯拉，萨特，马克思，阿西莫夫，卡梅隆，施瓦辛格"],//INTJ
  ["内倾思考（Ti）追求精确，寻求最优方案", "外倾感觉（Se）捕捉外部世界的各种变化", "沉稳、专注、微操强、胆大心细、学习能力强、理科拔群", "玩世不恭、冲动刺激、多动症", "运动员，手艺者", "李小龙，汤姆克鲁斯，Jack Dorsey"],//ISTP
  ["内倾情感（Fi）善恶分明，坚持信念", "外倾感觉（Se）热衷即兴，行动迅速", "与生俱来的美感友善、魅力、喜欢创作、完美主义", "少言、逃避、容易被欺负、自卑", "设计师，护理师", "乔纳森·艾维，迈克尔·杰克逊，Lady Gaga，Eminem"],//ISFP
  ["内倾情感（Fi）不断反思，保持人性平衡", "外倾直觉（Ne）自由联想，尝试各种可能性", "善解人意、想象力丰富、神秘的美感、善于医治心灵的创伤", "多愁善感、对现实失望、敏感、希望世界和平、超级理想主义", "文学，艺术，宗教，心理咨询", "卢梭，莎士比亚，梵高，约翰·列侬，奥威尔，村上春树"],//INFP
  ["内倾思考（Ti）通过模型解决问题", "外倾直觉（Ne）自由组合想法，喜欢改造环境", "分析现象、寻求原理、独立思考、冷静、淡薄、高IQ", "冷漠、远离现实、不拘小节", "数学家，科学家，建筑师", "爱因斯坦，居里夫人，Larry Page，哈耶克"],//INTP
  ["外倾感觉（Se）热衷于即兴，个性鲜明", "内倾思考（Ti）对逻辑性敏感，追求精确", "魅力、会说话、随机应变、圆滑、谈判高手", "忘恩负义、撒谎、不择手段、利己主义", "销售，主持人，经纪人，活动策划", "丘吉尔，巴顿，麦克阿瑟，海明威，小布什"],//ESTP
  ["外倾感觉（Se）对物质世界的敏锐察觉", "内倾情感（Fi）善恶分明，保持和谐", "乐观、实用主义、喜欢交际、大度、活跃、机智、随机应变", "厌烦教育、不考虑后果、容易被诱惑", "演员，销售，幼教", "克林顿，肯尼迪，查理德·布兰森，劳伦斯·埃里森"],//ESFP
  ["外倾直觉（Ne）自由联想，意识流，潜意识", "内倾情感（Fi）价值观协调，明辨对错", "浪漫主义、抽象、不受约束、朋友广泛", "长不大、脾气火爆、精力分散", "记者，剧作家，动画制作人", "马克·吐温，切·格瓦拉，卡扎菲，沃特·迪士尼"],//ENFP
  ["外倾直觉（Ne）探索背后的意义，想法抽象", "内倾思考（Ti）善于演绎推理，重视辩证", "活泼、聪明、创意、喜欢智力竞赛、解决复杂问题", "对情感不敏感、脱离实际", "发明家，创造者", "达芬奇，乔恩·斯图尔特，乔布斯，沃兹"],//ENTP
  ["外倾思考（Te）建立流程控制事物的变化", "内倾感觉（Si）收集数据和经验指导行动", "强势、乐观、发号施令、信任权威、重视道德", "墨守成规、铁石心肠、不善聆听、大老爷们儿", "CEO，军官", "鲍尔默，汤姆·克兰西，萨达姆"],//ESTJ
  ["外倾情感（Fe）寻求社会联系，满足他人", "内倾感觉（Si）回忆历史，建立信任", "热情、慷慨、社交能力强、强势、传统、左右逢源、团队性强", "小圈子主义、势利、投人所好", "社会工作者，公务员，推销员", "惠特尼·休斯顿，维多利亚·贝克汉姆，钢铁大王卡内基"],//ESFJ
  ["外倾情感（Fe）感受他人需要，建立亲密联系", "内倾直觉（Ni）具备洞察力、预见性", "浪漫、人文、语言天赋、说服力、相信神、发觉潜能", "移情、不现实、教导欲", "教育工作者", "戈尔巴乔夫，歌德，里根，阿拉法特，摩根·弗里曼"],//ENFJ
  ["外倾思考（Te）直线思维，战略管理", "内倾直觉（Ni）具备洞察力、预见性", "控制力、批判思维、把控弱点、自尊心强、顽强坚定", "压迫感、高高在上、做作、伪装、毫不留情", "老板，元帅，总裁", "拿破仑，凯撒，撒切尔，斯大林"]//ENTJ
]
var mbti_des = [
  //ISTJ:
  ["1. Serious, quiet, successful through concentration, dedication, and trustworthiness.",
    "2. Act pragmatically, in an orderly, practical, logical, truthful, and trustworthy manner.",
    "3. Be attentive and willing to keep work, home, and life organized and in good order.",
    "4. Responsible, determined to decide by design, and not afraid to obstruct and gossip.",
    "5. Value tradition and loyalty.",],
  //ISFJ:
  ["1. Be quiet, kind, responsible, and conscientious。", "2. Act responsibly and be engaged.",
    "3. Is the stability of a project, job, or group.",
    "4. Be willing to put in, suffer, and strive for accuracy.",
    "5. Interest is usually not in science and technology. be patient with the details.",
    "6. Be Loyal, considerate, intellectual, and concerned about the feelings of others.",
    "7. Dedicated to creating an orderly and harmonious work and family environment.",],
  //INFJ:
  ["1.Success is possible because of perseverance, creativity, and the intent that must be achieved",
    "2. will put forth his best efforts in his work",
    "3. to care for others in a sincere and thoughtful way",
    "4. he is respected for his adherence to his principles",
    "5. to be respected and followed for offering a clear vision of the common good",
    "6. the search for meaning and relevance in ideas, relationships, and material possessions",
    "7. want to know what motivates and gives insight into others",
    "8. have a positive attitude and a strong belief in their values",
    "9. to carry out its vision in an organized and decisive manner",],
  //INTJ:
  ["1. it advocates effort, wisdom, and thought, and has a strong drive and original intention to achieve purpose and originality",
    "2. imaginative but decisive, ambitious but private, curious but unwilling to waste energy",
    "3. have a good command of the planning and execution of the duties assigned to them",
    "4. stubborn, suspicious, critical, independent, highly professional and demanding in terms of performance",
    "5. be smart and confident about the field in which you have taken the time to learn, and crave truth and depth",],
  //ISTP:
  ["1.冷静旁观者，安静、留余地、有弹性，会以无偏见的好奇心与未预期的幽默观察与分析。",
    "2.有兴趣于探寻原因及效果、技术事件如何运作，使用逻辑的原理组构事实，重视效能。",
    "3.擅长于掌握问题核心及找出解决方式。",
    "4.分析成事的缘由且能实时由大量资料中找出实际问题的核心。",],
  //ISFP:
  ["1.羞怯、安宁、和善、敏感、行事谦虚。",
    "2.喜于避开争论，不对他人强加已见或价值观。",
    "3.无意于领导却常是忠诚的追随者。",
    "4.办事不急躁，安于现状，无意于以过度的急切或努力破坏现况，且非成果导向。",
    "5.喜欢有自有的空间及照自订的时程办事。",],
  //INFP:
  ["1.安静观察者，具理想性与对其价值观及重要之人具忠诚心。",
    "2.希望外在生活形态与内在价值观相吻合。",
    "3.具好奇心且很快能看出机会所在。常担负开发创意的触媒者。",
    "4.除非价值观受侵犯，行事会具弹性、适应力高且承受力强。",
    "5.具想了解及发展他人潜能的企图。",
    "6.对所处境遇及占有不太在意。",
    "7.具适应力、有弹性，除非价值观受到威胁。",],
  //INTP:
  ["1.安静、自持、弹性及具适应力。",
    "2.特别喜爱追求理论与科学事理。",
    "3.习于以逻辑及分析来解决问题，是问题解决者。",
    "4.最有兴趣于创意事务及特定工作，对聚会与闲聊无大兴趣。",
    "5.追求可发挥个人强烈兴趣的生涯。",
    "6.追求发展对有兴趣事务之逻辑解释。",],
  // ESTP:
  ["A Promotor is good at solving problems on the spot in real time is a problem solver, enjoy doing things and enjoying the process. The person will be be inclined to be fond of technical affairs and sports, and make good friends. He/She is adaptable, tolerant and pragmatic; put your heart and soul into your work will soon yield results. This person don’t like long-winded concepts and theories. This person is most specialized in real affairs that can be manipulated, handled, decomposed, or combined.",],
  // ESFP:
  ["1. ",
    "2. Dnjoy doing things and enjoying the process",
    "3.知晓事件未来的发展并会热列参与。",
    "5.最擅长于人际相处能力及具备完备常识，很有弹性，能立即适应他人与环境。",
    "6.对生命、人、物质享受的热爱者。",],
  //ENFP:
  ["1.充满热忱、活力充沛、聪明的、富想象力的，视生命充满机会但期能得自他人肯定与支持。",
    "2.几乎能达成所有有兴趣的事。",
    "3.对难题很快就有对策并能对有困难的人施予援手。",
    "4.依赖能改善的能力而无须预做规划准备。",
    "5.为达目的，常能找出强制自己为之的理由。",
    "6.即兴执行者。",],
  //ENTP: 
  ["1.反应快、聪明、长于多样事务。",
    "2.具激励伙伴、敏捷及直言不讳。",
    "3.会为了有趣 对问题的两面加予争辩。",
    "4.对解决新颖的及挑战性的问题富有策略，但会轻忽或厌烦经常的任务与细节。",
    "5.兴趣多元，易倾向于转移至新生的兴趣。",
    "6.对所想要的会有技巧地找出逻辑的理由。",],
  //ESTJ: 
  ["1.务实、真实、事实倾向，具企业或技术天份。",
    "2.不喜欢抽象理论；最喜欢学习可立即运用事理。",
    "3.喜好组织与管理活动且专注以最有效率方式行事以达致成效。",
    "4.具决断力、关注细节且很快作出决策，是优秀的行政者。",
    "5.会忽略他人感受。",
    "6.喜作领导者或企业主管。",],
  //ESFJ:
  ["1.诚挚、爱说话、合作性高、受欢迎，天生的合作者及活跃的组织成员。",
    "2.重和谐且长于创造和谐。",
    "3.常做对他人有益事务。",
    "4.给予鼓励及称许会有更佳工作成效。",
    "5.最有兴趣于会直接及有形影响人们生活的事务。",
    "6.喜欢与他人共事去精确且准时地完成工作。",],
  //ENFJ:
  ["1.热忱、易感应及负责任的，具能鼓励他人的领导风格。",
    "2.对别人所想或希求会表达真正关切且切实用心去处理。",
    "3.能怡然且技巧性地带领团体讨论或演示文稿提案。",
    "4.爱交际、受欢迎及富同情心。",
    "5.对称许及批评很在意。",
    "6.喜欢带引别人且能使别人或团体发挥潜能。",],
  //ENTJ:
  ["1.坦诚、具决策力的活动领导者。",
    "2.长于发展与实施广泛的系统以解决组织的问题。",
    "3.专精于具内涵与智能的谈话如对公众演讲。",
    "4.乐于经常吸收新知且能广开信息管道。",
    "5.易生过度自信，会强于表达自已创见。",
    "6.喜于长程策划及目标设定。",],
]
module.exports.mbti_cn = mbti_name_cn;
module.exports.mbti_en = mbti_name_en;
module.exports.mbti_id = mbti_id;
module.exports.mbti_des = mbti_des;
module.exports.mbtiEasyDes = mbti_easy_des;
module.exports.mbti_img = mbti_img;