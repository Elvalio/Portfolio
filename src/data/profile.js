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
  extra: ''
}

// Fiche « profil.yml » de l'accueil (clé → valeur)
export const profileYml = [
  { key: 'statut', value: 'M1 ILSEN · Avignon Université' },
  { key: 'recherche', value: 'alternance dev · janv. 2027' },
  { key: 'basé', value: 'Bretagne · Avignon' },
  { key: 'stages', value: '[Unissia, Jikigai]' }
]

// Recherche d'alternance : bloc de l'accueil, bandeau défilant et `git status`
export const search = {
  open: true,
  command: 'git checkout -b alternance',
  headline: 'Je cherche une alternance en développement, dès janvier 2027.',
  text: 'Pour mener mon master en entreprise. Je réponds généralement sous 48 heures.',
  ticker: 'dès janvier 2027',
  nextStep: 'alternance en développement, à partir de janvier 2027'
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
