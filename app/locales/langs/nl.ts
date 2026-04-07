const dict = {
  nav: { appName: "XQL Academie", tagline: "Leer · Reeks · Win", login: "INLOGGEN", signup: "REGISTREREN" },
  hero: { title1: "Leer van alles.", title2: "Stijg dagelijks in niveau.", selectLanguage: "Ik wil leren..." },
  kids: { tag: "Voor Kinderen", badge: "Speelse vooruitgang", title: "Interactieve wereld", desc: "Dingen die kinderen graag ontdekken...", artTitle: "Verhalen, geluiden en beloningen.", artDesc: "Een veilige en kleurrijke weergave.", stat1Title: "5 min", stat1Desc: "korte speelsessies", stat2Title: "Dagelijks", stat2Desc: "reeks en sterren", stat3Title: "Spreek", stat3Desc: "luister en herhaal" },
  students: { tag: "Voor Studenten", badge: "Grote focus", artTitle: "Actieve en moderne leerruimtes.", artDesc: "Slimme visuals en feedback.", stat1Title: "12", stat1Desc: "geleide vakken", stat2Title: "Snel", stat2Desc: "herhalingssessies", stat3Title: "Live", stat3Desc: "voortgangsbalken", title: "Beheers je schoolvakken", desc: "Structuurlessen voor de hele rit.", pill1: "Examentoetsen", pill2: "Live Voortgang", pill3: "Snelle Herhaling" },
  kidsTopics: [
    { icon: "🔤", title: "ABC en Woorden", desc: "Leer alfabet, fonetiek en basiswoordenschat", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Getallen en Wiskunde", desc: "Tel, tel op en trek af met leuke visuele spellen", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "De Wereld om Ons Heen", desc: "Dieren, natuur, planeten en verbazingwekkende wetenschappelijke feiten", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Kunst en Creativiteit", desc: "Kleuren, vormen, tekenen en creatieve expressie", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Verhaaltjestijd", desc: "Interactieve verhalen die lezen en verbeelding opbouwen", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Spreek en Leer", desc: "Spreek woorden uit en bouw vertrouwen op", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Puzzels en Logica", desc: "Breinbrekers die denken en probleemoplossing aanscherpen", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rijmpjes en Liedjes", desc: "Leer via muziek, ritme en geheugenliedjes", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  studentsTopics: [
    { icon: "📐", title: "Wiskunde", desc: "Algebra, geometrie, goniometrie en calculus", badge: "Klas 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Natuurkunde", desc: "Natuurkunde, scheikunde en biologie visueel gemaakt", badge: "Klas 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Engels", desc: "Grammatica, begrip, schrijven en literatuur", badge: "Klas 1-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🗺️", title: "Sociale Studies", desc: "Geschiedenis, aardrijkskunde, burgerschap en economie", badge: "Klas 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Informatica", desc: "Basis programmeren, MS Office en digitale vaardigheden", badge: "Klas 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Lab Practica", desc: "Virtuele experimenten met stapsgewijze begeleiding", badge: "Klas 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Essay Schrijven", desc: "Structuur, woordenschat en schrijfvaardigheden voor exams", badge: "Klas 8-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🌐", title: "Talen", desc: "Hindi, Sanskriet, Frans en regionale talen", badge: "Klas 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Voorbereiding voor Prelims, Mains en interview met actualiteiten", tag: "Openbare Diensten", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Volledige voorbereiding voor Maharashtra Staatstaken", tag: "Staatsdiensten", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologie, natuurkunde en scheikunde voor medische toelating", tag: "Medisch", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Wiskunde, natuurkunde en scheikunde voor IIT/NIT", tag: "Techniek", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏥", title: "MBBS Voorbereiding", desc: "Basis en klinische kennis voor geneeskundestudenten", tag: "Medisch", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Techniek", desc: "Kerntechnische vakken - CSE, ECE, Mechanica, Civiel", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Recht", desc: "Juridisch redeneren, GK en Engels voor rechtenstudie", tag: "Recht", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Kwantitatief, verbaal en DILR voor top business schools", tag: "Management", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Redeneren, wiskunde en Engels voor bankexamens", tag: "Bankieren", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Defensie", desc: "Wiskunde, GK en SSB voorbereiding voor strijdkrachten", tag: "Defensie", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Geavanceerde techniek en wetenschap voor PSU / M.Tech", tag: "Postgraduaat", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Boekhouding, belasting en financiële beroepscursussen", tag: "Financiën", color: "#EFFFE0", border: "#C9EBFF" }
  ],
  exams: { tag: "Competitieve Examens", title: "Kraak zware examens", desc: "Examentraining met tests en doelen.", stat1Title: "12 Paden", stat1Desc: "veel cursussen", stat2Title: "Proefexamens", stat2Desc: "oefenen onder druk", stat3Title: "Ranglijst", stat3Desc: "duidelijke feedback", pill1: "Dagelijkse Tests", pill2: "Rangschikking", pill3: "Syllabus Tracker" },
  scene: { today: "VANDAAG", streak: "REEKS", days: "Dagen", revision: "HER", grade: "A+", score: "SCORE", mockClear: "Proef OK", hi: "Hoi", air: "RANG" }
};
export default dict;
