# Portfolio

Site personnel présentant mon parcours, mes compétences et mes projets. Développé en Vue 3 avec Vite et Tailwind CSS, déployé automatiquement sur GitHub Pages.

**En ligne :** https://elvalio.github.io/Portfolio/

## Contenu

- **Accueil** — présentation et compétences techniques
- **Projets** — fiches détaillées des réalisations, avec les technologies associées
- **Parcours** — formation et expériences, sous forme de timeline

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

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml` : build Vite puis publication du dossier `dist/` sur la branche `gh-pages`.

Le site étant servi depuis un sous-chemin, la base est fixée à `/Portfolio/` dans `vite.config.js` et dans l'historique du routeur. À changer en cas de déploiement sur un domaine propre.

## Structure

```
src/
  components/   NavBar, Footer, ProjectCard
  pages/        Home, Projects, Education, Contact
  router/       définition des routes
  assets/       styles, images et logos des technologies
```
