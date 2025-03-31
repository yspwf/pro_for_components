module.exports = {
  presets: [['@babel/preset-env',{
      targets: {
          node: 'current' // node环境的解释
      }
  }],
  "@babel/preset-react"
  ],
  plugins: ['@babel/plugin-syntax-jsx']
}
