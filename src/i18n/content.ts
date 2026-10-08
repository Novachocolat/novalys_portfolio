// Tout le texte du site vit ici. Pour modifier un contenu, c'est le seul fichier à toucher.

export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "fr";

export const site = {
  name: "Lysandre Pace--Boulnois",
  alias: "Novalys",
  url: "https://novachocolat.github.io",
  email: "lysandre.pb@gmail.com",
  github: "https://github.com/Novachocolat",
  linkedin: "https://www.linkedin.com/in/lysandrepb",
  // Créer un formulaire sur https://formspree.io puis coller son identifiant ici (ex. "xyzabcde").
  // Tant qu'il est vide, la section contact affiche un bouton e-mail à la place du formulaire.
  formspreeId: "",
};

export const technologies = [
  "javaScript", "typeScript", "HTML5", "CSS3", "vue", "react",
  "nodejs", "astro", "tailwindcss", "git", "bash",
];

type Project = {
  title: string;
  status: string;
  description: string;
  tags: string[];
  code: string;
  demo?: string;
};

type Role = { title: string; period: string; bullets: string[] };

export type Content = {
  meta: { title: string; description: string };
  nav: { home: string; about: string; projects: string; experience: string; skills: string; contact: string };
  ui: { theme: string; themeSystem: string; themeLight: string; themeDark: string; language: string; code: string; demo: string };
  hero: { greeting: string; title: [string, string]; tagline: string; available: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; facts: { label: string; value: string }[] };
  projects: { eyebrow: string; title: string; items: Project[]; more: string };
  experience: {
    eyebrow: string;
    title: string;
    company: string;
    field: string;
    place: string;
    period: string;
    roles: Role[];
    education: { label: string; school: string; degree: string; place: string; period: string };
  };
  skills: { eyebrow: string; title: string; groups: { name: string; items: string[] }[]; learning: string; learningItems: string[] };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    location: string;
    locationValue: string;
    form: { name: string; email: string; message: string; send: string; sending: string; success: string; error: string };
    mailCta: string;
  };
  footer: { rights: string; credit: string };
};

const skillGroups = (lang: Lang) => [
  { name: lang === "fr" ? "Langages" : "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C", "C++", "C#", "Bash"] },
  { name: "Frameworks", items: ["Vue.js", "Node.js", "Express", "Vitest"] },
  { name: lang === "fr" ? "Bases de données" : "Databases", items: ["PostgreSQL", "Prisma", "Firebase"] },
  { name: lang === "fr" ? "Outils" : "Dev tools", items: ["Git", "GitHub", "Docker", "Visual Studio Code", "Visual Studio", "Android Studio", "Figma", "Notion"] },
];

export const content: Record<Lang, Content> = {
  fr: {
    meta: {
      title: "Lysandre Pace--Boulnois (Novalys) | Développeur Full-Stack Junior",
      description:
        "Portfolio de Lysandre Pace--Boulnois, alias Novalys : développeur full-stack junior, étudiant en BUT Informatique, à la recherche d'un stage de 14 à 16 semaines à partir de mi-mars 2027.",
    },
    nav: { home: "Accueil", about: "À propos", projects: "Projets", experience: "Parcours", skills: "Compétences", contact: "Contact" },
    ui: { theme: "Thème", themeSystem: "Système", themeLight: "Clair", themeDark: "Sombre", language: "Langue", code: "Code source", demo: "Démo" },
    hero: {
      greeting: "Salut, je suis Lysandre",
      title: ["Développeur", "Full-Stack Junior"],
      tagline:
        "Étudiant en BUT Informatique, je conçois des applications web de bout en bout : interface, API et base de données.",
      available: "Recherche un stage de 14 à 16 semaines dès mi-mars 2027",
    },
    about: {
      eyebrow: "Qui suis-je",
      title: "À propos",
      paragraphs: [
        "Je suis étudiant en troisième année de BUT Informatique à l'IUT du Littoral Côte d'Opale, à Calais, et développeur full-stack junior. J'aime construire des applications complètes, de l'interface à la base de données, en passant par l'API et le déploiement.",
        "Je suis Vice-Président de JrCanDev, une association étudiante. J'y apprends à organiser un projet collectif et à travailler en équipe.",
        "Je consolide actuellement mes compétences en Docker, Firebase et Astro, ce dernier étant le framework de ce site.",
      ],
      facts: [
        { label: "Formation", value: "BUT Informatique, 2024 – 2027" },
        { label: "Recherche", value: "Stage de 14 à 16 semaines, dès mi-mars 2027" },
        { label: "Langues", value: "Français (natif), anglais (B2–C1)" },
        { label: "Mobilité", value: "Permis B, véhicule personnel" },
      ],
    },
    projects: {
      eyebrow: "Mes réalisations",
      title: "Projets",
      more: "Plus de projets sur",
      items: [
        {
          title: "ROM RAG",
          status: "En cours",
          description:
            "Gestionnaire de ROMs qui scanne un dossier local et identifie les jeux grâce aux catalogues No-Intro. Une IA locale (Ollama) couplée à pgvector enrichit les ROMs non identifiées et regroupe les variantes d'un même jeu. API REST en Express et TypeScript, Docker Compose et CI GitHub Actions (lint, tests, build).",
          tags: ["React", "Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Ollama", "Docker"],
          code: "https://github.com/Novachocolat/rom-rag-sae-but3",
        },
        {
          title: "TCG SPA",
          status: "Terminé",
          description:
            "Jeu de cartes en ligne façon Pokémon : authentification, gestion de decks, matchmaking et matchs en temps réel entre joueurs.",
          tags: ["Vue 3", "TypeScript", "Socket.io", "Git"],
          code: "https://github.com/Novachocolat/tcg-spa-novachocolat",
        },
        {
          title: "Market Tracer",
          status: "SAÉ (BUT)",
          description:
            "Application de bureau pour gérer l'inventaire d'un supermarché et calculer le parcours de courses optimal avec l'algorithme A*.",
          tags: ["Python", "PyQt6", "A*"],
          code: "https://github.com/Novachocolat/S2_02_ihm",
        },
        {
          title: "Portail étudiant IUT",
          status: "SAÉ (BUT)",
          description:
            "Portail web pour les étudiants de l'IUT : emplois du temps, outils, règlements, recherche et thème clair/sombre.",
          tags: ["HTML", "CSS", "JavaScript"],
          code: "https://github.com/Novachocolat/site_iut",
        },
      ],
    },
    experience: {
      eyebrow: "Mon parcours",
      title: "Expérience & formation",
      company: "ISAGRI",
      field: "Ingénierie · Développement logiciel",
      place: "Tillé, Hauts-de-France · Sur site",
      period: "Avril 2026 – Juillet 2026",
      roles: [
        {
          title: "Développeur junior (CDD)",
          period: "Juin 2026 – Juillet 2026",
          bullets: ["Développement et maintenance de fonctionnalités au sein d'une équipe de développement logiciel."],
        },
        {
          title: "Stagiaire développeur",
          period: "Avril 2026 – Juin 2026",
          bullets: ["Mission de recherche et développement (R&D).", "Développement de fonctionnalités avec ASP.NET."],
        },
      ],
      education: {
        label: "Formation",
        school: "IUT du Littoral Côte d'Opale",
        degree: "Brevet Universitaire de Technologie : Informatique",
        place: "Calais, France",
        period: "Sept. 2024 – Juin 2027",
      },
    },
    skills: {
      eyebrow: "Ma boîte à outils",
      title: "Compétences",
      groups: skillGroups("fr"),
      learning: "En cours d'apprentissage",
      learningItems: ["Docker", "Firebase", "Astro"],
    },
    contact: {
      eyebrow: "Discutons",
      title: "Contact",
      intro:
        "Un stage à proposer, une question ou simplement envie d'échanger ? N'hésitez pas à m'écrire, je réponds avec plaisir.",
      location: "Localisation",
      locationValue: "Hauts-de-France, France",
      form: {
        name: "Nom",
        email: "E-mail",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi…",
        success: "Merci, votre message a bien été envoyé !",
        error: "Une erreur est survenue lors de l'envoi du message.",
      },
      mailCta: "M'écrire un e-mail",
    },
    footer: { rights: "Tous droits réservés.", credit: "Basé sur le thème Dark Minimal (MIT)" },
  },

  en: {
    meta: {
      title: "Lysandre Pace--Boulnois (Novalys) | Junior Full-Stack Developer",
      description:
        "Portfolio of Lysandre Pace--Boulnois, a.k.a. Novalys: junior full-stack developer and computer science student, looking for a 14 to 16-week internship starting mid-March 2027.",
    },
    nav: { home: "Home", about: "About", projects: "Projects", experience: "Experience", skills: "Skills", contact: "Contact" },
    ui: { theme: "Theme", themeSystem: "System", themeLight: "Light", themeDark: "Dark", language: "Language", code: "Source code", demo: "Demo" },
    hero: {
      greeting: "Hi, I'm Lysandre",
      title: ["Junior", "Full-Stack Developer"],
      tagline:
        "Computer science student building web applications end to end: interface, API and database.",
      available: "Looking for a 14 to 16-week internship from mid-March 2027",
    },
    about: {
      eyebrow: "Who am I",
      title: "About",
      paragraphs: [
        "I'm a third-year Computer Science student (BUT) at the IUT du Littoral Côte d'Opale in Calais, France, and a junior full-stack developer. I enjoy building complete applications, from the interface to the database, including the API and deployment.",
        "I'm Vice-President of JrCanDev, a student association, where I learn how to run a collective project and work as a team.",
        "I'm currently strengthening my skills in Docker, Firebase and Astro, which is the framework behind this site.",
      ],
      facts: [
        { label: "Education", value: "BUT Computer Science, 2024 – 2027" },
        { label: "Looking for", value: "14 to 16-week internship, from mid-March 2027" },
        { label: "Languages", value: "French (native), English (B2–C1)" },
        { label: "Mobility", value: "Driving licence, own car" },
      ],
    },
    projects: {
      eyebrow: "My work",
      title: "Projects",
      more: "More projects on",
      items: [
        {
          title: "ROM RAG",
          status: "In progress",
          description:
            "ROM library manager that scans a local folder and identifies games using the No-Intro catalogues. A local AI (Ollama) with pgvector enriches unidentified ROMs and groups the variants of a same game. REST API in Express and TypeScript, Docker Compose and GitHub Actions CI (lint, tests, build).",
          tags: ["React", "Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Ollama", "Docker"],
          code: "https://github.com/Novachocolat/rom-rag-sae-but3",
        },
        {
          title: "TCG SPA",
          status: "Completed",
          description:
            "Online Pokémon-style card game: authentication, deck management, matchmaking and real-time matches between players.",
          tags: ["Vue 3", "TypeScript", "Socket.io", "Git"],
          code: "https://github.com/Novachocolat/tcg-spa-novachocolat",
        },
        {
          title: "Market Tracer",
          status: "SAÉ (university project)",
          description:
            "Desktop app to manage a supermarket's inventory and compute the optimal shopping route with the A* algorithm.",
          tags: ["Python", "PyQt6", "A*"],
          code: "https://github.com/Novachocolat/S2_02_ihm",
        },
        {
          title: "IUT student portal",
          status: "SAÉ (university project)",
          description:
            "Web portal for IUT students: timetables, tools, regulations, search and a light/dark theme.",
          tags: ["HTML", "CSS", "JavaScript"],
          code: "https://github.com/Novachocolat/site_iut",
        },
      ],
    },
    experience: {
      eyebrow: "My background",
      title: "Experience & education",
      company: "ISAGRI",
      field: "Engineering · Software development",
      place: "Tillé, Hauts-de-France, France · On site",
      period: "April 2026 – July 2026",
      roles: [
        {
          title: "Junior developer (fixed-term contract)",
          period: "June 2026 – July 2026",
          bullets: ["Development and maintenance of features within a software development team."],
        },
        {
          title: "Developer intern",
          period: "April 2026 – June 2026",
          bullets: ["Research and development (R&D) assignment.", "Feature development with ASP.NET."],
        },
      ],
      education: {
        label: "Education",
        school: "IUT du Littoral Côte d'Opale",
        degree: "University Diploma of Technology (BUT): Computer Science",
        place: "Calais, France",
        period: "Sept. 2024 – June 2027",
      },
    },
    skills: {
      eyebrow: "My toolbox",
      title: "Skills",
      groups: skillGroups("en"),
      learning: "Currently learning",
      learningItems: ["Docker", "Firebase", "Astro"],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Contact",
      intro:
        "An internship to offer, a question, or just want to chat? Feel free to write to me, I'll be happy to reply.",
      location: "Location",
      locationValue: "Hauts-de-France, France",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending…",
        success: "Thank you, your message has been sent!",
        error: "There was a problem sending your message.",
      },
      mailCta: "Send me an email",
    },
    footer: { rights: "All rights reserved.", credit: "Based on the Dark Minimal theme (MIT)" },
  },
};

export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
