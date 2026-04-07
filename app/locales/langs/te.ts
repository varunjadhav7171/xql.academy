const dict = {
  nav: { appName: "XQL అకాడమీ", tagline: "నేర్చుకో · స్ట్రీక్ · గెలువు", login: "లాగిన్", signup: "సైన్ అప్" },
  hero: { title1: "ఏదైనా నేర్చుకోండి.", title2: "రోజూ ఎదగండి.", selectLanguage: "నేను నేర్చుకోవాలనుకుంటున్నాను..." },
  kids: { tag: "పిల్లల కోసం", badge: "ఆటల పురోగతి", title: "ఇంటరాక్టివ్ ప్రపంచం", desc: "పిల్లలు ఇష్టపడేవన్నీ...", artTitle: "కథలు, శబ్దాలు, బహుమతులు.", artDesc: "సురక్షితమైన మరియు రంగుల ప్రపంచం.", stat1Title: "5 నిమిషాలు", stat1Desc: "చిన్న ఆటలు", stat2Title: "రోజూ", stat2Desc: "స్ట్రీక్ బహుమతులు", stat3Title: "మాట్లాడు", stat3Desc: "విను మరియు చెప్పండి", pill1: "ఆటలు", pill2: "స్ట్రీక్‌లు", pill3: "కథా మోడ్" },
  kidsTopics: [
    { icon: "🔤", title: "ABC మరియు పదాలు", desc: "అక్షరమాలలు, ధ్వనిశాస్త్రం మరియు ప్రాథమిక పదజాలం నేర్చుకోండి", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "సంఖ్యలు మరియు గణితం", desc: "వినోదమైన దృశ్య ఆటలతో లెక్కించండి, కూడండి మరియు తీయండి", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "మన చుట్టూ ఉన్న ప్రపంచం", desc: "జంతువులు, ప్రకృతి, గ్రహాలు మరియు ఆశ్చర్యకరమైన విజ్ఞాన వాస్తవాలు", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "కళ మరియు సృజనాత్మకత", desc: "రంగులు, ఆకారాలు, చిత్రలేఖనం మరియు సృజనాత్మక వ్యక్తీకరణ", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "కథా సమయం", desc: "చదవడం మరియు ఊహాశక్తిని పెంచే ఇంటరాక్టివ్ కథలు", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🗣️", title: "మాట్లాడి నేర్చుకోండి", desc: "పదాలను ఉచ్చరించి మాట్లాడడంలో విశ్వాసం పెంచుకోండి", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "పజిల్స్ మరియు లాజిక్", desc: "ఆలోచన మరియు సమస్య పరిష్కారాన్ని పదునుపెట్టే మెదడు పోటీలు", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "పాటలు మరియు గేయాలు", desc: "సంగీతం, లయ మరియు స్మృతి పాటల ద్వారా నేర్చుకోండి", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "విద్యార్థుల కోసం", badge: "ఏకాగ్రత", artTitle: "క్రియాశీలమైన అధ్యయన ప్రదేశాలు.", artDesc: "స్మార్ట్ విజువల్స్‌తో అనుభవం.", stat1Title: "12", stat1Desc: "సబ్జెక్టులు", stat2Title: "తొరగా", stat2Desc: "పరీక్షల ముందు పునర్విమర్శ", stat3Title: "లైవ్", stat3Desc: "పురోగతి బార్‌లు", title: "మీ సబ్జెక్టులలో ఏస్ అవ్వండి", desc: "క్లాస్ 1-12 కోసం పాఠాలు.", pill1: "పరీక్ష శిక్షణ", pill2: "పురోగతి", pill3: "వేగవంతమైన మదింపు" },
  studentsTopics: [
    { icon: "📐", title: "గణితం", desc: "ఆల్జీబ్రా, జ్యామితి, త్రికోణమితి మరియు కాల్క్యులస్", badge: "క్లాస్ 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "విజ్ఞానం", desc: "భౌతిక శాస్త్రం, రసాయన శాస్త్రం మరియు జీవశాస్త్రం దృశ్యాత్మకంగా", badge: "క్లాస్ 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "ఇంగ్లీష్", desc: "వ్యాకరణం, అర్థం, రచన మరియు సాహిత్యం", badge: "క్లాస్ 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "సామాజిక అధ్యయనం", desc: "చరిత్ర, భూగోళ శాస్త్రం, పౌరత్వం మరియు ఆర్థిక శాస్త్రం", badge: "క్లాస్ 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "కంప్యూటర్ సైన్స్", desc: "ప్రోగ్రామింగ్ ప్రాథమికాలు, MS Office మరియు డిజిటల్ స్కిల్స్", badge: "క్లాస్ 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "ల్యాబ్ ప్రాక్టికల్స్", desc: "దశల వారీగా మార్గదర్శకత్వంతో వర్చువల్ ప్రయోగాలు", badge: "క్లాస్ 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "నిబంధనలు రాయడం", desc: "పరీక్షల కోసం నిర్మాణం, పదజాలం మరియు రాయడం నైపుణ్యాలు", badge: "క్లాస్ 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "భాషలు", desc: "హిందీ, సంస్కృతం, ఫ్రెంచ్ మరియు ప్రాంతీయ భాషలు", badge: "క్లాస్ 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "ప్రీలిమ్స్, మెయిన్స్ మరియు ఇంటర్వ్యూ సిద్ధతతో సమకాలీన అంశాలు", tag: "సివిల్ సర్వీసెస్", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "మహారాష్ట్ర రాష్ట్ర సేవల కోసం పూర్తి సిద్ధత", tag: "స్టేట్ సర్వీసెస్", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "వైద్య ప్రవేశానికి బయాలజీ, ఫిజిక్స్ మరియు కెమిస్ట్రీ", tag: "మెడికల్", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT ప్రవేశానికి గణితం, ఫిజిక్స్ మరియు కెమిస్ట్రీ", tag: "ఇంజనీరింగ్", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS సిద్ధత", desc: "వైద్య విద్యార్థులకు ప్రాథమిక మరియు క్లినీకల్ జ్ఞానం", tag: "మెడికల్", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "ఇంజనీరింగ్", desc: "CSE, ECE, మెకానికల్, సివిల్ వంటి కోర్ ఇంజనీరింగ్ సబ్జెక్టులు", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / చట్టం", desc: "చట్ట తర్కం, GK మరియు ఇంగ్లీష్ కోసం", tag: "చట్టం", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "బిజినెస్ స్కూల్స్ కోసం కొవైంట్, వెర్బల్ మరియు DILR", tag: "మెనేజ్మెంట్", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "బ్యాంకింగ్ / IBPS", desc: "బ్యాంక్ పరీక్షల కోసం రీజనింగ్, గణితం మరియు ఇంగ్లీష్", tag: "బ్యాంకింగ్", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / డిఫెన్స్", desc: "సైనికులకు గణితం, GK మరియు SSB సిద్ధత", tag: "డిఫెన్స్", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech కోసం అడ్వాన్స్డ్ ఇంజనీరింగ్ మరియు సైన్స్", tag: "పోస్ట్గ్రాడ్", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "అకౌంటింగ్, పన్నులు మరియు ఫైనాన్స్ కోర్సులు", tag: "ఫైనాన్స్", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "పోటీ పరీక్షలు", title: "కష్టమైన పరీక్షలు పగులగొట్టండి", desc: "పోటీ పరీక్షల తయారీ.", stat1Title: "12 మార్గాలు", stat1Desc: "గైడెన్స్", stat2Title: "మాక్ టెస్ట్స్", stat2Desc: "సాధన", stat3Title: "ర్యాంక్", stat3Desc: "ఫీడ్‌బ్యాక్", pill1: "రోజువారీ పరీక్షలు", pill2: "ర్యాంక్ అంచనా", pill3: "సిలబస్ ట్రాకింగ్", floatingChips: ["AIR 184", "98 %ile లక్ష్యం", "తదుపరి Mock 07:30"] },
  scene: { today: "నేడు", streak: "స్ట్రీక్", days: "రోజులు", revision: "పునర్విమర్శ", grade: "A+", score: "స్కోర్", mockClear: "మాక్ పాస్", hi: "హాయ్", air: "ర్యాంక్" }
};
export default dict;
