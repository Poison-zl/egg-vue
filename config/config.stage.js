
const path = require('path');
module.exports = app => {
  const exports = {};
  exports.url = 'stage'

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };
  return exports;
};
