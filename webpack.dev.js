const { merge } = require('webpack-merge');
const basicConfig = require('./basic.config');

module.exports = merge(basicConfig, {
  mode: 'production', //development——默认不压缩代码
  devServer:{
    port: 8096,
    historyApiFallback: true,
  },
  optimization: {
    // 代码分割配置
    splitChunks: {
        chunks: "all", //对所有模块进行分割
        // 以下是默认值
        // minSize: 20000, // 分割代码大小为20kb        
        // minRemainingSize: 0, // 剩余代码大小不得少于0kb, 类似于minSize
        // minChunks: 1, // 最少被引用的次数，满足条件才会代码分割
        // maxAsyncRequests: 30, // 异步加载的最大并行请求数的最大数量
        // maxInitialRequests: 30, // 初始加载的最大并行请求数的最大数量， 既入口js文件最大并行请求数量
        // enforceSizeThreshold: 50000, // 强制代码分割的阈值，大于该阈值才会进行代码分割
        // cacheGroups: { //组， 那些模块要打包到一个组
        //     defaultVendors: { // 组名
        //         test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录
        //         priority: -10, // 优先级，数字越大，优先级越高，优先打包到该组 (权重， 越大越高)
        //         reuseExistingChunk: true, // 如果该组的模块已经被打包过，是否复用该组的模块 ,(如果当前chunk包含已从budle中拆分出的模块，则它将被重用，而不是生成新的模块)
        //     },
        //     default: {
        //         minChunks: 2, // 最少被引用的次数，满足条件才会代码分割
        //         priority: -20, // 优先级，数字越大，优先级越高，优先打包到该组 (权重， 越大越高)
        //         reuseExistingChunk: true, // 如果该组的模块已经被打包过，是否复用该组的模块 ,(如果当前chunk包含已从budle中拆分出的模块，则它将被重用，而不是生成新的模块)
        //     }
        // }
        // 修改配置
        cacheGroups: {
            // 组，那些模块要打包到一个组
            // defaultVendors: { // 组名
            //     test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录
            //     priority: -10, // 优先级，数字越大，优先级越高，优先打包到该组 (权重， 越大越高)
            //     reuseExistingChunk: true, // 如果该组的模块已经被打包过，是否复用该组的模块 ,(如果当前chunk包含已从budle中拆分出的模块，则它将被重用，而不是生成新的模块)
            // }
            default: {
                minSize: 0, // 分割代码大小为0kb        
                       minChunks: 2, // 最少被引用的次数，满足条件才会代码分割
                       priority: -20, // 优先级，数字越大，优先级越高，优先打包到该组 (权重， 越大越高)
                       reuseExistingChunk: true, // 如果该组的模块已经被打包过，是否复用该组的模块 ,(如果当前chunk包含已从budle中拆分出的模块，则它将被重用，而不是生成新的模块)
            }
        }
    }
  }
  // devtool: 'eval-cheap-module-source-map', //源码映射
})
