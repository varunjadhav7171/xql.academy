"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language } from "../locales/config";
import enDict from "../locales/langs/en";

type Dict = typeof enDict;

type LanguageContextType = {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: Dict;
  isReady: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const langLoaders: Record<string, () => Promise<{ default: any }>> = {
  en: () => import("../locales/langs/en"),
  es: () => import("../locales/langs/es"),
  fr: () => import("../locales/langs/fr"),
  de: () => import("../locales/langs/de"),
  ja: () => import("../locales/langs/ja"),
  ko: () => import("../locales/langs/ko"),
  hi: () => import("../locales/langs/hi"),
  zh: () => import("../locales/langs/zh"),
  it: () => import("../locales/langs/it"),
  pt: () => import("../locales/langs/pt"),
  ru: () => import("../locales/langs/ru"),
  ar: () => import("../locales/langs/ar"),
  mr: () => import("../locales/langs/mr"),
  ta: () => import("../locales/langs/ta"),
  te: () => import("../locales/langs/te"),
  bn: () => import("../locales/langs/bn"),
  id: () => import("../locales/langs/id"),
  tr: () => import("../locales/langs/tr"),
  nl: () => import("../locales/langs/nl"),
  pl: () => import("../locales/langs/pl"),
};

const mergeDeep = (base: any, override: any): any => {
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [t, setT] = useState<Dict>(enDict);

  useEffect(() => {
    // Always start with no language so picker shows on every page open
    setLanguageState(null);
    setIsReady(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (langLoaders[lang]) {
      langLoaders[lang]().then((mod) => {
        setT(mergeDeep(enDict, mod.default));
      });
    }
  };

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
