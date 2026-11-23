import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import {
  About,
  Expertise,
  Skills,
  Projects,
  Journey,
  MoreAbout,
  Contact,
} from "./components/Sections";
import { useLanguage } from "./LanguageContext";

function App() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Journey />
        <MoreAbout />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#accueil" className="footer-logo">
            A<span>.</span>
          </a>

          <p>
            {t.footer.designed} <strong>Ariane Ngassa</strong>.
          </p>

          <a href="#accueil" className="back-to-top">
            {t.footer.backTop}
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} — {t.footer.rights}</span>
          <span>{t.footer.location}</span>
        </div>
      </footer>

      {/* Bouton GitHub fixe */}
      <a
        href="https://github.com/Ariane03810"
        target="_blank"
        rel="noopener noreferrer"
        className="github-float"
        aria-label="Voir mon GitHub"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>

      {/* Bouton WhatsApp fixe */}
      <a
        href="https://wa.me/237657254421?text=Bonjour%20Ariane%2C%20je%20viens%20de%20visiter%20ton%20portfolio%20et%20je%20souhaite%20échanger%20avec%20toi."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contacter sur WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
        >
          <path d="M16.004 0C7.174 0 0 7.176 0 16.004c0 2.824.738 5.505 2.123 7.85L.069 31.25l7.59-1.99A15.93 15.93 0 0 0 16.004 32C24.83 32 32 24.824 32 16.004 32 7.176 24.83 0 16.004 0zm0 29.248a13.2 13.2 0 0 1-6.73-1.846l-.482-.287-4.502 1.18 1.2-4.39-.314-.506a13.2 13.2 0 0 1-2.03-7.05c0-7.3 5.94-13.24 13.24-13.24 7.3 0 13.24 5.94 13.24 13.24 0 7.3-5.94 13.24-13.24 13.24zm7.27-9.92c-.398-.2-2.35-1.16-2.715-1.292-.364-.133-.63-.2-.895.2-.265.398-1.027 1.292-1.26 1.557-.232.265-.464.298-.862.1-.398-.2-1.68-.62-3.2-1.975-1.182-1.054-1.98-2.355-2.213-2.753-.232-.398-.025-.613.175-.812.18-.179.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.2-.895-2.157-1.227-2.955-.323-.775-.652-.67-.895-.683h-.764c-.265 0-.696.1-1.06.497-.364.398-1.39 1.358-1.39 3.31 0 1.953 1.423 3.84 1.622 4.105.2.265 2.8 4.275 6.78 5.995 2.51 1.085 3.495 1.18 4.75.993.76-.114 2.35-.96 2.682-1.89.332-.928.332-1.723.232-1.89-.1-.166-.364-.265-.762-.464z" />
        </svg>
      </a>
    </>
  );
}

export default App;