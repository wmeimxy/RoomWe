var mbti_question = [
  "Which options best desribe yourself?",
  //下面从表格的第1题开始，直至26题，index从1到26
  "When you want to go outside you will",
  "You will be likely to define yourself as a ____ person",
  "If you are a teacher, you will prefer to teach",
  "You are a ____ person",
  "Who are you more likely to get along with?",
  "Are you a person who often",
  "How do you do when you need to handle a lot of things?",
  "Are you a person who",
  "Doing things based on specific rules makes your feel，",
  "When you are given a special task, you will likely to…",
  "In most cases, you will choose to",
  "Most people would say you are a",
  "You prefer to be seen as a ____ person",
  "In a party，you will be likely to pay attention to",//根据《天资差异》做了修改
  "Which study methods is more effective to you?",//根据《天资差异》做了修改
  "You prone to ",
  "You will likely to ",
  "You like to spend a lot of time",
  "Staying with many people makes you feel",
  "You prefer to",
  "When you are planning a trip, you prefer to",
  "When you are in social meeting, you always feel",
  "You often",
  "Which ones appeal to you more？",
  "In daily work, you likely to deal with some",
  "You think people normally",//下面从对应表格的59题开始，直至78题，index从27到46
  "When you change your surroundings, you will",//根据《天资差异》做了修改
  "In a party, you often",
  "When you need to do something like other people, you prefer",//要做许多人也做的事，你比较喜欢
  "Can someone you just met say what you're interested in right now?",
  "Which following subject do you prefer?",
  "You want to be regarded as a ____ person",
  "What do you think to do things in terms of specific flowchart",
  "When you are surrounded by others, you will choose to",
  "In social meeting, you",
  "When you answer question, you will try to",//根据《天资差异》做了修改
  "When you decide to do something based on rules and impact your friend’s benefits, you will",//根据《天资差异》做了修改
  "Normally, you like",
  "When you are given a huge project, you will",
  "You impressed other as a ____ person",//根据《天资差异》做了修改
  "When you are confronted with difficult problems, you will",//你会
  "When you are reading, you like",
  "Which person do you want to work for ",
  "When you do things",
  "If you can being",
  "Which do you think is important when you are making a decision?",
  //下面是ans_idex删后为26-57、77-86题共用的问题，index为47
  "Which of the following words do you like"
]

var mbti_ans = [//按照表格从上到下的顺序进行排序。修改了JP题目中的8题，EI改5题，SN改6题删3题，TF改5题删3题
//index=0
  { ans1: "make a specific plan", ans2: "go out based on whenever you want", },
  { ans1: "arbitrary/causal", ans2: "organized", },
  { ans1: "a course based on real fact", ans2: "a course based on theories", },
  { ans1: "introvert", ans2: "extrovert", },
  { ans1: "a person full of imagination", ans2: "a person who focus on reality", },
//index=5
  { ans1: "Let your emotions rule your rationality", ans2: "Let your rationality rule your emotions", },
  { ans1: "Do whatever you like ", ans2: "Handling things based on your plan", },
  { ans1: "are easy for others to understand ", ans2: "are difficult for others to understand", },
  { ans1: "happy", ans2: "stressful", },
  { ans1: "Make a meticulous plan before starting the task", ans2: "Find what you need while you're doing it", },
  //index=10
  { ans1: "let nature take its course", ans2: "Make a specific plan", },//顺 字符错误
  { ans1: "A person who value your privacy", ans2: "A person with openness ", },
  { ans1: "Honest", ans2: "Astute", },
  { ans1: "Objective people and things", ans2: "Subject opinions and suggestions", },//ei改
  { ans1: "Talent", ans2: "Practices", },//sn改
  //index=15
  { ans1: "Value emotions more than logic", ans2: "Value logic more than emotions", },
  { ans1: "planning while seeing how things goes", ans2: "planning things ahead of time", },
  { ans1: "being alone", ans2: "staying with other people", },
  { ans1: "energetic", ans2: "exhausted", },
  { ans1: "Having a specific schedule for your daily activities such as dating or social work", ans2: "Being causal with your daily activities.", },
  //index=20
  { ans1: "Act with your feeling of the day", ans2: "Know what you need to do ahead of time", },
  //大部分的时间都是跟当天的感觉行事
  //事先知道大部分的日子会做什么
  { ans1: "Depressed", ans2: "Happy", },
  { ans1: "making friends with others", ans2: "prefer to be alone", },
  { ans1: "a person full of intelligence", ans2: "a well rounded person", },
  { ans1: "emergent works", ans2: "making a plan at first in case of working under pressure ", },
  //index=25
  { ans1: "spend a lot time understanding you", ans2: "learning about you in a short time", },
  //index=26
  { ans1: "deep water", ans2: "shallow water", },//ei改
  { ans1: "orderliness", ans2: "openness", },//根据《天资差异》做了修改
  { ans1: "abstract", ans2: "specifics", },
  { ans1: "gentleness", ans2: "steadfastness", },
  { ans1: "thinking", ans2: "feeling", },
  { ans1: "truth", ans2: "thought", },
  { ans1: "curiosity", ans2: "decisive", },//根据《天资差异》做了修改
  { ans1: "action", ans2: "minds", },//ei改
  { ans1: "introvert", ans2: "extrovert", },
  { ans1: "systematic", ans2: "spontaneous", },//根据《天资差异》做了修改
  //index=36
  { ans1: "imagination", ans2: "observation", },//sn改
  { ans1: "sensitive", ans2: "justice", },
  { ans1: "convincing", ans2: "touching", },
  { ans1: "happiness", ans2: "inspirations", },//sn改
  { ans1: "openness", ans2: "purpose", },//根据《天资差异》做了修改
  { ans1: "reserved", ans2: "talkative", },
  { ans1: "methodical", ans2: "not to be puntilious", },
  { ans1: "achievement", ans2: "comforts", },//sn改
  { ans1: "sympathy", ans2: "visions", },
  { ans1: "benefit", ans2: "bless", },
  //index=46
  { ans1: "pragmatic", ans2: "theoretical", },
  { ans1: "having many friends", ans2: "having a few friends", },
  { ans1: "authority", ans2: "openness", },//根据《天资差异》做了修改
  { ans1: "opportunities and possibility", ans2: "reality", },//sn改
  { ans1: "amiable", ans2: "objective", },
  { ans1: "management", ans2: "social work", },//tf改
  { ans1: "production", ans2: "invention", },//sn改
  { ans1: "humble", ans2: "ostentatious", },//ei改
  //{ ans1: "理论", ans2: "事实", },//sn删！
  { ans1: "approve", ans2: "question", },//tf改
  { ans1: "sentimental", ans2: "analytical", },
  { ans1: "resonable", ans2: "fascinating", },
  //index=57
  { ans1: "not abandon your habit，criteria and plan", ans2: "change your lifestyle to get used to new environment", },//根据《天资差异》做了修改
  { ans1: "find it is hard to start conversation with others", ans2: "talks to anyone freely", },
  { ans1: "using general solutions", ans2: "having own solutions", },
  { ans1: "Yes", ans2: "No", },
  { ans1: "A subject based on concept and principle", ans2: "A subject based on truth and data", },
  { ans1: "sensitive person", ans2: "rational person", },
  { ans1: "necessary， but you don’t like in most of the cases", ans2: "helpful, and you like in most of time", },
  { ans1: "Only talk to people who you know", ans2: "join other’s discussion", },
  { ans1: "always talk", ans2: "always listen", },
  { ans1: "give correct answers", ans2: "don’t miss answers", },//根据《天资差异》做了修改
  { ans1: "keep doing this thing", ans2: "make some leeway", },//tf改
  { ans1: "Completing tasks by using different ways ", ans2: "trying some new things before you get tired", },//根据《天资差异》做了修改
  { ans1: "try to figure out what you should do while you are doing it", ans2: "make several steps before doing the project", },
  { ans1: "unapproachable", ans2: "approachable", },//ei改
  { ans1: "use some methods which have been proved as effective", ans2: "trying to use some new ways", },
  { ans1: "unusual or innovative expressions", ans2: "straightforward expressions", },
  { ans1: "kind, but often inconsistent", ans2: "mean but always logic", },
  { ans1: "follow your heart", ans2: "follow your plan", },
  { ans1: "talkative to anyone freely ", ans2: "talking to specific person under specific situation", },
  { ans1: "making decision based on fact", ans2: "making decision based on other’s feelings", },
  { ans1: "imaginary", ans2: "real", },
  { ans1: "emotional intelligence", ans2: "rationality", },//tf改
  { ans1: "justice", ans2: "caring", },
  { ans1: "produce", ans2: "design", },
  { ans1: "possibility", ans2: "necessity", },
  { ans1: "gentleness", ans2: "strengths", },
  { ans1: "real", ans2: "kind", },//tf改
  //{ ans1: "制造", ans2: "创造", },//sn删！
  { ans1: "nove,", ans2: "existed", },
  { ans1: "sympathy", ans2: "analysis", },
 //{ ans1: "坚持己见", ans2: "温柔有爱心", },//tf删！
  { ans1: "specific", ans2: "abstract", },
 //{ ans1: "全心投入", ans2: "有决心的", },//tf删！
  //{ ans1: "能干", ans2: "仁慈", },//tf删！
  //{ ans1: "实际", ans2: "创新", },//sn删！
]

var mbti = [//加分规则的数组。以第一行规则为例，type的字符为J表示主项是J，副项是P，btype为true表示如果选了ans1那么主项（J）值加1。
  { btype: "true", type: "J", },
  { btype: "false", type: "J", },
  { btype: "true", type: "S", },
  { btype: "true", type: "E", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "false", type: "J", },
  { btype: "true", type: "E", },
  { btype: "true", type: "J", },
  { btype: "true", type: "J", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "S", },
  { btype: "true", type: "E", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "E", },
  { btype: "true", type: "J", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "E", },
  { btype: "false", type: "S", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "false", type: "E", },
  { btype: "true", type: "J", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "false", type: "J", },
  { btype: "true", type: "E", },
  { btype: "false", type: "E", },
  { btype: "true", type: "J", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "J", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "false", type: "E", },
  { btype: "true", type: "J", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "false", type: "E", },
  //{ btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "true", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "S", },
  { btype: "true", type: "E", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "E", },
  { btype: "true", type: "J", },
  { btype: "true", type: "T", },
  { btype: "true", type: "J", },
  { btype: "false", type: "J", },
  { btype: "false", type: "E", },
  { btype: "true", type: "S", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "false", type: "J", },
  { btype: "true", type: "E", },
  { btype: "true", type: "T", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  { btype: "true", type: "S", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  { btype: "true", type: "T", },
  //{ btype: "true", type: "S", },
  { btype: "false", type: "S", },
  { btype: "false", type: "T", },
  //{ btype: "true", type: "T", },
  { btype: "true", type: "S", },
  //{ btype: "false", type: "T", },
  //{ btype: "true", type: "T", },
  //{ btype: "true", type: "S", },
]

module.exports.mbti_question = mbti_question;
module.exports.mbti_ans = mbti_ans;
module.exports.mbti = mbti;

/*在需要使用这些模块的文件中，使用 require(path) 将公共代码引入
var mbti = require('../../data/mbti.js')
Page({
  question: mbti.mbti_question,
  ans: mbti.mbti_ans,
})
require暂时不支持绝对路径
*/