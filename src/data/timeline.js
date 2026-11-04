// Frise du parcours, du plus ancien au plus récent, dessinée comme un graphe Git.
//
// type  : diplome | observation | experience | en-cours (repère et couleurs)
// lane  : formation | pro (branche du graphe). La branche « pro » s'ouvre à la
//         première étape pro et fusionne dans la dernière étape (en cours).
// code  : numéro de fiche affiché dans l'en-tête
// commit: ligne façon message de commit
// stamp : tampon de statut
// ticker: texte du bandeau défilant de l'accueil (absent : pas dans le bandeau)
export const timeline = [
  {
    key: 'bac',
    type: 'diplome',
    lane: 'formation',
    code: 'FO-01',
    title: 'Baccalauréat Général',
    dates: '2020 → 2023',
    commit: 'diplôme(lycée): spécialités maths + NSI',
    text: 'Lycée St Joseph, Lamballe · spécialités Mathématiques et Numérique et Sciences Informatiques.',
    stamp: 'Obtenu'
  },
  {
    key: 'observation',
    type: 'observation',
    lane: 'pro',
    code: 'OB-01',
    title: "Stage d'observation",
    dates: 'avril 2022 · 1 semaine',
    commit: 'observation(GigaHertz): premier pied en entreprise',
    text: "GigaHertz (aujourd'hui LDLC), Trégueux · maintenance informatique, assistance aux ventes, gestion des contrats.",
    stamp: 'Effectué'
  },
  {
    key: 'but',
    type: 'diplome',
    lane: 'formation',
    code: 'FO-02',
    title: 'BUT Informatique',
    dates: '2023 → 2026',
    commit: 'diplôme(IUT Lannion): applications, puis données',
    text: "IUT de Lannion · parcours « Réalisation d'applications » en 2ᵉ année, puis « Administration, gestion et exploitation des données » en 3ᵉ année.",
    stamp: 'Obtenu',
    ticker: 'BUT Informatique · IUT de Lannion · obtenu'
  },
  {
    key: 'unissia',
    type: 'experience',
    lane: 'pro',
    code: 'EX-01',
    title: 'Développeur web fullstack · Unissia',
    dates: 'juillet → août 2025',
    commit: 'stage(Unissia): Plérin',
    items: [
      'API REST avec Node.js, Express et MongoDB',
      "interfaces Vue.js et Tailwind CSS branchées sur l'API",
      'travail en branches et pull requests sur GitHub'
    ],
    stamp: 'Terminé',
    ticker: 'stage · Unissia · Plérin · 2025'
  },
  {
    key: 'jikigai',
    type: 'experience',
    lane: 'pro',
    code: 'EX-02',
    title: 'Développeur fullstack · Jikigai',
    dates: 'mai → août 2026',
    commit: 'stage(Jikigai): fin de BUT · télétravail et coworking',
    items: [
      'front, back, base Supabase et CI/CD sur la plateforme Soleur',
      'plugin Claude Code qui orchestre les agents',
      'sprints sur Linear, veille et analyse concurrentielle'
    ],
    project: 'soleur',
    stamp: 'Terminé',
    ticker: 'stage · Jikigai · Soleur · 2026'
  },
  {
    key: 'm1',
    type: 'en-cours',
    lane: 'formation',
    code: '(HEAD → main)',
    title: 'Master Informatique · M1 ILSEN',
    dates: 'sept. 2026 →',
    commit: 'merge: formation + expériences → master',
    text: 'Avignon Université (CERI) · parcours Ingénierie du Logiciel de la Société Numérique.',
    stamp: 'En cours',
    ticker: 'M1 ILSEN · Avignon Université · en cours'
  }
]
