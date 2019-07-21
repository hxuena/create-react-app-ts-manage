const proxy = require('http-proxy-middleware');



module.exports = function (app) {
  app.use(
    proxy("/aiui/web", {
      target: "https://aiui.iflyos.cn",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/SSOService", {
      target: "https://sso.xfyun.cn",
      changeOrigin: true
    })
  );

  app.use(
    proxy("/cmp/auth", {
      target: "http://aiui-cmp-test.cn",
      changeOrigin: true
    })
  );
};