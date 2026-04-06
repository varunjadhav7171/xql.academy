"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../app/contexts/LanguageContext";
import { languageOptions, Language } from "../app/locales/config";

export default function LanguageModal() {
  const { language, setLanguage, isReady } = useLanguage();
  const [selected, setSelected] = useState<Language | null>(null);
  const [hiding, setHiding] = useState(false);

  if (!isReady || language !== null) return null;

  const handleSelect = (lang: Language) => {
    setSelected(lang);
    setHiding(true);
    setTimeout(() => {
      setLanguage(lang);
    }, 500);
  };

  return (
    <div
      style={{
        width: "100%",
        background: "linear-gradient(160deg, #f6fff0 0%, #ffffff 60%, #f0faff 100%)",
        padding: "64px 32px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: hiding ? "slideUpFade 0.5s cubic-bezier(0.4,0,0.2,1) forwards" : "slideDownIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideDownIn {
          0%  { opacity: 0; transform: translateY(-24px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpFade {
          0%  { opacity: 1; transform: translateY(0);    max-height: 1000px; }
          100%{ opacity: 0; transform: translateY(-32px); max-height: 0; padding: 0; }
        }
        @keyframes flagPop {
          0%  { opacity: 0; transform: translateY(16px) scale(0.9); }
          100%{ opacity: 1; transform: translateY(0)    scale(1);   }
        }
        .lang-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 16px;
          border: 2px solid #e2f5cb;
          background: #fff;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.95rem;
          color: #163300;
          box-shadow: 0 4px 0 #e2f5cb;
          transition: transform 0.12s, box-shadow 0.12s, border-color 0.12s, background 0.12s;
          font-family: 'Baloo 2', sans-serif;
          text-align: left;
        }
        .lang-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 0 #b8e88a;
          border-color: #58cc02;
          background: #f6fff0;
        }
        .lang-card:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0 #58cc02;
        }
        .lang-card.lang-selected {
          border-color: #58cc02;
          background: #edffd6;
          box-shadow: 0 4px 0 #58cc02;
          transform: scale(1.04);
        }
      `}} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ fontSize: "3.2rem", marginBottom: "12px", lineHeight: 1 }}>🌍</div>
        <h1
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#163300",
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}
        >
          Welcome to{" "}
          <span style={{ color: "#58cc02" }}>XQL Academy</span>
        </h1>
        <p
          style={{
            color: "#617256",
            fontSize: "1.05rem",
            margin: 0,
            maxWidth: "480px",
            lineHeight: 1.6,
            fontFamily: "'Baloo 2', sans-serif",
          }}
        >
          Choose your language to get started. Your entire experience will be in that language.
        </p>
      </div>

      {/* Badge row */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "36px", flexWrap: "wrap", justifyContent: "center" }}>
        {["20 Languages", "Full Translation", "Change Anytime"].map((badge) => (
          <span
            key={badge}
            style={{
              background: "#fff",
              border: "2px solid #e2f5cb",
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#58cc02",
              fontFamily: "'Baloo 2', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            ✓ {badge}
          </span>
        ))}
      </div>

      {/* Language grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
          gap: "12px",
          width: "100%",
          maxWidth: "860px",
        }}
      >
        {languageOptions.map((opt, i) => (
          <button
            key={opt.lang}
            className={`lang-card${selected === opt.lang ? " lang-selected" : ""}`}
            onClick={() => handleSelect(opt.lang)}
            style={{ animationDelay: `${i * 0.03}s`, animation: "flagPop 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <Image
              src={`https://flagcdn.com/w40/${opt.code}.png`}
              alt={opt.name}
              width={30}
              height={20}
              style={{ borderRadius: "4px", flexShrink: 0 }}
            />
            {opt.name}
            {selected === opt.lang && (
              <span style={{ marginLeft: "auto", fontSize: "1.1rem" }}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
