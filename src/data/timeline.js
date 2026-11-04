// Frise du parcours, du plus ancien au plus récent, dessinée comme un graphe Git.
// Les textes affichés sont au format { fr, en }.
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
    title: { fr: 'Baccalauréat Général', en: 'High school diploma (Baccalauréat)' },
    dates: '2020 → 2023',
    commit: {
      fr: 'diplôme(lycée): spécialités maths + NSI',
      en: 'diploma(high school): maths + computer science majors'
    },
    text: {
      fr: 'Lycée St Joseph, Lamballe · spécialités Mathématiques et Numérique et Sciences Informatiques.',
      en: 'Lycée St Joseph, Lamballe · majors in Mathematics and Digital & Computer Sciences (NSI).'
    },
    stamp: { fr: 'Obtenu', en: 'Earned' }
  },
  {
    key: 'observation',
    type: 'observation',
    lane: 'pro',
    code: 'OB-01',
    title: { fr: "Stage d'observation", en: 'Work-observation internship' },
    dates: { fr: 'avril 2022 · 1 semaine', en: 'April 2022 · 1 week' },
    commit: {
      fr: 'observation(GigaHertz): premier pied en entreprise',
      en: 'observation(GigaHertz): first steps in a company'
    },
    text: {
      fr: "GigaHertz (aujourd'hui LDLC), Trégueux · maintenance informatique, assistance aux ventes, gestion des contrats.",
      en: 'GigaHertz (now LDLC), Trégueux · IT maintenance, sales support, contract management.'
    },
    stamp: { fr: 'Effectué', en: 'Completed' }
  },
  {
    key: 'but',
    type: 'diplome',
    lane: 'formation',
    code: 'FO-02',
    title: { fr: 'BUT Informatique', en: "Bachelor's in Computer Science (BUT)" },
    dates: '2023 → 2026',
    commit: {
      fr: 'diplôme(IUT Lannion): applications, puis données',
      en: 'diploma(IUT Lannion): applications, then data'
    },
    text: {
      fr: "IUT de Lannion · parcours « Réalisation d'applications » en 2ᵉ année, puis « Administration, gestion et exploitation des données » en 3ᵉ année.",
      en: 'IUT de Lannion · “Application development” track in 2nd year, then “Data administration, management and exploitation” in 3rd year.'
    },
    stamp: { fr: 'Obtenu', en: 'Earned' },
    ticker: {
      fr: 'BUT Informatique · IUT de Lannion · obtenu',
      en: 'BUT in Computer Science · IUT de Lannion · earned'
    }
  },
  {
    key: 'unissia',
    type: 'experience',
    lane: 'pro',
    code: 'EX-01',
    title: { fr: 'Développeur web fullstack · Unissia', en: 'Fullstack web developer · Unissia' },
    dates: { fr: 'juillet → août 2025', en: 'July → August 2025' },
    commit: { fr: 'stage(Unissia): Plérin', en: 'internship(Unissia): Plérin' },
    items: [
      { fr: 'API REST avec Node.js, Express et MongoDB', en: 'REST API with Node.js, Express and MongoDB' },
      { fr: "interfaces Vue.js et Tailwind CSS branchées sur l'API", en: 'Vue.js and Tailwind CSS interfaces connected to the API' },
      { fr: 'travail en branches et pull requests sur GitHub', en: 'branch and pull-request workflow on GitHub' }
    ],
    stamp: { fr: 'Terminé', en: 'Done' },
    ticker: { fr: 'stage · Unissia · Plérin · 2025', en: 'internship · Unissia · Plérin · 2025' }
  },
  {
    key: 'jikigai',
    type: 'experience',
    lane: 'pro',
    code: 'EX-02',
    title: { fr: 'Développeur fullstack · Jikigai', en: 'Fullstack developer · Jikigai' },
    dates: { fr: 'mai → août 2026', en: 'May → August 2026' },
    commit: {
      fr: 'stage(Jikigai): fin de BUT · télétravail et coworking',
      en: 'internship(Jikigai): end of degree · remote and coworking'
    },
    items: [
      { fr: 'front, back, base Supabase et CI/CD sur la plateforme Soleur', en: 'front end, back end, Supabase database and CI/CD on the Soleur platform' },
      { fr: 'plugin Claude Code qui orchestre les agents', en: 'Claude Code plugin that orchestrates the agents' },
      { fr: 'sprints sur Linear, veille et analyse concurrentielle', en: 'sprints on Linear, market watch and competitive analysis' }
    ],
    project: 'soleur',
    stamp: { fr: 'Terminé', en: 'Done' },
    ticker: { fr: 'stage · Jikigai · Soleur · 2026', en: 'internship · Jikigai · Soleur · 2026' }
  },
  {
    key: 'm1',
    type: 'en-cours',
    lane: 'formation',
    code: '(HEAD → main)',
    title: { fr: 'Master Informatique · M1 ILSEN', en: "Master's in Computer Science · M1 ILSEN" },
    dates: { fr: 'sept. 2026 →', en: 'Sept 2026 →' },
    commit: {
      fr: 'merge: formation + expériences → master',
      en: 'merge: education + experience → master'
    },
    text: {
      fr: 'Avignon Université (CERI) · parcours Ingénierie du Logiciel de la Société Numérique.',
      en: 'Avignon University (CERI) · Software Engineering for the Digital Society track.'
    },
    stamp: { fr: 'En cours', en: 'In progress' },
    ticker: {
      fr: 'M1 ILSEN · Avignon Université · en cours',
      en: 'M1 ILSEN · Avignon University · in progress'
    }
  }
]
