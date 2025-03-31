const { merge } = require('webpack-merge');
const basicConfig = require('./basic.config');

module.exports = merge(basicConfig, {
  mode: 'production', 
})
