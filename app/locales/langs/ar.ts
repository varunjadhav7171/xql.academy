const dict = {
  nav: { appName: "أكاديمية XQL", tagline: "تعلم · استمر · اربح", login: "دخول", signup: "تسجيل" },
  hero: { title1: "تعلم أي شيء.", title2: "ارتقِ بمستواك يوميًا.", selectLanguage: "أريد أن أتعلم..." },
  kids: { tag: "للأطفال", badge: "لعب وتقدم", title: "عالم تفاعلي", desc: "مزيج من كل ما يحبه الأطفال...", artTitle: "قصص وأصوات ومكافآت.", artDesc: "بيئة آمنة وملونة وممتعة.", stat1Title: "5 دقائق", stat1Desc: "لعب سريع", stat2Title: "يومياً", stat2Desc: "نجوم استمرارية", stat3Title: "تحدث", stat3Desc: "استمع وكرر" },
  kidsTopics: [
    { icon: "🔤", title: "ABC والكلمات", desc: "تعلم الحروف، الصوتيات والمفردات الأساسية", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "الأرقام والرياضيات", desc: "عد، اجمع واطرح عبر ألعاب بصرية ممتعة", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "العالم من حولنا", desc: "الحيوانات والطبيعة والكواكب والحقائق العلمية", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "الفن والإبداع", desc: "الألوان والأشكال والرسم والتعبير الإبداعي", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "وقت القصة", desc: "قصص تفاعلية تبني القراءة والخيال", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "تحدث وتعلم", desc: "انطق الكلمات وابنِ ثقة في الحديث", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "الألغاز والمنطق", desc: "تمارين ذهنية تطور التفكير وحل المشكلات", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "الأغاني والقوافي", desc: "تعلم عبر الموسيقى والإيقاع والأغاني", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "للطلاب", badge: "تركيز مضاعف", artTitle: "مساحات دراسية نشطة.", artDesc: "تجربة بصرية ممتعة للطلاب.", stat1Title: "12", stat1Desc: "مواد وتوجيه", stat2Title: "سريع", stat2Desc: "مراجعة الامتحان", stat3Title: "مباشر", stat3Desc: "أهداف ومسار", title: "تفوق في دراستك", desc: "دروس منظمة للطلاب للتميز بالمدارس.", pill1: "تدريب امتحان", pill2: "تقدم ملحوظ", pill3: "مراجعة سهلة" },
  studentsTopics: [
    { icon: "📐", title: "الرياضيات", desc: "الجبر والهندسة وحل المثلثات والتفاضل والتكامل", badge: "الصف 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "العلوم", desc: "الفيزياء والكيمياء والأحياء بطريقة مرئية", badge: "الصف 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "الإنجليزية", desc: "القواعد، الفهم، الكتابة والأدب", badge: "الصف 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "الدراسات الاجتماعية", desc: "التاريخ والجغرافيا والمواطنة والاقتصاد", badge: "الصف 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "علم الحاسوب", desc: "أساسيات البرمجة، MS Office والمهارات الرقمية", badge: "الصف 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "التجارب العملية", desc: "تجارب افتراضية مع إرشاد خطوة بخطوة", badge: "الصف 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "كتابة المقالات", desc: "الهيكل والمفردات ومهارات الكتابة للامتحانات", badge: "الصف 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "اللغات", desc: "الهندية والسنسكريتية والفرنسية واللغات الإقليمية", badge: "الصف 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "إعداد للإمتحان التمهيدي والرئيسي والمقابلة مع الشؤون الحالية", tag: "الخدمة المدنية", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "الإعداد الكامل لخدمات ولاية ماهاراشترا", tag: "خدمة الولاية", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "الأحياء والفيزياء والكيمياء لدخول الطب", tag: "طبي", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "الرياضيات والفيزياء والكيمياء لدخول IIT/NIT", tag: "هندسة", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "تحضير MBBS", desc: "المعرفة الأساسية والسريرية للطلاب الطبيين", tag: "طبي", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "الهندسة", desc: "المواد الهندسية الأساسية - CSE وECE والميكانيكا والمدني", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / القانون", desc: "التفكير القانوني وGK والإنجليزية للدخول القانوني", tag: "قانون", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "الكمية واللفظي وDILR لمدارس إدارة الأعمال", tag: "إدارة", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "البنوك / IBPS", desc: "المنطق والرياضيات والإنجليزية لامتحانات البنوك", tag: "بنك", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / الدفاع", desc: "الرياضيات وGK والتحضير لـ SSB للقوات المسلحة", tag: "دفاع", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "الهندسة المتقدمة والعلوم لـ PSU / M.Tech", tag: "دراسات عليا", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "المحاسبة والضرائب والمالية المهنية", tag: "المالية", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "الامتحانات التنافسية", title: "اجتز أصعب الاختبارات", desc: "إعداد ذكي وتدريب مكثف.", stat1Title: "12 مسار", stat1Desc: "مسارات تدريب", stat2Title: "تجارب", stat2Desc: "تدريب عملي", stat3Title: "ترتيب", stat3Desc: "متابعة أداء", pill1: "تجارب يومية", pill2: "توقع الترتيب", pill3: "متابعة المنهج", floatingChips: ["AIR 184", "هدف 98 %ile", "المحاكاة التالية 07:30"] },
  scene: { today: "اليوم", streak: "سلسلة", days: "أيام", revision: "مراجعة", grade: "A+", score: "النتيجة", mockClear: "اجتاز المحاكاة", hi: "مرحبا", air: "الترتيب" }
};
export default dict;
