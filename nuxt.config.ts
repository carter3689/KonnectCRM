// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@formkit/nuxt',
    '@nuxtjs/supabase'
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  runtimeConfig: {
    secret: process.env.SUPABASE_KEY,
    public: {
      url: process.env.SUPABASE_URL
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/']
    }
  },
  }
})
