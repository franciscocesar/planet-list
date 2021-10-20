export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sistema Solar',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/accessor'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'
  ],
  axios:{
    baseURL:'http://localhost:3333'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
