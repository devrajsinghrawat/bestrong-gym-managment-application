// vue.config.js
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://localhost:9000/',
  }
}
