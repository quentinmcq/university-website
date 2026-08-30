// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import pagefind from 'astro-pagefind'

const site = process.env.SITE_URL ?? 'https://quentinmcq.github.io'
const base = process.env.BASE_PATH ?? '/'

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  redirects: { '/': `${base.replace(/\/$/, '')}/fr/` },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  integrations: [sitemap(), pagefind()],
})
