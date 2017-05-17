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

var _index3 = require('./module/listing/index.vue');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        fezPage: _page2.default,
        fezJumbotron: _index2.default,
        fezListing: _index4.default
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('fez-page',[_c('fez-jumbotron'),_vm._v(" "),_c('fez-listing')],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-499cf388", __vue__options__)
  } else {
    hotAPI.reload("data-v-499cf388", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./module/jumbotron/index.vue":3,"./module/listing/index.vue":5,"public/module/common/page.vue":11,"vue-hot-reload-api":72}],3:[function(require,module,exports){
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
    hotAPI.createRecord("data-v-f81b2f74", __vue__options__)
  } else {
    hotAPI.reload("data-v-f81b2f74", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":4,"babel-runtime/helpers/extends":14,"vue-hot-reload-api":72}],4:[function(require,module,exports){
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
            resolve(_demoData2.default.list.jumbotron);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":7}],5:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            listing: []
        };
    },

    methods: {
        listingInit: function listingInit() {
            var _vm = this;
            _service2.default.renderData().then(function (data) {
                _vm.listing = data;
            });
        }
    },
    created: function created() {
        this.listingInit();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},_vm._l((_vm.listing),function(item){return _c('div',{staticClass:"col-md-4"},[_c('h2',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.desc))]),_vm._v(" "),_c('p',[_c('a',{staticClass:"btn btn-default",attrs:{"href":'article.html?id=' + item.id,"role":"button"}},[_vm._v("Detail")])])])})),_vm._v(" "),_c('hr')])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-031142de", __vue__options__)
  } else {
    hotAPI.reload("data-v-031142de", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":6,"vue-hot-reload-api":72}],6:[function(require,module,exports){
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
        var rtnData = [];
        return _q2.default.Promise(function (resolve, reject) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {

                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    var dataItem = {};

                    dataItem.title = v.title;
                    dataItem.desc = v.desc;
                    dataItem.id = v.title;

                    rtnData.push(dataItem);
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

},{"babel-runtime/core-js/get-iterator":12,"public/demo-data":7}],7:[function(require,module,exports){
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
    hotAPI.rerender("data-v-3b1087eb", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":8,"vue-hot-reload-api":72}],10:[function(require,module,exports){
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

},{"./common":8,"babel-runtime/helpers/extends":14,"vue-hot-reload-api":72}],11:[function(require,module,exports){
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

},{"public/module/common/footer.vue":9,"public/module/common/header.vue":10,"vue-hot-reload-api":72}],12:[function(require,module,exports){
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
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
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
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
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

//# sourceMappingURL=list.js.map
