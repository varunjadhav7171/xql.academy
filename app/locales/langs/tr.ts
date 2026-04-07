const dict = {
  nav: { appName: "XQL Akademi", tagline: "Öğren · Seri · Kazan", login: "GİRİŞ", signup: "KAYIT OL" },
  hero: { title1: "Her şeyi öğren.", title2: "Her gün seviye atla.", selectLanguage: "Öğrenmek istiyorum..." },
  kids: { tag: "Çocuklar İçin", badge: "Eğlenceli İlerleme", title: "İnteraktif dünya", desc: "Çocukların sevdiği her şey...", artTitle: "Mutlu bir yerde hikayeler ve ödüller.", artDesc: "Güvenli ve renkli bir alan.", stat1Title: "5 dk", stat1Desc: "kısa oyun", stat2Title: "Günlük", stat2Desc: "seri ve yıldız", stat3Title: "Konuş", stat3Desc: "dinle ve tekrarla" },
  students: { tag: "Öğrenciler İçin", badge: "Odaklanma", artTitle: "Modern çalışma alanları.", artDesc: "Kapsamlı bir öğrenci deneyimi.", stat1Title: "12", stat1Desc: "yönlendirmeli konu", stat2Title: "Hızlı", stat2Desc: "tekrar döngüsü", stat3Title: "Canlı", stat3Desc: "ilerleme çubuğu", title: "Dersleri Başar", desc: "1-12. sınıflar için yapılandırılmış dersler.", pill1: "Sınav Egzersizi", pill2: "Canlı İlerleme", pill3: "Hızlı Tekrar" },
  kidsTopics: [
    { icon: "🔤", title: "ABC ve Kelimeler", desc: "Alfabe, fonetik ve temel kelime bilgisini öğrenin", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Sayılar ve Matematik", desc: "Eğlenceli görsel oyunlarla sayın, toplayın ve çıkarın", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Etrafımızdaki Dünya", desc: "Hayvanlar, doğa, gezegenler ve inanılmaz bilimsel gerçekler", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Sanat ve Yaratıcılık", desc: "Renkler, şekiller, çizim ve yaratıcı ifade", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Hikaye Zamanı", desc: "Okumayı ve hayal gücünü geliştiren etkileşimli hikayeler", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Konuş ve Öğren", desc: "Kelimeleri telaffuz edin ve konuşma güveninizi geliştirin", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Bulmacalar ve Mantık", desc: "Düşünmeyi ve problem çözmeyi keskinleştiren zihin oyunları", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Kafiye ve Şarkılar", desc: "Müzik, ritim ve ezber şarkılarıyla öğrenin", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  studentsTopics: [
    { icon: "📐", title: "Matematik", desc: "Cebir, geometri, trigonometri ve kalkülüs", badge: "Sınıf 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Fen", desc: "Fizik, kimya ve biyolojiyi görselleştirilmiş şekilde öğrenin", badge: "Sınıf 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "İngilizce", desc: "Dilbilgisi, okuma, yazma ve edebiyat", badge: "Sınıf 1-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🗺️", title: "Sosyal Bilgiler", desc: "Tarih, coğrafya, yurttaşlık ve ekonomi", badge: "Sınıf 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Bilgisayar Bilimi", desc: "Programlama temelleri, MS Office ve dijital beceriler", badge: "Sınıf 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Laboratuvar Uygulamaları", desc: "Adım adım rehberli sanal deneyler", badge: "Sınıf 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Kompozisyon Yazımı", desc: "Sınavlar için yapı, kelime dağarcığı ve yazma becerileri", badge: "Sınıf 8-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🌐", title: "Diller", desc: "Hintçe, Sanskritçe, Fransızca ve bölgesel diller", badge: "Sınıf 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Güncel konularla Prelims, Mains ve mülakat hazırlığı", tag: "Kamu Hizmetleri", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Maharashtra devlet hizmetleri için eksiksiz hazırlık", tag: "Devlet Hizmetleri", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Tıp giriş için biyoloji, fizik ve kimya", tag: "Tıp", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "IIT/NIT giriş için matematik, fizik ve kimya", tag: "Mühendislik", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏥", title: "MBBS Hazırlığı", desc: "Tıp öğrencileri için temel ve klinik bilgi", tag: "Tıp", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Mühendislik", desc: "CSE, ECE, Mekanik, İnşaat gibi temel mühendislik dersleri", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Hukuk", desc: "Hukuki akıl yürütme, GK ve İngilizce için", tag: "Hukuk", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Üst düzey işletme okulları için nicel, sözel ve DILR", tag: "Yönetim", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Banka sınavları için mantık, matematik ve İngilizce", tag: "Bankacılık", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Savunma", desc: "Silahlı kuvvetler için matematik, GK ve SSB hazırlığı", tag: "Savunma", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Gelişmiş mühendislik ve bilim için PSU / M.Tech", tag: "Lisansüstü", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Muhasebe, vergilendirme ve finansal mesleki kurslar", tag: "Finans", color: "#EFFFE0", border: "#C9EBFF" }
  ],
  exams: { tag: "Rekabetçi Sınavlar", title: "Zorlu sınavları kazan", desc: "Önemli sınavlara hazırlık.", stat1Title: "12 Yön", stat1Desc: "çeşitli alanlar", stat2Title: "Denemeler", stat2Desc: "baskı altında pratik", stat3Title: "Sıralama", stat3Desc: "hızlı geri bildirim", pill1: "Günlük Deneme", pill2: "Derece Tahmini", pill3: "Müfredat Takibi" },
  scene: { today: "BUGÜN", streak: "SERİ", days: "Gün", revision: "TÖK", grade: "A+", score: "PUAN", mockClear: "Deneme Geçti", hi: "Merhaba", air: "SIRA" }
};
export default dict;
