# Portfolio (Vue 3 + Tailwind)

Site scaffoldé avec Vite + Vue 3 + Tailwind CSS. Couleurs personnalisées basées sur la palette fournie.

Installation:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Déployer sur GitHub Pages (simple):

1. Mettre le contenu du dossier `dist/` sur la branche `gh-pages` (ou configurer GitHub Actions).
2. Voir la doc GitHub Pages pour les options d’hébergement.

Remarques:
- Remplacez `public/CV.pdf` par votre CV réel.
- Complétez la page `Home` et `Contact` avec vos coordonnées exactes et détails LinkedIn.

Vue DevTools
------------

Pour faciliter le développement, installez l'extension Vue Devtools (Chrome ou Firefox) et ouvrez-la lorsque le serveur est en mode développement.

- Chrome Web Store: https://chrome.google.com/webstore/search/Vue%20Devtools
- Firefox Add-ons: https://addons.mozilla.org/en-US/firefox/search/?q=Vue%20Devtools

L'application active les DevTools automatiquement en mode développement. Si vous utilisez le projet localement :

```bash
npm run dev
```

Puis ouvrez les DevTools du navigateur et sélectionnez l'onglet "Vue".

Si vous préférez ne pas utiliser l'extension, je peux ajouter une configuration Docker ou un raccourci pour exécuter une version empaquetée des DevTools dans un conteneur.
