// Contenu du profil. Les textes affichés sont au format { fr, en } ; les
// composants les lisent avec tr() (voir src/i18n).

// Informations de contact et liens, partagés entre les pages
export const contact = {
  name: 'Harry Troulé',
  email: 'harry.troule@ik.me',
  location: { fr: 'Bretagne · Avignon', en: 'Brittany · Avignon' },
  linkedin: 'https://www.linkedin.com/in/harry-troule/',
  github: 'https://github.com/Elvalio'
}

// Clé d'accès Web3Forms du formulaire de contact, à obtenir sur
// https://web3forms.com (elle est envoyée par mail à l'adresse saisie).
// Elle est publique par conception : elle permet seulement d'envoyer des
// messages vers cette adresse. Vide, le formulaire invite à écrire par mail.
export const web3formsAccessKey = 'd3b5ed0d-67e8-42b5-b326-19f72a349f2b'

// Fiche « whoami » de l'accueil. `extra` (seconde phrase) : vide, elle n'est pas affichée.
export const whoami = {
  title: {
    fr: 'Développeur fullstack, formé aux données.',
    en: 'Fullstack developer, trained in data.'
  },
  text: {
    fr: "Je développe des applications web de bout en bout, de la base de données à l'interface. Après un BUT Informatique à Lannion et deux stages de développeur fullstack, je poursuis en Master ILSEN à Avignon.",
    en: "I build web applications end to end, from the database to the interface. After a Bachelor's in Computer Science (BUT) in Lannion and two fullstack developer internships, I'm now doing a Master's (ILSEN) in Avignon."
  },
  extra: {
    fr: 'Ma curiosité ne s’arrête pas au code des cours : homelab auto-hébergé, Stream Deck, Linux configuré au moindre raccourci.',
    en: 'My curiosity goes beyond coursework: a self-hosted homelab, a Stream Deck, and Linux tuned down to the last shortcut.'
  }
}

// Fiche « profil.yml » de l'accueil (clé → valeur)
export const profileYml = [
  { key: { fr: 'statut', en: 'status' }, value: { fr: 'M1 ILSEN · Avignon Université', en: 'M1 ILSEN · Avignon University' } },
  { key: { fr: 'recherche', en: 'seeking' }, value: { fr: 'alternance dev · mi-janv. 2027', en: 'dev work-study · mid-Jan 2027' } },
  { key: { fr: 'secteur', en: 'area' }, value: 'Rennes · Bruz' },
  { key: { fr: 'basé', en: 'based' }, value: { fr: 'Bretagne · Avignon', en: 'Brittany · Avignon' } },
  { key: { fr: 'stages', en: 'internships' }, value: '[Unissia, Jikigai]' }
]

// Recherche d'alternance : bloc de l'accueil, bandeau défilant et `git status`
export const search = {
  open: true,
  command: { fr: 'git checkout -b alternance', en: 'git checkout -b work-study' },
  // Trait d'union insécable (U+2011) : « mi‑janvier » ne se coupe pas en fin de ligne
  headline: {
    fr: 'Je cherche une alternance en développement à Rennes ou Bruz, dès mi‑janvier 2027.',
    en: 'Looking for a developer work-study position in Rennes or Bruz, from mid‑January 2027.'
  },
  text: {
    fr: 'Pour mener mon master en entreprise. Je réponds généralement sous 48 heures.',
    en: "To complete my Master's while working in a company. I usually reply within 48 hours."
  },
  ticker: { fr: 'dès mi-janvier 2027 · Rennes / Bruz', en: 'from mid-January 2027 · Rennes / Bruz' },
  nextStep: {
    fr: 'alternance en développement à Rennes ou Bruz, à partir de mi-janvier 2027',
    en: 'developer work-study in Rennes or Bruz, from mid-January 2027'
  }
}

// Fichier « stack.json » de l'accueil
export const stack = [
  { key: 'front', values: ['Vue.js', 'Tailwind CSS', 'HTML/CSS/JS'] },
  { key: 'back', values: ['Node.js', 'Express', 'PHP', 'API REST'] },
  { key: { fr: 'données', en: 'data' }, values: ['PostgreSQL', 'MongoDB', 'Python (Pandas)'] },
  { key: { fr: 'outils', en: 'tools' }, values: ['Git', 'Linux', 'Docker', 'CI/CD'] },
  { key: { fr: 'langages', en: 'languages' }, values: ['JavaScript', 'Python', 'C', 'SQL'] }
]

// Fiche « ~/.config · À côté du code » de l'accueil. Liste vide : fiche masquée.
export const besideCode = [
  { fr: 'Linux au quotidien', en: 'Linux as my daily driver' },
  { fr: 'Auto-hébergement, homelab', en: 'Self-hosting, homelab' }
]

// Statistiques d'écoute ListenBrainz : JSON public régénéré toutes les 30 min par
// une GitHub Action du dépôt Elvalio/Elvalio (lu côté navigateur, sans clé).
export const music = {
  source: 'https://raw.githubusercontent.com/Elvalio/Elvalio/main/assets/music.json',
  profile: 'https://listenbrainz.org/user/Elvalio/'
}
