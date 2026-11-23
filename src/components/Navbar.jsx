import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, changeLanguage, t, availableLanguages } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.about, href: "#apropos" },
    { label: t.nav.expertise, href: "#expertises" },
    { label: t.nav.projects, href: "#projets" },
    { label: t.nav.journey, href: "#parcours" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setLangOpen(false);
    if (langOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langOpen]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const currentLang = availableLanguages.find((l) => l.code === lang);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#accueil" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">A.</span>
          <span className="brand-caption">PORTFOLIO</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            {t.nav.contact} <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="navbar-actions">
          <div className="lang-selector" onClick={(e) => e.stopPropagation()}>
            <button className="theme-toggle lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <Globe size={16} />
              <span className="lang-code">{currentLang?.flag} {lang.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>

            {langOpen && (
              <div className="lang-dropdown">
                {availableLanguages.map((language) => (
                  <button
                    key={language.code}
                    className={`lang-option ${lang === language.code ? "active" : ""}`}
                    onClick={() => {
                      changeLanguage(language.code);
                      setLangOpen(false);
                    }}
                  >
                    <span>{language.flag}</span>
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}