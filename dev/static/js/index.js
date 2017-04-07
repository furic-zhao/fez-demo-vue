(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _vue = (typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null);

var _vue2 = _interopRequireDefault(_vue);

var _index = require('./index.vue');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#app',
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

var _index = require('./module/jumbotron/index.vue');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./module/fezdesc/index.vue');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        fezPage: _page2.default,
        fezJumbotron: _index2.default,
        fezFezdesc: _index4.default
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fez-page',[_c('fez-jumbotron'),_vm._v(" "),_c('fez-fezdesc')],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65525c04", __vue__options__)
  } else {
    hotAPI.reload("data-v-65525c04", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./module/fezdesc/index.vue":3,"./module/jumbotron/index.vue":5,"public/module/common/page.vue":11,"vue-hot-reload-api":50}],3:[function(require,module,exports){
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
            fezdesc: ""
        };
    },

    methods: {
        fezdescInit: function fezdescInit() {
            var _vm = this;
            _service2.default.renderData().then(function (data) {
                _vm.fezdesc = data;
            });
        }
    },
    created: function created() {
        this.fezdescInit();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container fezdesc"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-12"},[_c('h3',[_vm._v(_vm._s(_vm.fezdesc))]),_vm._v(" "),_c('div',{staticClass:"fez-big-logo"})])]),_vm._v(" "),_c('hr')])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18d43c60", __vue__options__)
  } else {
    hotAPI.reload("data-v-18d43c60", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":4,"vue-hot-reload-api":50}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.index.fezdesc);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":7}],5:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            jumbotronData: {
                title: "",
                content: "",
                button: {
                    name: "",
                    href: ""
                }
            }
        };
    },

    methods: {
        jumbotron: function jumbotron() {
            var _vm = this;
            _service2.default.renderData().then(function (data) {
                _vm.jumbotron = (0, _extends3.default)(_vm.jumbotronData, data);
            });
        }
    },
    created: function created() {
        this.jumbotron();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jumbotron"},[_c('div',{staticClass:"container"},[_c('h1',{domProps:{"textContent":_vm._s(_vm.jumbotronData.title)}}),_vm._v(" "),_c('p',{domProps:{"textContent":_vm._s(_vm.jumbotronData.content)}}),_vm._v(" "),_c('p',[_c('a',{staticClass:"btn btn-primary btn-lg",attrs:{"href":_vm.jumbotronData.button.href,"role":"button"},domProps:{"innerHTML":_vm._s(_vm.jumbotronData.button.name)}})])])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32a2f6e0", __vue__options__)
  } else {
    hotAPI.reload("data-v-32a2f6e0", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":6,"babel-runtime/helpers/extends":13,"vue-hot-reload-api":50}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.index.jumbotron);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"public/demo-data":7}],9:[function(require,module,exports){
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
    hotAPI.reload("data-v-3b1087eb", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":8,"vue-hot-reload-api":50}],10:[function(require,module,exports){
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
    hotAPI.reload("data-v-5c42ebdd", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":8,"babel-runtime/helpers/extends":13,"vue-hot-reload-api":50}],11:[function(require,module,exports){
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
    hotAPI.reload("data-v-43a688df", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/module/common/footer.vue":9,"public/module/common/header.vue":10,"vue-hot-reload-api":50}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":14}],13:[function(require,module,exports){
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
},{"../core-js/object/assign":12}],14:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":19,"../../modules/es6.object.assign":49}],15:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],16:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":32}],17:[function(require,module,exports){
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
},{"./_to-index":42,"./_to-iobject":44,"./_to-length":45}],18:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],19:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],20:[function(require,module,exports){
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
},{"./_a-function":15}],21:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],22:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":26}],23:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":27,"./_is-object":32}],24:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],25:[function(require,module,exports){
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
},{"./_core":19,"./_ctx":20,"./_global":27,"./_hide":29}],26:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],27:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],28:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],29:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":22,"./_object-dp":34,"./_property-desc":39}],30:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":22,"./_dom-create":23,"./_fails":26}],31:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":18}],32:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],33:[function(require,module,exports){
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
},{"./_fails":26,"./_iobject":31,"./_object-gops":35,"./_object-keys":37,"./_object-pie":38,"./_to-object":46}],34:[function(require,module,exports){
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
},{"./_an-object":16,"./_descriptors":22,"./_ie8-dom-define":30,"./_to-primitive":47}],35:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],36:[function(require,module,exports){
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
},{"./_array-includes":17,"./_has":28,"./_shared-key":40,"./_to-iobject":44}],37:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":24,"./_object-keys-internal":36}],38:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],39:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],40:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":41,"./_uid":48}],41:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":27}],42:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":43}],43:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],44:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":21,"./_iobject":31}],45:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":43}],46:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":21}],47:[function(require,module,exports){
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
},{"./_is-object":32}],48:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],49:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":25,"./_object-assign":33}],50:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvaW5kZXgvaW5kZXguanMiLCJzcmMvdmlld3MvaW5kZXgvc3JjL3ZpZXdzL2luZGV4L2luZGV4LnZ1ZT83YmFlODc3OSIsInNyYy92aWV3cy9pbmRleC9tb2R1bGUvZmV6ZGVzYy9zcmMvdmlld3MvaW5kZXgvbW9kdWxlL2ZlemRlc2MvaW5kZXgudnVlP2M0ZGQxNGI4Iiwic3JjL3ZpZXdzL2luZGV4L21vZHVsZS9mZXpkZXNjL3NlcnZpY2UuanMiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2p1bWJvdHJvbi9zcmMvdmlld3MvaW5kZXgvbW9kdWxlL2p1bWJvdHJvbi9pbmRleC52dWU/NTVkYTk0NzgiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2p1bWJvdHJvbi9zZXJ2aWNlLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9kZW1vLWRhdGEuanMiLCJzcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vY29tbW9uLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXIudnVlP2FmOWNmM2FjIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9oZWFkZXIudnVlPzcyNjM2ZDQ0Iiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9wYWdlLnZ1ZT8xY2EyYjE2NSIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsa0JBQVE7QUFDSixRQUFJLE1BREE7QUFFSixZQUFRLGdCQUFDLENBQUQ7QUFBQSxlQUFPLGtCQUFQO0FBQUE7QUFGSixDQUFSOzs7Ozs7Ozs7Ozs7O0FDSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBOzs7OztBQVhBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWUE7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFoQkE7Ozs7O0FBYkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsS0FBUixDQUFjLE9BQXRCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1FmOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFEQTtBQVVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUF2QkE7Ozs7O0FBYkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsS0FBUixDQUFjLFNBQXRCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7O0FDSmYsSUFBSSxTQUFTLENBQUM7QUFDVixXQUFPLFFBREc7QUFFVixVQUFNLDJFQUZJO0FBR1Ysa3dFQUhVO0FBMkRWLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUEzREEsQ0FBRCxFQStEVjtBQUNDLFdBQU8sS0FEUjtBQUVDLFVBQU0sK0RBRlA7QUFHQyxxaEJBSEQ7QUFZQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBWlgsQ0EvRFUsRUErRVY7QUFDQyxXQUFPLE1BRFI7QUFFQyxVQUFNLGdFQUZQO0FBR0MsaWNBSEQ7QUFRQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBUlgsQ0EvRVUsRUEyRlY7QUFDQyxXQUFPLFlBRFI7QUFFQyxVQUFNLG1FQUZQO0FBR0MseWZBSEQ7QUFhQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBYlgsQ0EzRlUsRUE0R1Y7QUFDQyxXQUFPLE9BRFI7QUFFQyxVQUFNLDJFQUZQO0FBR0MsaXZLQUhEO0FBMkNDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUEzQ1gsQ0E1R1UsRUEySlY7QUFDQyxXQUFPLGFBRFI7QUFFQyxVQUFNLHdFQUZQO0FBR0MsOGJBSEQ7QUFJQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBSlgsQ0EzSlUsQ0FBYjs7QUFxS0EsSUFBSSxRQUFRO0FBQ1IsYUFBUyxpQkFERDtBQUVSLGVBQVc7QUFDUCxlQUFPLHFCQURBO0FBRVAsaUJBQVMsNkNBRkY7QUFHUCxnQkFBUTtBQUNKLDZEQURJO0FBRUosa0JBQU07QUFGRjtBQUhEO0FBRkgsQ0FBWjs7QUFZQSxJQUFJLE9BQU87QUFDUCxlQUFXO0FBQ1AsZUFBTyxvQkFEQTtBQUVQLGlCQUFTLDhDQUZGO0FBR1AsZ0JBQVE7QUFDSixrQkFBTSxRQURGO0FBRUosa0JBQU07QUFGRjtBQUhEO0FBREosQ0FBWDs7QUFXQSxJQUFJLFNBQVM7QUFDVCxjQUFVLGNBREQ7O0FBR1QsYUFBUyxDQUFDO0FBQ04sY0FBTSxJQURBO0FBRU4sY0FBTTtBQUZBLEtBQUQsRUFHTjtBQUNDLGNBQU0sU0FEUDtBQUVDLGNBQU07QUFGUCxLQUhNLENBSEE7O0FBV1QsZ0JBQVk7QUFYSCxDQUFiOztrQkFjZTtBQUNYLGFBQVMsS0FERTtBQUVYLFlBQVEsSUFGRztBQUdYLGNBQVUsTUFIQztBQUlYLGNBQVU7QUFKQyxDOzs7Ozs7Ozs7O0FDMU1mOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGFBQVMsbUJBQU07QUFDWCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLE9BQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0gsS0FMVTtBQU1YLGNBQVUsb0JBQU07QUFDWixlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLFFBQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0gsS0FWVTtBQVdYLGdCQUFZLHNCQUFNO0FBQ2QsZUFBTyxZQUFFLE9BQUYsQ0FBVSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ2xDLG9CQUFRLG1CQUFRLE1BQVIsQ0FBZSxVQUF2QjtBQUNILFNBRk0sQ0FBUDtBQUdIO0FBZlUsQzs7Ozs7Ozs7Ozs7OztBQ01mOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQWZBOzs7OztBQVhBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dCQTs7OztBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBM0JBOzs7OztBQTFCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBOzs7O0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQURBOzs7OztBQWJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleC52dWUnO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgcmVuZGVyOiAoaCkgPT4gaChBcHApXHJcbn0pO1xyXG4iLCI8dGVtcGxhdGU+XG4gICAgPGZlei1wYWdlPlxuICAgICAgICA8ZmV6LWp1bWJvdHJvbj48L2Zlei1qdW1ib3Ryb24+XG4gICAgICAgIDxmZXotZmV6ZGVzYz48L2Zlei1mZXpkZXNjPlxuICAgIDwvZmV6LXBhZ2U+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBmZXpQYWdlIGZyb20gJ3B1YmxpYy9tb2R1bGUvY29tbW9uL3BhZ2UudnVlJ1xuaW1wb3J0IGZlekp1bWJvdHJvbiBmcm9tICcuL21vZHVsZS9qdW1ib3Ryb24vaW5kZXgudnVlJ1xuaW1wb3J0IGZlekZlemRlc2MgZnJvbSAnLi9tb2R1bGUvZmV6ZGVzYy9pbmRleC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGZlelBhZ2UsXG4gICAgICAgIGZlekp1bWJvdHJvbixcbiAgICAgICAgZmV6RmV6ZGVzY1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmV6ZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7ZmV6ZGVzY319PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmV6LWJpZy1sb2dvXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZlemRlc2M6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZmV6ZGVzY0luaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZmV6ZGVzYyA9IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5mZXpkZXNjSW5pdCgpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmluZGV4LmZlemRlc2MpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIHYtdGV4dD1cImp1bWJvdHJvbkRhdGEudGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgPHAgdi10ZXh0PVwianVtYm90cm9uRGF0YS5jb250ZW50XCI+PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgOmhyZWY9XCJqdW1ib3Ryb25EYXRhLmJ1dHRvbi5ocmVmXCIgcm9sZT1cImJ1dHRvblwiIHYtaHRtbD1cImp1bWJvdHJvbkRhdGEuYnV0dG9uLm5hbWVcIj48L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAganVtYm90cm9uRGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAganVtYm90cm9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3ZtID0gdGhpc1xuICAgICAgICAgICAgICAgIFNlcnZpY2UucmVuZGVyRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmp1bWJvdHJvbiA9IE9iamVjdC5hc3NpZ24oX3ZtLmp1bWJvdHJvbkRhdGEsIGRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuanVtYm90cm9uKClcbiAgICAgICAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5pbXBvcnQgUSBmcm9tICdxJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuaW5kZXguanVtYm90cm9uKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImxldCBmcmFtZXMgPSBbe1xuICAgIHRpdGxlOiBcIk5vZGVqc1wiLFxuICAgIGRlc2M6IFwiRkVaIOaehOW7uuWcqCBOb2RlSlMg5Z+65LqOIENocm9tZSBWOCDlvJXmk47nmoQgSmF2YVNjcmlwdCDov5DooYznjq/looPvvIzlhbbkuovku7bpqbHliqjpnZ7pmLvloZ7nmoTnibnmgKfvvIzmnoHlhbblv6vpgJ/nmoTnvJbor5HliY3nq6/lkITnp43otYTmupBcIixcbiAgICBjb250ZW50OiBgPGRpdiBpZD1cImhvbWUtaW50cm9cIj5cblxuICAgICAgICA8cD5Ob2RlLmpzwq4gaXMgYSBKYXZhU2NyaXB0IHJ1bnRpbWUgYnVpbHQgb24gPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3Y4L1wiPkNocm9tZSdzIFY4IEphdmFTY3JpcHQgZW5naW5lPC9hPi5cbk5vZGUuanMgdXNlcyBhbiBldmVudC1kcml2ZW4sIG5vbi1ibG9ja2luZyBJL08gbW9kZWwgdGhhdCBtYWtlcyBpdFxubGlnaHR3ZWlnaHQgYW5kIGVmZmljaWVudC4gTm9kZS5qcycgcGFja2FnZSBlY29zeXN0ZW0sIDxhIGhyZWY9XCJodHRwczovL3d3dy5ucG1qcy5jb20vXCI+bnBtPC9hPiwgaXMgdGhlIGxhcmdlc3QgZWNvc3lzdGVtIG9mIG9wZW5cbnNvdXJjZSBsaWJyYXJpZXMgaW4gdGhlIHdvcmxkLjwvcD5cblxuXG5cbiAgICAgICAgPGgyIGlkPVwiaG9tZS1kb3dubG9hZGhlYWRcIiBkYXRhLWRsLWxvY2FsPVwiRG93bmxvYWQgZm9yXCI+RG93bmxvYWQgZm9yIG1hY09TICh4NjQpPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1kb3dubG9hZGJsb2NrXCI+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvdjYuMTAuMC9ub2RlLXY2LjEwLjAucGtnXCIgY2xhc3M9XCJob21lLWRvd25sb2FkYnV0dG9uXCIgdGl0bGU9XCJEb3dubG9hZCB2Ni4xMC4wIExUU1wiIGRhdGEtdmVyc2lvbj1cInY2LjEwLjBcIj5cbiAgICAgICAgICAgIHY2LjEwLjAgTFRTXG4gICAgICAgICAgICA8c21hbGw+UmVjb21tZW5kZWQgRm9yIE1vc3QgVXNlcnM8L3NtYWxsPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZGl2aWRlci1waXBlIGhvbWUtc2Vjb25kYXJ5LWxpbmtzXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZW4vZG93bmxvYWQvXCI+T3RoZXIgRG93bmxvYWRzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21hc3Rlci9kb2MvY2hhbmdlbG9ncy9DSEFOR0VMT0dfVjYubWQjNi4xMC4wXCI+Q2hhbmdlbG9nPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC12Ni54L2RvY3MvYXBpL1wiPkFQSSBEb2NzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtZG93bmxvYWRibG9ja1wiPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvdjcuNy4xL25vZGUtdjcuNy4xLnBrZ1wiIGNsYXNzPVwiaG9tZS1kb3dubG9hZGJ1dHRvblwiIHRpdGxlPVwiRG93bmxvYWQgdjcuNy4xIEN1cnJlbnRcIiBkYXRhLXZlcnNpb249XCJ2Ny43LjFcIj5cbiAgICAgICAgICAgICAgdjcuNy4xIEN1cnJlbnRcbiAgICAgICAgICAgICAgPHNtYWxsPkxhdGVzdCBGZWF0dXJlczwvc21hbGw+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZGl2aWRlci1waXBlIGhvbWUtc2Vjb25kYXJ5LWxpbmtzXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Rvd25sb2FkL2N1cnJlbnQvXCI+T3RoZXIgRG93bmxvYWRzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21hc3Rlci9kb2MvY2hhbmdlbG9ncy9DSEFOR0VMT0dfVjcubWQjNy43LjFcIj5DaGFuZ2Vsb2c8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXY3LngvZG9jcy9hcGkvXCI+QVBJIERvY3M8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9yIGhhdmUgYSBsb29rIGF0IHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9MVFMjbHRzLXNjaGVkdWxlXCI+TFRTIHNjaGVkdWxlLjwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vbm9kZWpzLm9yZy9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJOUE1cIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggTlBNIOaOpeWFpeWFqOeQg+acgOWkp+eahOW8gOa6kOeUn+aAgeezu+e7n++8jOWFt+Wkh+aXoOmZkOeahOWKn+iDveaJqeWxleiDveWKm++8jOWPr+aVtOWQiOWbvemZheWJjeayv+eahOW8gOa6kOahhuaetu+8jOmAguW6lOeerOaBr+S4h+WPmOeahOaKgOacr+abtOabv1wiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJ0aXRsZSBlbS1kZWZhdWx0IHR5cGUtbmV1dHJhbC0xMVwiPlxuICAgICAgICAgIEJ1aWxkIGFtYXppbmcgdGhpbmdzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwiaDUgZW0tZGVmYXVsdCB0eXBlLW5ldXRyYWwtMTEgcGJ4bFwiPlxuICAgICAgICAgIG5wbSBpcyB0aGUgcGFja2FnZSBtYW5hZ2VyIGZvciBKYXZhU2NyaXB0LiBGaW5kLCBzaGFyZSwgYW5kIHJldXNlXG4gICAgICAgICAgcGFja2FnZXMgb2YgY29kZSBmcm9tIGh1bmRyZWRzIG9mIHRob3VzYW5kcyBvZiBkZXZlbG9wZXJzIOKAlCBhbmRcbiAgICAgICAgICBhc3NlbWJsZSB0aGVtIGluIHBvd2VyZnVsIG5ldyB3YXlzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxhIGlkPVwibWFpbi1jdGFcIiBocmVmPVwiI3BhbmUtaG9tZXBhZ2UtcHJpY2luZ1wiIGNsYXNzPVwiYnRuIGJ0bi1oaWdobGlnaHQtMyBtcmxcIiBkYXRhLWV2ZW50LW5hbWU9XCJob21lcGFnZS1oZXJvLWN0YVwiPkdldCBzdGFydGVkPC9hPmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5ucG1qcy5jb20vXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiR3VscFwiLFxuICAgIGRlc2M6IFwiRkVaIOaVtOWQiEd1bHDnmoTkvJflpJrmj5Lku7bvvIznvJbor5HjgIHkvJjljJblkoznu4Tnu4fliY3nq6/lpI3mnYLnmoTmqKHlnZflj4rpnZnmgIHotYTmupDvvIzllp3nnYDlj6/kuZDlhL/jgIHlk7znnYDlsI/mm7LlhL/vvIzoh6rliqjljJblrozmiJDliY3nq6/lpKfph4/ph43lpI3lt6XkvZxcIixcbiAgICBjb250ZW50OiBgPGgxIGNsYXNzPVwiaGVhZGluZyB0ZXh0LWNlbnRlclwiPkF1dG9tYXRlIGFuZCBlbmhhbmNlIHlvdXIgd29ya2Zsb3c8L2gxPjxoMiBjbGFzcz1cInBhcmFncmFwaFwiPlxuICAgICAgICAgIGd1bHAgaXMgYSB0b29sa2l0IGZvciBhdXRvbWF0aW5nIHBhaW5mdWwgb3IgdGltZS1jb25zdW1pbmcgdGFza3MgaW4geW91ciBkZXZlbG9wbWVudCB3b3JrZmxvdywgc28geW91IGNhbiBzdG9wIG1lc3NpbmcgYXJvdW5kIGFuZCBidWlsZCBzb21ldGhpbmcuXG4gICAgICAgIDwvaDI+PGRpdiBjbGFzcz1cImN0YXNcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImN0YXMtYnV0dG9uXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ndWxwanMvZ3VscC9ibG9iL21hc3Rlci9kb2NzL2dldHRpbmctc3RhcnRlZC5tZFwiPkdldCBTdGFydGVkPC9hPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2d1bHBqcy5jb20vXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQnJvd3NlcmlmeVwiLFxuICAgIGRlc2M6IFwiRkVaIOS9v+eUqCBCcm93c2VyaWZ5IOaooeWdl+WMlue7hOe7h+WSjOeuoeeQhumhueebrueahOWQhOS4quWKn+iDveaooeWdl++8jOaegeWkp+aPkOWNh+mhueebrueahOWPr+e7tOaKpOaAp+OAgeWKn+iDveWkjeeUqOaAp++8jOW5tuWunueOsOenr+acqOW8j+eahOaQreW7uue9kemhtVwiLFxuICAgIGNvbnRlbnQ6IGA8c2VjdGlvbiBpZD1cInRvcC1ob21lLXNlY3Rpb25cIiBjbGFzcz1cInRvcC1zZWN0aW9uIGNvbG9yLWFcIj5cbiAgICAgIDxkaXYgaWQ9XCJ0b3AtaG9tZS1pbWFnZVwiPjwvZGl2PlxuXG4gICAgICAgPGgzIGlkPVwidG9wLXN1YnRpdGxlXCIgY2xhc3M9XCJsYXJnZS1mb250XCI+QnJvd3NlcmlmeSBsZXRzIHlvdSByZXF1aXJlKDxzcGFuIGNsYXNzPVwiY29sb3ItZFwiPidtb2R1bGVzJzwvc3Bhbj4pIGluIHRoZSBicm93c2VyIGJ5IGJ1bmRsaW5nIHVwIGFsbCBvZiB5b3VyIGRlcGVuZGVuY2llcy48L2gzPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9ub2RlLWJyb3dzZXJpZnkjdXNhZ2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvcC1idXR0b25cIiBpZD1cInRvcC1idXR0b24yXCI+XG4gICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L3NlY3Rpb24+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHA6Ly9icm93c2VyaWZ5Lm9yZy9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJCb3dlclwiLFxuICAgIGRlc2M6IFwiRkVaIOWPr+mFjee9ruS9v+eUqCBCb3dlciDmkJzntKLjgIHlronoo4XjgIHmm7TmlrDlkozljbjovb3lpoJKYXZhU2NyaXB044CBQ1NT5LmL57G755qE572R57uc6LWE5rqQ77yM6YCa6L+H6Ieq5Yqo5YyW5rOo5YWl5oqA5pyv5a6M576O6Kej5Yaz5aSN5p2C55qE5qGG5p625YyF566h55CG6Zeu6aKYXCIsXG4gICAgY29udGVudDogYDxkaXYgY2xhc3M9XCJtYWluXCI+XG48cCBjbGFzcz1cImxlYWRcIj5XZWIgc2l0ZXMgYXJlIG1hZGUgb2YgbG90cyBvZiB0aGluZ3Mg4oCUIGZyYW1ld29ya3MsIGxpYnJhcmllcywgYXNzZXRzLCBhbmQgdXRpbGl0aWVzLiBCb3dlciBtYW5hZ2VzIGFsbCB0aGVzZSB0aGluZ3MgZm9yIHlvdS48L3A+XG48cD5LZWVwaW5nIHRyYWNrIG9mIGFsbCB0aGVzZSBwYWNrYWdlcyBhbmQgbWFraW5nIHN1cmUgdGhleSBhcmUgdXAgdG8gZGF0ZSAob3Igc2V0IHRvIHRoZSBzcGVjaWZpYyB2ZXJzaW9ucyB5b3UgbmVlZCkgaXMgdHJpY2t5LiBCb3dlciB0byB0aGUgcmVzY3VlITwvcD5cbjxwPkJvd2VyIGNhbiBtYW5hZ2UgY29tcG9uZW50cyB0aGF0IGNvbnRhaW4gSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBmb250cyBvciBldmVuIGltYWdlIGZpbGVzLiBCb3dlciBkb2VzbuKAmXQgY29uY2F0ZW5hdGUgb3IgbWluaWZ5IGNvZGUgb3IgZG8gYW55dGhpbmcgZWxzZSAtIGl0IGp1c3QgaW5zdGFsbHMgdGhlIHJpZ2h0IHZlcnNpb25zIG9mIHRoZSBwYWNrYWdlcyB5b3UgbmVlZCBhbmQgdGhlaXIgZGVwZW5kZW5jaWVzLjwvcD5cbjxwPlRvIDxhIGhyZWY9XCIjZ2V0dGluZy1zdGFydGVkXCI+Z2V0IHN0YXJ0ZWQ8L2E+LCBCb3dlciB3b3JrcyBieSBmZXRjaGluZyBhbmQgaW5zdGFsbGluZyA8YSBocmVmPVwiL3NlYXJjaFwiPnBhY2thZ2VzPC9hPiBmcm9tIGFsbCBvdmVyLCB0YWtpbmcgY2FyZSBvZiBodW50aW5nLCBmaW5kaW5nLCBkb3dubG9hZGluZywgYW5kIHNhdmluZyB0aGUgc3R1ZmYgeW914oCZcmUgbG9va2luZyBmb3IuIEJvd2VyIGtlZXBzIHRyYWNrIG9mIHRoZXNlIHBhY2thZ2VzIGluIGEgbWFuaWZlc3QgZmlsZSwgPGEgaHJlZj1cIi9kb2NzL2NyZWF0aW5nLXBhY2thZ2VzLyNib3dlcmpzb25cIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIuanNvbjwvY29kZT48L2E+LiBIb3cgeW91IHVzZSA8YSBocmVmPVwiL3NlYXJjaFwiPnBhY2thZ2VzPC9hPiBpcyB1cCB0byB5b3UuIEJvd2VyIHByb3ZpZGVzIGhvb2tzIHRvIGZhY2lsaXRhdGUgdXNpbmcgcGFja2FnZXMgaW4geW91ciA8YSBocmVmPVwiL2RvY3MvdG9vbHNcIj50b29scyBhbmQgd29ya2Zsb3dzPC9hPi48L3A+XG48cD5Cb3dlciBpcyBvcHRpbWl6ZWQgZm9yIHRoZSBmcm9udC1lbmQuIElmIG11bHRpcGxlIHBhY2thZ2VzIGRlcGVuZCBvbiBhIHBhY2thZ2UgLSBqUXVlcnkgZm9yIGV4YW1wbGUgLSBCb3dlciB3aWxsIGRvd25sb2FkIGpRdWVyeSBqdXN0IG9uY2UuIFRoaXMgaXMga25vd24gYXMgYSBmbGF0IGRlcGVuZGVuY3kgZ3JhcGggYW5kIGl0IGhlbHBzIHJlZHVjZSBwYWdlIGxvYWQuPC9wPlxuPGgyIGlkPVwiaW5zdGFsbC1ib3dlclwiPjxhIGhyZWY9XCIjaW5zdGFsbC1ib3dlclwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkluc3RhbGwgQm93ZXI8L2gyPlxuPHA+Qm93ZXIgaXMgYSBjb21tYW5kIGxpbmUgdXRpbGl0eS4gSW5zdGFsbCBpdCB3aXRoIG5wbS48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPm5wbSBpbnN0YWxsIC1nIGJvd2VyPC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPHA+Qm93ZXIgcmVxdWlyZXMgPGEgaHJlZj1cImh0dHA6Ly9ub2RlanMub3JnL1wiPm5vZGUsIG5wbTwvYT4gYW5kIDxhIGhyZWY9XCJodHRwOi8vZ2l0LXNjbS5vcmdcIj5naXQ8L2E+LjwvcD5cbjxwPkxhdGVzdCByZWxlYXNlOiA8YSBocmVmPVwiXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L2Jvd2VyLnN2Zz9tYXhBZ2U9MjU5MjAwMFwiIGFsdD1cImJvd2VyIHZlcnNpb25cIj48L2E+PC9wPlxuPHA+Rm9yIHRyb3VibGVzaG9vdGluZyBpbnN0YWxsYXRpb24gb24gZGlmZmVyZW50IHBsYXRmb3JtcywgcmVhZCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ib3dlci9ib3dlci93aWtpL1Ryb3VibGVzaG9vdGluZ1wiPnRyb3VibGVzaG9vdGluZzwvYT4gd2lraSBwYWdlLjwvcD5cbjxoMiBpZD1cImdldHRpbmctc3RhcnRlZFwiPjxhIGhyZWY9XCIjZ2V0dGluZy1zdGFydGVkXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+R2V0dGluZyBzdGFydGVkPC9oMj5cbjxoMyBpZD1cImluc3RhbGwtcGFja2FnZXNcIj48YSBocmVmPVwiI2luc3RhbGwtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5JbnN0YWxsIHBhY2thZ2VzPC9oMz5cbjxwPkluc3RhbGwgcGFja2FnZXMgd2l0aCA8YSBocmVmPVwiL2RvY3MvYXBpI2luc3RhbGxcIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5zdGFsbDwvY29kZT48L2E+LiBCb3dlciBpbnN0YWxscyBwYWNrYWdlcyB0byA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXJfY29tcG9uZW50cy88L2NvZGU+LjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtYmFzaFwiIGRhdGEtbGFuZz1cImJhc2hcIj48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCAmbHQ7cGFja2FnZSZndDs8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48cD5BIHBhY2thZ2UgY2FuIGJlIGEgR2l0SHViIHNob3J0aGFuZCwgYSBHaXQgZW5kcG9pbnQsIGEgVVJMLCBhbmQgbW9yZS4gUmVhZCBtb3JlIGFib3V0IDxhIGhyZWY9XCIvZG9jcy9hcGkvI2luc3RhbGxcIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5zdGFsbDwvY29kZT48L2E+LjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtYmFzaFwiIGRhdGEtbGFuZz1cImJhc2hcIj48c3BhbiBjbGFzcz1cImNcIj4jIGluc3RhbGxzIHRoZSBwcm9qZWN0IGRlcGVuZGVuY2llcyBsaXN0ZWQgaW4gYm93ZXIuanNvbjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsXG48c3BhbiBjbGFzcz1cImNcIj4jIHJlZ2lzdGVyZWQgcGFja2FnZTwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGpxdWVyeVxuPHNwYW4gY2xhc3M9XCJjXCI+IyBHaXRIdWIgc2hvcnRoYW5kPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgZGVzYW5kcm8vbWFzb25yeVxuPHNwYW4gY2xhc3M9XCJjXCI+IyBHaXQgZW5kcG9pbnQ8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBnaXQ6Ly9naXRodWIuY29tL3VzZXIvcGFja2FnZS5naXRcbjxzcGFuIGNsYXNzPVwiY1wiPiMgVVJMPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgaHR0cDovL2V4YW1wbGUuY29tL3NjcmlwdC5qczwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxoMyBpZD1cInNlYXJjaC1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjc2VhcmNoLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+U2VhcmNoIHBhY2thZ2VzPC9oMz5cbjxwPjxhIGhyZWY9XCIvc2VhcmNoXCI+U2VhcmNoIEJvd2VyIHBhY2thZ2VzPC9hPiBhbmQgZmluZCB0aGUgcmVnaXN0ZXJlZCBwYWNrYWdlIG5hbWVzIGZvciB5b3VyIGZhdm9yaXRlIHByb2plY3RzLjwvcD5cbjxoMyBpZD1cInNhdmUtcGFja2FnZXNcIj48YSBocmVmPVwiI3NhdmUtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5TYXZlIHBhY2thZ2VzPC9oMz5cbjxwPkNyZWF0ZSBhIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPiBmaWxlIGZvciB5b3VyIHBhY2thZ2Ugd2l0aCA8YSBocmVmPVwiL2RvY3MvY3JlYXRpbmctcGFja2FnZXMvI2Jvd2VyanNvblwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbml0PC9jb2RlPjwvYT4uPC9wPlxuPHA+VGhlbiBzYXZlIG5ldyBkZXBlbmRlbmNpZXMgdG8geW91ciA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIuanNvbjwvY29kZT4gd2l0aCA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5zdGFsbCBQQUNLQUdFIC0tc2F2ZTwvY29kZT48L3A+XG48aDMgaWQ9XCJ1c2UtcGFja2FnZXNcIj48YSBocmVmPVwiI3VzZS1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlVzZSBwYWNrYWdlczwvaDM+XG48cD5Ib3cgeW91IHVzZSBwYWNrYWdlcyBpcyB1cCB0byB5b3UuIFdlIHJlY29tbWVuZCB5b3UgdXNlIEJvd2VyIHRvZ2V0aGVyIHdpdGggPGEgaHJlZj1cIi9kb2NzL3Rvb2xzL1wiPkdydW50LCBSZXF1aXJlSlMsIFllb21hbiwgYW5kIGxvdHMgb2Ygb3RoZXIgdG9vbHM8L2E+IG9yIGJ1aWxkIHlvdXIgb3duIHdvcmtmbG93IHdpdGggPGEgaHJlZj1cIi9kb2NzL2FwaS9cIj50aGUgQVBJPC9hPi4gWW91IGNhbiBhbHNvIHVzZSB0aGUgaW5zdGFsbGVkIHBhY2thZ2VzIGRpcmVjdGx5LCBsaWtlIHRoaXMsIGluIHRoZSBjYXNlIG9mIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5qcXVlcnk8L2NvZGU+OjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtaHRtbFwiIGRhdGEtbGFuZz1cImh0bWxcIj48c3BhbiBjbGFzcz1cIm50XCI+Jmx0O3NjcmlwdCA8L3NwYW4+PHNwYW4gY2xhc3M9XCJuYVwiPnNyYz08L3NwYW4+PHNwYW4gY2xhc3M9XCJzXCI+XCJib3dlcl9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIjwvc3Bhbj48c3BhbiBjbGFzcz1cIm50XCI+Jmd0OyZsdDsvc2NyaXB0Jmd0Ozwvc3Bhbj48L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48aDIgaWQ9XCJ0d2l0dGVyLXVwZGF0ZXMtZnJvbS1ib3dlcmh0dHBzdHdpdHRlcmNvbWJvd2VyXCI+PGEgaHJlZj1cIiN0d2l0dGVyLXVwZGF0ZXMtZnJvbS1ib3dlcmh0dHBzdHdpdHRlcmNvbWJvd2VyXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+VHdpdHRlciB1cGRhdGVzIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYm93ZXJcIj5AYm93ZXI8L2E+PC9oMj5cbjxwPjxhIGNsYXNzPVwidHdpdHRlci10aW1lbGluZVwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jvd2VyXCIgZGF0YS13aWRnZXQtaWQ9XCI0ODAzNzcyOTEzNjk3NTQ2MjVcIj5Ud2VldHMgYnkgQGJvd2VyPC9hPlxuPC9wPlxuXG48L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9ib3dlci5pby9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJCb3J3c2VyU3luY1wiLFxuICAgIGRlc2M6IFwiRkVaIOS9v+eUqCBCcm93c2Vyc3luYyDorqnmtY/op4jlmajlrp7ml7blv6vpgJ/nmoTlk43lupTliY3nq6/lkITnp43mlofku7bnmoTmm7TmlLnlubboh6rliqjliLfmlrDpobXpnaLvvIzkuqblj6/lrp7ml7blkIzmraXlkITkuKrnu4jnq6/vvIzmj5Dpq5joh7PlsJEzMCXnmoTlvIDlj5HmlYjnjodcIixcbiAgICBjb250ZW50OiBgPGgxIGNsYXNzPVwiaG9va1wiPlRpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuPC9oMT48cCBjbGFzcz1cInJvbnNlYWxcIj5JdOKAmXMgd2lja2VkLWZhc3QgYW5kIHRvdGFsbHkgZnJlZS48L3A+PHAgY2xhc3M9XCJ2aWRlb1wiPjxhIGNsYXNzPVwidmlkZW9fX2xpbmtcIiBocmVmPVwiI1wiPjwvYT48L3A+PHAgY2xhc3M9XCJob3ctdG9cIj48L3A+PHAgY2xhc3M9XCJob3ctdG9fX2NvbW1hbmRcIj5ucG0gaW5zdGFsbCAtZyBicm93c2VyLXN5bmM8L3A+PHAgY2xhc3M9XCJjdGFcIj48YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiBocmVmPVwiI2luc3RhbGxcIiB0aXRsZT1cIkdldCBTdGFydGVkXCI+R2V0IFN0YXJ0ZWQ8L2E+PC9wPjxkaXYgY2xhc3M9XCJwbGF5ZXJcIj48cD4nYm9uam91cjwvcD48L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9icm93c2Vyc3luYy5pby9cIlxuICAgIH1cbn1dXG5cbmxldCBpbmRleCA9IHtcbiAgICBmZXpkZXNjOiBcIkZFWiDliY3nq6/mqKHlnZfljJblt6XnqIvlvIDlj5HmoYbmnrZcIixcbiAgICBqdW1ib3Ryb246IHtcbiAgICAgICAgdGl0bGU6IFwiSGVsbG8sIEZFWiBBbmQgVnVlIVwiLFxuICAgICAgICBjb250ZW50OiBcIui/meaYr+S4gOS4quS9v+eUqCBGRVog5p6E5bu655qE5YmN56uv5qih5Z2X5YyW5byA5Y+R56S65L6L77yM5ryU56S65LqG5Z+65LqOVnVl5Y2V5paH5Lu257uE5Lu255qE5byA5Y+R57uT5p6E44CCXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViLWFsdFwiPjwvaT4gR2l0SHViYCxcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1cmljLXpoYW8vZmV6XCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGxpc3QgPSB7XG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkZFWiBBbmQgVnVlIEZyYW1lIVwiLFxuICAgICAgICBjb250ZW50OiBcIui/meaYr+S4gOS4qkZFWuaVtOWQiFZ1ZeeahOWIl+ihqOWxleekuumhte+8jOivt+eCueWHu+S4i+mdouWIl+ihqOeahCBEZXRhaWwg5oyJ6ZKu6L+b5YWl6K+m5oOF6aG15rWP6KeIXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogXCLmn6XnnIvmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL2Zlei5oZXN0dWR5LmNvbVwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBjb21tb24gPSB7XG4gICAgc2l0ZU5hbWU6IFwiRkVaIFZ1ZSBERU1PXCIsXG5cbiAgICBuYXZEYXRhOiBbe1xuICAgICAgICBuYW1lOiBcIummlumhtVwiLFxuICAgICAgICBocmVmOiBcImluZGV4Lmh0bWxcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJGRVrln7rmnKzmnrbmnoRcIixcbiAgICAgICAgaHJlZjogXCJsaXN0Lmh0bWxcIlxuICAgIH1dLFxuXG4gICAgZm9vdGVyVGV4dDogXCLCqSAyMDE3IEZFWiDliY3nq6/mqKHlnZfljJblt6XnqIvlvIDlj5HmoYbmnrYgQ3JlYXRlZCBieSBGdXJpYy56aGFvXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiaW5kZXhcIjogaW5kZXgsXG4gICAgXCJsaXN0XCI6IGxpc3QsXG4gICAgXCJmcmFtZXNcIjogZnJhbWVzLFxuICAgIFwiY29tbW9uXCI6IGNvbW1vblxufVxuIiwiaW1wb3J0IFEgZnJvbSAncSdcblxuaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hdkxpc3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLm5hdkRhdGEpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBzaXRlTmFtZTogKCkgPT4ge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24uc2l0ZU5hbWUpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBmb290ZXJUZXh0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5mb290ZXJUZXh0KVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+e3t0ZXh0fX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1yaWdodFwiPlxuXHRcdDxpIGNsYXNzPVwiaWNvbiBpY29uLXdlaXhpblwiPjwvaT5cblx0XHQ8aSBjbGFzcz1cImljb24gaWNvbi13ZWlib1wiPjwvaT5cblx0PC9zcGFuPlxuICAgIDwvZm9vdGVyPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0dGV4dDpcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGZvb3RlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgU2VydmljZS5mb290ZXJUZXh0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIFx0dGhpcy50ZXh0ID0gZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIFx0dGhpcy5mb290ZXIoKVxuICAgICAgICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPnt7aGVhZGVyRGF0YS5zaXRlTmFtZX19PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIGhlYWRlckRhdGEubmF2TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLmhyZWZcIj57e2l0ZW0ubmFtZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0vLm5hdi1jb2xsYXBzZSAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IFEgZnJvbSAncSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBuYXZMaXN0OiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGVhZGVyRGF0YUluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgUS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlLnNpdGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2UubmF2TGlzdCgpXG4gICAgICAgICAgICAgICAgXSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcnRuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBkYXRhWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2TGlzdDogZGF0YVsxXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5oZWFkZXJEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcnRuRGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckRhdGFJbml0KClcbiAgICAgICAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPCEtLSBuYXYgLS0+XG4gICAgICAgIDxmZXotaGVhZGVyPjwvZmV6LWhlYWRlcj5cbiAgICAgICAgPCEtLSBqdW1ib3Ryb24gLS0+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPGZlei1mb290ZXI+PC9mZXotZm9vdGVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgZmV6SGVhZGVyIGZyb20gJ3B1YmxpYy9tb2R1bGUvY29tbW9uL2hlYWRlci52dWUnXG5pbXBvcnQgZmV6Rm9vdGVyIGZyb20gJ3B1YmxpYy9tb2R1bGUvY29tbW9uL2Zvb3Rlci52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGZlekhlYWRlcixcbiAgICAgICAgZmV6Rm9vdGVyXG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBPYmplY3QuY3JlYXRlKG51bGwpXG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgcmV0dXJuXG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBWdWUuZXh0ZW5kKG9wdGlvbnMpLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH0pXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcCAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHsgZm4oaWQsIGFyZykgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW10gLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgfSlcbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICB9XG4gIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZhVzVrWlhndWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZjM0pqTDNacFpYZHpMMmx1WkdWNEwybHVaR1Y0TG5aMVpUODNZbUZsT0RjM09TSXNJbk55WXk5MmFXVjNjeTlwYm1SbGVDOXRiMlIxYkdVdlptVjZaR1Z6WXk5emNtTXZkbWxsZDNNdmFXNWtaWGd2Ylc5a2RXeGxMMlpsZW1SbGMyTXZhVzVrWlhndWRuVmxQMk0wWkdReE5HSTRJaXdpYzNKakwzWnBaWGR6TDJsdVpHVjRMMjF2WkhWc1pTOW1aWHBrWlhOakwzTmxjblpwWTJVdWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZiVzlrZFd4bEwycDFiV0p2ZEhKdmJpOXpjbU12ZG1sbGQzTXZhVzVrWlhndmJXOWtkV3hsTDJwMWJXSnZkSEp2Ymk5cGJtUmxlQzUyZFdVL05UVmtZVGswTnpnaUxDSnpjbU12ZG1sbGQzTXZhVzVrWlhndmJXOWtkV3hsTDJwMWJXSnZkSEp2Ymk5elpYSjJhV05sTG1weklpd2ljM0pqTDNacFpYZHpMM0IxWW14cFl5OWtaVzF2TFdSaGRHRXVhbk1pTENKemNtTXZkbWxsZDNNdmNIVmliR2xqTDIxdlpIVnNaUzlqYjIxdGIyNHZZMjl0Ylc5dUxtcHpJaXdpYzNKakwzWnBaWGR6TDNCMVlteHBZeTl0YjJSMWJHVXZZMjl0Ylc5dUwzTnlZeTkyYVdWM2N5OXdkV0pzYVdNdmJXOWtkV3hsTDJOdmJXMXZiaTltYjI5MFpYSXVkblZsUDJGbU9XTm1NMkZqSWl3aWMzSmpMM1pwWlhkekwzQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMM055WXk5MmFXVjNjeTl3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5b1pXRmtaWEl1ZG5WbFB6Y3lOak0yWkRRMElpd2ljM0pqTDNacFpYZHpMM0IxWW14cFl5OXRiMlIxYkdVdlkyOXRiVzl1TDNOeVl5OTJhV1YzY3k5d2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOXdZV2RsTG5aMVpUOHhZMkV5WWpFMk5TSXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWlZV0psYkMxeWRXNTBhVzFsTDJOdmNtVXRhbk12YjJKcVpXTjBMMkZ6YzJsbmJpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpWVdKbGJDMXlkVzUwYVcxbEwyaGxiSEJsY25NdlpYaDBaVzVrY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdlptNHZiMkpxWldOMEwyRnpjMmxuYmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZllTMW1kVzVqZEdsdmJpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZZVzR0YjJKcVpXTjBMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTloY25KaGVTMXBibU5zZFdSbGN5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZZMjltTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5amIzSmxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlqZEhndWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyUmxabWx1WldRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyUmxjMk55YVhCMGIzSnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlrYjIwdFkzSmxZWFJsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bGJuVnRMV0oxWnkxclpYbHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlsZUhCdmNuUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlpoYVd4ekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOW5iRzlpWVd3dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyaGhjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYUdsa1pTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhV1U0TFdSdmJTMWtaV1pwYm1VdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHZZbXBsWTNRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHpMVzlpYW1WamRDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXRnpjMmxuYmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdSd0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdFoyOXdjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV3RsZVhNdGFXNTBaWEp1WVd3dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxclpYbHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRjR2xsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5d2NtOXdaWEowZVMxa1pYTmpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl6YUdGeVpXUXRhMlY1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5emFHRnlaV1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNSdkxXbHVaR1Y0TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXBiblJsWjJWeUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTFwYjJKcVpXTjBMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTkwYnkxc1pXNW5kR2d1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNSdkxXOWlhbVZqZEM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRjSEpwYldsMGFYWmxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTkxYVdRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlpYTTJMbTlpYW1WamRDNWhjM05wWjI0dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZkblZsTFdodmRDMXlaV3h2WVdRdFlYQnBMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN08wRkRRVUU3T3pzN1FVRkRRVHM3T3pzN08wRkJSVUVzYTBKQlFWRTdRVUZEU2l4UlFVRkpMRTFCUkVFN1FVRkZTaXhaUVVGUkxHZENRVUZETEVOQlFVUTdRVUZCUVN4bFFVRlBMR3RDUVVGUU8wRkJRVUU3UVVGR1NpeERRVUZTT3pzN096czdPenM3T3pzN08wRkRTVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZJUVR0QlFVUkJPenM3T3p0QlFWaEJPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEV1VFN096czdPenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZFUVR0QlFVZEJPenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCVGtFN1FVRlJRVHRCUVVOQk8wRkJRMEU3UVVGb1FrRTdPenM3TzBGQllrRTdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMEZCT3pzN08wRkJSVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR05CUkZjc2QwSkJRMFU3UVVGRFZDeGxRVUZQTEZsQlFVVXNUMEZCUml4RFFVRlZMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVllzUlVGQmNVSTdRVUZEYkVNc2IwSkJRVkVzYlVKQlFWRXNTMEZCVWl4RFFVRmpMRTlCUVhSQ08wRkJRMGdzVTBGR1RTeERRVUZRTzBGQlIwZzdRVUZNVlN4RE96czdPenM3T3pzN096czdPenM3T3p0QlExRm1PenM3T3pzN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVaQk8wRkJTRUU3UVVGRVFUdEJRVlZCT3p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlRrRTdRVUZSUVR0QlFVTkJPMEZCUTBFN1FVRjJRa0U3T3pzN08wRkJZa0U3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBGQk96czdPMEZCUlVFN096czdPenRyUWtGRlpUdEJRVU5ZTEdOQlJGY3NkMEpCUTBVN1FVRkRWQ3hsUVVGUExGbEJRVVVzVDBGQlJpeERRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZc1JVRkJjVUk3UVVGRGJFTXNiMEpCUVZFc2JVSkJRVkVzUzBGQlVpeERRVUZqTEZOQlFYUkNPMEZCUTBnc1UwRkdUU3hEUVVGUU8wRkJSMGc3UVVGTVZTeERPenM3T3pzN096czdPMEZEU21Zc1NVRkJTU3hUUVVGVExFTkJRVU03UVVGRFZpeFhRVUZQTEZGQlJFYzdRVUZGVml4VlFVRk5MREpGUVVaSk8wRkJSMVlzYTNkRlFVaFZPMEZCTWtSV0xHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRXpSRUVzUTBGQlJDeEZRU3RFVmp0QlFVTkRMRmRCUVU4c1MwRkVVanRCUVVWRExGVkJRVTBzSzBSQlJsQTdRVUZIUXl4eGFFSkJTRVE3UVVGWlF5eGpRVUZWTzBGQlEwNHNZMEZCVFN4TlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQk8wRkJXbGdzUTBFdlJGVXNSVUVyUlZZN1FVRkRReXhYUVVGUExFMUJSRkk3UVVGRlF5eFZRVUZOTEdkRlFVWlFPMEZCUjBNc2FXTkJTRVE3UVVGUlF5eGpRVUZWTzBGQlEwNHNZMEZCVFN4TlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQk8wRkJVbGdzUTBFdlJWVXNSVUV5UmxZN1FVRkRReXhYUVVGUExGbEJSRkk3UVVGRlF5eFZRVUZOTEcxRlFVWlFPMEZCUjBNc2VXWkJTRVE3UVVGaFF5eGpRVUZWTzBGQlEwNHNZMEZCVFN4TlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQk8wRkJZbGdzUTBFelJsVXNSVUUwUjFZN1FVRkRReXhYUVVGUExFOUJSRkk3UVVGRlF5eFZRVUZOTERKRlFVWlFPMEZCUjBNc2FYWkxRVWhFTzBGQk1rTkRMR05CUVZVN1FVRkRUaXhqUVVGTkxFMUJSRUU3UVVGRlRpeGpRVUZOTzBGQlJrRTdRVUV6UTFnc1EwRTFSMVVzUlVFeVNsWTdRVUZEUXl4WFFVRlBMR0ZCUkZJN1FVRkZReXhWUVVGTkxIZEZRVVpRTzBGQlIwTXNPR0pCU0VRN1FVRkpReXhqUVVGVk8wRkJRMDRzWTBGQlRTeE5RVVJCTzBGQlJVNHNZMEZCVFR0QlFVWkJPMEZCU2xnc1EwRXpTbFVzUTBGQllqczdRVUZ4UzBFc1NVRkJTU3hSUVVGUk8wRkJRMUlzWVVGQlV5eHBRa0ZFUkR0QlFVVlNMR1ZCUVZjN1FVRkRVQ3hsUVVGUExIRkNRVVJCTzBGQlJWQXNhVUpCUVZNc05rTkJSa1k3UVVGSFVDeG5Ra0ZCVVR0QlFVTktMRFpFUVVSSk8wRkJSVW9zYTBKQlFVMDdRVUZHUmp0QlFVaEVPMEZCUmtnc1EwRkJXanM3UVVGWlFTeEpRVUZKTEU5QlFVODdRVUZEVUN4bFFVRlhPMEZCUTFBc1pVRkJUeXh2UWtGRVFUdEJRVVZRTEdsQ1FVRlRMRGhEUVVaR08wRkJSMUFzWjBKQlFWRTdRVUZEU2l4clFrRkJUU3hSUVVSR08wRkJSVW9zYTBKQlFVMDdRVUZHUmp0QlFVaEVPMEZCUkVvc1EwRkJXRHM3UVVGWFFTeEpRVUZKTEZOQlFWTTdRVUZEVkN4alFVRlZMR05CUkVRN08wRkJSMVFzWVVGQlV5eERRVUZETzBGQlEwNHNZMEZCVFN4SlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQkxFdEJRVVFzUlVGSFRqdEJRVU5ETEdOQlFVMHNVMEZFVUR0QlFVVkRMR05CUVUwN1FVRkdVQ3hMUVVoTkxFTkJTRUU3TzBGQlYxUXNaMEpCUVZrN1FVRllTQ3hEUVVGaU96dHJRa0ZqWlR0QlFVTllMR0ZCUVZNc1MwRkVSVHRCUVVWWUxGbEJRVkVzU1VGR1J6dEJRVWRZTEdOQlFWVXNUVUZJUXp0QlFVbFlMR05CUVZVN1FVRktReXhET3pzN096czdPenM3TzBGRE1VMW1PenM3TzBGQlJVRTdPenM3T3p0clFrRkZaVHRCUVVOWUxHRkJRVk1zYlVKQlFVMDdRVUZEV0N4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zYjBKQlFWRXNiVUpCUVZFc1RVRkJVaXhEUVVGbExFOUJRWFpDTzBGQlEwZ3NVMEZHVFN4RFFVRlFPMEZCUjBnc1MwRk1WVHRCUVUxWUxHTkJRVlVzYjBKQlFVMDdRVUZEV2l4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zYjBKQlFWRXNiVUpCUVZFc1RVRkJVaXhEUVVGbExGRkJRWFpDTzBGQlEwZ3NVMEZHVFN4RFFVRlFPMEZCUjBnc1MwRldWVHRCUVZkWUxHZENRVUZaTEhOQ1FVRk5PMEZCUTJRc1pVRkJUeXhaUVVGRkxFOUJRVVlzUTBGQlZTeFZRVUZETEU5QlFVUXNSVUZCVlN4TlFVRldMRVZCUVhGQ08wRkJRMnhETEc5Q1FVRlJMRzFDUVVGUkxFMUJRVklzUTBGQlpTeFZRVUYyUWp0QlFVTklMRk5CUmswc1EwRkJVRHRCUVVkSU8wRkJabFVzUXpzN096czdPenM3T3pzN096dEJRMDFtT3pzN096czdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJSRUU3UVVGSFFUczdRVUZEUVR0QlFVTkJPMEZCUVVFN08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZNUVR0QlFVOUJPMEZCUTBFN1FVRkRRVHRCUVdaQk96czdPenRCUVZoQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNkQ1FUczdPenRCUVVOQk96czdPenM3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVaQk8wRkJSRUU3UVVGTlFUczdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVsQk8wRkJRMEU3UVVGRFFUdEJRVVpCTzBGQlNVRTdRVUZEUVR0QlFVVkJPMEZCWkVFN1FVRm5Ra0U3UVVGRFFUdEJRVU5CTzBGQk0wSkJPenM3T3p0QlFURkNRVHRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTFWQk96czdPMEZCUTBFN096czdPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZHUVR0QlFVUkJPenM3T3p0QlFXSkJPMEZCUVVFN096czdPenM3T3pzN096czdPenRCUTBGQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRkRUpCTzBGQlEwRTdPMEZEUkVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEY0VKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHM3UVVORVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyNUNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMGhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUXpWRVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5JUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExQkJPMEZCUTBFN1FVRkRRVHM3UVVOR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBwQk8wRkJRMEU3UVVGRFFUczdRVU5HUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGFFTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyWkJPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRhRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCT3p0QlEwRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVUVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOTVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTktRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFdFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnWlNoMExHNHNjaWw3Wm5WdVkzUnBiMjRnY3lodkxIVXBlMmxtS0NGdVcyOWRLWHRwWmlnaGRGdHZYU2w3ZG1GeUlHRTlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRwWmlnaGRTWW1ZU2x5WlhSMWNtNGdZU2h2TENFd0tUdHBaaWhwS1hKbGRIVnliaUJwS0c4c0lUQXBPM1poY2lCbVBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmJ5dGNJaWRjSWlrN2RHaHliM2NnWmk1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdaOWRtRnlJR3c5Ymx0dlhUMTdaWGh3YjNKMGN6cDdmWDA3ZEZ0dlhWc3dYUzVqWVd4c0tHd3VaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaGxLWHQyWVhJZ2JqMTBXMjlkV3pGZFcyVmRPM0psZEhWeWJpQnpLRzQvYmpwbEtYMHNiQ3hzTG1WNGNHOXlkSE1zWlN4MExHNHNjaWw5Y21WMGRYSnVJRzViYjEwdVpYaHdiM0owYzMxMllYSWdhVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJadmNpaDJZWElnYnowd08yODhjaTVzWlc1bmRHZzdieXNyS1hNb2NsdHZYU2s3Y21WMGRYSnVJSE45S1NJc0ltbHRjRzl5ZENCV2RXVWdabkp2YlNBbmRuVmxKenRjY2x4dWFXMXdiM0owSUVGd2NDQm1jbTl0SUNjdUwybHVaR1Y0TG5aMVpTYzdYSEpjYmx4eVhHNXVaWGNnVm5WbEtIdGNjbHh1SUNBZ0lHVnNPaUFuSTJGd2NDY3NYSEpjYmlBZ0lDQnlaVzVrWlhJNklDaG9LU0E5UGlCb0tFRndjQ2xjY2x4dWZTazdYSEpjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnSUNBOFptVjZMWEJoWjJVK1hHNGdJQ0FnSUNBZ0lEeG1aWG90YW5WdFltOTBjbTl1UGp3dlptVjZMV3AxYldKdmRISnZiajVjYmlBZ0lDQWdJQ0FnUEdabGVpMW1aWHBrWlhOalBqd3ZabVY2TFdabGVtUmxjMk0rWEc0Z0lDQWdQQzltWlhvdGNHRm5aVDVjYmp3dmRHVnRjR3hoZEdVK1hHNDhjMk55YVhCMFBseHVhVzF3YjNKMElHWmxlbEJoWjJVZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmNHRm5aUzUyZFdVblhHNXBiWEJ2Y25RZ1ptVjZTblZ0WW05MGNtOXVJR1p5YjIwZ0p5NHZiVzlrZFd4bEwycDFiV0p2ZEhKdmJpOXBibVJsZUM1MmRXVW5YRzVwYlhCdmNuUWdabVY2Um1WNlpHVnpZeUJtY205dElDY3VMMjF2WkhWc1pTOW1aWHBrWlhOakwybHVaR1Y0TG5aMVpTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHTnZiWEJ2Ym1WdWRITTZJSHRjYmlBZ0lDQWdJQ0FnWm1WNlVHRm5aU3hjYmlBZ0lDQWdJQ0FnWm1WNlNuVnRZbTkwY205dUxGeHVJQ0FnSUNBZ0lDQm1aWHBHWlhwa1pYTmpYRzRnSUNBZ2ZWeHVmVnh1UEM5elkzSnBjSFErWEc0aUxDSThkR1Z0Y0d4aGRHVStYRzRnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbU52Ym5SaGFXNWxjaUJtWlhwa1pYTmpYQ0krWEc0Z0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnliM2RjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKamIyd3RiV1F0TVRKY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThhRE0rZTN0bVpYcGtaWE5qZlgwOEwyZ3pQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbVpYb3RZbWxuTFd4dloyOWNJajQ4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQR2h5UGx4dUlDQWdJRHd2WkdsMlBseHVQQzkwWlcxd2JHRjBaVDVjYmp4elkzSnBjSFErWEc1cGJYQnZjblFnVTJWeWRtbGpaU0JtY205dElDY3VMM05sY25acFkyVW5YRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHRjBZU2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabVY2WkdWell6b2dYQ0pjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCdFpYUm9iMlJ6T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtWlhwa1pYTmpTVzVwZERvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUY5MmJTQTlJSFJvYVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCVFpYSjJhV05sTG5KbGJtUmxja1JoZEdFb0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjkyYlM1bVpYcGtaWE5qSUQwZ1pHRjBZVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOeVpXRjBaV1FvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtWmxlbVJsYzJOSmJtbDBLQ2xjYmlBZ0lDQWdJQ0FnZlZ4dWZWeHVQQzl6WTNKcGNIUStYRzRpTENKcGJYQnZjblFnUVhCcFJHRjBZU0JtY205dElDZHdkV0pzYVdNdlpHVnRieTFrWVhSaEoxeHVYRzVwYlhCdmNuUWdVU0JtY205dElDZHhKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdjbVZ1WkdWeVJHRjBZU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZFdVVISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0VGd2FVUmhkR0V1YVc1a1pYZ3VabVY2WkdWell5bGNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQjlYRzU5WEc0aUxDSThkR1Z0Y0d4aGRHVStYRzRnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbXAxYldKdmRISnZibHdpUGx4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lZMjl1ZEdGcGJtVnlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThhREVnZGkxMFpYaDBQVndpYW5WdFltOTBjbTl1UkdGMFlTNTBhWFJzWlZ3aVBqd3ZhREUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjQ0IyTFhSbGVIUTlYQ0pxZFcxaWIzUnliMjVFWVhSaExtTnZiblJsYm5SY0lqNDhMM0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCamJHRnpjejFjSW1KMGJpQmlkRzR0Y0hKcGJXRnllU0JpZEc0dGJHZGNJaUE2YUhKbFpqMWNJbXAxYldKdmRISnZia1JoZEdFdVluVjBkRzl1TG1oeVpXWmNJaUJ5YjJ4bFBWd2lZblYwZEc5dVhDSWdkaTFvZEcxc1BWd2lhblZ0WW05MGNtOXVSR0YwWVM1aWRYUjBiMjR1Ym1GdFpWd2lQand2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2JpQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQQzlrYVhZK1hHNDhMM1JsYlhCc1lYUmxQbHh1UEhOamNtbHdkRDVjYm1sdGNHOXlkQ0JUWlhKMmFXTmxJR1p5YjIwZ0p5NHZjMlZ5ZG1salpTZGNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1lYUmhLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnFkVzFpYjNSeWIyNUVZWFJoT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJwZEd4bE9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWlc1ME9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlkWFIwYjI0NklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U2SUdCZ0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FISmxaam9nWENKY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCdFpYUm9iMlJ6T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JxZFcxaWIzUnliMjQ2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JmZG0wZ1BTQjBhR2x6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVTJWeWRtbGpaUzV5Wlc1a1pYSkVZWFJoS0NrdWRHaGxiaWdvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZkbTB1YW5WdFltOTBjbTl1SUQwZ1QySnFaV04wTG1GemMybG5iaWhmZG0wdWFuVnRZbTkwY205dVJHRjBZU3dnWkdGMFlTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqY21WaGRHVmtLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cWRXMWliM1J5YjI0b0tWeHVJQ0FnSUNBZ0lDQjlYRzU5WEc0OEwzTmpjbWx3ZEQ1Y2JpSXNJbWx0Y0c5eWRDQkJjR2xFWVhSaElHWnliMjBnSjNCMVlteHBZeTlrWlcxdkxXUmhkR0VuWEc1Y2JtbHRjRzl5ZENCUklHWnliMjBnSjNFblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCeVpXNWtaWEpFWVhSaEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdVUzVRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9RWEJwUkdGMFlTNXBibVJsZUM1cWRXMWliM1J5YjI0cFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ2ZWeHVmVnh1SWl3aWJHVjBJR1p5WVcxbGN5QTlJRnQ3WEc0Z0lDQWdkR2wwYkdVNklGd2lUbTlrWldwelhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1cDZFNWJ1NjVaeW9JRTV2WkdWS1V5RGxuN3JrdW80Z1EyaHliMjFsSUZZNElPVzhsZWFUanVlYWhDQktZWFpoVTJOeWFYQjBJT2kva09paGpPZU9yK1dpZysrOGpPV0Z0dVM2aStTN3R1bXBzZVdLcU9tZG51bVl1K1dobnVlYWhPZUp1ZWFBcCsrOGpPYWVnZVdGdHVXL3ErbUFuK2VhaE9lOGx1aXZrZVdKamVlcnIrV1FoT2VuamVpMWhPYTZrRndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4WkdsMklHbGtQVndpYUc5dFpTMXBiblJ5YjF3aVBseHVYRzRnSUNBZ0lDQWdJRHh3UGs1dlpHVXVhblBDcmlCcGN5QmhJRXBoZG1GVFkzSnBjSFFnY25WdWRHbHRaU0JpZFdsc2RDQnZiaUE4WVNCb2NtVm1QVndpYUhSMGNITTZMeTlrWlhabGJHOXdaWEp6TG1kdmIyZHNaUzVqYjIwdmRqZ3ZYQ0krUTJoeWIyMWxKM01nVmpnZ1NtRjJZVk5qY21sd2RDQmxibWRwYm1VOEwyRStMbHh1VG05a1pTNXFjeUIxYzJWeklHRnVJR1YyWlc1MExXUnlhWFpsYml3Z2JtOXVMV0pzYjJOcmFXNW5JRWt2VHlCdGIyUmxiQ0IwYUdGMElHMWhhMlZ6SUdsMFhHNXNhV2RvZEhkbGFXZG9kQ0JoYm1RZ1pXWm1hV05wWlc1MExpQk9iMlJsTG1wekp5QndZV05yWVdkbElHVmpiM041YzNSbGJTd2dQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZkM2QzTG01d2JXcHpMbU52YlM5Y0lqNXVjRzA4TDJFK0xDQnBjeUIwYUdVZ2JHRnlaMlZ6ZENCbFkyOXplWE4wWlcwZ2IyWWdiM0JsYmx4dWMyOTFjbU5sSUd4cFluSmhjbWxsY3lCcGJpQjBhR1VnZDI5eWJHUXVQQzl3UGx4dVhHNWNibHh1SUNBZ0lDQWdJQ0E4YURJZ2FXUTlYQ0pvYjIxbExXUnZkMjVzYjJGa2FHVmhaRndpSUdSaGRHRXRaR3d0Ykc5allXdzlYQ0pFYjNkdWJHOWhaQ0JtYjNKY0lqNUViM2R1Ykc5aFpDQm1iM0lnYldGalQxTWdLSGcyTkNrOEwyZ3lQbHh1WEc0Z0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSm9iMjFsTFdSdmQyNXNiMkZrWW14dlkydGNJajVjYmx4dUlDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZaR2x6ZEM5Mk5pNHhNQzR3TDI1dlpHVXRkall1TVRBdU1DNXdhMmRjSWlCamJHRnpjejFjSW1odmJXVXRaRzkzYm14dllXUmlkWFIwYjI1Y0lpQjBhWFJzWlQxY0lrUnZkMjVzYjJGa0lIWTJMakV3TGpBZ1RGUlRYQ0lnWkdGMFlTMTJaWEp6YVc5dVBWd2lkall1TVRBdU1Gd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RqWXVNVEF1TUNCTVZGTmNiaUFnSUNBZ0lDQWdJQ0FnSUR4emJXRnNiRDVTWldOdmJXMWxibVJsWkNCR2IzSWdUVzl6ZENCVmMyVnljend2YzIxaGJHdytYRzRnSUNBZ0lDQWdJQ0FnUEM5aFBseHVYRzRnSUNBZ0lDQWdJQ0FnUEhWc0lHTnNZWE56UFZ3aWJHbHpkQzFrYVhacFpHVnlMWEJwY0dVZ2FHOXRaUzF6WldOdmJtUmhjbmt0YkdsdWEzTmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZibTlrWldwekxtOXlaeTlsYmk5a2IzZHViRzloWkM5Y0lqNVBkR2hsY2lCRWIzZHViRzloWkhNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMjV2WkdWcWN5OXViMlJsTDJKc2IySXZiV0Z6ZEdWeUwyUnZZeTlqYUdGdVoyVnNiMmR6TDBOSVFVNUhSVXhQUjE5V05pNXRaQ00yTGpFd0xqQmNJajVEYUdGdVoyVnNiMmM4TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5dWIyUmxhbk11YjNKbkwyUnBjM1F2YkdGMFpYTjBMWFkyTG5ndlpHOWpjeTloY0drdlhDSStRVkJKSUVSdlkzTThMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZkV3crWEc1Y2JpQWdJQ0FnSUNBZ1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpYUc5dFpTMWtiM2R1Ykc5aFpHSnNiMk5yWENJK1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzkyTnk0M0xqRXZibTlrWlMxMk55NDNMakV1Y0d0blhDSWdZMnhoYzNNOVhDSm9iMjFsTFdSdmQyNXNiMkZrWW5WMGRHOXVYQ0lnZEdsMGJHVTlYQ0pFYjNkdWJHOWhaQ0IyTnk0M0xqRWdRM1Z5Y21WdWRGd2lJR1JoZEdFdGRtVnljMmx2YmoxY0luWTNMamN1TVZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMk55NDNMakVnUTNWeWNtVnVkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThjMjFoYkd3K1RHRjBaWE4wSUVabFlYUjFjbVZ6UEM5emJXRnNiRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZZVDVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpYkdsemRDMWthWFpwWkdWeUxYQnBjR1VnYUc5dFpTMXpaV052Ym1SaGNua3RiR2x1YTNOY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHeHBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2Wlc0dlpHOTNibXh2WVdRdlkzVnljbVZ1ZEM5Y0lqNVBkR2hsY2lCRWIzZHViRzloWkhNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyNXZaR1ZxY3k5dWIyUmxMMkpzYjJJdmJXRnpkR1Z5TDJSdll5OWphR0Z1WjJWc2IyZHpMME5JUVU1SFJVeFBSMTlXTnk1dFpDTTNMamN1TVZ3aVBrTm9ZVzVuWld4dlp6d3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZaR2x6ZEM5c1lYUmxjM1F0ZGpjdWVDOWtiMk56TDJGd2FTOWNJajVCVUVrZ1JHOWpjend2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmRXdytYRzVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEhBK1hHNGdJQ0FnSUNBZ0lDQWdUM0lnYUdGMlpTQmhJR3h2YjJzZ1lYUWdkR2hsSUR4aElHaHlaV1k5WENKb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmJtOWtaV3B6TDB4VVV5TnNkSE10YzJOb1pXUjFiR1ZjSWo1TVZGTWdjMk5vWldSMWJHVXVQQzloUGx4dUlDQWdJQ0FnSUNBOEwzQStYRzRnSUNBZ0lDQThMMlJwZGo1Z0xGeHVJQ0FnSUhacFpYZE5iM0psT2lCN1hHNGdJQ0FnSUNBZ0lIUmxlSFE2SUZ3aTVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUdoeVpXWTZJRndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrNVFUVndpTEZ4dUlDQWdJR1JsYzJNNklGd2lSa1ZhSU9TOXYrZVVxQ0JPVUUwZzVvNmw1WVdsNVlXbzU1Q0Q1cHlBNWFTbjU1cUU1YnlBNXJxUTU1U2Y1b0NCNTdPNzU3dWY3N3lNNVlXMzVhU0g1cGVnNlptUTU1cUU1WXFmNklPOTVvbXA1YkdWNklPOTVZcWI3N3lNNVkrdjVwVzA1WkNJNVp1OTZabUY1WW1ONXJLLzU1cUU1YnlBNXJxUTVxR0c1cDYyNzd5TTZZQ0M1YnFVNTU2czVvR3Y1TGlINVkrWTU1cUU1b3FBNXB5djVwdTA1cHUvWENJc1hHNGdJQ0FnWTI5dWRHVnVkRG9nWUR4b01TQmpiR0Z6Y3oxY0luUnBkR3hsSUdWdExXUmxabUYxYkhRZ2RIbHdaUzF1WlhWMGNtRnNMVEV4WENJK1hHNGdJQ0FnSUNBZ0lDQWdRblZwYkdRZ1lXMWhlbWx1WnlCMGFHbHVaM05jYmlBZ0lDQWdJQ0FnUEM5b01UNWNiaUFnSUNBZ0lDQWdQSEFnWTJ4aGMzTTlYQ0pvTlNCbGJTMWtaV1poZFd4MElIUjVjR1V0Ym1WMWRISmhiQzB4TVNCd1luaHNYQ0krWEc0Z0lDQWdJQ0FnSUNBZ2JuQnRJR2x6SUhSb1pTQndZV05yWVdkbElHMWhibUZuWlhJZ1ptOXlJRXBoZG1GVFkzSnBjSFF1SUVacGJtUXNJSE5vWVhKbExDQmhibVFnY21WMWMyVmNiaUFnSUNBZ0lDQWdJQ0J3WVdOcllXZGxjeUJ2WmlCamIyUmxJR1p5YjIwZ2FIVnVaSEpsWkhNZ2IyWWdkR2h2ZFhOaGJtUnpJRzltSUdSbGRtVnNiM0JsY25NZzRvQ1VJR0Z1WkZ4dUlDQWdJQ0FnSUNBZ0lHRnpjMlZ0WW14bElIUm9aVzBnYVc0Z2NHOTNaWEptZFd3Z2JtVjNJSGRoZVhNdVhHNGdJQ0FnSUNBZ0lEd3ZjRDVjYmlBZ0lDQWdJQ0FnUEdFZ2FXUTlYQ0p0WVdsdUxXTjBZVndpSUdoeVpXWTlYQ0lqY0dGdVpTMW9iMjFsY0dGblpTMXdjbWxqYVc1blhDSWdZMnhoYzNNOVhDSmlkRzRnWW5SdUxXaHBaMmhzYVdkb2RDMHpJRzF5YkZ3aUlHUmhkR0V0WlhabGJuUXRibUZ0WlQxY0ltaHZiV1Z3WVdkbExXaGxjbTh0WTNSaFhDSStSMlYwSUhOMFlYSjBaV1E4TDJFK1lDeGNiaUFnSUNCMmFXVjNUVzl5WlRvZ2UxeHVJQ0FnSUNBZ0lDQjBaWGgwT2lCY0l1YWJ0T1drbXVTL29lYUJyMXdpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSW1oMGRIQnpPaTh2ZDNkM0xtNXdiV3B6TG1OdmJTOWNJbHh1SUNBZ0lIMWNibjBzSUh0Y2JpQWdJQ0IwYVhSc1pUb2dYQ0pIZFd4d1hDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1cFcwNVpDSVIzVnNjT2VhaE9TOGwrV2ttdWFQa3VTN3R1KzhqT2U4bHVpdmtlT0FnZVM4bU9XTWx1V1NqT2U3aE9lN2grV0pqZWVycitXa2plYWRndWVhaE9hb29lV2RsK1dQaXVtZG1lYUFnZWkxaE9hNmtPKzhqT1dXbmVlZGdPV1ByK1M1a09XRXYrT0FnZVdUdk9lZGdPV3dqK2Fic3VXRXYrKzhqT2lIcXVXS3FPV01sdVd1ak9hSWtPV0pqZWVycitXa3ArbUhqK21IamVXa2plVzNwZVM5bkZ3aUxGeHVJQ0FnSUdOdmJuUmxiblE2SUdBOGFERWdZMnhoYzNNOVhDSm9aV0ZrYVc1bklIUmxlSFF0WTJWdWRHVnlYQ0krUVhWMGIyMWhkR1VnWVc1a0lHVnVhR0Z1WTJVZ2VXOTFjaUIzYjNKclpteHZkend2YURFK1BHZ3lJR05zWVhOelBWd2ljR0Z5WVdkeVlYQm9YQ0krWEc0Z0lDQWdJQ0FnSUNBZ1ozVnNjQ0JwY3lCaElIUnZiMnhyYVhRZ1ptOXlJR0YxZEc5dFlYUnBibWNnY0dGcGJtWjFiQ0J2Y2lCMGFXMWxMV052Ym5OMWJXbHVaeUIwWVhOcmN5QnBiaUI1YjNWeUlHUmxkbVZzYjNCdFpXNTBJSGR2Y210bWJHOTNMQ0J6YnlCNWIzVWdZMkZ1SUhOMGIzQWdiV1Z6YzJsdVp5QmhjbTkxYm1RZ1lXNWtJR0oxYVd4a0lITnZiV1YwYUdsdVp5NWNiaUFnSUNBZ0lDQWdQQzlvTWo0OFpHbDJJR05zWVhOelBWd2lZM1JoYzF3aVBseHVJQ0FnSUNBZ0lDQWdJRHhoSUdOc1lYTnpQVndpWTNSaGN5MWlkWFIwYjI1Y0lpQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZDFiSEJxY3k5bmRXeHdMMkpzYjJJdmJXRnpkR1Z5TDJSdlkzTXZaMlYwZEdsdVp5MXpkR0Z5ZEdWa0xtMWtYQ0krUjJWMElGTjBZWEowWldROEwyRStYRzRnSUNBZ0lDQWdJRHd2WkdsMlBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndPaTh2WjNWc2NHcHpMbU52YlM5Y0lseHVJQ0FnSUgxY2JuMHNJSHRjYmlBZ0lDQjBhWFJzWlRvZ1hDSkNjbTkzYzJWeWFXWjVYQ0lzWEc0Z0lDQWdaR1Z6WXpvZ1hDSkdSVm9nNUwyLzU1U29JRUp5YjNkelpYSnBabmtnNXFpaDVaMlg1WXlXNTd1RTU3dUg1WktNNTY2aDU1Q0c2YUc1NTV1dTU1cUU1WkNFNUxpcTVZcWY2SU85NXFpaDVaMlg3N3lNNXA2QjVhU241bytRNVkySDZhRzU1NXV1NTVxRTVZK3Y1N3UwNW9xazVvQ240NENCNVlxZjZJTzk1YVNONTVTbzVvQ243N3lNNWJtMjVhNmU1NDZ3NTZldjVweW81YnlQNTVxRTVwQ3Q1YnU2NTcyUjZhRzFYQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHh6WldOMGFXOXVJR2xrUFZ3aWRHOXdMV2h2YldVdGMyVmpkR2x2Ymx3aUlHTnNZWE56UFZ3aWRHOXdMWE5sWTNScGIyNGdZMjlzYjNJdFlWd2lQbHh1SUNBZ0lDQWdQR1JwZGlCcFpEMWNJblJ2Y0Mxb2IyMWxMV2x0WVdkbFhDSStQQzlrYVhZK1hHNWNiaUFnSUNBZ0lDQThhRE1nYVdROVhDSjBiM0F0YzNWaWRHbDBiR1ZjSWlCamJHRnpjejFjSW14aGNtZGxMV1p2Ym5SY0lqNUNjbTkzYzJWeWFXWjVJR3hsZEhNZ2VXOTFJSEpsY1hWcGNtVW9QSE53WVc0Z1kyeGhjM005WENKamIyeHZjaTFrWENJK0oyMXZaSFZzWlhNblBDOXpjR0Z1UGlrZ2FXNGdkR2hsSUdKeWIzZHpaWElnWW5rZ1luVnVaR3hwYm1jZ2RYQWdZV3hzSUc5bUlIbHZkWElnWkdWd1pXNWtaVzVqYVdWekxqd3ZhRE0rWEc0Z0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDNOMVluTjBZV05yTDI1dlpHVXRZbkp2ZDNObGNtbG1lU04xYzJGblpWd2lQbHh1SUNBZ0lDQWdJQ0E4WW5WMGRHOXVJR05zWVhOelBWd2lkRzl3TFdKMWRIUnZibHdpSUdsa1BWd2lkRzl3TFdKMWRIUnZiakpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQkViMk4xYldWdWRHRjBhVzl1WEc0Z0lDQWdJQ0FnSUR3dlluVjBkRzl1UGx4dUlDQWdJQ0FnUEM5aFBseHVJQ0FnSUR3dmMyVmpkR2x2Ymo1Z0xGeHVJQ0FnSUhacFpYZE5iM0psT2lCN1hHNGdJQ0FnSUNBZ0lIUmxlSFE2SUZ3aTVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUdoeVpXWTZJRndpYUhSMGNEb3ZMMkp5YjNkelpYSnBabmt1YjNKbkwxd2lYRzRnSUNBZ2ZWeHVmU3dnZTF4dUlDQWdJSFJwZEd4bE9pQmNJa0p2ZDJWeVhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1WSt2NllXTjU3MnU1TDIvNTVTb0lFSnZkMlZ5SU9hUW5PZTBvdU9BZ2VXdWllaWpoZU9BZ2VhYnRPYVdzT1dTak9XTnVPaTl2ZVdtZ2twaGRtRlRZM0pwY0hUamdJRkRVMVBrdVl2bnNidm5tb1RudlpIbnU1em90WVRtdXBEdnZJenBnSnJvdjRmb2g2cmxpcWpsakpibXM2amxoYVhtaW9EbW5LL2xyb3pudm83b3A2UGxoclBscEkzbW5ZTG5tb1Rtb1libW5yYmxqSVhucnFIbmtJYnBsNjdwb3BoY0lpeGNiaUFnSUNCamIyNTBaVzUwT2lCZ1BHUnBkaUJqYkdGemN6MWNJbTFoYVc1Y0lqNWNianh3SUdOc1lYTnpQVndpYkdWaFpGd2lQbGRsWWlCemFYUmxjeUJoY21VZ2JXRmtaU0J2WmlCc2IzUnpJRzltSUhSb2FXNW5jeURpZ0pRZ1puSmhiV1YzYjNKcmN5d2diR2xpY21GeWFXVnpMQ0JoYzNObGRITXNJR0Z1WkNCMWRHbHNhWFJwWlhNdUlFSnZkMlZ5SUcxaGJtRm5aWE1nWVd4c0lIUm9aWE5sSUhSb2FXNW5jeUJtYjNJZ2VXOTFMand2Y0Q1Y2JqeHdQa3RsWlhCcGJtY2dkSEpoWTJzZ2IyWWdZV3hzSUhSb1pYTmxJSEJoWTJ0aFoyVnpJR0Z1WkNCdFlXdHBibWNnYzNWeVpTQjBhR1Y1SUdGeVpTQjFjQ0IwYnlCa1lYUmxJQ2h2Y2lCelpYUWdkRzhnZEdobElITndaV05wWm1saklIWmxjbk5wYjI1eklIbHZkU0J1WldWa0tTQnBjeUIwY21samEza3VJRUp2ZDJWeUlIUnZJSFJvWlNCeVpYTmpkV1VoUEM5d1BseHVQSEErUW05M1pYSWdZMkZ1SUcxaGJtRm5aU0JqYjIxd2IyNWxiblJ6SUhSb1lYUWdZMjl1ZEdGcGJpQklWRTFNTENCRFUxTXNJRXBoZG1GVFkzSnBjSFFzSUdadmJuUnpJRzl5SUdWMlpXNGdhVzFoWjJVZ1ptbHNaWE11SUVKdmQyVnlJR1J2WlhOdTRvQ1pkQ0JqYjI1allYUmxibUYwWlNCdmNpQnRhVzVwWm5rZ1kyOWtaU0J2Y2lCa2J5QmhibmwwYUdsdVp5QmxiSE5sSUMwZ2FYUWdhblZ6ZENCcGJuTjBZV3hzY3lCMGFHVWdjbWxuYUhRZ2RtVnljMmx2Ym5NZ2IyWWdkR2hsSUhCaFkydGhaMlZ6SUhsdmRTQnVaV1ZrSUdGdVpDQjBhR1ZwY2lCa1pYQmxibVJsYm1OcFpYTXVQQzl3UGx4dVBIQStWRzhnUEdFZ2FISmxaajFjSWlOblpYUjBhVzVuTFhOMFlYSjBaV1JjSWo1blpYUWdjM1JoY25SbFpEd3ZZVDRzSUVKdmQyVnlJSGR2Y210eklHSjVJR1psZEdOb2FXNW5JR0Z1WkNCcGJuTjBZV3hzYVc1bklEeGhJR2h5WldZOVhDSXZjMlZoY21Ob1hDSStjR0ZqYTJGblpYTThMMkUrSUdaeWIyMGdZV3hzSUc5MlpYSXNJSFJoYTJsdVp5QmpZWEpsSUc5bUlHaDFiblJwYm1jc0lHWnBibVJwYm1jc0lHUnZkMjVzYjJGa2FXNW5MQ0JoYm1RZ2MyRjJhVzVuSUhSb1pTQnpkSFZtWmlCNWIzWGlnSmx5WlNCc2IyOXJhVzVuSUdadmNpNGdRbTkzWlhJZ2EyVmxjSE1nZEhKaFkyc2diMllnZEdobGMyVWdjR0ZqYTJGblpYTWdhVzRnWVNCdFlXNXBabVZ6ZENCbWFXeGxMQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZZM0psWVhScGJtY3RjR0ZqYTJGblpYTXZJMkp2ZDJWeWFuTnZibHdpUGp4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpNXFjMjl1UEM5amIyUmxQand2WVQ0dUlFaHZkeUI1YjNVZ2RYTmxJRHhoSUdoeVpXWTlYQ0l2YzJWaGNtTm9YQ0krY0dGamEyRm5aWE04TDJFK0lHbHpJSFZ3SUhSdklIbHZkUzRnUW05M1pYSWdjSEp2ZG1sa1pYTWdhRzl2YTNNZ2RHOGdabUZqYVd4cGRHRjBaU0IxYzJsdVp5QndZV05yWVdkbGN5QnBiaUI1YjNWeUlEeGhJR2h5WldZOVhDSXZaRzlqY3k5MGIyOXNjMXdpUG5SdmIyeHpJR0Z1WkNCM2IzSnJabXh2ZDNNOEwyRStMand2Y0Q1Y2JqeHdQa0p2ZDJWeUlHbHpJRzl3ZEdsdGFYcGxaQ0JtYjNJZ2RHaGxJR1p5YjI1MExXVnVaQzRnU1dZZ2JYVnNkR2x3YkdVZ2NHRmphMkZuWlhNZ1pHVndaVzVrSUc5dUlHRWdjR0ZqYTJGblpTQXRJR3BSZFdWeWVTQm1iM0lnWlhoaGJYQnNaU0F0SUVKdmQyVnlJSGRwYkd3Z1pHOTNibXh2WVdRZ2FsRjFaWEo1SUdwMWMzUWdiMjVqWlM0Z1ZHaHBjeUJwY3lCcmJtOTNiaUJoY3lCaElHWnNZWFFnWkdWd1pXNWtaVzVqZVNCbmNtRndhQ0JoYm1RZ2FYUWdhR1ZzY0hNZ2NtVmtkV05sSUhCaFoyVWdiRzloWkM0OEwzQStYRzQ4YURJZ2FXUTlYQ0pwYm5OMFlXeHNMV0p2ZDJWeVhDSStQR0VnYUhKbFpqMWNJaU5wYm5OMFlXeHNMV0p2ZDJWeVhDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrU1c1emRHRnNiQ0JDYjNkbGNqd3ZhREkrWEc0OGNENUNiM2RsY2lCcGN5QmhJR052YlcxaGJtUWdiR2x1WlNCMWRHbHNhWFI1TGlCSmJuTjBZV3hzSUdsMElIZHBkR2dnYm5CdExqd3ZjRDVjYmp4bWFXZDFjbVVnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJjSWo0OGNISmxQanhqYjJSbElHTnNZWE56UFZ3aWJHRnVaM1ZoWjJVdFltRnphRndpSUdSaGRHRXRiR0Z1WnoxY0ltSmhjMmhjSWo0OGMzQmhiaUJqYkdGemN6MWNJbWR3WENJK0pDQThMM053WVc0K2JuQnRJR2x1YzNSaGJHd2dMV2NnWW05M1pYSThMMk52WkdVK1BDOXdjbVUrUEM5bWFXZDFjbVUrWEc0OGNENUNiM2RsY2lCeVpYRjFhWEpsY3lBOFlTQm9jbVZtUFZ3aWFIUjBjRG92TDI1dlpHVnFjeTV2Y21jdlhDSStibTlrWlN3Z2JuQnRQQzloUGlCaGJtUWdQR0VnYUhKbFpqMWNJbWgwZEhBNkx5OW5hWFF0YzJOdExtOXlaMXdpUG1kcGREd3ZZVDR1UEM5d1BseHVQSEErVEdGMFpYTjBJSEpsYkdWaGMyVTZJRHhoSUdoeVpXWTlYQ0pjSWo0OGFXMW5JSE55WXoxY0ltaDBkSEJ6T2k4dmFXMW5Mbk5vYVdWc1pITXVhVzh2Ym5CdEwzWXZZbTkzWlhJdWMzWm5QMjFoZUVGblpUMHlOVGt5TURBd1hDSWdZV3gwUFZ3aVltOTNaWElnZG1WeWMybHZibHdpUGp3dllUNDhMM0ErWEc0OGNENUdiM0lnZEhKdmRXSnNaWE5vYjI5MGFXNW5JR2x1YzNSaGJHeGhkR2x2YmlCdmJpQmthV1ptWlhKbGJuUWdjR3hoZEdadmNtMXpMQ0J5WldGa0lIUm9aU0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJKdmQyVnlMMkp2ZDJWeUwzZHBhMmt2VkhKdmRXSnNaWE5vYjI5MGFXNW5YQ0krZEhKdmRXSnNaWE5vYjI5MGFXNW5QQzloUGlCM2FXdHBJSEJoWjJVdVBDOXdQbHh1UEdneUlHbGtQVndpWjJWMGRHbHVaeTF6ZEdGeWRHVmtYQ0krUEdFZ2FISmxaajFjSWlOblpYUjBhVzVuTFhOMFlYSjBaV1JjSWlCamJHRnpjejFjSW1obFlXUmxjaTFoYm1Ob2IzSmNJajdDcHp3dllUNUhaWFIwYVc1bklITjBZWEowWldROEwyZ3lQbHh1UEdneklHbGtQVndpYVc1emRHRnNiQzF3WVdOcllXZGxjMXdpUGp4aElHaHlaV1k5WENJamFXNXpkR0ZzYkMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQa2x1YzNSaGJHd2djR0ZqYTJGblpYTThMMmd6UGx4dVBIQStTVzV6ZEdGc2JDQndZV05yWVdkbGN5QjNhWFJvSUR4aElHaHlaV1k5WENJdlpHOWpjeTloY0dramFXNXpkR0ZzYkZ3aVBqeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaUJwYm5OMFlXeHNQQzlqYjJSbFBqd3ZZVDR1SUVKdmQyVnlJR2x1YzNSaGJHeHpJSEJoWTJ0aFoyVnpJSFJ2SUR4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNsOWpiMjF3YjI1bGJuUnpMend2WTI5a1pUNHVQQzl3UGx4dVBHWnBaM1Z5WlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEZ3aVBqeHdjbVUrUEdOdlpHVWdZMnhoYzNNOVhDSnNZVzVuZFdGblpTMWlZWE5vWENJZ1pHRjBZUzFzWVc1blBWd2lZbUZ6YUZ3aVBqeHpjR0Z1SUdOc1lYTnpQVndpWjNCY0lqNGtJRHd2YzNCaGJqNWliM2RsY2lCcGJuTjBZV3hzSUNac2REdHdZV05yWVdkbEptZDBPend2WTI5a1pUNDhMM0J5WlQ0OEwyWnBaM1Z5WlQ1Y2JqeHdQa0VnY0dGamEyRm5aU0JqWVc0Z1ltVWdZU0JIYVhSSWRXSWdjMmh2Y25Sb1lXNWtMQ0JoSUVkcGRDQmxibVJ3YjJsdWRDd2dZU0JWVWt3c0lHRnVaQ0J0YjNKbExpQlNaV0ZrSUcxdmNtVWdZV0p2ZFhRZ1BHRWdhSEpsWmoxY0lpOWtiMk56TDJGd2FTOGphVzV6ZEdGc2JGd2lQanhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2lCcGJuTjBZV3hzUEM5amIyUmxQand2WVQ0dVBDOXdQbHh1UEdacFozVnlaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kRndpUGp4d2NtVStQR052WkdVZ1kyeGhjM005WENKc1lXNW5kV0ZuWlMxaVlYTm9YQ0lnWkdGMFlTMXNZVzVuUFZ3aVltRnphRndpUGp4emNHRnVJR05zWVhOelBWd2lZMXdpUGlNZ2FXNXpkR0ZzYkhNZ2RHaGxJSEJ5YjJwbFkzUWdaR1Z3Wlc1a1pXNWphV1Z6SUd4cGMzUmxaQ0JwYmlCaWIzZGxjaTVxYzI5dVBDOXpjR0Z1UGx4dVBITndZVzRnWTJ4aGMzTTlYQ0puY0Z3aVBpUWdQQzl6Y0dGdVBtSnZkMlZ5SUdsdWMzUmhiR3hjYmp4emNHRnVJR05zWVhOelBWd2lZMXdpUGlNZ2NtVm5hWE4wWlhKbFpDQndZV05yWVdkbFBDOXpjR0Z1UGx4dVBITndZVzRnWTJ4aGMzTTlYQ0puY0Z3aVBpUWdQQzl6Y0dGdVBtSnZkMlZ5SUdsdWMzUmhiR3dnYW5GMVpYSjVYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltTmNJajRqSUVkcGRFaDFZaUJ6YUc5eWRHaGhibVE4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQmtaWE5oYm1SeWJ5OXRZWE52Ym5KNVhHNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJRWRwZENCbGJtUndiMmx1ZER3dmMzQmhiajVjYmp4emNHRnVJR05zWVhOelBWd2laM0JjSWo0a0lEd3ZjM0JoYmo1aWIzZGxjaUJwYm5OMFlXeHNJR2RwZERvdkwyZHBkR2gxWWk1amIyMHZkWE5sY2k5d1lXTnJZV2RsTG1kcGRGeHVQSE53WVc0Z1kyeGhjM005WENKalhDSStJeUJWVWt3OEwzTndZVzQrWEc0OGMzQmhiaUJqYkdGemN6MWNJbWR3WENJK0pDQThMM053WVc0K1ltOTNaWElnYVc1emRHRnNiQ0JvZEhSd09pOHZaWGhoYlhCc1pTNWpiMjB2YzJOeWFYQjBMbXB6UEM5amIyUmxQand2Y0hKbFBqd3ZabWxuZFhKbFBseHVQR2d6SUdsa1BWd2ljMlZoY21Ob0xYQmhZMnRoWjJWelhDSStQR0VnYUhKbFpqMWNJaU56WldGeVkyZ3RjR0ZqYTJGblpYTmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1VFpXRnlZMmdnY0dGamEyRm5aWE04TDJnelBseHVQSEErUEdFZ2FISmxaajFjSWk5elpXRnlZMmhjSWo1VFpXRnlZMmdnUW05M1pYSWdjR0ZqYTJGblpYTThMMkUrSUdGdVpDQm1hVzVrSUhSb1pTQnlaV2RwYzNSbGNtVmtJSEJoWTJ0aFoyVWdibUZ0WlhNZ1ptOXlJSGx2ZFhJZ1ptRjJiM0pwZEdVZ2NISnZhbVZqZEhNdVBDOXdQbHh1UEdneklHbGtQVndpYzJGMlpTMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqYzJGMlpTMXdZV05yWVdkbGMxd2lJR05zWVhOelBWd2lhR1ZoWkdWeUxXRnVZMmh2Y2x3aVBzS25QQzloUGxOaGRtVWdjR0ZqYTJGblpYTThMMmd6UGx4dVBIQStRM0psWVhSbElHRWdQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtSnZkMlZ5TG1wemIyNDhMMk52WkdVK0lHWnBiR1VnWm05eUlIbHZkWElnY0dGamEyRm5aU0IzYVhSb0lEeGhJR2h5WldZOVhDSXZaRzlqY3k5amNtVmhkR2x1Wnkxd1lXTnJZV2RsY3k4alltOTNaWEpxYzI5dVhDSStQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtSnZkMlZ5SUdsdWFYUThMMk52WkdVK1BDOWhQaTQ4TDNBK1hHNDhjRDVVYUdWdUlITmhkbVVnYm1WM0lHUmxjR1Z1WkdWdVkybGxjeUIwYnlCNWIzVnlJRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2k1cWMyOXVQQzlqYjJSbFBpQjNhWFJvSUR4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpQnBibk4wWVd4c0lGQkJRMHRCUjBVZ0xTMXpZWFpsUEM5amIyUmxQand2Y0Q1Y2JqeG9NeUJwWkQxY0luVnpaUzF3WVdOcllXZGxjMXdpUGp4aElHaHlaV1k5WENJamRYTmxMWEJoWTJ0aFoyVnpYQ0lnWTJ4aGMzTTlYQ0pvWldGa1pYSXRZVzVqYUc5eVhDSSt3cWM4TDJFK1ZYTmxJSEJoWTJ0aFoyVnpQQzlvTXo1Y2JqeHdQa2h2ZHlCNWIzVWdkWE5sSUhCaFkydGhaMlZ6SUdseklIVndJSFJ2SUhsdmRTNGdWMlVnY21WamIyMXRaVzVrSUhsdmRTQjFjMlVnUW05M1pYSWdkRzluWlhSb1pYSWdkMmwwYUNBOFlTQm9jbVZtUFZ3aUwyUnZZM012ZEc5dmJITXZYQ0krUjNKMWJuUXNJRkpsY1hWcGNtVktVeXdnV1dWdmJXRnVMQ0JoYm1RZ2JHOTBjeUJ2WmlCdmRHaGxjaUIwYjI5c2N6d3ZZVDRnYjNJZ1luVnBiR1FnZVc5MWNpQnZkMjRnZDI5eWEyWnNiM2NnZDJsMGFDQThZU0JvY21WbVBWd2lMMlJ2WTNNdllYQnBMMXdpUG5Sb1pTQkJVRWs4TDJFK0xpQlpiM1VnWTJGdUlHRnNjMjhnZFhObElIUm9aU0JwYm5OMFlXeHNaV1FnY0dGamEyRm5aWE1nWkdseVpXTjBiSGtzSUd4cGEyVWdkR2hwY3l3Z2FXNGdkR2hsSUdOaGMyVWdiMllnUEdOdlpHVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmxjaTF5YjNWblpWd2lQbXB4ZFdWeWVUd3ZZMjlrWlQ0NlBDOXdQbHh1UEdacFozVnlaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kRndpUGp4d2NtVStQR052WkdVZ1kyeGhjM005WENKc1lXNW5kV0ZuWlMxb2RHMXNYQ0lnWkdGMFlTMXNZVzVuUFZ3aWFIUnRiRndpUGp4emNHRnVJR05zWVhOelBWd2liblJjSWo0bWJIUTdjMk55YVhCMElEd3ZjM0JoYmo0OGMzQmhiaUJqYkdGemN6MWNJbTVoWENJK2MzSmpQVHd2YzNCaGJqNDhjM0JoYmlCamJHRnpjejFjSW5OY0lqNWNJbUp2ZDJWeVgyTnZiWEJ2Ym1WdWRITXZhbkYxWlhKNUwyUnBjM1F2YW5GMVpYSjVMbTFwYmk1cWMxd2lQQzl6Y0dGdVBqeHpjR0Z1SUdOc1lYTnpQVndpYm5SY0lqNG1aM1E3Sm14ME95OXpZM0pwY0hRbVozUTdQQzl6Y0dGdVBqd3ZZMjlrWlQ0OEwzQnlaVDQ4TDJacFozVnlaVDVjYmp4b01pQnBaRDFjSW5SM2FYUjBaWEl0ZFhCa1lYUmxjeTFtY205dExXSnZkMlZ5YUhSMGNITjBkMmwwZEdWeVkyOXRZbTkzWlhKY0lqNDhZU0JvY21WbVBWd2lJM1IzYVhSMFpYSXRkWEJrWVhSbGN5MW1jbTl0TFdKdmQyVnlhSFIwY0hOMGQybDBkR1Z5WTI5dFltOTNaWEpjSWlCamJHRnpjejFjSW1obFlXUmxjaTFoYm1Ob2IzSmNJajdDcHp3dllUNVVkMmwwZEdWeUlIVndaR0YwWlhNZ1puSnZiU0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTkwZDJsMGRHVnlMbU52YlM5aWIzZGxjbHdpUGtCaWIzZGxjand2WVQ0OEwyZ3lQbHh1UEhBK1BHRWdZMnhoYzNNOVhDSjBkMmwwZEdWeUxYUnBiV1ZzYVc1bFhDSWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmRIZHBkSFJsY2k1amIyMHZZbTkzWlhKY0lpQmtZWFJoTFhkcFpHZGxkQzFwWkQxY0lqUTRNRE0zTnpJNU1UTTJPVGMxTkRZeU5Wd2lQbFIzWldWMGN5QmllU0JBWW05M1pYSThMMkUrWEc0OEwzQStYRzVjYmp3dlpHbDJQbUFzWEc0Z0lDQWdkbWxsZDAxdmNtVTZJSHRjYmlBZ0lDQWdJQ0FnZEdWNGREb2dYQ0xtbTdUbHBKcmt2NkhtZ2E5Y0lpeGNiaUFnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3Y3pvdkwySnZkMlZ5TG1sdkwxd2lYRzRnSUNBZ2ZWeHVmU3dnZTF4dUlDQWdJSFJwZEd4bE9pQmNJa0p2Y25kelpYSlRlVzVqWENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVMMi81NVNvSUVKeWIzZHpaWEp6ZVc1aklPaXVxZWExaitpbmlPV1pxT1d1bnVhWHR1Vy9xK21BbitlYWhPV1RqZVc2bE9XSmplZXJyK1dRaE9lbmplYVdoK1M3dHVlYWhPYWJ0T2FVdWVXNXR1aUhxdVdLcU9XSXQrYVdzT21odGVtZG91KzhqT1M2cHVXUHIrV3VudWFYdHVXUWpPYXRwZVdRaE9TNHF1ZTdpT2VycisrOGpPYVBrT21ybU9pSHMrV3drVE13SmVlYWhPVzhnT1dQa2VhVmlPZU9oMXdpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4YURFZ1kyeGhjM005WENKb2IyOXJYQ0krVkdsdFpTMXpZWFpwYm1jZ2MzbHVZMmh5YjI1cGMyVmtJR0p5YjNkelpYSWdkR1Z6ZEdsdVp5NDhMMmd4UGp4d0lHTnNZWE56UFZ3aWNtOXVjMlZoYkZ3aVBrbDA0b0NaY3lCM2FXTnJaV1F0Wm1GemRDQmhibVFnZEc5MFlXeHNlU0JtY21WbExqd3ZjRDQ4Y0NCamJHRnpjejFjSW5acFpHVnZYQ0krUEdFZ1kyeGhjM005WENKMmFXUmxiMTlmYkdsdWExd2lJR2h5WldZOVhDSWpYQ0krUEM5aFBqd3ZjRDQ4Y0NCamJHRnpjejFjSW1odmR5MTBiMXdpUGp3dmNENDhjQ0JqYkdGemN6MWNJbWh2ZHkxMGIxOWZZMjl0YldGdVpGd2lQbTV3YlNCcGJuTjBZV3hzSUMxbklHSnliM2R6WlhJdGMzbHVZend2Y0Q0OGNDQmpiR0Z6Y3oxY0ltTjBZVndpUGp4aElHTnNZWE56UFZ3aVluVjBkRzl1SUdKMWRIUnZiaTB0Y0hKcGJXRnllVndpSUdoeVpXWTlYQ0lqYVc1emRHRnNiRndpSUhScGRHeGxQVndpUjJWMElGTjBZWEowWldSY0lqNUhaWFFnVTNSaGNuUmxaRHd2WVQ0OEwzQStQR1JwZGlCamJHRnpjejFjSW5Cc1lYbGxjbHdpUGp4d1BpZGliMjVxYjNWeVBDOXdQand2WkdsMlBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndjem92TDJKeWIzZHpaWEp6ZVc1akxtbHZMMXdpWEc0Z0lDQWdmVnh1ZlYxY2JseHViR1YwSUdsdVpHVjRJRDBnZTF4dUlDQWdJR1psZW1SbGMyTTZJRndpUmtWYUlPV0pqZWVycithb29lV2RsK1dNbHVXM3BlZW9pK1c4Z09XUGtlYWhodWFldGx3aUxGeHVJQ0FnSUdwMWJXSnZkSEp2YmpvZ2UxeHVJQ0FnSUNBZ0lDQjBhWFJzWlRvZ1hDSklaV3hzYnl3Z1JrVmFJRUZ1WkNCV2RXVWhYQ0lzWEc0Z0lDQWdJQ0FnSUdOdmJuUmxiblE2SUZ3aTZMK1o1cGl2NUxpQTVMaXE1TDIvNTVTb0lFWkZXaURtbm9UbHU3cm5tb1RsaVkzbnE2L21xS0hsblpmbGpKYmx2SURsajVIbnBMcmt2b3Z2dkl6bXZKVG5wTHJrdW9ibG43cmt1bzVXZFdYbGpaWG1sb2ZrdTdibnU0VGt1N2JubW9UbHZJRGxqNUhudTVQbW5vVGpnSUpjSWl4Y2JpQWdJQ0FnSUNBZ1luVjBkRzl1T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQmdQR2tnWTJ4aGMzTTlYQ0ptWVNCbVlTMW5hWFJvZFdJdFlXeDBYQ0krUEM5cFBpQkhhWFJJZFdKZ0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wm5WeWFXTXRlbWhoYnk5bVpYcGNJbHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNXNaWFFnYkdsemRDQTlJSHRjYmlBZ0lDQnFkVzFpYjNSeWIyNDZJSHRjYmlBZ0lDQWdJQ0FnZEdsMGJHVTZJRndpUmtWYUlFRnVaQ0JXZFdVZ1JuSmhiV1VoWENJc1hHNGdJQ0FnSUNBZ0lHTnZiblJsYm5RNklGd2k2TCtaNXBpdjVMaUE1TGlxUmtWYTVwVzA1WkNJVm5WbDU1cUU1WWlYNktHbzViR1Y1NlM2NmFHMTc3eU02SyszNTRLNTVZZTc1TGlMNloyaTVZaVg2S0dvNTVxRUlFUmxkR0ZwYkNEbWpJbnBrcTdvdjV2bGhhWG9yNmJtZzRYcG9iWG10WS9vcDRoY0lpeGNiaUFnSUNBZ0lDQWdZblYwZEc5dU9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdVlXMWxPaUJjSXVhZnBlZWNpK2FidE9Xa211Uy9vZWFCcjF3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd09pOHZabVY2TG1obGMzUjFaSGt1WTI5dFhDSmNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dWJHVjBJR052YlcxdmJpQTlJSHRjYmlBZ0lDQnphWFJsVG1GdFpUb2dYQ0pHUlZvZ1ZuVmxJRVJGVFU5Y0lpeGNibHh1SUNBZ0lHNWhka1JoZEdFNklGdDdYRzRnSUNBZ0lDQWdJRzVoYldVNklGd2k2YWFXNmFHMVhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhVzVrWlhndWFIUnRiRndpWEc0Z0lDQWdmU3dnZTF4dUlDQWdJQ0FnSUNCdVlXMWxPaUJjSWtaRld1V2Z1dWFjck9hZXR1YWVoRndpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSW14cGMzUXVhSFJ0YkZ3aVhHNGdJQ0FnZlYwc1hHNWNiaUFnSUNCbWIyOTBaWEpVWlhoME9pQmNJc0twSURJd01UY2dSa1ZhSU9XSmplZXJyK2Fvb2VXZGwrV01sdVczcGVlb2krVzhnT1dQa2VhaGh1YWV0aUJEY21WaGRHVmtJR0o1SUVaMWNtbGpMbnBvWVc5Y0lseHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdYQ0pwYm1SbGVGd2lPaUJwYm1SbGVDeGNiaUFnSUNCY0lteHBjM1JjSWpvZ2JHbHpkQ3hjYmlBZ0lDQmNJbVp5WVcxbGMxd2lPaUJtY21GdFpYTXNYRzRnSUNBZ1hDSmpiMjF0YjI1Y0lqb2dZMjl0Ylc5dVhHNTlYRzRpTENKcGJYQnZjblFnVVNCbWNtOXRJQ2R4SjF4dVhHNXBiWEJ2Y25RZ1FYQnBSR0YwWVNCbWNtOXRJQ2R3ZFdKc2FXTXZaR1Z0Ynkxa1lYUmhKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdibUYyVEdsemREb2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1VTNVFjbTl0YVhObEtDaHlaWE52YkhabExDQnlaV3BsWTNRcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb1FYQnBSR0YwWVM1amIyMXRiMjR1Ym1GMlJHRjBZU2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0I5TEZ4dUlDQWdJSE5wZEdWT1lXMWxPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlJMbEJ5YjIxcGMyVW9LSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaEJjR2xFWVhSaExtTnZiVzF2Ymk1emFYUmxUbUZ0WlNsY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUxGeHVJQ0FnSUdadmIzUmxjbFJsZUhRNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUZFdVVISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0VGd2FVUmhkR0V1WTI5dGJXOXVMbVp2YjNSbGNsUmxlSFFwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpUEhSbGJYQnNZWFJsUGx4dUlDQWdJRHhtYjI5MFpYSWdZMnhoYzNNOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNNOVhDSndkV3hzTFd4bFpuUmNJajU3ZTNSbGVIUjlmVHd2YzNCaGJqNWNiaUFnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM005WENKd2RXeHNMWEpwWjJoMFhDSStYRzVjZEZ4MFBHa2dZMnhoYzNNOVhDSnBZMjl1SUdsamIyNHRkMlZwZUdsdVhDSStQQzlwUGx4dVhIUmNkRHhwSUdOc1lYTnpQVndpYVdOdmJpQnBZMjl1TFhkbGFXSnZYQ0krUEM5cFBseHVYSFE4TDNOd1lXNCtYRzRnSUNBZ1BDOW1iMjkwWlhJK1hHNDhMM1JsYlhCc1lYUmxQbHh1UEhOamNtbHdkRDVjYm1sdGNHOXlkQ0JUWlhKMmFXTmxJR1p5YjIwZ0p5NHZZMjl0Ylc5dUoxeHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSaGRHRW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWEhSMFpYaDBPbHdpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2JXVjBhRzlrY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dmRHVnlPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCVFpYSjJhV05sTG1admIzUmxjbFJsZUhRb0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hIUjBhR2x6TG5SbGVIUWdQU0JrWVhSaFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZM0psWVhSbFpDZ3BJSHRjYmlBZ0lDQWdJQ0FnWEhSMGFHbHpMbVp2YjNSbGNpZ3BYRzRnSUNBZ0lDQWdJSDFjYm4xY2Jqd3ZjMk55YVhCMFBseHVJaXdpUEhSbGJYQnNZWFJsUGx4dUlDQWdJRHh1WVhZZ1kyeGhjM005WENKdVlYWmlZWElnYm1GMlltRnlMV2x1ZG1WeWMyVWdibUYyWW1GeUxXWnBlR1ZrTFhSdmNGd2lQbHh1SUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVkyOXVkR0ZwYm1WeVhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2libUYyWW1GeUxXaGxZV1JsY2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGlkWFIwYjI0Z2RIbHdaVDFjSW1KMWRIUnZibHdpSUdOc1lYTnpQVndpYm1GMlltRnlMWFJ2WjJkc1pTQmpiMnhzWVhCelpXUmNJaUJrWVhSaExYUnZaMmRzWlQxY0ltTnZiR3hoY0hObFhDSWdaR0YwWVMxMFlYSm5aWFE5WENJamJtRjJZbUZ5WENJZ1lYSnBZUzFsZUhCaGJtUmxaRDFjSW1aaGJITmxYQ0lnWVhKcFlTMWpiMjUwY205c2N6MWNJbTVoZG1KaGNsd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemN6MWNJbk55TFc5dWJIbGNJajVVYjJkbmJHVWdibUYyYVdkaGRHbHZiand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNNOVhDSnBZMjl1TFdKaGNsd2lQand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNNOVhDSnBZMjl1TFdKaGNsd2lQand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNNOVhDSnBZMjl1TFdKaGNsd2lQand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMkoxZEhSdmJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZU0JqYkdGemN6MWNJbTVoZG1KaGNpMWljbUZ1WkZ3aUlHaHlaV1k5WENJdlhDSStlM3RvWldGa1pYSkVZWFJoTG5OcGRHVk9ZVzFsZlgwOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnYVdROVhDSnVZWFppWVhKY0lpQmpiR0Z6Y3oxY0ltTnZiR3hoY0hObElHNWhkbUpoY2kxamIyeHNZWEJ6WlZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbTVoZGlCdVlYWmlZWEl0Ym1GMlhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FTQjJMV1p2Y2oxY0ltbDBaVzBnYVc0Z2FHVmhaR1Z5UkdGMFlTNXVZWFpNYVhOMFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZU0E2YUhKbFpqMWNJbWwwWlcwdWFISmxabHdpUG50N2FYUmxiUzV1WVcxbGZYMDhMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5MWJENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDRXRMUzh1Ym1GMkxXTnZiR3hoY0hObElDMHRQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBOEwyNWhkajVjYmp3dmRHVnRjR3hoZEdVK1hHNDhjMk55YVhCMFBseHVhVzF3YjNKMElGTmxjblpwWTJVZ1puSnZiU0FuTGk5amIyMXRiMjRuWEc1cGJYQnZjblFnVVNCbWNtOXRJQ2R4SjF4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JoZEdFb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdobFlXUmxja1JoZEdFNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsMFpVNWhiV1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1aGRreHBjM1E2SUZ0ZFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQnRaWFJvYjJSek9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXRmtaWEpFWVhSaFNXNXBkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRjkyYlNBOUlIUm9hWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JSTG1Gc2JDaGJYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZObGNuWnBZMlV1YzJsMFpVNWhiV1VvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVMlZ5ZG1salpTNXVZWFpNYVhOMEtDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmRLUzUwYUdWdUtDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnlkRzVFWVhSaElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmwwWlU1aGJXVTZJR1JoZEdGYk1GMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZWFpNYVhOME9pQmtZWFJoV3pGZFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzWnRMbWhsWVdSbGNrUmhkR0VnUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCeWRHNUVZWFJoS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdZM0psWVhSbFpDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdWaFpHVnlSR0YwWVVsdWFYUW9LVnh1SUNBZ0lDQWdJQ0I5WEc1OVhHNDhMM05qY21sd2RENWNiaUlzSWp4MFpXMXdiR0YwWlQ1Y2JpQWdJQ0E4WkdsMlBseHVJQ0FnSUNBZ0lDQThJUzB0SUc1aGRpQXRMVDVjYmlBZ0lDQWdJQ0FnUEdabGVpMW9aV0ZrWlhJK1BDOW1aWG90YUdWaFpHVnlQbHh1SUNBZ0lDQWdJQ0E4SVMwdElHcDFiV0p2ZEhKdmJpQXRMVDVjYmlBZ0lDQWdJQ0FnUEhOc2IzUStQQzl6Ykc5MFBseHVJQ0FnSUNBZ0lDQThabVY2TFdadmIzUmxjajQ4TDJabGVpMW1iMjkwWlhJK1hHNGdJQ0FnUEM5a2FYWStYRzQ4TDNSbGJYQnNZWFJsUGx4dVBITmpjbWx3ZEQ1Y2JtbHRjRzl5ZENCbVpYcElaV0ZrWlhJZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmFHVmhaR1Z5TG5aMVpTZGNibWx0Y0c5eWRDQm1aWHBHYjI5MFpYSWdabkp2YlNBbmNIVmliR2xqTDIxdlpIVnNaUzlqYjIxdGIyNHZabTl2ZEdWeUxuWjFaU2RjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR052YlhCdmJtVnVkSE02SUh0Y2JpQWdJQ0FnSUNBZ1ptVjZTR1ZoWkdWeUxGeHVJQ0FnSUNBZ0lDQm1aWHBHYjI5MFpYSmNiaUFnSUNCOVhHNTlYRzQ4TDNOamNtbHdkRDVjYmlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2V5QmNJbVJsWm1GMWJIUmNJam9nY21WeGRXbHlaU2hjSW1OdmNtVXRhbk12YkdsaWNtRnllUzltYmk5dlltcGxZM1F2WVhOemFXZHVYQ0lwTENCZlgyVnpUVzlrZFd4bE9pQjBjblZsSUgwN0lpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNWNibVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzVjYm5aaGNpQmZZWE56YVdkdUlEMGdjbVZ4ZFdseVpTaGNJaTR1TDJOdmNtVXRhbk12YjJKcVpXTjBMMkZ6YzJsbmJsd2lLVHRjYmx4dWRtRnlJRjloYzNOcFoyNHlJRDBnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaGZZWE56YVdkdUtUdGNibHh1Wm5WdVkzUnBiMjRnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaHZZbW9wSUhzZ2NtVjBkWEp1SUc5aWFpQW1KaUJ2WW1vdVgxOWxjMDF2WkhWc1pTQS9JRzlpYWlBNklIc2daR1ZtWVhWc2REb2diMkpxSUgwN0lIMWNibHh1Wlhod2IzSjBjeTVrWldaaGRXeDBJRDBnWDJGemMybG5iakl1WkdWbVlYVnNkQ0I4ZkNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwS1NCN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2RtRnlJSE52ZFhKalpTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJ6YjNWeVkyVXBJSHRjYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2MyOTFjbU5sTENCclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkRnRyWlhsZElEMGdjMjkxY21ObFcydGxlVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJoY21kbGREdGNibjA3SWl3aWNtVnhkV2x5WlNnbkxpNHZMaTR2Ylc5a2RXeGxjeTlsY3pZdWIySnFaV04wTG1GemMybG5iaWNwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUxpOHVMaTl0YjJSMWJHVnpMMTlqYjNKbEp5a3VUMkpxWldOMExtRnpjMmxuYmpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2FXWW9kSGx3Wlc5bUlHbDBJQ0U5SUNkbWRXNWpkR2x2YmljcGRHaHliM2NnVkhsd1pVVnljbTl5S0dsMElDc2dKeUJwY3lCdWIzUWdZU0JtZFc1amRHbHZiaUVuS1R0Y2JpQWdjbVYwZFhKdUlHbDBPMXh1ZlRzaUxDSjJZWElnYVhOUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBjeTF2WW1wbFkzUW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0JwWmlnaGFYTlBZbXBsWTNRb2FYUXBLWFJvY205M0lGUjVjR1ZGY25KdmNpaHBkQ0FySUNjZ2FYTWdibTkwSUdGdUlHOWlhbVZqZENFbktUdGNiaUFnY21WMGRYSnVJR2wwTzF4dWZUc2lMQ0l2THlCbVlXeHpaU0F0UGlCQmNuSmhlU05wYm1SbGVFOW1YRzR2THlCMGNuVmxJQ0F0UGlCQmNuSmhlU05wYm1Oc2RXUmxjMXh1ZG1GeUlIUnZTVTlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXbHZZbXBsWTNRbktWeHVJQ0FzSUhSdlRHVnVaM1JvSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFd4bGJtZDBhQ2NwWEc0Z0lDd2dkRzlKYm1SbGVDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmRHOHRhVzVrWlhnbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9TVk5mU1U1RFRGVkVSVk1wZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0b0pIUm9hWE1zSUdWc0xDQm1jbTl0U1c1a1pYZ3BlMXh1SUNBZ0lIWmhjaUJQSUNBZ0lDQWdQU0IwYjBsUFltcGxZM1FvSkhSb2FYTXBYRzRnSUNBZ0lDQXNJR3hsYm1kMGFDQTlJSFJ2VEdWdVozUm9LRTh1YkdWdVozUm9LVnh1SUNBZ0lDQWdMQ0JwYm1SbGVDQWdQU0IwYjBsdVpHVjRLR1p5YjIxSmJtUmxlQ3dnYkdWdVozUm9LVnh1SUNBZ0lDQWdMQ0IyWVd4MVpUdGNiaUFnSUNBdkx5QkJjbkpoZVNOcGJtTnNkV1JsY3lCMWMyVnpJRk5oYldWV1lXeDFaVnBsY204Z1pYRjFZV3hwZEhrZ1lXeG5iM0pwZEdodFhHNGdJQ0FnYVdZb1NWTmZTVTVEVEZWRVJWTWdKaVlnWld3Z0lUMGdaV3dwZDJocGJHVW9iR1Z1WjNSb0lENGdhVzVrWlhncGUxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCUFcybHVaR1Y0S3l0ZE8xeHVJQ0FnSUNBZ2FXWW9kbUZzZFdVZ0lUMGdkbUZzZFdVcGNtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0x5OGdRWEp5WVhramRHOUpibVJsZUNCcFoyNXZjbVZ6SUdodmJHVnpMQ0JCY25KaGVTTnBibU5zZFdSbGN5QXRJRzV2ZEZ4dUlDQWdJSDBnWld4elpTQm1iM0lvTzJ4bGJtZDBhQ0ErSUdsdVpHVjRPeUJwYm1SbGVDc3JLV2xtS0VsVFgwbE9RMHhWUkVWVElIeDhJR2x1WkdWNElHbHVJRThwZTF4dUlDQWdJQ0FnYVdZb1QxdHBibVJsZUYwZ1BUMDlJR1ZzS1hKbGRIVnliaUJKVTE5SlRrTk1WVVJGVXlCOGZDQnBibVJsZUNCOGZDQXdPMXh1SUNBZ0lIMGdjbVYwZFhKdUlDRkpVMTlKVGtOTVZVUkZVeUFtSmlBdE1UdGNiaUFnZlR0Y2JuMDdJaXdpZG1GeUlIUnZVM1J5YVc1bklEMGdlMzB1ZEc5VGRISnBibWM3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnZEc5VGRISnBibWN1WTJGc2JDaHBkQ2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVmVHNpTENKMllYSWdZMjl5WlNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UzWmxjbk5wYjI0NklDY3lMalF1TUNkOU8xeHVhV1lvZEhsd1pXOW1JRjlmWlNBOVBTQW5iblZ0WW1WeUp5bGZYMlVnUFNCamIzSmxPeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWFZ1WkdWbUlpd2lMeThnYjNCMGFXOXVZV3dnTHlCemFXMXdiR1VnWTI5dWRHVjRkQ0JpYVc1a2FXNW5YRzUyWVhJZ1lVWjFibU4wYVc5dUlEMGdjbVZ4ZFdseVpTZ25MaTlmWVMxbWRXNWpkR2x2YmljcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaG1iaXdnZEdoaGRDd2diR1Z1WjNSb0tYdGNiaUFnWVVaMWJtTjBhVzl1S0dadUtUdGNiaUFnYVdZb2RHaGhkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0tYSmxkSFZ5YmlCbWJqdGNiaUFnYzNkcGRHTm9LR3hsYm1kMGFDbDdYRzRnSUNBZ1kyRnpaU0F4T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVNsN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm00dVkyRnNiQ2gwYUdGMExDQmhLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHTmhjMlVnTWpvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0dFc0lHSXBlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWnVMbU5oYkd3b2RHaGhkQ3dnWVN3Z1lpazdYRzRnSUNBZ2ZUdGNiaUFnSUNCallYTmxJRE02SUhKbGRIVnliaUJtZFc1amRHbHZiaWhoTENCaUxDQmpLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzSUdFc0lHSXNJR01wTzF4dUlDQWdJSDA3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVLQzhxSUM0dUxtRnlaM01nS2k4cGUxeHVJQ0FnSUhKbGRIVnliaUJtYmk1aGNIQnNlU2gwYUdGMExDQmhjbWQxYldWdWRITXBPMXh1SUNCOU8xeHVmVHNpTENJdkx5QTNMakl1TVNCU1pYRjFhWEpsVDJKcVpXTjBRMjlsY21OcFlteGxLR0Z5WjNWdFpXNTBLVnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJR2xtS0dsMElEMDlJSFZ1WkdWbWFXNWxaQ2wwYUhKdmR5QlVlWEJsUlhKeWIzSW9YQ0pEWVc0bmRDQmpZV3hzSUcxbGRHaHZaQ0J2YmlBZ1hDSWdLeUJwZENrN1hHNGdJSEpsZEhWeWJpQnBkRHRjYm4wN0lpd2lMeThnVkdoaGJtc25jeUJKUlRnZ1ptOXlJR2hwY3lCbWRXNXVlU0JrWldacGJtVlFjbTl3WlhKMGVWeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQWhjbVZ4ZFdseVpTZ25MaTlmWm1GcGJITW5LU2htZFc1amRHbHZiaWdwZTF4dUlDQnlaWFIxY200Z1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLSHQ5TENBbllTY3NJSHRuWlhRNklHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQTNPeUI5ZlNrdVlTQWhQU0EzTzF4dWZTazdJaXdpZG1GeUlHbHpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmYVhNdGIySnFaV04wSnlsY2JpQWdMQ0JrYjJOMWJXVnVkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyZHNiMkpoYkNjcExtUnZZM1Z0Wlc1MFhHNGdJQzh2SUdsdUlHOXNaQ0JKUlNCMGVYQmxiMllnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDQnBjeUFuYjJKcVpXTjBKMXh1SUNBc0lHbHpJRDBnYVhOUFltcGxZM1FvWkc5amRXMWxiblFwSUNZbUlHbHpUMkpxWldOMEtHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhKbGRIVnliaUJwY3lBL0lHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYVhRcElEb2dlMzA3WEc1OU95SXNJaTh2SUVsRklEZ3RJR1J2YmlkMElHVnVkVzBnWW5WbklHdGxlWE5jYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnS0Z4dUlDQW5ZMjl1YzNSeWRXTjBiM0lzYUdGelQzZHVVSEp2Y0dWeWRIa3NhWE5RY205MGIzUjVjR1ZQWml4d2NtOXdaWEowZVVselJXNTFiV1Z5WVdKc1pTeDBiMHh2WTJGc1pWTjBjbWx1Wnl4MGIxTjBjbWx1Wnl4MllXeDFaVTltSjF4dUtTNXpjR3hwZENnbkxDY3BPeUlzSW5aaGNpQm5iRzlpWVd3Z0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5bmJHOWlZV3duS1Z4dUlDQXNJR052Y21VZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyTnZjbVVuS1Z4dUlDQXNJR04wZUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyTjBlQ2NwWEc0Z0lDd2dhR2xrWlNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwWEc0Z0lDd2dVRkpQVkU5VVdWQkZJRDBnSjNCeWIzUnZkSGx3WlNjN1hHNWNiblpoY2lBa1pYaHdiM0owSUQwZ1puVnVZM1JwYjI0b2RIbHdaU3dnYm1GdFpTd2djMjkxY21ObEtYdGNiaUFnZG1GeUlFbFRYMFpQVWtORlJDQTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExrWmNiaUFnSUNBc0lFbFRYMGRNVDBKQlRDQTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExrZGNiaUFnSUNBc0lFbFRYMU5VUVZSSlF5QTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExsTmNiaUFnSUNBc0lFbFRYMUJTVDFSUElDQTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExsQmNiaUFnSUNBc0lFbFRYMEpKVGtRZ0lDQTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExrSmNiaUFnSUNBc0lFbFRYMWRTUVZBZ0lDQTlJSFI1Y0dVZ0ppQWtaWGh3YjNKMExsZGNiaUFnSUNBc0lHVjRjRzl5ZEhNZ0lDQTlJRWxUWDBkTVQwSkJUQ0EvSUdOdmNtVWdPaUJqYjNKbFcyNWhiV1ZkSUh4OElDaGpiM0psVzI1aGJXVmRJRDBnZTMwcFhHNGdJQ0FnTENCbGVIQlFjbTkwYnlBZ1BTQmxlSEJ2Y25SelcxQlNUMVJQVkZsUVJWMWNiaUFnSUNBc0lIUmhjbWRsZENBZ0lDQTlJRWxUWDBkTVQwSkJUQ0EvSUdkc2IySmhiQ0E2SUVsVFgxTlVRVlJKUXlBL0lHZHNiMkpoYkZ0dVlXMWxYU0E2SUNobmJHOWlZV3hiYm1GdFpWMGdmSHdnZTMwcFcxQlNUMVJQVkZsUVJWMWNiaUFnSUNBc0lHdGxlU3dnYjNkdUxDQnZkWFE3WEc0Z0lHbG1LRWxUWDBkTVQwSkJUQ2x6YjNWeVkyVWdQU0J1WVcxbE8xeHVJQ0JtYjNJb2EyVjVJR2x1SUhOdmRYSmpaU2w3WEc0Z0lDQWdMeThnWTI5dWRHRnBibk1nYVc0Z2JtRjBhWFpsWEc0Z0lDQWdiM2R1SUQwZ0lVbFRYMFpQVWtORlJDQW1KaUIwWVhKblpYUWdKaVlnZEdGeVoyVjBXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnBaaWh2ZDI0Z0ppWWdhMlY1SUdsdUlHVjRjRzl5ZEhNcFkyOXVkR2x1ZFdVN1hHNGdJQ0FnTHk4Z1pYaHdiM0owSUc1aGRHbDJaU0J2Y2lCd1lYTnpaV1JjYmlBZ0lDQnZkWFFnUFNCdmQyNGdQeUIwWVhKblpYUmJhMlY1WFNBNklITnZkWEpqWlZ0clpYbGRPMXh1SUNBZ0lDOHZJSEJ5WlhabGJuUWdaMnh2WW1Gc0lIQnZiR3gxZEdsdmJpQm1iM0lnYm1GdFpYTndZV05sYzF4dUlDQWdJR1Y0Y0c5eWRITmJhMlY1WFNBOUlFbFRYMGRNVDBKQlRDQW1KaUIwZVhCbGIyWWdkR0Z5WjJWMFcydGxlVjBnSVQwZ0oyWjFibU4wYVc5dUp5QS9JSE52ZFhKalpWdHJaWGxkWEc0Z0lDQWdMeThnWW1sdVpDQjBhVzFsY25NZ2RHOGdaMnh2WW1Gc0lHWnZjaUJqWVd4c0lHWnliMjBnWlhod2IzSjBJR052Ym5SbGVIUmNiaUFnSUNBNklFbFRYMEpKVGtRZ0ppWWdiM2R1SUQ4Z1kzUjRLRzkxZEN3Z1oyeHZZbUZzS1Z4dUlDQWdJQzh2SUhkeVlYQWdaMnh2WW1Gc0lHTnZibk4wY25WamRHOXljeUJtYjNJZ2NISmxkbVZ1ZENCamFHRnVaMlVnZEdobGJTQnBiaUJzYVdKeVlYSjVYRzRnSUNBZ09pQkpVMTlYVWtGUUlDWW1JSFJoY21kbGRGdHJaWGxkSUQwOUlHOTFkQ0EvSUNobWRXNWpkR2x2YmloREtYdGNiaUFnSUNBZ0lIWmhjaUJHSUQwZ1puVnVZM1JwYjI0b1lTd2dZaXdnWXlsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQkRLWHRjYmlBZ0lDQWdJQ0FnSUNCemQybDBZMmdvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURBNklISmxkSFZ5YmlCdVpYY2dRenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTVRvZ2NtVjBkWEp1SUc1bGR5QkRLR0VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBeU9pQnlaWFIxY200Z2JtVjNJRU1vWVN3Z1lpazdYRzRnSUNBZ0lDQWdJQ0FnZlNCeVpYUjFjbTRnYm1WM0lFTW9ZU3dnWWl3Z1l5azdYRzRnSUNBZ0lDQWdJSDBnY21WMGRYSnVJRU11WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ0lDQkdXMUJTVDFSUFZGbFFSVjBnUFNCRFcxQlNUMVJQVkZsUVJWMDdYRzRnSUNBZ0lDQnlaWFIxY200Z1JqdGNiaUFnSUNBdkx5QnRZV3RsSUhOMFlYUnBZeUIyWlhKemFXOXVjeUJtYjNJZ2NISnZkRzkwZVhCbElHMWxkR2h2WkhOY2JpQWdJQ0I5S1NodmRYUXBJRG9nU1ZOZlVGSlBWRThnSmlZZ2RIbHdaVzltSUc5MWRDQTlQU0FuWm5WdVkzUnBiMjRuSUQ4Z1kzUjRLRVoxYm1OMGFXOXVMbU5oYkd3c0lHOTFkQ2tnT2lCdmRYUTdYRzRnSUNBZ0x5OGdaWGh3YjNKMElIQnliM1J2SUcxbGRHaHZaSE1nZEc4Z1kyOXlaUzRsUTA5T1UxUlNWVU5VVDFJbExtMWxkR2h2WkhNdUpVNUJUVVVsWEc0Z0lDQWdhV1lvU1ZOZlVGSlBWRThwZTF4dUlDQWdJQ0FnS0dWNGNHOXlkSE11ZG1seWRIVmhiQ0I4ZkNBb1pYaHdiM0owY3k1MmFYSjBkV0ZzSUQwZ2UzMHBLVnRyWlhsZElEMGdiM1YwTzF4dUlDQWdJQ0FnTHk4Z1pYaHdiM0owSUhCeWIzUnZJRzFsZEdodlpITWdkRzhnWTI5eVpTNGxRMDlPVTFSU1ZVTlVUMUlsTG5CeWIzUnZkSGx3WlM0bFRrRk5SU1ZjYmlBZ0lDQWdJR2xtS0hSNWNHVWdKaUFrWlhod2IzSjBMbElnSmlZZ1pYaHdVSEp2ZEc4Z0ppWWdJV1Y0Y0ZCeWIzUnZXMnRsZVYwcGFHbGtaU2hsZUhCUWNtOTBieXdnYTJWNUxDQnZkWFFwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmk4dklIUjVjR1VnWW1sMGJXRndYRzRrWlhod2IzSjBMa1lnUFNBeE95QWdJQzh2SUdadmNtTmxaRnh1SkdWNGNHOXlkQzVISUQwZ01qc2dJQ0F2THlCbmJHOWlZV3hjYmlSbGVIQnZjblF1VXlBOUlEUTdJQ0FnTHk4Z2MzUmhkR2xqWEc0a1pYaHdiM0owTGxBZ1BTQTRPeUFnSUM4dklIQnliM1J2WEc0a1pYaHdiM0owTGtJZ1BTQXhOanNnSUM4dklHSnBibVJjYmlSbGVIQnZjblF1VnlBOUlETXlPeUFnTHk4Z2QzSmhjRnh1SkdWNGNHOXlkQzVWSUQwZ05qUTdJQ0F2THlCellXWmxYRzRrWlhod2IzSjBMbElnUFNBeE1qZzdJQzh2SUhKbFlXd2djSEp2ZEc4Z2JXVjBhRzlrSUdadmNpQmdiR2xpY21GeWVXQWdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ1JsZUhCdmNuUTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhsZUdWaktYdGNiaUFnZEhKNUlIdGNiaUFnSUNCeVpYUjFjbTRnSVNGbGVHVmpLQ2s3WEc0Z0lIMGdZMkYwWTJnb1pTbDdYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgxY2JuMDdJaXdpTHk4Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwzcHNiMmx5YjJOckwyTnZjbVV0YW5NdmFYTnpkV1Z6THpnMkkybHpjM1ZsWTI5dGJXVnVkQzB4TVRVM05Ua3dNamhjYm5aaGNpQm5iRzlpWVd3Z1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMazFoZEdnZ1BUMGdUV0YwYUZ4dUlDQS9JSGRwYm1SdmR5QTZJSFI1Y0dWdlppQnpaV3htSUNFOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhObGJHWXVUV0YwYUNBOVBTQk5ZWFJvSUQ4Z2MyVnNaaUE2SUVaMWJtTjBhVzl1S0NkeVpYUjFjbTRnZEdocGN5Y3BLQ2s3WEc1cFppaDBlWEJsYjJZZ1gxOW5JRDA5SUNkdWRXMWlaWEluS1Y5Zlp5QTlJR2RzYjJKaGJEc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFibVJsWmlJc0luWmhjaUJvWVhOUGQyNVFjbTl3WlhKMGVTQTlJSHQ5TG1oaGMwOTNibEJ5YjNCbGNuUjVPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZEN3Z2EyVjVLWHRjYmlBZ2NtVjBkWEp1SUdoaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2FYUXNJR3RsZVNrN1hHNTlPeUlzSW5aaGNpQmtVQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdSd0p5bGNiaUFnTENCamNtVmhkR1ZFWlhOaklEMGdjbVZ4ZFdseVpTZ25MaTlmY0hKdmNHVnlkSGt0WkdWell5Y3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5a1pYTmpjbWx3ZEc5eWN5Y3BJRDhnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0JyWlhrc0lIWmhiSFZsS1h0Y2JpQWdjbVYwZFhKdUlHUlFMbVlvYjJKcVpXTjBMQ0JyWlhrc0lHTnlaV0YwWlVSbGMyTW9NU3dnZG1Gc2RXVXBLVHRjYm4wZ09pQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lHdGxlU3dnZG1Gc2RXVXBlMXh1SUNCdlltcGxZM1JiYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0J5WlhSMWNtNGdiMkpxWldOME8xeHVmVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNGeVpYRjFhWEpsS0NjdUwxOWtaWE5qY21sd2RHOXljeWNwSUNZbUlDRnlaWEYxYVhKbEtDY3VMMTltWVdsc2N5Y3BLR1oxYm1OMGFXOXVLQ2w3WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29jbVZ4ZFdseVpTZ25MaTlmWkc5dExXTnlaV0YwWlNjcEtDZGthWFluS1N3Z0oyRW5MQ0I3WjJWME9pQm1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdOenNnZlgwcExtRWdJVDBnTnp0Y2JuMHBPeUlzSWk4dklHWmhiR3hpWVdOcklHWnZjaUJ1YjI0dFlYSnlZWGt0YkdsclpTQkZVek1nWVc1a0lHNXZiaTFsYm5WdFpYSmhZbXhsSUc5c1pDQldPQ0J6ZEhKcGJtZHpYRzUyWVhJZ1kyOW1JRDBnY21WeGRXbHlaU2duTGk5ZlkyOW1KeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUU5aWFtVmpkQ2duZWljcExuQnliM0JsY25SNVNYTkZiblZ0WlhKaFlteGxLREFwSUQ4Z1QySnFaV04wSURvZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnWTI5bUtHbDBLU0E5UFNBblUzUnlhVzVuSnlBL0lHbDBMbk53YkdsMEtDY25LU0E2SUU5aWFtVmpkQ2hwZENrN1hHNTlPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHbDBJRDA5UFNBbmIySnFaV04wSnlBL0lHbDBJQ0U5UFNCdWRXeHNJRG9nZEhsd1pXOW1JR2wwSUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlRzaUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc0dkx5QXhPUzR4TGpJdU1TQlBZbXBsWTNRdVlYTnphV2R1S0hSaGNtZGxkQ3dnYzI5MWNtTmxMQ0F1TGk0cFhHNTJZWElnWjJWMFMyVjVjeUFnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdGEyVjVjeWNwWEc0Z0lDd2daMDlRVXlBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WjI5d2N5Y3BYRzRnSUN3Z2NFbEZJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRjR2xsSnlsY2JpQWdMQ0IwYjA5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMVzlpYW1WamRDY3BYRzRnSUN3Z1NVOWlhbVZqZENBZ1BTQnlaWEYxYVhKbEtDY3VMMTlwYjJKcVpXTjBKeWxjYmlBZ0xDQWtZWE56YVdkdUlDQTlJRTlpYW1WamRDNWhjM05wWjI0N1hHNWNiaTh2SUhOb2IzVnNaQ0IzYjNKcklIZHBkR2dnYzNsdFltOXNjeUJoYm1RZ2MyaHZkV3hrSUdoaGRtVWdaR1YwWlhKdGFXNXBjM1JwWXlCd2NtOXdaWEowZVNCdmNtUmxjaUFvVmpnZ1luVm5LVnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FoSkdGemMybG5iaUI4ZkNCeVpYRjFhWEpsS0NjdUwxOW1ZV2xzY3ljcEtHWjFibU4wYVc5dUtDbDdYRzRnSUhaaGNpQkJJRDBnZTMxY2JpQWdJQ0FzSUVJZ1BTQjdmVnh1SUNBZ0lDd2dVeUE5SUZONWJXSnZiQ2dwWEc0Z0lDQWdMQ0JMSUQwZ0oyRmlZMlJsWm1kb2FXcHJiRzF1YjNCeGNuTjBKenRjYmlBZ1FWdFRYU0E5SURjN1hHNGdJRXN1YzNCc2FYUW9KeWNwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRvYXlsN0lFSmJhMTBnUFNCck95QjlLVHRjYmlBZ2NtVjBkWEp1SUNSaGMzTnBaMjRvZTMwc0lFRXBXMU5kSUNFOUlEY2dmSHdnVDJKcVpXTjBMbXRsZVhNb0pHRnpjMmxuYmloN2ZTd2dRaWtwTG1wdmFXNG9KeWNwSUNFOUlFczdYRzU5S1NBL0lHWjFibU4wYVc5dUlHRnpjMmxuYmloMFlYSm5aWFFzSUhOdmRYSmpaU2w3SUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0ZFc1MWMyVmtMWFpoY25OY2JpQWdkbUZ5SUZRZ0lDQWdJRDBnZEc5UFltcGxZM1FvZEdGeVoyVjBLVnh1SUNBZ0lDd2dZVXhsYmlBZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb1hHNGdJQ0FnTENCcGJtUmxlQ0E5SURGY2JpQWdJQ0FzSUdkbGRGTjViV0p2YkhNZ1BTQm5UMUJUTG1aY2JpQWdJQ0FzSUdselJXNTFiU0FnSUNBZ1BTQndTVVV1Wmp0Y2JpQWdkMmhwYkdVb1lVeGxiaUErSUdsdVpHVjRLWHRjYmlBZ0lDQjJZWElnVXlBZ0lDQWdJRDBnU1U5aWFtVmpkQ2hoY21kMWJXVnVkSE5iYVc1a1pYZ3JLMTBwWEc0Z0lDQWdJQ0FzSUd0bGVYTWdJQ0E5SUdkbGRGTjViV0p2YkhNZ1B5Qm5aWFJMWlhsektGTXBMbU52Ym1OaGRDaG5aWFJUZVcxaWIyeHpLRk1wS1NBNklHZGxkRXRsZVhNb1V5bGNiaUFnSUNBZ0lDd2diR1Z1WjNSb0lEMGdhMlY1Y3k1c1pXNW5kR2hjYmlBZ0lDQWdJQ3dnYWlBZ0lDQWdJRDBnTUZ4dUlDQWdJQ0FnTENCclpYazdYRzRnSUNBZ2QyaHBiR1VvYkdWdVozUm9JRDRnYWlscFppaHBjMFZ1ZFcwdVkyRnNiQ2hUTENCclpYa2dQU0JyWlhselcyb3JLMTBwS1ZSYmEyVjVYU0E5SUZOYmEyVjVYVHRjYmlBZ2ZTQnlaWFIxY200Z1ZEdGNibjBnT2lBa1lYTnphV2R1T3lJc0luWmhjaUJoYms5aWFtVmpkQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJGdUxXOWlhbVZqZENjcFhHNGdJQ3dnU1VVNFgwUlBUVjlFUlVaSlRrVWdQU0J5WlhGMWFYSmxLQ2N1TDE5cFpUZ3RaRzl0TFdSbFptbHVaU2NwWEc0Z0lDd2dkRzlRY21sdGFYUnBkbVVnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxd2NtbHRhWFJwZG1VbktWeHVJQ0FzSUdSUUlDQWdJQ0FnSUNBZ0lDQWdJRDBnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNU8xeHVYRzVsZUhCdmNuUnpMbVlnUFNCeVpYRjFhWEpsS0NjdUwxOWtaWE5qY21sd2RHOXljeWNwSUQ4Z1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVJRG9nWm5WdVkzUnBiMjRnWkdWbWFXNWxVSEp2Y0dWeWRIa29UeXdnVUN3Z1FYUjBjbWxpZFhSbGN5bDdYRzRnSUdGdVQySnFaV04wS0U4cE8xeHVJQ0JRSUQwZ2RHOVFjbWx0YVhScGRtVW9VQ3dnZEhKMVpTazdYRzRnSUdGdVQySnFaV04wS0VGMGRISnBZblYwWlhNcE8xeHVJQ0JwWmloSlJUaGZSRTlOWDBSRlJrbE9SU2wwY25rZ2UxeHVJQ0FnSUhKbGRIVnliaUJrVUNoUExDQlFMQ0JCZEhSeWFXSjFkR1Z6S1R0Y2JpQWdmU0JqWVhSamFDaGxLWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZWeHVJQ0JwWmlnbloyVjBKeUJwYmlCQmRIUnlhV0oxZEdWeklIeDhJQ2R6WlhRbklHbHVJRUYwZEhKcFluVjBaWE1wZEdoeWIzY2dWSGx3WlVWeWNtOXlLQ2RCWTJObGMzTnZjbk1nYm05MElITjFjSEJ2Y25SbFpDRW5LVHRjYmlBZ2FXWW9KM1poYkhWbEp5QnBiaUJCZEhSeWFXSjFkR1Z6S1U5YlVGMGdQU0JCZEhSeWFXSjFkR1Z6TG5aaGJIVmxPMXh1SUNCeVpYUjFjbTRnVHp0Y2JuMDdJaXdpWlhod2IzSjBjeTVtSUQwZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N6c2lMQ0oyWVhJZ2FHRnpJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYjJKcVpXTjBKeWxjYmlBZ0xDQmhjbkpoZVVsdVpHVjRUMllnUFNCeVpYRjFhWEpsS0NjdUwxOWhjbkpoZVMxcGJtTnNkV1JsY3ljcEtHWmhiSE5sS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM05vWVhKbFpDMXJaWGtuS1NnblNVVmZVRkpQVkU4bktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJRzVoYldWektYdGNiaUFnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDaHZZbXBsWTNRcFhHNGdJQ0FnTENCcElDQWdJQ0FnUFNBd1hHNGdJQ0FnTENCeVpYTjFiSFFnUFNCYlhWeHVJQ0FnSUN3Z2EyVjVPMXh1SUNCbWIzSW9hMlY1SUdsdUlFOHBhV1lvYTJWNUlDRTlJRWxGWDFCU1QxUlBLV2hoY3loUExDQnJaWGtwSUNZbUlISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJQzh2SUVSdmJpZDBJR1Z1ZFcwZ1luVm5JQ1lnYUdsa1pHVnVJR3RsZVhOY2JpQWdkMmhwYkdVb2JtRnRaWE11YkdWdVozUm9JRDRnYVNscFppaG9ZWE1vVHl3Z2EyVjVJRDBnYm1GdFpYTmJhU3NyWFNrcGUxeHVJQ0FnSUg1aGNuSmhlVWx1WkdWNFQyWW9jbVZ6ZFd4MExDQnJaWGtwSUh4OElISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4wN0lpd2lMeThnTVRrdU1TNHlMakUwSUM4Z01UVXVNaTR6TGpFMElFOWlhbVZqZEM1clpYbHpLRThwWEc1MllYSWdKR3RsZVhNZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdGEyVjVjeTFwYm5SbGNtNWhiQ2NwWEc0Z0lDd2daVzUxYlVKMVowdGxlWE1nUFNCeVpYRjFhWEpsS0NjdUwxOWxiblZ0TFdKMVp5MXJaWGx6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMExtdGxlWE1nZkh3Z1puVnVZM1JwYjI0Z2EyVjVjeWhQS1h0Y2JpQWdjbVYwZFhKdUlDUnJaWGx6S0U4c0lHVnVkVzFDZFdkTFpYbHpLVHRjYm4wN0lpd2laWGh3YjNKMGN5NW1JRDBnZTMwdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhpYVhSdFlYQXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQmxiblZ0WlhKaFlteGxJQ0E2SUNFb1ltbDBiV0Z3SUNZZ01Ta3NYRzRnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUFoS0dKcGRHMWhjQ0FtSURJcExGeHVJQ0FnSUhkeWFYUmhZbXhsSUNBZ0lEb2dJU2hpYVhSdFlYQWdKaUEwS1N4Y2JpQWdJQ0IyWVd4MVpTQWdJQ0FnSUNBNklIWmhiSFZsWEc0Z0lIMDdYRzU5T3lJc0luWmhjaUJ6YUdGeVpXUWdQU0J5WlhGMWFYSmxLQ2N1TDE5emFHRnlaV1FuS1NnbmEyVjVjeWNwWEc0Z0lDd2dkV2xrSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmZFdsa0p5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR3RsZVNsN1hHNGdJSEpsZEhWeWJpQnphR0Z5WldSYmEyVjVYU0I4ZkNBb2MyaGhjbVZrVzJ0bGVWMGdQU0IxYVdRb2EyVjVLU2s3WEc1OU95SXNJblpoY2lCbmJHOWlZV3dnUFNCeVpYRjFhWEpsS0NjdUwxOW5iRzlpWVd3bktWeHVJQ0FzSUZOSVFWSkZSQ0E5SUNkZlgyTnZjbVV0YW5OZmMyaGhjbVZrWDE4blhHNGdJQ3dnYzNSdmNtVWdJRDBnWjJ4dlltRnNXMU5JUVZKRlJGMGdmSHdnS0dkc2IySmhiRnRUU0VGU1JVUmRJRDBnZTMwcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHJaWGtwZTF4dUlDQnlaWFIxY200Z2MzUnZjbVZiYTJWNVhTQjhmQ0FvYzNSdmNtVmJhMlY1WFNBOUlIdDlLVHRjYm4wN0lpd2lkbUZ5SUhSdlNXNTBaV2RsY2lBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdWRHVm5aWEluS1Z4dUlDQXNJRzFoZUNBZ0lDQWdJQ0E5SUUxaGRHZ3ViV0Y0WEc0Z0lDd2diV2x1SUNBZ0lDQWdJRDBnVFdGMGFDNXRhVzQ3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsdVpHVjRMQ0JzWlc1bmRHZ3BlMXh1SUNCcGJtUmxlQ0E5SUhSdlNXNTBaV2RsY2locGJtUmxlQ2s3WEc0Z0lISmxkSFZ5YmlCcGJtUmxlQ0E4SURBZ1B5QnRZWGdvYVc1a1pYZ2dLeUJzWlc1bmRHZ3NJREFwSURvZ2JXbHVLR2x1WkdWNExDQnNaVzVuZEdncE8xeHVmVHNpTENJdkx5QTNMakV1TkNCVWIwbHVkR1ZuWlhKY2JuWmhjaUJqWldsc0lDQTlJRTFoZEdndVkyVnBiRnh1SUNBc0lHWnNiMjl5SUQwZ1RXRjBhQzVtYkc5dmNqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnlaWFIxY200Z2FYTk9ZVTRvYVhRZ1BTQXJhWFFwSUQ4Z01DQTZJQ2hwZENBK0lEQWdQeUJtYkc5dmNpQTZJR05sYVd3cEtHbDBLVHRjYm4wN0lpd2lMeThnZEc4Z2FXNWtaWGhsWkNCdlltcGxZM1FzSUhSdlQySnFaV04wSUhkcGRHZ2dabUZzYkdKaFkyc2dabTl5SUc1dmJpMWhjbkpoZVMxc2FXdGxJRVZUTXlCemRISnBibWR6WEc1MllYSWdTVTlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJsdlltcGxZM1FuS1Z4dUlDQXNJR1JsWm1sdVpXUWdQU0J5WlhGMWFYSmxLQ2N1TDE5a1pXWnBibVZrSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUVsUFltcGxZM1FvWkdWbWFXNWxaQ2hwZENrcE8xeHVmVHNpTENJdkx5QTNMakV1TVRVZ1ZHOU1aVzVuZEdoY2JuWmhjaUIwYjBsdWRHVm5aWElnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYm5SbFoyVnlKeWxjYmlBZ0xDQnRhVzRnSUNBZ0lDQWdQU0JOWVhSb0xtMXBianRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0J5WlhSMWNtNGdhWFFnUGlBd0lEOGdiV2x1S0hSdlNXNTBaV2RsY2locGRDa3NJREI0TVdabVptWm1abVptWm1abVptWXBJRG9nTURzZ0x5OGdjRzkzS0RJc0lEVXpLU0F0SURFZ1BUMGdPVEF3TnpFNU9USTFORGMwTURrNU1WeHVmVHNpTENJdkx5QTNMakV1TVRNZ1ZHOVBZbXBsWTNRb1lYSm5kVzFsYm5RcFhHNTJZWElnWkdWbWFXNWxaQ0E5SUhKbGNYVnBjbVVvSnk0dlgyUmxabWx1WldRbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnlaWFIxY200Z1QySnFaV04wS0dSbFptbHVaV1FvYVhRcEtUdGNibjA3SWl3aUx5OGdOeTR4TGpFZ1ZHOVFjbWx0YVhScGRtVW9hVzV3ZFhRZ1d5d2dVSEpsWm1WeWNtVmtWSGx3WlYwcFhHNTJZWElnYVhOUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBjeTF2WW1wbFkzUW5LVHRjYmk4dklHbHVjM1JsWVdRZ2IyWWdkR2hsSUVWVE5pQnpjR1ZqSUhabGNuTnBiMjRzSUhkbElHUnBaRzRuZENCcGJYQnNaVzFsYm5RZ1FFQjBiMUJ5YVcxcGRHbDJaU0JqWVhObFhHNHZMeUJoYm1RZ2RHaGxJSE5sWTI5dVpDQmhjbWQxYldWdWRDQXRJR1pzWVdjZ0xTQndjbVZtWlhKeVpXUWdkSGx3WlNCcGN5QmhJSE4wY21sdVoxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ3dnVXlsN1hHNGdJR2xtS0NGcGMwOWlhbVZqZENocGRDa3BjbVYwZFhKdUlHbDBPMXh1SUNCMllYSWdabTRzSUhaaGJEdGNiaUFnYVdZb1V5QW1KaUIwZVhCbGIyWWdLR1p1SUQwZ2FYUXVkRzlUZEhKcGJtY3BJRDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdJV2x6VDJKcVpXTjBLSFpoYkNBOUlHWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzF4dUlDQnBaaWgwZVhCbGIyWWdLR1p1SUQwZ2FYUXVkbUZzZFdWUFppa2dQVDBnSjJaMWJtTjBhVzl1SnlBbUppQWhhWE5QWW1wbFkzUW9kbUZzSUQwZ1ptNHVZMkZzYkNocGRDa3BLWEpsZEhWeWJpQjJZV3c3WEc0Z0lHbG1LQ0ZUSUNZbUlIUjVjR1Z2WmlBb1ptNGdQU0JwZEM1MGIxTjBjbWx1WnlrZ1BUMGdKMloxYm1OMGFXOXVKeUFtSmlBaGFYTlBZbXBsWTNRb2RtRnNJRDBnWm00dVkyRnNiQ2hwZENrcEtYSmxkSFZ5YmlCMllXdzdYRzRnSUhSb2NtOTNJRlI1Y0dWRmNuSnZjaWhjSWtOaGJpZDBJR052Ym5abGNuUWdiMkpxWldOMElIUnZJSEJ5YVcxcGRHbDJaU0IyWVd4MVpWd2lLVHRjYm4wN0lpd2lkbUZ5SUdsa0lEMGdNRnh1SUNBc0lIQjRJRDBnVFdGMGFDNXlZVzVrYjIwb0tUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hMlY1S1h0Y2JpQWdjbVYwZFhKdUlDZFRlVzFpYjJ3b0p5NWpiMjVqWVhRb2EyVjVJRDA5UFNCMWJtUmxabWx1WldRZ1B5QW5KeUE2SUd0bGVTd2dKeWxmSnl3Z0tDc3JhV1FnS3lCd2VDa3VkRzlUZEhKcGJtY29NellwS1R0Y2JuMDdJaXdpTHk4Z01Ua3VNUzR6TGpFZ1QySnFaV04wTG1GemMybG5iaWgwWVhKblpYUXNJSE52ZFhKalpTbGNiblpoY2lBa1pYaHdiM0owSUQwZ2NtVnhkV2x5WlNnbkxpOWZaWGh3YjNKMEp5azdYRzVjYmlSbGVIQnZjblFvSkdWNGNHOXlkQzVUSUNzZ0pHVjRjRzl5ZEM1R0xDQW5UMkpxWldOMEp5d2dlMkZ6YzJsbmJqb2djbVZ4ZFdseVpTZ25MaTlmYjJKcVpXTjBMV0Z6YzJsbmJpY3BmU2s3SWl3aWRtRnlJRloxWlNBdkx5QnNZWFJsSUdKcGJtUmNiblpoY2lCMlpYSnphVzl1WEc1MllYSWdiV0Z3SUQwZ2QybHVaRzkzTGw5ZlZsVkZYMGhQVkY5TlFWQmZYeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNsY2JuWmhjaUJwYm5OMFlXeHNaV1FnUFNCbVlXeHpaVnh1ZG1GeUlHbHpRbkp2ZDNObGNtbG1lU0E5SUdaaGJITmxYRzUyWVhJZ2FXNXBkRWh2YjJ0T1lXMWxJRDBnSjJKbFptOXlaVU55WldGMFpTZGNibHh1Wlhod2IzSjBjeTVwYm5OMFlXeHNJRDBnWm5WdVkzUnBiMjRnS0haMVpTd2dZbkp2ZDNObGNtbG1lU2tnZTF4dUlDQnBaaUFvYVc1emRHRnNiR1ZrS1NCeVpYUjFjbTVjYmlBZ2FXNXpkR0ZzYkdWa0lEMGdkSEoxWlZ4dVhHNGdJRloxWlNBOUlIWjFaUzVmWDJWelRXOWtkV3hsSUQ4Z2RuVmxMbVJsWm1GMWJIUWdPaUIyZFdWY2JpQWdkbVZ5YzJsdmJpQTlJRloxWlM1MlpYSnphVzl1TG5Od2JHbDBLQ2N1SnlrdWJXRndLRTUxYldKbGNpbGNiaUFnYVhOQ2NtOTNjMlZ5YVdaNUlEMGdZbkp2ZDNObGNtbG1lVnh1WEc0Z0lDOHZJR052YlhCaGRDQjNhWFJvSUR3Z01pNHdMakF0WVd4d2FHRXVOMXh1SUNCcFppQW9WblZsTG1OdmJtWnBaeTVmYkdsbVpXTjVZMnhsU0c5dmEzTXVhVzVrWlhoUFppZ25hVzVwZENjcElENGdMVEVwSUh0Y2JpQWdJQ0JwYm1sMFNHOXZhMDVoYldVZ1BTQW5hVzVwZENkY2JpQWdmVnh1WEc0Z0lHVjRjRzl5ZEhNdVkyOXRjR0YwYVdKc1pTQTlJSFpsY25OcGIyNWJNRjBnUGowZ01seHVJQ0JwWmlBb0lXVjRjRzl5ZEhNdVkyOXRjR0YwYVdKc1pTa2dlMXh1SUNBZ0lHTnZibk52YkdVdWQyRnliaWhjYmlBZ0lDQWdJQ2RiU0UxU1hTQlpiM1VnWVhKbElIVnphVzVuSUdFZ2RtVnljMmx2YmlCdlppQjJkV1V0YUc5MExYSmxiRzloWkMxaGNHa2dkR2hoZENCcGN5QW5JQ3RjYmlBZ0lDQWdJQ2R2Ym14NUlHTnZiWEJoZEdsaWJHVWdkMmwwYUNCV2RXVXVhbk1nWTI5eVpTQmVNaTR3TGpBdUoxeHVJQ0FnSUNsY2JpQWdJQ0J5WlhSMWNtNWNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJSEpsWTI5eVpDQm1iM0lnWVNCb2IzUWdiVzlrZFd4bExDQjNhR2xqYUNCclpXVndjeUIwY21GamF5QnZaaUJwZEhNZ1kyOXVjM1J5ZFdOMGIzSmNiaUFxSUdGdVpDQnBibk4wWVc1alpYTmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2FXUmNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2Y0hScGIyNXpYRzRnS2k5Y2JseHVaWGh3YjNKMGN5NWpjbVZoZEdWU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb2FXUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2RtRnlJRU4wYjNJZ1BTQnVkV3hzWEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUVOMGIzSWdQU0J2Y0hScGIyNXpYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlFTjBiM0l1YjNCMGFXOXVjMXh1SUNCOVhHNGdJRzFoYTJWUGNIUnBiMjV6U0c5MEtHbGtMQ0J2Y0hScGIyNXpLVnh1SUNCdFlYQmJhV1JkSUQwZ2UxeHVJQ0FnSUVOMGIzSTZJRloxWlM1bGVIUmxibVFvYjNCMGFXOXVjeWtzWEc0Z0lDQWdhVzV6ZEdGdVkyVnpPaUJiWFZ4dUlDQjlYRzU5WEc1Y2JpOHFLbHh1SUNvZ1RXRnJaU0JoSUVOdmJYQnZibVZ1ZENCdmNIUnBiMjV6SUc5aWFtVmpkQ0JvYjNRdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdsa1hHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiM0IwYVc5dWMxeHVJQ292WEc1Y2JtWjFibU4wYVc5dUlHMWhhMlZQY0hScGIyNXpTRzkwSUNocFpDd2diM0IwYVc5dWN5a2dlMXh1SUNCcGJtcGxZM1JJYjI5cktHOXdkR2x2Ym5Nc0lHbHVhWFJJYjI5clRtRnRaU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUcxaGNGdHBaRjB1YVc1emRHRnVZMlZ6TG5CMWMyZ29kR2hwY3lsY2JpQWdmU2xjYmlBZ2FXNXFaV04wU0c5dmF5aHZjSFJwYjI1ekxDQW5ZbVZtYjNKbFJHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjJZWElnYVc1emRHRnVZMlZ6SUQwZ2JXRndXMmxrWFM1cGJuTjBZVzVqWlhOY2JpQWdJQ0JwYm5OMFlXNWpaWE11YzNCc2FXTmxLR2x1YzNSaGJtTmxjeTVwYm1SbGVFOW1LSFJvYVhNcExDQXhLVnh1SUNCOUtWeHVmVnh1WEc0dktpcGNiaUFxSUVsdWFtVmpkQ0JoSUdodmIyc2dkRzhnWVNCb2IzUWdjbVZzYjJGa1lXSnNaU0JqYjIxd2IyNWxiblFnYzI4Z2RHaGhkRnh1SUNvZ2QyVWdZMkZ1SUd0bFpYQWdkSEpoWTJzZ2IyWWdhWFF1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzl3ZEdsdmJuTmNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J1WVcxbFhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JvYjI5clhHNGdLaTljYmx4dVpuVnVZM1JwYjI0Z2FXNXFaV04wU0c5dmF5QW9iM0IwYVc5dWN5d2dibUZ0WlN3Z2FHOXZheWtnZTF4dUlDQjJZWElnWlhocGMzUnBibWNnUFNCdmNIUnBiMjV6VzI1aGJXVmRYRzRnSUc5d2RHbHZibk5iYm1GdFpWMGdQU0JsZUdsemRHbHVaMXh1SUNBZ0lEOGdRWEp5WVhrdWFYTkJjbkpoZVNobGVHbHpkR2x1WnlsY2JpQWdJQ0FnSUQ4Z1pYaHBjM1JwYm1jdVkyOXVZMkYwS0dodmIyc3BYRzRnSUNBZ0lDQTZJRnRsZUdsemRHbHVaeXdnYUc5dmExMWNiaUFnSUNBNklGdG9iMjlyWFZ4dWZWeHVYRzVtZFc1amRHbHZiaUIwY25sWGNtRndJQ2htYmlrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLR2xrTENCaGNtY3BJSHRjYmlBZ0lDQjBjbmtnZXlCbWJpaHBaQ3dnWVhKbktTQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtHVXBYRzRnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvSjFOdmJXVjBhR2x1WnlCM1pXNTBJSGR5YjI1bklHUjFjbWx1WnlCV2RXVWdZMjl0Y0c5dVpXNTBJR2h2ZEMxeVpXeHZZV1F1SUVaMWJHd2djbVZzYjJGa0lISmxjWFZwY21Wa0xpY3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRITXVjbVZ5Wlc1a1pYSWdQU0IwY25sWGNtRndLR1oxYm1OMGFXOXVJQ2hwWkN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0IyWVhJZ2NtVmpiM0prSUQwZ2JXRndXMmxrWFZ4dUlDQnBaaUFvZEhsd1pXOW1JRzl3ZEdsdmJuTWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCdmNIUnBiMjV6SUQwZ2IzQjBhVzl1Y3k1dmNIUnBiMjV6WEc0Z0lIMWNiaUFnY21WamIzSmtMa04wYjNJdWIzQjBhVzl1Y3k1eVpXNWtaWElnUFNCdmNIUnBiMjV6TG5KbGJtUmxjbHh1SUNCeVpXTnZjbVF1UTNSdmNpNXZjSFJwYjI1ekxuTjBZWFJwWTFKbGJtUmxja1p1Y3lBOUlHOXdkR2x2Ym5NdWMzUmhkR2xqVW1WdVpHVnlSbTV6WEc0Z0lISmxZMjl5WkM1cGJuTjBZVzVqWlhNdWMyeHBZMlVvS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNocGJuTjBZVzVqWlNrZ2UxeHVJQ0FnSUdsdWMzUmhibU5sTGlSdmNIUnBiMjV6TG5KbGJtUmxjaUE5SUc5d2RHbHZibk11Y21WdVpHVnlYRzRnSUNBZ2FXNXpkR0Z1WTJVdUpHOXdkR2x2Ym5NdWMzUmhkR2xqVW1WdVpHVnlSbTV6SUQwZ2IzQjBhVzl1Y3k1emRHRjBhV05TWlc1a1pYSkdibk5jYmlBZ0lDQnBibk4wWVc1alpTNWZjM1JoZEdsalZISmxaWE1nUFNCYlhTQXZMeUJ5WlhObGRDQnpkR0YwYVdNZ2RISmxaWE5jYmlBZ0lDQnBibk4wWVc1alpTNGtabTl5WTJWVmNHUmhkR1VvS1Z4dUlDQjlLVnh1ZlNsY2JseHVaWGh3YjNKMGN5NXlaV3h2WVdRZ1BTQjBjbmxYY21Gd0tHWjFibU4wYVc5dUlDaHBaQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQnBaaUFvZEhsd1pXOW1JRzl3ZEdsdmJuTWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCdmNIUnBiMjV6SUQwZ2IzQjBhVzl1Y3k1dmNIUnBiMjV6WEc0Z0lIMWNiaUFnYldGclpVOXdkR2x2Ym5OSWIzUW9hV1FzSUc5d2RHbHZibk1wWEc0Z0lIWmhjaUJ5WldOdmNtUWdQU0J0WVhCYmFXUmRYRzRnSUdsbUlDaDJaWEp6YVc5dVd6RmRJRHdnTWlrZ2UxeHVJQ0FnSUM4dklIQnlaWE5sY25abElIQnlaU0F5TGpJZ1ltVm9ZWFpwYjNJZ1ptOXlJR2RzYjJKaGJDQnRhWGhwYmlCb1lXNWtiR2x1WjF4dUlDQWdJSEpsWTI5eVpDNURkRzl5TG1WNGRHVnVaRTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpYRzRnSUgxY2JpQWdkbUZ5SUc1bGQwTjBiM0lnUFNCeVpXTnZjbVF1UTNSdmNpNXpkWEJsY2k1bGVIUmxibVFvYjNCMGFXOXVjeWxjYmlBZ2NtVmpiM0prTGtOMGIzSXViM0IwYVc5dWN5QTlJRzVsZDBOMGIzSXViM0IwYVc5dWMxeHVJQ0J5WldOdmNtUXVRM1J2Y2k1amFXUWdQU0J1WlhkRGRHOXlMbU5wWkZ4dUlDQnlaV052Y21RdVEzUnZjaTV3Y205MGIzUjVjR1VnUFNCdVpYZERkRzl5TG5CeWIzUnZkSGx3WlZ4dUlDQnBaaUFvYm1WM1EzUnZjaTV5Wld4bFlYTmxLU0I3WEc0Z0lDQWdMeThnZEdWdGNHOXlZWEo1SUdkc2IySmhiQ0J0YVhocGJpQnpkSEpoZEdWbmVTQjFjMlZrSUdsdUlEd2dNaTR3TGpBdFlXeHdhR0V1Tmx4dUlDQWdJRzVsZDBOMGIzSXVjbVZzWldGelpTZ3BYRzRnSUgxY2JpQWdjbVZqYjNKa0xtbHVjM1JoYm1ObGN5NXpiR2xqWlNncExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ2FXWWdLR2x1YzNSaGJtTmxMaVIyYm05a1pTQW1KaUJwYm5OMFlXNWpaUzRrZG01dlpHVXVZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lDQWdhVzV6ZEdGdVkyVXVKSFp1YjJSbExtTnZiblJsZUhRdUpHWnZjbU5sVlhCa1lYUmxLQ2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kyOXVjMjlzWlM1M1lYSnVLQ2RTYjI5MElHOXlJRzFoYm5WaGJHeDVJRzF2ZFc1MFpXUWdhVzV6ZEdGdVkyVWdiVzlrYVdacFpXUXVJRVoxYkd3Z2NtVnNiMkZrSUhKbGNYVnBjbVZrTGljcFhHNGdJQ0FnZlZ4dUlDQjlLVnh1ZlNsY2JpSmRmUT09In0=
