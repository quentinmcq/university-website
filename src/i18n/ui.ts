import type { Locale } from './pages'

export const ui = {
  fr: {
    siteName: 'Portail national des IUT Informatique',
    siteShortName: 'IUT Informatique',
    tagline: 'Le portail des départements informatique des IUT de France',
    skipToContent: 'Aller au contenu',
    mainNav: 'Navigation principale',
    menu: 'Menu',
    languageNav: 'Langue',
    languageName: 'Français',
    teacherAccess: 'Accès enseignant',
    searchPlaceholder: 'Rechercher sur le portail…',
    searchLabel: 'Recherche',
    backToTop: 'Retour en haut',
    footerContact: 'Pour signaler un problème ou faire des remarques et suggestions sur ce site :',
    footerSource: 'Code source du site',
    footerCredits: 'Projet étudiant réalisé à l’IUT en 2018 — refonte 2026.',
    exploreTitle: 'Explorer le portail',
    ileDeFrance: 'Île-de-France',
    mapListTitle: 'Liste des départements informatique',
    mapFranceAlt: 'Carte de France positionnant les départements informatique des IUT',
    mapParisAlt: 'Carte de l’Île-de-France positionnant les départements informatique des IUT',
    mapHint:
      'Chaque point de la carte est un lien vers le site du département. La liste ci-dessous reprend tous les établissements.',
    homeHeading: 'Bienvenue sur le portail des « IUT info »',
    homePhotoAlt: 'Bâtiment d’un IUT, vu de l’extérieur',
  },
  en: {
    siteName: 'National portal of IUT computer science departments',
    siteShortName: 'IUT Computer Science',
    tagline: 'The portal of the computer science departments of French IUTs',
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    menu: 'Menu',
    languageNav: 'Language',
    languageName: 'English',
    teacherAccess: 'Teacher access',
    searchPlaceholder: 'Search the portal…',
    searchLabel: 'Search',
    backToTop: 'Back to top',
    footerContact: 'To report a problem or make comments and suggestions about this site:',
    footerSource: 'Site source code',
    footerCredits: 'Student project carried out at the IUT in 2018 — redesigned in 2026.',
    exploreTitle: 'Explore the portal',
    ileDeFrance: 'Île-de-France',
    mapListTitle: 'List of computer science departments',
    mapFranceAlt: 'Map of France locating the computer science departments of IUTs',
    mapParisAlt:
      'Map of the Île-de-France region locating the computer science departments of IUTs',
    mapHint:
      'Each dot on the map links to the department’s website. The list below includes every institution.',
    homeHeading: 'Welcome to the “IUT info” portal',
    homePhotoAlt: 'Exterior view of an IUT building',
  },
} as const satisfies Record<Locale, Record<string, string>>

export type UiKey = keyof (typeof ui)['fr']

export function t(locale: Locale): (key: UiKey) => string {
  return (key) => ui[locale][key]
}
