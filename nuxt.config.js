const pkg = require('./package')
const extendConfig = require('./webpack.extend.config')

module.exports = {
  mode: 'universal',
  srcDir: 'src/',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  extensions: ['ts', 'tsx', 'js'],
  loading: { color: '#fff' },
  css: ['~/assets/style/reset.css', '~/assets/style/base.css'],
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {},
  build: {
    extend(config) {
      extendConfig(config)
    }
  }
}
