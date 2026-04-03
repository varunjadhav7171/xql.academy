"use client";

import Image from "next/image";
import HeroScene from "@/components/HeroScene";
import CompetitiveExamsScene from "@/components/CompetitiveExamsScene";
import KidsLearningScene from "@/components/KidsLearningScene";
import NavBar from "@/components/NavBar";
import StudentsLearningScene from "@/components/StudentsLearningScene";
import LanguageModal from "@/components/LanguageModal";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { 
  WholeWord, Calculator, Globe2, Palette, BookOpen, Mic, Puzzle, Music,
  Ruler, Microscope, Map, Monitor, TestTube, PenTool, Languages,
  Landmark, ScrollText, Pill, Settings, Stethoscope, Wrench, Scale, Briefcase, Shield, Dna, BarChart3,
  Baby, Backpack, Trophy
} from "lucide-react";
import { cardsDictionary } from "@/app/locales/cardsDictionary";

const kidsTopics = [
  { icon: <WholeWord size={28} strokeWidth={2.5} />, title: "ABC & Words", desc: "Learn alphabets, phonics and basic vocabulary", color: "#FFF8E0", border: "#FFE498" },
  { icon: <Calculator size={28} strokeWidth={2.5} />, title: "Numbers & Math", desc: "Count, add and subtract with fun visual games", color: "#E8F7FF", border: "#C9EBFF" },
  { icon: <Globe2 size={28} strokeWidth={2.5} />, title: "World Around Us", desc: "Animals, nature, planets and amazing science facts", color: "#EFFFE0", border: "#C8F09A" },
  { icon: <Palette size={28} strokeWidth={2.5} />, title: "Art & Creativity", desc: "Colors, shapes, drawing and creative expression", color: "#FFF1F7", border: "#FFD0E2" },
  { icon: <BookOpen size={28} strokeWidth={2.5} />, title: "Story Time", desc: "Interactive stories that build reading and imagination", color: "#FFF8E0", border: "#FFE498" },
  { icon: <Mic size={28} strokeWidth={2.5} />, title: "Speak & Learn", desc: "Pronounce words and build confidence speaking", color: "#E8F7FF", border: "#C9EBFF" },
  { icon: <Puzzle size={28} strokeWidth={2.5} />, title: "Puzzles & Logic", desc: "Brain teasers that sharpen thinking and problem solving", color: "#EFFFE0", border: "#C8F09A" },
  { icon: <Music size={28} strokeWidth={2.5} />, title: "Rhymes & Songs", desc: "Learn through music, rhythm and memory songs", color: "#FFF1F7", border: "#FFD0E2" },
];

const studentsTopics = [
  { icon: <Ruler size={28} strokeWidth={2.5} />, title: "Mathematics", desc: "Algebra, geometry, trigonometry and calculus", color: "#FFF8E0", border: "#FFE498", badge: "Class 6-12" },
  { icon: <Microscope size={28} strokeWidth={2.5} />, title: "Science", desc: "Physics, chemistry and biology made visual", color: "#E8F7FF", border: "#C9EBFF", badge: "Class 6-12" },
  { icon: <BookOpen size={28} strokeWidth={2.5} />, title: "English", desc: "Grammar, comprehension, writing and literature", color: "#EFFFE0", border: "#C8F09A", badge: "Class 1-12" },
  { icon: <Map size={28} strokeWidth={2.5} />, title: "Social Studies", desc: "History, geography, civics and economics", color: "#FFF1F7", border: "#FFD0E2", badge: "Class 6-10" },
  { icon: <Monitor size={28} strokeWidth={2.5} />, title: "Computer Sci.", desc: "Programming basics, MS Office and digital skills", color: "#EFFFE0", border: "#C8F09A", badge: "Class 6-12" },
  { icon: <TestTube size={28} strokeWidth={2.5} />, title: "Lab Practicals", desc: "Virtual experiments with step-by-step guidance", color: "#E8F7FF", border: "#C9EBFF", badge: "Class 9-12" },
  { icon: <PenTool size={28} strokeWidth={2.5} />, title: "Essay Writing", desc: "Structure, vocabulary and writing skills for exams", color: "#FFF8E0", border: "#FFE498", badge: "Class 8-12" },
  { icon: <Languages size={28} strokeWidth={2.5} />, title: "Languages", desc: "Hindi, Sanskrit, French and regional languages", color: "#FFF1F7", border: "#FFD0E2", badge: "Class 1-12" },
];

const examTracks = [
  { icon: <Landmark size={28} strokeWidth={2.5} />, title: "UPSC / IAS", desc: "Prelims, Mains and Interview prep with current affairs", color: "#FFF8E0", border: "#FFE498", tag: "Civil Services" },
  { icon: <ScrollText size={28} strokeWidth={2.5} />, title: "MPSC", desc: "Maharashtra state services complete preparation", color: "#E8F7FF", border: "#C9EBFF", tag: "State Services" },
  { icon: <Pill size={28} strokeWidth={2.5} />, title: "NEET", desc: "Biology, Physics and Chemistry for medical entrance", color: "#FFF1F7", border: "#FFD0E2", tag: "Medical" },
  { icon: <Settings size={28} strokeWidth={2.5} />, title: "JEE", desc: "Maths, Physics and Chemistry for IIT/NIT entrance", color: "#EFFFE0", border: "#C8F09A", tag: "Engineering" },
  { icon: <Stethoscope size={28} strokeWidth={2.5} />, title: "MBBS Prep", desc: "Foundation and clinical knowledge for medical students", color: "#FFF1F7", border: "#FFD0E2", tag: "Medical" },
  { icon: <Wrench size={28} strokeWidth={2.5} />, title: "Engineering", desc: "Core engineering subjects - CSE, ECE, Mechanical, Civil", color: "#EFFFE0", border: "#C8F09A", tag: "B.Tech / B.E." },
  { icon: <Scale size={28} strokeWidth={2.5} />, title: "CLAT / Law", desc: "Legal reasoning, GK and English for law entrance", color: "#FFF8E0", border: "#FFE498", tag: "Law" },
  { icon: <Briefcase size={28} strokeWidth={2.5} />, title: "CAT / MBA", desc: "Quant, verbal and DILR for top B-school admissions", color: "#E8F7FF", border: "#C9EBFF", tag: "Management" },
  { icon: <Landmark size={28} strokeWidth={2.5} />, title: "Banking / IBPS", desc: "Reasoning, maths and English for bank exams", color: "#FFF8E0", border: "#FFE498", tag: "Banking" },
  { icon: <Shield size={28} strokeWidth={2.5} />, title: "NDA / Defence", desc: "Maths, GK and SSB prep for armed forces", color: "#EFFFE0", border: "#C8F09A", tag: "Defence" },
  { icon: <Dna size={28} strokeWidth={2.5} />, title: "GATE", desc: "Advanced engineering and science for PSU / M.Tech", color: "#E8F7FF", border: "#C9EBFF", tag: "Postgrad" },
  { icon: <BarChart3 size={28} strokeWidth={2.5} />, title: "CA / CMA", desc: "Accounts, taxation and finance professional courses", color: "#FFF1F7", border: "#FFD0E2", tag: "Finance" },
];

export default function Home() {
  const { t, language, isReady } = useLanguage();

  if (!isReady) return null;

  const currentCards = cardsDictionary[language as keyof typeof cardsDictionary] || cardsDictionary.en;

  const localizedKidsTopics = kidsTopics.map((item, i) => ({
    ...item,
    title: currentCards.kids?.[i]?.title || item.title,
    desc: currentCards.kids?.[i]?.desc || item.desc
  }));

  const localizedStudentsTopics = studentsTopics.map((item, i) => ({
    ...item,
    title: currentCards.students?.[i]?.title || item.title,
    desc: currentCards.students?.[i]?.desc || item.desc
  }));

  const localizedExamTracks = examTracks.map((item, i) => ({
    ...item,
    title: currentCards.exams?.[i]?.title || item.title,
    desc: currentCards.exams?.[i]?.desc || item.desc
  }));

  return (
    <div className="page-shell page-shell-home" style={{ minHeight: "100vh" }}>
      <LanguageModal />

      {language !== null && (
        <>
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
              <HeroScene />
            </div>
          </div>

          <section style={{ padding: "80px 24px", background: "#fff" }}>
            <div className="kids-showcase">
              <div className="kids-copy">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#58cc02" }}><Baby size={32} strokeWidth={2.5} /></span>
                  <span
                    style={{
                      fontFamily: "'Baloo 2', sans-serif",
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
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.2rem, 3vw, 3.3rem)",
                    color: "#163300",
                    margin: 0,
                    lineHeight: 1.02,
                    maxWidth: "15ch",
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
                  {[t.hero.selectLanguage, t.kids.badge, t.kids.stat3Desc].map((item) => (
                    <span key={item} className="kids-pill">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="kids-card-grid">
                  {localizedKidsTopics.map((item, i) => (
                    <div
                      key={i}
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
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "#163300",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "#617256", lineHeight: 1.4 }}>
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
                
                <div className="kids-scene">
                  <KidsLearningScene />
                </div>

                <div className="kids-stat-row">
                  {[
                    { val: t.kids.stat1Title, lab: t.kids.stat1Desc },
                    { val: t.kids.stat2Title, lab: t.kids.stat2Desc },
                    { val: t.kids.stat3Title, lab: t.kids.stat3Desc }
                  ].map((stat, idx) => (
                    <div key={idx} className="kids-stat">
                      <strong>{stat.val}</strong>
                      <span>{stat.lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "100px 24px", background: "#f9fff2" }}>
            <div className="students-showcase">
              <div className="students-art-shell">
                <div className="students-art-copy">
                  <span className="students-art-tag">{t.students.badge}</span>
                  <h3>{t.students.artTitle}</h3>
                  <p>{t.students.artDesc}</p>
                </div>
                
                <div className="students-scene">
                  <StudentsLearningScene />
                </div>

                <div className="students-stat-row">
                  {[
                    { val: t.students.stat1Title, lab: t.students.stat1Desc },
                    { val: t.students.stat2Title, lab: t.students.stat2Desc },
                    { val: t.students.stat3Title, lab: t.students.stat3Desc }
                  ].map((stat, idx) => (
                    <div key={idx} className="students-stat">
                      <strong>{stat.val}</strong>
                      <span>{stat.lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="students-copy">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#58cc02" }}><Backpack size={32} strokeWidth={2.5} /></span>
                  <span
                    style={{
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "#58cc02",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t.students.tag}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.2rem, 3vw, 3.3rem)",
                    color: "#163300",
                    margin: 0,
                    lineHeight: 1.02,
                  }}
                >
                  {t.students.title}
                </h2>

                <p
                  style={{
                    color: "#617256",
                    fontSize: "1.05rem",
                    maxWidth: "560px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {t.students.desc}
                </p>

                <div className="students-card-grid">
                  {localizedStudentsTopics.map((item, i) => (
                    <div
                      key={i}
                      className="students-card"
                      style={{
                        background: item.color,
                        border: `2px solid ${item.border}`,
                        boxShadow: `0 8px 0 ${item.border}`,
                      }}
                    >
                      <div className="students-card-head">
                        <div className="students-card-icon">{item.icon}</div>
                        <div className="students-badge">{item.badge}</div>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "#163300",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "#617256", lineHeight: 1.4 }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: "100px 24px", background: "#fff" }}>
            <div className="exam-showcase">
              <div className="exam-copy">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#58cc02" }}><Trophy size={32} strokeWidth={2.5} /></span>
                  <span
                    style={{
                      fontFamily: "'Baloo 2', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "#58cc02",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t.exams.tag}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2.2rem, 3vw, 3.3rem)",
                    color: "#163300",
                    margin: "0",
                    lineHeight: 1.1,
                  }}
                >
                  {t.exams.title}
                </h2>
                <p style={{ color: "#617256", fontSize: "1.1rem", maxWidth: "40ch", marginBottom: "12px" }}>
                  {t.exams.desc}
                </p>

                <div className="exam-signal-row">
                  {[
                    { val: t.exams.stat1Title, lab: t.exams.stat1Desc },
                    { val: t.exams.stat2Title, lab: t.exams.stat2Desc },
                    { val: t.exams.stat3Title, lab: t.exams.stat3Desc }
                  ].map((sig, idx) => (
                    <div key={idx} className="exam-signal">
                      <strong>{sig.val}</strong>
                      <span>{sig.lab}</span>
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
                  {localizedExamTracks.map((item, i) => (
                    <div
                      key={i}
                      className="exam-card"
                      style={{
                        background: item.color,
                        border: `2px solid ${item.border}`,
                        boxShadow: `0 8px 0 ${item.border}`,
                      }}
                    >
                      <div className="exam-card-head">
                        <div className="exam-card-icon">{item.icon}</div>
                        <div className="exam-badge">{item.tag}</div>
                      </div>
                      <div
                        style={{
                          fontFamily: "'Baloo 2', sans-serif",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "#163300",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "#617256", lineHeight: 1.4 }}>
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
                  <h3>{t.exams.title}</h3>
                  <p>{t.exams.desc}</p>
                </div>
                
                <div className="exam-scene-wrap">
                  <CompetitiveExamsScene />
                  <div className="exam-floating-chip exam-chip-rank">{t.exams.pill2}</div>
                  <div className="exam-floating-chip exam-chip-target">{t.exams.pill3}</div>
                  <div className="exam-floating-chip exam-chip-mock">{t.exams.pill1}</div>
                </div>

                <div className="exam-stat-row">
                   {[
                    { val: t.exams.stat1Title, lab: t.exams.stat1Desc },
                    { val: t.exams.stat2Title, lab: t.exams.stat2Desc },
                    { val: t.exams.stat3Title, lab: t.exams.stat3Desc }
                  ].map((stat, idx) => (
                    <div key={idx} className="exam-stat">
                      <strong>{stat.val}</strong>
                      <span>{stat.lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
