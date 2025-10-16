import { fileURLToPath, URL } from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    baseUrl: process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://afestupinanp.pages.dev',
    compilation: {
      strictMessage: false
    },
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        language: "en-US",
        name: "English (Inglés)",
      },
      {
        code: 'es',
        file: 'es.json',
        language: "es-ES",
        name: "Español (Español)",
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