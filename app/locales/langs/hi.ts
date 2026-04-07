const dict = {
  nav: { appName: "एक्सक्यूएल अकादमी", tagline: "सीखें · स्ट्रीक · जीतें", login: "लॉग इन", signup: "साइन अप" },
  hero: { title1: "कुछ भी सीखें।", title2: "रोजाना आगे बढ़ें।", selectLanguage: "मैं सीखना चाहता हूँ..." },
  kids: { tag: "बच्चों के लिए", badge: "खेल-खेल में प्रगति", title: "विषयों की इंटरैक्टिव दुनिया", desc: "वह सब कुछ जो बच्चों को पसंद है...", artTitle: "कहानियां, ध्वनियां, इनाम और एक खुशहाल जगह में जीतें।", artDesc: "एक समर्पित किड्स व्यू जो सुरक्षित और रंगीन लगता है।", stat1Title: "5 मिनट", stat1Desc: "छोटे-छोटे खेलने के सत्र", stat2Title: "रोजाना", stat2Desc: "स्ट्रीक स्टार्स और इनाम", stat3Title: "बोलें", stat3Desc: "सुनें, दोहराएं और मुस्कुराएं" },
  kidsTopics: [
    { icon: "🔤", title: "ABC और शब्द", desc: "अक्षर, फोनेटिक्स और बुनियादी शब्दावली सीखें", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "संख्या और गणित", desc: "मज़ेदार विज़ुअल गेम्स के साथ गिनें, जोड़-घटाव करें", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "हमारे चारों ओर की दुनिया", desc: "जानवर, प्रकृति, ग्रह और रोचक विज्ञान तथ्य", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "कला और रचनात्मकता", desc: "रंग, आकार, ड्राइंग और रचनात्मक अभिव्यक्ति", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "कहानी समय", desc: "इंटरैक्टिव कहानियां जो पढ़ने और कल्पना बढ़ाती हैं", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "बोलो और सीखो", desc: "शब्दों का उच्चारण करें और बोलने के आत्मविश्वास को बढ़ाएं", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "पहेली और तर्क", desc: "दिमागी पहेलियाँ जो सोच और समस्या समाधान को तेज करती हैं", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "तुक्बंद और गाने", desc: "संगीत, लय और यादगार गीतों के माध्यम से सीखें", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "छात्रों के लिए", badge: "केंद्रित गति", artTitle: "अध्ययन स्थान जो सक्रिय और प्रगति के लिए बनाए गए हैं।", artDesc: "स्मार्ट विज़ुअल्स के साथ एक तेज छात्र अनुभव।", stat1Title: "12", stat1Desc: "निर्देशित अभ्यास के साथ विषय", stat2Title: "त्वरित", stat2Desc: "रिवीजन लूप", stat3Title: "लाइव", stat3Desc: "प्रगति और लक्ष्य", title: "स्कूल के विषयों में अव्वल आएं", desc: "कक्षा 1-12 के लिए संरचित पाठ्यक्रम।", pill1: "परीक्षा अभ्यास", pill2: "एनिमेटेड प्रगति", pill3: "तेज रिवीजन" },
  studentsTopics: [
    { icon: "📐", title: "गणित", desc: "बीजगणित, ज्यामिति, त्रिकोणमिति और कलन", badge: "कक्षा 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "विज्ञान", desc: "भौतिकी, रसायन और जीवविज्ञान को दृश्य बनाएं", badge: "कक्षा 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "अंग्रेज़ी", desc: "व्याकरण, समझ, लेखन और साहित्य", badge: "कक्षा 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "सामाजिक अध्ययन", desc: "इतिहास, भूगोल, नागरिक और अर्थशास्त्र", badge: "कक्षा 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "कंप्यूटर विज्ञान", desc: "प्रोग्रामिंग बुनियादी बातें, MS Office और डिजिटल कौशल", badge: "कक्षा 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "प्रयोगशाला अभ्यास", desc: "स्टेप-बाय-स्टेप मार्गदर्शन के साथ आभासी प्रयोग", badge: "कक्षा 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "निबंध लेखन", desc: "परीक्षा लेखन के लिए संरचना, शब्दावली और लेखन कौशल", badge: "कक्षा 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "भाषाएँ", desc: "हिंदी, संस्कृत, फ्रेंच और क्षेत्रीय भाषाएँ", badge: "कक्षा 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "करंट अफेयर के साथ प्रिलिम्स, मेन्स और इंटरव्यू की तैयारी", tag: "सिविल सेवा", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "महाराष्ट्र राज्य सेवा की पूरी तैयारी", tag: "राज्य सेवा", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "चिकित्सा प्रवेश के लिए जीवविज्ञान, भौतिकी और रसायन", tag: "मेडिकल", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT प्रवेश के लिए गणित, भौतिकी और रसायन", tag: "इंजीनियरिंग", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS तैयारी", desc: "चिकित्सा छात्रों के लिए बुनियादी और क्लिनिकल ज्ञान", tag: "मेडिकल", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "इंजीनियरिंग", desc: "CSE, ECE, मैकेनिकल, सिविल जैसे कोर इंजीनियरिंग विषय", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / लॉ", desc: "कानूनी तर्क, GK और अंग्रेज़ी लॉ प्रवेश के लिए", tag: "कानून", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "शीर्ष बिजनेस स्कूलों के लिए क्वांट, वर्बल और DILR", tag: "प्रबंधन", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "बैंकिंग / IBPS", desc: "बैंक परीक्षा के लिए रीजनिंग, गणित और अंग्रेज़ी", tag: "बैंकिंग", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / रक्षा", desc: "सशस्त्र बलों के लिए गणित, GK और SSB तैयारी", tag: "रक्षा", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech के लिए उन्नत इंजीनियरिंग और विज्ञान", tag: "पोस्टग्रेजुएट", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "बहीखाता, कर और वित्तीय पेशेवर पाठ्यक्रम", tag: "वित्त", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "प्रतियोगी परीक्षाएँ", title: "सबसे कठिन परीक्षाएँ पास करें", desc: "भारत की प्रतियोगी परीक्षाओं की तैयारी।", stat1Title: "12 ट्रैक", stat1Desc: "विविध पथ", stat2Title: "समयबद्ध मॉक", stat2Desc: "दबाव में अभ्यास", stat3Title: "रैंक बढ़ाएँ", stat3Desc: "स्पष्ट प्रतिक्रिया", pill1: "दैनिक मॉक", pill2: "रैंक भविष्यवाणी", pill3: "पाठ्यक्रम ट्रैकर्स", floatingChips: ["AIR 184", "98 %ile लक्ष्य", "अगला मॉक 07:30"] },
  scene: { today: "आज", streak: "स्ट्रीक", days: "दिन", revision: "दोहराव", grade: "A+", score: "स्कोर", mockClear: "मॉक पास", hi: "नमस्ते", air: "रैंक" }
};
export default dict;
