"use client";

import Image from "next/image";
import HeroScene from "@/components/HeroScene";
import CompetitiveExamsScene from "@/components/CompetitiveExamsScene";
import KidsLearningScene from "@/components/KidsLearningScene";
import NavBar from "@/components/NavBar";
import StudentsLearningScene from "@/components/StudentsLearningScene";

const kidsTopics = [
  {
    icon: "🔤",
    title: "ABC & Words",
    desc: "Learn alphabets, phonics and basic vocabulary",
    color: "#FFF8E0",
    border: "#FFE498",
  },
  {
    icon: "🔢",
    title: "Numbers & Math",
    desc: "Count, add and subtract with fun visual games",
    color: "#E8F7FF",
    border: "#C9EBFF",
  },
  {
    icon: "🌍",
    title: "World Around Us",
    desc: "Animals, nature, planets and amazing science facts",
    color: "#EFFFE0",
    border: "#C8F09A",
  },
  {
    icon: "🎨",
    title: "Art & Creativity",
    desc: "Colors, shapes, drawing and creative expression",
    color: "#FFF1F7",
    border: "#FFD0E2",
  },
  {
    icon: "📖",
    title: "Story Time",
    desc: "Interactive stories that build reading and imagination",
    color: "#FFF8E0",
    border: "#FFE498",
  },
  {
    icon: "🗣️",
    title: "Speak & Learn",
    desc: "Pronounce words and build confidence speaking",
    color: "#E8F7FF",
    border: "#C9EBFF",
  },
  {
    icon: "🧩",
    title: "Puzzles & Logic",
    desc: "Brain teasers that sharpen thinking and problem solving",
    color: "#EFFFE0",
    border: "#C8F09A",
  },
  {
    icon: "🎵",
    title: "Rhymes & Songs",
    desc: "Learn through music, rhythm and memory songs",
    color: "#FFF1F7",
    border: "#FFD0E2",
  },
];

const studentsTopics = [
  {
    icon: "📐",
    title: "Mathematics",
    desc: "Algebra, geometry, trigonometry and calculus",
    color: "#FFF8E0",
    border: "#FFE498",
    badge: "Class 6-12",
  },
  {
    icon: "🔬",
    title: "Science",
    desc: "Physics, chemistry and biology made visual",
    color: "#E8F7FF",
    border: "#C9EBFF",
    badge: "Class 6-12",
  },
  {
    icon: "📚",
    title: "English",
    desc: "Grammar, comprehension, writing and literature",
    color: "#EFFFE0",
    border: "#C8F09A",
    badge: "Class 1-12",
  },
  {
    icon: "🗺️",
    title: "Social Studies",
    desc: "History, geography, civics and economics",
    color: "#FFF1F7",
    border: "#FFD0E2",
    badge: "Class 6-10",
  },
  {
    icon: "💻",
    title: "Computer Sci.",
    desc: "Programming basics, MS Office and digital skills",
    color: "#EFFFE0",
    border: "#C8F09A",
    badge: "Class 6-12",
  },
  {
    icon: "🧪",
    title: "Lab Practicals",
    desc: "Virtual experiments with step-by-step guidance",
    color: "#E8F7FF",
    border: "#C9EBFF",
    badge: "Class 9-12",
  },
  {
    icon: "📝",
    title: "Essay Writing",
    desc: "Structure, vocabulary and writing skills for exams",
    color: "#FFF8E0",
    border: "#FFE498",
    badge: "Class 8-12",
  },
  {
    icon: "🌐",
    title: "Languages",
    desc: "Hindi, Sanskrit, French and regional languages",
    color: "#FFF1F7",
    border: "#FFD0E2",
    badge: "Class 1-12",
  },
];

const examTracks = [
  {
    icon: "🏛️",
    title: "UPSC / IAS",
    desc: "Prelims, Mains and Interview prep with current affairs",
    color: "#FFF8E0",
    border: "#FFE498",
    tag: "Civil Services",
  },
  {
    icon: "📜",
    title: "MPSC",
    desc: "Maharashtra state services complete preparation",
    color: "#E8F7FF",
    border: "#C9EBFF",
    tag: "State Services",
  },
  {
    icon: "💊",
    title: "NEET",
    desc: "Biology, Physics and Chemistry for medical entrance",
    color: "#FFF1F7",
    border: "#FFD0E2",
    tag: "Medical",
  },
  {
    icon: "⚙️",
    title: "JEE",
    desc: "Maths, Physics and Chemistry for IIT/NIT entrance",
    color: "#EFFFE0",
    border: "#C8F09A",
    tag: "Engineering",
  },
  {
    icon: "🏥",
    title: "MBBS Prep",
    desc: "Foundation and clinical knowledge for medical students",
    color: "#FFF1F7",
    border: "#FFD0E2",
    tag: "Medical",
  },
  {
    icon: "🔧",
    title: "Engineering",
    desc: "Core engineering subjects - CSE, ECE, Mechanical, Civil",
    color: "#EFFFE0",
    border: "#C8F09A",
    tag: "B.Tech / B.E.",
  },
  {
    icon: "⚖️",
    title: "CLAT / Law",
    desc: "Legal reasoning, GK and English for law entrance",
    color: "#FFF8E0",
    border: "#FFE498",
    tag: "Law",
  },
  {
    icon: "💼",
    title: "CAT / MBA",
    desc: "Quant, verbal and DILR for top B-school admissions",
    color: "#E8F7FF",
    border: "#C9EBFF",
    tag: "Management",
  },
  {
    icon: "🏦",
    title: "Banking / IBPS",
    desc: "Reasoning, maths and English for bank exams",
    color: "#FFF8E0",
    border: "#FFE498",
    tag: "Banking",
  },
  {
    icon: "🛡️",
    title: "NDA / Defence",
    desc: "Maths, GK and SSB prep for armed forces",
    color: "#EFFFE0",
    border: "#C8F09A",
    tag: "Defence",
  },
  {
    icon: "🧬",
    title: "GATE",
    desc: "Advanced engineering and science for PSU / M.Tech",
    color: "#E8F7FF",
    border: "#C9EBFF",
    tag: "Postgrad",
  },
  {
    icon: "📊",
    title: "CA / CMA",
    desc: "Accounts, taxation and finance professional courses",
    color: "#FFF1F7",
    border: "#FFD0E2",
    tag: "Finance",
  },
];

export default function Home() {
  return (
    <div className="page-shell page-shell-home" style={{ minHeight: "100vh" }}>
      <NavBar />

      <div className="landing-hero">
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: "clamp(2.8rem, 4.5vw, 4.8rem)",
              fontWeight: 900,
              color: "#163300",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            Learn anything.
            <br />
            <span style={{ color: "#58cc02" }}>Level up daily.</span>
          </h1>

          <div>
            <p
              style={{
                fontWeight: 800,
                fontSize: "0.88rem",
                color: "#617256",
                marginBottom: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              I want to learn...
            </p>
            <div className="lang-grid">
              {[
                { code: "gb", name: "English" },
                { code: "es", name: "Spanish" },
                { code: "fr", name: "French" },
                { code: "de", name: "German" },
                { code: "jp", name: "Japanese" },
                { code: "kr", name: "Korean" },
                { code: "in", name: "Hindi" },
                { code: "cn", name: "Chinese" },
                { code: "it", name: "Italian" },
                { code: "br", name: "Portuguese" },
                { code: "ru", name: "Russian" },
                { code: "sa", name: "Arabic" },
                { code: "in", name: "Marathi" },
                { code: "in", name: "Tamil" },
                { code: "in", name: "Telugu" },
                { code: "in", name: "Bengali" },
                { code: "id", name: "Indonesian" },
                { code: "tr", name: "Turkish" },
                { code: "nl", name: "Dutch" },
                { code: "pl", name: "Polish" },
              ].map((lang) => (
                <button key={lang.name} className="lang-btn">
                  <Image
                    src={`https://flagcdn.com/w40/${lang.code}.png`}
                    alt={lang.name}
                    width={30}
                    height={20}
                    className="lang-flag"
                    loading="lazy"
                  />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <HeroScene />
        </div>
      </div>

      <section style={{ padding: "80px 64px", background: "#fff" }}>
        <div className="kids-showcase">
          <div className="kids-copy">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>🧒</span>
              <span
                style={{
                  fontFamily: "'Baloo 2',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  color: "#58cc02",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                For Kids
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem,3vw,3.3rem)",
                color: "#163300",
                margin: 0,
                lineHeight: 1.02,
                maxWidth: "10ch",
              }}
            >
              Learning that feels like play
            </h2>

            <p
              style={{
                color: "#617256",
                fontSize: "1rem",
                maxWidth: "560px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Fun, colorful lessons designed for young minds. Build habits early with streaks,
              rewards, and bite-sized challenges.
            </p>

            <div className="kids-pill-row">
              {["Daily streak stars", "Tiny challenge rounds", "Friendly voice practice"].map((item) => (
                <span key={item} className="kids-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="kids-card-grid">
              {kidsTopics.map((item) => (
                <div
                  key={item.title}
                  className="kids-card"
                  style={{
                    background: item.color,
                    border: `2px solid ${item.border}`,
                    boxShadow: `0 8px 0 ${item.border}`,
                  }}
                >
                  <div className="kids-card-icon">{item.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Baloo 2',sans-serif",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: "#163300",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.86rem", color: "#617256", lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="kids-art-shell">
            <div className="kids-art-copy">
              <span className="kids-art-tag">Playful progress</span>
              <h3>Stories, sounds, rewards, and bright little wins in one happy space.</h3>
              <p>
                A dedicated kids view that feels safe, colorful, and exciting from the first tap.
              </p>
            </div>

            <KidsLearningScene />

            <div className="kids-stat-row">
              <div className="kids-stat">
                <strong>5 min</strong>
                <span>bite-size play sessions</span>
              </div>
              <div className="kids-stat">
                <strong>Daily</strong>
                <span>streak stars and rewards</span>
              </div>
              <div className="kids-stat">
                <strong>Speak</strong>
                <span>listen, repeat, and smile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 64px", background: "#f8fff0" }}>
        <div className="students-showcase">
          <div className="students-art-shell">
            <div className="students-art-copy">
              <span className="students-art-tag">Focused momentum</span>
              <h3>Study spaces that feel active, modern, and built for visible progress.</h3>
              <p>
                A sharper student experience with smart visuals, revision energy, and animated
                feedback that keeps learning moving.
              </p>
            </div>

            <StudentsLearningScene />

            <div className="students-stat-row">
              <div className="students-stat">
                <strong>12</strong>
                <span>subject tracks with guided practice</span>
              </div>
              <div className="students-stat">
                <strong>Quick</strong>
                <span>revision loops before exams</span>
              </div>
              <div className="students-stat">
                <strong>Live</strong>
                <span>progress bars, goals, and streaks</span>
              </div>
            </div>
          </div>

          <div className="students-copy">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>🎒</span>
              <span
                style={{
                  fontFamily: "'Baloo 2',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  color: "#0f7cc4",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                For Students
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem,3vw,3.3rem)",
                color: "#163300",
                margin: 0,
                lineHeight: 1.02,
                maxWidth: "11ch",
              }}
            >
              Ace your school subjects
            </h2>

            <p
              style={{
                color: "#617256",
                fontSize: "1rem",
                maxWidth: "560px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Structured lessons for Class 1-12. Master every subject with quizzes, explanations,
              progress tracking, and revision flows that feel motivating instead of heavy.
            </p>

            <div className="students-pill-row">
              {["Exam-ready drills", "Animated progress", "Fast revision wins"].map((item) => (
                <span key={item} className="students-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="students-card-grid">
              {studentsTopics.map((item) => (
                <div
                  key={item.title}
                  className="students-card"
                  style={{
                    background: item.color,
                    border: `2px solid ${item.border}`,
                    boxShadow: `0 8px 0 ${item.border}`,
                  }}
                >
                  <div className="students-card-head">
                    <span className="students-card-icon">{item.icon}</span>
                    <span className="students-badge">{item.badge}</span>
                  </div>

                  <div
                    style={{
                      fontFamily: "'Baloo 2',sans-serif",
                      fontWeight: 800,
                      fontSize: "1.02rem",
                      color: "#163300",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "#617256", lineHeight: 1.55 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 64px", background: "#fff" }}>
        <div className="exam-showcase">
          <div className="exam-copy">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>🏆</span>
              <span
                style={{
                  fontFamily: "'Baloo 2',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  color: "#b85a00",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Higher Level & Competitive Exams
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Baloo 2',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem,3vw,3.3rem)",
                color: "#163300",
                margin: 0,
                lineHeight: 1.02,
                maxWidth: "11ch",
              }}
            >
              Crack the toughest exams
            </h2>

            <p
              style={{
                color: "#617256",
                fontSize: "1rem",
                maxWidth: "560px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Focused prep for India&apos;s most competitive exams with structured paths, mock
              tests, revision cycles, and expert content that feels high-energy and goal driven.
            </p>

            <div className="exam-signal-row">
              {[
                { value: "12 Tracks", label: "UPSC to CA paths" },
                { value: "Timed Mocks", label: "real pressure practice" },
                { value: "Rank Lifts", label: "clear performance feedback" },
              ].map((item) => (
                <div key={item.value} className="exam-signal">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="exam-pill-row">
              {["Mock test energy", "Rank-focused revision", "Serious prep, clear progress"].map((item) => (
                <span key={item} className="exam-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="exam-card-grid">
              {examTracks.map((item, index) => (
                <div
                  key={item.title}
                  className="exam-card"
                  style={{
                    background: item.color,
                    border: `2px solid ${item.border}`,
                    boxShadow: `0 8px 0 ${item.border}`,
                  }}
                >
                  <div className="exam-card-head">
                    <span className="exam-card-icon">{item.icon}</span>
                    <span className="exam-badge">{item.tag}</span>
                  </div>

                  <div
                    style={{
                      fontFamily: "'Baloo 2',sans-serif",
                      fontWeight: 800,
                      fontSize: "1.02rem",
                      color: "#163300",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "#617256", lineHeight: 1.55 }}>
                    {item.desc}
                  </div>
                  <div className="exam-card-shine" />
                </div>
              ))}
            </div>
          </div>

          <div className="exam-art-shell">
            <div className="exam-art-copy">
              <span className="exam-art-tag">Peak performance</span>
              <h3>Mock tests, rank lifts, and milestone wins in a focused prep arena.</h3>
              <p>
                Designed to feel like a mission board for ambitious learners pushing toward big
                targets.
              </p>
            </div>

            <div className="exam-scene-wrap">
              <div className="exam-floating-chip exam-chip-rank">AIR 184</div>
              <div className="exam-floating-chip exam-chip-target">98 %ile Target</div>
              <div className="exam-floating-chip exam-chip-mock">Next Mock 07:30</div>
              <CompetitiveExamsScene />
            </div>

            <div className="exam-stat-row">
              <div className="exam-stat">
                <strong>All India</strong>
                <span>leaderboards and score movement</span>
              </div>
              <div className="exam-stat">
                <strong>Timed</strong>
                <span>mock tests and focused revision laps</span>
              </div>
              <div className="exam-stat">
                <strong>Smart</strong>
                <span>priority drills for weak areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
