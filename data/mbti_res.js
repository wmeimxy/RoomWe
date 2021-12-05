var mbti_id = ["ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ"]
var mbti_img = [
"https://lh3.googleusercontent.com/BrocFDXn7-FUgmgAbtqXIyzftEBkWfBldVp6AIwYqrv_fqFjl6iEJFmERAnHSRjidzV6KeZRwGdKKRiGf_OM7Ls9N_Byh5h83wRoxuT6AWpJ_v6Xo8T2Mx11_G0Fq2b5624xQACn=w2400", 
"https://lh3.googleusercontent.com/B2KS02hmFkjzxRXdTVAfJnlWce30vghymzjtNfSrAyyyiaVof_zzWHat4_QFSpiYuDG56gycEozl9gJCDwWyuL_u0IXjp9FDT6SbiMCxblTNqsDJP8__4iHJASna8oA0cRt3AeHl=w2400", //https://photos.app.goo.gl/JedsFFqHSLpexxtr7
"https://lh3.googleusercontent.com/ayPbXeafCTROkMtWFmDmxjN_nunGZlQaGemj1WhOOCNR_tVBBKXhINNXnHLNSIgn8KBSzFmRjiUJfLhBYj6hBZ3g5RU6nn8yu99fc8FL5lqxdoVy0wg-G6FJUWYpxp6Mr_nxuWL0=w2400",//https://photos.app.goo.gl/rKacZjJU38RHu5fT8
"https://lh3.googleusercontent.com/FQ6JCsh-OCkBnsmXAbBzOh6S6_-Z4i-qoPte4XasqPPirtzVl6Jx3JtmAAx_7CU2walNilCH0-VYc_ZzXlBWTzvZqmlUjrj-dmjA3ZDBRswL0dKm_rw6_2KnIVpiQLe8tXErfu92=w2400",
"https://lh3.googleusercontent.com/Ap-WI-Pd6smsuwXEVplwo1HixXp3aVOME7UZnIgMD_27w_-37olM0s6JudAuKr56DiIazEu3W_rn4ApBSdVOJmYaQ27W-7JvPLa-swPkaTlY6Q7j6oLluhlsgL-u2zuEJIAZ-e3g=w2400",
"https://lh3.googleusercontent.com/hgtXqZLq6Pdu9RnSS_8t747PkolxUG-N5wz3WpyQPb4rPBX1Urv-PzLgUbN0H1PQbV1yLlVWfpYZ-LWZKGx8gmOzok5fqFlz7W8ZHl9DasP2pXZEIcbwcRjU35YwVqRit3SXdwWI=w2400",
"https://lh3.googleusercontent.com/GSR0QZVBTyAH83zrkf3jH7dY3LcXCROTVMVH6oxeFvJifZS6ZA8Gr3UnWE9gBJQguvrgOuyhNu62UpURheDF_rUi3QqUsUonfmB-iad48-GKbWHhV_HtgZVqyZLByXFfDJTSBjAb=w2400",
"https://lh3.googleusercontent.com/Kgo8zoVIGnv0ISWw789CaCyj7UVUNuw60p2b-Y43xLJv7t9SVwL7GFdlDNGHWPU0wTKakBemH_P8xQxIC3Js0qAs06wuFSPQs7f6WCUlZN71YgPoHXe4NGCVNE41XV9ud2H0OLRv=w2400",
"https://lh3.googleusercontent.com/xnyP9m915Ch8YZu8UjhGydsKVzH_-bVuXT_A7XbXr8RR-D4pjKU7GNhIDQQ6Jt_7qIH0QkJCqWg8OOqZNqwNLBReu9r6jvEbQ4ICN6Yrr_0FsTwgTz8MO1E3u8qbb0YPemUsxXCy=w2400",
"https://lh3.googleusercontent.com/AbjwsADCJ6xNw2LakshMckZb8-VgN5XpDljXFHJbs_lw1M__1PivsTxTYK0jVIdT8f2g0q2tFn2ct8WK5OzXIevd6geYrSWkIQjEu-RP2_cWO-hwwhZFzhBvnvRVJZQy6Hvh7U6n=w2400",
"https://lh3.googleusercontent.com/Vp5aOBw_vzdASqKZ-CsMJzmSBK6_irRF3Os7jvlbV9-zkaenQiYQ5U5TSBkyocwYX5EBgbux98DXvDzgQTKT24eVey5cqUGRD4LyM8awaYeLRE8EjTzsOTN6MbEt03KMrT35PMv8=w2400",
"https://lh3.googleusercontent.com/anLRMh2aWP8rFb4synPSDvTaxaZucMs_aiEFHS-D2v8d8vLAMU-o_wcXwMG3AyYVXGgNkelMhIEfusFz34hKM4diwxCvJZFa3kJ-rDGwoXrKSO9sGhOJ7BgwO_SK02ZCDTF_-iVE=w2400",
"https://lh3.googleusercontent.com/4reXc2_RpLNCmKFXeggG_AyjxybkLcnf_jxwvNqjM6PTyD0XCZvxM6xFKxknxjmZBT4eITBxa-dAh38ll3SgYfSkIyMNWNJYjBTGkkUUrSApjwh0lNmesSV2gZQnEBvKl2sVECcZ=w2400",
"https://lh3.googleusercontent.com/YXwetWc_huIBXj1H2wmGdn2lG-zkqrUe0V67ZcsuRPROx_1vMQx1B23KaP-njyD65DfokAd00Q4fIvxrOO3HWXIlbjQ1VpwcelVJt-4t-BFuGaUoL0JYKo5OowjR7EgrAnSHonlm=w2400",
"https://lh3.googleusercontent.com/A13Q7Hf_svLBDn4M7nUwpHyjHucLMSKrGwoy3F42yNT_pc1HrYVyDWes4LTz1121O_9JsFQ9-TJs3UU-wiMMl61Lyz0QkNVvMxLBjbtS1g0GYy4IL53j4a6x4kL1UBaBUWqgwnWz=w2400",
"https://lh3.googleusercontent.com/ugbomFwwAqCbDeqgq-RnsUelVuVYZaTkl3fEvAb2_xvAgQwYvg_dnIqtDWmPLRyJ-wuSTGzG598t0AHFezWSkOa414woHkNwwwZ92TbyURe-OwDePEBwitkpKUjvvG0HPUkZwjae=w2400",]

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
  ["A person who is identified as ISTJ is sometimes serious, quiet, successful. He or she is so dedicated to his work and should be full of trustworthiness. He or she acts pragmatically, and in an orderly, practical, logical, truthful, and trustworthy manner.He or she is so attentive and can keep a good balance between work and family life, which he or she will be both responsible for. Once people with this identity make a commitment, he or she will not be afraid of difficulties or any gossips and they will greatly value tradition and loyalty"],
  //ISFJ:
  ["A person with this personality is always quiet and kind. He or she works conscientiously and always engage with others. When it comes to group work or meeting. She or he is in charge of keeping the stability of the group, creating harmonious atmosphere. They like art and literature instead of science and technology in school. Additionally, they are usually loyal to their families and friends, always showing their concerns and loves. Dedicated to creating an orderly and harmonious work and family environment.",],
  //INFJ:
  ["Being successful is possible for this kind of persons because of their perseverance, creativity. Once he set up a goal, he or she will put his or her best efforts in the work. A person with INFJ personality tends to care for others in a sincere and thoughtful way. He is respected for his adherence to his principles, and usually are not willing to make change. Besides, they enjoy doing meditation, searching meanings of lives, and exploring the relevance in ideas, relationships, and material possessions. They always have a positive attitude and a strong belief in their values, and want to carry out its vision in an organized and decisive manner.",],
  //INTJ:
  ["He or she advocates effort, wisdom, and thought, and has a strong drive and original intention to achieve success He is imaginative but decisive, ambitious but private, curious but unwilling to waste energy. He has a good command of the planning and execution of the duties which are assigned to them. Sometimes he is stubborn, suspicious, critical, independent, highly professional and demanding in terms of performance. Lastly, he is always confident about the filed in which he has spent time learning.",],
  //ISTP:
  ["He or she is usually a calm spectator, quiet, flexible personality, He or she likes to observe and analyzes with unprejudiced curiosity and unexpected humor. Feeling interested in exploring causes and effects, and, using logical principles to construct facts, and focusing on effectiveness. Besides, these persons are Good at mastering the core of a problem and finding a solution quickly. Sometimes they analyze the cause of success and find the core of the actual problem from a large amount of data in real time.",],
  //ISFP:
  ["This type of people is always shy, quiet, kind, sensitive, modest in action They are fond of avoiding arguments and of imposing opinions or values on others. He who has no intention of leading is often a loyal follower, not impatient, and unsatisfied with the status quo, unwilling to undermine it with undue eagerness or effort, and not results-oriented,“I like having my own space and doing things according to my own schedule.",],
  //INFP:
  ["A quiet observer who is idealistic and loyal to his values and significant others, hoping that the external life forms are in line with the internal values, being curious and could seize opportunities quickly. Sometimes acting as a catalyst for developing ideas, They are flexible, adaptable and resilient unless their values are violated.”They always attempt to understand and develop the potential of others.",],
  //INTP:
  ["Being quiet, self-contained, resilient, and adaptable. Having a special fondness for the pursuit of theory and scientific principles, He or she accustomed to solving problems by logic and analysis, often being regarded as a problem solver. He or she mostly interested in creative work and particular jobs, but not interested in parties and small talk, he or she likes to pursue a career in which one has a strong personal interest.",],
  // ESTP:
  ["A Promotor is good at solving problems on the spot in real time is a problem solver, enjoy doing things and enjoying the process. The person will be be inclined to be fond of technical affairs and sports, and make good friends. He/She is adaptable, tolerant and pragmatic; put your heart and soul into your work will soon yield results. This person don’t like long-winded concepts and theories. This person is most specialized in real affairs that can be manipulated, handled, decomposed, or combined.",],
  // ESFP:
  ["He is person full extroversion, kindness, receptivity, and willing to share joy with others, and likes to interact with others in group work or study. He can easily aware of the future development of the event and be actively involved. He is best at interpersonal skills and have complete common sense, very flexible, can adapt to others and the environment immediately. Lastly he has a great passion towards everything around him"],
  //ENFP:
  ["He is full of enthusiasm, energy, intelligence, imagination, For him, life is full of opportunity but he expect to be affirmed and supported by others. He can accomplish almost anything you are interested in and make a quick solution to a difficult problem and are able to help those who are in difficulty.He is the person that can be relied on due to his responsibility and leadership.",],
  //ENTP: 
  ["A quick-witted, clever, person who good at many things. A motivating, agile and outspoken. Both sides of the question will be argued for the sake of fun,He has strategy in solving novel and challenging problems, but neglecst or tired of frequent tasks and details. His interest shifts so quickly due to diverse interests. He is skillful in finding logical reasons to persuade others.",],
  //ESTJ: 
  ["He is practical, true, fact-oriented, with a flair for enterprise or technology. He does not like abstract theories but he like learning something practical which could be used right away. He is interested in organizing and managing activities and focusing on the most efficient way to achieve results. A good administrator is one who is decisive, Paying attention to details and makes decisions quickly, but is indifferent with others feelings",],
  //ESFJ:
  ["He is a sincere, talkative, cooperative, popular, natural cooperator and also an active member of an organization. He values harmony and is good at creating it and always do something beneficial to others. He likes encourage and praise others instead of criticizing. What he most interested in is  matters that can directly and physically affect people’s lives. He enjoy working with others to get the job done precisely and instantly.",],
  //ENFJ:
  ["A warm, responsive, and responsible person, with great leadership style that encourages others, He likes to express genuine concern for others. He is willing to lead a group discussion or presentation proposal with aplomb and finesse. He is also sociable, popular, and compassionate, because he is always welcomed by others no matter where he goes. However, he is sensitive to approval and criticism, but he will regard them as an opportunity to spur him",],
  //ENTJ:
  ["He is an honest, decision-making leader of an activity and he is good at developing and implementing extensive systems to solve organizational problems. Besides, he is specializing in meaningful and intelligent conversation such as public speaking. He likes to absorb new knowledge and are open minded with new information. However, he is sometimes overconfident with himself and is likely to set up a long-term but always fail to fulfill it.",],
]
module.exports.mbti_cn = mbti_name_cn;
module.exports.mbti_en = mbti_name_en;
module.exports.mbti_id = mbti_id;
module.exports.mbti_des = mbti_des;
module.exports.mbtiEasyDes = mbti_easy_des;
module.exports.mbti_img = mbti_img;