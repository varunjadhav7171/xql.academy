"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionaries, Language } from "../locales/dictionaries";

type LanguageContextType = {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: typeof dictionaries.en;
  isReady: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // We no longer load the saved language on refresh
    // This ensures the selection modal shows up EVERY time the page is reloaded
    
    // Mark hydration as complete so UI can render
    setIsReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred_lang_v2", lang);
    setLanguageState(lang);
  };

  // Provide the dictionary for the selected language, fallback to English if null
  const t = language ? dictionaries[language] : dictionaries.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isReady }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
