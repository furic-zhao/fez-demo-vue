export default {
    /* ==================================
     * @ 2017 FEZ 前端模块工程自动化构建工具
     * https://github.com/furic-zhao/fez
     * ================================== */

    browserify: {
        shim: [{
            import: "$",
            from: "jquery"
        }, {
            import: "Q",
            from: "q"
        }, {
            import: "Vue",
            from: "vue"
        }]
    },

    useInject: {
        bower: {
            available: true,
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
        },

        lib: {
            available: true,
        },

        views: true
    }
}
