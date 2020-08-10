const serverBaseUrl = 'https://sitefarmdemo.test.sf.ucdavis.edu';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},

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
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},

  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/jsonapi'
  },
}
