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
    secret: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    public: {
      url: process.env.NUXT_PUBLIC_SUPABASE_URL
  },
  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true
  },
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: [],
  }
  }
})
