export default {
  /* ==================================
   * @ 2017 FEZ 前端模块工程自动化构建工具
   * https://github.com/furic-zhao/fez
   * ================================== */

  webpack: {
    config: {
      externals: {
        jquery: 'jQuery',
        q: 'Q',
        vue: 'Vue'
      }
    }
  },

  useInject: {
    vendor: {
      js: [{
        target: "a-vendor-jquery-bootstrap.js",
        contain: ["**/jquery.js", "**/bootstrap.js"]
      }],
      css: [{
        target: "vendor-bootstrap.css",
        contain: ["**/bootstrap.css"]
      }, {
        target: "vendor-font-awesome.css",
        contain: ["**/font-awesome.css"]
      }]
    }
  }
}
