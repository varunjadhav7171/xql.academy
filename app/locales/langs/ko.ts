const dict = {
  nav: { appName: "XQL 아카데미", tagline: "학습 · 연속 · 승리", login: "로그인", signup: "가입하기" },
  hero: { title1: "무엇이든 배우세요.", title2: "매일 레벨업.", selectLanguage: "제가 배우고 싶은 것은..." },
  kids: { tag: "어린이용", badge: "즐거운 진행", title: "인터랙티브 주제 세계", desc: "아이들이 좋아하는 모든 것...", artTitle: "이야기, 소리, 보상을 한곳에서.", artDesc: "안전하고 컬러풀하며 흥미진진한 전용 보기.", stat1Title: "5분", stat1Desc: "짧은 플레이 세션", stat2Title: "매일", stat2Desc: "연속 보상", stat3Title: "말하기", stat3Desc: "듣고 따라하며 웃기" },
  kidsTopics: [
    { icon: "🔤", title: "ABC와 단어", desc: "알파벳, 발음 및 기본 어휘를 배우세요", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "숫자와 수학", desc: "재미있는 시각 게임으로 숫자를 세고 덧셈과 뺄셈을 배우세요", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "우리 주변 세계", desc: "동물, 자연, 행성 및 놀라운 과학적 사실", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "예술과 창의력", desc: "색깔, 형태, 그리기 및 창의적 표현", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "이야기 시간", desc: "독서와 상상력을 키우는 상호작용 이야기", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "말하고 배우기", desc: "단어를 발음하고 말하기 자신감을 키우세요", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "퍼즐과 논리", desc: "사고력과 문제 해결 능력을 높이는 두뇌 게임", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "운율과 노래", desc: "음악, 리듬 및 암송 노래로 배우세요", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "학생용", badge: "집중된 추진력", artTitle: "눈에 띄는 발전을 위한 학습 공간.", artDesc: "스마트한 시각 및 피드백.", stat1Title: "12", stat1Desc: "가이드 제공 과목", stat2Title: "빠른", stat2Desc: "복습 루프", stat3Title: "라이브", stat3Desc: "진행 표시줄", title: "학교 과목 마스터하기", desc: "1-12학년을 위한 체계적인 수업. 퀴즈로 과목을 마스터하세요.", pill1: "시험 대비", pill2: "애니메이션 진행", pill3: "빠른 복습" },
  studentsTopics: [
    { icon: "📐", title: "수학", desc: "대수, 기하, 삼각법 및 미적분", badge: "6-12학년", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "과학", desc: "물리, 화학 및 생물을 시각적으로 배우세요", badge: "6-12학년", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "영어", desc: "문법, 독해, 작문 및 문학", badge: "1-12학년", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "사회", desc: "역사, 지리, 시민 및 경제", badge: "6-10학년", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "컴퓨터 과학", desc: "프로그래밍 기초, MS Office 및 디지털 기술", badge: "6-12학년", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "실험 실습", desc: "단계별 가이드가 포함된 가상 실험", badge: "9-12학년", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "에세이 작성", desc: "시험 작문을 위한 구조, 어휘 및 기술", badge: "8-12학년", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "언어", desc: "힌디어, 산스크리트, 프랑스어 및 지역어", badge: "1-12학년", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "예비, 메인, 면접 준비와 시사", tag: "공무원", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "마하라슈트라 주 공무원 준비", tag: "주 공무원", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "의대 입시를 위한 생물, 물리, 화학", tag: "의학", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT 입시를 위한 수학, 물리, 화학", tag: "공학", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS 준비", desc: "의대생을 위한 기초 및 임상 지식", tag: "의학", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "공학", desc: "CSE, ECE, 기계, 토목 등 공학 핵심 과목", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / 법", desc: "법학 입시를 위한 법적 추론, GK 및 영어", tag: "법", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Top 비즈니스 스쿨을 위한 정량, 언어, DILR", tag: "경영", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "은행 / IBPS", desc: "은행 시험을 위한 추리, 수학, 영어", tag: "은행", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / 방위", desc: "군 지원을 위한 수학, GK, SSB 준비", tag: "방위", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech를 위한 고급 공학 및 과학", tag: "대학원", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "회계, 세무, 금융 전문 과정", tag: "금융", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "경쟁 시험", title: "가장 어려운 시험 돌파", desc: "체계적인 경로를 제공하는 경쟁 시험 준비.", stat1Title: "12 경로", stat1Desc: "다양한 교육 과정", stat2Title: "모의고사", stat2Desc: "실전 연습", stat3Title: "순위 상승", stat3Desc: "명확한 피드백", pill1: "일일 테스트", pill2: "순위 예측", pill3: "학습 진행기", floatingChips: ["AIR 184", "98 %ile 목표", "다음 모의 07:30"] },
  scene: { today: "오늘", streak: "연속", days: "일", revision: "복습", grade: "A+", score: "점수", mockClear: "모의 완료", hi: "안녕", air: "순위" }
};
export default dict;
