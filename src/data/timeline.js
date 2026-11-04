// Frise du parcours, dans l'ordre chronologique.
// variant : observation | done | experience | active (définit couleurs et badge)
// icon : eye | school | bolt
export const timeline = [
  {
    variant: 'observation',
    icon: 'eye',
    badge: 'Observation',
    title: "Stage d'observation",
    date: 'Avril 2022 (1 semaine)',
    place: '🏢 GigaHertz (maintenant LDLC) - Trégueux',
    skills: [
      { title: 'Maintenance informatique' },
      { title: 'Assistance aux ventes' },
      { title: 'Gestion des contrats' }
    ]
  },
  {
    variant: 'done',
    icon: 'school',
    badge: 'Obtenu',
    title: 'Baccalauréat Général',
    date: '2020 - 2023',
    place: '🏫 Lycée St Joseph - Lamballe',
    text: '<strong>Spécialités :</strong> Mathématiques / Numérique et Sciences Informatiques'
  },
  {
    variant: 'done',
    icon: 'school',
    badge: 'Obtenu',
    title: 'BUT Informatique',
    date: '2023 - 2026',
    place: '🏫 IUT de Lannion',
    text: "Parcours « Réalisation d'applications » en 2ᵉ année, puis « Administration, gestion et exploitation des données » en 3ᵉ année."
  },
  {
    variant: 'experience',
    icon: 'bolt',
    badge: 'Expérience',
    title: 'Développeur Web Fullstack',
    date: 'Juillet 2025 - Août 2025',
    place: '💼 Unissia | Plérin',
    skills: [
      { title: 'Back-End', detail: 'API REST Node.js, Express, MongoDB' },
      { title: 'Front-End', detail: 'Vue.js, Tailwind CSS, intégration de l’API' },
      { title: 'Git & GitHub', detail: 'Versionnement, branches, pull requests' }
    ]
  },
  {
    variant: 'experience',
    icon: 'bolt',
    badge: 'Expérience',
    title: 'Développeur Fullstack — Stage de fin de BUT',
    date: 'Mai 2026 - Août 2026',
    place: '💼 Jikigai | Télétravail et coworking',
    skills: [
      { title: 'Développement', detail: 'Front-end, back-end, base Supabase et CI/CD sur la plateforme Soleur' },
      { title: 'Agents IA', detail: 'Plugin Claude Code qui orchestre les agents de Soleur' },
      { title: 'Méthode', detail: 'Sprints sur Linear, veille et analyse concurrentielle' }
    ]
  },
  {
    variant: 'active',
    icon: 'school',
    badge: 'En cours',
    title: 'Master Informatique — M1 ILSEN',
    date: 'Septembre 2026 - Aujourd’hui',
    place: '🏫 Avignon Université (CERI)',
    text: 'Parcours Ingénierie du Logiciel de la Société Numérique.'
  }
]
