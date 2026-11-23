import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Download,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="accueil">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-availability">
            <span className="availability-dot"></span>
            <span>{t.hero.welcome}</span>
          </div>

          <p className="hero-eyebrow">{t.hero.hello}</p>

          <h1 className="hero-title">
            Ariane
            <br />
            <span>Ngassa.</span>
          </h1>

          <div className="hero-role">
            <span className="role-line"></span>
            <span>{t.hero.role}</span>
          </div>

          <p className="hero-description">{t.hero.intro}</p>

          <div className="hero-actions">
            <a href="#projets" className="button-primary">
              {t.hero.discover}
              <ArrowUpRight size={18} />
            </a>

            <a href="#apropos" className="button-secondary">
              {t.hero.more}
              <ArrowDown size={17} />
            </a>

            <a
              href="/cv-ariane-ngassa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-cv"
            >
              <Download size={17} />
              Voir mon CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-decoration decoration-top">
            <Sparkles size={18} />
            <span>{t.hero.creativity}</span>
          </div>

          <div className="portrait-frame">
            <div className="portrait-inner">
              <div className="portrait-placeholder">
                <span>A.</span>
                <p>YOUR PHOTO HERE</p>
              </div>
            </div>
          </div>

          <div className="visual-decoration decoration-bottom">
            <span className="decoration-number">01</span>
            <div>
              <strong>{t.hero.create}</strong>
              <strong>{t.hero.imagine}</strong>
              <strong>{t.hero.develop}</strong>
            </div>
          </div>

          <div className="floating-star star-one">✳</div>
          <div className="floating-star star-two">✦</div>
          <div className="floating-star star-three">✳</div>
        </div>
      </div>
    </section>
  );
}