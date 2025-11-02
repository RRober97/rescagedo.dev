// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Modules: Tailwind, SEO kit, Iconify, sitemap/helpers
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-seo-kit'
  ],
  css: ['~/assets/css/tailwind.css'],
  components: [
    { path: 'app/components', pathPrefix: false },
    { path: 'components', pathPrefix: false }
  ],
  alias: {
    '@/data': '/data',
    '@/components': '/app/components'
  },
  seo: {
    // Basic SEO defaults; replace with real copy in pages or app.vue
    siteName: 'rescagedo.dev',
    title: 'Roberto Escagedo — rescagedo.dev',
    description: 'Portafolio de Roberto Escagedo — Software Engineer, products & automation',
    twitter: '@RRober97'
  }
})