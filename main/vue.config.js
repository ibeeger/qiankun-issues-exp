
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    open: true,
    progress:false,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: proxys,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}