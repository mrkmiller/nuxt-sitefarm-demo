const pkg = require('./package')

const serverBaseUrl = 'https://sitefarmdemo.test.sf.ucdavis.edu';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    // Normalize.
    '@/node_modules/normalize-scss/sass/normalize/_import-now.scss',
    // Global styles.
    '@/assets/sass/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * Add in sass recources that can be used in other components.
   */
  styleResources: {
    scss: [
      // Sass libraries.
      '~/node_modules/singularitygs/stylesheets/_singularitygs.scss',
      '~/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss',
      '~/node_modules/sass-toolkit/stylesheets/_toolkit.scss',
      '~/node_modules/sass-burger/_burger.scss',
      // Global variables for site-wide use.
      '~/assets/sass/_variables.scss',
      '~/assets/sass/1_pattern_lab/_variables.scss',
      // Mixins.
      '~/assets/sass/1_pattern_lab/0_utility/_mixins.scss',
      '~/assets/sass/1_pattern_lab/0_utility/_headings-mixin.scss',
      '~/assets/sass/1_pattern_lab/0_utility/objects/**/*',
      '~/assets/sass/1_pattern_lab/0_utility/utility_helpers/**/*'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/jsonapi'
  },
}
