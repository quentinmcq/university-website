# Portail national des IUT Informatique

Site vitrine bilingue (FR/EN) des départements informatiques des IUT : présentation du DUT, carte des établissements, débouchés, poursuites d’études, témoignages et ressources.

Projet scolaire réalisé en groupe de trois de novembre à décembre 2018 (HTML/CSS/JS), entièrement refondu en 2026 sur une base statique moderne.

## Stack

- **[Astro](https://astro.build)** — génération statique, zéro JavaScript côté client hors interactions (menu, retour en haut, recherche).
- **Routage i18n natif** — `/fr/…` (défaut) et `/en/…`, slugs traduits, balises `hreflang` et sitemap générés.
- **[Pagefind](https://pagefind.app)** — recherche plein texte indexée au build (`astro-pagefind`), par langue.
- **Images optimisées** (`astro:assets`, WebP responsive) et **polices auto-hébergées** (Fraunces + Source Sans 3 via `@fontsource`).
- **Qualité** : [oxlint](https://oxc.rs/docs/guide/usage/linter) (lint des `.ts`, `.mjs` et du code des `.astro`), [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (formatage — les fichiers `.astro` ne sont pas encore pris en charge), `astro check`.
- **Dépendances** : [Bun](https://bun.sh) (gestionnaire de paquets), [Renovate](https://docs.renovatebot.com) (outil de mise à jour de dépendances automatiques).

## Prérequis

- Bun ≥ 1.4 (voir `packageManager`).
- Node.js ≥ 26.8.1 (voir `.node-version`).

## Commandes

| Commande                  | Rôle                                                      |
| ------------------------- | --------------------------------------------------------- |
| `bun install`             | Installe les dépendances.                                 |
| `bun run dev`             | Serveur de développement sur `http://localhost:4321`.     |
| `bun run build`           | Build de production dans `dist/`.                         |
| `bun run preview`         | Prévisualise `dist/`.                                     |
| `bun run check`           | Vérification des types et des composants (`astro check`). |
| `bun run lint` / `format` | oxlint / oxfmt ; `format:check` en CI.                    |

## Structure

```
src/
├── assets/            # images optimisées au build (logo, photos, cartes)
├── components/        # en-tête, navigation, sélecteur de langue, recherche, carte cliquable, pied de page…
├── data/iut-map.ts    # départements positionnés sur les cartes (coordonnées + liens)
├── i18n/
│   ├── pages.ts       # registre des pages : clé → slug + libellé par langue, structure de navigation
│   ├── ui.ts          # chaînes d’interface FR/EN
│   └── utils.ts       # localePath(), publicPath(), locale courante
├── layouts/
│   ├── BaseLayout.astro    # <head>, en-tête, navigation, pied de page
│   └── ContentPage.astro   # page de contenu : titre + colonne de texte
├── pages/
│   ├── fr/            # une page .astro par contenu (slug = nom de fichier)
│   └── en/
└── styles/global.css  # jetons de design et composants (CSS natif, pas de framework)
public/                # favicon, robots.txt, documents téléchargeables (enquêtes .ppt)
```

## Intégration continue

Le workflow `.github/workflows/ci.yml` exécute, sur chaque push et pull request : oxfmt (vérification), oxlint, `astro check` et le build, puis publie `dist/` en artefact. Renovate s’appuie sur cette CI pour fusionner automatiquement les mises à jour mineures de l’outillage.

## Historique

- **2018** — site d’origine : 26 pages HTML dupliquant en-tête/navigation/pied de page, Bootstrap 4.1 et jQuery vendorisés (non utilisés en pratique), image-map jQuery pour la carte.
- **2026** — refonte : Astro + i18n, contenu sémantique, carte responsive sans jQuery, recherche Pagefind, design system CSS, outillage qualité et Renovate.
