# Portfolio Obsidian & Champagne

Portfolio React + Vite, avec fichiers séparés et design responsive.

## Installation
```bash
npm install
npm run dev
```

## Personnalisation
- Modifie les informations dans `src/data.js` : nom, coordonnées, profil, projets, formation, expérience et compétences.
- Ajoute ton portrait dans `public/portrait.jpg`, puis remplace le bloc `.portrait-placeholder` dans `src/components/Hero.jsx` par :
  `<img className="portrait-image" src="/portrait.jpg" alt="Portrait d'Ariane" />`
- Ajoute ton CV PDF dans `public/cv-ariane.pdf`, puis ajoute un lien de téléchargement dans la navigation ou la section contact.
- Remplace les liens LinkedIn et GitHub de démonstration dans `src/data.js`.
- Vérifie les intitulés, technologies et dates avant publication : certains éléments sont des champs à personnaliser.

## Production
```bash
npm run build
npm run preview
```
