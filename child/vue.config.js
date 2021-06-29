const name = require('./package.json').name;

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    open: false,
    progress:false,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: proxys,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    name: 'EDU 子应用', //网站title
    externals: {},
    resolve: {
      alias: {
        // '@': resolve('src'),
      },
    },
    output: {
      // // 把子应用打包成 umd 库格式
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};