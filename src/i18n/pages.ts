export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const pageKeys = [
  'home',
  'presentation',
  'iut',
  'departement',
  'programme',
  'carte',
  'debouches',
  'poursuite',
  'temoignages',
  'presse',
  'liens',
  'partenariats',
  'entreprises',
] as const
export type PageKey = (typeof pageKeys)[number]

export interface PageMeta {
  /** Segment d'URL après le préfixe de langue (vide pour l'accueil). */
  slug: string
  /** Libellé court utilisé dans la navigation. */
  label: string
}

/** Registre des pages : une entrée par page et par langue. Source unique pour les URL et la navigation. */
export const pages: Record<PageKey, Record<Locale, PageMeta>> = {
  home: { fr: { slug: '', label: 'Accueil' }, en: { slug: '', label: 'Home' } },
  presentation: {
    fr: { slug: 'presentation', label: 'Présentation' },
    en: { slug: 'about', label: 'About' },
  },
  iut: { fr: { slug: 'les-iut', label: 'Les IUT' }, en: { slug: 'the-iuts', label: 'The IUTs' } },
  departement: {
    fr: { slug: 'departement-informatique', label: 'Département informatique' },
    en: { slug: 'computer-science-department', label: 'Computer science department' },
  },
  programme: {
    fr: { slug: 'programme', label: 'Programme' },
    en: { slug: 'programme', label: 'Programme' },
  },
  carte: {
    fr: { slug: 'carte-des-dut', label: 'Carte des DUT' },
    en: { slug: 'map-of-dut', label: 'Map of DUTs' },
  },
  debouches: {
    fr: { slug: 'debouches', label: 'Débouchés' },
    en: { slug: 'careers', label: 'Careers' },
  },
  poursuite: {
    fr: { slug: 'poursuite-d-etudes', label: 'Poursuite d’études' },
    en: { slug: 'further-studies', label: 'Further studies' },
  },
  temoignages: {
    fr: { slug: 'temoignages', label: 'Témoignages' },
    en: { slug: 'testimonials', label: 'Testimonials' },
  },
  presse: {
    fr: { slug: 'revue-de-presse', label: 'Revue de presse' },
    en: { slug: 'press-review', label: 'Press review' },
  },
  liens: { fr: { slug: 'liens', label: 'Liens' }, en: { slug: 'links', label: 'Links' } },
  partenariats: {
    fr: { slug: 'partenariats', label: 'Partenariats' },
    en: { slug: 'partnerships', label: 'Partnerships' },
  },
  entreprises: {
    fr: { slug: 'entreprises', label: 'Entreprises' },
    en: { slug: 'companies', label: 'Companies' },
  },
}

export type NavItem =
  | { key: PageKey }
  | { group: string; label: Record<Locale, string>; children: PageKey[] }

/** Structure de la navigation principale (13 pages regroupées en 7 entrées). */
export const navigation: NavItem[] = [
  { key: 'home' },
  { key: 'presentation' },
  {
    group: 'formation',
    label: { fr: 'Formation', en: 'Studies' },
    children: ['iut', 'departement', 'programme'],
  },
  { key: 'carte' },
  {
    group: 'apres-iut',
    label: { fr: 'Après l’IUT', en: 'After the IUT' },
    children: ['debouches', 'poursuite', 'temoignages'],
  },
  {
    group: 'ressources',
    label: { fr: 'Ressources', en: 'Resources' },
    children: ['presse', 'liens', 'partenariats'],
  },
  { key: 'entreprises' },
]

export const teacherAccessUrl =
  'http://www.iut-informatique.fr/Intranet/dokuwiki/authINTRANETACDI.php?action=doku.php?id=accueil'
export const contactEmail = 'webmaster@iut-informatique.fr'
export const repositoryUrl = 'https://github.com/quentinmcq/university-website'
