module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
    // ? '/public/'
    // : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/upload': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': '/upload'
        }
      }
    }
  }
}