"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../app/contexts/LanguageContext";
import { languageOptions, Language } from "../app/locales/config";

export default function LanguageModal() {
  const { language, setLanguage, isReady } = useLanguage();

  // Do not render during server side rendering or if language is already chosen
  if (!isReady || language !== null) return null;

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f6fff0 100%)",
          padding: "32px",
          borderRadius: "32px",
          textAlign: "center",
          maxWidth: "700px",
          width: "95%",
          boxShadow: "0 24px 64px rgba(0,0,0,0.15), inset 0 2px 0 #fff",
          border: "2px solid #e1f5c4",
          animation: "popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <span style={{ fontSize: "3rem", display: "inline-block", marginBottom: "16px" }}>🌍</span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            color: "#163300",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}
        >
          Choose your language
        </h2>
        <p style={{ color: "#617256", marginBottom: "32px", fontSize: "0.95rem" }}>
          Select the language you want to learn and explore in. You can always change this later!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
          maxHeight: "60vh",
          overflowY: "auto",
          padding: "4px"
        }}>
          {languageOptions.map((opt) => (
            <button
              key={opt.lang}
              onClick={() => handleSelect(opt.lang)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "12px",
                padding: "16px",
                borderRadius: "16px",
                border: "2px solid #e2f5cb",
                background: "#fff",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#163300",
                boxShadow: "0 4px 0 #e2f5cb",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 0 #b8e88a";
                e.currentTarget.style.borderColor = "#58cc02";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 0 #e2f5cb";
                e.currentTarget.style.borderColor = "#e2f5cb";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(2px)";
                e.currentTarget.style.boxShadow = "0 2px 0 #58cc02";
              }}
            >
              <Image
                src={`https://flagcdn.com/w40/${opt.code}.png`}
                alt={opt.name}
                width={30}
                height={20}
                style={{ borderRadius: "4px" }}
              />
              {opt.name}
            </button>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes popIn {
          0% { transform: scale(0.9) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
}
