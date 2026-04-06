"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionaries } from "../locales/dictionaries";
import { Language } from "../locales/config";

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
    const savedLang = window.localStorage.getItem("preferred_lang_v2") as Language | null;
    if (savedLang && Object.keys(dictionaries).includes(savedLang)) {
      setLanguageState(savedLang);
    }
    setIsReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred_lang_v2", lang);
    setLanguageState(lang);
  };

  const mergeDeep = (base: any, override: any) => {
    if (Array.isArray(base) || Array.isArray(override)) {
      return override !== undefined ? override : base;
    }
    if (base && typeof base === "object" && override && typeof override === "object") {
      return Object.keys({ ...base, ...override }).reduce((result, key) => {
        result[key] = mergeDeep(base[key], override[key]);
        return result;
      }, {} as any);
    }
    return override !== undefined ? override : base;
  };

  const t = language ? mergeDeep(dictionaries.en, dictionaries[language]) : dictionaries.en;

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
