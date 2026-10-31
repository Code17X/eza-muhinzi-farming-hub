import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationKey } from "./translations";

type I18nValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const I18nContext = createContext<I18nValue | null>(null);

function initialLanguage(): Language { return "rw"; }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(initialLanguage);
  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next);
    if (typeof window !== "undefined") window.localStorage.setItem("eza-language", next);
  }, []);
  useEffect(() => {
    const saved = window.localStorage.getItem("eza-language");
    if (saved === "en" || saved === "rw") updateLanguage(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo<I18nValue>(() => ({ language, setLanguage, t: key => translations[language][key] }), [language, setLanguage]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}
