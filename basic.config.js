const path = require('path');
const ROOT_PATH = process.cwd();

const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:{
    'main': ROOT_PATH + '/src/index.js'
  },
  output:{
    // filename: 'bundle.js',
    // filename: "[name][hash:8].js",
    path: ROOT_PATH + '/dist',
    // path: path.resolve(__dirname, 'public/assets'),
    // publicPath: '/',    //自动生成html引入js的路径
    //按需加载
    chunkFilename:'[name]_[chunkhash:8].js',
    // 文件名称
    filename: "[name].[contenthash].js",
    // 输出目录
    // path: path.resolve(__dirname, "./dist"),
    // 每次编译输出的时候，清空dist目录 - 这里就不需要clean-webpack-plugin了
    clean: true,
    // 所有URL访问的前缀路径
    publicPath: "/",
    libraryTarget: 'umd', // 采用通用模块定义, 注意webpack到4.0为止依然不提供输出es module的方法，所以输出的结果必须使用npm安装到node_modules里再用，不然会报错
    library: 'react-simple-component-Hi.ui', // 库名称
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options:{
          // presets: ['@babel/preset-env', '@babel/preset-react'],
          presets: [
            [
              // 预设polyfill
              "@babel/preset-env",
              {
                // polyfill 只加载使用的部分
                useBuiltIns: "usage",
                // 使用corejs解析，模块化
                corejs: "3",
              },
            ],
            // 解析react
            "@babel/preset-react",
          ],
          plugins: ['@babel/plugin-transform-runtime'] //减少代码体积
        }
      },
      // {
      //   //简写方式
      //   test: /\.css$/,
      //   //先执行style-loader再执行css-loader
      //   //顺序规则，从右往左，从下往上,因为兼容性处理要在css调用之前，所以需要将postcss-loader的配置放在css-loader右边
      //   use: ['style-loader', 'css-loader', {
      //       loader: "postcss-loader",
      //       options: {
      //           postcssOptions: {
      //               plugins: [
      //                   ['postcss-preset-env', {}]
      //                   //简写形式
      //                   // 'postcss-preset-env'
      //                   // require('autoprefixer'),
      //                   // require('postcss-preset-env')
      //               ]
      //           }
      //       }
      //   }]
      // },
      {
        test:/\.css$/,
        use:[
          // 'style-loader', 
          miniCssExtractPlugin.loader,
          // 'css-loader',
          {
            loader:'css-loader',
            // options:{
            //   modules:true
            // }
            options: {
              url: true, //默认为true,可以处理css中的url图片路径
              esModule: false,
            },
          },
          // {
					// 	loader:'css-loader',
					// 	options:{
					// 		modules:true
					// 	}
					// },
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [["postcss-preset-env"]],
          //     },
          //   },
          // },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //         ],
          //       ],
          //     },
          //   },
          // },
          {
            loader: 'postcss-loader',            
            options: {              
              postcssOptions: {                
                plugins: [                  
                  require('autoprefixer'), // Automatically adds vendor prefixes  
                ],
              }
            }
          }
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions:{
          //       plugins: [
          //         // ["autoprefixer"]
          //         require('postcss-preset-env')()
          //       ]
          //     }
          //   }
          // }
        ],
        exclude: /node_modules/
      },
      // {
      //   test: /.(gif|png|jpe?g|svg)$/i,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition:{
      //       maxSize: 200 * 1024  // 小于200kb大小的图片转base64格式
      //     }
      //   },
      //   generator: {
      //     filename: "img/[hash:7][ext]"
      //   }
      // }
          {
            test: /.(png|jpe?g|gif|svg)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 100 * 1024, // 小于10kb的图片会被base64处理
              },
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: "static/imgs/[hash:8][ext][query]",
            },
          },
          {
            test: /.(ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
              filename: "static/media/[hash:8][ext][query]",
            },
          }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'webapck cli test',
      template: ROOT_PATH + '/index.html',
      filename: 'index.html',
      inject: "body",
      // inject: true, // 自动注入静态资源
                hash: true,
                cache: false,
                // 压缩html资源
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true, //去空格
                    removeComments: true, // 去注释
                    minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
                    minifyCSS: true, // 缩小CSS样式元素和样式属性
                }
    }),
    new miniCssExtractPlugin({
      filename: 'static/css/main.[hash:8].css'
    })
  ],
  resolve:{
    extensions:['.js', '.css', '.jsx']
  }
}