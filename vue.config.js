module.exports = {
  devServer: {
    proxy: {
      '^/ab': {
        target: 'http://192.168.1.18:8080',
        changeOrigin: true
      },
    }
  },
  publicPath: ''
}