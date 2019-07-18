const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/cmp', { target: 'http://aiui-cmp-test.cn/' }));
};