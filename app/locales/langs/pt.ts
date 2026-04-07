const dict = {
  nav: { appName: "Academia XQL", tagline: "Aprenda · Sequência · Ganhe", login: "ENTRAR", signup: "INSCREVER-SE" },
  hero: { title1: "Aprenda qualquer coisa.", title2: "Suba de nível diariamente.", selectLanguage: "Eu quero aprender..." },
  kids: { tag: "Para Crianças", badge: "Progresso lúdico", title: "Mundo interativo", desc: "Uma mistura de tudo que as crianças adoram explorar...", artTitle: "Histórias, sons e recompensas em um lugar feliz.", artDesc: "Uma visão dedicada e segura.", stat1Title: "5 min", stat1Desc: "sessões de jogo", stat2Title: "Diariamente", stat2Desc: "estrelas de racha", stat3Title: "Fale", stat3Desc: "ouça e repita" },
  kidsTopics: [
    { icon: "🔤", title: "ABC e Palavras", desc: "Aprenda alfabetos, fonética e vocabulário básico", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔢", title: "Números e Matemática", desc: "Conte, some e subtraia com jogos visuais divertidos", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🌍", title: "O Mundo ao Nosso Redor", desc: "Animais, natureza, planetas e fatos científicos incríveis", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎨", title: "Arte e Criatividade", desc: "Cores, formas, desenho e expressão criativa", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "📖", title: "Hora da História", desc: "Histórias interativas que constroem leitura e imaginação", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🗣️", title: "Fale e Aprenda", desc: "Pronuncie palavras e ganhe confiança para falar", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "🧩", title: "Quebra-cabeças e Lógica", desc: "Desafios mentais que aguçam o pensamento e a resolução de problemas", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🎵", title: "Rimas e Canções", desc: "Aprenda através da música, ritmo e canções de memória", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  students: { tag: "Para Estudantes", badge: "Foco total", artTitle: "Espaços ativos e modernos.", artDesc: "Uma experiência com visuais inteligentes.", stat1Title: "12", stat1Desc: "matérias com guias", stat2Title: "Rápido", stat2Desc: "ciclos de revisão", stat3Title: "Ao Vivo", stat3Desc: "barras de progresso", title: "Domine suas disciplinas", desc: "Aulas estruturadas. Domine cada assunto.", pill1: "Prática p/ Exames", pill2: "Progresso Animado", pill3: "Revisão Rápida" },
  studentsTopics: [
    { icon: "📐", title: "Matemática", desc: "Álgebra, geometria, trigonometria e cálculo", badge: "Classe 6-12", color: "#FFF8E0", border: "#FFE498" },
    { icon: "🔬", title: "Ciências", desc: "Física, química e biologia de forma visual", badge: "Classe 6-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📚", title: "Inglês", desc: "Gramática, compreensão, escrita e literatura", badge: "Classe 1-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🗺️", title: "Estudos Sociais", desc: "História, geografia, civismo e economia", badge: "Classe 6-10", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "💻", title: "Ciência da Computação", desc: "Conceitos básicos de programação, MS Office e habilidades digitais", badge: "Classe 6-12", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧪", title: "Práticas de Laboratório", desc: "Experimentos virtuais com orientação passo a passo", badge: "Classe 9-12", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📝", title: "Redação de Ensaios", desc: "Estrutura, vocabulário e habilidades de escrita para exames", badge: "Classe 8-12", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🌐", title: "Idiomas", desc: "Hindi, sânscrito, francês e línguas regionais", badge: "Classe 1-12", color: "#FFF1F7", border: "#FFD0E2" }
  ],
  examTracks: [
    { icon: "🏛️", title: "UPSC / IAS", desc: "Preparação para Prelims, Mains e entrevista com atualidades", tag: "Serviços Civis", color: "#FFF8E0", border: "#FFE498" },
    { icon: "📜", title: "MPSC", desc: "Preparação completa para serviços estaduais de Maharashtra", tag: "Serviços Estaduais", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💊", title: "NEET", desc: "Biologia, Física e Química para entrada médica", tag: "Médico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "⚙️", title: "JEE", desc: "Matemática, Física e Química para entrada IIT/NIT", tag: "Engenharia", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏥", title: "Preparação MBBS", desc: "Conhecimento básico e clínico para estudantes de medicina", tag: "Médico", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🔧", title: "Engenharia", desc: "Disciplinas de engenharia fundamentais - CSE, ECE, Mecânica, Civil", tag: "B.Tech / B.E.", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "⚖️", title: "CLAT / Direito", desc: "Raciocínio jurídico, GK e inglês para ingresso em direito", tag: "Direito", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "💼", title: "CAT / MBA", desc: "Quantitativo, verbal e DILR para escolas de negócios", tag: "Gestão", color: "#EFFFE0", border: "#C8F09A" },
    { icon: "🏦", title: "Banking / IBPS", desc: "Raciocínio, matemática e inglês para provas bancárias", tag: "Bancário", color: "#FFF1F7", border: "#FFD0E2" },
    { icon: "🛡️", title: "NDA / Defesa", desc: "Matemática, GK e preparação SSB para forças armadas", tag: "Defesa", color: "#F0F8FF", border: "#B8DAFF" },
    { icon: "🧬", title: "GATE", desc: "Engenharia avançada e ciência para PSU / M.Tech", tag: "Pós-graduação", color: "#E8F7FF", border: "#C9EBFF" },
    { icon: "📊", title: "CA / CMA", desc: "Contabilidade, tributação e cursos profissionais de finanças", tag: "Finanças", color: "#EFFFE0", border: "#C8F09A" }
  ],
  exams: { tag: "Exames Competitivos", title: "Passe nos piores exames", desc: "Preparação focada e simulados.", stat1Title: "12 Trilhas", stat1Desc: "caminhos", stat2Title: "Simulados", stat2Desc: "pressão", stat3Title: "Ranking", stat3Desc: "feedback forte", pill1: "Testes Diários", pill2: "Previsão", pill3: "Rastreio", floatingChips: ["AIR 184", "98 %ile Alvo", "Próximo Mock 07:30"] },
  scene: { today: "HOJE", streak: "SEQUÊNCIA", days: "Dias", revision: "REV", grade: "A+", score: "PONTOS", mockClear: "Simulado OK", hi: "Olá", air: "RANK" }
};
export default dict;
