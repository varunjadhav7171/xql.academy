const dict = {
  nav: { appName: "XQL Akademie", tagline: "Lernen · Serie · Gewinnen", login: "ANMELDEN", signup: "REGISTRIEREN" },
  hero: { title1: "Lerne alles.", title2: "Steige täglich auf.", selectLanguage: "Ich möchte lernen..." },
  kids: { tag: "Für Kinder", badge: "Spielerischer Fortschritt", title: "Interaktive Themenwelt", desc: "Eine Mischung aus allem, was Kinder gerne entdecken...", artTitle: "Geschichten, Geräusche und Belohnungen an einem fröhlichen Ort.", artDesc: "Ein eigener Bereich, der sicher, bunt und spannend ist.", stat1Title: "5 Min", stat1Desc: "kurze Spielsitzungen", stat2Title: "Täglich", stat2Desc: "Stern-Serien und Belohnungen", stat3Title: "Sprechen", stat3Desc: "zuhören, wiederholen und lächeln" },
  kidsTopics: [
    { icon: "🔤", title: "ABC und Wörter", desc: "Lerne Alphabete, Phonetik und grundlegenden Wortschatz", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Zahlen und Mathematik", desc: "Zähle, addiere und subtrahiere mit lustigen visuellen Spielen", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Die Welt um uns herum", desc: "Tiere, Natur, Planeten und erstaunliche wissenschaftliche Fakten", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Kunst und Kreativität", desc: "Farben, Formen, Zeichnen und kreativer Ausdruck", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Geschichtenstunde", desc: "Interaktive Geschichten, die Lesen und Vorstellungskraft aufbauen", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Sprechen und Lernen", desc: "Wörter aussprechen und Selbstvertrauen beim Sprechen aufbauen", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Rätsel und Logik", desc: "Gehirn-Jonglagen, die Denken und Problemlösung schärfen", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Reime und Lieder", desc: "Lerne durch Musik, Rhythmus und Gedächtnislieder", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Für Studenten", badge: "Fokussierter Schwung", artTitle: "Lernräume, die sich aktiv und modern anfühlen.", artDesc: "Eine schärfere Lernerfahrung mit intelligenten Grafiken.", stat1Title: "12", stat1Desc: "Themenbereiche mit geführter Praxis", stat2Title: "Schnell", stat2Desc: "Wiederholungsschleifen", stat3Title: "Live", stat3Desc: "Fortschrittsbalken und Ziele", title: "Meistere deine Schulfächer", desc: "Strukturierte Lektionen für die Klassen 1-12. Meistere jedes Fach durch Quizze.", pill1: "Prüfungsübungen", pill2: "Animierter Fortschritt", pill3: "Schnelle Wiederholung" },
  studentsTopics: [
    { icon: "📐", title: "Mathematik", desc: "Algebra, Geometrie, Trigonometrie und Analysis", badge: "Klasse 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Wissenschaften", desc: "Physik, Chemie und Biologie visuell gemacht", badge: "Klasse 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Englisch", desc: "Grammatik, Verständnis, Schreiben und Literatur", badge: "Klasse 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Sozialkunde", desc: "Geschichte, Geografie, Staatsbürgerkunde und Wirtschaft", badge: "Klasse 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Informatik", desc: "Grundlagen der Programmierung, MS Office und digitale Fähigkeiten", badge: "Klasse 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Laborpraktika", desc: "Virtuelle Experimente mit Schritt-für-Schritt-Anleitung", badge: "Klasse 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Aufsatzschreiben", desc: "Struktur, Vokabular und Schreibfähigkeiten für Prüfungen", badge: "Klasse 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Sprachen", desc: "Hindi, Sanskrit, Französisch und regionale Sprachen", badge: "Klasse 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Vorbereitung für Prelims, Mains und Interview mit aktuellen Angelegenheiten", tag: "Öffentlicher Dienst", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Vollständige Vorbereitung für Maharashtra Staatsdienste", tag: "Staatsdienste", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologie, Physik und Chemie für medizinischen Zugang", tag: "Medizin", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Mathematik, Physik und Chemie für IIT/NIT Zugang", tag: "Ingenieurwesen", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "MBBS Vorbereitung", desc: "Grundlagen und klinisches Wissen für Medizinstudenten", tag: "Medizin", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Ingenieurwesen", desc: "Kernfächer des Ingenieurwesens - CSE, ECE, Mechanik, Bau", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Recht", desc: "Juristisches Denken, GK und Englisch für Rechtszugang", tag: "Recht", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Quantitativ, verbal und DILR für Top-Business-Schulen", tag: "Management", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Bankwesen / IBPS", desc: "Denken, Mathematik und Englisch für Bankprüfungen", tag: "Bankwesen", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Verteidigung", desc: "Mathematik, GK und SSB Vorbereitung für Streitkräfte", tag: "Verteidigung", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Fortgeschrittene Ingenieurwissenschaften für PSU / M.Tech", tag: "Postgraduiert", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Buchhaltung, Steuern und Finanzberufskurse", tag: "Finanzen", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Leistungstests", title: "Knacke die härtesten Prüfungen", desc: "Fokussierte Vorbereitung auf wettbewerbsfähige Prüfungen mit strukturierten Wegen.", stat1Title: "12 Pfade", stat1Desc: "verschiedene Kurse", stat2Title: "Prüfungen", stat2Desc: "Üben unter Druck", stat3Title: "Ränge", stat3Desc: "klares Leistungsfeedback", pill1: "Tägliche Tests", pill2: "Rangvorhersage", pill3: "Lehrplantracker", floatingChips: ["AIR 184", "98 %ile Ziel", "Nächster Mock 07:30"] },
  scene: { today: "HEUTE", streak: "SERIE", days: "Tage", revision: "WDH", grade: "A+", score: "PUNKTE", mockClear: "Test OK", hi: "Hallo", air: "RANG" }
};
export default dict;
