const dict = {
  nav: { appName: "Академия XQL", tagline: "Учись · Серия · Побеждай", login: "ВОЙТИ", signup: "РЕГИСТРАЦИЯ" },
  hero: { title1: "Изучай всё что угодно.", title2: "Повышай уровень каждый день.", selectLanguage: "Я хочу изучать..." },
  kids: { tag: "Для Детей", badge: "Игровой прогресс", title: "Интерактивный мир", desc: "Смесь всего, что любят дети...", artTitle: "Истории, звуки и награды в одном счастливом месте.", artDesc: "Безопасное и красочное пространство.", stat1Title: "5 мин", stat1Desc: "короткие сессии", stat2Title: "Ежедневно", stat2Desc: "звезды серии", stat3Title: "Говори", stat3Desc: "слушай и повторяй" },
  kidsTopics: [
    { icon: "🔤", title: "ABC и слова", desc: "Изучайте алфавит, фонетику и базовый словарный запас", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Числа и математика", desc: "Считайте, складывайте и вычитайте с помощью визуальных игр", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "Мир вокруг нас", desc: "Животные, природа, планеты и удивительные научные факты", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Искусство и творчество", desc: "Цвета, формы, рисование и творческое выражение", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Время сказки", desc: "Интерактивные истории для чтения и воображения", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Говори и учись", desc: "Произносите слова и приобретайте уверенность в речи", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Головоломки и логика", desc: "Ментальные задачи, развивающие мышление и решение проблем", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Стихи и песни", desc: "Учитесь через музыку, ритм и запоминающиеся песни", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Для Студентов", badge: "Сфокусированный импульс", artTitle: "Активные и современные учебные пространства.", artDesc: "Четкий опыт с умной визуализацией.", stat1Title: "12", stat1Desc: "предметов с руководством", stat2Title: "Быстро", stat2Desc: "циклы повторения", stat3Title: "В реальном времени", stat3Desc: "прогресс-бары", title: "Улучши оценки", desc: "Структурированные уроки для 1-12 классов.", pill1: "Экзаменационные тесты", pill2: "Живой прогресс", pill3: "Быстрое повторение" },
  studentsTopics: [
    { icon: "📐", title: "Математика", desc: "Алгебра, геометрия, тригонометрия и анализ", badge: "Классы 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Наука", desc: "Физика, химия и биология в визуальном формате", badge: "Классы 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Английский", desc: "Грамматика, чтение, письмо и литература", badge: "Классы 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Обществознание", desc: "История, география, граждановедение и экономика", badge: "Классы 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Информатика", desc: "Основы программирования, MS Office и цифровые навыки", badge: "Классы 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Лабораторные", desc: "Виртуальные эксперименты с пошаговым руководством", badge: "Классы 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Написание эссе", desc: "Структура, словарный запас и навыки письма для экзаменов", badge: "Классы 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Языки", desc: "Хинди, санскрит, французский и региональные языки", badge: "Классы 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Подготовка к Prelims, Mains и интервью с текущими событиями", tag: "Госслужба", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Полная подготовка к госслужбам Махараштры", tag: "Госслужбы штата", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Биология, физика и химия для медицинского вступления", tag: "Медицина", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Математика, физика и химия для IIT/NIT", tag: "Инженерия", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "Подготовка MBBS", desc: "Основы и клинические знания для студентов-медиков", tag: "Медицина", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Инженерия", desc: "Основные инженерные дисциплины — CSE, ECE, механика, гражданское", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Право", desc: "Юридическое мышление, GK и английский для права", tag: "Право", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Количественное, вербальное и DILR для бизнес-школ", tag: "Менеджмент", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Банки / IBPS", desc: "Логика, математика и английский для банковских экзаменов", tag: "Банки", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Оборона", desc: "Математика, GK и SSB для силовых структур", tag: "Оборона", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Продвинутая инженерия и наука для PSU / M.Tech", tag: "Постград", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Бухучет, налоги и финансы", tag: "Финансы", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Сложные экзамены", title: "Сдай самые трудные тесты", desc: "Подготовка к сложнейшим экзаменам с тестами.", stat1Title: "12 Путей", stat1Desc: "разные курсы", stat2Title: "Тесты", stat2Desc: "практика под давлением", stat3Title: "Рейтинги", stat3Desc: "четкая обратная связь", pill1: "Ежедневные тесты", pill2: "Прогноз рейтинга", pill3: "Прогресс по темам", floatingChips: ["AIR 184", "98 %ile Цель", "Следующий Mock 07:30"] },
  scene: { today: "СЕГОДНЯ", streak: "СЕРИЯ", days: "Дней", revision: "ПОВ", grade: "A+", score: "БАЛЛ", mockClear: "Тест пройден", hi: "Привет", air: "РАНГ" }
};
export default dict;
