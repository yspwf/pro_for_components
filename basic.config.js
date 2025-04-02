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
    filename: "[name][hash:8].js",
    path: ROOT_PATH + '/dist'
    // path: path.resolve(__dirname, 'public/assets'),
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options:{
          presets: ['@babel/preset-env', '@babel/preset-react']
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
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:'webapck cli test',
      template: ROOT_PATH + '/index.html',
      filename: 'index.html',
      inject: "body"
    }),
    new miniCssExtractPlugin({
      filename: 'static/css/main.[hash:8].css'
    })
  ],
  resolve:{
    extensions:['.js', '.css', '.jsx']
  }
}