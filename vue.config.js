module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
    // ? '/public/'
    // : '/',
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'http://freelancer.hduzplus.xyz/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/api'
      //   }
      // },
      // '/upload': {
      //   target: 'http://freelancer.hduzplus.xyz/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/upload': '/upload'
      //   }
      // }
      '/api': {
        target: 'https://freelancer.lance-studios.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/upload': {
        target: 'https://freelancer.lance-studios.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': '/upload'
        }
      }
    }
  }
}