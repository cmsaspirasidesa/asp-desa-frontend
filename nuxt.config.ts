// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@sidebase/nuxt-auth',
    '@element-plus/nuxt',
  ],
  auth: {
    enableGlobalAppMiddleware: true,
    origin: 'http://localhost:3000/',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
