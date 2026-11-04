// Informations de contact et liens, partagés entre les pages
export const contact = {
  name: 'Harry Troulé',
  email: 'harry.troule@ik.me',
  location: 'Bretagne · Avignon',
  linkedin: 'https://www.linkedin.com/in/harry-troule/',
  github: 'https://github.com/Elvalio'
}

// Clé d'accès Web3Forms du formulaire de contact, à obtenir sur
// https://web3forms.com (elle est envoyée par mail à l'adresse saisie).
// Elle est publique par conception : elle permet seulement d'envoyer des
// messages vers cette adresse. Vide, le formulaire invite à écrire par mail.
export const web3formsAccessKey = 'd3b5ed0d-67e8-42b5-b326-19f72a349f2b'

// Fiche « whoami » de l'accueil. `extra` (seconde phrase) : laissée vide, elle
// n'est pas affichée.
export const whoami = {
  title: 'Développeur fullstack, formé aux données.',
  text: "Je développe des applications web de bout en bout, de la base de données à l'interface. Après un BUT Informatique à Lannion et deux stages de développeur fullstack, je poursuis en Master ILSEN à Avignon.",
  extra: "Curieux de nature, je bricole aussi en dehors des cours : homelab auto-hébergé, Stream Deck, et tout ce qui peut s'automatiser sous Linux."
}

// Statistiques d'écoute ListenBrainz : JSON public régénéré toutes les 6 h par
// une GitHub Action du dépôt Elvalio/Elvalio (lu côté navigateur, sans clé).
export const music = {
  source: 'https://raw.githubusercontent.com/Elvalio/Elvalio/main/assets/music.json',
  profile: 'https://listenbrainz.org/user/Elvalio/'
}

// Fiche « profil.yml » de l'accueil (clé → valeur)
export const profileYml = [
  { key: 'statut', value: 'M1 ILSEN · Avignon Université' },
  { key: 'recherche', value: 'alternance dev · mi-janv. 2027' },
  { key: 'secteur', value: 'Rennes · Bruz' },
  { key: 'basé', value: 'Bretagne · Avignon' },
  { key: 'stages', value: '[Unissia, Jikigai]' }
]

// Recherche d'alternance : bloc de l'accueil, bandeau défilant et `git status`
export const search = {
  open: true,
  command: 'git checkout -b alternance',
  // Trait d'union insécable (U+2011) : « mi‑janvier » ne se coupe pas en fin de ligne
  headline: 'Je cherche une alternance en développement à Rennes ou Bruz, dès mi‑janvier 2027.',
  text: 'Pour mener mon master en entreprise. Je réponds généralement sous 48 heures.',
  ticker: 'dès mi-janvier 2027 · Rennes / Bruz',
  nextStep: 'alternance en développement à Rennes ou Bruz, à partir de mi-janvier 2027'
}

// Fichier « stack.json » de l'accueil
export const stack = [
  { key: 'front', values: ['Vue.js', 'Tailwind CSS', 'HTML/CSS/JS'] },
  { key: 'back', values: ['Node.js', 'Express', 'PHP', 'API REST'] },
  { key: 'données', values: ['PostgreSQL', 'MongoDB', 'Python (Pandas)'] },
  { key: 'outils', values: ['Git', 'Linux', 'Docker', 'CI/CD'] },
  { key: 'langages', values: ['JavaScript', 'Python', 'C', 'SQL'] }
]

// Fiche « ~/.config · À côté du code » de l'accueil. Liste vide : fiche masquée.
export const besideCode = [
  'Linux au quotidien',
  'Auto-hébergement, homelab'
]
