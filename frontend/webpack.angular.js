// this file contains extras that should override angular's default configs

const { CycloneDxWebpackPlugin } = require('@cyclonedx/webpack-plugin')
const SHOP_API_KEY = "dcjnewjonoj54w6846w1vcvadsnkncas6c4a8c9wecq664c9wqecew"
module.exports = {
  plugins: [
    // @see https://www.npmjs.com/package/@cyclonedx/webpack-plugin
    new CycloneDxWebpackPlugin({
      outputLocation: '../bom', // The path is relative to webpack's overall output path,
      includeWellknown: false
    })
  ]
}
