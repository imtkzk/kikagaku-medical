export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kikagaku-medical',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/base/_variable.scss',
    '~/assets/scss/base/_reset.scss',
    '~/assets/scss/base/_base.scss',
    '~/assets/scss/base/_utils.scss',
    '~/assets/scss/component/_button.scss',
    '~/assets/scss/component/_heading.scss',
    '~/assets/scss/layout/_footer.scss',
    '~/assets/scss/layout/_header.scss',
    '~/assets/scss/layout/_main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/common.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
