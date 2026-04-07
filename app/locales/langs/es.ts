const dict = {
  nav: { appName: "Academia XQL", tagline: "Aprende · Racha · Gana", login: "INICIAR SESIÓN", signup: "REGISTRARSE" },
  hero: { title1: "Aprende cualquier cosa.", title2: "Sube de nivel a diario.", selectLanguage: "Quiero aprender..." },
  kids: { tag: "Para Niños", badge: "Progreso lúdico", title: "Mundo interactivo de temas", desc: "Una mezcla de todo lo que a los niños les encanta explorar...", artTitle: "Historias, sonidos, recompensas y pequeñas victorias en un lugar feliz.", artDesc: "Una vista dedicada a los niños que se siente segura y colorida.", stat1Title: "5 min", stat1Desc: "sesiones de juego breves", stat2Title: "Diario", stat2Desc: "estrellas de racha y premios", stat3Title: "Habla", stat3Desc: "escucha, repite y sonríe" },
  kidsTopics: [
    { icon: "🔤", title: "ABC y Palabras", desc: "Aprende alfabetos, fonética y vocabulario básico", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Números y Matemáticas", desc: "Cuenta, suma y resta con juegos visuales divertidos", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "El Mundo a Nuestro Alrededor", desc: "Animales, naturaleza, planetas y hechos científicos asombrosos", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Arte y Creatividad", desc: "Colores, formas, dibujo y expresión creativa", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Hora de Cuentos", desc: "Historias interactivas que construyen la lectura y la imaginación", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Habla y Aprende", desc: "Pronuncia palabras y construye confianza al hablar", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Rompecabezas y Lógica", desc: "Rompecabezas mentales que agudizan el pensamiento y la resolución de problemas", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rimas y Canciones", desc: "Aprende a través de la música, el ritmo y las canciones de memoria", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Para Estudiantes", badge: "Impulso centrado", artTitle: "Espacios de estudio activos y modernos.", artDesc: "Una experiencia más aguda con visuales inteligentes y retroalimentación animada.", stat1Title: "12", stat1Desc: "materias con práctica", stat2Title: "Rápido", stat2Desc: "bucles de revisión", stat3Title: "En vivo", stat3Desc: "barras de progreso y rachas", title: "Domina tus materias", desc: "Lecciones estructuradas para las Clases 1-12. Domina cada materia con cuestionarios.", pill1: "Ejercicios listos", pill2: "Progreso animado", pill3: "Revisiones rápidas" },
  studentsTopics: [
    { icon: "📐", title: "Matemáticas", desc: "Álgebra, geometría, trigonometría y cálculo", badge: "Clase 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Ciencia", desc: "Física, química y biología hechas visuales", badge: "Clase 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Inglés", desc: "Gramática, comprensión, escritura y literatura", badge: "Clase 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Estudios Sociales", desc: "Historia, geografía, civismo y economía", badge: "Clase 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Ciencia de la Computación", desc: "Conceptos básicos de programación, MS Office y habilidades digitales", badge: "Clase 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Prácticas de Laboratorio", desc: "Experimentos virtuales con guía paso a paso", badge: "Clase 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Redacción de Ensayos", desc: "Estructura, vocabulario y habilidades de escritura para exámenes", badge: "Clase 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Idiomas", desc: "Hindi, sánscrito, francés e idiomas regionales", badge: "Clase 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Preparación para Prelims, Mains y Entrevista con asuntos actuales", tag: "Servicios Civiles", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Preparación completa para servicios estatales de Maharashtra", tag: "Servicios Estatales", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biología, Física y Química para entrada médica", tag: "Médico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Matemáticas, Física y Química para entrada IIT/NIT", tag: "Ingeniería", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "Preparación MBBS", desc: "Conocimiento básico y clínico para estudiantes de medicina", tag: "Médico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Ingeniería", desc: "Materias básicas de ingeniería - CSE, ECE, Mecánica, Civil", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Derecho", desc: "Razonamiento legal, GK e inglés para entrada jurídica", tag: "Derecho", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Cuantitativo, verbal y DILR para admisiones en escuelas de negocios", tag: "Gestión", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Banca / IBPS", desc: "Razonamiento, matemáticas e inglés para exámenes bancarios", tag: "Banca", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Defensa", desc: "Matemáticas, GK y preparación SSB para fuerzas armadas", tag: "Defensa", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Ingeniería avanzada y ciencia para PSU / M.Tech", tag: "Postgrado", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Cuentas, impuestos y cursos profesionales de finanzas", tag: "Finanzas", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Exámenes Competitivos", title: "Supera los exámenes más difíciles", desc: "Preparación enfocada para exámenes competitivos con rutas estructuradas.", stat1Title: "12 Rutas", stat1Desc: "Múltiples caminos", stat2Title: "Simulacros", stat2Desc: "práctica bajo presión", stat3Title: "Rankings", stat3Desc: "retroalimentación clara", pill1: "Pruebas diarias", pill2: "Predicción de ranking", pill3: "Rastreadores", floatingChips: ["AIRE 184", "Objetivo 98 %ile", "Próximo Mock 07:30"] },
  scene: { today: "HOY", streak: "RACHA", days: "Días", revision: "REV", grade: "A+", score: "PUNTOS", mockClear: "Simulacro OK", hi: "Hola", air: "AIRE" }
};
export default dict;
