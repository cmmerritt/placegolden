const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:9000/.netlify/functions/server',
    }),
  );
};


// module.exports = function(app) {
//     app.use(
//       createProxyMiddleware('/.netlify/functions/server', {
//         target: 'http://localhost:9000/',
//       }),
//     );
//   };
  