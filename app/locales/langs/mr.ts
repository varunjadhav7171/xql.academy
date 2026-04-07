const dict = {
  nav: { appName: "XQL अकॅडमी", tagline: "शिका · स्ट्रिक · जिंका", login: "लॉग इन", signup: "साइन अप" },
  hero: { title1: "काहीही शिका.", title2: "दररोज पातळी वाढवा.", selectLanguage: "मला शिकायचे आहे..." },
  kids: { tag: "मुलांसाठी", badge: "खेळकर प्रगती", title: "परस्परसंवादी जग", desc: "मुलांना आवडेल असे सर्वकाही...", artTitle: "गोष्टी, आवाज आणि बक्षिसे एकाच आनंदी जागेत.", artDesc: "सुरक्षित आणि रंगीत जागा.", stat1Title: "5 मिनिटे", stat1Desc: "लहान खेळ सत्र", stat2Title: "दररोज", stat2Desc: "स्ट्रिक स्टार्स", stat3Title: "बोला", stat3Desc: "ऐका आणि पुन्हा करा", pill1: "मजेदार खेळ", pill2: "दैनंदिन स्ट्रिक", pill3: "गोष्ट मोड" },
  kidsTopics: [
    { icon: "🔤", title: "ABC आणि शब्द", desc: "अक्षरे, ध्वनिशास्त्र आणि मूलभूत शब्दसंग्रह शिका", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "संख्या आणि गणित", desc: "मजेदार दृश्य खेळांसह मोजा, जोडा आणि वजा करा", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "आपल्या सभोवतालचे जग", desc: "प्राणी, निसर्ग, ग्रह आणि आश्चर्यकारक विज्ञान तथ्ये", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "कला आणि सृजनशीलता", desc: "रंग, आकार, चित्रकला आणि सर्जनशील अभिव्यक्ती", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "गोष्ट वेळ", desc: "वाचन आणि कल्पनाशक्ती विकसित करणाऱ्या परस्परसंवादी गोष्टी", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🗣️", title: "बोला आणि शिका", desc: "शब्द उच्चारा आणि बोलण्याचा आत्मविश्वास वाढवा", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "कोडी आणि तर्क", desc: "विचार आणि समस्या सोडवण्याची क्षमता वाढवणारे कोडे", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "यमक आणि गाणी", desc: "संगीत, लय आणि स्मृती गाण्यांद्वारे शिका", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "विद्यार्थ्यांसाठी", badge: "लक्ष्य केंद्रित", artTitle: "सक्रिय आणि आधुनिक अभ्यासाची ठिकाणे.", artDesc: "स्मार्ट व्हिज्युअल्स आणि फीडबॅक.", stat1Title: "12", stat1Desc: "मार्गदर्शित विषय", stat2Title: "जलद", stat2Desc: "परीक्षेपूर्वी रिव्हिजन", stat3Title: "थेट", stat3Desc: "प्रगती आणि ध्येये", title: "शाळेच्या विषयात अव्वल राहा", desc: "इयत्ता 1-12 साठी अभ्यासक्रम.", pill1: "परीक्षा सराव", pill2: "प्रगती ट्रॅकिंग", pill3: "जलद रिव्हिजन" },
  studentsTopics: [
    { icon: "📐", title: "गणित", desc: "बीजगणित, भूमिती, त्रिकोणमिती आणि कलन", badge: "इयत्ता 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "विज्ञान", desc: "भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्र दृश्यमान पद्धतीने", badge: "इयत्ता 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "इंग्रजी", desc: "व्याकरण, समज, लेखन आणि साहित्य", badge: "इयत्ता 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "सामाजिक अभ्यास", desc: "इतिहास, भूगोल, नागरिकशास्त्र आणि अर्थशास्त्र", badge: "इयत्ता 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "कंप्यूटर सायन्स", desc: "प्रोग्रामिंग बुनियादी, MS Office आणि डिजिटल कौशल्ये", badge: "इयatta 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "लॅब प्रॅक्टिकल्स", desc: "स्टेप-बाय-स्टेप मार्गदर्शिकेसह आभासी प्रयोग", badge: "इयatta 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "निबंध लेखन", desc: "परीक्षांसाठी रचना, शब्दसंपदा आणि लेखन कौशल्ये", badge: "इयatta 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "भाषा", desc: "हिंदी, संस्कृत, फ्रेंच आणि प्रादेशिक भाषा", badge: "इयatta 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "करंट अफेअर्ससह प्रिलिम्स, मेन्स व मुलाखत तयारी", tag: "सिव्हिल सेवा", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "महाराष्ट्र राज्य सेवांसाठी परिपूर्ण तयारी", tag: "राज्य सेवा", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "वैद्यकीय प्रवेशासाठी जीवशास्त्र, भौतिकशास्त्र आणि रसायनशास्त्र", tag: "वैद्यकीय", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT प्रवेशासाठी गणित, भौतिकशास्त्र आणि रसायनशास्त्र", tag: "इंजिनिअरिंग", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS तयारी", desc: "वैद्यकीय विद्यार्थ्यांसाठी पाया आणि क्लिनिकल ज्ञान", tag: "वैद्यकीय", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "इंजिनिअरिंग", desc: "CSE, ECE, मेकॅनिकल आणि सिव्हिल सारखी मुख्य अभियांत्रिकी विषय", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / कायदा", desc: "कायद्याचे विचार, GK आणि इंग्रजी कायद्यासाठी", tag: "कायदा", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "बिझनेस स्कूलसाठी परिमाणात्मक, शब्द आणि DILR", tag: "व्यवस्थापन", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "बँकिंग / IBPS", desc: "बँक परीक्षा साठी तर्क, गणित आणि इंग्रजी", tag: "बँकिंग", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / संरक्षण", desc: "सैन्यांसाठी गणित, GK आणि SSB तयारी", tag: "संरक्षण", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech साठी प्रगत अभियांत्रिकी आणि विज्ञान", tag: "पदव्युत्तर", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "लेखांकन, कर आणि वित्तीय व्यावसायिक अभ्यासक्रम", tag: "वित्त", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "स्पर्धा परीक्षा", title: "सर्वात कठीण परीक्षा पास करा", desc: "भारतातील स्पर्धा परीक्षांची तयारी.", stat1Title: "12 मार्ग", stat1Desc: "मार्गदर्शन", stat2Title: "मॉक टेस्ट", stat2Desc: "प्रत्यक्ष सराव", stat3Title: "रँक वाढ", stat3Desc: "स्पष्ट फीडबॅक", pill1: "दैनिक मॉक", pill2: "रँक अंदाज", pill3: "अभ्यासक्रम ट्रॅकर", floatingChips: ["AIR 184", "98 %ile लक्ष्य", "पुढचा Mock 07:30"] },
  scene: { today: "आज", streak: "स्ट्रीक", days: "दिवस", revision: "उजळणी", grade: "A+", score: "स्कोर", mockClear: "मॉक पास", hi: "नमस्कार", air: "रँक" }
};
export default dict;
