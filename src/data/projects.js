import PortfolioImg from '../assets/Portfolio.webp'
import MuseImg from '../assets/MUSE.webp'
import TripImg from '../assets/LPPDT.webp'
import SoleurImg from '../assets/Soleur.webp'

// Les textes affichés sont au format { fr, en } ; les composants les lisent avec tr().

// Catégories des onglets de filtre de la page Projets, dans l'ordre d'affichage
export const categories = [
  { key: 'stage', label: { fr: 'stage', en: 'internship' }, tab: 'pro' },
  { key: 'universite', label: { fr: 'université', en: 'university' }, tab: { fr: 'université', en: 'university' } },
  { key: 'perso', label: { fr: 'perso', en: 'personal' }, tab: { fr: 'perso', en: 'personal' } }
]

// Statuts : libellé de l'index `ls -la`, tampon et style du tampon
export const statuses = {
  done: { label: { fr: 'terminé', en: 'done' }, stamp: { fr: 'Terminé', en: 'Done' }, tone: 'default' },
  'in-progress': { label: { fr: 'en cours', en: 'in progress' }, stamp: { fr: 'En cours', en: 'In progress' }, tone: 'filled' },
  live: { label: { fr: 'en production', en: 'in production' }, stamp: { fr: 'En prod', en: 'Live' }, tone: 'filled' }
}

// Liste des projets, dans l'ordre d'affichage.
// featured : grande fiche sur l'accueil.
// slug / kind : nom et type d'entrée dans l'index façon `ls -la`.
// cadre : contexte court (index et petites fiches) ; context : ligne mono des grandes fiches.
// pitch : description des grandes fiches de l'accueil ; short : une ligne pour les petites fiches.
export const projects = [
  {
    key: 'soleur',
    slug: 'soleur',
    kind: 'dir',
    featured: true,
    category: 'stage',
    year: 2026,
    title: 'Soleur',
    subtitle: {
      fr: "Plateforme open source d'agents IA pour fondateurs solo — stage chez Jikigai",
      en: 'Open-source AI agent platform for solo founders — internship at Jikigai'
    },
    cadre: { fr: 'stage · Jikigai', en: 'internship · Jikigai' },
    context: { fr: 'Stage de fin de BUT · Jikigai · 2026', en: 'End-of-degree internship · Jikigai · 2026' },
    pitch: {
      fr: "Plateforme open source d'agents IA pour fondateurs solo. J'ai contribué à l'application web, à la base Supabase, à la CI/CD et au plugin Claude Code qui orchestre les agents.",
      en: 'Open-source AI agent platform for solo founders. I contributed to the web app, the Supabase database, the CI/CD pipeline and the Claude Code plugin that orchestrates the agents.'
    },
    short: {
      fr: "Plateforme open source d'agents IA pour fondateurs solo.",
      en: 'Open-source AI agent platform for solo founders.'
    },
    status: 'done',
    image: SoleurImg,
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Terraform', 'Claude Code'],
    description: {
      fr: "Soleur est une plateforme open source qui déploie des agents IA sur les différents pôles d'une entreprise (produit, marketing, juridique, finance…) pour accompagner les fondateurs solo. Pendant mon stage de fin de BUT chez Jikigai, j'ai contribué à l'application web et au plugin Claude Code qui orchestre ces agents, au sein d'une petite équipe travaillant en télétravail.",
      en: "Soleur is an open-source platform that deploys AI agents across a company's departments (product, marketing, legal, finance…) to support solo founders. During my end-of-degree internship at Jikigai, I contributed to the web application and to the Claude Code plugin that orchestrates these agents, within a small remote team."
    },
    sections: [
      {
        title: 'Contributions',
        items: [
          { fr: "Développement front-end et back-end de l'application web", en: 'Front-end and back-end development of the web application' },
          { fr: 'Base de données Supabase (PostgreSQL) et chaîne CI/CD', en: 'Supabase (PostgreSQL) database and CI/CD pipeline' },
          { fr: 'Spécification de la gestion des routines planifiées (Inngest)', en: 'Specification of scheduled routine management (Inngest)' },
          { fr: 'Étude comparative des solutions de feature flags (Flagsmith, Unleash)', en: 'Comparative study of feature flag solutions (Flagsmith, Unleash)' },
          { fr: "Veille et analyse concurrentielle de l'écosystème agentique, avec déploiement de test sur Hetzner via Terraform", en: 'Market watch and competitive analysis of the agentic ecosystem, with a test deployment on Hetzner via Terraform' }
        ]
      }
    ],
    facts: [
      { key: { fr: 'cadre', en: 'context' }, value: { fr: 'stage de fin de BUT', en: 'end-of-degree internship' } },
      { key: { fr: 'période', en: 'period' }, value: { fr: 'mai – août 2026', en: 'May – August 2026' } },
      { key: { fr: 'équipe', en: 'team' }, value: { fr: 'télétravail, sprints Linear', en: 'remote, Linear sprints' } }
    ],
    repo: 'https://github.com/jikig-ai/soleur'
  },
  {
    key: 'trip',
    slug: 'trip-en-armor',
    kind: 'dir',
    featured: true,
    category: 'universite',
    year: 2025,
    title: 'Trip en Armor',
    subtitle: {
      fr: "Plateforme d'avis et d'offres touristiques (BUT2, Agile Scrum)",
      en: 'Tourism offers and reviews platform (BUT2, Agile Scrum)'
    },
    cadre: { fr: 'université · BUT2', en: 'university · BUT2' },
    context: { fr: 'BUT2 · équipe de 8 · Agile Scrum', en: 'BUT2 · team of 8 · Agile Scrum' },
    pitch: {
      fr: "Plateforme d'offres et d'avis touristiques, avec Tchatator, une messagerie écrite en C. J'ai pris en charge les modules d'offres, d'avis et de compte, en front et en back.",
      en: 'Tourism offers and reviews platform, including Tchatator, a messaging service written in C. I handled the offers, reviews and account modules, front and back end.'
    },
    short: {
      fr: 'Offres et avis touristiques, avec une messagerie en C.',
      en: 'Tourism offers and reviews, with a messaging service in C.'
    },
    status: 'done',
    image: TripImg,
    tech: ['PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'C'],
    description: {
      fr: "Projet universitaire visant à créer une plateforme permettant aux utilisateurs de consulter des offres touristiques et aux professionnels d'en publier. Réalisé en BUT2 (équipe de 8) avec Agile Scrum (sprints de 2 à 3 semaines, priorisation des lots). La plateforme intègre aussi Tchatator, un service de messagerie écrit en C. Contributions personnelles : mise en ligne et hors ligne des offres, publication, liste et suppression d'avis, page de modification du compte.",
      en: 'University project to build a platform where users browse tourism offers and professionals publish them. Built in BUT2 (team of 8) with Agile Scrum (2 to 3-week sprints, prioritized work packages). The platform also includes Tchatator, a messaging service written in C. My contributions: putting offers online and offline, publishing, listing and deleting reviews, and the account settings page.'
    },
    sections: [
      {
        title: { fr: 'Compétences mobilisées', en: 'Skills applied' },
        items: [
          { fr: "Réaliser : développement d'une application pour un client", en: 'Build: developing an application for a client' },
          { fr: 'Optimiser : contraintes de performance et d’expérience utilisateur', en: 'Optimize: performance and user experience constraints' },
          { fr: 'Administrer : maintenance du serveur et sécurité', en: 'Administer: server maintenance and security' },
          { fr: 'Gérer : conception et administration de la base PostgreSQL', en: 'Manage: designing and administering the PostgreSQL database' },
          { fr: 'Conduire : Agile Scrum, prise en compte des retours', en: 'Lead: Agile Scrum, acting on feedback' },
          { fr: 'Collaborer : équipe de 8, rétrospectives à chaque sprint', en: 'Collaborate: team of 8, a retrospective every sprint' }
        ]
      }
    ],
    facts: [
      { key: { fr: 'cadre', en: 'context' }, value: { fr: 'projet universitaire, BUT2', en: 'university project, BUT2' } },
      { key: { fr: 'équipe', en: 'team' }, value: { fr: '8 personnes, Agile Scrum', en: '8 people, Agile Scrum' } },
      { key: { fr: 'rôle', en: 'role' }, value: { fr: 'front et back : offres, avis et compte', en: 'front and back: offers, reviews and account' } }
    ],
    repo: 'https://github.com/Elvalio/LPPDT'
  },
  {
    key: 'muse',
    slug: 'muse',
    kind: 'dir',
    featured: false,
    category: 'universite',
    year: 2026,
    title: 'Muse',
    subtitle: {
      fr: 'Système de recommandation musicale (BUT3, projet de groupe)',
      en: 'Music recommendation system (BUT3, group project)'
    },
    cadre: { fr: 'université · BUT3', en: 'university · BUT3' },
    context: { fr: 'BUT3 · équipe de 6 + 2 alternants', en: 'BUT3 · team of 6 + 2 apprentices' },
    short: {
      fr: 'Recommandation musicale : données, analyses, prototypes.',
      en: 'Music recommendation: data, analyses, prototypes.'
    },
    status: 'done',
    image: MuseImg,
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    description: {
      fr: "Plateforme de recommandation musicale s'appuyant sur des modèles vus en cours. Réalisée en équipe de 6 étudiants et 2 alternants, en gestion de projet autonome sur 3 sprints : collecte des préférences par questionnaire, nettoyage et analyse d'un jeu de données de musiques libres de droit, puis prototypes de recommandation (une méthode différente par membre).",
      en: 'Music recommendation platform based on models studied in class. Built by a team of 6 students and 2 apprentices, with self-managed project organization over 3 sprints: collecting preferences through a survey, cleaning and analyzing a dataset of royalty-free music, then recommendation prototypes (a different method per member).'
    },
    sections: [
      {
        title: { fr: 'Compétences mobilisées', en: 'Skills applied' },
        items: [
          { fr: 'Réaliser : mini-application Python pour exploiter les systèmes de recommandation', en: 'Build: a small Python app to run the recommendation systems' },
          { fr: "Gérer : création et exploitation d'une base de données issue du questionnaire", en: 'Manage: creating and using a database built from the survey' },
          { fr: 'Analyser : nettoyage des données, visualisations et régression linéaire', en: 'Analyze: data cleaning, visualizations and linear regression' },
          { fr: 'Conduire : sprints, livrables, rétrospectives', en: 'Lead: sprints, deliverables, retrospectives' },
          { fr: 'Collaborer : équipe de 6 (+ 2 alternants), passation entre sprints', en: 'Collaborate: team of 6 (+ 2 apprentices), handovers between sprints' }
        ]
      }
    ],
    facts: [
      { key: { fr: 'cadre', en: 'context' }, value: { fr: 'projet universitaire, BUT3', en: 'university project, BUT3' } },
      { key: { fr: 'équipe', en: 'team' }, value: { fr: '6 étudiants + 2 alternants, 3 sprints', en: '6 students + 2 apprentices, 3 sprints' } }
    ],
    repo: 'https://github.com/Elvalio/SAE_AIKON'
  },
  {
    key: 'sudoku',
    slug: 'sudoku',
    kind: 'file',
    featured: false,
    category: 'universite',
    year: 2024,
    title: 'Sudoku',
    subtitle: { fr: 'Jeu de Sudoku en ligne de commande (BUT1)', en: 'Command-line Sudoku game (BUT1)' },
    cadre: { fr: 'université · BUT1', en: 'university · BUT1' },
    context: { fr: 'BUT1 · projet individuel', en: 'BUT1 · individual project' },
    short: {
      fr: 'Sudoku jouable dans le terminal, conçu en pseudo-code.',
      en: 'Sudoku playable in the terminal, designed in pseudocode.'
    },
    status: 'done',
    image: null,
    tech: ['C', { fr: 'Algorithmique', en: 'Algorithms' }],
    description: {
      fr: "Jeu de Sudoku jouable dans le terminal. Le programme charge une grille depuis un fichier, bloque les cases initiales, puis vérifie chaque saisie du joueur jusqu'à ce que la grille soit complète. Le projet part d'une conception en pseudo-code avant l'implémentation en C.",
      en: "Sudoku game playable in the terminal. The program loads a grid from a file, locks the starting cells, then checks each of the player's entries until the grid is complete. The project started from a pseudocode design before being implemented in C."
    },
    sections: [
      {
        title: { fr: 'Points travaillés', en: 'Key points' },
        items: [
          { fr: "Conception de l'algorithme en pseudo-code", en: 'Algorithm design in pseudocode' },
          { fr: 'Découpage en procédures et fonctions', en: 'Breaking the code into procedures and functions' },
          { fr: 'Lecture de fichiers et contrôle des saisies', en: 'File reading and input validation' }
        ]
      }
    ],
    facts: [
      { key: { fr: 'cadre', en: 'context' }, value: { fr: 'projet universitaire, BUT1', en: 'university project, BUT1' } }
    ],
    repo: 'https://github.com/Elvalio/Sudoku'
  },
  {
    key: 'portfolio',
    slug: 'portfolio',
    kind: 'dir',
    featured: false,
    category: 'perso',
    year: 2026,
    title: 'Portfolio',
    subtitle: { fr: 'Ce site, en amélioration continue', en: 'This site, continuously improved' },
    cadre: { fr: 'perso', en: 'personal' },
    context: { fr: 'Projet personnel · en production', en: 'Personal project · in production' },
    short: { fr: 'Ce site, déployé sur GitHub Pages.', en: 'This site, deployed on GitHub Pages.' },
    status: 'live',
    image: PortfolioImg,
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vue Router'],
    description: {
      fr: 'Site personnel construit avec Vue 3, Tailwind CSS et Vite, déployé automatiquement sur GitHub Pages à chaque mise à jour. Il présente mon parcours, mes projets et un formulaire de contact.',
      en: 'Personal website built with Vue 3, Tailwind CSS and Vite, deployed automatically to GitHub Pages on every update. It presents my background, my projects and a contact form.'
    },
    sections: [
      {
        title: { fr: 'Fonctionnalités', en: 'Features' },
        items: [
          { fr: 'Page d’accueil plein écran et bandeau défilant', en: 'Full-screen home page and scrolling ticker' },
          { fr: 'Frise du parcours dessinée comme un graphe Git', en: 'Background timeline drawn as a Git graph' },
          { fr: 'Fiches projets accessibles par lien direct', en: 'Project pages reachable by direct link' },
          { fr: 'Version française et anglaise', en: 'French and English versions' },
          { fr: 'Formulaire de contact (Web3Forms)', en: 'Contact form (Web3Forms)' }
        ]
      }
    ],
    facts: [
      { key: { fr: 'cadre', en: 'context' }, value: { fr: 'projet personnel', en: 'personal project' } },
      { key: { fr: 'rôle', en: 'role' }, value: { fr: 'conception, intégration et déploiement', en: 'design, development and deployment' } }
    ],
    repo: 'https://github.com/Elvalio/Portfolio'
  }
]
