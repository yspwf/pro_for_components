const { merge } = require('webpack-merge');
const basicConfig = require('./basic.config');

module.exports = merge(basicConfig, {
  mode: 'development', //development——默认不压缩代码
  devServer:{
    port: 8096,
    historyApiFallback: true,
  },
  devtool: 'eval-cheap-module-source-map', //源码映射
})
