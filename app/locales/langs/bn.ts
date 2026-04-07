const dict = {
  nav: { appName: "XQL একাডেমি", tagline: "শিখুন · স্ট্রিক · জিতুন", login: "লগ ইন", signup: "সাইন আপ" },
  hero: { title1: "যেকোনো কিছু শিখুন।", title2: "প্রতিদিন এগিয়ে যান।", selectLanguage: "আমি শিখতে চাই..." },
  kids: { tag: "বাচ্চাদের জন্য", badge: "খেলার ছলে অগ্রগতি", title: "ইন্টারেক্টিভ বিশ্ব", desc: "বাচ্চাদের পছন্দের সবকিছু...", artTitle: "গল্প, শব্দ এবং পুরষ্কার একটি আনন্দময় স্থানে।", artDesc: "নিরাপদ এবং রঙিন স্থান।", stat1Title: "৫ মিনিট", stat1Desc: "ছোট খেলার সেশন", stat2Title: "রোজ", stat2Desc: "পুরষ্কার", stat3Title: "বলুন", stat3Desc: "শুনুন, পুনরাবৃত্তি করুন" },
  students: { tag: "শিক্ষার্থীদের জন্য", badge: "কেন্দ্রিক গতি", artTitle: "সক্রিয় এবং আধুনিক অধ্যয়নের স্থান।", artDesc: "ছাত্রদের স্মার্ট অভিজ্ঞতা।", stat1Title: "১২", stat1Desc: "বিষয় ট্র্যাক", stat2Title: "দ্রুত", stat2Desc: "রিভিশন", stat3Title: "লাইভ", stat3Desc: "অগ্রগতি এবং লক্ষ্য", title: "স্কুলের বিষয়ে শীর্ষে থাকুন", desc: "১-১২ শ্রেণীর পাঠ্যক্রম।", pill1: "পরীক্ষার প্রস্তুতি", pill2: "অগ্রগতি", pill3: "দ্রুত রিভিশন" },
  kidsTopics: [
    { icon: "🔤", title: "ABC ও শব্দ", desc: "বর্ণমালা, ধ্বনিতত্ত্ব এবং মৌলিক শব্দভাণ্ডার শিখুন", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "সংখ্যা ও গণিত", desc: "মজার ভিজ্যুয়াল গেম দিয়ে গণনা, যোগ ও বিয়োগ শিখুন", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "আমাদের আশেপাশের বিশ্ব", desc: "প্রাণী, প্রকৃতি, গ্রহ এবং আশ্চর্যজনক বৈজ্ঞানিক তথ্য", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "শিল্প ও সৃজনশীলতা", desc: "রং, আকৃতি, আঁকা এবং সৃজনশীল অভিব্যক্তি", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "গল্পের সময়", desc: "ইন্টারেক্টিভ গল্প যা পড়া এবং কল্পনাশক্তি তৈরি করে", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "কথা বলি ও শিখি", desc: "শব্দ উচ্চারণ করুন ও কথা বলার আত্মবিশ্বাস গড়ে তুলুন", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "ধাঁধা ও যুক্তি", desc: "মস্তিষ্ক সতেজ করার ধাঁধা ও সমস্যা সমাধান অনুশীলন", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "ছড়া ও গান", desc: "সঙ্গীত, ছন্দ ও স্মৃতি গান দিয়ে শিখুন", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  studentsTopics: [
    { icon: "📐", title: "গণিত", desc: "বীজগণিত, জ্যামিতি, ত্রিকোণমিতি ও ক্যালকুলাস", badge: "ক্লাস 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "বিজ্ঞান", desc: "পদার্থ, রসায়ন ও জীববিজ্ঞান চিত্রময়ভাবে", badge: "ক্লাস 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "ইংরেজি", desc: "ব্যাকরণ, অনুধাবন, লেখনী ও সাহিত্য", badge: "ক্লাস 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "সামাজিক শিক্ষা", desc: "ইতিহাস, ভৌগোলিক, নাগরিকতা ও অর্থনীতি", badge: "ক্লাস 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "কম্পিউটার সাইন্স", desc: "প্রোগ্রামিং মৌলিক, এমএস অফিস ও ডিজিটাল দক্ষতা", badge: "ক্লাস 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "ল্যাব প্র্যাকটিক্যালস", desc: "ধাপে ধাপে গাইড সহ ভার্চুয়াল পরীক্ষা", badge: "ক্লাস 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "নিবন্ধ লেখা", desc: "পরীক্ষার জন্য কাঠামো, শব্দভাণ্ডার ও লেখার দক্ষতা", badge: "ক্লাস 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "ভাষা", desc: "হিন্দি, সংস্কৃত, ফরাসি ও আঞ্চলিক ভাষা", badge: "ক্লাস 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "সাময়িক বিষয় সহ প্রিলিমস, মেইন ও সাক্ষাৎকার প্রস্তুতি", tag: "সিভিল সার্ভিসেস", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "মহারাষ্ট্র রাজ্য সেবার সম্পূর্ণ প্রস্তুতি", tag: "রাজ্য সেবা", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "মেডিক্যাল এন্ট্রান্সের জন্য জীববিজ্ঞান, পদার্থবিজ্ঞান এবং রসায়ন", tag: "মেডিকেল", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT প্রবেশের জন্য গণিত, পদার্থবিজ্ঞান এবং রসায়ন", tag: "ইঞ্জিনিয়ারিং", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS প্রস্তুতি", desc: "চিকিৎসা শিক্ষার্থীদের জন্য মৌলিক ও ক্লিনিক্যাল জ্ঞান", tag: "মেডিকেল", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "ইঞ্জিনিয়ারিং", desc: "মূল ইঞ্জিনিয়ারিং বিষয় - CSE, ECE, মেকানিক্যাল, সিভিল", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / আইন", desc: "আইনি যুক্তি, GK এবং ইংরেজি আইন প্রবেশের জন্য", tag: "আইন", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "ব্যবসা স্কুলের জন্য পরিমাণগত, মৌখিক ও DILR", tag: "ম্যানেজমেন্ট", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "ব্যাংকিং / IBPS", desc: "ব্যাংকিং পরীক্ষার জন্য যুক্তি, গণিত ও ইংরেজি", tag: "ব্যাংকিং", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / ডিফেন্স", desc: "বাহিনী জন্য গণিত, GK ও SSB প্রস্তুতি", tag: "ডিফেন্স", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "PSU / M.Tech-এর জন্য উন্নত ইঞ্জিনিয়ারিং ও বিজ্ঞান", tag: "পোস্টগ্র্যাজুয়েট", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "হিসাবরক্ষণ, কর ও আর্থিক কোর্স", tag: "ফাইন্যান্স", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "প্রতিযোগিতামূলক পরীক্ষা", title: "কঠিন পরীক্ষায় উত্তীর্ণ হোন", desc: "কঠিন পরীক্ষার প্রস্তুতি।", stat1Title: "১২ টি পথ", stat1Desc: "বিভিন্ন কোর্স", stat2Title: "মক টেস্ট", stat2Desc: "চাপের মধ্যে অনুশীলন", stat3Title: "র‍্যাঙ্ক", stat3Desc: "সাফল্যের প্রতিক্রিয়া", pill1: "দৈনিক মক", pill2: "র‍্যাঙ্ক পূর্বাভাস", pill3: "সিলেবাস ট্র্যাকার", floatingChips: ["AIR 184", "98 %ile লক্ষ্য", "পরবর্তী Mock 07:30"] },
  scene: { today: "আজ", streak: "স্ট্রিক", days: "দিন", revision: "পুনরাবৃত্তি", grade: "A+", score: "স্কোর", mockClear: "মক পাস", hi: "হ্যালো", air: "র‍্যাঙ্ক" }
};
export default dict;
