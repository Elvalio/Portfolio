# Portfolio

Site personnel présentant mon parcours, mes compétences et mes projets. Développé en Vue 3 avec Vite et Tailwind CSS, déployé automatiquement sur GitHub Pages.

**En ligne :** https://elvalio.github.io/Portfolio/

## Contenu

- **Accueil** — Hero plein écran, bandeau défilant, fiches `whoami`, projets mis en avant, `stack.json` et recherche d'alternance
- **Projets** — index façon `ls -la`, onglets de filtre et fiche « README » de chaque projet, accessible par lien direct (`/projects?project=soleur`)
- **Formation** — formation et expériences, sous forme de frise dessinée comme un graphe Git
- **Contact** — fenêtre façon terminal (Web3Forms), accessible depuis la navigation, l'accueil, la frise et le pied de page

## Design

Direction « Dossier × Terminal », en thème sombre : fiches numérotées avec onglets de classeur, tampons de statut, ombres portées dures, habillées de références terminal et Git. Les couleurs, polices et ombres sont des tokens Tailwind (`tailwind.config.cjs`) ; les polices Archivo, JetBrains Mono et Inter viennent de Google Fonts. Les animations (bandeau, curseur, halo) s'arrêtent si le visiteur a demandé de réduire les animations.

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

- `projects.js` — liste des projets (`featured` : grande fiche sur l'accueil ; `category` : onglet de filtre)
- `timeline.js` — étapes de la frise Formation (`type` et `lane` placent l'étape sur le graphe ; `ticker` l'ajoute au bandeau défilant)
- `profile.js` — coordonnées, textes de l'accueil (`whoami`, `profil.yml`, `stack.json`, « À côté du code »), recherche d'alternance et clé du formulaire de contact. Un texte laissé vide n'est pas affiché.

Le CV téléchargeable est `public/CV.pdf`.

## Formulaire de contact

Le formulaire envoie les messages via [Web3Forms](https://web3forms.com), sans bibliothèque ni configuration au build. La clé d'accès s'obtient sur leur site en saisissant l'adresse qui doit recevoir les messages, puis se colle dans `web3formsAccessKey` (`src/data/profile.js`). Cette clé est publique par conception : elle permet seulement d'envoyer des messages vers cette adresse. Sans clé, le formulaire invite à écrire directement par mail.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml` : build Vite puis publication du dossier `dist/` sur la branche `gh-pages`.

Le site étant servi depuis un sous-chemin, la base est fixée à `/Portfolio/` dans `vite.config.js`. Le build copie `index.html` en `404.html` pour que les liens directs vers une page (`/Portfolio/projects`) fonctionnent sur GitHub Pages.

## Structure

```
src/
  components/   NavBar, Footer, Marquee, ContactModal, Fiche, Stamp, TagList, PromptLabel, ProjectCard
  pages/        Home, Projects, Education
  data/         contenu du site (projets, frise, profil)
  router/       définition des routes
  assets/       styles et images
```
