import PortfolioImg from '../assets/Portfolio.webp'
import MuseImg from '../assets/MUSE.webp'
import TripImg from '../assets/LPPDT.webp'
import SoleurImg from '../assets/Soleur.webp'

// Catégories des onglets de filtre de la page Projets, dans l'ordre d'affichage
export const categories = [
  { key: 'stage', label: 'stage', tab: 'pro' },
  { key: 'universite', label: 'université', tab: 'université' },
  { key: 'perso', label: 'perso', tab: 'perso' }
]

// Tampon associé à chaque statut (libellé court et style)
export const statusStamps = {
  'Terminé': { label: 'Terminé', tone: 'default' },
  'En cours': { label: 'En cours', tone: 'filled' },
  'En production': { label: 'En prod', tone: 'filled' }
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
    subtitle: "Plateforme open source d'agents IA pour fondateurs solo — stage chez Jikigai",
    cadre: 'stage · Jikigai',
    context: 'Stage de fin de BUT · Jikigai · 2026',
    pitch: "Plateforme open source d'agents IA pour fondateurs solo. J'ai contribué à l'application web, à la base Supabase, à la CI/CD et au plugin Claude Code qui orchestre les agents.",
    short: "Plateforme open source d'agents IA pour fondateurs solo.",
    status: 'Terminé',
    image: SoleurImg,
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Terraform', 'Claude Code'],
    description:
      "Soleur est une plateforme open source qui déploie des agents IA sur les différents pôles d'une entreprise (produit, marketing, juridique, finance…) pour accompagner les fondateurs solo. Pendant mon stage de fin de BUT chez Jikigai, j'ai contribué à l'application web et au plugin Claude Code qui orchestre ces agents, au sein d'une petite équipe travaillant en télétravail.",
    sections: [
      {
        title: 'Contributions',
        items: [
          "Développement front-end et back-end de l'application web",
          'Base de données Supabase (PostgreSQL) et chaîne CI/CD',
          'Spécification de la gestion des routines planifiées (Inngest)',
          'Étude comparative des solutions de feature flags (Flagsmith, Unleash)',
          "Veille et analyse concurrentielle de l'écosystème agentique, avec déploiement de test sur Hetzner via Terraform"
        ]
      }
    ],
    facts: [
      { key: 'cadre', value: 'stage de fin de BUT' },
      { key: 'période', value: 'mai – août 2026' },
      { key: 'équipe', value: 'télétravail, sprints Linear' }
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
    subtitle: "Plateforme d'avis et d'offres touristiques (BUT2, Agile Scrum)",
    cadre: 'université · BUT2',
    context: 'BUT2 · équipe de 8 · Agile Scrum',
    pitch: "Plateforme d'offres et d'avis touristiques, avec Tchatator, une messagerie écrite en C. J'ai pris en charge les modules d'offres, d'avis et de compte, en front et en back.",
    short: 'Offres et avis touristiques, avec une messagerie en C.',
    status: 'Terminé',
    image: TripImg,
    tech: ['PHP', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'C'],
    description:
      "Projet universitaire visant à créer une plateforme permettant aux utilisateurs de consulter des offres touristiques et aux professionnels d'en publier. Réalisé en BUT2 (équipe de 8) avec Agile Scrum (sprints de 2 à 3 semaines, priorisation des lots). La plateforme intègre aussi Tchatator, un service de messagerie écrit en C. Contributions personnelles : mise en ligne et hors ligne des offres, publication, liste et suppression d'avis, page de modification du compte.",
    sections: [
      {
        title: 'Compétences mobilisées',
        items: [
          "Réaliser : développement d'une application pour un client",
          'Optimiser : contraintes de performance et d’expérience utilisateur',
          'Administrer : maintenance du serveur et sécurité',
          'Gérer : conception et administration de la base PostgreSQL',
          'Conduire : Agile Scrum, prise en compte des retours',
          'Collaborer : équipe de 8, rétrospectives à chaque sprint'
        ]
      }
    ],
    facts: [
      { key: 'cadre', value: 'projet universitaire, BUT2' },
      { key: 'équipe', value: '8 personnes, Agile Scrum' },
      { key: 'rôle', value: "front et back : offres, avis et compte" }
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
    subtitle: 'Système de recommandation musicale (BUT3, projet de groupe)',
    cadre: 'université · BUT3',
    context: 'BUT3 · équipe de 6 + 2 alternants',
    short: 'Recommandation musicale : données, analyses, prototypes.',
    status: 'Terminé',
    image: MuseImg,
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    description:
      "Plateforme de recommandation musicale s'appuyant sur des modèles vus en cours. Réalisée en équipe de 6 étudiants et 2 alternants, en gestion de projet autonome sur 3 sprints : collecte des préférences par questionnaire, nettoyage et analyse d'un jeu de données de musiques libres de droit, puis prototypes de recommandation (une méthode différente par membre).",
    sections: [
      {
        title: 'Compétences mobilisées',
        items: [
          'Réaliser : mini-application Python pour exploiter les systèmes de recommandation',
          "Gérer : création et exploitation d'une base de données issue du questionnaire",
          'Analyser : nettoyage des données, visualisations et régression linéaire',
          'Conduire : sprints, livrables, rétrospectives',
          'Collaborer : équipe de 6 (+ 2 alternants), passation entre sprints'
        ]
      }
    ],
    facts: [
      { key: 'cadre', value: 'projet universitaire, BUT3' },
      { key: 'équipe', value: '6 étudiants + 2 alternants, 3 sprints' }
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
    subtitle: 'Jeu de Sudoku en ligne de commande (BUT1)',
    cadre: 'université · BUT1',
    context: 'BUT1 · projet individuel',
    short: 'Sudoku jouable dans le terminal, conçu en pseudo-code.',
    status: 'Terminé',
    image: null,
    tech: ['C', 'Algorithmique'],
    description:
      "Jeu de Sudoku jouable dans le terminal. Le programme charge une grille depuis un fichier, bloque les cases initiales, puis vérifie chaque saisie du joueur jusqu'à ce que la grille soit complète. Le projet part d'une conception en pseudo-code avant l'implémentation en C.",
    sections: [
      {
        title: 'Points travaillés',
        items: [
          "Conception de l'algorithme en pseudo-code",
          'Découpage en procédures et fonctions',
          'Lecture de fichiers et contrôle des saisies'
        ]
      }
    ],
    facts: [
      { key: 'cadre', value: 'projet universitaire, BUT1' }
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
    subtitle: 'Ce site, en amélioration continue',
    cadre: 'perso',
    context: 'Projet personnel · en production',
    short: 'Ce site, déployé sur GitHub Pages.',
    status: 'En production',
    image: PortfolioImg,
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vue Router'],
    description:
      'Site personnel construit avec Vue 3, Tailwind CSS et Vite, déployé automatiquement sur GitHub Pages à chaque mise à jour. Il présente mon parcours, mes projets et un formulaire de contact.',
    sections: [
      {
        title: 'Fonctionnalités',
        items: [
          'Page d’accueil plein écran et bandeau défilant',
          'Frise du parcours dessinée comme un graphe Git',
          'Fiches projets accessibles par lien direct',
          'Formulaire de contact (Web3Forms)'
        ]
      }
    ],
    facts: [
      { key: 'cadre', value: 'projet personnel' },
      { key: 'rôle', value: 'conception, intégration et déploiement' }
    ],
    repo: 'https://github.com/Elvalio/Portfolio'
  }
]
