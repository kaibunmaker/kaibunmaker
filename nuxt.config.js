const Stylelint = require('stylelint-webpack-plugin')

const config = require('./config')
const ORIGIN = config.ORIGIN
const BASE_DIR = config.BASE_DIR
const BASE_URL = new URL(BASE_DIR, ORIGIN)
const OG_IMAGE_PATH = config.OG_IMAGE_PATH
const OG_IMAGE_URL = new URL(OG_IMAGE_PATH, BASE_URL)
const TWITTER_ID = config.TWITTER_ID
const GOOGLE_ANALYTICS_UA = config.GOOGLE_ANALYTICS_UA

const i18n = require('./nuxt-i18n.config')
const DEFAULT_LOCALE = i18n.defaultLocale
const lang = require(`./${i18n.langDir}${DEFAULT_LOCALE}`)
const APP_NAME = lang.APP_NAME
const APP_DESCRIPTION = lang.APP_DESCRIPTION

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: APP_DESCRIPTION },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: APP_NAME },
      { hid: 'og:description', property: 'og:description', content: APP_DESCRIPTION },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:image', property: 'og:image', content: OG_IMAGE_URL },
      { hid: 'og:image:width', property: 'og:image:width', content: '256' },
      { hid: 'og:image:height', property: 'og:image:height', content: '256' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: TWITTER_ID }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-256x256.png', sizes: '256x256' },
      { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png', sizes: '180x180' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons|Noto+Sans+JP|Noto+Serif+JP' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-i18n', i18n],
    ['@nuxtjs/google-analytics', {
      id: GOOGLE_ANALYTICS_UA
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint & stylelint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins.push(new Stylelint({
          files: '**/*.{css,scss,vue}'
        }))
      }
    }
  },

  router: {
    base: BASE_DIR
  },

  manifest: {
    name: APP_NAME,
    description: APP_DESCRIPTION,
    lang: DEFAULT_LOCALE
  }
}
