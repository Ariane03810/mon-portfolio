export const profile = {
  firstName: "Ariane",
  lastName: "Ngassa",
  fullName: "Ariane Ngassa",
  role: "Développeuse Full Stack",
  city: "Douala, Cameroun",
  email: "arianengassa7@gmail.com",
  phone: "+237 657 254 421",

  intro:
    "Je conçois et développe des expériences numériques utiles, élégantes et performantes. Du concept à la réalisation, j'aime transformer les idées en solutions concrètes.",

  about:
    "Étudiante en Licence Professionnelle en Génie Logiciel à l'Institut Universitaire de la Côte, je m'intéresse particulièrement au développement web, à la conception logicielle et aux nouvelles technologies. J'aime comprendre les besoins, structurer les solutions et donner vie à des interfaces intuitives.",

  linkedin: "", // Tu n'as pas de LinkedIn
  github: "https://github.com/Ariane03810",
};

export const expertise = [
  {
    number: "01",
    title: "Développement web",
    description:
      "Conception et réalisation d'applications web modernes, fonctionnelles et évolutives.",
    tags: ["Laravel", "React", "Vue.js"],
  },
  {
    number: "02",
    title: "Conception logicielle",
    description:
      "Analyse des besoins, modélisation des données et structuration d'applications.",
    tags: ["UML", "Merise", "MCD / MLD"],
  },
  {
    number: "03",
    title: "Interfaces & expérience",
    description:
      "Création d'interfaces intuitives, cohérentes et agréables à utiliser.",
    tags: ["UI Design", "UX", "Prototypage"],
  },
  {
    number: "04",
    title: "Technologies & innovation",
    description:
      "Exploration de solutions techniques autour des API, de l'OCR et de l'intelligence artificielle.",
    tags: ["API REST", "OCR", "IA"],
  },
];

export const skills = [
  {
    category: "Langages",
    items: ["PHP", "JavaScript", "C", "C#", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & bibliothèques",
    items: ["Laravel", "Livewire", "Vue.js", "React", "Chart.js"],
  },
  {
    category: "Bases de données",
    items: ["MySQL", "Modélisation", "Requêtes SQL"],
  },
  {
    category: "Outils",
    items: ["VS Code", "Git", "GitHub", "Ollama"],
  },
  {
    category: "Technologies complémentaires",
    items: ["API REST", "OCR", "Qwen 2.5 VL 7B", "QR Code"],
  },
];

export const projects = [
  {
    number: "01",
    category: "Développement Full Stack",
    title: "Courrier",
    description:
      "Application web de gestion de courriers permettant le dépôt, le suivi et le traitement des documents de manière simple et organisée.",
    technologies: ["Laravel", "Livewire", "MySQL"],
    year: "2026",
    featured: true,
    accent: "plum",
  },
  {
    number: "02",
    category: "EdTech · FinTech",
    title: "UNIPAY",
    description:
      "Concept de plateforme de digitalisation des paiements de frais scolaires et de gestion de l'identité numérique des apprenants.",
    technologies: ["Vue.js", "Laravel", "MySQL", "QR Code"],
    year: "Projet personnel",
    featured: true,
    accent: "gold",
  },
  {
    number: "03",
    category: "Gestion · QR Code",
    title: "EDUQR",
    description:
      "Solution de gestion des accès des apprenants au sein d'un établissement grâce à l'utilisation de QR codes.",
    technologies: ["Développement web", "QR Code"],
    year: "Projet académique",
    featured: false,
    accent: "rose",
  },
];

export const experiences = [
  {
    period: "Sept. — Nov. 2026",
    type: "Expérience professionnelle",
    title: "Développeuse web stagiaire",
    organization: "Stage en entreprise",
    description:
      "Participation à la conception et au développement d'une application web de gestion de courriers.",
    details: ["Laravel", "Livewire", "MySQL", "Git / GitHub"],
  },
];

export const education = [
  {
    period: "En cours",
    title: "Licence Professionnelle en Génie Logiciel",
    organization: "Institut Universitaire de la Côte",
  },
  {
    period: "Obtenu",
    title: "Brevet de Technicien Supérieur en Génie Logiciel",
    organization: "Institut Universitaire de la Côte",
  },
];

export const qualities = [
  "Curiosité",
  "Créativité",
  "Rigueur",
  "Autonomie",
  "Esprit d'équipe",
  "Adaptabilité",
];

export const interests = [
  "Innovation numérique",
  "UI / UX Design",
  "Intelligence artificielle",
  "Veille technologique",
];