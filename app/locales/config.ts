export const languageOptions = [
  { code: "gb", lang: "en", name: "English" },
  { code: "es", lang: "es", name: "Español" },
  { code: "fr", lang: "fr", name: "Français" },
  { code: "de", lang: "de", name: "Deutsch" },
  { code: "jp", lang: "ja", name: "日本語" },
  { code: "kr", lang: "ko", name: "한국어" },
  { code: "in", lang: "hi", name: "हिन्दी (Hindi)" },
  { code: "cn", lang: "zh", name: "中文" },
  { code: "it", lang: "it", name: "Italiano" },
  { code: "br", lang: "pt", name: "Português" },
  { code: "ru", lang: "ru", name: "Русский" },
  { code: "sa", lang: "ar", name: "العربية" },
  { code: "in", lang: "mr", name: "मराठी" },
  { code: "in", lang: "ta", name: "தமிழ்" },
  { code: "in", lang: "te", name: "తెలుగు" },
  { code: "in", lang: "bn", name: "বাংলা" },
  { code: "id", lang: "id", name: "Bahasa Indonesia" },
  { code: "tr", lang: "tr", name: "Türkçe" },
  { code: "nl", lang: "nl", name: "Nederlands" },
  { code: "pl", lang: "pl", name: "Polski" },
] as const;

export type Language = typeof languageOptions[number]["lang"];
