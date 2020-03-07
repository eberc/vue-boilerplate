const path = require('path')

module.exports = {
  publicPath: '',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  },
}
