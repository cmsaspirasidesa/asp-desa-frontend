// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  nuxtIcon: {
    size: "24px",
    class: "icon",
    aliases: {
      nuxt: "logos:nuxt-icon",
    },
  },
});
