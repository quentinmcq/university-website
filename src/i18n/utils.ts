import { defaultLocale, locales, pages, type Locale, type PageKey } from './pages'

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}
export function getLocale(astroLocale: string | undefined): Locale {
  return isLocale(astroLocale) ? astroLocale : defaultLocale
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr'
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export function localePath(locale: Locale, key: PageKey): string {
  const { slug } = pages[key][locale]
  return `${base}/${locale}/${slug ? `${slug}/` : ''}`
}
export function publicPath(path: string): string {
  return `${base}/${path.replace(/^\//, '')}`
}

export function htmlLang(locale: Locale): string {
  return locale === 'fr' ? 'fr-FR' : 'en-GB'
}
