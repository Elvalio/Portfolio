import PortfolioImg from '../assets/Portfolio.webp'
import MuseImg from '../assets/MUSE.webp'
import TripImg from '../assets/LPPDT.webp'

// Statuts possibles et style du badge associé
export const statusStyles = {
  'Terminé': 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
  'En cours': 'text-amber-300 bg-amber-500/15 border-amber-400/30',
  'En production': 'text-primary bg-primary/15 border-primary/30'
}

// Liste des projets, dans l'ordre d'affichage.
// featured: affiché sur la page d'accueil.
export const projects = [
  {
    key: 'soleur',
    featured: true,
    title: 'Soleur',
    subtitle: "Plateforme open source d'agents IA pour fondateurs solo — stage chez Jikigai",
    short: "Plateforme d'agents IA pour fondateurs solo, développée pendant mon stage de fin de BUT.",
    status: 'Terminé',
    image: null,
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
    aside: {
      title: 'Organisation',
      text: 'Télétravail avec présentiel régulier en coworking, suivi des tâches en sprints sur Linear.'
    },
    repo: 'https://github.com/jikig-ai/soleur'
  },
  {
    key: 'trip',
    featured: true,
    title: 'Trip en Armor',
    subtitle: "Plateforme d'avis et d'offres touristiques (BUT2, Agile Scrum)",
    short: "Plateforme d'offres et d'avis touristiques avec rôles utilisateur, réalisée en Agile Scrum.",
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
    aside: {
      title: 'Rôle',
      text: "Front et back sur les modules d'offres, d'avis et de compte."
    },
    repo: 'https://github.com/Elvalio/LPPDT'
  },
  {
    key: 'muse',
    featured: false,
    title: 'Muse',
    subtitle: 'Système de recommandation musicale (BUT3, projet de groupe)',
    short: 'Recommandation musicale : collecte des préférences, analyses de données et prototypes de modèles.',
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
    aside: {
      title: 'Organisation',
      text: 'Équipe de 6 (+ 2 alternants), backlog, rétrospectives, alternance des responsabilités.'
    },
    repo: 'https://github.com/Elvalio/SAE_AIKON'
  },
  {
    key: 'sudoku',
    featured: false,
    title: 'Sudoku',
    subtitle: 'Jeu de Sudoku en ligne de commande (BUT1)',
    short: 'Jeu de Sudoku jouable dans le terminal, écrit en C à partir d’un algorithme en pseudo-code.',
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
    aside: null,
    repo: 'https://github.com/Elvalio/Sudoku'
  },
  {
    key: 'portfolio',
    featured: false,
    title: 'Portfolio',
    subtitle: 'Ce site, en amélioration continue',
    short: 'Site personnel en Vue 3 et Tailwind CSS, déployé sur GitHub Pages.',
    status: 'En production',
    image: PortfolioImg,
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Vue Router'],
    description:
      'Site personnel construit avec Vue 3, Tailwind CSS et Vite, déployé automatiquement sur GitHub Pages à chaque mise à jour. Il présente mon parcours, mes projets et un formulaire de contact.',
    sections: [
      {
        title: 'Fonctionnalités',
        items: [
          'Page d’accueil plein écran, navigation qui apparaît au défilement',
          'Frise chronologique de la formation et des expériences',
          'Fiches projets accessibles par lien direct',
          'Formulaire de contact (Web3Forms)'
        ]
      }
    ],
    aside: {
      title: 'Rôle',
      text: 'Conception, intégration et déploiement.'
    },
    repo: 'https://github.com/Elvalio/Portfolio'
  }
]
