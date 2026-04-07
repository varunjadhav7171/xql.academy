const dict = {
  nav: { appName: "Akademi XQL", tagline: "Belajar · Streak · Menang", login: "MASUK", signup: "DAFTAR" },
  hero: { title1: "Pelajari apa saja.", title2: "Naik level setiap hari.", selectLanguage: "Saya ingin belajar..." },
  kids: { tag: "Untuk Anak", badge: "Kemajuan bermain", title: "Dunia interaktif", desc: "Campuran hal yang disukai anak...", artTitle: "Cerita, suara, dan hadiah di satu tempat.", artDesc: "Aman dan penuh warna.", stat1Title: "5 mnt", stat1Desc: "sesi bermain singkat", stat2Title: "Harian", stat2Desc: "hadiah streak", stat3Title: "Bicara", stat3Desc: "dengar dan ulangi" },
  students: { tag: "Untuk Pelajar", badge: "Fokus maksimum", artTitle: "Ruang belajar modern dan aktif.", artDesc: "Pengalaman belajar siswa yang tajam.", stat1Title: "12", stat1Desc: "pelajaran terpandu", stat2Title: "Cepat", stat2Desc: "sesi revisi", stat3Title: "Live", stat3Desc: "progres dan tujuan", title: "Kuasai pelajaran", desc: "Pelajaran kelas 1-12 yang terstruktur.", pill1: "Latihan Ujian", pill2: "Progres Nyata", pill3: "Revisi Cepat" },
  kidsTopics: [
    { icon: "🔤", title: "ABC dan Kata", desc: "Pelajari alfabet, fonetik, dan kosakata dasar", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Angka dan Matematika", desc: "Hitung, tambahkan, dan kurangi dengan game visual yang seru", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Dunia di Sekitar Kita", desc: "Hewan, alam, planet, dan fakta sains menakjubkan", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Seni dan Kreativitas", desc: "Warna, bentuk, menggambar, dan ekspresi kreatif", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Waktu Cerita", desc: "Cerita interaktif yang membangun membaca dan imajinasi", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Bicara dan Belajar", desc: "Ucapkan kata dan bangun percaya diri berbicara", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Teka-teki dan Logika", desc: "Latihan otak yang mempertajam berpikir dan pemecahan masalah", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rima dan Lagu", desc: "Belajar melalui musik, ritme, dan lagu ingatan", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  studentsTopics: [
    { icon: "📐", title: "Matematika", desc: "Aljabar, geometri, trigonometri, dan kalkulus", badge: "Kelas 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Sains", desc: "Fisika, kimia, dan biologi divisualisasikan", badge: "Kelas 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Bahasa Inggris", desc: "Tata bahasa, pemahaman, tulisan, dan sastra", badge: "Kelas 1-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🗺️", title: "Ilmu Sosial", desc: "Sejarah, geografi, kewarganegaraan, dan ekonomi", badge: "Kelas 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "TIK", desc: "Dasar pemrograman, MS Office, dan keterampilan digital", badge: "Kelas 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Praktikum", desc: "Eksperimen virtual dengan panduan langkah demi langkah", badge: "Kelas 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Menulis Esai", desc: "Struktur, kosakata, dan keterampilan menulis untuk ujian", badge: "Kelas 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Bahasa", desc: "Hindi, Sanskerta, Prancis, dan bahasa daerah", badge: "Kelas 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Persiapan Prelims, Mains, dan wawancara dengan isu terkini", tag: "Layanan Sipil", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Persiapan lengkap untuk layanan negara Maharashtra", tag: "Layanan Negara", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologi, Fisika, dan Kimia untuk masuk kedokteran", tag: "Medis", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Matematika, Fisika, dan Kimia untuk masuk IIT/NIT", tag: "Teknik", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏥", title: "Persiapan MBBS", desc: "Pengetahuan dasar dan klinis untuk mahasiswa kedokteran", tag: "Medis", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Teknik", desc: "Mata pelajaran inti teknik - CSE, ECE, Mekanik, Sipil", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Hukum", desc: "Penalaran hukum, GK, dan Inggris untuk masuk hukum", tag: "Hukum", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Kuantitatif, verbal, dan DILR untuk sekolah bisnis top", tag: "Manajemen", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Penalaran, matematika, dan bahasa Inggris untuk ujian perbankan", tag: "Perbankan", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Pertahanan", desc: "Matematika, GK, dan persiapan SSB untuk angkatan bersenjata", tag: "Pertahanan", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Teknik lanjutan dan ilmu untuk PSU / M.Tech", tag: "Pascasarjana", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Akuntansi, perpajakan, dan kursus profesional keuangan", tag: "Keuangan", color: "#EFFFE0", border: "#C9EBFF" }
  ],
  exams: { tag: "Ujian Kompetitif", title: "Lulus ujian tersulit", desc: "Persiapan matang ujian kompetitif.", stat1Title: "12 Jalur", stat1Desc: "banyak pilihan", stat2Title: "Tes Simulasi", stat2Desc: "latihan langsung", stat3Title: "Peringkat", stat3Desc: "umpan balik cepat", pill1: "Tes Harian", pill2: "Prediksi Peringkat", pill3: "Pelacak Silabus" },
  scene: { today: "HARI INI", streak: "STREAK", days: "Hari", revision: "ULANG", grade: "A+", score: "SKOR", mockClear: "Simulasi Lulus", hi: "Halo", air: "PERINGKAT" }
};
export default dict;
