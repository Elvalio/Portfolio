# Portfolio

Site personnel présentant mon parcours, mes compétences et mes projets. Développé en Vue 3 avec Vite et Tailwind CSS, déployé automatiquement sur GitHub Pages.

**En ligne :** https://elvalio.github.io/Portfolio/

## Contenu

- **Accueil** — présentation, projets mis en avant et compétences
- **Projets** — fiches détaillées des réalisations, accessibles par lien direct (`/projects?project=soleur`)
- **Formation** — formation et expériences, sous forme de frise chronologique
- **Contact** — formulaire (EmailJS) accessible depuis l'accueil et le pied de page

## Stack

| | |
|---|---|
| Framework | Vue 3 |
| Build | Vite 5 |
| Styles | Tailwind CSS, PostCSS |
| Routage | Vue Router 4 |
| Formulaire de contact | EmailJS |

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
- `profile.js` — coordonnées, liens et compétences

Le CV téléchargeable est `public/CV.pdf`.

## Formulaire de contact

Le formulaire utilise EmailJS. En local, copier `.env.example` en `.env` et renseigner les trois clés. Pour le site en ligne, les mêmes clés doivent être ajoutées comme secrets du dépôt (Settings > Secrets and variables > Actions) : `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. Sans ces clés, le formulaire invite à écrire directement par mail.

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
