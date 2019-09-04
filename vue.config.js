//去console插件
/* const UglifyJsPlugin = require('uglifyjs-webpack-plugin') */

module.exports = {
  devServer: {
	host: 'localhost',
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://c.3g.163.com:80', // 请求地址
        changeOrigin: false,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // 自动打开浏览器
    open: true
  },
 /* productionSourceMap:false,
  configureWebpack: config => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  } */
}