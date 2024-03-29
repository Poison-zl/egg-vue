const path = require('path');
const ip = require('ip');
module.exports = app => {
  const exports = {};

  exports.redis = [{
    port: 6001,
    host: 'redis1.stage.com'
  },{
    port: 6002,
    host: 'redis1.stage.com'
  },{
    port: 7001,
    host: 'redis2.stage.com'
  },{
    port: 7002,
    host: 'redis2.stage.com'
  },{
    port: 8001,
    host: 'redis3.stage.com'
  },{
    port: 8002,
    host: 'redis3.stage.com'
  }]

  exports.view = {
    cache: false
  };

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: [], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config/manifest.json'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  exports.webpack = {
    // browser: 'http://localhost:7001',
    // webpackConfigList: require('easywebpack-vue').getWebpackConfig()
  };

  const localIP = ip.address();
  const domainWhiteList = [];
  [7001, 9000, 9001].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  exports.security = { domainWhiteList };

  return exports;
};
