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

export const skills = [
  { icon: '🎨', title: 'Front-end', detail: 'Vue.js, Tailwind CSS, HTML/CSS/JS' },
  { icon: '⚙️', title: 'Back-end', detail: 'Node.js, Express, PHP, API REST' },
  { icon: '🗄️', title: 'Données', detail: 'PostgreSQL, MongoDB, Python (Pandas)' },
  { icon: '🛠️', title: 'Outils', detail: 'Git, Linux, Docker, CI/CD' }
]
