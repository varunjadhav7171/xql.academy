const dict = {
  nav: { appName: "XQL Academy", tagline: "Learn · Streak · Win", login: "LOG IN", signup: "SIGN UP" },
  hero: { title1: "Learn anything.", title2: "Level up daily.", selectLanguage: "I want to learn..." },
  kids: { tag: "For Kids", badge: "Playful progress", title: "Interactive world of topics", desc: "A mix of everything children love to explore...", artTitle: "Stories, sounds, rewards, and bright little wins in one happy space.", artDesc: "A dedicated kids view that feels safe, colorful, and exciting from the first tap.", stat1Title: "5 min", stat1Desc: "bite-size play sessions", stat2Title: "Daily", stat2Desc: "streak stars and rewards", stat3Title: "Speak", stat3Desc: "listen, repeat, and smile", pill1: "Fun Games", pill2: "Daily Streaks", pill3: "Story Mode" },
  kidsTopics: [
    { icon: "🔤", title: "ABC & Words", desc: "Learn alphabets, phonics and basic vocabulary", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Numbers & Math", desc: "Count, add and subtract with fun visual games", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "World Around Us", desc: "Animals, nature, planets and amazing science facts", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Art & Creativity", desc: "Colors, shapes, drawing and creative expression", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Story Time", desc: "Interactive stories that build reading and imagination", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🗣️", title: "Speak & Learn", desc: "Pronounce words and build confidence speaking", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Puzzles & Logic", desc: "Brain teasers that sharpen thinking and problem solving", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rhymes & Songs", desc: "Learn through music, rhythm and memory songs", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "For Students", badge: "Focused momentum", artTitle: "Study spaces that feel active, modern, and built for visible progress.", artDesc: "A sharper student experience with smart visuals, revision energy, and animated feedback that keeps learning moving.", stat1Title: "12", stat1Desc: "subject tracks with guided practice", stat2Title: "Quick", stat2Desc: "revision loops before exams", stat3Title: "Live", stat3Desc: "progress bars, goals, and streaks", title: "Ace your school subjects", desc: "Structured lessons for Class 1-12. Master every subject with quizzes, explanations, progress tracking, and revision flows that feel motivating instead of heavy.", pill1: "Exam-ready drills", pill2: "Animated progress", pill3: "Fast revision wins" },
  studentsTopics: [
    { icon: "📐", title: "Mathematics", desc: "Algebra, geometry, trigonometry and calculus", badge: "Class 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Science", desc: "Physics, chemistry and biology made visual", badge: "Class 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "English", desc: "Grammar, comprehension, writing and literature", badge: "Class 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Social Studies", desc: "History, geography, civics and economics", badge: "Class 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Computer Sci.", desc: "Programming basics, MS Office and digital skills", badge: "Class 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Lab Practicals", desc: "Virtual experiments with step-by-step guidance", badge: "Class 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Essay Writing", desc: "Structure, vocabulary and writing skills for exams", badge: "Class 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Languages", desc: "Hindi, Sanskrit, French and regional languages", badge: "Class 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Prelims, Mains and Interview prep with current affairs", tag: "Civil Services", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Maharashtra state services complete preparation", tag: "State Services", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biology, Physics and Chemistry for medical entrance", tag: "Medical", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Maths, Physics and Chemistry for IIT/NIT entrance", tag: "Engineering", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS Prep", desc: "Foundation and clinical knowledge for medical students", tag: "Medical", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Engineering", desc: "Core engineering subjects - CSE, ECE, Mechanical, Civil", tag: "B.Tech / B.E.", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "⚖️", title: "CLAT / Law", desc: "Legal reasoning, GK and English for law entrance", tag: "Law", color: "#FFF8E0", border: "#FFE498" },
    { icon: "💼", title: "CAT / MBA", desc: "Quant, verbal and DILR for top B-school admissions", tag: "Management", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Reasoning, maths and English for bank exams", tag: "Banking", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🛡️", title: "NDA / Defence", desc: "Maths, GK and SSB prep for armed forces", tag: "Defence", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🧬", title: "GATE", desc: "Advanced engineering and science for PSU / M.Tech", tag: "Postgrad", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Accounts, taxation and finance professional courses", tag: "Finance", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  exams: { tag: "Higher Level & Competitive Exams", title: "Crack the toughest exams", desc: "Focused prep for India's most competitive exams with structured paths, mock tests, revision cycles, and expert content that feels high-energy and goal driven.", artTitle: "High-energy prep built for India's toughest exams and goal-driven learners.", artDesc: "Structured paths, timed mocks, and expert content that keeps you sharp and focused.", stat1Title: "12 Tracks", stat1Desc: "UPSC to CA paths", stat2Title: "Timed Mocks", stat2Desc: "real pressure practice", stat3Title: "Rank Lifts", stat3Desc: "clear performance feedback", pill1: "Daily Mock Tests", pill2: "Rank Prediction", pill3: "Syllabus Trackers", floatingChips: ["AIR 184", "98 %ile Target", "Next Mock 07:30"] },
  scene: { today: "TODAY", streak: "STREAK", days: "Days", revision: "REV", grade: "A+", score: "SCORE", mockClear: "Mock Clear", hi: "Hi", air: "AIR" }
};
export default dict;
