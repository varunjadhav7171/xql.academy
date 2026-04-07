"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../app/contexts/LanguageContext";
import { languageOptions, Language } from "../app/locales/config";

export default function LanguageModal() {
  const { setLanguage } = useLanguage();
  const [selected, setSelected] = useState<Language | null>(null);

  const handleSelect = (lang: Language) => {
    if (selected) return;
    setSelected(lang);
    setTimeout(() => setLanguage(lang), 420);
  };

  return (
    <div style={{
      width: "100%",
      maxWidth: "480px",
      background: "linear-gradient(160deg,#f6fff0 0%,#ffffff 60%,#f0faff 100%)",
      border: "2px solid #e2f5cb",
      borderRadius: "28px",
      padding: "24px 20px 28px",
      boxShadow: "0 16px 48px rgba(88,204,2,0.10), 0 6px 0 #e2f5cb",
      animation: "langCardIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards",
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes langCardIn {
          0%  { opacity:0; transform:translateY(18px) scale(0.96); }
          100%{ opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes langCardOut {
          0%  { opacity:1; transform:scale(1); }
          100%{ opacity:0; transform:scale(0.94); }
        }
        @keyframes flagPop {
          0%  { opacity:0; transform:translateY(8px) scale(0.9); }
          100%{ opacity:1; transform:translateY(0) scale(1); }
        }
        .lang-btn {
          display:flex; align-items:center; gap:10px;
          padding:10px 13px; border-radius:14px;
          border:2px solid #e2f5cb; background:#fff;
          cursor:pointer; font-weight:700; font-size:0.88rem;
          color:#163300; box-shadow:0 3px 0 #e2f5cb;
          transition:transform 0.12s, box-shadow 0.12s, border-color 0.12s, background 0.12s;
          font-family:'Baloo 2',sans-serif; width:100%;
        }
        .lang-btn:hover {
          transform:translateY(-2px); box-shadow:0 6px 0 #b8e88a;
          border-color:#58cc02; background:#f6fff0;
        }
        .lang-btn:active { transform:translateY(1px); box-shadow:0 1px 0 #58cc02; }
        .lang-btn.picked {
          border-color:#58cc02; background:#edffd6;
          box-shadow:0 3px 0 #58cc02; transform:scale(1.04);
        }
      `}} />

      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
          <span style={{ fontSize:"1.6rem", lineHeight:1 }}>🌍</span>
          <h2 style={{ fontFamily:"'Baloo 2',sans-serif", fontWeight:900, fontSize:"1.2rem", color:"#163300", margin:0 }}>
            Pick your language
          </h2>
        </div>
        <p style={{ color:"#617256", fontSize:"0.83rem", margin:0, lineHeight:1.5, fontFamily:"'Baloo 2',sans-serif" }}>
          Your XQL Academy experience will be in this language.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(2, minmax(0,1fr))",
        gap:"8px",
        maxHeight:"360px",
        overflowY:"auto",
        paddingRight:"2px",
      }}>
        {languageOptions.map((opt, i) => (
          <button
            key={opt.lang}
            className={`lang-btn${selected === opt.lang ? " picked" : ""}`}
            onClick={() => handleSelect(opt.lang)}
            style={{ animation:`flagPop 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 0.025}s both` }}
          >
            <Image
              src={`https://flagcdn.com/w40/${opt.code}.png`}
              alt={opt.name}
              width={26} height={18}
              style={{ borderRadius:"3px", flexShrink:0 }}
            />
            <span style={{ flex:1 }}>{opt.name}</span>
            {selected === opt.lang && <span style={{ color:"#58cc02" }}>✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
