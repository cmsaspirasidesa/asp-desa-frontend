export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stisla.dashboard.nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // General CSS
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css" },

      // CSS Libraries
      // { rel: "stylesheet", href: "../node_modules/jqvmap/dist/jqvmap.min.css" },
      // { rel: "stylesheet", href: "../node_modules/summernote/dist/summernote-bs4.css" },
      // { rel: "stylesheet", href: "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css" },
      // { rel: "stylesheet", href: "../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css" },

      { rel: "script", href: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" },
    ],

    script: [
      { src: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js", body: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", body: true },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", body: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js", body: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js", body: true },
      { src: "/js/stisla.js", body: true },
      { src: "/js/scripts.js", body: true },
      { src: "/js/custom.js", body: true },
      { src: "/js/page/index.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Template CSS
    '@/assets/css/style.css',
    '@/assets/css/components.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
