const dict = {
  nav: { appName: "Académie XQL", tagline: "Apprendre · Série · Gagner", login: "CONNEXION", signup: "S'INSCRIRE" },
  hero: { title1: "Apprenez tout.", title2: "Progressez chaque jour.", selectLanguage: "Je veux apprendre..." },
  kids: { tag: "Pour les Enfants", badge: "Progrès ludique", title: "Monde interactif de sujets", desc: "Un mélange de tout ce que les enfants aiment...", artTitle: "Histoires, sons et récompenses dans un espace joyeux.", artDesc: "Une vue dédiée qui est sûre, colorée et passionnante.", stat1Title: "5 min", stat1Desc: "sessions de jeu courtes", stat2Title: "Quotidien", stat2Desc: "étoiles et récompenses", stat3Title: "Parle", stat3Desc: "écoute, répète et souris" },
  kidsTopics: [
    { icon: "🔤", title: "ABC et Mots", desc: "Apprenez les alphabets, la phonétique et le vocabulaire de base", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Nombres et Mathématiques", desc: "Comptez, additionnez et soustrayez avec des jeux visuels amusants", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Le Monde Autour de Nous", desc: "Animaux, nature, planètes et faits scientifiques étonnants", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Art et Créativité", desc: "Couleurs, formes, dessin et expression créative", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Heure des Histoires", desc: "Histoires interactives qui développent la lecture et l'imagination", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Parle et Apprends", desc: "Prononce des mots et construis la confiance en parlant", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Casse-têtes et Logique", desc: "Casse-têtes mentaux qui aiguisent la pensée et la résolution de problèmes", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rimes et Chansons", desc: "Apprenez à travers la musique, le rythme et les chansons de mémoire", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Pour les Étudiants", badge: "Élan concentré", artTitle: "Des espaces d'étude actifs et modernes.", artDesc: "Une expérience plus fine avec des visuels intelligents.", stat1Title: "12", stat1Desc: "pistes de sujets", stat2Title: "Rapide", stat2Desc: "boucles de révision", stat3Title: "En Direct", stat3Desc: "barres de progression", title: "Maîtrisez vos matières", desc: "Leçons structurées pour les classes 1-12. Maîtrisez chaque sujet avec des quiz.", pill1: "Exercices d'examen", pill2: "Progrès animés", pill3: "Révisions rapides" },
  studentsTopics: [
    { icon: "📐", title: "Mathématiques", desc: "Algèbre, géométrie, trigonométrie et calcul", badge: "Classe 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Sciences", desc: "Physique, chimie et biologie rendues visuelles", badge: "Classe 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Anglais", desc: "Grammaire, compréhension, écriture et littérature", badge: "Classe 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Études Sociales", desc: "Histoire, géographie, civisme et économie", badge: "Classe 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Informatique", desc: "Concepts de base de programmation, MS Office et compétences numériques", badge: "Classe 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Travaux Pratiques", desc: "Expériences virtuelles avec un guide étape par étape", badge: "Classe 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Rédaction d'Essais", desc: "Structure, vocabulaire et compétences d'écriture pour les examens", badge: "Classe 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Langues", desc: "Hindi, sanskrit, français et langues régionales", badge: "Classe 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Préparation Prelims, Mains et Entretien avec les affaires courantes", tag: "Services Civils", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Préparation complète des services d'État du Maharashtra", tag: "Services d'État", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologie, Physique et Chimie pour l'entrée médicale", tag: "Médical", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Maths, Physique et Chimie pour l'entrée IIT/NIT", tag: "Ingénierie", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "Préparation MBBS", desc: "Connaissances de base et cliniques pour les étudiants en médecine", tag: "Médical", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Ingénierie", desc: "Sujets d'ingénierie de base - CSE, ECE, Mécanique, Civil", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Droit", desc: "Raisonnement juridique, GK et anglais pour l'entrée en droit", tag: "Droit", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Quantitatif, verbal et DILR pour les admissions dans les écoles de commerce", tag: "Gestion", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Banque / IBPS", desc: "Raisonnement, maths et anglais pour les examens bancaires", tag: "Banque", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Défense", desc: "Maths, GK et préparation SSB pour les forces armées", tag: "Défense", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Ingénierie avancée et sciences pour PSU / M.Tech", tag: "Postgradué", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Comptes, fiscalité et cours professionnels de finance", tag: "Finance", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Examens Compétitifs", title: "Réussissez les examens", desc: "Préparation ciblée pour des examens compétitifs avec des chemins structurés.", stat1Title: "12 Pistes", stat1Desc: "cheminements multiples", stat2Title: "Simulations", stat2Desc: "pratique sous pression", stat3Title: "Classements", stat3Desc: "retours de performance", pill1: "Tests quotidiens", pill2: "Prédiction de rang", pill3: "Suivis de programme", floatingChips: ["AIR 184", "Objectif 98 %ile", "Prochain Mock 07:30"] },
  scene: { today: "AUJOURD'HUI", streak: "SÉRIE", days: "Jours", revision: "RÉV", grade: "A+", score: "SCORE", mockClear: "Simulation OK", hi: "Salut", air: "AIR" }
};
export default dict;
