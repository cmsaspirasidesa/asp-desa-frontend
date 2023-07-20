// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/style.css', '@/assets/css/components.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js',
          body: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
          body: true,
        },
        {
          src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
          body: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js',
          body: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js',
          body: true,
        },
        { src: '/js/stisla.js', body: true },
        { src: '/js/scripts.js', body: true },
        { src: '/js/custom.js', body: true },
        { src: '/js/page/index.js', body: true },
      ],
    },
  },
})
