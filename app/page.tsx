"use client";

import { useLanguage } from "./contexts/LanguageContext";
import HeroScene from "@/components/HeroScene";
import CompetitiveExamsScene from "@/components/CompetitiveExamsScene";
import KidsLearningScene from "@/components/KidsLearningScene";
import NavBar from "@/components/NavBar";
import StudentsLearningScene from "@/components/StudentsLearningScene";
import LanguageModal from "@/components/LanguageModal";




export default function Home() {
  const { t, language, isReady } = useLanguage();

  // Wait until localStorage is read before deciding what to show
  if (!isReady) return null;

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
            {t.hero.title1}
            <br />
            <span style={{ color: "#58cc02" }}>{t.hero.title2}</span>
          </h1>

        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          {language ? <HeroScene /> : <LanguageModal />}
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
                {t.kids.tag}
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
              {t.kids.title}
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
              {t.kids.desc}
            </p>

            <div className="kids-pill-row">
              {[t.kids.pill1, t.kids.pill2, t.kids.pill3].map((item) => (
                <span key={item} className="kids-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="kids-card-grid">
              {t.kidsTopics.map((item) => (
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
              <span className="kids-art-tag">{t.kids.badge}</span>
              <h3>{t.kids.artTitle}</h3>
              <p>{t.kids.artDesc}</p>
            </div>

            <KidsLearningScene />

            <div className="kids-stat-row">
              <div className="kids-stat">
                <strong>{t.kids.stat1Title}</strong>
                <span>{t.kids.stat1Desc}</span>
              </div>
              <div className="kids-stat">
                <strong>{t.kids.stat2Title}</strong>
                <span>{t.kids.stat2Desc}</span>
              </div>
              <div className="kids-stat">
                <strong>{t.kids.stat3Title}</strong>
                <span>{t.kids.stat3Desc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 64px", background: "#f8fff0" }}>
        <div className="students-showcase">
          <div className="students-art-shell">
            <div className="students-art-copy">
              <span className="students-art-tag">{t.students.badge}</span>
              <h3>{t.students.artTitle}</h3>
              <p>{t.students.artDesc}</p>
            </div>

            <StudentsLearningScene />

            <div className="students-stat-row">
              <div className="students-stat">
                <strong>{t.students.stat1Title}</strong>
                <span>{t.students.stat1Desc}</span>
              </div>
              <div className="students-stat">
                <strong>{t.students.stat2Title}</strong>
                <span>{t.students.stat2Desc}</span>
              </div>
              <div className="students-stat">
                <strong>{t.students.stat3Title}</strong>
                <span>{t.students.stat3Desc}</span>
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
                {t.students.tag}
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
              {t.students.title}
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
              {t.students.desc}
            </p>

            <div className="students-pill-row">
              {[t.students.pill1, t.students.pill2, t.students.pill3].map((item) => (
                <span key={item} className="students-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="students-card-grid">
              {t.studentsTopics.map((item) => (
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
                {t.exams.tag}
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
              {t.exams.title}
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
              {t.exams.desc}
            </p>

            <div className="exam-signal-row">
              {[
                { value: t.exams.stat1Title, label: t.exams.stat1Desc },
                { value: t.exams.stat2Title, label: t.exams.stat2Desc },
                { value: t.exams.stat3Title, label: t.exams.stat3Desc },
              ].map((item) => (
                <div key={item.value} className="exam-signal">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="exam-pill-row">
              {[t.exams.pill1, t.exams.pill2, t.exams.pill3].map((item) => (
                <span key={item} className="exam-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="exam-card-grid">
              {t.examTracks.map((item) => (
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
              <span className="exam-art-tag">{t.exams.tag}</span>
              <h3>{t.exams.artTitle || t.exams.desc}</h3>
              <p>{t.exams.artDesc || t.exams.desc}</p>
            </div>

            <div className="exam-scene-wrap">
              <div className="exam-floating-chip exam-chip-rank">{t.exams.floatingChips[0]}</div>
              <div className="exam-floating-chip exam-chip-target">{t.exams.floatingChips[1]}</div>
              <div className="exam-floating-chip exam-chip-mock">{t.exams.floatingChips[2]}</div>
              <CompetitiveExamsScene />
            </div>

            <div className="exam-stat-row">
              <div className="exam-stat">
                <strong>{t.exams.stat1Title}</strong>
                <span>{t.exams.stat1Desc}</span>
              </div>
              <div className="exam-stat">
                <strong>{t.exams.stat2Title}</strong>
                <span>{t.exams.stat2Desc}</span>
              </div>
              <div className="exam-stat">
                <strong>{t.exams.stat3Title}</strong>
                <span>{t.exams.stat3Desc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
