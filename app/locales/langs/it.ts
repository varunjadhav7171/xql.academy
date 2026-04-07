const dict = {
  nav: { appName: "Accademia XQL", tagline: "Impara · Serie · Vinci", login: "ACCEDI", signup: "ISCRIVITI" },
  hero: { title1: "Impara di tutto.", title2: "Sali di livello ogni giorno.", selectLanguage: "Voglio imparare..." },
  kids: { tag: "Per Bambini", badge: "Progresso giocoso", title: "Mondo interattivo", desc: "Un mix di tutto ciò che i bambini amano...", artTitle: "Storie, suoni e ricompense in uno spazio felice.", artDesc: "Una vista per bambini dedicata, sicura e colorata.", stat1Title: "5 min", stat1Desc: "gioco breve", stat2Title: "Quotidiano", stat2Desc: "stelle e premi", stat3Title: "Parla", stat3Desc: "ascolta, ripeti e sorridi" },
  kidsTopics: [
    { icon: "🔤", title: "ABC e Parole", desc: "Impara l'alfabeto, la fonetica e il vocabolario di base", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Numeri e Matematica", desc: "Conta, somma e sottrai con giochi visivi divertenti", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Il mondo intorno a noi", desc: "Animali, natura, pianeti e fatti scientifici sorprendenti", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Arte e Creatività", desc: "Colori, forme, disegno ed espressione creativa", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Ora delle Storie", desc: "Storie interattive che sviluppano lettura e immaginazione", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Parla e Impara", desc: "Pronuncia parole e costruisci fiducia nel parlare", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Giochi di Logica", desc: "Enigmi mentali che affinano il pensiero e la risoluzione dei problemi", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rime e Canzoni", desc: "Impara con musica, ritmo e canzoni da memorizzare", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Per Studenti", badge: "Slancio concentrato", artTitle: "Spazi di studio attivi e moderni.", artDesc: "Un'esperienza studentesca con elementi visivi intelligenti.", stat1Title: "12", stat1Desc: "materie guidate", stat2Title: "Veloce", stat2Desc: "cicli di revisione", stat3Title: "Live", stat3Desc: "barre di avanzamento", title: "Supera le tue materie", desc: "Lezioni strutturate per le classi 1-12. Padroneggia ogni materia con i quiz.", pill1: "Esercizi d'esame", pill2: "Progresso animato", pill3: "Revisione veloce" },
  studentsTopics: [
    { icon: "📐", title: "Matematica", desc: "Algebra, geometria, trigonometria e calcolo", badge: "Classe 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Scienze", desc: "Fisica, chimica e biologia rese visive", badge: "Classe 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Inglese", desc: "Grammatica, comprensione, scrittura e letteratura", badge: "Classe 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Studi Sociali", desc: "Storia, geografia, educazione civica ed economia", badge: "Classe 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Informatica", desc: "Concetti base di programmazione, MS Office e competenze digitali", badge: "Classe 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Pratiche di Laboratorio", desc: "Esperimenti virtuali con guida passo passo", badge: "Classe 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Scrittura di Saggi", desc: "Struttura, vocabolario e abilità di scrittura per esami", badge: "Classe 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Lingue", desc: "Hindi, sanscrito, francese e lingue regionali", badge: "Classe 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Preparazione Prelims, Mains e colloquio con attualità", tag: "Servizi Civili", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Preparazione completa per i servizi statali del Maharashtra", tag: "Servizi Statali", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologia, Fisica e Chimica per l'ammissione medica", tag: "Medico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Matematica, Fisica e Chimica per l'ingresso IIT/NIT", tag: "Ingegneria", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "Preparazione MBBS", desc: "Conoscenze di base e cliniche per studenti di medicina", tag: "Medico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Ingegneria", desc: "Materie ingegneristiche di base - CSE, ECE, Meccanica, Civile", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Diritto", desc: "Ragionamento legale, GK e inglese per l'accesso legale", tag: "Diritto", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Quantitativo, verbale e DILR per le ammissioni alle business school", tag: "Gestione", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Ragionamento, matematica e inglese per esami bancari", tag: "Bancario", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Difesa", desc: "Matematica, GK e preparazione SSB per le forze armate", tag: "Difesa", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Ingegneria avanzata e scienze per PSU / M.Tech", tag: "Postgrad", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Contabilità, tassazione e corsi professionali finanziari", tag: "Finanza", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Esami Competitivi", title: "Supera gli esami più duri", desc: "Preparazione mirata per gli esami competitivi con percorsi strutturati.", stat1Title: "12 Percorsi", stat1Desc: "vari percorsi", stat2Title: "Simulazioni", stat2Desc: "pratica sotto pressione", stat3Title: "Classifiche", stat3Desc: "feedback chiaro", pill1: "Test quotidiani", pill2: "Previsione rango", pill3: "Tracciamento programma", floatingChips: ["AIR 184", "Obiettivo 98 %ile", "Prossimo Mock 07:30"] },
  scene: { today: "OGGI", streak: "SERIE", days: "Giorni", revision: "RIP", grade: "A+", score: "PUNTEGGIO", mockClear: "Sim. OK", hi: "Ciao", air: "RANK" }
};
export default dict;
