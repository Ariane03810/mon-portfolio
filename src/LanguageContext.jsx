import { createContext, useContext, useState, useEffect } from "react";
import { translations, availableLanguages } from "./i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      localStorage.setItem("lang", newLang);
    }
  };

  const t = translations[lang] || translations.fr;

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}