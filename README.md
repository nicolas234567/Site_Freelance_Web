# Nicolas Bregevin — Portfolio Développeur Web Freelance

> Portfolio personnel optimisé pour les Core Web Vitals, le SEO et l’accessibilité.

Le site est optimisé à 100/100 dans les quatre catégories principales de Lighthouse, aussi bien sur mobile que sur desktop.

**https://nicolasbregevin.com/**

---

## Déploiement (Netlify)
```
Déploiement sur Netlify
Domaine et DNS sur CloudFlare     
```

## Stack technique

- HTML5 statique
- CSS3 (Flexbox + Grid + responsive)
- Netlify Forms — gestion du formulaire de contact

---

## Structure des fichiers

```
Site_Freelance_Web/
├── index.html              ← Page principale
├── merci.html              ← Confirmation formulaire (noindex)
├── style.css               ← Styles globaux
├── sitemap.xml             ← Sitemap Google
├── robots.txt              ← Instructions robots
└── app/
    ├── favicon.ico
    └── images/
        ├── apercu_foodtruck.webp     ← Image optimisée WebP
        ├── apercu_foodtruck.png      ← Fallback PNG
        ├── apercu_restaurant.webp
        ├── apercu_restaurant.png
        ├── apercu_garage.webp
        ├── apercu_garage.png
        └── og-preview.webp       
```

---

## Optimisations SEO

| Catégorie | Détail |
|-----------|--------|
| Balises meta | `title`, `description`, `author`, `robots`, `theme-color`, canonical |
| Réseaux sociaux | Open Graph + Twitter Card avec image 1200×630px |
| Données structurées | Schema.org `Person` + `ProfessionalService`, `CreativeWork` sur chaque projet |
| Images | Converties en WebP (optimisation taille de -86% à -98%), balise `<picture>` avec fallback PNG |
| Performance | `loading="lazy"`, `width`/`height` explicites, CSS non-bloquant, `preconnect` CDN |
| Sémantique | `<main>`, `<article>`, `aria-label`, `aria-labelledby`, `itemprop` |
| Indexation | `sitemap.xml`, `robots.txt`, `merci.html` en `noindex` |

---

## Personnalisation rapide

- **Projets** : modifier les `<article>` dans la section `#portfolio` de `index.html`
- **Texte À propos** : modifier le `<p>` dans la section `#about`
- **Technologies** : ajouter/retirer des `<div class="tech-item">` dans `#technologies`
- **Couleurs** : variables dans `style.css` — couleur principale `#1a2f3f`, accent `#00bcd4`
- **Sitemap** : mettre à jour `<lastmod>` à chaque modification du site

---

## About

Portfolio vitrine pour développeur web freelance en HTML statique.

https://nicolasbregevin.com/
