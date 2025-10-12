import { fileURLToPath, URL } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    compilation: {
      strictMessage: false
    },
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'es',
        file: 'es.json',
      },
    ],
  
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./app', import.meta.url))
      },
    },
  },
})