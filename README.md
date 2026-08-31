# Portail national des IUT Informatique

Site vitrine bilingue (FR/EN) des départements informatique des IUT : présentation du DUT, carte des établissements, débouchés, poursuites d’études, témoignages et ressources.

Projet scolaire réalisé en groupe de trois de novembre à décembre 2018 (HTML/CSS/JS), entièrement refondu en 2026 sur une base statique moderne : mise en page unique, contenu partagé entre les langues, recherche plein texte, accessibilité et performance vérifiées en intégration continue.

## Stack

- **[Astro](https://astro.build)** — génération statique, zéro JavaScript côté client hors interactions (menu, retour en haut, recherche).
- **Routage i18n natif** — `/fr/…` (défaut) et `/en/…`, slugs traduits, balises `hreflang` et sitemap générés.
- **[Pagefind](https://pagefind.app)** — recherche plein texte indexée au build (`astro-pagefind`), par langue.
- **Images optimisées** (`astro:assets`, WebP responsive) et **polices auto-hébergées** (Fraunces + Source Sans 3 via `@fontsource`).
- **Qualité** : [oxlint](https://oxc.rs/docs/guide/usage/linter) (lint des `.ts`, `.mjs` et du code des `.astro`), [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (formatage — les fichiers `.astro` ne sont pas encore pris en charge), `astro check`. Pour un audit ponctuel : `bunx pa11y-ci` (accessibilité) ou l’onglet Lighthouse de Chrome.
- **Dépendances** : [Bun](https://bun.sh) (gestionnaire de paquets et lanceur de scripts), [Renovate](https://docs.renovatebot.com) (groupes par écosystème, automerge des mineures de l’outillage après CI verte).

## Prérequis

- [Bun](https://bun.sh) ≥ 1.2 (la version exacte est dans `packageManager`) — gestionnaire de paquets et lanceur de scripts.
- Node.js ≥ 26.8.1 (voir `.node-version`) — moteur d’exécution d’Astro et des outils (`bun run` lance les binaires avec leur shebang `node`).

## Commandes

| Commande                  | Rôle                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `bun install`             | Installe les dépendances.                                                                               |
| `bun run dev`             | Serveur de développement sur `http://localhost:4321` (la recherche utilise le dernier index construit). |
| `bun run build`           | Build de production dans `dist/` + index Pagefind + sitemap.                                            |
| `bun run preview`         | Prévisualise `dist/`.                                                                                   |
| `bun run check`           | Vérification des types et des composants (`astro check`).                                               |
| `bun run lint` / `format` | oxlint / oxfmt ; `format:check` en CI.                                                                  |

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

### Ajouter ou renommer une page

1. Déclarer la clé dans `src/i18n/pages.ts` (`pageKeys`, `pages` avec slug et libellé FR/EN, et la placer dans `navigation`).
2. Créer `src/pages/fr/<slug-fr>.astro` et `src/pages/en/<slug-en>.astro` en utilisant le layout `ContentPage` (voir `src/pages/fr/entreprises.astro` pour un exemple).
3. Les liens internes se font toujours via `localePath(locale, clé)` — jamais en dur — pour rester compatibles avec le sélecteur de langue et un déploiement en sous-dossier.

## Déploiement

Le site est purement statique (`dist/`). Deux variables d’environnement pilotent les URL absolues :

- `SITE_URL` — origine publique (défaut `https://quentinmcq.github.io`) ;
- `BASE_PATH` — chemin de base, par ex. `/university-website/` pour un site de projet GitHub Pages (défaut `/`).

Exemple GitHub Pages : `BASE_PATH=/university-website/ bun run build`, puis publier `dist/`.

## Intégration continue

Le workflow `.github/workflows/ci.yml` exécute, sur chaque push et pull request : oxfmt (vérification), oxlint, `astro check` et le build, puis publie `dist/` en artefact. Renovate s’appuie sur cette CI pour fusionner automatiquement les mises à jour mineures de l’outillage.

## Historique

- **2018** — site d’origine : 26 pages HTML dupliquant en-tête/navigation/pied de page, Bootstrap 4.1 et jQuery vendorisés (non utilisés en pratique), image-map jQuery pour la carte.
- **2026** — refonte : Astro + i18n, contenu sémantique, carte responsive sans jQuery, recherche Pagefind, design system CSS, outillage qualité et Renovate.
