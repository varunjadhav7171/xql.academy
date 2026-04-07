const dict = {
  nav: { appName: "Akademia XQL", tagline: "Ucz się · Seria · Wygrywaj", login: "ZALOGUJ", signup: "REJESTRACJA" },
  hero: { title1: "Ucz się wszystkiego.", title2: "Poziom wyżej każdego dnia.", selectLanguage: "Chcę się uczyć..." },
  kids: { tag: "Dla Dzieci", badge: "Wesoły Postęp", title: "Interaktywny Świat", desc: "Zbiór wszystkiego, co dzieci kochają...", artTitle: "Historie, dźwięki i nagrody.", artDesc: "Bezpieczne i kolorowe miejsce.", stat1Title: "5 min", stat1Desc: "krótkie sesje gry", stat2Title: "Codziennie", stat2Desc: "serie i gwiazdy", stat3Title: "Mów", stat3Desc: "słuchaj i powtarzaj" },
  students: { tag: "Dla Uczniów", badge: "Skoncentrowany Impuls", artTitle: "Aktywne i nowoczesne miejsca nauki.", artDesc: "Ostre wrażenia dla studentów z wizualizacjami.", stat1Title: "12", stat1Desc: "przedmiotów do nauki", stat2Title: "Szybko", stat2Desc: "pętle powtórek", stat3Title: "Na żywo", stat3Desc: "paski postępu", title: "Opanuj przedmioty szkolne", desc: "Uporządkowane lekcje dla klas 1-12.", pill1: "Ćwiczenia do Egzaminu", pill2: "Animowany Postęp", pill3: "Szybka Powtórka" },
  kidsTopics: [
    { icon: "🔤", title: "ABC i Słowa", desc: "Naucz się alfabetu, fonetyki i podstawowego słownictwa", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Liczby i Matematyka", desc: "Liczenie, dodawanie i odejmowanie z zabawnymi grami wizualnymi", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Świat wokół nas", desc: "Zwierzęta, przyroda, planety i niesamowite fakty naukowe", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Sztuka i Kreatywność", desc: "Kolory, kształty, rysunek i kreatywna ekspresja", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Czas na Opowieść", desc: "Interaktywne historie rozwijające czytanie i wyobraźnię", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Mów i Ucz się", desc: "Wymów słowa i buduj pewność siebie w mówieniu", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Puzzle i Logika", desc: "Główkowanie, które wyostrza myślenie i rozwiązywanie problemów", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rymy i Piosenki", desc: "Ucz się przez muzykę, rytm i piosenki pamięciowe", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  studentsTopics: [
    { icon: "📐", title: "Matematyka", desc: "Algebra, geometria, trygonometria i analiza", badge: "Klasa 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Nauki", desc: "Fizyka, chemia i biologia przedstawione wizualnie", badge: "Klasa 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Angielski", desc: "Gramatyka, zrozumienie, pisanie i literatura", badge: "Klasa 1-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🗺️", title: "Nauki Społeczne", desc: "Historia, geografia, obywatelstwo i ekonomia", badge: "Klasa 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Informatyka", desc: "Podstawy programowania, MS Office i umiejętności cyfrowe", badge: "Klasa 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Praktyka laboratoryjna", desc: "Wirtualne eksperymenty z przewodnikiem krok po kroku", badge: "Klasa 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Pisanie Esejów", desc: "Struktura, słownictwo i umiejętności pisemne do egzaminów", badge: "Klasa 8-12", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🌐", title: "Języki", desc: "Hindi, sanskryt, francuski i języki regionalne", badge: "Klasa 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Przygotowanie do Prelims, Mains i rozmowy kwalifikacyjnej z aktualnymi tematami", tag: "Służby Cywilne", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Kompletne przygotowanie do państwowych służb Maharashtra", tag: "Służby Stanowe", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologia, fizyka i chemia do wejścia na medycynę", tag: "Medyczne", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Matematyka, fizyka i chemia do wejścia IIT/NIT", tag: "Inżynieria", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏥", title: "Przygotowanie MBBS", desc: "Podstawowa i kliniczna wiedza dla studentów medycyny", tag: "Medyczne", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Inżynieria", desc: "Podstawowe przedmioty inżynieryjne - CSE, ECE, Mechanika, Budownictwo", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Prawo", desc: "Myślenie prawne, GK i angielski do wejścia na prawo", tag: "Prawo", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Ilościowe, werbalne i DILR dla najlepszych szkół biznesowych", tag: "Zarządzanie", color: "#EFFFE0", border: "#C9EBFF" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Logika, matematyka i angielski do egzaminów bankowych", tag: "Bankowość", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Obrona", desc: "Matematyka, GK i przygotowanie SSB dla sił zbrojnych", tag: "Obrona", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Zaawansowana inżynieria i nauka dla PSU / M.Tech", tag: "Studia podyplomowe", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Księgowość, podatki i kursy finansowe", tag: "Finanse", color: "#EFFFE0", border: "#C9EBFF" }
  ],
  exams: { tag: "Trudne Egzaminy", title: "Zdaj najtrudniejsze egzaminy", desc: "Skoncentrowane przygotowanie do rywalizacji.", stat1Title: "12 Ścieżek", stat1Desc: "wiele dróg do sukcesu", stat2Title: "Próbne testy", stat2Desc: "praktyka pod presją", stat3Title: "Ranking", stat3Desc: "jasna ocena wydajności", pill1: "Codzienne testy", pill2: "Prognoza Oceny", pill3: "Śledzenie Programu" },
  scene: { today: "DZIŚ", streak: "SERIA", days: "Dni", revision: "POW", grade: "A+", score: "WYNIK", mockClear: "Test Zaliczony", hi: "Cześć", air: "RANGA" }
};
export default dict;
