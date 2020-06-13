const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/api2'],
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '/api', // rewrite path
      },
    })
  );
};