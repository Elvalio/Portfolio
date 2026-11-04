# Portfolio

Site personnel présentant mon parcours, mes compétences et mes projets. Développé en Vue 3 avec Vite et Tailwind CSS, déployé automatiquement sur GitHub Pages.

**En ligne :** https://elvalio.github.io/Portfolio/

## Contenu

- **Accueil** — présentation, projets mis en avant et compétences
- **Projets** — fiches détaillées des réalisations, accessibles par lien direct (`/projects?project=soleur`)
- **Formation** — formation et expériences, sous forme de frise chronologique
- **Contact** — formulaire (Web3Forms) accessible depuis l'accueil et le pied de page

## Stack

| | |
|---|---|
| Framework | Vue 3 |
| Build | Vite 8 |
| Styles | Tailwind CSS, PostCSS |
| Routage | Vue Router 4 |
| Formulaire de contact | Web3Forms |

## Installation

```bash
npm install
npm run dev
```

Autres commandes :

```bash
npm run build     # build de production dans dist/
npm run preview   # prévisualisation du build
```

## Mettre à jour le contenu

Le contenu est séparé de la mise en page, dans `src/data/` :

- `projects.js` — liste des projets (le champ `featured` les affiche sur l'accueil)
- `timeline.js` — étapes de la frise Formation
- `profile.js` — coordonnées, liens, compétences et clé du formulaire de contact

Le CV téléchargeable est `public/CV.pdf`.

## Formulaire de contact

Le formulaire envoie les messages via [Web3Forms](https://web3forms.com), sans bibliothèque ni configuration au build. La clé d'accès s'obtient sur leur site en saisissant l'adresse qui doit recevoir les messages, puis se colle dans `web3formsAccessKey` (`src/data/profile.js`). Cette clé est publique par conception : elle permet seulement d'envoyer des messages vers cette adresse. Sans clé, le formulaire invite à écrire directement par mail.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml` : build Vite puis publication du dossier `dist/` sur la branche `gh-pages`.

Le site étant servi depuis un sous-chemin, la base est fixée à `/Portfolio/` dans `vite.config.js`. Le build copie `index.html` en `404.html` pour que les liens directs vers une page (`/Portfolio/projects`) fonctionnent sur GitHub Pages.

## Structure

```
src/
  components/   NavBar, Footer, ProjectCard, ContactModal
  pages/        Home, Projects, Education
  data/         contenu du site (projets, frise, profil)
  router/       définition des routes
  assets/       styles, images et logos des technologies
```
