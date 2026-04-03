"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useState } from "react";
import { useLanguage } from "../app/contexts/LanguageContext";
import { Language, languageOptions } from "../app/locales/config";

function NavBar() {
  const { t, language, setLanguage, isReady } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // If we don't have a configured language or it's not ready, don't show the switcher yet
  const showSwitcher = isReady && language !== null;

  const currentFlag = languageOptions.find((opt) => opt.lang === language)?.code || "gb";

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <div className="navbar-logo-icon">XQL</div>
        <div>
          <div className="navbar-logo-name">{t?.nav?.appName || "XQL Academy"}</div>
          <div className="navbar-logo-tagline">{t?.nav?.tagline || "Learn · Streak · Win"}</div>
        </div>
      </Link>

      {/* Actions */}
      <div className="navbar-actions" style={{ position: "relative" }}>
        {showSwitcher && (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                borderRadius: "12px",
                border: "2px solid #e5e5e5",
                background: "#fff",
                cursor: "pointer",
                fontWeight: 700,
                color: "#4b4b4b",
                transition: "border-color 0.15s",
                boxShadow: "0 2px 0 #e5e5e5",
              }}
            >
              <Image src={`https://flagcdn.com/w20/${currentFlag}.png`} alt="lang" width={20} height={14} style={{ borderRadius: "2px" }}/>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase" }}>{language}</span>
            </button>
            
            {dropdownOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "#fff",
                border: "2px solid #e2f5cb",
                borderRadius: "16px",
                padding: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                maxHeight: "60vh",
                overflowY: "auto",
                zIndex: 100
              }}>
                {languageOptions.map((opt) => (
                  <button
                    key={opt.lang}
                    onClick={() => { setLanguage(opt.lang); setDropdownOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      padding: "8px 16px", borderRadius: "8px",
                      background: language === opt.lang ? "#f6fff0" : "transparent",
                      border: "none", cursor: "pointer", textAlign: "left",
                      fontWeight: language === opt.lang ? 800 : 600,
                      color: "#163300"
                    }}
                  >
                    <Image src={`https://flagcdn.com/w20/${opt.code}.png`} alt={opt.lang} width={20} height={14} style={{ borderRadius: "2px" }}/>
                    {opt.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <Link href="/auth" className="navbar-btn-login">{t?.nav?.login || "LOG IN"}</Link>
        <Link href="/auth" className="navbar-btn-signup">{t?.nav?.signup || "SIGN UP"}</Link>
      </div>
    </nav>
  );
}

export default memo(NavBar);
