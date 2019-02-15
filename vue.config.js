const devURl = 'http://localhost:5412';

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: devURl,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
