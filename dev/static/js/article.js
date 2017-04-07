(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _vue = (typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null);

var _vue2 = _interopRequireDefault(_vue);

var _index = require('./index.vue');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: "#app",
    render: function render(h) {
        return h(_index2.default);
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./index.vue":2}],2:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _page = require('public/module/common/page.vue');

var _page2 = _interopRequireDefault(_page);

var _jumbotron = require('./module/detail/jumbotron.vue');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

var _index = require('./module/detail/index.vue');

var _index2 = _interopRequireDefault(_index);

var _urlParam = require('public/utils/url-param');

var _urlParam2 = _interopRequireDefault(_urlParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            id: ""
        };
    },

    components: {
        fezPage: _page2.default,
        fezJumbotron: _jumbotron2.default,
        fezDetail: _index2.default
    },
    created: function created() {
        var _vm = this;
        (0, _urlParam2.default)('id').then(function (data) {
            _vm.id = data;
        });
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fez-page',[_c('fez-jumbotron',{attrs:{"id":_vm.id}}),_vm._v(" "),_c('fez-detail',{attrs:{"id":_vm.id}})],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7ca8e3c", __vue__options__)
  } else {
    hotAPI.reload("data-v-d7ca8e3c", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./module/detail/index.vue":3,"./module/detail/jumbotron.vue":4,"public/module/common/page.vue":10,"public/utils/url-param":11,"vue-hot-reload-api":72}],3:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            content: ""
        };
    },

    props: {
        id: {
            type: String,
            default: 0
        }
    },
    watch: {
        id: function id(val, oldVal) {
            this.jumbotron(val);
        }
    },
    methods: {
        jumbotron: function jumbotron(id) {
            var _vm = this;
            _service2.default.renderData(id).then(function (data) {
                _vm.content = data.content;
            });
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 blog-main"},[_c('div',{staticClass:"blog-post"},[_c('hr'),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}})])])]),_vm._v(" "),_c('hr')])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-276ab3e7", __vue__options__)
  } else {
    hotAPI.reload("data-v-276ab3e7", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":5,"vue-hot-reload-api":72}],4:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

var _urlParam = require('public/utils/url-param');

var _urlParam2 = _interopRequireDefault(_urlParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            jumbotronData: {
                title: "",
                desc: "",
                viewMore: {
                    name: '',
                    href: ""
                }
            }
        };
    },

    props: {
        id: {
            type: String,
            default: 0
        }
    },
    watch: {
        id: function id(val, oldVal) {
            this.jumbotron(val);
        }
    },
    methods: {
        jumbotron: function jumbotron(id) {
            var _vm = this;
            _service2.default.renderData(id).then(function (data) {
                _vm.jumbotronData = (0, _extends3.default)({}, data);
            });
        }
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jumbotron"},[_c('div',{staticClass:"container"},[_c('h1',[_vm._v("hello,"+_vm._s(_vm.jumbotronData.title)+"!")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.jumbotronData.desc))]),_vm._v(" "),_c('p',[_c('a',{staticClass:"btn btn-primary btn-lg",attrs:{"href":_vm.jumbotronData.viewMore.href,"role":"button"}},[_vm._v(_vm._s(_vm.jumbotronData.viewMore.text)+"\n            ")])])])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2106cd41", __vue__options__)
  } else {
    hotAPI.reload("data-v-2106cd41", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":5,"babel-runtime/helpers/extends":14,"public/utils/url-param":11,"vue-hot-reload-api":72}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        return _q2.default.Promise(function (resolve, reject) {
            var rtnData = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    if (v.title === id) {
                        rtnData = v;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            resolve(rtnData);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/core-js/get-iterator":12,"public/demo-data":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var frames = [{
    title: "Nodejs",
    desc: "FEZ 构建在 NodeJS 基于 Chrome V8 引擎的 JavaScript 运行环境，其事件驱动非阻塞的特性，极其快速的编译前端各种资源",
    content: "<div id=\"home-intro\">\n\n        <p>Node.js\xAE is a JavaScript runtime built on <a href=\"https://developers.google.com/v8/\">Chrome's V8 JavaScript engine</a>.\nNode.js uses an event-driven, non-blocking I/O model that makes it\nlightweight and efficient. Node.js' package ecosystem, <a href=\"https://www.npmjs.com/\">npm</a>, is the largest ecosystem of open\nsource libraries in the world.</p>\n\n\n\n        <h2 id=\"home-downloadhead\" data-dl-local=\"Download for\">Download for macOS (x64)</h2>\n\n        <div class=\"home-downloadblock\">\n\n          <a href=\"https://nodejs.org/dist/v6.10.0/node-v6.10.0.pkg\" class=\"home-downloadbutton\" title=\"Download v6.10.0 LTS\" data-version=\"v6.10.0\">\n            v6.10.0 LTS\n            <small>Recommended For Most Users</small>\n          </a>\n\n          <ul class=\"list-divider-pipe home-secondary-links\">\n            <li>\n              <a href=\"https://nodejs.org/en/download/\">Other Downloads</a>\n            </li>\n            <li>\n              <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.10.0\">Changelog</a>\n            </li>\n            <li>\n              <a href=\"https://nodejs.org/dist/latest-v6.x/docs/api/\">API Docs</a>\n            </li>\n          </ul>\n\n        </div>\n\n          <div class=\"home-downloadblock\">\n\n            <a href=\"https://nodejs.org/dist/v7.7.1/node-v7.7.1.pkg\" class=\"home-downloadbutton\" title=\"Download v7.7.1 Current\" data-version=\"v7.7.1\">\n              v7.7.1 Current\n              <small>Latest Features</small>\n            </a>\n\n            <ul class=\"list-divider-pipe home-secondary-links\">\n              <li>\n                <a href=\"https://nodejs.org/en/download/current/\">Other Downloads</a>\n              </li>\n              <li>\n                <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.7.1\">Changelog</a>\n              </li>\n              <li>\n                <a href=\"https://nodejs.org/dist/latest-v7.x/docs/api/\">API Docs</a>\n              </li>\n            </ul>\n\n          </div>\n        <p>\n          Or have a look at the <a href=\"https://github.com/nodejs/LTS#lts-schedule\">LTS schedule.</a>\n        </p>\n      </div>",
    viewMore: {
        text: "更多信息",
        href: "https://nodejs.org/"
    }
}, {
    title: "NPM",
    desc: "FEZ 使用 NPM 接入全球最大的开源生态系统，具备无限的功能扩展能力，可整合国际前沿的开源框架，适应瞬息万变的技术更替",
    content: "<h1 class=\"title em-default type-neutral-11\">\n          Build amazing things\n        </h1>\n        <p class=\"h5 em-default type-neutral-11 pbxl\">\n          npm is the package manager for JavaScript. Find, share, and reuse\n          packages of code from hundreds of thousands of developers \u2014 and\n          assemble them in powerful new ways.\n        </p>\n        <a id=\"main-cta\" href=\"#pane-homepage-pricing\" class=\"btn btn-highlight-3 mrl\" data-event-name=\"homepage-hero-cta\">Get started</a>",
    viewMore: {
        text: "更多信息",
        href: "https://www.npmjs.com/"
    }
}, {
    title: "Gulp",
    desc: "FEZ 整合Gulp的众多插件，编译、优化和组织前端复杂的模块及静态资源，喝着可乐儿、哼着小曲儿，自动化完成前端大量重复工作",
    content: "<h1 class=\"heading text-center\">Automate and enhance your workflow</h1><h2 class=\"paragraph\">\n          gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.\n        </h2><div class=\"ctas\">\n          <a class=\"ctas-button\" href=\"https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md\">Get Started</a>\n        </div>",
    viewMore: {
        text: "更多信息",
        href: "http://gulpjs.com/"
    }
}, {
    title: "Browserify",
    desc: "FEZ 使用 Browserify 模块化组织和管理项目的各个功能模块，极大提升项目的可维护性、功能复用性，并实现积木式的搭建网页",
    content: "<section id=\"top-home-section\" class=\"top-section color-a\">\n      <div id=\"top-home-image\"></div>\n\n       <h3 id=\"top-subtitle\" class=\"large-font\">Browserify lets you require(<span class=\"color-d\">'modules'</span>) in the browser by bundling up all of your dependencies.</h3>\n      <a href=\"https://github.com/substack/node-browserify#usage\">\n        <button class=\"top-button\" id=\"top-button2\">\n          Documentation\n        </button>\n      </a>\n    </section>",
    viewMore: {
        text: "更多信息",
        href: "http://browserify.org/"
    }
}, {
    title: "Bower",
    desc: "FEZ 可配置使用 Bower 搜索、安装、更新和卸载如JavaScript、CSS之类的网络资源，通过自动化注入技术完美解决复杂的框架包管理问题",
    content: "<div class=\"main\">\n<p class=\"lead\">Web sites are made of lots of things \u2014 frameworks, libraries, assets, and utilities. Bower manages all these things for you.</p>\n<p>Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue!</p>\n<p>Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn\u2019t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.</p>\n<p>To <a href=\"#getting-started\">get started</a>, Bower works by fetching and installing <a href=\"/search\">packages</a> from all over, taking care of hunting, finding, downloading, and saving the stuff you\u2019re looking for. Bower keeps track of these packages in a manifest file, <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower.json</code></a>. How you use <a href=\"/search\">packages</a> is up to you. Bower provides hooks to facilitate using packages in your <a href=\"/docs/tools\">tools and workflows</a>.</p>\n<p>Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.</p>\n<h2 id=\"install-bower\"><a href=\"#install-bower\" class=\"header-anchor\">\xA7</a>Install Bower</h2>\n<p>Bower is a command line utility. Install it with npm.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>npm install -g bower</code></pre></figure>\n<p>Bower requires <a href=\"http://nodejs.org/\">node, npm</a> and <a href=\"http://git-scm.org\">git</a>.</p>\n<p>Latest release: <a href=\"\"><img src=\"https://img.shields.io/npm/v/bower.svg?maxAge=2592000\" alt=\"bower version\"></a></p>\n<p>For troubleshooting installation on different platforms, read the <a href=\"https://github.com/bower/bower/wiki/Troubleshooting\">troubleshooting</a> wiki page.</p>\n<h2 id=\"getting-started\"><a href=\"#getting-started\" class=\"header-anchor\">\xA7</a>Getting started</h2>\n<h3 id=\"install-packages\"><a href=\"#install-packages\" class=\"header-anchor\">\xA7</a>Install packages</h3>\n<p>Install packages with <a href=\"/docs/api#install\"><code class=\"highlighter-rouge\">bower install</code></a>. Bower installs packages to <code class=\"highlighter-rouge\">bower_components/</code>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>bower install &lt;package&gt;</code></pre></figure>\n<p>A package can be a GitHub shorthand, a Git endpoint, a URL, and more. Read more about <a href=\"/docs/api/#install\"><code class=\"highlighter-rouge\">bower install</code></a>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"c\"># installs the project dependencies listed in bower.json</span>\n<span class=\"gp\">$ </span>bower install\n<span class=\"c\"># registered package</span>\n<span class=\"gp\">$ </span>bower install jquery\n<span class=\"c\"># GitHub shorthand</span>\n<span class=\"gp\">$ </span>bower install desandro/masonry\n<span class=\"c\"># Git endpoint</span>\n<span class=\"gp\">$ </span>bower install git://github.com/user/package.git\n<span class=\"c\"># URL</span>\n<span class=\"gp\">$ </span>bower install http://example.com/script.js</code></pre></figure>\n<h3 id=\"search-packages\"><a href=\"#search-packages\" class=\"header-anchor\">\xA7</a>Search packages</h3>\n<p><a href=\"/search\">Search Bower packages</a> and find the registered package names for your favorite projects.</p>\n<h3 id=\"save-packages\"><a href=\"#save-packages\" class=\"header-anchor\">\xA7</a>Save packages</h3>\n<p>Create a <code class=\"highlighter-rouge\">bower.json</code> file for your package with <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower init</code></a>.</p>\n<p>Then save new dependencies to your <code class=\"highlighter-rouge\">bower.json</code> with <code class=\"highlighter-rouge\">bower install PACKAGE --save</code></p>\n<h3 id=\"use-packages\"><a href=\"#use-packages\" class=\"header-anchor\">\xA7</a>Use packages</h3>\n<p>How you use packages is up to you. We recommend you use Bower together with <a href=\"/docs/tools/\">Grunt, RequireJS, Yeoman, and lots of other tools</a> or build your own workflow with <a href=\"/docs/api/\">the API</a>. You can also use the installed packages directly, like this, in the case of <code class=\"highlighter-rouge\">jquery</code>:</p>\n<figure class=\"highlight\"><pre><code class=\"language-html\" data-lang=\"html\"><span class=\"nt\">&lt;script </span><span class=\"na\">src=</span><span class=\"s\">\"bower_components/jquery/dist/jquery.min.js\"</span><span class=\"nt\">&gt;&lt;/script&gt;</span></code></pre></figure>\n<h2 id=\"twitter-updates-from-bowerhttpstwittercombower\"><a href=\"#twitter-updates-from-bowerhttpstwittercombower\" class=\"header-anchor\">\xA7</a>Twitter updates from <a href=\"https://twitter.com/bower\">@bower</a></h2>\n<p><a class=\"twitter-timeline\" href=\"https://twitter.com/bower\" data-widget-id=\"480377291369754625\">Tweets by @bower</a>\n</p>\n\n</div>",
    viewMore: {
        text: "更多信息",
        href: "https://bower.io/"
    }
}, {
    title: "BorwserSync",
    desc: "FEZ 使用 Browsersync 让浏览器实时快速的响应前端各种文件的更改并自动刷新页面，亦可实时同步各个终端，提高至少30%的开发效率",
    content: "<h1 class=\"hook\">Time-saving synchronised browser testing.</h1><p class=\"ronseal\">It\u2019s wicked-fast and totally free.</p><p class=\"video\"><a class=\"video__link\" href=\"#\"></a></p><p class=\"how-to\"></p><p class=\"how-to__command\">npm install -g browser-sync</p><p class=\"cta\"><a class=\"button button--primary\" href=\"#install\" title=\"Get Started\">Get Started</a></p><div class=\"player\"><p>'bonjour</p></div>",
    viewMore: {
        text: "更多信息",
        href: "https://browsersync.io/"
    }
}];

var index = {
    fezdesc: "FEZ 前端模块化工程开发框架",
    jumbotron: {
        title: "Hello, FEZ And Vue!",
        content: "这是一个使用 FEZ 构建的前端模块化开发示例，演示了基于Vue单文件组件的开发结构。",
        button: {
            name: "<i class=\"fa fa-github-alt\"></i> GitHub",
            href: "https://github.com/furic-zhao/fez"
        }
    }
};

var list = {
    jumbotron: {
        title: "FEZ And Vue Frame!",
        content: "这是一个FEZ整合Vue的列表展示页，请点击下面列表的 Detail 按钮进入详情页浏览",
        button: {
            name: "查看更多信息",
            href: "http://fez.hestudy.com"
        }
    }
};

var common = {
    siteName: "FEZ Vue DEMO",

    navData: [{
        name: "首页",
        href: "index.html"
    }, {
        name: "FEZ基本架构",
        href: "list.html"
    }],

    footerText: "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao"
};

exports.default = {
    "index": index,
    "list": list,
    "frames": frames,
    "common": common
};

},{}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    navList: function navList() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.navData);
        });
    },
    siteName: function siteName() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.siteName);
        });
    },
    footerText: function footerText() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.footerText);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":6}],8:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require("./common");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            text: ""
        };
    },

    methods: {
        footer: function footer() {
            var _this = this;

            _common2.default.footerText().then(function (data) {
                _this.text = data;
            });
        }
    },
    created: function created() {
        this.footer();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"container"},[_c('span',{staticClass:"pull-left"},[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),_vm._m(0)])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"icon icon-weixin"}),_vm._v(" "),_c('i',{staticClass:"icon icon-weibo"})])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b1087eb", __vue__options__)
  } else {
    hotAPI.rerender("data-v-3b1087eb", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":7,"vue-hot-reload-api":72}],9:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            headerData: {
                siteName: "",
                navList: []
            }
        };
    },

    methods: {
        headerDataInit: function headerDataInit() {
            var _vm = this;
            _q2.default.all([_common2.default.siteName(), _common2.default.navList()]).then(function (data) {
                var rtnData = {
                    siteName: data[0],
                    navList: data[1]
                };
                _vm.headerData = (0, _extends3.default)({}, rtnData);
            });
        }
    },
    created: function created() {
        this.headerDataInit();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-inverse navbar-fixed-top"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"navbar-header"},[_vm._m(0),_vm._v(" "),_c('a',{staticClass:"navbar-brand",attrs:{"href":"/"}},[_vm._v(_vm._s(_vm.headerData.siteName))])]),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbar"}},[_c('ul',{staticClass:"nav navbar-nav"},_vm._l((_vm.headerData.navList),function(item){return _c('li',[_c('a',{attrs:{"href":item.href}},[_vm._v(_vm._s(item.name))])])}))])])])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggle collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Toggle navigation")]),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"})])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c42ebdd", __vue__options__)
  } else {
    hotAPI.rerender("data-v-5c42ebdd", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":7,"babel-runtime/helpers/extends":14,"vue-hot-reload-api":72}],10:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = require('public/module/common/header.vue');

var _header2 = _interopRequireDefault(_header);

var _footer = require('public/module/common/footer.vue');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        fezHeader: _header2.default,
        fezFooter: _footer2.default
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('fez-header'),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('fez-footer')],2)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43a688df", __vue__options__)
  } else {
    hotAPI.rerender("data-v-43a688df", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/module/common/footer.vue":8,"public/module/common/header.vue":9,"vue-hot-reload-api":72}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name, url) {
    return Q.Promise(function (resolve, reject) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r_txt = url ? url : window.location.search;

        var r = r_txt.substr(1).match(reg);

        resolve(r ? decodeURIComponent(r[2]) : null);
    });
};

},{}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":15}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":16}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":13}],15:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":67,"../modules/es6.string.iterator":70,"../modules/web.dom.iterable":71}],16:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":23,"../../modules/es6.object.assign":69}],17:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],18:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],19:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":37}],20:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":58,"./_to-iobject":60,"./_to-length":61}],21:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":22,"./_wks":65}],22:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],23:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],24:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":17}],25:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],26:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":30}],27:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":31,"./_is-object":37}],28:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],29:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":23,"./_ctx":24,"./_global":31,"./_hide":33}],30:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],31:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],32:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],33:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":26,"./_object-dp":45,"./_property-desc":52}],34:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":31}],35:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":26,"./_dom-create":27,"./_fails":30}],36:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":22}],37:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],38:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":33,"./_object-create":44,"./_property-desc":52,"./_set-to-string-tag":54,"./_wks":65}],39:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":29,"./_has":32,"./_hide":33,"./_iter-create":38,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":53,"./_set-to-string-tag":54,"./_wks":65}],40:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],41:[function(require,module,exports){
module.exports = {};
},{}],42:[function(require,module,exports){
module.exports = true;
},{}],43:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":30,"./_iobject":36,"./_object-gops":47,"./_object-keys":50,"./_object-pie":51,"./_to-object":62}],44:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":19,"./_dom-create":27,"./_enum-bug-keys":28,"./_html":34,"./_object-dps":46,"./_shared-key":55}],45:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_ie8-dom-define":35,"./_to-primitive":63}],46:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":19,"./_descriptors":26,"./_object-dp":45,"./_object-keys":50}],47:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],48:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":32,"./_shared-key":55,"./_to-object":62}],49:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":20,"./_has":32,"./_shared-key":55,"./_to-iobject":60}],50:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":28,"./_object-keys-internal":49}],51:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],52:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],53:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":33}],54:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":32,"./_object-dp":45,"./_wks":65}],55:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":56,"./_uid":64}],56:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":31}],57:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":25,"./_to-integer":59}],58:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":59}],59:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],60:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":25,"./_iobject":36}],61:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":59}],62:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":25}],63:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":37}],64:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],65:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":31,"./_shared":56,"./_uid":64}],66:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":21,"./_core":23,"./_iterators":41,"./_wks":65}],67:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":19,"./_core":23,"./core.get-iterator-method":66}],68:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":18,"./_iter-define":39,"./_iter-step":40,"./_iterators":41,"./_to-iobject":60}],69:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":29,"./_object-assign":43}],70:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":39,"./_string-at":57}],71:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":31,"./_hide":33,"./_iterators":41,"./_wks":65,"./es6.array.iterator":68}],72:[function(require,module,exports){
var Vue // late bind
var version
var map = window.__VUE_HOT_MAP__ = Object.create(null)
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) return
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
      'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Vue.extend(options),
    instances: []
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  injectHook(options, initHookName, function () {
    map[id].instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    var instances = map[id].instances
    instances.splice(instances.indexOf(this), 1)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

function tryWrap (fn) {
  return function (id, arg) {
    try { fn(id, arg) } catch (e) {
      console.error(e)
      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
    }
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (typeof options === 'function') {
    options = options.options
  }
  record.Ctor.options.render = options.render
  record.Ctor.options.staticRenderFns = options.staticRenderFns
  record.instances.slice().forEach(function (instance) {
    instance.$options.render = options.render
    instance.$options.staticRenderFns = options.staticRenderFns
    instance._staticTrees = [] // reset static trees
    instance.$forceUpdate()
  })
})

exports.reload = tryWrap(function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  makeOptionsHot(id, options)
  var record = map[id]
  if (version[1] < 2) {
    // preserve pre 2.2 behavior for global mixin handling
    record.Ctor.extendOptions = options
  }
  var newCtor = record.Ctor.super.extend(options)
  record.Ctor.options = newCtor.options
  record.Ctor.cid = newCtor.cid
  record.Ctor.prototype = newCtor.prototype
  if (newCtor.release) {
    // temporary global mixin strategy used in < 2.0.0-alpha.6
    newCtor.release()
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn('Root or manually mounted instance modified. Full reload required.')
    }
  })
})

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvYXJ0aWNsZS9pbmRleC5qcyIsInNyYy92aWV3cy9hcnRpY2xlL3NyYy92aWV3cy9hcnRpY2xlL2luZGV4LnZ1ZT9hNGFjYjE2NCIsInNyYy92aWV3cy9hcnRpY2xlL21vZHVsZS9kZXRhaWwvc3JjL3ZpZXdzL2FydGljbGUvbW9kdWxlL2RldGFpbC9pbmRleC52dWU/NDg2OTEzMmMiLCJzcmMvdmlld3MvYXJ0aWNsZS9tb2R1bGUvZGV0YWlsL3NyYy92aWV3cy9hcnRpY2xlL21vZHVsZS9kZXRhaWwvanVtYm90cm9uLnZ1ZT9jZTE4ZjVkMCIsInNyYy92aWV3cy9hcnRpY2xlL21vZHVsZS9kZXRhaWwvc2VydmljZS5qcyIsInNyYy92aWV3cy9wdWJsaWMvZGVtby1kYXRhLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL2NvbW1vbi5qcyIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9zcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vZm9vdGVyLnZ1ZT9hZjljZjNhYyIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9zcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vaGVhZGVyLnZ1ZT83MjYzNmQ0NCIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9zcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vcGFnZS52dWU/MWNhMmIxNjUiLCJzcmMvdmlld3MvcHVibGljL3V0aWxzL3VybC1wYXJhbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7QUFFQTs7Ozs7O0FBRUEsa0JBQVE7QUFDSixRQUFJLE1BREE7QUFFSixZQUFRLGdCQUFDLENBQUQ7QUFBQSxlQUFPLGtCQUFQO0FBQUE7QUFGSixDQUFSOzs7Ozs7Ozs7Ozs7O0FDR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7Ozs7O0FBYkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFqQkE7Ozs7O0FBaEJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2FBOzs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQURBO0FBVUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUF4QkE7Ozs7O0FBZkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDWCxjQURXLHdCQUNTO0FBQUEsWUFBVCxFQUFTLHVFQUFKLEVBQUk7O0FBQ2hCLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxnQkFBSSxVQUFVLEVBQWQ7O0FBRGtDO0FBQUE7QUFBQTs7QUFBQTtBQUdsQyxnRUFBYyxtQkFBUSxNQUF0Qiw0R0FBOEI7QUFBQSx3QkFBckIsQ0FBcUI7O0FBQzFCLHdCQUFJLEVBQUUsS0FBRixLQUFZLEVBQWhCLEVBQW9CO0FBQ2hCLGtDQUFVLENBQVY7QUFDSDtBQUNKO0FBUGlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWxDLG9CQUFRLE9BQVI7QUFDSCxTQVRNLENBQVA7QUFVSDtBQVpVLEM7Ozs7Ozs7Ozs7QUNKZixJQUFJLFNBQVMsQ0FBQztBQUNWLFdBQU8sUUFERztBQUVWLFVBQU0sMkVBRkk7QUFHVixrd0VBSFU7QUEyRFYsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNEQSxDQUFELEVBK0RWO0FBQ0MsV0FBTyxLQURSO0FBRUMsVUFBTSwrREFGUDtBQUdDLHFoQkFIRDtBQVlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFaWCxDQS9EVSxFQStFVjtBQUNDLFdBQU8sTUFEUjtBQUVDLFVBQU0sZ0VBRlA7QUFHQyxpY0FIRDtBQVFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFSWCxDQS9FVSxFQTJGVjtBQUNDLFdBQU8sWUFEUjtBQUVDLFVBQU0sbUVBRlA7QUFHQyx5ZkFIRDtBQWFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFiWCxDQTNGVSxFQTRHVjtBQUNDLFdBQU8sT0FEUjtBQUVDLFVBQU0sMkVBRlA7QUFHQyxpdktBSEQ7QUEyQ0MsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNDWCxDQTVHVSxFQTJKVjtBQUNDLFdBQU8sYUFEUjtBQUVDLFVBQU0sd0VBRlA7QUFHQyw4YkFIRDtBQUlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFKWCxDQTNKVSxDQUFiOztBQXFLQSxJQUFJLFFBQVE7QUFDUixhQUFTLGlCQUREO0FBRVIsZUFBVztBQUNQLGVBQU8scUJBREE7QUFFUCxpQkFBUyw2Q0FGRjtBQUdQLGdCQUFRO0FBQ0osNkRBREk7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFGSCxDQUFaOztBQVlBLElBQUksT0FBTztBQUNQLGVBQVc7QUFDUCxlQUFPLG9CQURBO0FBRVAsaUJBQVMsOENBRkY7QUFHUCxnQkFBUTtBQUNKLGtCQUFNLFFBREY7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFESixDQUFYOztBQVdBLElBQUksU0FBUztBQUNULGNBQVUsY0FERDs7QUFHVCxhQUFTLENBQUM7QUFDTixjQUFNLElBREE7QUFFTixjQUFNO0FBRkEsS0FBRCxFQUdOO0FBQ0MsY0FBTSxTQURQO0FBRUMsY0FBTTtBQUZQLEtBSE0sQ0FIQTs7QUFXVCxnQkFBWTtBQVhILENBQWI7O2tCQWNlO0FBQ1gsYUFBUyxLQURFO0FBRVgsWUFBUSxJQUZHO0FBR1gsY0FBVSxNQUhDO0FBSVgsY0FBVTtBQUpDLEM7Ozs7Ozs7Ozs7QUMxTWY7Ozs7QUFFQTs7Ozs7O2tCQUVlO0FBQ1gsYUFBUyxtQkFBTTtBQUNYLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsT0FBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQUxVO0FBTVgsY0FBVSxvQkFBTTtBQUNaLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsUUFBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQVZVO0FBV1gsZ0JBQVksc0JBQU07QUFDZCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLFVBQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFmVSxDOzs7Ozs7Ozs7Ozs7O0FDTWY7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBZkE7Ozs7O0FBWEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JBOzs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUEzQkE7Ozs7O0FBMUJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVUE7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7O0FBYkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0FlLFVBQUMsSUFBRCxFQUFPLEdBQVAsRUFBZTtBQUMxQixXQUFPLEVBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsWUFBSSxNQUFNLElBQUksTUFBSixDQUFXLFVBQVUsSUFBVixHQUFpQixlQUE1QixDQUFWO0FBQUEsWUFDSSxRQUFRLE1BQU0sR0FBTixHQUFZLE9BQU8sUUFBUCxDQUFnQixNQUR4Qzs7QUFHQSxZQUFJLElBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixLQUFoQixDQUFzQixHQUF0QixDQUFSOztBQUVBLGdCQUFRLElBQUksbUJBQW1CLEVBQUUsQ0FBRixDQUFuQixDQUFKLEdBQStCLElBQXZDO0FBQ0gsS0FQTSxDQUFQO0FBUUgsQzs7O0FDVEQ7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2luZGV4LnZ1ZSdcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI2FwcFwiLFxyXG4gICAgcmVuZGVyOiAoaCkgPT4gaChBcHApXHJcbn0pXHJcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZmV6LXBhZ2U+XG4gICAgICAgIDxmZXotanVtYm90cm9uIDppZD1cImlkXCI+PC9mZXotanVtYm90cm9uPlxuICAgICAgICA8ZmV6LWRldGFpbCA6aWQ9XCJpZFwiPjwvZmV6LWRldGFpbD5cbiAgICA8L2Zlei1wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgZmV6UGFnZSBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9wYWdlLnZ1ZSdcbmltcG9ydCBmZXpKdW1ib3Ryb24gZnJvbSAnLi9tb2R1bGUvZGV0YWlsL2p1bWJvdHJvbi52dWUnXG5pbXBvcnQgZmV6RGV0YWlsIGZyb20gJy4vbW9kdWxlL2RldGFpbC9pbmRleC52dWUnXG5cbmltcG9ydCB1cmxQYXJhbSBmcm9tICdwdWJsaWMvdXRpbHMvdXJsLXBhcmFtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgZmV6UGFnZSxcbiAgICAgICAgICAgIGZlekp1bWJvdHJvbixcbiAgICAgICAgICAgIGZlekRldGFpbFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgbGV0IF92bSA9IHRoaXNcbiAgICAgICAgICAgIHVybFBhcmFtKCdpZCcpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBfdm0uaWQgPSBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgYmxvZy1tYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2ctcG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwiY29udGVudFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGlkOiBmdW5jdGlvbih2YWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtYm90cm9uKHZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAganVtYm90cm9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jb250ZW50ID0gZGF0YS5jb250ZW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPmhlbGxvLHt7anVtYm90cm9uRGF0YS50aXRsZX19ITwvaDE+XG4gICAgICAgICAgICA8cD57e2p1bWJvdHJvbkRhdGEuZGVzY319PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgOmhyZWY9XCJqdW1ib3Ryb25EYXRhLnZpZXdNb3JlLmhyZWZcIiByb2xlPVwiYnV0dG9uXCI+e3tqdW1ib3Ryb25EYXRhLnZpZXdNb3JlLnRleHR9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcbmltcG9ydCB1cmxQYXJhbSBmcm9tICdwdWJsaWMvdXRpbHMvdXJsLXBhcmFtJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1bWJvdHJvbkRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHZpZXdNb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGlkOiBmdW5jdGlvbih2YWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtYm90cm9uKHZhbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAganVtYm90cm9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5qdW1ib3Ryb25EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBBcGlEYXRhIGZyb20gJ3B1YmxpYy9kZW1vLWRhdGEnXG5cbmltcG9ydCBRIGZyb20gJ3EnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJEYXRhKGlkID0gXCJcIikge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBydG5EYXRhID0ge31cblxuICAgICAgICAgICAgZm9yIChsZXQgdiBvZiBBcGlEYXRhLmZyYW1lcykge1xuICAgICAgICAgICAgICAgIGlmICh2LnRpdGxlID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBydG5EYXRhID0gdlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocnRuRGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJsZXQgZnJhbWVzID0gW3tcbiAgICB0aXRsZTogXCJOb2RlanNcIixcbiAgICBkZXNjOiBcIkZFWiDmnoTlu7rlnKggTm9kZUpTIOWfuuS6jiBDaHJvbWUgVjgg5byV5pOO55qEIEphdmFTY3JpcHQg6L+Q6KGM546v5aKD77yM5YW25LqL5Lu26amx5Yqo6Z2e6Zi75aGe55qE54m55oCn77yM5p6B5YW25b+r6YCf55qE57yW6K+R5YmN56uv5ZCE56eN6LWE5rqQXCIsXG4gICAgY29udGVudDogYDxkaXYgaWQ9XCJob21lLWludHJvXCI+XG5cbiAgICAgICAgPHA+Tm9kZS5qc8KuIGlzIGEgSmF2YVNjcmlwdCBydW50aW1lIGJ1aWx0IG9uIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS92OC9cIj5DaHJvbWUncyBWOCBKYXZhU2NyaXB0IGVuZ2luZTwvYT4uXG5Ob2RlLmpzIHVzZXMgYW4gZXZlbnQtZHJpdmVuLCBub24tYmxvY2tpbmcgSS9PIG1vZGVsIHRoYXQgbWFrZXMgaXRcbmxpZ2h0d2VpZ2h0IGFuZCBlZmZpY2llbnQuIE5vZGUuanMnIHBhY2thZ2UgZWNvc3lzdGVtLCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiPm5wbTwvYT4sIGlzIHRoZSBsYXJnZXN0IGVjb3N5c3RlbSBvZiBvcGVuXG5zb3VyY2UgbGlicmFyaWVzIGluIHRoZSB3b3JsZC48L3A+XG5cblxuXG4gICAgICAgIDxoMiBpZD1cImhvbWUtZG93bmxvYWRoZWFkXCIgZGF0YS1kbC1sb2NhbD1cIkRvd25sb2FkIGZvclwiPkRvd25sb2FkIGZvciBtYWNPUyAoeDY0KTwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtZG93bmxvYWRibG9ja1wiPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y2LjEwLjAvbm9kZS12Ni4xMC4wLnBrZ1wiIGNsYXNzPVwiaG9tZS1kb3dubG9hZGJ1dHRvblwiIHRpdGxlPVwiRG93bmxvYWQgdjYuMTAuMCBMVFNcIiBkYXRhLXZlcnNpb249XCJ2Ni4xMC4wXCI+XG4gICAgICAgICAgICB2Ni4xMC4wIExUU1xuICAgICAgICAgICAgPHNtYWxsPlJlY29tbWVuZGVkIEZvciBNb3N0IFVzZXJzPC9zbWFsbD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Rvd25sb2FkL1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y2Lm1kIzYuMTAuMFwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjYueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y3LjcuMS9ub2RlLXY3LjcuMS5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY3LjcuMSBDdXJyZW50XCIgZGF0YS12ZXJzaW9uPVwidjcuNy4xXCI+XG4gICAgICAgICAgICAgIHY3LjcuMSBDdXJyZW50XG4gICAgICAgICAgICAgIDxzbWFsbD5MYXRlc3QgRmVhdHVyZXM8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9jdXJyZW50L1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y3Lm1kIzcuNy4xXCI+Q2hhbmdlbG9nPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC12Ny54L2RvY3MvYXBpL1wiPkFQSSBEb2NzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBPciBoYXZlIGEgbG9vayBhdCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvTFRTI2x0cy1zY2hlZHVsZVwiPkxUUyBzY2hlZHVsZS48L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL25vZGVqcy5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiTlBNXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIE5QTSDmjqXlhaXlhajnkIPmnIDlpKfnmoTlvIDmupDnlJ/mgIHns7vnu5/vvIzlhbflpIfml6DpmZDnmoTlip/og73mianlsZXog73lipvvvIzlj6/mlbTlkIjlm73pmYXliY3msr/nmoTlvIDmupDmoYbmnrbvvIzpgILlupTnnqzmga/kuIflj5jnmoTmioDmnK/mm7Tmm79cIixcbiAgICBjb250ZW50OiBgPGgxIGNsYXNzPVwidGl0bGUgZW0tZGVmYXVsdCB0eXBlLW5ldXRyYWwtMTFcIj5cbiAgICAgICAgICBCdWlsZCBhbWF6aW5nIHRoaW5nc1xuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImg1IGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExIHBieGxcIj5cbiAgICAgICAgICBucG0gaXMgdGhlIHBhY2thZ2UgbWFuYWdlciBmb3IgSmF2YVNjcmlwdC4gRmluZCwgc2hhcmUsIGFuZCByZXVzZVxuICAgICAgICAgIHBhY2thZ2VzIG9mIGNvZGUgZnJvbSBodW5kcmVkcyBvZiB0aG91c2FuZHMgb2YgZGV2ZWxvcGVycyDigJQgYW5kXG4gICAgICAgICAgYXNzZW1ibGUgdGhlbSBpbiBwb3dlcmZ1bCBuZXcgd2F5cy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBpZD1cIm1haW4tY3RhXCIgaHJlZj1cIiNwYW5lLWhvbWVwYWdlLXByaWNpbmdcIiBjbGFzcz1cImJ0biBidG4taGlnaGxpZ2h0LTMgbXJsXCIgZGF0YS1ldmVudC1uYW1lPVwiaG9tZXBhZ2UtaGVyby1jdGFcIj5HZXQgc3RhcnRlZDwvYT5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkd1bHBcIixcbiAgICBkZXNjOiBcIkZFWiDmlbTlkIhHdWxw55qE5LyX5aSa5o+S5Lu277yM57yW6K+R44CB5LyY5YyW5ZKM57uE57uH5YmN56uv5aSN5p2C55qE5qih5Z2X5Y+K6Z2Z5oCB6LWE5rqQ77yM5Zad552A5Y+v5LmQ5YS/44CB5ZO8552A5bCP5puy5YS/77yM6Ieq5Yqo5YyW5a6M5oiQ5YmN56uv5aSn6YeP6YeN5aSN5bel5L2cXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj5BdXRvbWF0ZSBhbmQgZW5oYW5jZSB5b3VyIHdvcmtmbG93PC9oMT48aDIgY2xhc3M9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICBndWxwIGlzIGEgdG9vbGtpdCBmb3IgYXV0b21hdGluZyBwYWluZnVsIG9yIHRpbWUtY29uc3VtaW5nIHRhc2tzIGluIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3csIHNvIHlvdSBjYW4gc3RvcCBtZXNzaW5nIGFyb3VuZCBhbmQgYnVpbGQgc29tZXRoaW5nLlxuICAgICAgICA8L2gyPjxkaXYgY2xhc3M9XCJjdGFzXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjdGFzLWJ1dHRvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VscGpzL2d1bHAvYmxvYi9tYXN0ZXIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQubWRcIj5HZXQgU3RhcnRlZDwvYT5cbiAgICAgICAgPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHA6Ly9ndWxwanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJyb3dzZXJpZnlcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcmlmeSDmqKHlnZfljJbnu4Tnu4flkoznrqHnkIbpobnnm67nmoTlkITkuKrlip/og73mqKHlnZfvvIzmnoHlpKfmj5DljYfpobnnm67nmoTlj6/nu7TmiqTmgKfjgIHlip/og73lpI3nlKjmgKfvvIzlubblrp7njrDnp6/mnKjlvI/nmoTmkK3lu7rnvZHpobVcIixcbiAgICBjb250ZW50OiBgPHNlY3Rpb24gaWQ9XCJ0b3AtaG9tZS1zZWN0aW9uXCIgY2xhc3M9XCJ0b3Atc2VjdGlvbiBjb2xvci1hXCI+XG4gICAgICA8ZGl2IGlkPVwidG9wLWhvbWUtaW1hZ2VcIj48L2Rpdj5cblxuICAgICAgIDxoMyBpZD1cInRvcC1zdWJ0aXRsZVwiIGNsYXNzPVwibGFyZ2UtZm9udFwiPkJyb3dzZXJpZnkgbGV0cyB5b3UgcmVxdWlyZSg8c3BhbiBjbGFzcz1cImNvbG9yLWRcIj4nbW9kdWxlcyc8L3NwYW4+KSBpbiB0aGUgYnJvd3NlciBieSBidW5kbGluZyB1cCBhbGwgb2YgeW91ciBkZXBlbmRlbmNpZXMuPC9oMz5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svbm9kZS1icm93c2VyaWZ5I3VzYWdlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b3AtYnV0dG9uXCIgaWQ9XCJ0b3AtYnV0dG9uMlwiPlxuICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9zZWN0aW9uPmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vYnJvd3NlcmlmeS5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm93ZXJcIixcbiAgICBkZXNjOiBcIkZFWiDlj6/phY3nva7kvb/nlKggQm93ZXIg5pCc57Si44CB5a6J6KOF44CB5pu05paw5ZKM5Y246L295aaCSmF2YVNjcmlwdOOAgUNTU+S5i+exu+eahOe9kee7nOi1hOa6kO+8jOmAmui/h+iHquWKqOWMluazqOWFpeaKgOacr+WujOe+juino+WGs+WkjeadgueahOahhuaetuWMheeuoeeQhumXrumimFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGNsYXNzPVwibWFpblwiPlxuPHAgY2xhc3M9XCJsZWFkXCI+V2ViIHNpdGVzIGFyZSBtYWRlIG9mIGxvdHMgb2YgdGhpbmdzIOKAlCBmcmFtZXdvcmtzLCBsaWJyYXJpZXMsIGFzc2V0cywgYW5kIHV0aWxpdGllcy4gQm93ZXIgbWFuYWdlcyBhbGwgdGhlc2UgdGhpbmdzIGZvciB5b3UuPC9wPlxuPHA+S2VlcGluZyB0cmFjayBvZiBhbGwgdGhlc2UgcGFja2FnZXMgYW5kIG1ha2luZyBzdXJlIHRoZXkgYXJlIHVwIHRvIGRhdGUgKG9yIHNldCB0byB0aGUgc3BlY2lmaWMgdmVyc2lvbnMgeW91IG5lZWQpIGlzIHRyaWNreS4gQm93ZXIgdG8gdGhlIHJlc2N1ZSE8L3A+XG48cD5Cb3dlciBjYW4gbWFuYWdlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgZm9udHMgb3IgZXZlbiBpbWFnZSBmaWxlcy4gQm93ZXIgZG9lc27igJl0IGNvbmNhdGVuYXRlIG9yIG1pbmlmeSBjb2RlIG9yIGRvIGFueXRoaW5nIGVsc2UgLSBpdCBqdXN0IGluc3RhbGxzIHRoZSByaWdodCB2ZXJzaW9ucyBvZiB0aGUgcGFja2FnZXMgeW91IG5lZWQgYW5kIHRoZWlyIGRlcGVuZGVuY2llcy48L3A+XG48cD5UbyA8YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiPmdldCBzdGFydGVkPC9hPiwgQm93ZXIgd29ya3MgYnkgZmV0Y2hpbmcgYW5kIGluc3RhbGxpbmcgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gZnJvbSBhbGwgb3ZlciwgdGFraW5nIGNhcmUgb2YgaHVudGluZywgZmluZGluZywgZG93bmxvYWRpbmcsIGFuZCBzYXZpbmcgdGhlIHN0dWZmIHlvdeKAmXJlIGxvb2tpbmcgZm9yLiBCb3dlciBrZWVwcyB0cmFjayBvZiB0aGVzZSBwYWNrYWdlcyBpbiBhIG1hbmlmZXN0IGZpbGUsIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+PC9hPi4gSG93IHlvdSB1c2UgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gaXMgdXAgdG8geW91LiBCb3dlciBwcm92aWRlcyBob29rcyB0byBmYWNpbGl0YXRlIHVzaW5nIHBhY2thZ2VzIGluIHlvdXIgPGEgaHJlZj1cIi9kb2NzL3Rvb2xzXCI+dG9vbHMgYW5kIHdvcmtmbG93czwvYT4uPC9wPlxuPHA+Qm93ZXIgaXMgb3B0aW1pemVkIGZvciB0aGUgZnJvbnQtZW5kLiBJZiBtdWx0aXBsZSBwYWNrYWdlcyBkZXBlbmQgb24gYSBwYWNrYWdlIC0galF1ZXJ5IGZvciBleGFtcGxlIC0gQm93ZXIgd2lsbCBkb3dubG9hZCBqUXVlcnkganVzdCBvbmNlLiBUaGlzIGlzIGtub3duIGFzIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoIGFuZCBpdCBoZWxwcyByZWR1Y2UgcGFnZSBsb2FkLjwvcD5cbjxoMiBpZD1cImluc3RhbGwtYm93ZXJcIj48YSBocmVmPVwiI2luc3RhbGwtYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5JbnN0YWxsIEJvd2VyPC9oMj5cbjxwPkJvd2VyIGlzIGEgY29tbWFuZCBsaW5lIHV0aWxpdHkuIEluc3RhbGwgaXQgd2l0aCBucG0uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ucG0gaW5zdGFsbCAtZyBib3dlcjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkJvd2VyIHJlcXVpcmVzIDxhIGhyZWY9XCJodHRwOi8vbm9kZWpzLm9yZy9cIj5ub2RlLCBucG08L2E+IGFuZCA8YSBocmVmPVwiaHR0cDovL2dpdC1zY20ub3JnXCI+Z2l0PC9hPi48L3A+XG48cD5MYXRlc3QgcmVsZWFzZTogPGEgaHJlZj1cIlwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9ib3dlci5zdmc/bWF4QWdlPTI1OTIwMDBcIiBhbHQ9XCJib3dlciB2ZXJzaW9uXCI+PC9hPjwvcD5cbjxwPkZvciB0cm91Ymxlc2hvb3RpbmcgaW5zdGFsbGF0aW9uIG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMsIHJlYWQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYm93ZXIvYm93ZXIvd2lraS9Ucm91Ymxlc2hvb3RpbmdcIj50cm91Ymxlc2hvb3Rpbmc8L2E+IHdpa2kgcGFnZS48L3A+XG48aDIgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj48YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkdldHRpbmcgc3RhcnRlZDwvaDI+XG48aDMgaWQ9XCJpbnN0YWxsLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNpbnN0YWxsLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBwYWNrYWdlczwvaDM+XG48cD5JbnN0YWxsIHBhY2thZ2VzIHdpdGggPGEgaHJlZj1cIi9kb2NzL2FwaSNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi4gQm93ZXIgaW5zdGFsbHMgcGFja2FnZXMgdG8gPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyX2NvbXBvbmVudHMvPC9jb2RlPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgJmx0O3BhY2thZ2UmZ3Q7PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPHA+QSBwYWNrYWdlIGNhbiBiZSBhIEdpdEh1YiBzaG9ydGhhbmQsIGEgR2l0IGVuZHBvaW50LCBhIFVSTCwgYW5kIG1vcmUuIFJlYWQgbW9yZSBhYm91dCA8YSBocmVmPVwiL2RvY3MvYXBpLyNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJjXCI+IyBpbnN0YWxscyB0aGUgcHJvamVjdCBkZXBlbmRlbmNpZXMgbGlzdGVkIGluIGJvd2VyLmpzb248L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbFxuPHNwYW4gY2xhc3M9XCJjXCI+IyByZWdpc3RlcmVkIHBhY2thZ2U8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBqcXVlcnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0SHViIHNob3J0aGFuZDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGRlc2FuZHJvL21hc29ucnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0IGVuZHBvaW50PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgZ2l0Oi8vZ2l0aHViLmNvbS91c2VyL3BhY2thZ2UuZ2l0XG48c3BhbiBjbGFzcz1cImNcIj4jIFVSTDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGh0dHA6Ly9leGFtcGxlLmNvbS9zY3JpcHQuanM8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48aDMgaWQ9XCJzZWFyY2gtcGFja2FnZXNcIj48YSBocmVmPVwiI3NlYXJjaC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNlYXJjaCBwYWNrYWdlczwvaDM+XG48cD48YSBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaCBCb3dlciBwYWNrYWdlczwvYT4gYW5kIGZpbmQgdGhlIHJlZ2lzdGVyZWQgcGFja2FnZSBuYW1lcyBmb3IgeW91ciBmYXZvcml0ZSBwcm9qZWN0cy48L3A+XG48aDMgaWQ9XCJzYXZlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzYXZlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+U2F2ZSBwYWNrYWdlczwvaDM+XG48cD5DcmVhdGUgYSA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIuanNvbjwvY29kZT4gZmlsZSBmb3IgeW91ciBwYWNrYWdlIHdpdGggPGEgaHJlZj1cIi9kb2NzL2NyZWF0aW5nLXBhY2thZ2VzLyNib3dlcmpzb25cIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5pdDwvY29kZT48L2E+LjwvcD5cbjxwPlRoZW4gc2F2ZSBuZXcgZGVwZW5kZW5jaWVzIHRvIHlvdXIgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IHdpdGggPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGwgUEFDS0FHRSAtLXNhdmU8L2NvZGU+PC9wPlxuPGgzIGlkPVwidXNlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiN1c2UtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Vc2UgcGFja2FnZXM8L2gzPlxuPHA+SG93IHlvdSB1c2UgcGFja2FnZXMgaXMgdXAgdG8geW91LiBXZSByZWNvbW1lbmQgeW91IHVzZSBCb3dlciB0b2dldGhlciB3aXRoIDxhIGhyZWY9XCIvZG9jcy90b29scy9cIj5HcnVudCwgUmVxdWlyZUpTLCBZZW9tYW4sIGFuZCBsb3RzIG9mIG90aGVyIHRvb2xzPC9hPiBvciBidWlsZCB5b3VyIG93biB3b3JrZmxvdyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkvXCI+dGhlIEFQSTwvYT4uIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGluc3RhbGxlZCBwYWNrYWdlcyBkaXJlY3RseSwgbGlrZSB0aGlzLCBpbiB0aGUgY2FzZSBvZiA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+anF1ZXJ5PC9jb2RlPjo8L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWh0bWxcIiBkYXRhLWxhbmc9XCJodG1sXCI+PHNwYW4gY2xhc3M9XCJudFwiPiZsdDtzY3JpcHQgPC9zcGFuPjxzcGFuIGNsYXNzPVwibmFcIj5zcmM9PC9zcGFuPjxzcGFuIGNsYXNzPVwic1wiPlwiYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzXCI8L3NwYW4+PHNwYW4gY2xhc3M9XCJudFwiPiZndDsmbHQ7L3NjcmlwdCZndDs8L3NwYW4+PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgyIGlkPVwidHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiPjxhIGhyZWY9XCIjdHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlR3aXR0ZXIgdXBkYXRlcyBmcm9tIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jvd2VyXCI+QGJvd2VyPC9hPjwvaDI+XG48cD48YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiIGRhdGEtd2lkZ2V0LWlkPVwiNDgwMzc3MjkxMzY5NzU0NjI1XCI+VHdlZXRzIGJ5IEBib3dlcjwvYT5cbjwvcD5cblxuPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYm93ZXIuaW8vXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm9yd3NlclN5bmNcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcnN5bmMg6K6p5rWP6KeI5Zmo5a6e5pe25b+r6YCf55qE5ZON5bqU5YmN56uv5ZCE56eN5paH5Lu255qE5pu05pS55bm26Ieq5Yqo5Yi35paw6aG16Z2i77yM5Lqm5Y+v5a6e5pe25ZCM5q2l5ZCE5Liq57uI56uv77yM5o+Q6auY6Iez5bCRMzAl55qE5byA5Y+R5pWI546HXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhvb2tcIj5UaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLjwvaDE+PHAgY2xhc3M9XCJyb25zZWFsXCI+SXTigJlzIHdpY2tlZC1mYXN0IGFuZCB0b3RhbGx5IGZyZWUuPC9wPjxwIGNsYXNzPVwidmlkZW9cIj48YSBjbGFzcz1cInZpZGVvX19saW5rXCIgaHJlZj1cIiNcIj48L2E+PC9wPjxwIGNsYXNzPVwiaG93LXRvXCI+PC9wPjxwIGNsYXNzPVwiaG93LXRvX19jb21tYW5kXCI+bnBtIGluc3RhbGwgLWcgYnJvd3Nlci1zeW5jPC9wPjxwIGNsYXNzPVwiY3RhXCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgaHJlZj1cIiNpbnN0YWxsXCIgdGl0bGU9XCJHZXQgU3RhcnRlZFwiPkdldCBTdGFydGVkPC9hPjwvcD48ZGl2IGNsYXNzPVwicGxheWVyXCI+PHA+J2JvbmpvdXI8L3A+PC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYnJvd3NlcnN5bmMuaW8vXCJcbiAgICB9XG59XVxuXG5sZXQgaW5kZXggPSB7XG4gICAgZmV6ZGVzYzogXCJGRVog5YmN56uv5qih5Z2X5YyW5bel56iL5byA5Y+R5qGG5p62XCIsXG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkhlbGxvLCBGRVogQW5kIFZ1ZSFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKrkvb/nlKggRkVaIOaehOW7uueahOWJjeerr+aooeWdl+WMluW8gOWPkeekuuS+i++8jOa8lOekuuS6huWfuuS6jlZ1ZeWNleaWh+S7tue7hOS7tueahOW8gOWPkee7k+aehOOAglwiLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIG5hbWU6IGA8aSBjbGFzcz1cImZhIGZhLWdpdGh1Yi1hbHRcIj48L2k+IEdpdEh1YmAsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mdXJpYy16aGFvL2ZlelwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBsaXN0ID0ge1xuICAgIGp1bWJvdHJvbjoge1xuICAgICAgICB0aXRsZTogXCJGRVogQW5kIFZ1ZSBGcmFtZSFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKpGRVrmlbTlkIhWdWXnmoTliJfooajlsZXnpLrpobXvvIzor7fngrnlh7vkuIvpnaLliJfooajnmoQgRGV0YWlsIOaMiemSrui/m+WFpeivpuaDhemhtea1j+iniFwiLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIG5hbWU6IFwi5p+l55yL5pu05aSa5L+h5oGvXCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly9mZXouaGVzdHVkeS5jb21cIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgY29tbW9uID0ge1xuICAgIHNpdGVOYW1lOiBcIkZFWiBWdWUgREVNT1wiLFxuXG4gICAgbmF2RGF0YTogW3tcbiAgICAgICAgbmFtZTogXCLpppbpobVcIixcbiAgICAgICAgaHJlZjogXCJpbmRleC5odG1sXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiRkVa5Z+65pys5p625p6EXCIsXG4gICAgICAgIGhyZWY6IFwibGlzdC5odG1sXCJcbiAgICB9XSxcblxuICAgIGZvb3RlclRleHQ6IFwiwqkgMjAxNyBGRVog5YmN56uv5qih5Z2X5YyW5bel56iL5byA5Y+R5qGG5p62IENyZWF0ZWQgYnkgRnVyaWMuemhhb1wiXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImluZGV4XCI6IGluZGV4LFxuICAgIFwibGlzdFwiOiBsaXN0LFxuICAgIFwiZnJhbWVzXCI6IGZyYW1lcyxcbiAgICBcImNvbW1vblwiOiBjb21tb25cbn1cbiIsImltcG9ydCBRIGZyb20gJ3EnXG5cbmltcG9ydCBBcGlEYXRhIGZyb20gJ3B1YmxpYy9kZW1vLWRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYXZMaXN0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5uYXZEYXRhKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgc2l0ZU5hbWU6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLnNpdGVOYW1lKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZm9vdGVyVGV4dDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24uZm9vdGVyVGV4dClcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGZvb3RlciBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInB1bGwtbGVmdFwiPnt7dGV4dH19PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInB1bGwtcmlnaHRcIj5cblx0XHQ8aSBjbGFzcz1cImljb24gaWNvbi13ZWl4aW5cIj48L2k+XG5cdFx0PGkgY2xhc3M9XCJpY29uIGljb24td2VpYm9cIj48L2k+XG5cdDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9jb21tb24nXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcdHRleHQ6XCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBmb290ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIFNlcnZpY2UuZm9vdGVyVGV4dCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBcdHRoaXMudGV4dCA9IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICBcdHRoaXMuZm9vdGVyKClcbiAgICAgICAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj57e2hlYWRlckRhdGEuc2l0ZU5hbWV9fTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBoZWFkZXJEYXRhLm5hdkxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiaXRlbS5ocmVmXCI+e3tpdGVtLm5hbWV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tLy5uYXYtY29sbGFwc2UgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCBRIGZyb20gJ3EnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzaXRlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbmF2TGlzdDogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGhlYWRlckRhdGFJbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3ZtID0gdGhpc1xuICAgICAgICAgICAgICAgIFEuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZS5zaXRlTmFtZSgpLFxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlLm5hdkxpc3QoKVxuICAgICAgICAgICAgICAgIF0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJ0bkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlTmFtZTogZGF0YVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdkxpc3Q6IGRhdGFbMV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uaGVhZGVyRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHJ0bkRhdGEpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJEYXRhSW5pdCgpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDwhLS0gbmF2IC0tPlxuICAgICAgICA8ZmV6LWhlYWRlcj48L2Zlei1oZWFkZXI+XG4gICAgICAgIDwhLS0ganVtYm90cm9uIC0tPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDxmZXotZm9vdGVyPjwvZmV6LWZvb3Rlcj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGZlekhlYWRlciBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9oZWFkZXIudnVlJ1xuaW1wb3J0IGZlekZvb3RlciBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXIudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBmZXpIZWFkZXIsXG4gICAgICAgIGZlekZvb3RlclxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0IGRlZmF1bHQgKG5hbWUsIHVybCkgPT4ge1xuICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIpLFxuICAgICAgICAgICAgcl90eHQgPSB1cmwgPyB1cmwgOiB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG5cbiAgICAgICAgbGV0IHIgPSByX3R4dC5zdWJzdHIoMSkubWF0Y2gocmVnKVxuXG4gICAgICAgIHJlc29sdmUociA/IGRlY29kZVVSSUNvbXBvbmVudChyWzJdKSA6IG51bGwpXG4gICAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBPYmplY3QuY3JlYXRlKG51bGwpXG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgcmV0dXJuXG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBWdWUuZXh0ZW5kKG9wdGlvbnMpLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH0pXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcCAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHsgZm4oaWQsIGFyZykgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW10gLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgfSlcbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICB9XG4gIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmRtbGxkM012WVhKMGFXTnNaUzlwYm1SbGVDNXFjeUlzSW5OeVl5OTJhV1YzY3k5aGNuUnBZMnhsTDNOeVl5OTJhV1YzY3k5aGNuUnBZMnhsTDJsdVpHVjRMbloxWlQ5aE5HRmpZakUyTkNJc0luTnlZeTkyYVdWM2N5OWhjblJwWTJ4bEwyMXZaSFZzWlM5a1pYUmhhV3d2YzNKakwzWnBaWGR6TDJGeWRHbGpiR1V2Ylc5a2RXeGxMMlJsZEdGcGJDOXBibVJsZUM1MmRXVS9ORGcyT1RFek1tTWlMQ0p6Y21NdmRtbGxkM012WVhKMGFXTnNaUzl0YjJSMWJHVXZaR1YwWVdsc0wzTnlZeTkyYVdWM2N5OWhjblJwWTJ4bEwyMXZaSFZzWlM5a1pYUmhhV3d2YW5WdFltOTBjbTl1TG5aMVpUOWpaVEU0WmpWa01DSXNJbk55WXk5MmFXVjNjeTloY25ScFkyeGxMMjF2WkhWc1pTOWtaWFJoYVd3dmMyVnlkbWxqWlM1cWN5SXNJbk55WXk5MmFXVjNjeTl3ZFdKc2FXTXZaR1Z0Ynkxa1lYUmhMbXB6SWl3aWMzSmpMM1pwWlhkekwzQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMMk52YlcxdmJpNXFjeUlzSW5OeVl5OTJhV1YzY3k5d2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOXpjbU12ZG1sbGQzTXZjSFZpYkdsakwyMXZaSFZzWlM5amIyMXRiMjR2Wm05dmRHVnlMbloxWlQ5aFpqbGpaak5oWXlJc0luTnlZeTkyYVdWM2N5OXdkV0pzYVdNdmJXOWtkV3hsTDJOdmJXMXZiaTl6Y21NdmRtbGxkM012Y0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmFHVmhaR1Z5TG5aMVpUODNNall6Tm1RME5DSXNJbk55WXk5MmFXVjNjeTl3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5emNtTXZkbWxsZDNNdmNIVmliR2xqTDIxdlpIVnNaUzlqYjIxdGIyNHZjR0ZuWlM1MmRXVS9NV05oTW1JeE5qVWlMQ0p6Y21NdmRtbGxkM012Y0hWaWJHbGpMM1YwYVd4ekwzVnliQzF3WVhKaGJTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpWVdKbGJDMXlkVzUwYVcxbEwyTnZjbVV0YW5NdloyVjBMV2wwWlhKaGRHOXlMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJKaFltVnNMWEoxYm5ScGJXVXZZMjl5WlMxcWN5OXZZbXBsWTNRdllYTnphV2R1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwySmhZbVZzTFhKMWJuUnBiV1V2YUdWc2NHVnljeTlsZUhSbGJtUnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzltYmk5blpYUXRhWFJsY21GMGIzSXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMlp1TDI5aWFtVmpkQzloYzNOcFoyNHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMkV0Wm5WdVkzUnBiMjR1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJGa1pDMTBieTExYm5OamIzQmhZbXhsY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZllXNHRiMkpxWldOMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWhjbkpoZVMxcGJtTnNkV1JsY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlkyeGhjM052Wmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlkyOW1MbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlqYjNKbExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpkSGd1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJSbFptbHVaV1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJSbGMyTnlhWEIwYjNKekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWtiMjB0WTNKbFlYUmxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlsYm5WdExXSjFaeTFyWlhsekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWxlSEJ2Y25RdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyWmhhV3h6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bmJHOWlZV3d1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJoaGN5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhR2xrWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFIUnRiQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVdVNExXUnZiUzFrWldacGJtVXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmx2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmx6TFc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVhSbGNpMWpjbVZoZEdVdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybDBaWEl0WkdWbWFXNWxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlwZEdWeUxYTjBaWEF1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJsMFpYSmhkRzl5Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmJHbGljbUZ5ZVM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdGemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV055WldGMFpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXUndMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaSEJ6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5dlltcGxZM1F0WjI5d2N5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXZHdieTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV3RsZVhNdGFXNTBaWEp1WVd3dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxclpYbHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRjR2xsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5d2NtOXdaWEowZVMxa1pYTmpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl5WldSbFptbHVaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYzJWMExYUnZMWE4wY21sdVp5MTBZV2N1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNOb1lYSmxaQzFyWlhrdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzTm9ZWEpsWkM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmMzUnlhVzVuTFdGMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTFwYm1SbGVDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZkRzh0YVc1MFpXZGxjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZEc4dGFXOWlhbVZqZEM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRiR1Z1WjNSb0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTF2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM1J2TFhCeWFXMXBkR2wyWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRXbGtMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTkzYTNNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlkyOXlaUzVuWlhRdGFYUmxjbUYwYjNJdGJXVjBhRzlrTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDJOdmNtVXVaMlYwTFdsMFpYSmhkRzl5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDJWek5pNWhjbkpoZVM1cGRHVnlZWFJ2Y2k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6WXViMkpxWldOMExtRnpjMmxuYmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6WXVjM1J5YVc1bkxtbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwzZGxZaTVrYjIwdWFYUmxjbUZpYkdVdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZkblZsTFdodmRDMXlaV3h2WVdRdFlYQnBMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN08wRkRRVUU3T3pzN1FVRkZRVHM3T3pzN08wRkJSVUVzYTBKQlFWRTdRVUZEU2l4UlFVRkpMRTFCUkVFN1FVRkZTaXhaUVVGUkxHZENRVUZETEVOQlFVUTdRVUZCUVN4bFFVRlBMR3RDUVVGUU8wRkJRVUU3UVVGR1NpeERRVUZTT3pzN096czdPenM3T3pzN08wRkRSMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRTdPenM3T3pzN1FVRkhRVHRCUVVOQk8wRkJRMEU3UVVGRVFUdEJRVWRCT3p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJTRUU3UVVGTFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRm9Ra0U3T3pzN08wRkJZa0U3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOalFUczdPenM3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVSQk8wRkJSMEU3TzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkdRVHRCUVVSQk8wRkJUVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZJUVR0QlFVdEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlRrRTdRVUZxUWtFN096czdPMEZCYUVKQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTJGQk96czdPMEZCUTBFN096czdPenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSa0U3UVVGSVFUdEJRVVJCTzBGQlZVRTdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGR1FUdEJRVVJCTzBGQlRVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRklRVHRCUVV0Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCVGtFN1FVRjRRa0U3T3pzN08wRkJaa0U3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkJRVHM3T3p0QlFVVkJPenM3T3pzN2EwSkJSV1U3UVVGRFdDeGpRVVJYTEhkQ1FVTlRPMEZCUVVFc1dVRkJWQ3hGUVVGVExIVkZRVUZLTEVWQlFVazdPMEZCUTJoQ0xHVkJRVThzV1VGQlJTeFBRVUZHTEVOQlFWVXNWVUZCUXl4UFFVRkVMRVZCUVZVc1RVRkJWaXhGUVVGeFFqdEJRVU5zUXl4blFrRkJTU3hWUVVGVkxFVkJRV1E3TzBGQlJHdERPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVWRzUXl4blJVRkJZeXh0UWtGQlVTeE5RVUYwUWl3MFIwRkJPRUk3UVVGQlFTeDNRa0ZCY2tJc1EwRkJjVUk3TzBGQlF6RkNMSGRDUVVGSkxFVkJRVVVzUzBGQlJpeExRVUZaTEVWQlFXaENMRVZCUVc5Q08wRkJRMmhDTEd0RFFVRlZMRU5CUVZZN1FVRkRTRHRCUVVOS08wRkJVR2xETzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJVV3hETEc5Q1FVRlJMRTlCUVZJN1FVRkRTQ3hUUVZSTkxFTkJRVkE3UVVGVlNEdEJRVnBWTEVNN096czdPenM3T3pzN1FVTktaaXhKUVVGSkxGTkJRVk1zUTBGQlF6dEJRVU5XTEZkQlFVOHNVVUZFUnp0QlFVVldMRlZCUVUwc01rVkJSa2s3UVVGSFZpeHJkMFZCU0ZVN1FVRXlSRllzWTBGQlZUdEJRVU5PTEdOQlFVMHNUVUZFUVR0QlFVVk9MR05CUVUwN1FVRkdRVHRCUVRORVFTeERRVUZFTEVWQkswUldPMEZCUTBNc1YwRkJUeXhMUVVSU08wRkJSVU1zVlVGQlRTd3JSRUZHVUR0QlFVZERMSEZvUWtGSVJEdEJRVmxETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGYVdDeERRUzlFVlN4RlFTdEZWanRCUVVORExGZEJRVThzVFVGRVVqdEJRVVZETEZWQlFVMHNaMFZCUmxBN1FVRkhReXhwWTBGSVJEdEJRVkZETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGU1dDeERRUzlGVlN4RlFUSkdWanRCUVVORExGZEJRVThzV1VGRVVqdEJRVVZETEZWQlFVMHNiVVZCUmxBN1FVRkhReXg1WmtGSVJEdEJRV0ZETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGaVdDeERRVE5HVlN4RlFUUkhWanRCUVVORExGZEJRVThzVDBGRVVqdEJRVVZETEZWQlFVMHNNa1ZCUmxBN1FVRkhReXhwZGt0QlNFUTdRVUV5UTBNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFUTkRXQ3hEUVRWSFZTeEZRVEpLVmp0QlFVTkRMRmRCUVU4c1lVRkVVanRCUVVWRExGVkJRVTBzZDBWQlJsQTdRVUZIUXl3NFlrRklSRHRCUVVsRExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRktXQ3hEUVROS1ZTeERRVUZpT3p0QlFYRkxRU3hKUVVGSkxGRkJRVkU3UVVGRFVpeGhRVUZUTEdsQ1FVUkVPMEZCUlZJc1pVRkJWenRCUVVOUUxHVkJRVThzY1VKQlJFRTdRVUZGVUN4cFFrRkJVeXcyUTBGR1JqdEJRVWRRTEdkQ1FVRlJPMEZCUTBvc05rUkJSRWs3UVVGRlNpeHJRa0ZCVFR0QlFVWkdPMEZCU0VRN1FVRkdTQ3hEUVVGYU96dEJRVmxCTEVsQlFVa3NUMEZCVHp0QlFVTlFMR1ZCUVZjN1FVRkRVQ3hsUVVGUExHOUNRVVJCTzBGQlJWQXNhVUpCUVZNc09FTkJSa1k3UVVGSFVDeG5Ra0ZCVVR0QlFVTktMR3RDUVVGTkxGRkJSRVk3UVVGRlNpeHJRa0ZCVFR0QlFVWkdPMEZCU0VRN1FVRkVTaXhEUVVGWU96dEJRVmRCTEVsQlFVa3NVMEZCVXp0QlFVTlVMR05CUVZVc1kwRkVSRHM3UVVGSFZDeGhRVUZUTEVOQlFVTTdRVUZEVGl4alFVRk5MRWxCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0VzUzBGQlJDeEZRVWRPTzBGQlEwTXNZMEZCVFN4VFFVUlFPMEZCUlVNc1kwRkJUVHRCUVVaUUxFdEJTRTBzUTBGSVFUczdRVUZYVkN4blFrRkJXVHRCUVZoSUxFTkJRV0k3TzJ0Q1FXTmxPMEZCUTFnc1lVRkJVeXhMUVVSRk8wRkJSVmdzV1VGQlVTeEpRVVpITzBGQlIxZ3NZMEZCVlN4TlFVaERPMEZCU1Znc1kwRkJWVHRCUVVwRExFTTdPenM3T3pzN096czdRVU14VFdZN096czdRVUZGUVRzN096czdPMnRDUVVWbE8wRkJRMWdzWVVGQlV5eHRRa0ZCVFR0QlFVTllMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVDBGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVV4Vk8wRkJUVmdzWTBGQlZTeHZRa0ZCVFR0QlFVTmFMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVVVGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVZaVk8wRkJWMWdzWjBKQlFWa3NjMEpCUVUwN1FVRkRaQ3hsUVVGUExGbEJRVVVzVDBGQlJpeERRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZc1JVRkJjVUk3UVVGRGJFTXNiMEpCUVZFc2JVSkJRVkVzVFVGQlVpeERRVUZsTEZWQlFYWkNPMEZCUTBnc1UwRkdUU3hEUVVGUU8wRkJSMGc3UVVGbVZTeERPenM3T3pzN096czdPenM3TzBGRFRXWTdPenM3T3pzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRVFUdEJRVWRCT3p0QlFVTkJPMEZCUTBFN1FVRkJRVHM3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVeEJPMEZCVDBFN1FVRkRRVHRCUVVOQk8wRkJaa0U3T3pzN08wRkJXRUU3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRkMEpCT3pzN08wRkJRMEU3T3pzN096czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSa0U3UVVGRVFUdEJRVTFCT3p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJTVUU3UVVGRFFUdEJRVU5CTzBGQlJrRTdRVUZKUVR0QlFVTkJPMEZCUlVFN1FVRmtRVHRCUVdkQ1FUdEJRVU5CTzBGQlEwRTdRVUV6UWtFN096czdPMEZCTVVKQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRWVUU3T3pzN1FVRkRRVHM3T3pzN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVWkJPMEZCUkVFN096czdPMEZCWWtFN1FVRkJRVHM3T3pzN096czdPenM3T3pzN096czdPenM3TzJ0Q1EwRmxMRlZCUVVNc1NVRkJSQ3hGUVVGUExFZEJRVkFzUlVGQlpUdEJRVU14UWl4WFFVRlBMRVZCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zV1VGQlNTeE5RVUZOTEVsQlFVa3NUVUZCU2l4RFFVRlhMRlZCUVZVc1NVRkJWaXhIUVVGcFFpeGxRVUUxUWl4RFFVRldPMEZCUVVFc1dVRkRTU3hSUVVGUkxFMUJRVTBzUjBGQlRpeEhRVUZaTEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhOUVVSNFF6czdRVUZIUVN4WlFVRkpMRWxCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4TFFVRm9RaXhEUVVGelFpeEhRVUYwUWl4RFFVRlNPenRCUVVWQkxHZENRVUZSTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlJpeERRVUZ1UWl4RFFVRktMRWRCUVN0Q0xFbEJRWFpETzBGQlEwZ3NTMEZRVFN4RFFVRlFPMEZCVVVnc1F6czdPMEZEVkVRN08wRkRRVUU3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOMFFrRTdRVUZEUVR0QlFVTkJPenRCUTBaQk8wRkJRMEU3TzBGRFJFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTRUU3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEY0VKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEZEVKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHM3UVVORVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyNUNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMGhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUXpWRVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5JUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExQkJPenRCUTBGQk8wRkJRMEU3UVVGRFFUczdRVU5HUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHBCTzBGQlEwRTdRVUZEUVRzN1FVTkdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5hUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU55UlVFN1FVRkRRVHRCUVVOQk96dEJRMFpCT3p0QlEwRkJPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTm9RMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTNwRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVObVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTmFRVHM3UVVOQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTmFRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTJoQ1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUczdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExQkJPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTA1Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEweEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYUVKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTA1Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk1RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEweEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFoQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOV1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMUJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMnBEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOSVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMmhDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOYVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdaU2gwTEc0c2NpbDdablZ1WTNScGIyNGdjeWh2TEhVcGUybG1LQ0Z1VzI5ZEtYdHBaaWdoZEZ0dlhTbDdkbUZ5SUdFOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdHBaaWdoZFNZbVlTbHlaWFIxY200Z1lTaHZMQ0V3S1R0cFppaHBLWEpsZEhWeWJpQnBLRzhzSVRBcE8zWmhjaUJtUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYnl0Y0lpZGNJaWs3ZEdoeWIzY2daaTVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR1o5ZG1GeUlHdzlibHR2WFQxN1pYaHdiM0owY3pwN2ZYMDdkRnR2WFZzd1hTNWpZV3hzS0d3dVpYaHdiM0owY3l4bWRXNWpkR2x2YmlobEtYdDJZWElnYmoxMFcyOWRXekZkVzJWZE8zSmxkSFZ5YmlCektHNC9ianBsS1gwc2JDeHNMbVY0Y0c5eWRITXNaU3gwTEc0c2NpbDljbVYwZFhKdUlHNWJiMTB1Wlhod2IzSjBjMzEyWVhJZ2FUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMlp2Y2loMllYSWdiejB3TzI4OGNpNXNaVzVuZEdnN2J5c3JLWE1vY2x0dlhTazdjbVYwZFhKdUlITjlLU0lzSW1sdGNHOXlkQ0JXZFdVZ1puSnZiU0FuZG5WbEoxeHlYRzVjY2x4dWFXMXdiM0owSUVGd2NDQm1jbTl0SUNjdUwybHVaR1Y0TG5aMVpTZGNjbHh1WEhKY2JtNWxkeUJXZFdVb2UxeHlYRzRnSUNBZ1pXdzZJRndpSTJGd2NGd2lMRnh5WEc0Z0lDQWdjbVZ1WkdWeU9pQW9hQ2tnUFQ0Z2FDaEJjSEFwWEhKY2JuMHBYSEpjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnSUNBOFptVjZMWEJoWjJVK1hHNGdJQ0FnSUNBZ0lEeG1aWG90YW5WdFltOTBjbTl1SURwcFpEMWNJbWxrWENJK1BDOW1aWG90YW5WdFltOTBjbTl1UGx4dUlDQWdJQ0FnSUNBOFptVjZMV1JsZEdGcGJDQTZhV1E5WENKcFpGd2lQand2Wm1WNkxXUmxkR0ZwYkQ1Y2JpQWdJQ0E4TDJabGVpMXdZV2RsUGx4dVBDOTBaVzF3YkdGMFpUNWNianh6WTNKcGNIUStYRzVwYlhCdmNuUWdabVY2VUdGblpTQm1jbTl0SUNkd2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOXdZV2RsTG5aMVpTZGNibWx0Y0c5eWRDQm1aWHBLZFcxaWIzUnliMjRnWm5KdmJTQW5MaTl0YjJSMWJHVXZaR1YwWVdsc0wycDFiV0p2ZEhKdmJpNTJkV1VuWEc1cGJYQnZjblFnWm1WNlJHVjBZV2xzSUdaeWIyMGdKeTR2Ylc5a2RXeGxMMlJsZEdGcGJDOXBibVJsZUM1MmRXVW5YRzVjYm1sdGNHOXlkQ0IxY214UVlYSmhiU0JtY205dElDZHdkV0pzYVdNdmRYUnBiSE12ZFhKc0xYQmhjbUZ0SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdGMFlTZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXUTZJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kyOXRjRzl1Wlc1MGN6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptVjZVR0ZuWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1psZWtwMWJXSnZkSEp2Yml4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1psZWtSbGRHRnBiRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamNtVmhkR1ZrS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElGOTJiU0E5SUhSb2FYTmNiaUFnSUNBZ0lDQWdJQ0FnSUhWeWJGQmhjbUZ0S0NkcFpDY3BMblJvWlc0b0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZkbTB1YVdRZ1BTQmtZWFJoWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5WEc1OVhHNDhMM05qY21sd2RENWNiaUlzSWp4MFpXMXdiR0YwWlQ1Y2JpQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVkyOXVkR0ZwYm1WeVhDSStYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKeWIzZGNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pqYjJ3dGMyMHRNVElnWW14dlp5MXRZV2x1WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbUpzYjJjdGNHOXpkRndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhSEkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnZGkxb2RHMXNQVndpWTI5dWRHVnVkRndpUGp3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQThhSEkrWEc0Z0lDQWdQQzlrYVhZK1hHNDhMM1JsYlhCc1lYUmxQbHh1UEhOamNtbHdkRDVjYm1sdGNHOXlkQ0JUWlhKMmFXTmxJR1p5YjIwZ0p5NHZjMlZ5ZG1salpTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmhkR0VvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2NISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xrT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nVTNSeWFXNW5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZJREJjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnZDJGMFkyZzZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbGtPaUJtZFc1amRHbHZiaWgyWVd3c0lHOXNaRlpoYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YW5WdFltOTBjbTl1S0haaGJDbGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdiV1YwYUc5a2N6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FuVnRZbTkwY205dU9pQm1kVzVqZEdsdmJpaHBaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQmZkbTBnUFNCMGFHbHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVMlZ5ZG1salpTNXlaVzVrWlhKRVlYUmhLR2xrS1M1MGFHVnVLQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOTJiUzVqYjI1MFpXNTBJRDBnWkdGMFlTNWpiMjUwWlc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibjFjYmp3dmMyTnlhWEIwUGx4dUlpd2lQSFJsYlhCc1lYUmxQbHh1SUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pxZFcxaWIzUnliMjVjSWo1Y2JpQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbU52Ym5SaGFXNWxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR2d4UG1obGJHeHZMSHQ3YW5WdFltOTBjbTl1UkdGMFlTNTBhWFJzWlgxOUlUd3ZhREUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjRDU3ZTJwMWJXSnZkSEp2YmtSaGRHRXVaR1Z6WTMxOVBDOXdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIQStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnWTJ4aGMzTTlYQ0ppZEc0Z1luUnVMWEJ5YVcxaGNua2dZblJ1TFd4blhDSWdPbWh5WldZOVhDSnFkVzFpYjNSeWIyNUVZWFJoTG5acFpYZE5iM0psTG1oeVpXWmNJaUJ5YjJ4bFBWd2lZblYwZEc5dVhDSStlM3RxZFcxaWIzUnliMjVFWVhSaExuWnBaWGROYjNKbExuUmxlSFI5ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5a2FYWStYRzQ4TDNSbGJYQnNZWFJsUGx4dVBITmpjbWx3ZEQ1Y2JtbHRjRzl5ZENCVFpYSjJhV05sSUdaeWIyMGdKeTR2YzJWeWRtbGpaU2RjYm1sdGNHOXlkQ0IxY214UVlYSmhiU0JtY205dElDZHdkV0pzYVdNdmRYUnBiSE12ZFhKc0xYQmhjbUZ0SjF4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JoZEdFb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdwMWJXSnZkSEp2YmtSaGRHRTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbGMyTTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQmdZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2h5WldZNklGd2lYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdjSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsa09pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlRvZ1UzUnlhVzVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SURCY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2QyRjBZMmc2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xrT2lCbWRXNWpkR2x2YmloMllXd3NJRzlzWkZaaGJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFuVnRZbTkwY205dUtIWmhiQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYldWMGFHOWtjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhblZ0WW05MGNtOXVPaUJtZFc1amRHbHZiaWhwWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JmZG0wZ1BTQjBhR2x6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVTJWeWRtbGpaUzV5Wlc1a1pYSkVZWFJoS0dsa0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjkyYlM1cWRXMWliM1J5YjI1RVlYUmhJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnWkdGMFlTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzU5WEc0OEwzTmpjbWx3ZEQ1Y2JpSXNJbWx0Y0c5eWRDQkJjR2xFWVhSaElHWnliMjBnSjNCMVlteHBZeTlrWlcxdkxXUmhkR0VuWEc1Y2JtbHRjRzl5ZENCUklHWnliMjBnSjNFblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCeVpXNWtaWEpFWVhSaEtHbGtJRDBnWENKY0lpa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdVUzVRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeWRHNUVZWFJoSUQwZ2UzMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2RpQnZaaUJCY0dsRVlYUmhMbVp5WVcxbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMkxuUnBkR3hsSUQwOVBTQnBaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkRzVFWVhSaElEMGdkbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvY25SdVJHRjBZU2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0I5WEc1OVhHNGlMQ0pzWlhRZ1puSmhiV1Z6SUQwZ1czdGNiaUFnSUNCMGFYUnNaVG9nWENKT2IyUmxhbk5jSWl4Y2JpQWdJQ0JrWlhOak9pQmNJa1pGV2lEbW5vVGx1N3JsbktnZ1RtOWtaVXBUSU9XZnV1UzZqaUJEYUhKdmJXVWdWamdnNWJ5VjVwT081NXFFSUVwaGRtRlRZM0pwY0hRZzZMK1E2S0dNNTQ2djVhS0Q3N3lNNVlXMjVMcUw1THUyNmFteDVZcW82WjJlNlppNzVhR2U1NXFFNTRtNTVvQ243N3lNNXA2QjVZVzI1YityNllDZjU1cUU1N3lXNksrUjVZbU41NnV2NVpDRTU2ZU42TFdFNXJxUVhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeGthWFlnYVdROVhDSm9iMjFsTFdsdWRISnZYQ0krWEc1Y2JpQWdJQ0FnSUNBZ1BIQStUbTlrWlM1cWM4S3VJR2x6SUdFZ1NtRjJZVk5qY21sd2RDQnlkVzUwYVcxbElHSjFhV3gwSUc5dUlEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNuTXVaMjl2WjJ4bExtTnZiUzkyT0M5Y0lqNURhSEp2YldVbmN5QldPQ0JLWVhaaFUyTnlhWEIwSUdWdVoybHVaVHd2WVQ0dVhHNU9iMlJsTG1weklIVnpaWE1nWVc0Z1pYWmxiblF0WkhKcGRtVnVMQ0J1YjI0dFlteHZZMnRwYm1jZ1NTOVBJRzF2WkdWc0lIUm9ZWFFnYldGclpYTWdhWFJjYm14cFoyaDBkMlZwWjJoMElHRnVaQ0JsWm1acFkybGxiblF1SUU1dlpHVXVhbk1uSUhCaFkydGhaMlVnWldOdmMzbHpkR1Z0TENBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5M2QzY3VibkJ0YW5NdVkyOXRMMXdpUG01d2JUd3ZZVDRzSUdseklIUm9aU0JzWVhKblpYTjBJR1ZqYjNONWMzUmxiU0J2WmlCdmNHVnVYRzV6YjNWeVkyVWdiR2xpY21GeWFXVnpJR2x1SUhSb1pTQjNiM0pzWkM0OEwzQStYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lEeG9NaUJwWkQxY0ltaHZiV1V0Wkc5M2JteHZZV1JvWldGa1hDSWdaR0YwWVMxa2JDMXNiMk5oYkQxY0lrUnZkMjVzYjJGa0lHWnZjbHdpUGtSdmQyNXNiMkZrSUdadmNpQnRZV05QVXlBb2VEWTBLVHd2YURJK1hHNWNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW1odmJXVXRaRzkzYm14dllXUmliRzlqYTF3aVBseHVYRzRnSUNBZ0lDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2Ym05a1pXcHpMbTl5Wnk5a2FYTjBMM1kyTGpFd0xqQXZibTlrWlMxMk5pNHhNQzR3TG5Ccloxd2lJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKMWRIUnZibHdpSUhScGRHeGxQVndpUkc5M2JteHZZV1FnZGpZdU1UQXVNQ0JNVkZOY0lpQmtZWFJoTFhabGNuTnBiMjQ5WENKMk5pNHhNQzR3WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyTmk0eE1DNHdJRXhVVTF4dUlDQWdJQ0FnSUNBZ0lDQWdQSE50WVd4c1BsSmxZMjl0YldWdVpHVmtJRVp2Y2lCTmIzTjBJRlZ6WlhKelBDOXpiV0ZzYkQ1Y2JpQWdJQ0FnSUNBZ0lDQThMMkUrWEc1Y2JpQWdJQ0FnSUNBZ0lDQThkV3dnWTJ4aGMzTTlYQ0pzYVhOMExXUnBkbWxrWlhJdGNHbHdaU0JvYjIxbExYTmxZMjl1WkdGeWVTMXNhVzVyYzF3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5dWIyUmxhbk11YjNKbkwyVnVMMlJ2ZDI1c2IyRmtMMXdpUGs5MGFHVnlJRVJ2ZDI1c2IyRmtjend2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmJtOWtaV3B6TDI1dlpHVXZZbXh2WWk5dFlYTjBaWEl2Wkc5akwyTm9ZVzVuWld4dlozTXZRMGhCVGtkRlRFOUhYMVkyTG0xa0l6WXVNVEF1TUZ3aVBrTm9ZVzVuWld4dlp6d3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2WkdsemRDOXNZWFJsYzNRdGRqWXVlQzlrYjJOekwyRndhUzljSWo1QlVFa2dSRzlqY3p3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnUEM5MWJENWNibHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNibHh1SUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSm9iMjFsTFdSdmQyNXNiMkZrWW14dlkydGNJajVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZibTlrWldwekxtOXlaeTlrYVhOMEwzWTNMamN1TVM5dWIyUmxMWFkzTGpjdU1TNXdhMmRjSWlCamJHRnpjejFjSW1odmJXVXRaRzkzYm14dllXUmlkWFIwYjI1Y0lpQjBhWFJzWlQxY0lrUnZkMjVzYjJGa0lIWTNMamN1TVNCRGRYSnlaVzUwWENJZ1pHRjBZUzEyWlhKemFXOXVQVndpZGpjdU55NHhYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFkzTGpjdU1TQkRkWEp5Wlc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emJXRnNiRDVNWVhSbGMzUWdSbVZoZEhWeVpYTThMM050WVd4c1BseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5aFBseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBOGRXd2dZMnhoYzNNOVhDSnNhWE4wTFdScGRtbGtaWEl0Y0dsd1pTQm9iMjFsTFhObFkyOXVaR0Z5ZVMxc2FXNXJjMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWxiaTlrYjNkdWJHOWhaQzlqZFhKeVpXNTBMMXdpUGs5MGFHVnlJRVJ2ZDI1c2IyRmtjend2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Ym05a1pXcHpMMjV2WkdVdllteHZZaTl0WVhOMFpYSXZaRzlqTDJOb1lXNW5aV3h2WjNNdlEwaEJUa2RGVEU5SFgxWTNMbTFrSXpjdU55NHhYQ0krUTJoaGJtZGxiRzluUEM5aFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2Ym05a1pXcHpMbTl5Wnk5a2FYTjBMMnhoZEdWemRDMTJOeTU0TDJSdlkzTXZZWEJwTDF3aVBrRlFTU0JFYjJOelBDOWhQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2JseHVJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQThjRDVjYmlBZ0lDQWdJQ0FnSUNCUGNpQm9ZWFpsSUdFZ2JHOXZheUJoZENCMGFHVWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl1YjJSbGFuTXZURlJUSTJ4MGN5MXpZMmhsWkhWc1pWd2lQa3hVVXlCelkyaGxaSFZzWlM0OEwyRStYRzRnSUNBZ0lDQWdJRHd2Y0Q1Y2JpQWdJQ0FnSUR3dlpHbDJQbUFzWEc0Z0lDQWdkbWxsZDAxdmNtVTZJSHRjYmlBZ0lDQWdJQ0FnZEdWNGREb2dYQ0xtbTdUbHBKcmt2NkhtZ2E5Y0lpeGNiaUFnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZYQ0pjYmlBZ0lDQjlYRzU5TENCN1hHNGdJQ0FnZEdsMGJHVTZJRndpVGxCTlhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1TDIvNTVTb0lFNVFUU0RtanFYbGhhWGxoYWpua0lQbW5JRGxwS2ZubW9UbHZJRG11cERubEovbWdJSG5zN3ZudTUvdnZJemxoYmZscElmbWw2RHBtWkRubW9UbGlwL29nNzNtaWFubHNaWG9nNzNsaXB2dnZJemxqNi9tbGJUbGtJamxtNzNwbVlYbGlZM21zci9ubW9UbHZJRG11cERtb1libW5yYnZ2SXpwZ0lMbHVwVG5ucXptZ2Eva3VJZmxqNWpubW9UbWlvRG1uSy9tbTdUbW03OWNJaXhjYmlBZ0lDQmpiMjUwWlc1ME9pQmdQR2d4SUdOc1lYTnpQVndpZEdsMGJHVWdaVzB0WkdWbVlYVnNkQ0IwZVhCbExXNWxkWFJ5WVd3dE1URmNJajVjYmlBZ0lDQWdJQ0FnSUNCQ2RXbHNaQ0JoYldGNmFXNW5JSFJvYVc1bmMxeHVJQ0FnSUNBZ0lDQThMMmd4UGx4dUlDQWdJQ0FnSUNBOGNDQmpiR0Z6Y3oxY0ltZzFJR1Z0TFdSbFptRjFiSFFnZEhsd1pTMXVaWFYwY21Gc0xURXhJSEJpZUd4Y0lqNWNiaUFnSUNBZ0lDQWdJQ0J1Y0cwZ2FYTWdkR2hsSUhCaFkydGhaMlVnYldGdVlXZGxjaUJtYjNJZ1NtRjJZVk5qY21sd2RDNGdSbWx1WkN3Z2MyaGhjbVVzSUdGdVpDQnlaWFZ6WlZ4dUlDQWdJQ0FnSUNBZ0lIQmhZMnRoWjJWeklHOW1JR052WkdVZ1puSnZiU0JvZFc1a2NtVmtjeUJ2WmlCMGFHOTFjMkZ1WkhNZ2IyWWdaR1YyWld4dmNHVnljeURpZ0pRZ1lXNWtYRzRnSUNBZ0lDQWdJQ0FnWVhOelpXMWliR1VnZEdobGJTQnBiaUJ3YjNkbGNtWjFiQ0J1WlhjZ2QyRjVjeTVjYmlBZ0lDQWdJQ0FnUEM5d1BseHVJQ0FnSUNBZ0lDQThZU0JwWkQxY0ltMWhhVzR0WTNSaFhDSWdhSEpsWmoxY0lpTndZVzVsTFdodmJXVndZV2RsTFhCeWFXTnBibWRjSWlCamJHRnpjejFjSW1KMGJpQmlkRzR0YUdsbmFHeHBaMmgwTFRNZ2JYSnNYQ0lnWkdGMFlTMWxkbVZ1ZEMxdVlXMWxQVndpYUc5dFpYQmhaMlV0YUdWeWJ5MWpkR0ZjSWo1SFpYUWdjM1JoY25SbFpEd3ZZVDVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OTNkM2N1Ym5CdGFuTXVZMjl0TDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrZDFiSEJjSWl4Y2JpQWdJQ0JrWlhOak9pQmNJa1pGV2lEbWxiVGxrSWhIZFd4dzU1cUU1THlYNWFTYTVvK1M1THUyNzd5TTU3eVc2SytSNDRDQjVMeVk1WXlXNVpLTTU3dUU1N3VINVltTjU2dXY1YVNONXAyQzU1cUU1cWloNVoyWDVZK0s2WjJaNW9DQjZMV0U1cnFRNzd5TTVaYWQ1NTJBNVkrdjVMbVE1WVMvNDRDQjVaTzg1NTJBNWJDUDVwdXk1WVMvNzd5TTZJZXE1WXFvNVl5VzVhNk01b2lRNVltTjU2dXY1YVNuNlllUDZZZU41YVNONWJlbDVMMmNYQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHhvTVNCamJHRnpjejFjSW1obFlXUnBibWNnZEdWNGRDMWpaVzUwWlhKY0lqNUJkWFJ2YldGMFpTQmhibVFnWlc1b1lXNWpaU0I1YjNWeUlIZHZjbXRtYkc5M1BDOW9NVDQ4YURJZ1kyeGhjM005WENKd1lYSmhaM0poY0doY0lqNWNiaUFnSUNBZ0lDQWdJQ0JuZFd4d0lHbHpJR0VnZEc5dmJHdHBkQ0JtYjNJZ1lYVjBiMjFoZEdsdVp5QndZV2x1Wm5Wc0lHOXlJSFJwYldVdFkyOXVjM1Z0YVc1bklIUmhjMnR6SUdsdUlIbHZkWElnWkdWMlpXeHZjRzFsYm5RZ2QyOXlhMlpzYjNjc0lITnZJSGx2ZFNCallXNGdjM1J2Y0NCdFpYTnphVzVuSUdGeWIzVnVaQ0JoYm1RZ1luVnBiR1FnYzI5dFpYUm9hVzVuTGx4dUlDQWdJQ0FnSUNBOEwyZ3lQanhrYVhZZ1kyeGhjM005WENKamRHRnpYQ0krWEc0Z0lDQWdJQ0FnSUNBZ1BHRWdZMnhoYzNNOVhDSmpkR0Z6TFdKMWRIUnZibHdpSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNWc2NHcHpMMmQxYkhBdllteHZZaTl0WVhOMFpYSXZaRzlqY3k5blpYUjBhVzVuTFhOMFlYSjBaV1F1YldSY0lqNUhaWFFnVTNSaGNuUmxaRHd2WVQ1Y2JpQWdJQ0FnSUNBZ1BDOWthWFkrWUN4Y2JpQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSXVhYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhBNkx5OW5kV3h3YW5NdVkyOXRMMXdpWEc0Z0lDQWdmVnh1ZlN3Z2UxeHVJQ0FnSUhScGRHeGxPaUJjSWtKeWIzZHpaWEpwWm5sY0lpeGNiaUFnSUNCa1pYTmpPaUJjSWtaRldpRGt2Yi9ubEtnZ1FuSnZkM05sY21sbWVTRG1xS0hsblpmbGpKYm51NFRudTRmbGtvem5ycUhua0licG9ibm5tNjdubW9UbGtJVGt1S3JsaXAvb2c3M21xS0hsblpmdnZJem1ub0hscEtmbWo1RGxqWWZwb2Jubm02N25tb1RsajYvbnU3VG1pcVRtZ0tmamdJSGxpcC9vZzczbHBJM25sS2ptZ0tmdnZJemx1YmJscnA3bmpyRG5wNi9tbktqbHZJL25tb1Rta0szbHU3cm52Wkhwb2JWY0lpeGNiaUFnSUNCamIyNTBaVzUwT2lCZ1BITmxZM1JwYjI0Z2FXUTlYQ0owYjNBdGFHOXRaUzF6WldOMGFXOXVYQ0lnWTJ4aGMzTTlYQ0owYjNBdGMyVmpkR2x2YmlCamIyeHZjaTFoWENJK1hHNGdJQ0FnSUNBOFpHbDJJR2xrUFZ3aWRHOXdMV2h2YldVdGFXMWhaMlZjSWo0OEwyUnBkajVjYmx4dUlDQWdJQ0FnSUR4b015QnBaRDFjSW5SdmNDMXpkV0owYVhSc1pWd2lJR05zWVhOelBWd2liR0Z5WjJVdFptOXVkRndpUGtKeWIzZHpaWEpwWm5rZ2JHVjBjeUI1YjNVZ2NtVnhkV2x5WlNnOGMzQmhiaUJqYkdGemN6MWNJbU52Ykc5eUxXUmNJajRuYlc5a2RXeGxjeWM4TDNOd1lXNCtLU0JwYmlCMGFHVWdZbkp2ZDNObGNpQmllU0JpZFc1a2JHbHVaeUIxY0NCaGJHd2diMllnZVc5MWNpQmtaWEJsYm1SbGJtTnBaWE11UEM5b016NWNiaUFnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZjM1ZpYzNSaFkyc3ZibTlrWlMxaWNtOTNjMlZ5YVdaNUkzVnpZV2RsWENJK1hHNGdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z1kyeGhjM005WENKMGIzQXRZblYwZEc5dVhDSWdhV1E5WENKMGIzQXRZblYwZEc5dU1sd2lQbHh1SUNBZ0lDQWdJQ0FnSUVSdlkzVnRaVzUwWVhScGIyNWNiaUFnSUNBZ0lDQWdQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQThMMkUrWEc0Z0lDQWdQQzl6WldOMGFXOXVQbUFzWEc0Z0lDQWdkbWxsZDAxdmNtVTZJSHRjYmlBZ0lDQWdJQ0FnZEdWNGREb2dYQ0xtbTdUbHBKcmt2NkhtZ2E5Y0lpeGNiaUFnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3T2k4dlluSnZkM05sY21sbWVTNXZjbWN2WENKY2JpQWdJQ0I5WEc1OUxDQjdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVFtOTNaWEpjSWl4Y2JpQWdJQ0JrWlhOak9pQmNJa1pGV2lEbGo2L3BoWTNudmE3a3ZiL25sS2dnUW05M1pYSWc1cENjNTdTaTQ0Q0I1YTZKNktPRjQ0Q0I1cHUwNXBhdzVaS001WTI0NkwyOTVhYUNTbUYyWVZOamNtbHdkT09BZ1VOVFUrUzVpK2V4dStlYWhPZTlrZWU3bk9pMWhPYTZrTys4ak9tQW11aS9oK2lIcXVXS3FPV01sdWF6cU9XRnBlYUtnT2FjcitXdWpPZStqdWlubytXR3MrV2tqZWFkZ3VlYWhPYWhodWFldHVXTWhlZXVvZWVRaHVtWHJ1bWltRndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4WkdsMklHTnNZWE56UFZ3aWJXRnBibHdpUGx4dVBIQWdZMnhoYzNNOVhDSnNaV0ZrWENJK1YyVmlJSE5wZEdWeklHRnlaU0J0WVdSbElHOW1JR3h2ZEhNZ2IyWWdkR2hwYm1keklPS0FsQ0JtY21GdFpYZHZjbXR6TENCc2FXSnlZWEpwWlhNc0lHRnpjMlYwY3l3Z1lXNWtJSFYwYVd4cGRHbGxjeTRnUW05M1pYSWdiV0Z1WVdkbGN5QmhiR3dnZEdobGMyVWdkR2hwYm1keklHWnZjaUI1YjNVdVBDOXdQbHh1UEhBK1MyVmxjR2x1WnlCMGNtRmpheUJ2WmlCaGJHd2dkR2hsYzJVZ2NHRmphMkZuWlhNZ1lXNWtJRzFoYTJsdVp5QnpkWEpsSUhSb1pYa2dZWEpsSUhWd0lIUnZJR1JoZEdVZ0tHOXlJSE5sZENCMGJ5QjBhR1VnYzNCbFkybG1hV01nZG1WeWMybHZibk1nZVc5MUlHNWxaV1FwSUdseklIUnlhV05yZVM0Z1FtOTNaWElnZEc4Z2RHaGxJSEpsYzJOMVpTRThMM0ErWEc0OGNENUNiM2RsY2lCallXNGdiV0Z1WVdkbElHTnZiWEJ2Ym1WdWRITWdkR2hoZENCamIyNTBZV2x1SUVoVVRVd3NJRU5UVXl3Z1NtRjJZVk5qY21sd2RDd2dabTl1ZEhNZ2IzSWdaWFpsYmlCcGJXRm5aU0JtYVd4bGN5NGdRbTkzWlhJZ1pHOWxjMjdpZ0psMElHTnZibU5oZEdWdVlYUmxJRzl5SUcxcGJtbG1lU0JqYjJSbElHOXlJR1J2SUdGdWVYUm9hVzVuSUdWc2MyVWdMU0JwZENCcWRYTjBJR2x1YzNSaGJHeHpJSFJvWlNCeWFXZG9kQ0IyWlhKemFXOXVjeUJ2WmlCMGFHVWdjR0ZqYTJGblpYTWdlVzkxSUc1bFpXUWdZVzVrSUhSb1pXbHlJR1JsY0dWdVpHVnVZMmxsY3k0OEwzQStYRzQ4Y0Q1VWJ5QThZU0JvY21WbVBWd2lJMmRsZEhScGJtY3RjM1JoY25SbFpGd2lQbWRsZENCemRHRnlkR1ZrUEM5aFBpd2dRbTkzWlhJZ2QyOXlhM01nWW5rZ1ptVjBZMmhwYm1jZ1lXNWtJR2x1YzNSaGJHeHBibWNnUEdFZ2FISmxaajFjSWk5elpXRnlZMmhjSWo1d1lXTnJZV2RsY3p3dllUNGdabkp2YlNCaGJHd2diM1psY2l3Z2RHRnJhVzVuSUdOaGNtVWdiMllnYUhWdWRHbHVaeXdnWm1sdVpHbHVaeXdnWkc5M2JteHZZV1JwYm1jc0lHRnVaQ0J6WVhacGJtY2dkR2hsSUhOMGRXWm1JSGx2ZGVLQW1YSmxJR3h2YjJ0cGJtY2dabTl5TGlCQ2IzZGxjaUJyWldWd2N5QjBjbUZqYXlCdlppQjBhR1Z6WlNCd1lXTnJZV2RsY3lCcGJpQmhJRzFoYm1sbVpYTjBJR1pwYkdVc0lEeGhJR2h5WldZOVhDSXZaRzlqY3k5amNtVmhkR2x1Wnkxd1lXTnJZV2RsY3k4alltOTNaWEpxYzI5dVhDSStQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtSnZkMlZ5TG1wemIyNDhMMk52WkdVK1BDOWhQaTRnU0c5M0lIbHZkU0IxYzJVZ1BHRWdhSEpsWmoxY0lpOXpaV0Z5WTJoY0lqNXdZV05yWVdkbGN6d3ZZVDRnYVhNZ2RYQWdkRzhnZVc5MUxpQkNiM2RsY2lCd2NtOTJhV1JsY3lCb2IyOXJjeUIwYnlCbVlXTnBiR2wwWVhSbElIVnphVzVuSUhCaFkydGhaMlZ6SUdsdUlIbHZkWElnUEdFZ2FISmxaajFjSWk5a2IyTnpMM1J2YjJ4elhDSStkRzl2YkhNZ1lXNWtJSGR2Y210bWJHOTNjend2WVQ0dVBDOXdQbHh1UEhBK1FtOTNaWElnYVhNZ2IzQjBhVzFwZW1Wa0lHWnZjaUIwYUdVZ1puSnZiblF0Wlc1a0xpQkpaaUJ0ZFd4MGFYQnNaU0J3WVdOcllXZGxjeUJrWlhCbGJtUWdiMjRnWVNCd1lXTnJZV2RsSUMwZ2FsRjFaWEo1SUdadmNpQmxlR0Z0Y0d4bElDMGdRbTkzWlhJZ2QybHNiQ0JrYjNkdWJHOWhaQ0JxVVhWbGNua2dhblZ6ZENCdmJtTmxMaUJVYUdseklHbHpJR3R1YjNkdUlHRnpJR0VnWm14aGRDQmtaWEJsYm1SbGJtTjVJR2R5WVhCb0lHRnVaQ0JwZENCb1pXeHdjeUJ5WldSMVkyVWdjR0ZuWlNCc2IyRmtMand2Y0Q1Y2JqeG9NaUJwWkQxY0ltbHVjM1JoYkd3dFltOTNaWEpjSWo0OFlTQm9jbVZtUFZ3aUkybHVjM1JoYkd3dFltOTNaWEpjSWlCamJHRnpjejFjSW1obFlXUmxjaTFoYm1Ob2IzSmNJajdDcHp3dllUNUpibk4wWVd4c0lFSnZkMlZ5UEM5b01qNWNianh3UGtKdmQyVnlJR2x6SUdFZ1kyOXRiV0Z1WkNCc2FXNWxJSFYwYVd4cGRIa3VJRWx1YzNSaGJHd2dhWFFnZDJsMGFDQnVjRzB1UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFpWVhOb1hDSWdaR0YwWVMxc1lXNW5QVndpWW1GemFGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajV1Y0cwZ2FXNXpkR0ZzYkNBdFp5QmliM2RsY2p3dlkyOWtaVDQ4TDNCeVpUNDhMMlpwWjNWeVpUNWNianh3UGtKdmQyVnlJSEpsY1hWcGNtVnpJRHhoSUdoeVpXWTlYQ0pvZEhSd09pOHZibTlrWldwekxtOXlaeTljSWo1dWIyUmxMQ0J1Y0cwOEwyRStJR0Z1WkNBOFlTQm9jbVZtUFZ3aWFIUjBjRG92TDJkcGRDMXpZMjB1YjNKblhDSStaMmwwUEM5aFBpNDhMM0ErWEc0OGNENU1ZWFJsYzNRZ2NtVnNaV0Z6WlRvZ1BHRWdhSEpsWmoxY0lsd2lQanhwYldjZ2MzSmpQVndpYUhSMGNITTZMeTlwYldjdWMyaHBaV3hrY3k1cGJ5OXVjRzB2ZGk5aWIzZGxjaTV6ZG1jL2JXRjRRV2RsUFRJMU9USXdNREJjSWlCaGJIUTlYQ0ppYjNkbGNpQjJaWEp6YVc5dVhDSStQQzloUGp3dmNENWNianh3UGtadmNpQjBjbTkxWW14bGMyaHZiM1JwYm1jZ2FXNXpkR0ZzYkdGMGFXOXVJRzl1SUdScFptWmxjbVZ1ZENCd2JHRjBabTl5YlhNc0lISmxZV1FnZEdobElEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZZbTkzWlhJdlltOTNaWEl2ZDJscmFTOVVjbTkxWW14bGMyaHZiM1JwYm1kY0lqNTBjbTkxWW14bGMyaHZiM1JwYm1jOEwyRStJSGRwYTJrZ2NHRm5aUzQ4TDNBK1hHNDhhRElnYVdROVhDSm5aWFIwYVc1bkxYTjBZWEowWldSY0lqNDhZU0JvY21WbVBWd2lJMmRsZEhScGJtY3RjM1JoY25SbFpGd2lJR05zWVhOelBWd2lhR1ZoWkdWeUxXRnVZMmh2Y2x3aVBzS25QQzloUGtkbGRIUnBibWNnYzNSaGNuUmxaRHd2YURJK1hHNDhhRE1nYVdROVhDSnBibk4wWVd4c0xYQmhZMnRoWjJWelhDSStQR0VnYUhKbFpqMWNJaU5wYm5OMFlXeHNMWEJoWTJ0aFoyVnpYQ0lnWTJ4aGMzTTlYQ0pvWldGa1pYSXRZVzVqYUc5eVhDSSt3cWM4TDJFK1NXNXpkR0ZzYkNCd1lXTnJZV2RsY3p3dmFETStYRzQ4Y0Q1SmJuTjBZV3hzSUhCaFkydGhaMlZ6SUhkcGRHZ2dQR0VnYUhKbFpqMWNJaTlrYjJOekwyRndhU05wYm5OMFlXeHNYQ0krUEdOdlpHVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmxjaTF5YjNWblpWd2lQbUp2ZDJWeUlHbHVjM1JoYkd3OEwyTnZaR1UrUEM5aFBpNGdRbTkzWlhJZ2FXNXpkR0ZzYkhNZ2NHRmphMkZuWlhNZ2RHOGdQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtSnZkMlZ5WDJOdmJYQnZibVZ1ZEhNdlBDOWpiMlJsUGk0OEwzQStYRzQ4Wm1sbmRYSmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBYQ0krUEhCeVpUNDhZMjlrWlNCamJHRnpjejFjSW14aGJtZDFZV2RsTFdKaGMyaGNJaUJrWVhSaExXeGhibWM5WENKaVlYTm9YQ0krUEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHd2dKbXgwTzNCaFkydGhaMlVtWjNRN1BDOWpiMlJsUGp3dmNISmxQand2Wm1sbmRYSmxQbHh1UEhBK1FTQndZV05yWVdkbElHTmhiaUJpWlNCaElFZHBkRWgxWWlCemFHOXlkR2hoYm1Rc0lHRWdSMmwwSUdWdVpIQnZhVzUwTENCaElGVlNUQ3dnWVc1a0lHMXZjbVV1SUZKbFlXUWdiVzl5WlNCaFltOTFkQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZZWEJwTHlOcGJuTjBZV3hzWENJK1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlJR2x1YzNSaGJHdzhMMk52WkdVK1BDOWhQaTQ4TDNBK1hHNDhabWxuZFhKbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFhDSStQSEJ5WlQ0OFkyOWtaU0JqYkdGemN6MWNJbXhoYm1kMVlXZGxMV0poYzJoY0lpQmtZWFJoTFd4aGJtYzlYQ0ppWVhOb1hDSStQSE53WVc0Z1kyeGhjM005WENKalhDSStJeUJwYm5OMFlXeHNjeUIwYUdVZ2NISnZhbVZqZENCa1pYQmxibVJsYm1OcFpYTWdiR2x6ZEdWa0lHbHVJR0p2ZDJWeUxtcHpiMjQ4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JGeHVQSE53WVc0Z1kyeGhjM005WENKalhDSStJeUJ5WldkcGMzUmxjbVZrSUhCaFkydGhaMlU4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQnFjWFZsY25sY2JqeHpjR0Z1SUdOc1lYTnpQVndpWTF3aVBpTWdSMmwwU0hWaUlITm9iM0owYUdGdVpEd3ZjM0JoYmo1Y2JqeHpjR0Z1SUdOc1lYTnpQVndpWjNCY0lqNGtJRHd2YzNCaGJqNWliM2RsY2lCcGJuTjBZV3hzSUdSbGMyRnVaSEp2TDIxaGMyOXVjbmxjYmp4emNHRnVJR05zWVhOelBWd2lZMXdpUGlNZ1IybDBJR1Z1WkhCdmFXNTBQQzl6Y0dGdVBseHVQSE53WVc0Z1kyeGhjM005WENKbmNGd2lQaVFnUEM5emNHRnVQbUp2ZDJWeUlHbHVjM1JoYkd3Z1oybDBPaTh2WjJsMGFIVmlMbU52YlM5MWMyVnlMM0JoWTJ0aFoyVXVaMmwwWEc0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklGVlNURHd2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c0lHaDBkSEE2THk5bGVHRnRjR3hsTG1OdmJTOXpZM0pwY0hRdWFuTThMMk52WkdVK1BDOXdjbVUrUEM5bWFXZDFjbVUrWEc0OGFETWdhV1E5WENKelpXRnlZMmd0Y0dGamEyRm5aWE5jSWo0OFlTQm9jbVZtUFZ3aUkzTmxZWEpqYUMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQbE5sWVhKamFDQndZV05yWVdkbGN6d3ZhRE0rWEc0OGNENDhZU0JvY21WbVBWd2lMM05sWVhKamFGd2lQbE5sWVhKamFDQkNiM2RsY2lCd1lXTnJZV2RsY3p3dllUNGdZVzVrSUdacGJtUWdkR2hsSUhKbFoybHpkR1Z5WldRZ2NHRmphMkZuWlNCdVlXMWxjeUJtYjNJZ2VXOTFjaUJtWVhadmNtbDBaU0J3Y205cVpXTjBjeTQ4TDNBK1hHNDhhRE1nYVdROVhDSnpZWFpsTFhCaFkydGhaMlZ6WENJK1BHRWdhSEpsWmoxY0lpTnpZWFpsTFhCaFkydGhaMlZ6WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStVMkYyWlNCd1lXTnJZV2RsY3p3dmFETStYRzQ4Y0Q1RGNtVmhkR1VnWVNBOFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSXVhbk52Ymp3dlkyOWtaVDRnWm1sc1pTQm1iM0lnZVc5MWNpQndZV05yWVdkbElIZHBkR2dnUEdFZ2FISmxaajFjSWk5a2IyTnpMMk55WldGMGFXNW5MWEJoWTJ0aFoyVnpMeU5pYjNkbGNtcHpiMjVjSWo0OFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSWdhVzVwZER3dlkyOWtaVDQ4TDJFK0xqd3ZjRDVjYmp4d1BsUm9aVzRnYzJGMlpTQnVaWGNnWkdWd1pXNWtaVzVqYVdWeklIUnZJSGx2ZFhJZ1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlMbXB6YjI0OEwyTnZaR1UrSUhkcGRHZ2dQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtSnZkMlZ5SUdsdWMzUmhiR3dnVUVGRFMwRkhSU0F0TFhOaGRtVThMMk52WkdVK1BDOXdQbHh1UEdneklHbGtQVndpZFhObExYQmhZMnRoWjJWelhDSStQR0VnYUhKbFpqMWNJaU4xYzJVdGNHRmphMkZuWlhOY0lpQmpiR0Z6Y3oxY0ltaGxZV1JsY2kxaGJtTm9iM0pjSWo3Q3B6d3ZZVDVWYzJVZ2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1NHOTNJSGx2ZFNCMWMyVWdjR0ZqYTJGblpYTWdhWE1nZFhBZ2RHOGdlVzkxTGlCWFpTQnlaV052YlcxbGJtUWdlVzkxSUhWelpTQkNiM2RsY2lCMGIyZGxkR2hsY2lCM2FYUm9JRHhoSUdoeVpXWTlYQ0l2Wkc5amN5OTBiMjlzY3k5Y0lqNUhjblZ1ZEN3Z1VtVnhkV2x5WlVwVExDQlpaVzl0WVc0c0lHRnVaQ0JzYjNSeklHOW1JRzkwYUdWeUlIUnZiMnh6UEM5aFBpQnZjaUJpZFdsc1pDQjViM1Z5SUc5M2JpQjNiM0pyWm14dmR5QjNhWFJvSUR4aElHaHlaV1k5WENJdlpHOWpjeTloY0drdlhDSStkR2hsSUVGUVNUd3ZZVDR1SUZsdmRTQmpZVzRnWVd4emJ5QjFjMlVnZEdobElHbHVjM1JoYkd4bFpDQndZV05yWVdkbGN5QmthWEpsWTNSc2VTd2diR2xyWlNCMGFHbHpMQ0JwYmlCMGFHVWdZMkZ6WlNCdlppQThZMjlrWlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEdWeUxYSnZkV2RsWENJK2FuRjFaWEo1UEM5amIyUmxQam84TDNBK1hHNDhabWxuZFhKbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFhDSStQSEJ5WlQ0OFkyOWtaU0JqYkdGemN6MWNJbXhoYm1kMVlXZGxMV2gwYld4Y0lpQmtZWFJoTFd4aGJtYzlYQ0pvZEcxc1hDSStQSE53WVc0Z1kyeGhjM005WENKdWRGd2lQaVpzZER0elkzSnBjSFFnUEM5emNHRnVQanh6Y0dGdUlHTnNZWE56UFZ3aWJtRmNJajV6Y21NOVBDOXpjR0Z1UGp4emNHRnVJR05zWVhOelBWd2ljMXdpUGx3aVltOTNaWEpmWTI5dGNHOXVaVzUwY3k5cWNYVmxjbmt2WkdsemRDOXFjWFZsY25rdWJXbHVMbXB6WENJOEwzTndZVzQrUEhOd1lXNGdZMnhoYzNNOVhDSnVkRndpUGlabmREc21iSFE3TDNOamNtbHdkQ1puZERzOEwzTndZVzQrUEM5amIyUmxQand2Y0hKbFBqd3ZabWxuZFhKbFBseHVQR2d5SUdsa1BWd2lkSGRwZEhSbGNpMTFjR1JoZEdWekxXWnliMjB0WW05M1pYSm9kSFJ3YzNSM2FYUjBaWEpqYjIxaWIzZGxjbHdpUGp4aElHaHlaV1k5WENJamRIZHBkSFJsY2kxMWNHUmhkR1Z6TFdaeWIyMHRZbTkzWlhKb2RIUndjM1IzYVhSMFpYSmpiMjFpYjNkbGNsd2lJR05zWVhOelBWd2lhR1ZoWkdWeUxXRnVZMmh2Y2x3aVBzS25QQzloUGxSM2FYUjBaWElnZFhCa1lYUmxjeUJtY205dElEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwzUjNhWFIwWlhJdVkyOXRMMkp2ZDJWeVhDSStRR0p2ZDJWeVBDOWhQand2YURJK1hHNDhjRDQ4WVNCamJHRnpjejFjSW5SM2FYUjBaWEl0ZEdsdFpXeHBibVZjSWlCb2NtVm1QVndpYUhSMGNITTZMeTkwZDJsMGRHVnlMbU52YlM5aWIzZGxjbHdpSUdSaGRHRXRkMmxrWjJWMExXbGtQVndpTkRnd016YzNNamt4TXpZNU56VTBOakkxWENJK1ZIZGxaWFJ6SUdKNUlFQmliM2RsY2p3dllUNWNiand2Y0Q1Y2JseHVQQzlrYVhZK1lDeGNiaUFnSUNCMmFXVjNUVzl5WlRvZ2UxeHVJQ0FnSUNBZ0lDQjBaWGgwT2lCY0l1YWJ0T1drbXVTL29lYUJyMXdpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSW1oMGRIQnpPaTh2WW05M1pYSXVhVzh2WENKY2JpQWdJQ0I5WEc1OUxDQjdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVFtOXlkM05sY2xONWJtTmNJaXhjYmlBZ0lDQmtaWE5qT2lCY0lrWkZXaURrdmIvbmxLZ2dRbkp2ZDNObGNuTjVibU1nNks2cDVyV1A2S2VJNVptbzVhNmU1cGUyNWIrcjZZQ2Y1NXFFNVpPTjVicVU1WW1ONTZ1djVaQ0U1NmVONXBhSDVMdTI1NXFFNXB1MDVwUzU1Ym0yNkllcTVZcW81WWkzNXBhdzZhRzE2WjJpNzd5TTVMcW01WSt2NWE2ZTVwZTI1WkNNNXEybDVaQ0U1TGlxNTd1STU2dXY3N3lNNW8rUTZhdVk2SWV6NWJDUk16QWw1NXFFNWJ5QTVZK1I1cFdJNTQ2SFhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeG9NU0JqYkdGemN6MWNJbWh2YjJ0Y0lqNVVhVzFsTFhOaGRtbHVaeUJ6ZVc1amFISnZibWx6WldRZ1luSnZkM05sY2lCMFpYTjBhVzVuTGp3dmFERStQSEFnWTJ4aGMzTTlYQ0p5YjI1elpXRnNYQ0krU1hUaWdKbHpJSGRwWTJ0bFpDMW1ZWE4wSUdGdVpDQjBiM1JoYkd4NUlHWnlaV1V1UEM5d1BqeHdJR05zWVhOelBWd2lkbWxrWlc5Y0lqNDhZU0JqYkdGemN6MWNJblpwWkdWdlgxOXNhVzVyWENJZ2FISmxaajFjSWlOY0lqNDhMMkUrUEM5d1BqeHdJR05zWVhOelBWd2lhRzkzTFhSdlhDSStQQzl3UGp4d0lHTnNZWE56UFZ3aWFHOTNMWFJ2WDE5amIyMXRZVzVrWENJK2JuQnRJR2x1YzNSaGJHd2dMV2NnWW5KdmQzTmxjaTF6ZVc1alBDOXdQanh3SUdOc1lYTnpQVndpWTNSaFhDSStQR0VnWTJ4aGMzTTlYQ0ppZFhSMGIyNGdZblYwZEc5dUxTMXdjbWx0WVhKNVhDSWdhSEpsWmoxY0lpTnBibk4wWVd4c1hDSWdkR2wwYkdVOVhDSkhaWFFnVTNSaGNuUmxaRndpUGtkbGRDQlRkR0Z5ZEdWa1BDOWhQand2Y0Q0OFpHbDJJR05zWVhOelBWd2ljR3hoZVdWeVhDSStQSEErSjJKdmJtcHZkWEk4TDNBK1BDOWthWFkrWUN4Y2JpQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSXVhYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhCek9pOHZZbkp2ZDNObGNuTjVibU11YVc4dlhDSmNiaUFnSUNCOVhHNTlYVnh1WEc1c1pYUWdhVzVrWlhnZ1BTQjdYRzRnSUNBZ1ptVjZaR1Z6WXpvZ1hDSkdSVm9nNVltTjU2dXY1cWloNVoyWDVZeVc1YmVsNTZpTDVieUE1WStSNXFHRzVwNjJYQ0lzWEc0Z0lDQWdhblZ0WW05MGNtOXVPaUI3WEc0Z0lDQWdJQ0FnSUhScGRHeGxPaUJjSWtobGJHeHZMQ0JHUlZvZ1FXNWtJRloxWlNGY0lpeGNiaUFnSUNBZ0lDQWdZMjl1ZEdWdWREb2dYQ0xvdjVubW1LL2t1SURrdUtya3ZiL25sS2dnUmtWYUlPYWVoT1c3dXVlYWhPV0pqZWVycithb29lV2RsK1dNbHVXOGdPV1BrZWVrdXVTK2krKzhqT2E4bE9la3V1UzZodVdmdXVTNmpsWjFaZVdObGVhV2grUzd0dWU3aE9TN3R1ZWFoT1c4Z09XUGtlZTdrK2FlaE9PQWdsd2lMRnh1SUNBZ0lDQWdJQ0JpZFhSMGIyNDZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U2SUdBOGFTQmpiR0Z6Y3oxY0ltWmhJR1poTFdkcGRHaDFZaTFoYkhSY0lqNDhMMmsrSUVkcGRFaDFZbUFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1kWEpwWXkxNmFHRnZMMlpsZWx3aVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlYRzVjYm14bGRDQnNhWE4wSUQwZ2UxeHVJQ0FnSUdwMWJXSnZkSEp2YmpvZ2UxeHVJQ0FnSUNBZ0lDQjBhWFJzWlRvZ1hDSkdSVm9nUVc1a0lGWjFaU0JHY21GdFpTRmNJaXhjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nWENMb3Y1bm1tSy9rdUlEa3VLcEdSVnJtbGJUbGtJaFdkV1hubW9UbGlKZm9vYWpsc1pYbnBMcnBvYlh2dkl6b3I3Zm5ncm5saDd2a3VJdnBuYUxsaUpmb29ham5tb1FnUkdWMFlXbHNJT2FNaWVtU3J1aS9tK1dGcGVpdnB1YURoZW1odGVhMWoraW5pRndpTEZ4dUlDQWdJQ0FnSUNCaWRYUjBiMjQ2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklGd2k1cCtsNTV5TDVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEE2THk5bVpYb3VhR1Z6ZEhWa2VTNWpiMjFjSWx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVzWlhRZ1kyOXRiVzl1SUQwZ2UxeHVJQ0FnSUhOcGRHVk9ZVzFsT2lCY0lrWkZXaUJXZFdVZ1JFVk5UMXdpTEZ4dVhHNGdJQ0FnYm1GMlJHRjBZVG9nVzN0Y2JpQWdJQ0FnSUNBZ2JtRnRaVG9nWENMcHBwYnBvYlZjSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKcGJtUmxlQzVvZEcxc1hDSmNiaUFnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJRzVoYldVNklGd2lSa1ZhNVorNjVweXM1cDYyNXA2RVhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2liR2x6ZEM1b2RHMXNYQ0pjYmlBZ0lDQjlYU3hjYmx4dUlDQWdJR1p2YjNSbGNsUmxlSFE2SUZ3aXdxa2dNakF4TnlCR1JWb2c1WW1ONTZ1djVxaWg1WjJYNVl5VzViZWw1NmlMNWJ5QTVZK1I1cUdHNXA2MklFTnlaV0YwWldRZ1lua2dSblZ5YVdNdWVtaGhiMXdpWEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCY0ltbHVaR1Y0WENJNklHbHVaR1Y0TEZ4dUlDQWdJRndpYkdsemRGd2lPaUJzYVhOMExGeHVJQ0FnSUZ3aVpuSmhiV1Z6WENJNklHWnlZVzFsY3l4Y2JpQWdJQ0JjSW1OdmJXMXZibHdpT2lCamIyMXRiMjVjYm4xY2JpSXNJbWx0Y0c5eWRDQlJJR1p5YjIwZ0ozRW5YRzVjYm1sdGNHOXlkQ0JCY0dsRVlYUmhJR1p5YjIwZ0ozQjFZbXhwWXk5a1pXMXZMV1JoZEdFblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCdVlYWk1hWE4wT2lBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2hCY0dsRVlYUmhMbU52YlcxdmJpNXVZWFpFWVhSaEtWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lIMHNYRzRnSUNBZ2MybDBaVTVoYldVNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZFdVVISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0VGd2FVUmhkR0V1WTI5dGJXOXVMbk5wZEdWT1lXMWxLVnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJSDBzWEc0Z0lDQWdabTl2ZEdWeVZHVjRkRG9nS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdVUzVRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9RWEJwUkdGMFlTNWpiMjF0YjI0dVptOXZkR1Z5VkdWNGRDbGNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQjlYRzU5WEc0aUxDSThkR1Z0Y0d4aGRHVStYRzRnSUNBZ1BHWnZiM1JsY2lCamJHRnpjejFjSW1OdmJuUmhhVzVsY2x3aVBseHVJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejFjSW5CMWJHd3RiR1ZtZEZ3aVBudDdkR1Y0ZEgxOVBDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemN6MWNJbkIxYkd3dGNtbG5hSFJjSWo1Y2JseDBYSFE4YVNCamJHRnpjejFjSW1samIyNGdhV052YmkxM1pXbDRhVzVjSWo0OEwyaytYRzVjZEZ4MFBHa2dZMnhoYzNNOVhDSnBZMjl1SUdsamIyNHRkMlZwWW05Y0lqNDhMMmsrWEc1Y2REd3ZjM0JoYmo1Y2JpQWdJQ0E4TDJadmIzUmxjajVjYmp3dmRHVnRjR3hoZEdVK1hHNDhjMk55YVhCMFBseHVhVzF3YjNKMElGTmxjblpwWTJVZ1puSnZiU0FuTGk5amIyMXRiMjRuWEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR0YwWVNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNkSFJsZUhRNlhDSmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0J0WlhSb2IyUnpPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjkwWlhJNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRk5sY25acFkyVXVabTl2ZEdWeVZHVjRkQ2dwTG5Sb1pXNG9LR1JoZEdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjZEhSb2FYTXVkR1Y0ZENBOUlHUmhkR0ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamNtVmhkR1ZrS0NrZ2UxeHVJQ0FnSUNBZ0lDQmNkSFJvYVhNdVptOXZkR1Z5S0NsY2JpQWdJQ0FnSUNBZ2ZWeHVmVnh1UEM5elkzSnBjSFErWEc0aUxDSThkR1Z0Y0d4aGRHVStYRzRnSUNBZ1BHNWhkaUJqYkdGemN6MWNJbTVoZG1KaGNpQnVZWFppWVhJdGFXNTJaWEp6WlNCdVlYWmlZWEl0Wm1sNFpXUXRkRzl3WENJK1hHNGdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pqYjI1MFlXbHVaWEpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKdVlYWmlZWEl0YUdWaFpHVnlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdKMWRIUnZiaUIwZVhCbFBWd2lZblYwZEc5dVhDSWdZMnhoYzNNOVhDSnVZWFppWVhJdGRHOW5aMnhsSUdOdmJHeGhjSE5sWkZ3aUlHUmhkR0V0ZEc5bloyeGxQVndpWTI5c2JHRndjMlZjSWlCa1lYUmhMWFJoY21kbGREMWNJaU51WVhaaVlYSmNJaUJoY21saExXVjRjR0Z1WkdWa1BWd2labUZzYzJWY0lpQmhjbWxoTFdOdmJuUnliMnh6UFZ3aWJtRjJZbUZ5WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56UFZ3aWMzSXRiMjVzZVZ3aVBsUnZaMmRzWlNCdVlYWnBaMkYwYVc5dVBDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejFjSW1samIyNHRZbUZ5WENJK1BDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejFjSW1samIyNHRZbUZ5WENJK1BDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejFjSW1samIyNHRZbUZ5WENJK1BDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHTnNZWE56UFZ3aWJtRjJZbUZ5TFdKeVlXNWtYQ0lnYUhKbFpqMWNJaTljSWo1N2UyaGxZV1JsY2tSaGRHRXVjMmwwWlU1aGJXVjlmVHd2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQnBaRDFjSW01aGRtSmhjbHdpSUdOc1lYTnpQVndpWTI5c2JHRndjMlVnYm1GMlltRnlMV052Ykd4aGNITmxYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhWc0lHTnNZWE56UFZ3aWJtRjJJRzVoZG1KaGNpMXVZWFpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUhZdFptOXlQVndpYVhSbGJTQnBiaUJvWldGa1pYSkVZWFJoTG01aGRreHBjM1JjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElEcG9jbVZtUFZ3aWFYUmxiUzVvY21WbVhDSStlM3RwZEdWdExtNWhiV1Y5ZlR3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4SVMwdEx5NXVZWFl0WTI5c2JHRndjMlVnTFMwK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJRHd2Ym1GMlBseHVQQzkwWlcxd2JHRjBaVDVjYmp4elkzSnBjSFErWEc1cGJYQnZjblFnVTJWeWRtbGpaU0JtY205dElDY3VMMk52YlcxdmJpZGNibWx0Y0c5eWRDQlJJR1p5YjIwZ0ozRW5YRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHRjBZU2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR1ZoWkdWeVJHRjBZVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnphWFJsVG1GdFpUb2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUYyVEdsemREb2dXMTFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUcxbGRHaHZaSE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNrUmhkR0ZKYm1sME9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1gzWnRJRDBnZEdocGMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGRXVZV3hzS0Z0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVMlZ5ZG1salpTNXphWFJsVG1GdFpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCVFpYSjJhV05sTG01aGRreHBjM1FvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUYwcExuUm9aVzRvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhKMGJrUmhkR0VnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFYUmxUbUZ0WlRvZ1pHRjBZVnN3WFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1aGRreHBjM1E2SUdSaGRHRmJNVjFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmZG0wdWFHVmhaR1Z5UkdGMFlTQTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJSEowYmtSaGRHRXBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamNtVmhkR1ZrS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZrWlhKRVlYUmhTVzVwZENncFhHNGdJQ0FnSUNBZ0lIMWNibjFjYmp3dmMyTnlhWEIwUGx4dUlpd2lQSFJsYlhCc1lYUmxQbHh1SUNBZ0lEeGthWFkrWEc0Z0lDQWdJQ0FnSUR3aExTMGdibUYySUMwdFBseHVJQ0FnSUNBZ0lDQThabVY2TFdobFlXUmxjajQ4TDJabGVpMW9aV0ZrWlhJK1hHNGdJQ0FnSUNBZ0lEd2hMUzBnYW5WdFltOTBjbTl1SUMwdFBseHVJQ0FnSUNBZ0lDQThjMnh2ZEQ0OEwzTnNiM1ErWEc0Z0lDQWdJQ0FnSUR4bVpYb3RabTl2ZEdWeVBqd3ZabVY2TFdadmIzUmxjajVjYmlBZ0lDQThMMlJwZGo1Y2Jqd3ZkR1Z0Y0d4aGRHVStYRzQ4YzJOeWFYQjBQbHh1YVcxd2IzSjBJR1psZWtobFlXUmxjaUJtY205dElDZHdkV0pzYVdNdmJXOWtkV3hsTDJOdmJXMXZiaTlvWldGa1pYSXVkblZsSjF4dWFXMXdiM0owSUdabGVrWnZiM1JsY2lCbWNtOXRJQ2R3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5bWIyOTBaWEl1ZG5WbEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1kyOXRjRzl1Wlc1MGN6b2dlMXh1SUNBZ0lDQWdJQ0JtWlhwSVpXRmtaWElzWEc0Z0lDQWdJQ0FnSUdabGVrWnZiM1JsY2x4dUlDQWdJSDFjYm4xY2Jqd3ZjMk55YVhCMFBseHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdLRzVoYldVc0lIVnliQ2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WbklEMGdibVYzSUZKbFowVjRjQ2hjSWloZWZDWXBYQ0lnS3lCdVlXMWxJQ3NnWENJOUtGdGVKbDBxS1NnbWZDUXBYQ0lwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbDkwZUhRZ1BTQjFjbXdnUHlCMWNtd2dPaUIzYVc1a2IzY3ViRzlqWVhScGIyNHVjMlZoY21Ob1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUhJZ1BTQnlYM1I0ZEM1emRXSnpkSElvTVNrdWJXRjBZMmdvY21WbktWeHVYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVW9jaUEvSUdSbFkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoeVd6SmRLU0E2SUc1MWJHd3BYRzRnSUNBZ2ZTbGNibjFjYmlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2V5QmNJbVJsWm1GMWJIUmNJam9nY21WeGRXbHlaU2hjSW1OdmNtVXRhbk12YkdsaWNtRnllUzltYmk5blpYUXRhWFJsY21GMGIzSmNJaWtzSUY5ZlpYTk5iMlIxYkdVNklIUnlkV1VnZlRzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIc2dYQ0prWldaaGRXeDBYQ0k2SUhKbGNYVnBjbVVvWENKamIzSmxMV3B6TDJ4cFluSmhjbmt2Wm00dmIySnFaV04wTDJGemMybG5ibHdpS1N3Z1gxOWxjMDF2WkhWc1pUb2dkSEoxWlNCOU95SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1WEc1MllYSWdYMkZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9YQ0l1TGk5amIzSmxMV3B6TDI5aWFtVmpkQzloYzNOcFoyNWNJaWs3WEc1Y2JuWmhjaUJmWVhOemFXZHVNaUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9YMkZ6YzJsbmJpazdYRzVjYm1aMWJtTjBhVzl1SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9iMkpxS1NCN0lISmxkSFZ5YmlCdlltb2dKaVlnYjJKcUxsOWZaWE5OYjJSMWJHVWdQeUJ2WW1vZ09pQjdJR1JsWm1GMWJIUTZJRzlpYWlCOU95QjlYRzVjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUY5aGMzTnBaMjR5TG1SbFptRjFiSFFnZkh3Z1puVnVZM1JwYjI0Z0tIUmhjbWRsZENrZ2UxeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Uc2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lIWmhjaUJ6YjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNWNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYzI5MWNtTmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tITnZkWEpqWlN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMFlYSm5aWFJiYTJWNVhTQTlJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwWVhKblpYUTdYRzU5T3lJc0luSmxjWFZwY21Vb0p5NHVMMjF2WkhWc1pYTXZkMlZpTG1SdmJTNXBkR1Z5WVdKc1pTY3BPMXh1Y21WeGRXbHlaU2duTGk0dmJXOWtkV3hsY3k5bGN6WXVjM1J5YVc1bkxtbDBaWEpoZEc5eUp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpIVnNaWE12WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0luS1RzaUxDSnlaWEYxYVhKbEtDY3VMaTh1TGk5dGIyUjFiR1Z6TDJWek5pNXZZbXBsWTNRdVlYTnphV2R1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHVMeTR1TDIxdlpIVnNaWE12WDJOdmNtVW5LUzVQWW1wbFkzUXVZWE56YVdkdU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnBaaWgwZVhCbGIyWWdhWFFnSVQwZ0oyWjFibU4wYVc5dUp5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb2FYUWdLeUFuSUdseklHNXZkQ0JoSUdaMWJtTjBhVzl1SVNjcE8xeHVJQ0J5WlhSMWNtNGdhWFE3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9LWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWhwZENBcklDY2dhWE1nYm05MElHRnVJRzlpYW1WamRDRW5LVHRjYmlBZ2NtVjBkWEp1SUdsME8xeHVmVHNpTENJdkx5Qm1ZV3h6WlNBdFBpQkJjbkpoZVNOcGJtUmxlRTltWEc0dkx5QjBjblZsSUNBdFBpQkJjbkpoZVNOcGJtTnNkV1JsYzF4dWRtRnlJSFJ2U1U5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x2WW1wbFkzUW5LVnh1SUNBc0lIUnZUR1Z1WjNSb0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXeGxibWQwYUNjcFhHNGdJQ3dnZEc5SmJtUmxlQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc1a1pYZ25LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvU1ZOZlNVNURURlZFUlZNcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9KSFJvYVhNc0lHVnNMQ0JtY205dFNXNWtaWGdwZTF4dUlDQWdJSFpoY2lCUElDQWdJQ0FnUFNCMGIwbFBZbXBsWTNRb0pIUm9hWE1wWEc0Z0lDQWdJQ0FzSUd4bGJtZDBhQ0E5SUhSdlRHVnVaM1JvS0U4dWJHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCcGJtUmxlQ0FnUFNCMGIwbHVaR1Y0S0daeWIyMUpibVJsZUN3Z2JHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCMllXeDFaVHRjYmlBZ0lDQXZMeUJCY25KaGVTTnBibU5zZFdSbGN5QjFjMlZ6SUZOaGJXVldZV3gxWlZwbGNtOGdaWEYxWVd4cGRIa2dZV3huYjNKcGRHaHRYRzRnSUNBZ2FXWW9TVk5mU1U1RFRGVkVSVk1nSmlZZ1pXd2dJVDBnWld3cGQyaHBiR1VvYkdWdVozUm9JRDRnYVc1a1pYZ3BlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQlBXMmx1WkdWNEt5dGRPMXh1SUNBZ0lDQWdhV1lvZG1Gc2RXVWdJVDBnZG1Gc2RXVXBjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdMeThnUVhKeVlYa2pkRzlKYm1SbGVDQnBaMjV2Y21WeklHaHZiR1Z6TENCQmNuSmhlU05wYm1Oc2RXUmxjeUF0SUc1dmRGeHVJQ0FnSUgwZ1pXeHpaU0JtYjNJb08yeGxibWQwYUNBK0lHbHVaR1Y0T3lCcGJtUmxlQ3NyS1dsbUtFbFRYMGxPUTB4VlJFVlRJSHg4SUdsdVpHVjRJR2x1SUU4cGUxeHVJQ0FnSUNBZ2FXWW9UMXRwYm1SbGVGMGdQVDA5SUdWc0tYSmxkSFZ5YmlCSlUxOUpUa05NVlVSRlV5QjhmQ0JwYm1SbGVDQjhmQ0F3TzF4dUlDQWdJSDBnY21WMGRYSnVJQ0ZKVTE5SlRrTk1WVVJGVXlBbUppQXRNVHRjYmlBZ2ZUdGNibjA3SWl3aUx5OGdaMlYwZEdsdVp5QjBZV2NnWm5KdmJTQXhPUzR4TGpNdU5pQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bktDbGNiblpoY2lCamIyWWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIyWW5LVnh1SUNBc0lGUkJSeUE5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkMGIxTjBjbWx1WjFSaFp5Y3BYRzRnSUM4dklFVlRNeUIzY205dVp5Qm9aWEpsWEc0Z0lDd2dRVkpISUQwZ1kyOW1LR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUJoY21kMWJXVnVkSE03SUgwb0tTa2dQVDBnSjBGeVozVnRaVzUwY3ljN1hHNWNiaTh2SUdaaGJHeGlZV05ySUdadmNpQkpSVEV4SUZOamNtbHdkQ0JCWTJObGMzTWdSR1Z1YVdWa0lHVnljbTl5WEc1MllYSWdkSEo1UjJWMElEMGdablZ1WTNScGIyNG9hWFFzSUd0bGVTbDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsMFcydGxlVjA3WEc0Z0lIMGdZMkYwWTJnb1pTbDdJQzhxSUdWdGNIUjVJQ292SUgxY2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0IyWVhJZ1R5d2dWQ3dnUWp0Y2JpQWdjbVYwZFhKdUlHbDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QW5WVzVrWldacGJtVmtKeUE2SUdsMElEMDlQU0J1ZFd4c0lEOGdKMDUxYkd3blhHNGdJQ0FnTHk4Z1FFQjBiMU4wY21sdVoxUmhaeUJqWVhObFhHNGdJQ0FnT2lCMGVYQmxiMllnS0ZRZ1BTQjBjbmxIWlhRb1R5QTlJRTlpYW1WamRDaHBkQ2tzSUZSQlJ5a3BJRDA5SUNkemRISnBibWNuSUQ4Z1ZGeHVJQ0FnSUM4dklHSjFhV3gwYVc1VVlXY2dZMkZ6WlZ4dUlDQWdJRG9nUVZKSElEOGdZMjltS0U4cFhHNGdJQ0FnTHk4Z1JWTXpJR0Z5WjNWdFpXNTBjeUJtWVd4c1ltRmphMXh1SUNBZ0lEb2dLRUlnUFNCamIyWW9UeWtwSUQwOUlDZFBZbXBsWTNRbklDWW1JSFI1Y0dWdlppQlBMbU5oYkd4bFpTQTlQU0FuWm5WdVkzUnBiMjRuSUQ4Z0owRnlaM1Z0Wlc1MGN5Y2dPaUJDTzF4dWZUc2lMQ0oyWVhJZ2RHOVRkSEpwYm1jZ1BTQjdmUzUwYjFOMGNtbHVaenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tHbDBLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNTlPeUlzSW5aaGNpQmpiM0psSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2RtVnljMmx2YmpvZ0p6SXVOQzR3SjMwN1hHNXBaaWgwZVhCbGIyWWdYMTlsSUQwOUlDZHVkVzFpWlhJbktWOWZaU0E5SUdOdmNtVTdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldZaUxDSXZMeUJ2Y0hScGIyNWhiQ0F2SUhOcGJYQnNaU0JqYjI1MFpYaDBJR0pwYm1ScGJtZGNiblpoY2lCaFJuVnVZM1JwYjI0Z1BTQnlaWEYxYVhKbEtDY3VMMTloTFdaMWJtTjBhVzl1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHWnVMQ0IwYUdGMExDQnNaVzVuZEdncGUxeHVJQ0JoUm5WdVkzUnBiMjRvWm00cE8xeHVJQ0JwWmloMGFHRjBJRDA5UFNCMWJtUmxabWx1WldRcGNtVjBkWEp1SUdadU8xeHVJQ0J6ZDJsMFkyZ29iR1Z1WjNSb0tYdGNiaUFnSUNCallYTmxJREU2SUhKbGRIVnliaUJtZFc1amRHbHZiaWhoS1h0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtYmk1allXeHNLSFJvWVhRc0lHRXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F5T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpbDdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNHVZMkZzYkNoMGFHRjBMQ0JoTENCaUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdOaGMyVWdNem9nY21WMGRYSnVJR1oxYm1OMGFXOXVLR0VzSUdJc0lHTXBlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWnVMbU5oYkd3b2RHaGhkQ3dnWVN3Z1lpd2dZeWs3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9MeW9nTGk0dVlYSm5jeUFxTHlsN1hHNGdJQ0FnY21WMGRYSnVJR1p1TG1Gd2NHeDVLSFJvWVhRc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUgwN1hHNTlPeUlzSWk4dklEY3VNaTR4SUZKbGNYVnBjbVZQWW1wbFkzUkRiMlZ5WTJsaWJHVW9ZWEpuZFcxbGJuUXBYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdhV1lvYVhRZ1BUMGdkVzVrWldacGJtVmtLWFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa05oYmlkMElHTmhiR3dnYldWMGFHOWtJRzl1SUNCY0lpQXJJR2wwS1R0Y2JpQWdjbVYwZFhKdUlHbDBPMXh1ZlRzaUxDSXZMeUJVYUdGdWF5ZHpJRWxGT0NCbWIzSWdhR2x6SUdaMWJtNTVJR1JsWm1sdVpWQnliM0JsY25SNVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRnlaWEYxYVhKbEtDY3VMMTltWVdsc2N5Y3BLR1oxYm1OMGFXOXVLQ2w3WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29lMzBzSUNkaEp5d2dlMmRsZERvZ1puVnVZM1JwYjI0b0tYc2djbVYwZFhKdUlEYzdJSDE5S1M1aElDRTlJRGM3WEc1OUtUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1Z4dUlDQXNJR1J2WTNWdFpXNTBJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5SY2JpQWdMeThnYVc0Z2IyeGtJRWxGSUhSNWNHVnZaaUJrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MElHbHpJQ2R2WW1wbFkzUW5YRzRnSUN3Z2FYTWdQU0JwYzA5aWFtVmpkQ2hrYjJOMWJXVnVkQ2tnSmlZZ2FYTlBZbXBsWTNRb1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6SUQ4Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hwZENrZ09pQjdmVHRjYm4wN0lpd2lMeThnU1VVZ09DMGdaRzl1SjNRZ1pXNTFiU0JpZFdjZ2EyVjVjMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lDZGpiMjV6ZEhKMVkzUnZjaXhvWVhOUGQyNVFjbTl3WlhKMGVTeHBjMUJ5YjNSdmRIbHdaVTltTEhCeWIzQmxjblI1U1hORmJuVnRaWEpoWW14bExIUnZURzlqWVd4bFUzUnlhVzVuTEhSdlUzUnlhVzVuTEhaaGJIVmxUMlluWEc0cExuTndiR2wwS0Njc0p5azdJaXdpZG1GeUlHZHNiMkpoYkNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJkc2IySmhiQ2NwWEc0Z0lDd2dZMjl5WlNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkyOXlaU2NwWEc0Z0lDd2dZM1I0SUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkzUjRKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5b2FXUmxKeWxjYmlBZ0xDQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JseHVkbUZ5SUNSbGVIQnZjblFnUFNCbWRXNWpkR2x2YmloMGVYQmxMQ0J1WVcxbExDQnpiM1Z5WTJVcGUxeHVJQ0IyWVhJZ1NWTmZSazlTUTBWRUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVJseHVJQ0FnSUN3Z1NWTmZSMHhQUWtGTUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVIxeHVJQ0FnSUN3Z1NWTmZVMVJCVkVsRElEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVUxeHVJQ0FnSUN3Z1NWTmZVRkpQVkU4Z0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVVGeHVJQ0FnSUN3Z1NWTmZRa2xPUkNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVFseHVJQ0FnSUN3Z1NWTmZWMUpCVUNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVYxeHVJQ0FnSUN3Z1pYaHdiM0owY3lBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWTI5eVpTQTZJR052Y21WYmJtRnRaVjBnZkh3Z0tHTnZjbVZiYm1GdFpWMGdQU0I3ZlNsY2JpQWdJQ0FzSUdWNGNGQnliM1J2SUNBOUlHVjRjRzl5ZEhOYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2RHRnlaMlYwSUNBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWjJ4dlltRnNJRG9nU1ZOZlUxUkJWRWxESUQ4Z1oyeHZZbUZzVzI1aGJXVmRJRG9nS0dkc2IySmhiRnR1WVcxbFhTQjhmQ0I3ZlNsYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2EyVjVMQ0J2ZDI0c0lHOTFkRHRjYmlBZ2FXWW9TVk5mUjB4UFFrRk1LWE52ZFhKalpTQTlJRzVoYldVN1hHNGdJR1p2Y2loclpYa2dhVzRnYzI5MWNtTmxLWHRjYmlBZ0lDQXZMeUJqYjI1MFlXbHVjeUJwYmlCdVlYUnBkbVZjYmlBZ0lDQnZkMjRnUFNBaFNWTmZSazlTUTBWRUlDWW1JSFJoY21kbGRDQW1KaUIwWVhKblpYUmJhMlY1WFNBaFBUMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lHbG1LRzkzYmlBbUppQnJaWGtnYVc0Z1pYaHdiM0owY3lsamIyNTBhVzUxWlR0Y2JpQWdJQ0F2THlCbGVIQnZjblFnYm1GMGFYWmxJRzl5SUhCaGMzTmxaRnh1SUNBZ0lHOTFkQ0E5SUc5M2JpQS9JSFJoY21kbGRGdHJaWGxkSURvZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0x5OGdjSEpsZG1WdWRDQm5iRzlpWVd3Z2NHOXNiSFYwYVc5dUlHWnZjaUJ1WVcxbGMzQmhZMlZ6WEc0Z0lDQWdaWGh3YjNKMGMxdHJaWGxkSUQwZ1NWTmZSMHhQUWtGTUlDWW1JSFI1Y0dWdlppQjBZWEpuWlhSYmEyVjVYU0FoUFNBblpuVnVZM1JwYjI0bklEOGdjMjkxY21ObFcydGxlVjFjYmlBZ0lDQXZMeUJpYVc1a0lIUnBiV1Z5Y3lCMGJ5Qm5iRzlpWVd3Z1ptOXlJR05oYkd3Z1puSnZiU0JsZUhCdmNuUWdZMjl1ZEdWNGRGeHVJQ0FnSURvZ1NWTmZRa2xPUkNBbUppQnZkMjRnUHlCamRIZ29iM1YwTENCbmJHOWlZV3dwWEc0Z0lDQWdMeThnZDNKaGNDQm5iRzlpWVd3Z1kyOXVjM1J5ZFdOMGIzSnpJR1p2Y2lCd2NtVjJaVzUwSUdOb1lXNW5aU0IwYUdWdElHbHVJR3hwWW5KaGNubGNiaUFnSUNBNklFbFRYMWRTUVZBZ0ppWWdkR0Z5WjJWMFcydGxlVjBnUFQwZ2IzVjBJRDhnS0daMWJtTjBhVzl1S0VNcGUxeHVJQ0FnSUNBZ2RtRnlJRVlnUFNCbWRXNWpkR2x2YmloaExDQmlMQ0JqS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFTXBlMXh1SUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTURvZ2NtVjBkWEp1SUc1bGR5QkRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0F4T2lCeVpYUjFjbTRnYm1WM0lFTW9ZU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCdVpYY2dReWhoTENCaUtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUhKbGRIVnliaUJ1WlhjZ1F5aGhMQ0JpTENCaktUdGNiaUFnSUNBZ0lDQWdmU0J5WlhSMWNtNGdReTVoY0hCc2VTaDBhR2x6TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lFWmJVRkpQVkU5VVdWQkZYU0E5SUVOYlVGSlBWRTlVV1ZCRlhUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCR08xeHVJQ0FnSUM4dklHMWhhMlVnYzNSaGRHbGpJSFpsY25OcGIyNXpJR1p2Y2lCd2NtOTBiM1I1Y0dVZ2JXVjBhRzlrYzF4dUlDQWdJSDBwS0c5MWRDa2dPaUJKVTE5UVVrOVVUeUFtSmlCMGVYQmxiMllnYjNWMElEMDlJQ2RtZFc1amRHbHZiaWNnUHlCamRIZ29SblZ1WTNScGIyNHVZMkZzYkN3Z2IzVjBLU0E2SUc5MWREdGNiaUFnSUNBdkx5QmxlSEJ2Y25RZ2NISnZkRzhnYldWMGFHOWtjeUIwYnlCamIzSmxMaVZEVDA1VFZGSlZRMVJQVWlVdWJXVjBhRzlrY3k0bFRrRk5SU1ZjYmlBZ0lDQnBaaWhKVTE5UVVrOVVUeWw3WEc0Z0lDQWdJQ0FvWlhod2IzSjBjeTUyYVhKMGRXRnNJSHg4SUNobGVIQnZjblJ6TG5acGNuUjFZV3dnUFNCN2ZTa3BXMnRsZVYwZ1BTQnZkWFE3WEc0Z0lDQWdJQ0F2THlCbGVIQnZjblFnY0hKdmRHOGdiV1YwYUc5a2N5QjBieUJqYjNKbExpVkRUMDVUVkZKVlExUlBVaVV1Y0hKdmRHOTBlWEJsTGlWT1FVMUZKVnh1SUNBZ0lDQWdhV1lvZEhsd1pTQW1JQ1JsZUhCdmNuUXVVaUFtSmlCbGVIQlFjbTkwYnlBbUppQWhaWGh3VUhKdmRHOWJhMlY1WFNsb2FXUmxLR1Y0Y0ZCeWIzUnZMQ0JyWlhrc0lHOTFkQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1THk4Z2RIbHdaU0JpYVhSdFlYQmNiaVJsZUhCdmNuUXVSaUE5SURFN0lDQWdMeThnWm05eVkyVmtYRzRrWlhod2IzSjBMa2NnUFNBeU95QWdJQzh2SUdkc2IySmhiRnh1SkdWNGNHOXlkQzVUSUQwZ05Ec2dJQ0F2THlCemRHRjBhV05jYmlSbGVIQnZjblF1VUNBOUlEZzdJQ0FnTHk4Z2NISnZkRzljYmlSbGVIQnZjblF1UWlBOUlERTJPeUFnTHk4Z1ltbHVaRnh1SkdWNGNHOXlkQzVYSUQwZ016STdJQ0F2THlCM2NtRndYRzRrWlhod2IzSjBMbFVnUFNBMk5Ec2dJQzh2SUhOaFptVmNiaVJsZUhCdmNuUXVVaUE5SURFeU9Ec2dMeThnY21WaGJDQndjbTkwYnlCdFpYUm9iMlFnWm05eUlHQnNhV0p5WVhKNVlDQmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdKR1Y0Y0c5eWREc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1Y0WldNcGUxeHVJQ0IwY25rZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVdWNFpXTW9LVHRjYmlBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlZ4dWZUc2lMQ0l2THlCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmVteHZhWEp2WTJzdlkyOXlaUzFxY3k5cGMzTjFaWE12T0RZamFYTnpkV1ZqYjIxdFpXNTBMVEV4TlRjMU9UQXlPRnh1ZG1GeUlHZHNiMkpoYkNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VUV0YwYUNBOVBTQk5ZWFJvWEc0Z0lEOGdkMmx1Wkc5M0lEb2dkSGx3Wlc5bUlITmxiR1lnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnYzJWc1ppNU5ZWFJvSUQwOUlFMWhkR2dnUHlCelpXeG1JRG9nUm5WdVkzUnBiMjRvSjNKbGRIVnliaUIwYUdsekp5a29LVHRjYm1sbUtIUjVjR1Z2WmlCZlgyY2dQVDBnSjI1MWJXSmxjaWNwWDE5bklEMGdaMnh2WW1Gc095QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYVnVaR1ZtSWl3aWRtRnlJR2hoYzA5M2JsQnliM0JsY25SNUlEMGdlMzB1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwTENCclpYa3BlMXh1SUNCeVpYUjFjbTRnYUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNocGRDd2dhMlY1S1R0Y2JuMDdJaXdpZG1GeUlHUlFJQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktWeHVJQ0FzSUdOeVpXRjBaVVJsYzJNZ1BTQnlaWEYxYVhKbEtDY3VMMTl3Y205d1pYSjBlUzFrWlhOakp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJtZFc1amRHbHZiaWh2WW1wbFkzUXNJR3RsZVN3Z2RtRnNkV1VwZTF4dUlDQnlaWFIxY200Z1pGQXVaaWh2WW1wbFkzUXNJR3RsZVN3Z1kzSmxZWFJsUkdWell5Z3hMQ0IyWVd4MVpTa3BPMXh1ZlNBNklHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2EyVjVMQ0IyWVd4MVpTbDdYRzRnSUc5aWFtVmpkRnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQnZZbXBsWTNRN1hHNTlPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1ME95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJWEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dKaVlnSVhKbGNYVnBjbVVvSnk0dlgyWmhhV3h6Snlrb1puVnVZM1JwYjI0b0tYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoeVpYRjFhWEpsS0NjdUwxOWtiMjB0WTNKbFlYUmxKeWtvSjJScGRpY3BMQ0FuWVNjc0lIdG5aWFE2SUdaMWJtTjBhVzl1S0NsN0lISmxkSFZ5YmlBM095QjlmU2t1WVNBaFBTQTNPMXh1ZlNrN0lpd2lMeThnWm1Gc2JHSmhZMnNnWm05eUlHNXZiaTFoY25KaGVTMXNhV3RsSUVWVE15QmhibVFnYm05dUxXVnVkVzFsY21GaWJHVWdiMnhrSUZZNElITjBjbWx1WjNOY2JuWmhjaUJqYjJZZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjJZbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMEtDZDZKeWt1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVb01Da2dQeUJQWW1wbFkzUWdPaUJtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQmpiMllvYVhRcElEMDlJQ2RUZEhKcGJtY25JRDhnYVhRdWMzQnNhWFFvSnljcElEb2dUMkpxWldOMEtHbDBLVHRjYm4wN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnYVhRZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnYVhRZ0lUMDlJRzUxYkd3Z09pQjBlWEJsYjJZZ2FYUWdQVDA5SUNkbWRXNWpkR2x2YmljN1hHNTlPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lCamNtVmhkR1VnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxamNtVmhkR1VuS1Z4dUlDQXNJR1JsYzJOeWFYQjBiM0lnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmY0hKdmNHVnlkSGt0WkdWell5Y3BYRzRnSUN3Z2MyVjBWRzlUZEhKcGJtZFVZV2NnUFNCeVpYRjFhWEpsS0NjdUwxOXpaWFF0ZEc4dGMzUnlhVzVuTFhSaFp5Y3BYRzRnSUN3Z1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ1BTQjdmVHRjYmx4dUx5OGdNalV1TVM0eUxqRXVNU0FsU1hSbGNtRjBiM0pRY205MGIzUjVjR1VsVzBCQWFYUmxjbUYwYjNKZEtDbGNibkpsY1hWcGNtVW9KeTR2WDJocFpHVW5LU2hKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3dnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjJsMFpYSmhkRzl5Snlrc0lHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQjBhR2x6T3lCOUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhEYjI1emRISjFZM1J2Y2l3Z1RrRk5SU3dnYm1WNGRDbDdYRzRnSUVOdmJuTjBjblZqZEc5eUxuQnliM1J2ZEhsd1pTQTlJR055WldGMFpTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dlMjVsZUhRNklHUmxjMk55YVhCMGIzSW9NU3dnYm1WNGRDbDlLVHRjYmlBZ2MyVjBWRzlUZEhKcGJtZFVZV2NvUTI5dWMzUnlkV04wYjNJc0lFNUJUVVVnS3lBbklFbDBaWEpoZEc5eUp5azdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQk1TVUpTUVZKWklDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMnhwWW5KaGNua25LVnh1SUNBc0lDUmxlSEJ2Y25RZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZaWGh3YjNKMEp5bGNiaUFnTENCeVpXUmxabWx1WlNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzSmxaR1ZtYVc1bEp5bGNiaUFnTENCb2FXUmxJQ0FnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaHBaR1VuS1Z4dUlDQXNJR2hoY3lBZ0lDQWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z0pHbDBaWEpEY21WaGRHVWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdOeVpXRjBaU2NwWEc0Z0lDd2djMlYwVkc5VGRISnBibWRVWVdjZ1BTQnlaWEYxYVhKbEtDY3VMMTl6WlhRdGRHOHRjM1J5YVc1bkxYUmhaeWNwWEc0Z0lDd2daMlYwVUhKdmRHOTBlWEJsVDJZZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaM0J2SnlsY2JpQWdMQ0JKVkVWU1FWUlBVaUFnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2RwZEdWeVlYUnZjaWNwWEc0Z0lDd2dRbFZIUjFrZ0lDQWdJQ0FnSUNBZ1BTQWhLRnRkTG10bGVYTWdKaVlnSjI1bGVIUW5JR2x1SUZ0ZExtdGxlWE1vS1NrZ0x5OGdVMkZtWVhKcElHaGhjeUJpZFdkbmVTQnBkR1Z5WVhSdmNuTWdkeTl2SUdCdVpYaDBZRnh1SUNBc0lFWkdYMGxVUlZKQlZFOVNJQ0FnSUQwZ0owQkFhWFJsY21GMGIzSW5YRzRnSUN3Z1MwVlpVeUFnSUNBZ0lDQWdJQ0FnUFNBbmEyVjVjeWRjYmlBZ0xDQldRVXhWUlZNZ0lDQWdJQ0FnSUNBOUlDZDJZV3gxWlhNbk8xeHVYRzUyWVhJZ2NtVjBkWEp1VkdocGN5QTlJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUIwYUdsek95QjlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0VKaGMyVXNJRTVCVFVVc0lFTnZibk4wY25WamRHOXlMQ0J1WlhoMExDQkVSVVpCVlV4VUxDQkpVMTlUUlZRc0lFWlBVa05GUkNsN1hHNGdJQ1JwZEdWeVEzSmxZWFJsS0VOdmJuTjBjblZqZEc5eUxDQk9RVTFGTENCdVpYaDBLVHRjYmlBZ2RtRnlJR2RsZEUxbGRHaHZaQ0E5SUdaMWJtTjBhVzl1S0d0cGJtUXBlMXh1SUNBZ0lHbG1LQ0ZDVlVkSFdTQW1KaUJyYVc1a0lHbHVJSEJ5YjNSdktYSmxkSFZ5YmlCd2NtOTBiMXRyYVc1a1hUdGNiaUFnSUNCemQybDBZMmdvYTJsdVpDbDdYRzRnSUNBZ0lDQmpZWE5sSUV0RldWTTZJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnJaWGx6S0NsN0lISmxkSFZ5YmlCdVpYY2dRMjl1YzNSeWRXTjBiM0lvZEdocGN5d2dhMmx1WkNrN0lIMDdYRzRnSUNBZ0lDQmpZWE5sSUZaQlRGVkZVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJSFpoYkhWbGN5Z3BleUJ5WlhSMWNtNGdibVYzSUVOdmJuTjBjblZqZEc5eUtIUm9hWE1zSUd0cGJtUXBPeUI5TzF4dUlDQWdJSDBnY21WMGRYSnVJR1oxYm1OMGFXOXVJR1Z1ZEhKcFpYTW9LWHNnY21WMGRYSnVJRzVsZHlCRGIyNXpkSEoxWTNSdmNpaDBhR2x6TENCcmFXNWtLVHNnZlR0Y2JpQWdmVHRjYmlBZ2RtRnlJRlJCUnlBZ0lDQWdJQ0FnUFNCT1FVMUZJQ3NnSnlCSmRHVnlZWFJ2Y2lkY2JpQWdJQ0FzSUVSRlJsOVdRVXhWUlZNZ1BTQkVSVVpCVlV4VUlEMDlJRlpCVEZWRlUxeHVJQ0FnSUN3Z1ZrRk1WVVZUWDBKVlJ5QTlJR1poYkhObFhHNGdJQ0FnTENCd2NtOTBieUFnSUNBZ0lEMGdRbUZ6WlM1d2NtOTBiM1I1Y0dWY2JpQWdJQ0FzSUNSdVlYUnBkbVVnSUNBZ1BTQndjbTkwYjF0SlZFVlNRVlJQVWwwZ2ZId2djSEp2ZEc5YlJrWmZTVlJGVWtGVVQxSmRJSHg4SUVSRlJrRlZURlFnSmlZZ2NISnZkRzliUkVWR1FWVk1WRjFjYmlBZ0lDQXNJQ1JrWldaaGRXeDBJQ0FnUFNBa2JtRjBhWFpsSUh4OElHZGxkRTFsZEdodlpDaEVSVVpCVlV4VUtWeHVJQ0FnSUN3Z0pHVnVkSEpwWlhNZ0lDQTlJRVJGUmtGVlRGUWdQeUFoUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLQ2RsYm5SeWFXVnpKeWtnT2lCMWJtUmxabWx1WldSY2JpQWdJQ0FzSUNSaGJubE9ZWFJwZG1VZ1BTQk9RVTFGSUQwOUlDZEJjbkpoZVNjZ1B5QndjbTkwYnk1bGJuUnlhV1Z6SUh4OElDUnVZWFJwZG1VZ09pQWtibUYwYVhabFhHNGdJQ0FnTENCdFpYUm9iMlJ6TENCclpYa3NJRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxPMXh1SUNBdkx5QkdhWGdnYm1GMGFYWmxYRzRnSUdsbUtDUmhibmxPWVhScGRtVXBlMXh1SUNBZ0lFbDBaWEpoZEc5eVVISnZkRzkwZVhCbElEMGdaMlYwVUhKdmRHOTBlWEJsVDJZb0pHRnVlVTVoZEdsMlpTNWpZV3hzS0c1bGR5QkNZWE5sS1NrN1hHNGdJQ0FnYVdZb1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ0lUMDlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXBlMXh1SUNBZ0lDQWdMeThnVTJWMElFQkFkRzlUZEhKcGJtZFVZV2NnZEc4Z2JtRjBhWFpsSUdsMFpYSmhkRzl5YzF4dUlDQWdJQ0FnYzJWMFZHOVRkSEpwYm1kVVlXY29TWFJsY21GMGIzSlFjbTkwYjNSNWNHVXNJRlJCUnl3Z2RISjFaU2s3WEc0Z0lDQWdJQ0F2THlCbWFYZ2dabTl5SUhOdmJXVWdiMnhrSUdWdVoybHVaWE5jYmlBZ0lDQWdJR2xtS0NGTVNVSlNRVkpaSUNZbUlDRm9ZWE1vU1hSbGNtRjBiM0pRY205MGIzUjVjR1VzSUVsVVJWSkJWRTlTS1Nsb2FXUmxLRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxMQ0JKVkVWU1FWUlBVaXdnY21WMGRYSnVWR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4dklHWnBlQ0JCY25KaGVTTjdkbUZzZFdWekxDQkFRR2wwWlhKaGRHOXlmUzV1WVcxbElHbHVJRlk0SUM4Z1JrWmNiaUFnYVdZb1JFVkdYMVpCVEZWRlV5QW1KaUFrYm1GMGFYWmxJQ1ltSUNSdVlYUnBkbVV1Ym1GdFpTQWhQVDBnVmtGTVZVVlRLWHRjYmlBZ0lDQldRVXhWUlZOZlFsVkhJRDBnZEhKMVpUdGNiaUFnSUNBa1pHVm1ZWFZzZENBOUlHWjFibU4wYVc5dUlIWmhiSFZsY3lncGV5QnlaWFIxY200Z0pHNWhkR2wyWlM1allXeHNLSFJvYVhNcE95QjlPMXh1SUNCOVhHNGdJQzh2SUVSbFptbHVaU0JwZEdWeVlYUnZjbHh1SUNCcFppZ29JVXhKUWxKQlVsa2dmSHdnUms5U1EwVkVLU0FtSmlBb1FsVkhSMWtnZkh3Z1ZrRk1WVVZUWDBKVlJ5QjhmQ0FoY0hKdmRHOWJTVlJGVWtGVVQxSmRLU2w3WEc0Z0lDQWdhR2xrWlNod2NtOTBieXdnU1ZSRlVrRlVUMUlzSUNSa1pXWmhkV3gwS1R0Y2JpQWdmVnh1SUNBdkx5QlFiSFZuSUdadmNpQnNhV0p5WVhKNVhHNGdJRWwwWlhKaGRHOXljMXRPUVUxRlhTQTlJQ1JrWldaaGRXeDBPMXh1SUNCSmRHVnlZWFJ2Y25OYlZFRkhYU0FnUFNCeVpYUjFjbTVVYUdsek8xeHVJQ0JwWmloRVJVWkJWVXhVS1h0Y2JpQWdJQ0J0WlhSb2IyUnpJRDBnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpPaUFnUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLRlpCVEZWRlV5a3NYRzRnSUNBZ0lDQnJaWGx6T2lBZ0lDQkpVMTlUUlZRZ0lDQWdJRDhnSkdSbFptRjFiSFFnT2lCblpYUk5aWFJvYjJRb1MwVlpVeWtzWEc0Z0lDQWdJQ0JsYm5SeWFXVnpPaUFrWlc1MGNtbGxjMXh1SUNBZ0lIMDdYRzRnSUNBZ2FXWW9SazlTUTBWRUtXWnZjaWhyWlhrZ2FXNGdiV1YwYUc5a2N5bDdYRzRnSUNBZ0lDQnBaaWdoS0d0bGVTQnBiaUJ3Y205MGJ5a3BjbVZrWldacGJtVW9jSEp2ZEc4c0lHdGxlU3dnYldWMGFHOWtjMXRyWlhsZEtUdGNiaUFnSUNCOUlHVnNjMlVnSkdWNGNHOXlkQ2drWlhod2IzSjBMbEFnS3lBa1pYaHdiM0owTGtZZ0tpQW9RbFZIUjFrZ2ZId2dWa0ZNVlVWVFgwSlZSeWtzSUU1QlRVVXNJRzFsZEdodlpITXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnRaWFJvYjJSek8xeHVmVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dSdmJtVXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHQyWVd4MVpUb2dkbUZzZFdVc0lHUnZibVU2SUNFaFpHOXVaWDA3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMzA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCMGNuVmxPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiaTh2SURFNUxqRXVNaTR4SUU5aWFtVmpkQzVoYzNOcFoyNG9kR0Z5WjJWMExDQnpiM1Z5WTJVc0lDNHVMaWxjYm5aaGNpQm5aWFJMWlhseklDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFyWlhsekp5bGNiaUFnTENCblQxQlRJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMW5iM0J6SnlsY2JpQWdMQ0J3U1VVZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxd2FXVW5LVnh1SUNBc0lIUnZUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGIySnFaV04wSnlsY2JpQWdMQ0JKVDJKcVpXTjBJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybHZZbXBsWTNRbktWeHVJQ0FzSUNSaGMzTnBaMjRnSUQwZ1QySnFaV04wTG1GemMybG5ianRjYmx4dUx5OGdjMmh2ZFd4a0lIZHZjbXNnZDJsMGFDQnplVzFpYjJ4eklHRnVaQ0J6YUc5MWJHUWdhR0YyWlNCa1pYUmxjbTFwYm1semRHbGpJSEJ5YjNCbGNuUjVJRzl5WkdWeUlDaFdPQ0JpZFdjcFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRWtZWE56YVdkdUlIeDhJSEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdkbUZ5SUVFZ1BTQjdmVnh1SUNBZ0lDd2dRaUE5SUh0OVhHNGdJQ0FnTENCVElEMGdVM2x0WW05c0tDbGNiaUFnSUNBc0lFc2dQU0FuWVdKalpHVm1aMmhwYW10c2JXNXZjSEZ5YzNRbk8xeHVJQ0JCVzFOZElEMGdOenRjYmlBZ1N5NXpjR3hwZENnbkp5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHJLWHNnUWx0clhTQTlJR3M3SUgwcE8xeHVJQ0J5WlhSMWNtNGdKR0Z6YzJsbmJpaDdmU3dnUVNsYlUxMGdJVDBnTnlCOGZDQlBZbXBsWTNRdWEyVjVjeWdrWVhOemFXZHVLSHQ5TENCQ0tTa3VhbTlwYmlnbkp5a2dJVDBnU3p0Y2JuMHBJRDhnWm5WdVkzUnBiMjRnWVhOemFXZHVLSFJoY21kbGRDd2djMjkxY21ObEtYc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFiblZ6WldRdGRtRnljMXh1SUNCMllYSWdWQ0FnSUNBZ1BTQjBiMDlpYW1WamRDaDBZWEpuWlhRcFhHNGdJQ0FnTENCaFRHVnVJQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2hjYmlBZ0lDQXNJR2x1WkdWNElEMGdNVnh1SUNBZ0lDd2daMlYwVTNsdFltOXNjeUE5SUdkUFVGTXVabHh1SUNBZ0lDd2dhWE5GYm5WdElDQWdJQ0E5SUhCSlJTNW1PMXh1SUNCM2FHbHNaU2hoVEdWdUlENGdhVzVrWlhncGUxeHVJQ0FnSUhaaGNpQlRJQ0FnSUNBZ1BTQkpUMkpxWldOMEtHRnlaM1Z0Wlc1MGMxdHBibVJsZUNzclhTbGNiaUFnSUNBZ0lDd2dhMlY1Y3lBZ0lEMGdaMlYwVTNsdFltOXNjeUEvSUdkbGRFdGxlWE1vVXlrdVkyOXVZMkYwS0dkbGRGTjViV0p2YkhNb1V5a3BJRG9nWjJWMFMyVjVjeWhUS1Z4dUlDQWdJQ0FnTENCc1pXNW5kR2dnUFNCclpYbHpMbXhsYm1kMGFGeHVJQ0FnSUNBZ0xDQnFJQ0FnSUNBZ1BTQXdYRzRnSUNBZ0lDQXNJR3RsZVR0Y2JpQWdJQ0IzYUdsc1pTaHNaVzVuZEdnZ1BpQnFLV2xtS0dselJXNTFiUzVqWVd4c0tGTXNJR3RsZVNBOUlHdGxlWE5iYWlzclhTa3BWRnRyWlhsZElEMGdVMXRyWlhsZE8xeHVJQ0I5SUhKbGRIVnliaUJVTzF4dWZTQTZJQ1JoYzNOcFoyNDdJaXdpTHk4Z01Ua3VNUzR5TGpJZ0x5QXhOUzR5TGpNdU5TQlBZbXBsWTNRdVkzSmxZWFJsS0U4Z1d5d2dVSEp2Y0dWeWRHbGxjMTBwWEc1MllYSWdZVzVQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWhiaTF2WW1wbFkzUW5LVnh1SUNBc0lHUlFjeUFnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdSd2N5Y3BYRzRnSUN3Z1pXNTFiVUoxWjB0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDE5bGJuVnRMV0oxWnkxclpYbHpKeWxjYmlBZ0xDQkpSVjlRVWs5VVR5QWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzTm9ZWEpsWkMxclpYa25LU2duU1VWZlVGSlBWRThuS1Z4dUlDQXNJRVZ0Y0hSNUlDQWdJQ0FnSUQwZ1puVnVZM1JwYjI0b0tYc2dMeW9nWlcxd2RIa2dLaThnZlZ4dUlDQXNJRkJTVDFSUFZGbFFSU0FnSUQwZ0ozQnliM1J2ZEhsd1pTYzdYRzVjYmk4dklFTnlaV0YwWlNCdlltcGxZM1FnZDJsMGFDQm1ZV3RsSUdCdWRXeHNZQ0J3Y205MGIzUjVjR1U2SUhWelpTQnBabkpoYldVZ1QySnFaV04wSUhkcGRHZ2dZMnhsWVhKbFpDQndjbTkwYjNSNWNHVmNiblpoY2lCamNtVmhkR1ZFYVdOMElEMGdablZ1WTNScGIyNG9LWHRjYmlBZ0x5OGdWR2h5WVhOb0xDQjNZWE4wWlNCaGJtUWdjMjlrYjIxNU9pQkpSU0JIUXlCaWRXZGNiaUFnZG1GeUlHbG1jbUZ0WlNBOUlISmxjWFZwY21Vb0p5NHZYMlJ2YlMxamNtVmhkR1VuS1NnbmFXWnlZVzFsSnlsY2JpQWdJQ0FzSUdrZ0lDQWdJQ0E5SUdWdWRXMUNkV2RMWlhsekxteGxibWQwYUZ4dUlDQWdJQ3dnYkhRZ0lDQWdJRDBnSnp3blhHNGdJQ0FnTENCbmRDQWdJQ0FnUFNBblBpZGNiaUFnSUNBc0lHbG1jbUZ0WlVSdlkzVnRaVzUwTzF4dUlDQnBabkpoYldVdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjYmlBZ2NtVnhkV2x5WlNnbkxpOWZhSFJ0YkNjcExtRndjR1Z1WkVOb2FXeGtLR2xtY21GdFpTazdYRzRnSUdsbWNtRnRaUzV6Y21NZ1BTQW5hbUYyWVhOamNtbHdkRG9uT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhOamNtbHdkQzExY214Y2JpQWdMeThnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMazlpYW1WamREdGNiaUFnTHk4Z2FIUnRiQzV5WlcxdmRtVkRhR2xzWkNocFpuSmhiV1VwTzF4dUlDQnBabkpoYldWRWIyTjFiV1Z1ZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzV2Y0dWdUtDazdYRzRnSUdsbWNtRnRaVVJ2WTNWdFpXNTBMbmR5YVhSbEtHeDBJQ3NnSjNOamNtbHdkQ2NnS3lCbmRDQXJJQ2RrYjJOMWJXVnVkQzVHUFU5aWFtVmpkQ2NnS3lCc2RDQXJJQ2N2YzJOeWFYQjBKeUFySUdkMEtUdGNiaUFnYVdaeVlXMWxSRzlqZFcxbGJuUXVZMnh2YzJVb0tUdGNiaUFnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlVSdlkzVnRaVzUwTGtZN1hHNGdJSGRvYVd4bEtHa3RMU2xrWld4bGRHVWdZM0psWVhSbFJHbGpkRnRRVWs5VVQxUlpVRVZkVzJWdWRXMUNkV2RMWlhselcybGRYVHRjYmlBZ2NtVjBkWEp1SUdOeVpXRjBaVVJwWTNRb0tUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wTG1OeVpXRjBaU0I4ZkNCbWRXNWpkR2x2YmlCamNtVmhkR1VvVHl3Z1VISnZjR1Z5ZEdsbGN5bDdYRzRnSUhaaGNpQnlaWE4xYkhRN1hHNGdJR2xtS0U4Z0lUMDlJRzUxYkd3cGUxeHVJQ0FnSUVWdGNIUjVXMUJTVDFSUFZGbFFSVjBnUFNCaGJrOWlhbVZqZENoUEtUdGNiaUFnSUNCeVpYTjFiSFFnUFNCdVpYY2dSVzF3ZEhrN1hHNGdJQ0FnUlcxd2RIbGJVRkpQVkU5VVdWQkZYU0E5SUc1MWJHdzdYRzRnSUNBZ0x5OGdZV1JrSUZ3aVgxOXdjbTkwYjE5ZlhDSWdabTl5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppQndiMng1Wm1sc2JGeHVJQ0FnSUhKbGMzVnNkRnRKUlY5UVVrOVVUMTBnUFNCUE8xeHVJQ0I5SUdWc2MyVWdjbVZ6ZFd4MElEMGdZM0psWVhSbFJHbGpkQ2dwTzF4dUlDQnlaWFIxY200Z1VISnZjR1Z5ZEdsbGN5QTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2NtVnpkV3gwSURvZ1pGQnpLSEpsYzNWc2RDd2dVSEp2Y0dWeWRHbGxjeWs3WEc1OU8xeHVJaXdpZG1GeUlHRnVUMkpxWldOMElDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQkpSVGhmUkU5TlgwUkZSa2xPUlNBOUlISmxjWFZwY21Vb0p5NHZYMmxsT0Mxa2IyMHRaR1ZtYVc1bEp5bGNiaUFnTENCMGIxQnlhVzFwZEdsMlpTQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMWEJ5YVcxcGRHbDJaU2NwWEc0Z0lDd2daRkFnSUNBZ0lDQWdJQ0FnSUNBZ1BTQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGs3WEc1Y2JtVjRjRzl5ZEhNdVppQTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowZVNoUExDQlFMQ0JCZEhSeWFXSjFkR1Z6S1h0Y2JpQWdZVzVQWW1wbFkzUW9UeWs3WEc0Z0lGQWdQU0IwYjFCeWFXMXBkR2wyWlNoUUxDQjBjblZsS1R0Y2JpQWdZVzVQWW1wbFkzUW9RWFIwY21saWRYUmxjeWs3WEc0Z0lHbG1LRWxGT0Y5RVQwMWZSRVZHU1U1RktYUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUlFLRThzSUZBc0lFRjBkSEpwWW5WMFpYTXBPMXh1SUNCOUlHTmhkR05vS0dVcGV5QXZLaUJsYlhCMGVTQXFMeUI5WEc0Z0lHbG1LQ2RuWlhRbklHbHVJRUYwZEhKcFluVjBaWE1nZkh3Z0ozTmxkQ2NnYVc0Z1FYUjBjbWxpZFhSbGN5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb0owRmpZMlZ6YzI5eWN5QnViM1FnYzNWd2NHOXlkR1ZrSVNjcE8xeHVJQ0JwWmlnbmRtRnNkV1VuSUdsdUlFRjBkSEpwWW5WMFpYTXBUMXRRWFNBOUlFRjBkSEpwWW5WMFpYTXVkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQlBPMXh1ZlRzaUxDSjJZWElnWkZBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFpIQW5LVnh1SUNBc0lHRnVUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmWVc0dGIySnFaV04wSnlsY2JpQWdMQ0JuWlhSTFpYbHpJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxclpYbHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1Z6WTNKcGNIUnZjbk1uS1NBL0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBhV1Z6SURvZ1puVnVZM1JwYjI0Z1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loUExDQlFjbTl3WlhKMGFXVnpLWHRjYmlBZ1lXNVBZbXBsWTNRb1R5azdYRzRnSUhaaGNpQnJaWGx6SUNBZ1BTQm5aWFJMWlhsektGQnliM0JsY25ScFpYTXBYRzRnSUNBZ0xDQnNaVzVuZEdnZ1BTQnJaWGx6TG14bGJtZDBhRnh1SUNBZ0lDd2dhU0E5SURCY2JpQWdJQ0FzSUZBN1hHNGdJSGRvYVd4bEtHeGxibWQwYUNBK0lHa3BaRkF1WmloUExDQlFJRDBnYTJWNWMxdHBLeXRkTENCUWNtOXdaWEowYVdWelcxQmRLVHRjYmlBZ2NtVjBkWEp1SUU4N1hHNTlPeUlzSW1WNGNHOXlkSE11WmlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITTdJaXdpTHk4Z01Ua3VNUzR5TGprZ0x5QXhOUzR5TGpNdU1pQlBZbXBsWTNRdVoyVjBVSEp2ZEc5MGVYQmxUMllvVHlsY2JuWmhjaUJvWVhNZ0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmhoY3ljcFhHNGdJQ3dnZEc5UFltcGxZM1FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxdlltcGxZM1FuS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0xXdGxlU2NwS0NkSlJWOVFVazlVVHljcFhHNGdJQ3dnVDJKcVpXTjBVSEp2ZEc4Z1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmlCOGZDQm1kVzVqZEdsdmJpaFBLWHRjYmlBZ1R5QTlJSFJ2VDJKcVpXTjBLRThwTzF4dUlDQnBaaWhvWVhNb1R5d2dTVVZmVUZKUFZFOHBLWEpsZEhWeWJpQlBXMGxGWDFCU1QxUlBYVHRjYmlBZ2FXWW9kSGx3Wlc5bUlFOHVZMjl1YzNSeWRXTjBiM0lnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJQSUdsdWMzUmhibU5sYjJZZ1R5NWpiMjV6ZEhKMVkzUnZjaWw3WEc0Z0lDQWdjbVYwZFhKdUlFOHVZMjl1YzNSeWRXTjBiM0l1Y0hKdmRHOTBlWEJsTzF4dUlDQjlJSEpsZEhWeWJpQlBJR2x1YzNSaGJtTmxiMllnVDJKcVpXTjBJRDhnVDJKcVpXTjBVSEp2ZEc4Z09pQnVkV3hzTzF4dWZUc2lMQ0oyWVhJZ2FHRnpJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYjJKcVpXTjBKeWxjYmlBZ0xDQmhjbkpoZVVsdVpHVjRUMllnUFNCeVpYRjFhWEpsS0NjdUwxOWhjbkpoZVMxcGJtTnNkV1JsY3ljcEtHWmhiSE5sS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM05vWVhKbFpDMXJaWGtuS1NnblNVVmZVRkpQVkU4bktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJRzVoYldWektYdGNiaUFnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDaHZZbXBsWTNRcFhHNGdJQ0FnTENCcElDQWdJQ0FnUFNBd1hHNGdJQ0FnTENCeVpYTjFiSFFnUFNCYlhWeHVJQ0FnSUN3Z2EyVjVPMXh1SUNCbWIzSW9hMlY1SUdsdUlFOHBhV1lvYTJWNUlDRTlJRWxGWDFCU1QxUlBLV2hoY3loUExDQnJaWGtwSUNZbUlISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJQzh2SUVSdmJpZDBJR1Z1ZFcwZ1luVm5JQ1lnYUdsa1pHVnVJR3RsZVhOY2JpQWdkMmhwYkdVb2JtRnRaWE11YkdWdVozUm9JRDRnYVNscFppaG9ZWE1vVHl3Z2EyVjVJRDBnYm1GdFpYTmJhU3NyWFNrcGUxeHVJQ0FnSUg1aGNuSmhlVWx1WkdWNFQyWW9jbVZ6ZFd4MExDQnJaWGtwSUh4OElISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4wN0lpd2lMeThnTVRrdU1TNHlMakUwSUM4Z01UVXVNaTR6TGpFMElFOWlhbVZqZEM1clpYbHpLRThwWEc1MllYSWdKR3RsZVhNZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdGEyVjVjeTFwYm5SbGNtNWhiQ2NwWEc0Z0lDd2daVzUxYlVKMVowdGxlWE1nUFNCeVpYRjFhWEpsS0NjdUwxOWxiblZ0TFdKMVp5MXJaWGx6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMExtdGxlWE1nZkh3Z1puVnVZM1JwYjI0Z2EyVjVjeWhQS1h0Y2JpQWdjbVYwZFhKdUlDUnJaWGx6S0U4c0lHVnVkVzFDZFdkTFpYbHpLVHRjYm4wN0lpd2laWGh3YjNKMGN5NW1JRDBnZTMwdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhpYVhSdFlYQXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQmxiblZ0WlhKaFlteGxJQ0E2SUNFb1ltbDBiV0Z3SUNZZ01Ta3NYRzRnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUFoS0dKcGRHMWhjQ0FtSURJcExGeHVJQ0FnSUhkeWFYUmhZbXhsSUNBZ0lEb2dJU2hpYVhSdFlYQWdKaUEwS1N4Y2JpQWdJQ0IyWVd4MVpTQWdJQ0FnSUNBNklIWmhiSFZsWEc0Z0lIMDdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcE95SXNJblpoY2lCa1pXWWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktTNW1YRzRnSUN3Z2FHRnpJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQlVRVWNnUFNCeVpYRjFhWEpsS0NjdUwxOTNhM01uS1NnbmRHOVRkSEpwYm1kVVlXY25LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDd2dkR0ZuTENCemRHRjBLWHRjYmlBZ2FXWW9hWFFnSmlZZ0lXaGhjeWhwZENBOUlITjBZWFFnUHlCcGRDQTZJR2wwTG5CeWIzUnZkSGx3WlN3Z1ZFRkhLU2xrWldZb2FYUXNJRlJCUnl3Z2UyTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIUmhaMzBwTzF4dWZUc2lMQ0oyWVhJZ2MyaGhjbVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KMnRsZVhNbktWeHVJQ0FzSUhWcFpDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzVnBaQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloclpYa3BlMXh1SUNCeVpYUjFjbTRnYzJoaGNtVmtXMnRsZVYwZ2ZId2dLSE5vWVhKbFpGdHJaWGxkSUQwZ2RXbGtLR3RsZVNrcE8xeHVmVHNpTENKMllYSWdaMnh2WW1Gc0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQlRTRUZTUlVRZ1BTQW5YMTlqYjNKbExXcHpYM05vWVhKbFpGOWZKMXh1SUNBc0lITjBiM0psSUNBOUlHZHNiMkpoYkZ0VFNFRlNSVVJkSUh4OElDaG5iRzlpWVd4YlUwaEJVa1ZFWFNBOUlIdDlLVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYTJWNUtYdGNiaUFnY21WMGRYSnVJSE4wYjNKbFcydGxlVjBnZkh3Z0tITjBiM0psVzJ0bGVWMGdQU0I3ZlNrN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCa1pXWnBibVZrSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc0dkx5QjBjblZsSUNBdFBpQlRkSEpwYm1jallYUmNiaTh2SUdaaGJITmxJQzArSUZOMGNtbHVaeU5qYjJSbFVHOXBiblJCZEZ4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloVVQxOVRWRkpKVGtjcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9kR2hoZEN3Z2NHOXpLWHRjYmlBZ0lDQjJZWElnY3lBOUlGTjBjbWx1Wnloa1pXWnBibVZrS0hSb1lYUXBLVnh1SUNBZ0lDQWdMQ0JwSUQwZ2RHOUpiblJsWjJWeUtIQnZjeWxjYmlBZ0lDQWdJQ3dnYkNBOUlITXViR1Z1WjNSb1hHNGdJQ0FnSUNBc0lHRXNJR0k3WEc0Z0lDQWdhV1lvYVNBOElEQWdmSHdnYVNBK1BTQnNLWEpsZEhWeWJpQlVUMTlUVkZKSlRrY2dQeUFuSnlBNklIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCaElEMGdjeTVqYUdGeVEyOWtaVUYwS0drcE8xeHVJQ0FnSUhKbGRIVnliaUJoSUR3Z01IaGtPREF3SUh4OElHRWdQaUF3ZUdSaVptWWdmSHdnYVNBcklERWdQVDA5SUd3Z2ZId2dLR0lnUFNCekxtTm9ZWEpEYjJSbFFYUW9hU0FySURFcEtTQThJREI0WkdNd01DQjhmQ0JpSUQ0Z01IaGtabVptWEc0Z0lDQWdJQ0EvSUZSUFgxTlVVa2xPUnlBL0lITXVZMmhoY2tGMEtHa3BJRG9nWVZ4dUlDQWdJQ0FnT2lCVVQxOVRWRkpKVGtjZ1B5QnpMbk5zYVdObEtHa3NJR2tnS3lBeUtTQTZJQ2hoSUMwZ01IaGtPREF3SUR3OElERXdLU0FySUNoaUlDMGdNSGhrWXpBd0tTQXJJREI0TVRBd01EQTdYRzRnSUgwN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCdFlYZ2dJQ0FnSUNBZ1BTQk5ZWFJvTG0xaGVGeHVJQ0FzSUcxcGJpQWdJQ0FnSUNBOUlFMWhkR2d1YldsdU8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBibVJsZUN3Z2JHVnVaM1JvS1h0Y2JpQWdhVzVrWlhnZ1BTQjBiMGx1ZEdWblpYSW9hVzVrWlhncE8xeHVJQ0J5WlhSMWNtNGdhVzVrWlhnZ1BDQXdJRDhnYldGNEtHbHVaR1Y0SUNzZ2JHVnVaM1JvTENBd0tTQTZJRzFwYmlocGJtUmxlQ3dnYkdWdVozUm9LVHRjYm4wN0lpd2lMeThnTnk0eExqUWdWRzlKYm5SbFoyVnlYRzUyWVhJZ1kyVnBiQ0FnUFNCTllYUm9MbU5sYVd4Y2JpQWdMQ0JtYkc5dmNpQTlJRTFoZEdndVpteHZiM0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6VG1GT0tHbDBJRDBnSzJsMEtTQS9JREFnT2lBb2FYUWdQaUF3SUQ4Z1pteHZiM0lnT2lCalpXbHNLU2hwZENrN1hHNTlPeUlzSWk4dklIUnZJR2x1WkdWNFpXUWdiMkpxWldOMExDQjBiMDlpYW1WamRDQjNhWFJvSUdaaGJHeGlZV05ySUdadmNpQnViMjR0WVhKeVlYa3RiR2xyWlNCRlV6TWdjM1J5YVc1bmMxeHVkbUZ5SUVsUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBiMkpxWldOMEp5bGNiaUFnTENCa1pXWnBibVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1ZtYVc1bFpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQkpUMkpxWldOMEtHUmxabWx1WldRb2FYUXBLVHRjYm4wN0lpd2lMeThnTnk0eExqRTFJRlJ2VEdWdVozUm9YRzUyWVhJZ2RHOUpiblJsWjJWeUlEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXNTBaV2RsY2ljcFhHNGdJQ3dnYldsdUlDQWdJQ0FnSUQwZ1RXRjBhQzV0YVc0N1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUdsMElENGdNQ0EvSUcxcGJpaDBiMGx1ZEdWblpYSW9hWFFwTENBd2VERm1abVptWm1abVptWm1abVptS1NBNklEQTdJQzh2SUhCdmR5Z3lMQ0ExTXlrZ0xTQXhJRDA5SURrd01EY3hPVGt5TlRRM05EQTVPVEZjYm4wN0lpd2lMeThnTnk0eExqRXpJRlJ2VDJKcVpXTjBLR0Z5WjNWdFpXNTBLVnh1ZG1GeUlHUmxabWx1WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDaGtaV1pwYm1Wa0tHbDBLU2s3WEc1OU95SXNJaTh2SURjdU1TNHhJRlJ2VUhKcGJXbDBhWFpsS0dsdWNIVjBJRnNzSUZCeVpXWmxjbkpsWkZSNWNHVmRLVnh1ZG1GeUlHbHpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmYVhNdGIySnFaV04wSnlrN1hHNHZMeUJwYm5OMFpXRmtJRzltSUhSb1pTQkZVellnYzNCbFl5QjJaWEp6YVc5dUxDQjNaU0JrYVdSdUozUWdhVzF3YkdWdFpXNTBJRUJBZEc5UWNtbHRhWFJwZG1VZ1kyRnpaVnh1THk4Z1lXNWtJSFJvWlNCelpXTnZibVFnWVhKbmRXMWxiblFnTFNCbWJHRm5JQzBnY0hKbFptVnljbVZrSUhSNWNHVWdhWE1nWVNCemRISnBibWRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRc0lGTXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hKbGRIVnliaUJwZER0Y2JpQWdkbUZ5SUdadUxDQjJZV3c3WEc0Z0lHbG1LRk1nSmlZZ2RIbHdaVzltSUNobWJpQTlJR2wwTG5SdlUzUnlhVzVuS1NBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUNGcGMwOWlhbVZqZENoMllXd2dQU0JtYmk1allXeHNLR2wwS1NrcGNtVjBkWEp1SUhaaGJEdGNiaUFnYVdZb2RIbHdaVzltSUNobWJpQTlJR2wwTG5aaGJIVmxUMllwSUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnSVdselQySnFaV04wS0haaGJDQTlJR1p1TG1OaGJHd29hWFFwS1NseVpYUjFjbTRnZG1Gc08xeHVJQ0JwWmlnaFV5QW1KaUIwZVhCbGIyWWdLR1p1SUQwZ2FYUXVkRzlUZEhKcGJtY3BJRDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdJV2x6VDJKcVpXTjBLSFpoYkNBOUlHWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzF4dUlDQjBhSEp2ZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzRuZENCamIyNTJaWEowSUc5aWFtVmpkQ0IwYnlCd2NtbHRhWFJwZG1VZ2RtRnNkV1ZjSWlrN1hHNTlPeUlzSW5aaGNpQnBaQ0E5SURCY2JpQWdMQ0J3ZUNBOUlFMWhkR2d1Y21GdVpHOXRLQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0d0bGVTbDdYRzRnSUhKbGRIVnliaUFuVTNsdFltOXNLQ2N1WTI5dVkyRjBLR3RsZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnSnljZ09pQnJaWGtzSUNjcFh5Y3NJQ2dySzJsa0lDc2djSGdwTG5SdlUzUnlhVzVuS0RNMktTazdYRzU5T3lJc0luWmhjaUJ6ZEc5eVpTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KM2RyY3ljcFhHNGdJQ3dnZFdsa0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1ZwWkNjcFhHNGdJQ3dnVTNsdFltOXNJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmRzYjJKaGJDY3BMbE41YldKdmJGeHVJQ0FzSUZWVFJWOVRXVTFDVDB3Z1BTQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOUlDZG1kVzVqZEdsdmJpYzdYRzVjYm5aaGNpQWtaWGh3YjNKMGN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9ibUZ0WlNsN1hHNGdJSEpsZEhWeWJpQnpkRzl5WlZ0dVlXMWxYU0I4ZkNBb2MzUnZjbVZiYm1GdFpWMGdQVnh1SUNBZ0lGVlRSVjlUV1UxQ1Qwd2dKaVlnVTNsdFltOXNXMjVoYldWZElIeDhJQ2hWVTBWZlUxbE5RazlNSUQ4Z1UzbHRZbTlzSURvZ2RXbGtLU2duVTNsdFltOXNMaWNnS3lCdVlXMWxLU2s3WEc1OU8xeHVYRzRrWlhod2IzSjBjeTV6ZEc5eVpTQTlJSE4wYjNKbE95SXNJblpoY2lCamJHRnpjMjltSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYkdGemMyOW1KeWxjYmlBZ0xDQkpWRVZTUVZSUFVpQWdQU0J5WlhGMWFYSmxLQ2N1TDE5M2EzTW5LU2duYVhSbGNtRjBiM0luS1Z4dUlDQXNJRWwwWlhKaGRHOXljeUE5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNKTlpYUm9iMlFnUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUdsbUtHbDBJQ0U5SUhWdVpHVm1hVzVsWkNseVpYUjFjbTRnYVhSYlNWUkZVa0ZVVDFKZFhHNGdJQ0FnZkh3Z2FYUmJKMEJBYVhSbGNtRjBiM0luWFZ4dUlDQWdJSHg4SUVsMFpYSmhkRzl5YzF0amJHRnpjMjltS0dsMEtWMDdYRzU5T3lJc0luWmhjaUJoYms5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyRnVMVzlpYW1WamRDY3BYRzRnSUN3Z1oyVjBJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMk52Y21VdVoyVjBMV2wwWlhKaGRHOXlMVzFsZEdodlpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNJZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lIWmhjaUJwZEdWeVJtNGdQU0JuWlhRb2FYUXBPMXh1SUNCcFppaDBlWEJsYjJZZ2FYUmxja1p1SUNFOUlDZG1kVzVqZEdsdmJpY3BkR2h5YjNjZ1ZIbHdaVVZ5Y205eUtHbDBJQ3NnSnlCcGN5QnViM1FnYVhSbGNtRmliR1VoSnlrN1hHNGdJSEpsZEhWeWJpQmhiazlpYW1WamRDaHBkR1Z5Um00dVkyRnNiQ2hwZENrcE8xeHVmVHNpTENJbmRYTmxJSE4wY21samRDYzdYRzUyWVhJZ1lXUmtWRzlWYm5OamIzQmhZbXhsY3lBOUlISmxjWFZwY21Vb0p5NHZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeWNwWEc0Z0lDd2djM1JsY0NBZ0lDQWdJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSXRjM1JsY0NjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z2RHOUpUMkpxWldOMElDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdlltcGxZM1FuS1R0Y2JseHVMeThnTWpJdU1TNHpMalFnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbVZ1ZEhKcFpYTW9LVnh1THk4Z01qSXVNUzR6TGpFeklFRnljbUY1TG5CeWIzUnZkSGx3WlM1clpYbHpLQ2xjYmk4dklESXlMakV1TXk0eU9TQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWRtRnNkV1Z6S0NsY2JpOHZJREl5TGpFdU15NHpNQ0JCY25KaGVTNXdjbTkwYjNSNWNHVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdSbFptbHVaU2NwS0VGeWNtRjVMQ0FuUVhKeVlYa25MQ0JtZFc1amRHbHZiaWhwZEdWeVlYUmxaQ3dnYTJsdVpDbDdYRzRnSUhSb2FYTXVYM1FnUFNCMGIwbFBZbXBsWTNRb2FYUmxjbUYwWldRcE95QXZMeUIwWVhKblpYUmNiaUFnZEdocGN5NWZhU0E5SURBN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzVsZUhRZ2FXNWtaWGhjYmlBZ2RHaHBjeTVmYXlBOUlHdHBibVE3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUd0cGJtUmNiaTh2SURJeUxqRXVOUzR5TGpFZ0pVRnljbUY1U1hSbGNtRjBiM0pRY205MGIzUjVjR1VsTG01bGVIUW9LVnh1ZlN3Z1puVnVZM1JwYjI0b0tYdGNiaUFnZG1GeUlFOGdJQ0FnSUQwZ2RHaHBjeTVmZEZ4dUlDQWdJQ3dnYTJsdVpDQWdQU0IwYUdsekxsOXJYRzRnSUNBZ0xDQnBibVJsZUNBOUlIUm9hWE11WDJrckt6dGNiaUFnYVdZb0lVOGdmSHdnYVc1a1pYZ2dQajBnVHk1c1pXNW5kR2dwZTF4dUlDQWdJSFJvYVhNdVgzUWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdjbVYwZFhKdUlITjBaWEFvTVNrN1hHNGdJSDFjYmlBZ2FXWW9hMmx1WkNBOVBTQW5hMlY1Y3ljZ0lDbHlaWFIxY200Z2MzUmxjQ2d3TENCcGJtUmxlQ2s3WEc0Z0lHbG1LR3RwYm1RZ1BUMGdKM1poYkhWbGN5Y3BjbVYwZFhKdUlITjBaWEFvTUN3Z1QxdHBibVJsZUYwcE8xeHVJQ0J5WlhSMWNtNGdjM1JsY0Nnd0xDQmJhVzVrWlhnc0lFOWJhVzVrWlhoZFhTazdYRzU5TENBbmRtRnNkV1Z6SnlrN1hHNWNiaTh2SUdGeVozVnRaVzUwYzB4cGMzUmJRRUJwZEdWeVlYUnZjbDBnYVhNZ0pVRnljbUY1VUhKdmRHOWZkbUZzZFdWekpTQW9PUzQwTGpRdU5pd2dPUzQwTGpRdU55bGNia2wwWlhKaGRHOXljeTVCY21kMWJXVnVkSE1nUFNCSmRHVnlZWFJ2Y25NdVFYSnlZWGs3WEc1Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0oydGxlWE1uS1R0Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0ozWmhiSFZsY3ljcE8xeHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25aVzUwY21sbGN5Y3BPeUlzSWk4dklERTVMakV1TXk0eElFOWlhbVZqZEM1aGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBYRzUyWVhJZ0pHVjRjRzl5ZENBOUlISmxjWFZwY21Vb0p5NHZYMlY0Y0c5eWRDY3BPMXh1WEc0a1pYaHdiM0owS0NSbGVIQnZjblF1VXlBcklDUmxlSEJ2Y25RdVJpd2dKMDlpYW1WamRDY3NJSHRoYzNOcFoyNDZJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFoYzNOcFoyNG5LWDBwT3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQWtZWFFnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjM1J5YVc1bkxXRjBKeWtvZEhKMVpTazdYRzVjYmk4dklESXhMakV1TXk0eU55QlRkSEpwYm1jdWNISnZkRzkwZVhCbFcwQkFhWFJsY21GMGIzSmRLQ2xjYm5KbGNYVnBjbVVvSnk0dlgybDBaWEl0WkdWbWFXNWxKeWtvVTNSeWFXNW5MQ0FuVTNSeWFXNW5KeXdnWm5WdVkzUnBiMjRvYVhSbGNtRjBaV1FwZTF4dUlDQjBhR2x6TGw5MElEMGdVM1J5YVc1bktHbDBaWEpoZEdWa0tUc2dMeThnZEdGeVoyVjBYRzRnSUhSb2FYTXVYMmtnUFNBd095QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QnVaWGgwSUdsdVpHVjRYRzR2THlBeU1TNHhMalV1TWk0eElDVlRkSEpwYm1kSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNVdWJtVjRkQ2dwWEc1OUxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCMllYSWdUeUFnSUNBZ1BTQjBhR2x6TGw5MFhHNGdJQ0FnTENCcGJtUmxlQ0E5SUhSb2FYTXVYMmxjYmlBZ0lDQXNJSEJ2YVc1ME8xeHVJQ0JwWmlocGJtUmxlQ0ErUFNCUExteGxibWQwYUNseVpYUjFjbTRnZTNaaGJIVmxPaUIxYm1SbFptbHVaV1FzSUdSdmJtVTZJSFJ5ZFdWOU8xeHVJQ0J3YjJsdWRDQTlJQ1JoZENoUExDQnBibVJsZUNrN1hHNGdJSFJvYVhNdVgya2dLejBnY0c5cGJuUXViR1Z1WjNSb08xeHVJQ0J5WlhSMWNtNGdlM1poYkhWbE9pQndiMmx1ZEN3Z1pHOXVaVG9nWm1Gc2MyVjlPMXh1ZlNrN0lpd2ljbVZ4ZFdseVpTZ25MaTlsY3pZdVlYSnlZWGt1YVhSbGNtRjBiM0luS1R0Y2JuWmhjaUJuYkc5aVlXd2dJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcFhHNGdJQ3dnVkU5ZlUxUlNTVTVIWDFSQlJ5QTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2QwYjFOMGNtbHVaMVJoWnljcE8xeHVYRzVtYjNJb2RtRnlJR052Ykd4bFkzUnBiMjV6SUQwZ1d5ZE9iMlJsVEdsemRDY3NJQ2RFVDAxVWIydGxia3hwYzNRbkxDQW5UV1ZrYVdGTWFYTjBKeXdnSjFOMGVXeGxVMmhsWlhSTWFYTjBKeXdnSjBOVFUxSjFiR1ZNYVhOMEoxMHNJR2tnUFNBd095QnBJRHdnTlRzZ2FTc3JLWHRjYmlBZ2RtRnlJRTVCVFVVZ0lDQWdJQ0FnUFNCamIyeHNaV04wYVc5dWMxdHBYVnh1SUNBZ0lDd2dRMjlzYkdWamRHbHZiaUE5SUdkc2IySmhiRnRPUVUxRlhWeHVJQ0FnSUN3Z2NISnZkRzhnSUNBZ0lDQTlJRU52Ykd4bFkzUnBiMjRnSmlZZ1EyOXNiR1ZqZEdsdmJpNXdjbTkwYjNSNWNHVTdYRzRnSUdsbUtIQnliM1J2SUNZbUlDRndjbTkwYjF0VVQxOVRWRkpKVGtkZlZFRkhYU2xvYVdSbEtIQnliM1J2TENCVVQxOVRWRkpKVGtkZlZFRkhMQ0JPUVUxRktUdGNiaUFnU1hSbGNtRjBiM0p6VzA1QlRVVmRJRDBnU1hSbGNtRjBiM0p6TGtGeWNtRjVPMXh1ZlNJc0luWmhjaUJXZFdVZ0x5OGdiR0YwWlNCaWFXNWtYRzUyWVhJZ2RtVnljMmx2Ymx4dWRtRnlJRzFoY0NBOUlIZHBibVJ2ZHk1ZlgxWlZSVjlJVDFSZlRVRlFYMThnUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cFhHNTJZWElnYVc1emRHRnNiR1ZrSUQwZ1ptRnNjMlZjYm5aaGNpQnBjMEp5YjNkelpYSnBabmtnUFNCbVlXeHpaVnh1ZG1GeUlHbHVhWFJJYjI5clRtRnRaU0E5SUNkaVpXWnZjbVZEY21WaGRHVW5YRzVjYm1WNGNHOXlkSE11YVc1emRHRnNiQ0E5SUdaMWJtTjBhVzl1SUNoMmRXVXNJR0p5YjNkelpYSnBabmtwSUh0Y2JpQWdhV1lnS0dsdWMzUmhiR3hsWkNrZ2NtVjBkWEp1WEc0Z0lHbHVjM1JoYkd4bFpDQTlJSFJ5ZFdWY2JseHVJQ0JXZFdVZ1BTQjJkV1V1WDE5bGMwMXZaSFZzWlNBL0lIWjFaUzVrWldaaGRXeDBJRG9nZG5WbFhHNGdJSFpsY25OcGIyNGdQU0JXZFdVdWRtVnljMmx2Ymk1emNHeHBkQ2duTGljcExtMWhjQ2hPZFcxaVpYSXBYRzRnSUdselFuSnZkM05sY21sbWVTQTlJR0p5YjNkelpYSnBabmxjYmx4dUlDQXZMeUJqYjIxd1lYUWdkMmwwYUNBOElESXVNQzR3TFdGc2NHaGhMamRjYmlBZ2FXWWdLRloxWlM1amIyNW1hV2N1WDJ4cFptVmplV05zWlVodmIydHpMbWx1WkdWNFQyWW9KMmx1YVhRbktTQStJQzB4S1NCN1hHNGdJQ0FnYVc1cGRFaHZiMnRPWVcxbElEMGdKMmx1YVhRblhHNGdJSDFjYmx4dUlDQmxlSEJ2Y25SekxtTnZiWEJoZEdsaWJHVWdQU0IyWlhKemFXOXVXekJkSUQ0OUlESmNiaUFnYVdZZ0tDRmxlSEJ2Y25SekxtTnZiWEJoZEdsaWJHVXBJSHRjYmlBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvWEc0Z0lDQWdJQ0FuVzBoTlVsMGdXVzkxSUdGeVpTQjFjMmx1WnlCaElIWmxjbk5wYjI0Z2IyWWdkblZsTFdodmRDMXlaV3h2WVdRdFlYQnBJSFJvWVhRZ2FYTWdKeUFyWEc0Z0lDQWdJQ0FuYjI1c2VTQmpiMjF3WVhScFlteGxJSGRwZEdnZ1ZuVmxMbXB6SUdOdmNtVWdYakl1TUM0d0xpZGNiaUFnSUNBcFhHNGdJQ0FnY21WMGRYSnVYRzRnSUgxY2JuMWNibHh1THlvcVhHNGdLaUJEY21WaGRHVWdZU0J5WldOdmNtUWdabTl5SUdFZ2FHOTBJRzF2WkhWc1pTd2dkMmhwWTJnZ2EyVmxjSE1nZEhKaFkyc2diMllnYVhSeklHTnZibk4wY25WamRHOXlYRzRnS2lCaGJtUWdhVzV6ZEdGdVkyVnpYRzRnS2x4dUlDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlHbGtYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjNCMGFXOXVjMXh1SUNvdlhHNWNibVY0Y0c5eWRITXVZM0psWVhSbFVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tHbGtMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lIWmhjaUJEZEc5eUlEMGdiblZzYkZ4dUlDQnBaaUFvZEhsd1pXOW1JRzl3ZEdsdmJuTWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCRGRHOXlJRDBnYjNCMGFXOXVjMXh1SUNBZ0lHOXdkR2x2Ym5NZ1BTQkRkRzl5TG05d2RHbHZibk5jYmlBZ2ZWeHVJQ0J0WVd0bFQzQjBhVzl1YzBodmRDaHBaQ3dnYjNCMGFXOXVjeWxjYmlBZ2JXRndXMmxrWFNBOUlIdGNiaUFnSUNCRGRHOXlPaUJXZFdVdVpYaDBaVzVrS0c5d2RHbHZibk1wTEZ4dUlDQWdJR2x1YzNSaGJtTmxjem9nVzExY2JpQWdmVnh1ZlZ4dVhHNHZLaXBjYmlBcUlFMWhhMlVnWVNCRGIyMXdiMjVsYm5RZ2IzQjBhVzl1Y3lCdlltcGxZM1FnYUc5MExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCcFpGeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzl3ZEdsdmJuTmNiaUFxTDF4dVhHNW1kVzVqZEdsdmJpQnRZV3RsVDNCMGFXOXVjMGh2ZENBb2FXUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2FXNXFaV04wU0c5dmF5aHZjSFJwYjI1ekxDQnBibWwwU0c5dmEwNWhiV1VzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCdFlYQmJhV1JkTG1sdWMzUmhibU5sY3k1d2RYTm9LSFJvYVhNcFhHNGdJSDBwWEc0Z0lHbHVhbVZqZEVodmIyc29iM0IwYVc5dWN5d2dKMkpsWm05eVpVUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkbUZ5SUdsdWMzUmhibU5sY3lBOUlHMWhjRnRwWkYwdWFXNXpkR0Z1WTJWelhHNGdJQ0FnYVc1emRHRnVZMlZ6TG5Od2JHbGpaU2hwYm5OMFlXNWpaWE11YVc1a1pYaFBaaWgwYUdsektTd2dNU2xjYmlBZ2ZTbGNibjFjYmx4dUx5b3FYRzRnS2lCSmJtcGxZM1FnWVNCb2IyOXJJSFJ2SUdFZ2FHOTBJSEpsYkc5aFpHRmliR1VnWTI5dGNHOXVaVzUwSUhOdklIUm9ZWFJjYmlBcUlIZGxJR05oYmlCclpXVndJSFJ5WVdOcklHOW1JR2wwTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2Y0hScGIyNXpYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYm1GdFpWeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnYUc5dmExeHVJQ292WEc1Y2JtWjFibU4wYVc5dUlHbHVhbVZqZEVodmIyc2dLRzl3ZEdsdmJuTXNJRzVoYldVc0lHaHZiMnNwSUh0Y2JpQWdkbUZ5SUdWNGFYTjBhVzVuSUQwZ2IzQjBhVzl1YzF0dVlXMWxYVnh1SUNCdmNIUnBiMjV6VzI1aGJXVmRJRDBnWlhocGMzUnBibWRjYmlBZ0lDQS9JRUZ5Y21GNUxtbHpRWEp5WVhrb1pYaHBjM1JwYm1jcFhHNGdJQ0FnSUNBL0lHVjRhWE4wYVc1bkxtTnZibU5oZENob2IyOXJLVnh1SUNBZ0lDQWdPaUJiWlhocGMzUnBibWNzSUdodmIydGRYRzRnSUNBZ09pQmJhRzl2YTExY2JuMWNibHh1Wm5WdVkzUnBiMjRnZEhKNVYzSmhjQ0FvWm00cElIdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hwWkN3Z1lYSm5LU0I3WEc0Z0lDQWdkSEo1SUhzZ1ptNG9hV1FzSUdGeVp5a2dmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpaGxLVnh1SUNBZ0lDQWdZMjl1YzI5c1pTNTNZWEp1S0NkVGIyMWxkR2hwYm1jZ2QyVnVkQ0IzY205dVp5QmtkWEpwYm1jZ1ZuVmxJR052YlhCdmJtVnVkQ0JvYjNRdGNtVnNiMkZrTGlCR2RXeHNJSEpsYkc5aFpDQnlaWEYxYVhKbFpDNG5LVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUnpMbkpsY21WdVpHVnlJRDBnZEhKNVYzSmhjQ2htZFc1amRHbHZiaUFvYVdRc0lHOXdkR2x2Ym5NcElIdGNiaUFnZG1GeUlISmxZMjl5WkNBOUlHMWhjRnRwWkYxY2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NdWIzQjBhVzl1YzF4dUlDQjlYRzRnSUhKbFkyOXlaQzVEZEc5eUxtOXdkR2x2Ym5NdWNtVnVaR1Z5SUQwZ2IzQjBhVzl1Y3k1eVpXNWtaWEpjYmlBZ2NtVmpiM0prTGtOMGIzSXViM0IwYVc5dWN5NXpkR0YwYVdOU1pXNWtaWEpHYm5NZ1BTQnZjSFJwYjI1ekxuTjBZWFJwWTFKbGJtUmxja1p1YzF4dUlDQnlaV052Y21RdWFXNXpkR0Z1WTJWekxuTnNhV05sS0NrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2FXNXpkR0Z1WTJVcElIdGNiaUFnSUNCcGJuTjBZVzVqWlM0a2IzQjBhVzl1Y3k1eVpXNWtaWElnUFNCdmNIUnBiMjV6TG5KbGJtUmxjbHh1SUNBZ0lHbHVjM1JoYm1ObExpUnZjSFJwYjI1ekxuTjBZWFJwWTFKbGJtUmxja1p1Y3lBOUlHOXdkR2x2Ym5NdWMzUmhkR2xqVW1WdVpHVnlSbTV6WEc0Z0lDQWdhVzV6ZEdGdVkyVXVYM04wWVhScFkxUnlaV1Z6SUQwZ1cxMGdMeThnY21WelpYUWdjM1JoZEdsaklIUnlaV1Z6WEc0Z0lDQWdhVzV6ZEdGdVkyVXVKR1p2Y21ObFZYQmtZWFJsS0NsY2JpQWdmU2xjYm4wcFhHNWNibVY0Y0c5eWRITXVjbVZzYjJGa0lEMGdkSEo1VjNKaGNDaG1kVzVqZEdsdmJpQW9hV1FzSUc5d2RHbHZibk1wSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NdWIzQjBhVzl1YzF4dUlDQjlYRzRnSUcxaGEyVlBjSFJwYjI1elNHOTBLR2xrTENCdmNIUnBiMjV6S1Z4dUlDQjJZWElnY21WamIzSmtJRDBnYldGd1cybGtYVnh1SUNCcFppQW9kbVZ5YzJsdmJsc3hYU0E4SURJcElIdGNiaUFnSUNBdkx5QndjbVZ6WlhKMlpTQndjbVVnTWk0eUlHSmxhR0YyYVc5eUlHWnZjaUJuYkc5aVlXd2diV2w0YVc0Z2FHRnVaR3hwYm1kY2JpQWdJQ0J5WldOdmNtUXVRM1J2Y2k1bGVIUmxibVJQY0hScGIyNXpJRDBnYjNCMGFXOXVjMXh1SUNCOVhHNGdJSFpoY2lCdVpYZERkRzl5SUQwZ2NtVmpiM0prTGtOMGIzSXVjM1Z3WlhJdVpYaDBaVzVrS0c5d2RHbHZibk1wWEc0Z0lISmxZMjl5WkM1RGRHOXlMbTl3ZEdsdmJuTWdQU0J1WlhkRGRHOXlMbTl3ZEdsdmJuTmNiaUFnY21WamIzSmtMa04wYjNJdVkybGtJRDBnYm1WM1EzUnZjaTVqYVdSY2JpQWdjbVZqYjNKa0xrTjBiM0l1Y0hKdmRHOTBlWEJsSUQwZ2JtVjNRM1J2Y2k1d2NtOTBiM1I1Y0dWY2JpQWdhV1lnS0c1bGQwTjBiM0l1Y21Wc1pXRnpaU2tnZTF4dUlDQWdJQzh2SUhSbGJYQnZjbUZ5ZVNCbmJHOWlZV3dnYldsNGFXNGdjM1J5WVhSbFoza2dkWE5sWkNCcGJpQThJREl1TUM0d0xXRnNjR2hoTGpaY2JpQWdJQ0J1WlhkRGRHOXlMbkpsYkdWaGMyVW9LVnh1SUNCOVhHNGdJSEpsWTI5eVpDNXBibk4wWVc1alpYTXVjMnhwWTJVb0tTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHBibk4wWVc1alpTa2dlMXh1SUNBZ0lHbG1JQ2hwYm5OMFlXNWpaUzRrZG01dlpHVWdKaVlnYVc1emRHRnVZMlV1SkhadWIyUmxMbU52Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJR2x1YzNSaGJtTmxMaVIyYm05a1pTNWpiMjUwWlhoMExpUm1iM0pqWlZWd1pHRjBaU2dwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk52YkdVdWQyRnliaWduVW05dmRDQnZjaUJ0WVc1MVlXeHNlU0J0YjNWdWRHVmtJR2x1YzNSaGJtTmxJRzF2WkdsbWFXVmtMaUJHZFd4c0lISmxiRzloWkNCeVpYRjFhWEpsWkM0bktWeHVJQ0FnSUgxY2JpQWdmU2xjYm4wcFhHNGlYWDA9In0=
