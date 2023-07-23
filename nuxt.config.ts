// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
<<<<<<< HEAD
    '@nuxtjs/tailwindcss', 
    'nuxt-icon', 
    '@nuxt/image'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
=======
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
  ],
})
>>>>>>> cf79e243b836421f612e4ade24b2ed639f85791d
