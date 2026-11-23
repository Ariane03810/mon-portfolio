import { useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import { useLanguage } from "../LanguageContext";
import { profile, skills } from "../data";

function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section about-section" id="apropos">
      <RevealObserver />

      <div className="section-container">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          highlight={t.about.highlight}
          number="01"
          description={t.about.description}
        />

        <div className="about-layout">
          <div className="about-side-note reveal">
            <span className="about-big-letter">A</span>
            <span className="about-side-caption">
              {t.about.learn}
              <br />
              {t.about.build}
              <br />
              {t.about.evolve}
            </span>
          </div>

          <div className="about-content reveal">
            <p className="about-lead">
              {t.about.lead}
              <span> {t.about.leadHighlight}</span>
            </p>

            <p className="about-description">{t.about.text}</p>

            <div className="about-facts">
              <div>
                <MapPin size={17} />
                <span>{profile.city}</span>
              </div>
              <div>
                <Code2 size={17} />
                <span>{t.about.fact1}</span>
              </div>
              <div>
                <Sparkles size={17} />
                <span>{t.about.fact2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  const { t } = useLanguage();
  const icons = [Code2, Layers3, Lightbulb, Database];

  return (
    <section className="section expertise-section" id="expertises">
      <div className="section-container">
        <SectionHeading
          eyebrow={t.expertise.eyebrow}
          title={t.expertise.title}
          highlight={t.expertise.highlight}
          number="02"
          description={t.expertise.description}
        />

        <div className="expertise-grid">
          {t.expertise.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                className="expertise-card reveal"
                key={item.number}
                style={{ "--delay": `${index * 100}ms` }}
              >
                <div className="expertise-card-top">
                  <span>{item.number}</span>
                  <Icon size={23} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="expertise-card-line"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const { t, lang } = useLanguage();

  const categoryTranslations = {
    fr: {
      "Langages": "Langages",
      "Frameworks & bibliothèques": "Frameworks & bibliothèques",
      "Bases de données": "Bases de données",
      "Outils": "Outils",
      "Technologies complémentaires": "Technologies complémentaires",
    },
    en: {
      "Langages": "Languages",
      "Frameworks & bibliothèques": "Frameworks & Libraries",
      "Bases de données": "Databases",
      "Outils": "Tools",
      "Technologies complémentaires": "Complementary Technologies",
    },
  };

  const getCategory = (original) => {
    return categoryTranslations[lang]?.[original] || original;
  };

  return (
    <section className="section skills-section" id="competences">
      <div className="section-container">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          highlight={t.skills.highlight}
          number="03"
          description={t.skills.description}
        />

        <div className="skills-layout">
          <div className="skills-intro reveal">
            <span className="skills-symbol">{"</>"}</span>

            <h3>
              {t.skills.introTitle1}
              <br />
              <span>{t.skills.introTitle2}</span>
              <br />
              {t.skills.introTitle3}
              <br />
              <span>{t.skills.introTitle4}</span>
            </h3>

            <p>{t.skills.introText}</p>
          </div>

          <div className="skills-list">
            {skills.map((group, index) => (
              <div className="skill-group reveal" key={group.category}>
                <div className="skill-group-number">
                  0{index + 1}
                </div>

                <div className="skill-group-content">
                  <h3>{getCategory(group.category)}</h3>

                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section projects-section" id="projets">
      <div className="section-container">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          highlight={t.projects.highlight}
          number="04"
          description={t.projects.description}
        />

        <div className="projects-list">
          {t.projects.items.map((project) => (
            <article
              className={`project-card project-${project.accent} reveal`}
              key={project.number}
            >
              <div className="project-index">
                <span>{project.number}</span>
                <span>{project.year}</span>
              </div>

              <div className="project-main">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-visual">
                <div className="project-art">
                  <div className="project-art-circle"></div>
                  <div className="project-art-letter">
                    {project.title.charAt(0)}
                  </div>
                  <span className="project-art-caption">
                    {t.projects.selected}
                  </span>
                </div>
                <span className="project-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note reveal">{t.projects.note}</p>
      </div>
    </section>
  );
}

export function Journey() {
  const { t } = useLanguage();

  return (
    <section className="section journey-section" id="parcours">
      <div className="section-container">
        <SectionHeading
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
          highlight={t.journey.highlight}
          number="05"
          description={t.journey.description}
        />

        <div className="journey-layout">
          <div className="journey-column reveal">
            <div className="journey-column-heading">
              <span>01</span>
              <h3>{t.journey.experience}</h3>
            </div>

            {t.journey.experiences.map((experience) => (
              <article className="journey-item" key={experience.title}>
                <span className="journey-period">{experience.period}</span>
                <h4>{experience.title}</h4>
                <strong>{experience.organization}</strong>
                <p>{experience.description}</p>
                <div className="tag-list">
                  {experience.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="journey-column reveal">
            <div className="journey-column-heading">
              <span>02</span>
              <h3>{t.journey.education}</h3>
            </div>

            {t.journey.educationList.map((item) => (
              <article className="journey-item" key={item.title}>
                <span className="journey-period">{item.period}</span>
                <h4>{item.title}</h4>
                <strong>{item.organization}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MoreAbout() {
  const { t } = useLanguage();

  return (
    <section className="section more-section" id="personnalite">
      <div className="section-container">
        <SectionHeading
          eyebrow={t.more.eyebrow}
          title={t.more.title}
          highlight={t.more.highlight}
          number="06"
        />

        <div className="more-grid">
          <div className="more-card reveal">
            <span className="more-card-label">{t.more.qualities}</span>
            <h3>{t.more.qualitiesTitle}</h3>
            <div className="more-tags">
              {t.more.qualitiesList.map((quality) => (
                <span key={quality}>{quality}</span>
              ))}
            </div>
          </div>

          <div className="more-card more-card-highlight reveal">
            <span className="more-card-label">{t.more.interests}</span>
            <h3>{t.more.interestsTitle}</h3>
            <div className="more-tags">
              {t.more.interestsList.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
            <Sparkles className="more-decoration" size={65} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="contact-card reveal">
          <div className="contact-decoration">✳</div>

          <span className="contact-eyebrow">{t.contact.eyebrow}</span>

          <h2>
            {t.contact.title}
            <br />
            <span>{t.contact.highlight}</span>
          </h2>

          <p>{t.contact.text}</p>

          <a
            href={`mailto:${profile.email}`}
            className="button-primary contact-button"
          >
            {t.contact.button}
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone size={17} />
              {profile.phone}
            </a>
            <span>
              <MapPin size={17} />
              {profile.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}