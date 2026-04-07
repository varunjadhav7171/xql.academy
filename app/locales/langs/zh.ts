const dict = {
  nav: { appName: "XQL学院", tagline: "学习 · 坚持 · 成功", login: "登录", signup: "注册" },
  hero: { title1: "学习任何东西。", title2: "每天提升。", selectLanguage: "我想学习..." },
  kids: { tag: "儿童", badge: "快乐的进步", title: "互动的世界", desc: "孩子们喜欢探索的一切...", artTitle: "故事、声音和奖励都在一个快乐的地方。", artDesc: "安全、色彩缤纷且激动人心的儿童专区。", stat1Title: "5分钟", stat1Desc: "游戏化学习", stat2Title: "每天", stat2Desc: "打卡星星", stat3Title: "口语", stat3Desc: "听、重复、笑" },
  kidsTopics: [
    { icon: "🔤", title: "字母和词汇", desc: "学习字母、发音和基础词汇", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "数字与数学", desc: "通过有趣的视觉游戏计数、加减", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "我们周围的世界", desc: "动物、自然、行星和惊人的科学事实", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "艺术与创造", desc: "颜色、形状、绘画和创造性表达", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "故事时间", desc: "互动故事帮助建立阅读和想象力", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "说与学", desc: "发音单词并建立说话信心", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "谜题与逻辑", desc: "锻炼思维和问题解决的脑力训练", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "儿歌与歌曲", desc: "通过音乐、节奏和记忆歌曲学习", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "学生", badge: "专注的学习", artTitle: "现代且活跃的学习空间。", artDesc: "智能视觉和动画反馈让你不断前进。", stat1Title: "12", stat1Desc: "有指导的科目", stat2Title: "快速", stat2Desc: "复习循环", stat3Title: "实时", stat3Desc: "进度条和目标", title: "掌握学校科目", desc: "适合1-12年级的系统化课程。通过测验和讲解掌握每一门科目。", pill1: "考试演练", pill2: "动画进度", pill3: "快速复习" },
  studentsTopics: [
    { icon: "📐", title: "数学", desc: "代数、几何、三角和微积分", badge: "6-12年级", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "科学", desc: "物理、化学和生物的可视化学习", badge: "6-12年级", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "英语", desc: "语法、理解、写作和文学", badge: "1-12年级", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "社会学习", desc: "历史、地理、公民与经济", badge: "6-10年级", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "计算机科学", desc: "编程基础、MS Office 及数字技能", badge: "6-12年级", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "实验实习", desc: "带步骤指导的虚拟实验", badge: "9-12年级", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "作文写作", desc: "考试写作的结构、词汇和写作技巧", badge: "8-12年级", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "语言", desc: "印地语、梵语、法语和区域语言", badge: "1-12年级", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "带时事的预备、主考和面试准备", tag: "公务员", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "马哈拉施特拉州公务员完整准备", tag: "州公务员", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "医学入学的生物、物理和化学", tag: "医疗", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT 入学数学、物理和化学", tag: "工程", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS 准备", desc: "医学生的基础和临床知识", tag: "医疗", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "工程", desc: "CSE、ECE、机械、土木等核心工程科目", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / 法律", desc: "法学入学的法律推理、GK 和英语", tag: "法律", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "顶级商学院的定量、语言和 DILR", tag: "管理", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "银行 / IBPS", desc: "银行考试的推理、数学和英语", tag: "银行", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / 国防", desc: "军队准备的数学、GK 和 SSB", tag: "国防", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech 的高级工程与科学", tag: "研究生", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "会计、税务和金融专业课程", tag: "金融", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "竞争性考试", title: "攻克最难的考试", desc: "通过系统的真题和测验，专注于最硬核的考试准备。", stat1Title: "12 条路径", stat1Desc: "多种追踪", stat2Title: "模考", stat2Desc: "实战演练", stat3Title: "排名提升", stat3Desc: "清晰的绩效反馈", pill1: "每日测验", pill2: "排名预测", pill3: "教学大纲追踪", floatingChips: ["AIR 184", "98 %ile 目标", "下次模拟 07:30"] },
  scene: { today: "今天", streak: "连续", days: "天", revision: "复习", grade: "A+", score: "分数", mockClear: "模考通过", hi: "你好", air: "排名" }
};
export default dict;
