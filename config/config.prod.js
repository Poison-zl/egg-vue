/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */
const path = require('path');
module.exports = app => {
  const exports = {};
  exports.url = 'prod'

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };
  return exports;
};
