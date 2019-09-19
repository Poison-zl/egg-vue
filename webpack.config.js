'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue
let cdn =''
switch (process.env.EGG_SERVER_ENV){
  case 'prod':
    cdn = '/prod/'
    break;
}
module.exports = {
  plugins: {
    imagemini: false
  },
  publicPath:cdn
};