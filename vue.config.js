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
  /* chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@sections', path.resolve(__dirname, 'src/sections'))
      .set('@styles', path.resolve(__dirname, 'src/styles'))
  }, */
}
