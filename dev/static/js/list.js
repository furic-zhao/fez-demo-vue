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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvbGlzdC9pbmRleC5qcyIsInNyYy92aWV3cy9saXN0L3NyYy92aWV3cy9saXN0L2luZGV4LnZ1ZT9iZGMzM2ZiMiIsInNyYy92aWV3cy9saXN0L21vZHVsZS9qdW1ib3Ryb24vc3JjL3ZpZXdzL2xpc3QvbW9kdWxlL2p1bWJvdHJvbi9pbmRleC52dWU/MTg2MTI2MTAiLCJzcmMvdmlld3MvbGlzdC9tb2R1bGUvanVtYm90cm9uL3NlcnZpY2UuanMiLCJzcmMvdmlld3MvbGlzdC9tb2R1bGUvbGlzdGluZy9zcmMvdmlld3MvbGlzdC9tb2R1bGUvbGlzdGluZy9pbmRleC52dWU/NDYyNTA3ZDgiLCJzcmMvdmlld3MvbGlzdC9tb2R1bGUvbGlzdGluZy9zZXJ2aWNlLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9kZW1vLWRhdGEuanMiLCJzcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vY29tbW9uLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXIudnVlP2FmOWNmM2FjIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9oZWFkZXIudnVlPzcyNjM2ZDQ0Iiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL3NyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9wYWdlLnZ1ZT8xY2EyYjE2NSIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsa0JBQVE7QUFDSixRQUFJLE1BREE7QUFFSixZQUFRLGdCQUFDLENBQUQ7QUFBQSxlQUFPLGtCQUFQO0FBQUE7QUFGSixDQUFSOzs7Ozs7Ozs7Ozs7O0FDSUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBOzs7OztBQVhBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1lBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFEQTtBQVVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUF2QkE7Ozs7O0FBZEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsSUFBUixDQUFhLFNBQXJCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7Ozs7O0FDU2Y7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFoQkE7Ozs7O0FBZkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDWCxjQURXLHdCQUNFO0FBQ1QsWUFBSSxVQUFVLEVBQWQ7QUFDQSxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWxDLGdFQUFjLG1CQUFRLE1BQXRCLDRHQUE4QjtBQUFBLHdCQUFyQixDQUFxQjs7QUFDMUIsd0JBQUksV0FBVyxFQUFmOztBQUVBLDZCQUFTLEtBQVQsR0FBaUIsRUFBRSxLQUFuQjtBQUNBLDZCQUFTLElBQVQsR0FBZ0IsRUFBRSxJQUFsQjtBQUNBLDZCQUFTLEVBQVQsR0FBYyxFQUFFLEtBQWhCOztBQUVBLDRCQUFRLElBQVIsQ0FBYSxRQUFiO0FBQ0g7QUFWaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZbEMsb0JBQVEsT0FBUjtBQUNILFNBYk0sQ0FBUDtBQWNIO0FBakJVLEM7Ozs7Ozs7Ozs7QUNKZixJQUFJLFNBQVMsQ0FBQztBQUNWLFdBQU8sUUFERztBQUVWLFVBQU0sMkVBRkk7QUFHVixrd0VBSFU7QUEyRFYsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNEQSxDQUFELEVBK0RWO0FBQ0MsV0FBTyxLQURSO0FBRUMsVUFBTSwrREFGUDtBQUdDLHFoQkFIRDtBQVlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFaWCxDQS9EVSxFQStFVjtBQUNDLFdBQU8sTUFEUjtBQUVDLFVBQU0sZ0VBRlA7QUFHQyxpY0FIRDtBQVFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFSWCxDQS9FVSxFQTJGVjtBQUNDLFdBQU8sWUFEUjtBQUVDLFVBQU0sbUVBRlA7QUFHQyx5ZkFIRDtBQWFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFiWCxDQTNGVSxFQTRHVjtBQUNDLFdBQU8sT0FEUjtBQUVDLFVBQU0sMkVBRlA7QUFHQyxpdktBSEQ7QUEyQ0MsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNDWCxDQTVHVSxFQTJKVjtBQUNDLFdBQU8sYUFEUjtBQUVDLFVBQU0sd0VBRlA7QUFHQyw4YkFIRDtBQUlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFKWCxDQTNKVSxDQUFiOztBQXFLQSxJQUFJLFFBQVE7QUFDUixhQUFTLGlCQUREO0FBRVIsZUFBVztBQUNQLGVBQU8scUJBREE7QUFFUCxpQkFBUyw2Q0FGRjtBQUdQLGdCQUFRO0FBQ0osNkRBREk7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFGSCxDQUFaOztBQVlBLElBQUksT0FBTztBQUNQLGVBQVc7QUFDUCxlQUFPLG9CQURBO0FBRVAsaUJBQVMsOENBRkY7QUFHUCxnQkFBUTtBQUNKLGtCQUFNLFFBREY7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFESixDQUFYOztBQVdBLElBQUksU0FBUztBQUNULGNBQVUsY0FERDs7QUFHVCxhQUFTLENBQUM7QUFDTixjQUFNLElBREE7QUFFTixjQUFNO0FBRkEsS0FBRCxFQUdOO0FBQ0MsY0FBTSxTQURQO0FBRUMsY0FBTTtBQUZQLEtBSE0sQ0FIQTs7QUFXVCxnQkFBWTtBQVhILENBQWI7O2tCQWNlO0FBQ1gsYUFBUyxLQURFO0FBRVgsWUFBUSxJQUZHO0FBR1gsY0FBVSxNQUhDO0FBSVgsY0FBVTtBQUpDLEM7Ozs7Ozs7Ozs7QUMxTWY7Ozs7QUFFQTs7Ozs7O2tCQUVlO0FBQ1gsYUFBUyxtQkFBTTtBQUNYLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsT0FBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQUxVO0FBTVgsY0FBVSxvQkFBTTtBQUNaLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsUUFBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQVZVO0FBV1gsZ0JBQVksc0JBQU07QUFDZCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLFVBQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFmVSxDOzs7Ozs7Ozs7Ozs7O0FDTWY7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBZkE7Ozs7O0FBWEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JBOzs7O0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUEzQkE7Ozs7O0FBMUJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVUE7Ozs7QUFDQTs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7O0FBYkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vaW5kZXgudnVlJ1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgcmVuZGVyOiAoaCkgPT4gaChBcHApXHJcbn0pXHJcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZmV6LXBhZ2U+XG4gICAgICAgIDxmZXotanVtYm90cm9uPjwvZmV6LWp1bWJvdHJvbj5cbiAgICAgICAgPGZlei1saXN0aW5nPjwvZmV6LWxpc3Rpbmc+XG4gICAgPC9mZXotcGFnZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGZlelBhZ2UgZnJvbSAncHVibGljL21vZHVsZS9jb21tb24vcGFnZS52dWUnXG5pbXBvcnQgZmV6SnVtYm90cm9uIGZyb20gJy4vbW9kdWxlL2p1bWJvdHJvbi9pbmRleC52dWUnXG5pbXBvcnQgZmV6TGlzdGluZyBmcm9tICcuL21vZHVsZS9saXN0aW5nL2luZGV4LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgZmV6UGFnZSxcbiAgICAgICAgZmV6SnVtYm90cm9uLFxuICAgICAgICBmZXpMaXN0aW5nXG4gICAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDEgdi10ZXh0PVwianVtYm90cm9uRGF0YS50aXRsZVwiPjwvaDE+XG4gICAgICAgICAgICA8cCB2LXRleHQ9XCJqdW1ib3Ryb25EYXRhLmNvbnRlbnRcIj48L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA6aHJlZj1cImp1bWJvdHJvbkRhdGEuYnV0dG9uLmhyZWZcIiByb2xlPVwiYnV0dG9uXCIgdi1odG1sPVwianVtYm90cm9uRGF0YS5idXR0b24ubmFtZVwiPjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGp1bWJvdHJvbkRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYGAsXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGp1bWJvdHJvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IF92bSA9IHRoaXNcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLnJlbmRlckRhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5qdW1ib3Ryb24gPSBPYmplY3QuYXNzaWduKF92bS5qdW1ib3Ryb25EYXRhLCBkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmp1bWJvdHJvbigpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmxpc3QuanVtYm90cm9uKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0aW5nXCI+XG4gICAgICAgICAgICAgICAgPGgyPnt7aXRlbS50aXRsZX19PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57e2l0ZW0uZGVzY319PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgOmhyZWY9XCInYXJ0aWNsZS5odG1sP2lkPScgKyBpdGVtLmlkXCIgcm9sZT1cImJ1dHRvblwiPkRldGFpbDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxocj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdGluZzogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlzdGluZ0luaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubGlzdGluZyA9IGRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5saXN0aW5nSW5pdCgpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIGxldCBydG5EYXRhID0gW11cbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHYgb2YgQXBpRGF0YS5mcmFtZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUl0ZW0gPSB7fVxuXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0udGl0bGUgPSB2LnRpdGxlXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0uZGVzYyA9IHYuZGVzY1xuICAgICAgICAgICAgICAgIGRhdGFJdGVtLmlkID0gdi50aXRsZVxuXG4gICAgICAgICAgICAgICAgcnRuRGF0YS5wdXNoKGRhdGFJdGVtKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJ0bkRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwibGV0IGZyYW1lcyA9IFt7XG4gICAgdGl0bGU6IFwiTm9kZWpzXCIsXG4gICAgZGVzYzogXCJGRVog5p6E5bu65ZyoIE5vZGVKUyDln7rkuo4gQ2hyb21lIFY4IOW8leaTjueahCBKYXZhU2NyaXB0IOi/kOihjOeOr+Wig++8jOWFtuS6i+S7tumpseWKqOmdnumYu+WhnueahOeJueaAp++8jOaegeWFtuW/q+mAn+eahOe8luivkeWJjeerr+WQhOenjei1hOa6kFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGlkPVwiaG9tZS1pbnRyb1wiPlxuXG4gICAgICAgIDxwPk5vZGUuanPCriBpcyBhIEphdmFTY3JpcHQgcnVudGltZSBidWlsdCBvbiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vdjgvXCI+Q2hyb21lJ3MgVjggSmF2YVNjcmlwdCBlbmdpbmU8L2E+LlxuTm9kZS5qcyB1c2VzIGFuIGV2ZW50LWRyaXZlbiwgbm9uLWJsb2NraW5nIEkvTyBtb2RlbCB0aGF0IG1ha2VzIGl0XG5saWdodHdlaWdodCBhbmQgZWZmaWNpZW50LiBOb2RlLmpzJyBwYWNrYWdlIGVjb3N5c3RlbSwgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIj5ucG08L2E+LCBpcyB0aGUgbGFyZ2VzdCBlY29zeXN0ZW0gb2Ygb3Blblxuc291cmNlIGxpYnJhcmllcyBpbiB0aGUgd29ybGQuPC9wPlxuXG5cblxuICAgICAgICA8aDIgaWQ9XCJob21lLWRvd25sb2FkaGVhZFwiIGRhdGEtZGwtbG9jYWw9XCJEb3dubG9hZCBmb3JcIj5Eb3dubG9hZCBmb3IgbWFjT1MgKHg2NCk8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ni4xMC4wL25vZGUtdjYuMTAuMC5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY2LjEwLjAgTFRTXCIgZGF0YS12ZXJzaW9uPVwidjYuMTAuMFwiPlxuICAgICAgICAgICAgdjYuMTAuMCBMVFNcbiAgICAgICAgICAgIDxzbWFsbD5SZWNvbW1lbmRlZCBGb3IgTW9zdCBVc2Vyczwvc21hbGw+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNi5tZCM2LjEwLjBcIj5DaGFuZ2Vsb2c8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXY2LngvZG9jcy9hcGkvXCI+QVBJIERvY3M8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1kb3dubG9hZGJsb2NrXCI+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ny43LjEvbm9kZS12Ny43LjEucGtnXCIgY2xhc3M9XCJob21lLWRvd25sb2FkYnV0dG9uXCIgdGl0bGU9XCJEb3dubG9hZCB2Ny43LjEgQ3VycmVudFwiIGRhdGEtdmVyc2lvbj1cInY3LjcuMVwiPlxuICAgICAgICAgICAgICB2Ny43LjEgQ3VycmVudFxuICAgICAgICAgICAgICA8c21hbGw+TGF0ZXN0IEZlYXR1cmVzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZW4vZG93bmxvYWQvY3VycmVudC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNy5tZCM3LjcuMVwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjcueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3IgaGF2ZSBhIGxvb2sgYXQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL0xUUyNsdHMtc2NoZWR1bGVcIj5MVFMgc2NoZWR1bGUuPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9ub2RlanMub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIk5QTVwiLFxuICAgIGRlc2M6IFwiRkVaIOS9v+eUqCBOUE0g5o6l5YWl5YWo55CD5pyA5aSn55qE5byA5rqQ55Sf5oCB57O757uf77yM5YW35aSH5peg6ZmQ55qE5Yqf6IO95omp5bGV6IO95Yqb77yM5Y+v5pW05ZCI5Zu96ZmF5YmN5rK/55qE5byA5rqQ5qGG5p6277yM6YCC5bqU556s5oGv5LiH5Y+Y55qE5oqA5pyv5pu05pu/XCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cInRpdGxlIGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExXCI+XG4gICAgICAgICAgQnVpbGQgYW1hemluZyB0aGluZ3NcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJoNSBlbS1kZWZhdWx0IHR5cGUtbmV1dHJhbC0xMSBwYnhsXCI+XG4gICAgICAgICAgbnBtIGlzIHRoZSBwYWNrYWdlIG1hbmFnZXIgZm9yIEphdmFTY3JpcHQuIEZpbmQsIHNoYXJlLCBhbmQgcmV1c2VcbiAgICAgICAgICBwYWNrYWdlcyBvZiBjb2RlIGZyb20gaHVuZHJlZHMgb2YgdGhvdXNhbmRzIG9mIGRldmVsb3BlcnMg4oCUIGFuZFxuICAgICAgICAgIGFzc2VtYmxlIHRoZW0gaW4gcG93ZXJmdWwgbmV3IHdheXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaWQ9XCJtYWluLWN0YVwiIGhyZWY9XCIjcGFuZS1ob21lcGFnZS1wcmljaW5nXCIgY2xhc3M9XCJidG4gYnRuLWhpZ2hsaWdodC0zIG1ybFwiIGRhdGEtZXZlbnQtbmFtZT1cImhvbWVwYWdlLWhlcm8tY3RhXCI+R2V0IHN0YXJ0ZWQ8L2E+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJHdWxwXCIsXG4gICAgZGVzYzogXCJGRVog5pW05ZCIR3VscOeahOS8l+WkmuaPkuS7tu+8jOe8luivkeOAgeS8mOWMluWSjOe7hOe7h+WJjeerr+WkjeadgueahOaooeWdl+WPiumdmeaAgei1hOa6kO+8jOWWneedgOWPr+S5kOWEv+OAgeWTvOedgOWwj+absuWEv++8jOiHquWKqOWMluWujOaIkOWJjeerr+Wkp+mHj+mHjeWkjeW3peS9nFwiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+QXV0b21hdGUgYW5kIGVuaGFuY2UgeW91ciB3b3JrZmxvdzwvaDE+PGgyIGNsYXNzPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgZ3VscCBpcyBhIHRvb2xraXQgZm9yIGF1dG9tYXRpbmcgcGFpbmZ1bCBvciB0aW1lLWNvbnN1bWluZyB0YXNrcyBpbiB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LCBzbyB5b3UgY2FuIHN0b3AgbWVzc2luZyBhcm91bmQgYW5kIGJ1aWxkIHNvbWV0aGluZy5cbiAgICAgICAgPC9oMj48ZGl2IGNsYXNzPVwiY3Rhc1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiY3Rhcy1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1bHBqcy9ndWxwL2Jsb2IvbWFzdGVyL2RvY3MvZ2V0dGluZy1zdGFydGVkLm1kXCI+R2V0IFN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vZ3VscGpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJCcm93c2VyaWZ5XCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJpZnkg5qih5Z2X5YyW57uE57uH5ZKM566h55CG6aG555uu55qE5ZCE5Liq5Yqf6IO95qih5Z2X77yM5p6B5aSn5o+Q5Y2H6aG555uu55qE5Y+v57u05oqk5oCn44CB5Yqf6IO95aSN55So5oCn77yM5bm25a6e546w56ev5pyo5byP55qE5pCt5bu6572R6aG1XCIsXG4gICAgY29udGVudDogYDxzZWN0aW9uIGlkPVwidG9wLWhvbWUtc2VjdGlvblwiIGNsYXNzPVwidG9wLXNlY3Rpb24gY29sb3ItYVwiPlxuICAgICAgPGRpdiBpZD1cInRvcC1ob21lLWltYWdlXCI+PC9kaXY+XG5cbiAgICAgICA8aDMgaWQ9XCJ0b3Atc3VidGl0bGVcIiBjbGFzcz1cImxhcmdlLWZvbnRcIj5Ccm93c2VyaWZ5IGxldHMgeW91IHJlcXVpcmUoPHNwYW4gY2xhc3M9XCJjb2xvci1kXCI+J21vZHVsZXMnPC9zcGFuPikgaW4gdGhlIGJyb3dzZXIgYnkgYnVuZGxpbmcgdXAgYWxsIG9mIHlvdXIgZGVwZW5kZW5jaWVzLjwvaDM+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL25vZGUtYnJvd3NlcmlmeSN1c2FnZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wLWJ1dHRvblwiIGlkPVwidG9wLWJ1dHRvbjJcIj5cbiAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9hPlxuICAgIDwvc2VjdGlvbj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2Jyb3dzZXJpZnkub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvd2VyXCIsXG4gICAgZGVzYzogXCJGRVog5Y+v6YWN572u5L2/55SoIEJvd2VyIOaQnOe0ouOAgeWuieijheOAgeabtOaWsOWSjOWNuOi9veWmgkphdmFTY3JpcHTjgIFDU1PkuYvnsbvnmoTnvZHnu5zotYTmupDvvIzpgJrov4foh6rliqjljJbms6jlhaXmioDmnK/lroznvo7op6PlhrPlpI3mnYLnmoTmoYbmnrbljIXnrqHnkIbpl67pophcIixcbiAgICBjb250ZW50OiBgPGRpdiBjbGFzcz1cIm1haW5cIj5cbjxwIGNsYXNzPVwibGVhZFwiPldlYiBzaXRlcyBhcmUgbWFkZSBvZiBsb3RzIG9mIHRoaW5ncyDigJQgZnJhbWV3b3JrcywgbGlicmFyaWVzLCBhc3NldHMsIGFuZCB1dGlsaXRpZXMuIEJvd2VyIG1hbmFnZXMgYWxsIHRoZXNlIHRoaW5ncyBmb3IgeW91LjwvcD5cbjxwPktlZXBpbmcgdHJhY2sgb2YgYWxsIHRoZXNlIHBhY2thZ2VzIGFuZCBtYWtpbmcgc3VyZSB0aGV5IGFyZSB1cCB0byBkYXRlIChvciBzZXQgdG8gdGhlIHNwZWNpZmljIHZlcnNpb25zIHlvdSBuZWVkKSBpcyB0cmlja3kuIEJvd2VyIHRvIHRoZSByZXNjdWUhPC9wPlxuPHA+Qm93ZXIgY2FuIG1hbmFnZSBjb21wb25lbnRzIHRoYXQgY29udGFpbiBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGZvbnRzIG9yIGV2ZW4gaW1hZ2UgZmlsZXMuIEJvd2VyIGRvZXNu4oCZdCBjb25jYXRlbmF0ZSBvciBtaW5pZnkgY29kZSBvciBkbyBhbnl0aGluZyBlbHNlIC0gaXQganVzdCBpbnN0YWxscyB0aGUgcmlnaHQgdmVyc2lvbnMgb2YgdGhlIHBhY2thZ2VzIHlvdSBuZWVkIGFuZCB0aGVpciBkZXBlbmRlbmNpZXMuPC9wPlxuPHA+VG8gPGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIj5nZXQgc3RhcnRlZDwvYT4sIEJvd2VyIHdvcmtzIGJ5IGZldGNoaW5nIGFuZCBpbnN0YWxsaW5nIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGZyb20gYWxsIG92ZXIsIHRha2luZyBjYXJlIG9mIGh1bnRpbmcsIGZpbmRpbmcsIGRvd25sb2FkaW5nLCBhbmQgc2F2aW5nIHRoZSBzdHVmZiB5b3XigJlyZSBsb29raW5nIGZvci4gQm93ZXIga2VlcHMgdHJhY2sgb2YgdGhlc2UgcGFja2FnZXMgaW4gYSBtYW5pZmVzdCBmaWxlLCA8YSBocmVmPVwiL2RvY3MvY3JlYXRpbmctcGFja2FnZXMvI2Jvd2VyanNvblwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPjwvYT4uIEhvdyB5b3UgdXNlIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGlzIHVwIHRvIHlvdS4gQm93ZXIgcHJvdmlkZXMgaG9va3MgdG8gZmFjaWxpdGF0ZSB1c2luZyBwYWNrYWdlcyBpbiB5b3VyIDxhIGhyZWY9XCIvZG9jcy90b29sc1wiPnRvb2xzIGFuZCB3b3JrZmxvd3M8L2E+LjwvcD5cbjxwPkJvd2VyIGlzIG9wdGltaXplZCBmb3IgdGhlIGZyb250LWVuZC4gSWYgbXVsdGlwbGUgcGFja2FnZXMgZGVwZW5kIG9uIGEgcGFja2FnZSAtIGpRdWVyeSBmb3IgZXhhbXBsZSAtIEJvd2VyIHdpbGwgZG93bmxvYWQgalF1ZXJ5IGp1c3Qgb25jZS4gVGhpcyBpcyBrbm93biBhcyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaCBhbmQgaXQgaGVscHMgcmVkdWNlIHBhZ2UgbG9hZC48L3A+XG48aDIgaWQ9XCJpbnN0YWxsLWJvd2VyXCI+PGEgaHJlZj1cIiNpbnN0YWxsLWJvd2VyXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBCb3dlcjwvaDI+XG48cD5Cb3dlciBpcyBhIGNvbW1hbmQgbGluZSB1dGlsaXR5LiBJbnN0YWxsIGl0IHdpdGggbnBtLjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtYmFzaFwiIGRhdGEtbGFuZz1cImJhc2hcIj48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+bnBtIGluc3RhbGwgLWcgYm93ZXI8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48cD5Cb3dlciByZXF1aXJlcyA8YSBocmVmPVwiaHR0cDovL25vZGVqcy5vcmcvXCI+bm9kZSwgbnBtPC9hPiBhbmQgPGEgaHJlZj1cImh0dHA6Ly9naXQtc2NtLm9yZ1wiPmdpdDwvYT4uPC9wPlxuPHA+TGF0ZXN0IHJlbGVhc2U6IDxhIGhyZWY9XCJcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvYm93ZXIuc3ZnP21heEFnZT0yNTkyMDAwXCIgYWx0PVwiYm93ZXIgdmVyc2lvblwiPjwvYT48L3A+XG48cD5Gb3IgdHJvdWJsZXNob290aW5nIGluc3RhbGxhdGlvbiBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLCByZWFkIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jvd2VyL2Jvd2VyL3dpa2kvVHJvdWJsZXNob290aW5nXCI+dHJvdWJsZXNob290aW5nPC9hPiB3aWtpIHBhZ2UuPC9wPlxuPGgyIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+PGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuPGgzIGlkPVwiaW5zdGFsbC1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjaW5zdGFsbC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkluc3RhbGwgcGFja2FnZXM8L2gzPlxuPHA+SW5zdGFsbCBwYWNrYWdlcyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkjaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uIEJvd2VyIGluc3RhbGxzIHBhY2thZ2VzIHRvIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlcl9jb21wb25lbnRzLzwvY29kZT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsICZsdDtwYWNrYWdlJmd0OzwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkEgcGFja2FnZSBjYW4gYmUgYSBHaXRIdWIgc2hvcnRoYW5kLCBhIEdpdCBlbmRwb2ludCwgYSBVUkwsIGFuZCBtb3JlLiBSZWFkIG1vcmUgYWJvdXQgPGEgaHJlZj1cIi9kb2NzL2FwaS8jaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiY1wiPiMgaW5zdGFsbHMgdGhlIHByb2plY3QgZGVwZW5kZW5jaWVzIGxpc3RlZCBpbiBib3dlci5qc29uPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGxcbjxzcGFuIGNsYXNzPVwiY1wiPiMgcmVnaXN0ZXJlZCBwYWNrYWdlPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwganF1ZXJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdEh1YiBzaG9ydGhhbmQ8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBkZXNhbmRyby9tYXNvbnJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdCBlbmRwb2ludDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGdpdDovL2dpdGh1Yi5jb20vdXNlci9wYWNrYWdlLmdpdFxuPHNwYW4gY2xhc3M9XCJjXCI+IyBVUkw8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBodHRwOi8vZXhhbXBsZS5jb20vc2NyaXB0LmpzPC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgzIGlkPVwic2VhcmNoLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzZWFyY2gtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5TZWFyY2ggcGFja2FnZXM8L2gzPlxuPHA+PGEgaHJlZj1cIi9zZWFyY2hcIj5TZWFyY2ggQm93ZXIgcGFja2FnZXM8L2E+IGFuZCBmaW5kIHRoZSByZWdpc3RlcmVkIHBhY2thZ2UgbmFtZXMgZm9yIHlvdXIgZmF2b3JpdGUgcHJvamVjdHMuPC9wPlxuPGgzIGlkPVwic2F2ZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjc2F2ZS1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNhdmUgcGFja2FnZXM8L2gzPlxuPHA+Q3JlYXRlIGEgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IGZpbGUgZm9yIHlvdXIgcGFja2FnZSB3aXRoIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluaXQ8L2NvZGU+PC9hPi48L3A+XG48cD5UaGVuIHNhdmUgbmV3IGRlcGVuZGVuY2llcyB0byB5b3VyIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPiB3aXRoIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsIFBBQ0tBR0UgLS1zYXZlPC9jb2RlPjwvcD5cbjxoMyBpZD1cInVzZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjdXNlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+VXNlIHBhY2thZ2VzPC9oMz5cbjxwPkhvdyB5b3UgdXNlIHBhY2thZ2VzIGlzIHVwIHRvIHlvdS4gV2UgcmVjb21tZW5kIHlvdSB1c2UgQm93ZXIgdG9nZXRoZXIgd2l0aCA8YSBocmVmPVwiL2RvY3MvdG9vbHMvXCI+R3J1bnQsIFJlcXVpcmVKUywgWWVvbWFuLCBhbmQgbG90cyBvZiBvdGhlciB0b29sczwvYT4gb3IgYnVpbGQgeW91ciBvd24gd29ya2Zsb3cgd2l0aCA8YSBocmVmPVwiL2RvY3MvYXBpL1wiPnRoZSBBUEk8L2E+LiBZb3UgY2FuIGFsc28gdXNlIHRoZSBpbnN0YWxsZWQgcGFja2FnZXMgZGlyZWN0bHksIGxpa2UgdGhpcywgaW4gdGhlIGNhc2Ugb2YgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmpxdWVyeTwvY29kZT46PC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCIgZGF0YS1sYW5nPVwiaHRtbFwiPjxzcGFuIGNsYXNzPVwibnRcIj4mbHQ7c2NyaXB0IDwvc3Bhbj48c3BhbiBjbGFzcz1cIm5hXCI+c3JjPTwvc3Bhbj48c3BhbiBjbGFzcz1cInNcIj5cImJvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1wiPC9zcGFuPjxzcGFuIGNsYXNzPVwibnRcIj4mZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7PC9zcGFuPjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxoMiBpZD1cInR3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIj48YSBocmVmPVwiI3R3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Ud2l0dGVyIHVwZGF0ZXMgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiPkBib3dlcjwvYT48L2gyPlxuPHA+PGEgY2xhc3M9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYm93ZXJcIiBkYXRhLXdpZGdldC1pZD1cIjQ4MDM3NzI5MTM2OTc1NDYyNVwiPlR3ZWV0cyBieSBAYm93ZXI8L2E+XG48L3A+XG5cbjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jvd2VyLmlvL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvcndzZXJTeW5jXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJzeW5jIOiuqea1j+iniOWZqOWunuaXtuW/q+mAn+eahOWTjeW6lOWJjeerr+WQhOenjeaWh+S7tueahOabtOaUueW5tuiHquWKqOWIt+aWsOmhtemdou+8jOS6puWPr+WunuaXtuWQjOatpeWQhOS4que7iOerr++8jOaPkOmrmOiHs+WwkTMwJeeahOW8gOWPkeaViOeOh1wiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJob29rXCI+VGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy48L2gxPjxwIGNsYXNzPVwicm9uc2VhbFwiPkl04oCZcyB3aWNrZWQtZmFzdCBhbmQgdG90YWxseSBmcmVlLjwvcD48cCBjbGFzcz1cInZpZGVvXCI+PGEgY2xhc3M9XCJ2aWRlb19fbGlua1wiIGhyZWY9XCIjXCI+PC9hPjwvcD48cCBjbGFzcz1cImhvdy10b1wiPjwvcD48cCBjbGFzcz1cImhvdy10b19fY29tbWFuZFwiPm5wbSBpbnN0YWxsIC1nIGJyb3dzZXItc3luYzwvcD48cCBjbGFzcz1cImN0YVwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIGhyZWY9XCIjaW5zdGFsbFwiIHRpdGxlPVwiR2V0IFN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L3A+PGRpdiBjbGFzcz1cInBsYXllclwiPjxwPidib25qb3VyPC9wPjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jyb3dzZXJzeW5jLmlvL1wiXG4gICAgfVxufV1cblxubGV0IGluZGV4ID0ge1xuICAgIGZlemRlc2M6IFwiRkVaIOWJjeerr+aooeWdl+WMluW3peeoi+W8gOWPkeahhuaetlwiLFxuICAgIGp1bWJvdHJvbjoge1xuICAgICAgICB0aXRsZTogXCJIZWxsbywgRkVaIEFuZCBWdWUhXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi6L+Z5piv5LiA5Liq5L2/55SoIEZFWiDmnoTlu7rnmoTliY3nq6/mqKHlnZfljJblvIDlj5HnpLrkvovvvIzmvJTnpLrkuobln7rkuo5WdWXljZXmlofku7bnu4Tku7bnmoTlvIDlj5Hnu5PmnoTjgIJcIixcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBuYW1lOiBgPGkgY2xhc3M9XCJmYSBmYS1naXRodWItYWx0XCI+PC9pPiBHaXRIdWJgLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vZnVyaWMtemhhby9mZXpcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgbGlzdCA9IHtcbiAgICBqdW1ib3Ryb246IHtcbiAgICAgICAgdGl0bGU6IFwiRkVaIEFuZCBWdWUgRnJhbWUhXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi6L+Z5piv5LiA5LiqRkVa5pW05ZCIVnVl55qE5YiX6KGo5bGV56S66aG177yM6K+354K55Ye75LiL6Z2i5YiX6KGo55qEIERldGFpbCDmjInpkq7ov5vlhaXor6bmg4XpobXmtY/op4hcIixcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcIuafpeeci+abtOWkmuS/oeaBr1wiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwOi8vZmV6Lmhlc3R1ZHkuY29tXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGNvbW1vbiA9IHtcbiAgICBzaXRlTmFtZTogXCJGRVogVnVlIERFTU9cIixcblxuICAgIG5hdkRhdGE6IFt7XG4gICAgICAgIG5hbWU6IFwi6aaW6aG1XCIsXG4gICAgICAgIGhyZWY6IFwiaW5kZXguaHRtbFwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkZFWuWfuuacrOaetuaehFwiLFxuICAgICAgICBocmVmOiBcImxpc3QuaHRtbFwiXG4gICAgfV0sXG5cbiAgICBmb290ZXJUZXh0OiBcIsKpIDIwMTcgRkVaIOWJjeerr+aooeWdl+WMluW3peeoi+W8gOWPkeahhuaetiBDcmVhdGVkIGJ5IEZ1cmljLnpoYW9cIlxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgXCJpbmRleFwiOiBpbmRleCxcbiAgICBcImxpc3RcIjogbGlzdCxcbiAgICBcImZyYW1lc1wiOiBmcmFtZXMsXG4gICAgXCJjb21tb25cIjogY29tbW9uXG59XG4iLCJpbXBvcnQgUSBmcm9tICdxJ1xuXG5pbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2TGlzdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24ubmF2RGF0YSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHNpdGVOYW1lOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5zaXRlTmFtZSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGZvb3RlclRleHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLmZvb3RlclRleHQpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICAgIDxmb290ZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLWxlZnRcIj57e3RleHR9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0XCI+XG5cdFx0PGkgY2xhc3M9XCJpY29uIGljb24td2VpeGluXCI+PC9pPlxuXHRcdDxpIGNsYXNzPVwiaWNvbiBpY29uLXdlaWJvXCI+PC9pPlxuXHQ8L3NwYW4+XG4gICAgPC9mb290ZXI+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY29tbW9uJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXHR0ZXh0OlwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZm9vdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLmZvb3RlclRleHQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnRleHQgPSBkYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgXHR0aGlzLmZvb3RlcigpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+e3toZWFkZXJEYXRhLnNpdGVOYW1lfX08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gaGVhZGVyRGF0YS5uYXZMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIml0ZW0uaHJlZlwiPnt7aXRlbS5uYW1lfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLS8ubmF2LWNvbGxhcHNlIC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgUSBmcm9tICdxJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2l0ZU5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hdkxpc3Q6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoZWFkZXJEYXRhSW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IF92bSA9IHRoaXNcbiAgICAgICAgICAgICAgICBRLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2Uuc2l0ZU5hbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZS5uYXZMaXN0KClcbiAgICAgICAgICAgICAgICBdKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBydG5EYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZU5hbWU6IGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZMaXN0OiBkYXRhWzFdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmhlYWRlckRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBydG5EYXRhKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyRGF0YUluaXQoKVxuICAgICAgICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8IS0tIG5hdiAtLT5cbiAgICAgICAgPGZlei1oZWFkZXI+PC9mZXotaGVhZGVyPlxuICAgICAgICA8IS0tIGp1bWJvdHJvbiAtLT5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8ZmV6LWZvb3Rlcj48L2Zlei1mb290ZXI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBmZXpIZWFkZXIgZnJvbSAncHVibGljL21vZHVsZS9jb21tb24vaGVhZGVyLnZ1ZSdcbmltcG9ydCBmZXpGb290ZXIgZnJvbSAncHVibGljL21vZHVsZS9jb21tb24vZm9vdGVyLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgZmV6SGVhZGVyLFxuICAgICAgICBmZXpGb290ZXJcbiAgICB9XG59XG48L3NjcmlwdD5cbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBPYmplY3QuY3JlYXRlKG51bGwpXG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgcmV0dXJuXG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBWdWUuZXh0ZW5kKG9wdGlvbnMpLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH0pXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcCAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHsgZm4oaWQsIGFyZykgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW10gLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgfSlcbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICB9XG4gIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmRtbGxkM012YkdsemRDOXBibVJsZUM1cWN5SXNJbk55WXk5MmFXVjNjeTlzYVhOMEwzTnlZeTkyYVdWM2N5OXNhWE4wTDJsdVpHVjRMbloxWlQ5aVpHTXpNMlppTWlJc0luTnlZeTkyYVdWM2N5OXNhWE4wTDIxdlpIVnNaUzlxZFcxaWIzUnliMjR2YzNKakwzWnBaWGR6TDJ4cGMzUXZiVzlrZFd4bEwycDFiV0p2ZEhKdmJpOXBibVJsZUM1MmRXVS9NVGcyTVRJMk1UQWlMQ0p6Y21NdmRtbGxkM012YkdsemRDOXRiMlIxYkdVdmFuVnRZbTkwY205dUwzTmxjblpwWTJVdWFuTWlMQ0p6Y21NdmRtbGxkM012YkdsemRDOXRiMlIxYkdVdmJHbHpkR2x1Wnk5emNtTXZkbWxsZDNNdmJHbHpkQzl0YjJSMWJHVXZiR2x6ZEdsdVp5OXBibVJsZUM1MmRXVS9ORFl5TlRBM1pEZ2lMQ0p6Y21NdmRtbGxkM012YkdsemRDOXRiMlIxYkdVdmJHbHpkR2x1Wnk5elpYSjJhV05sTG1weklpd2ljM0pqTDNacFpYZHpMM0IxWW14cFl5OWtaVzF2TFdSaGRHRXVhbk1pTENKemNtTXZkbWxsZDNNdmNIVmliR2xqTDIxdlpIVnNaUzlqYjIxdGIyNHZZMjl0Ylc5dUxtcHpJaXdpYzNKakwzWnBaWGR6TDNCMVlteHBZeTl0YjJSMWJHVXZZMjl0Ylc5dUwzTnlZeTkyYVdWM2N5OXdkV0pzYVdNdmJXOWtkV3hsTDJOdmJXMXZiaTltYjI5MFpYSXVkblZsUDJGbU9XTm1NMkZqSWl3aWMzSmpMM1pwWlhkekwzQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMM055WXk5MmFXVjNjeTl3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5b1pXRmtaWEl1ZG5WbFB6Y3lOak0yWkRRMElpd2ljM0pqTDNacFpYZHpMM0IxWW14cFl5OXRiMlIxYkdVdlkyOXRiVzl1TDNOeVl5OTJhV1YzY3k5d2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOXdZV2RsTG5aMVpUOHhZMkV5WWpFMk5TSXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWlZV0psYkMxeWRXNTBhVzFsTDJOdmNtVXRhbk12WjJWMExXbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMkpoWW1Wc0xYSjFiblJwYldVdlkyOXlaUzFxY3k5dlltcGxZM1F2WVhOemFXZHVMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJKaFltVnNMWEoxYm5ScGJXVXZhR1ZzY0dWeWN5OWxlSFJsYm1SekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOW1iaTluWlhRdGFYUmxjbUYwYjNJdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyWnVMMjlpYW1WamRDOWhjM05wWjI0dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyRXRablZ1WTNScGIyNHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWVc0dGIySnFaV04wTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5aGNuSmhlUzFwYm1Oc2RXUmxjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWTJ4aGMzTnZaaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWTI5bUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpiM0psTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5amRIZ3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlJsWm1sdVpXUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlJsYzJOeWFYQjBiM0p6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5a2IyMHRZM0psWVhSbExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWxiblZ0TFdKMVp5MXJaWGx6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bGVIQnZjblF1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJaaGFXeHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTluYkc5aVlXd3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmhoY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFHbGtaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYUhSdGJDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhV1U0TFdSdmJTMWtaV1pwYm1VdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHZZbXBsWTNRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHpMVzlpYW1WamRDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhWFJsY2kxamNtVmhkR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJsMFpYSXRaR1ZtYVc1bExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXBkR1Z5TFhOMFpYQXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmwwWlhKaGRHOXljeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYkdsaWNtRnllUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV0Z6YzJsbmJpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXTnlaV0YwWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdSd0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdFpIQnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaMjl3Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdkd2J5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXdGxlWE10YVc1MFpYSnVZV3d1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDI5aWFtVmpkQzFyWlhsekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdGNHbGxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl3Y205d1pYSjBlUzFrWlhOakxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXlaV1JsWm1sdVpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZjMlYwTFhSdkxYTjBjbWx1WnkxMFlXY3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM05vWVhKbFpDMXJaWGt1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNOb1lYSmxaQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYzNSeWFXNW5MV0YwTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXBibVJsZUM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRhVzUwWldkbGNpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZkRzh0YVc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZEc4dGJHVnVaM1JvTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXZZbXBsWTNRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzUnZMWEJ5YVcxcGRHbDJaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZFdsa0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTNhM011YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0l0YldWMGFHOWtMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMk52Y21VdVoyVjBMV2wwWlhKaGRHOXlMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMlZ6Tmk1aGNuSmhlUzVwZEdWeVlYUnZjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlsY3pZdWIySnFaV04wTG1GemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlsY3pZdWMzUnlhVzVuTG1sMFpYSmhkRzl5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDNkbFlpNWtiMjB1YVhSbGNtRmliR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdmRuVmxMV2h2ZEMxeVpXeHZZV1F0WVhCcEwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3TzBGRFFVRTdPenM3UVVGRFFUczdPenM3TzBGQlJVRXNhMEpCUVZFN1FVRkRTaXhSUVVGSkxFMUJSRUU3UVVGRlNpeFpRVUZSTEdkQ1FVRkRMRU5CUVVRN1FVRkJRU3hsUVVGUExHdENRVUZRTzBGQlFVRTdRVUZHU2l4RFFVRlNPenM3T3pzN096czdPenM3TzBGRFNVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRklRVHRCUVVSQk96czdPenRCUVZoQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTFsQk96czdPenM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVpCTzBGQlNFRTdRVUZFUVR0QlFWVkJPenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCVGtFN1FVRlJRVHRCUVVOQk8wRkJRMEU3UVVGMlFrRTdPenM3TzBGQlpFRTdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMEZCT3pzN08wRkJSVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR05CUkZjc2QwSkJRMFU3UVVGRFZDeGxRVUZQTEZsQlFVVXNUMEZCUml4RFFVRlZMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVllzUlVGQmNVSTdRVUZEYkVNc2IwSkJRVkVzYlVKQlFWRXNTVUZCVWl4RFFVRmhMRk5CUVhKQ08wRkJRMGdzVTBGR1RTeERRVUZRTzBGQlIwZzdRVUZNVlN4RE96czdPenM3T3pzN096czdPMEZEVTJZN096czdPenM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZFUVR0QlFVZEJPenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCVGtFN1FVRlJRVHRCUVVOQk8wRkJRMEU3UVVGb1FrRTdPenM3TzBGQlprRTdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOQlFUczdPenRCUVVWQk96czdPenM3YTBKQlJXVTdRVUZEV0N4alFVUlhMSGRDUVVORk8wRkJRMVFzV1VGQlNTeFZRVUZWTEVWQlFXUTdRVUZEUVN4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdPMEZCUld4RExHZEZRVUZqTEcxQ1FVRlJMRTFCUVhSQ0xEUkhRVUU0UWp0QlFVRkJMSGRDUVVGeVFpeERRVUZ4UWpzN1FVRkRNVUlzZDBKQlFVa3NWMEZCVnl4RlFVRm1PenRCUVVWQkxEWkNRVUZUTEV0QlFWUXNSMEZCYVVJc1JVRkJSU3hMUVVGdVFqdEJRVU5CTERaQ1FVRlRMRWxCUVZRc1IwRkJaMElzUlVGQlJTeEpRVUZzUWp0QlFVTkJMRFpDUVVGVExFVkJRVlFzUjBGQll5eEZRVUZGTEV0QlFXaENPenRCUVVWQkxEUkNRVUZSTEVsQlFWSXNRMEZCWVN4UlFVRmlPMEZCUTBnN1FVRldhVU03UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRlpiRU1zYjBKQlFWRXNUMEZCVWp0QlFVTklMRk5CWWswc1EwRkJVRHRCUVdOSU8wRkJha0pWTEVNN096czdPenM3T3pzN1FVTktaaXhKUVVGSkxGTkJRVk1zUTBGQlF6dEJRVU5XTEZkQlFVOHNVVUZFUnp0QlFVVldMRlZCUVUwc01rVkJSa2s3UVVGSFZpeHJkMFZCU0ZVN1FVRXlSRllzWTBGQlZUdEJRVU5PTEdOQlFVMHNUVUZFUVR0QlFVVk9MR05CUVUwN1FVRkdRVHRCUVRORVFTeERRVUZFTEVWQkswUldPMEZCUTBNc1YwRkJUeXhMUVVSU08wRkJSVU1zVlVGQlRTd3JSRUZHVUR0QlFVZERMSEZvUWtGSVJEdEJRVmxETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGYVdDeERRUzlFVlN4RlFTdEZWanRCUVVORExGZEJRVThzVFVGRVVqdEJRVVZETEZWQlFVMHNaMFZCUmxBN1FVRkhReXhwWTBGSVJEdEJRVkZETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGU1dDeERRUzlGVlN4RlFUSkdWanRCUVVORExGZEJRVThzV1VGRVVqdEJRVVZETEZWQlFVMHNiVVZCUmxBN1FVRkhReXg1WmtGSVJEdEJRV0ZETEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVGaVdDeERRVE5HVlN4RlFUUkhWanRCUVVORExGZEJRVThzVDBGRVVqdEJRVVZETEZWQlFVMHNNa1ZCUmxBN1FVRkhReXhwZGt0QlNFUTdRVUV5UTBNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFUTkRXQ3hEUVRWSFZTeEZRVEpLVmp0QlFVTkRMRmRCUVU4c1lVRkVVanRCUVVWRExGVkJRVTBzZDBWQlJsQTdRVUZIUXl3NFlrRklSRHRCUVVsRExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRktXQ3hEUVROS1ZTeERRVUZpT3p0QlFYRkxRU3hKUVVGSkxGRkJRVkU3UVVGRFVpeGhRVUZUTEdsQ1FVUkVPMEZCUlZJc1pVRkJWenRCUVVOUUxHVkJRVThzY1VKQlJFRTdRVUZGVUN4cFFrRkJVeXcyUTBGR1JqdEJRVWRRTEdkQ1FVRlJPMEZCUTBvc05rUkJSRWs3UVVGRlNpeHJRa0ZCVFR0QlFVWkdPMEZCU0VRN1FVRkdTQ3hEUVVGYU96dEJRVmxCTEVsQlFVa3NUMEZCVHp0QlFVTlFMR1ZCUVZjN1FVRkRVQ3hsUVVGUExHOUNRVVJCTzBGQlJWQXNhVUpCUVZNc09FTkJSa1k3UVVGSFVDeG5Ra0ZCVVR0QlFVTktMR3RDUVVGTkxGRkJSRVk3UVVGRlNpeHJRa0ZCVFR0QlFVWkdPMEZCU0VRN1FVRkVTaXhEUVVGWU96dEJRVmRCTEVsQlFVa3NVMEZCVXp0QlFVTlVMR05CUVZVc1kwRkVSRHM3UVVGSFZDeGhRVUZUTEVOQlFVTTdRVUZEVGl4alFVRk5MRWxCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0VzUzBGQlJDeEZRVWRPTzBGQlEwTXNZMEZCVFN4VFFVUlFPMEZCUlVNc1kwRkJUVHRCUVVaUUxFdEJTRTBzUTBGSVFUczdRVUZYVkN4blFrRkJXVHRCUVZoSUxFTkJRV0k3TzJ0Q1FXTmxPMEZCUTFnc1lVRkJVeXhMUVVSRk8wRkJSVmdzV1VGQlVTeEpRVVpITzBGQlIxZ3NZMEZCVlN4TlFVaERPMEZCU1Znc1kwRkJWVHRCUVVwRExFTTdPenM3T3pzN096czdRVU14VFdZN096czdRVUZGUVRzN096czdPMnRDUVVWbE8wRkJRMWdzWVVGQlV5eHRRa0ZCVFR0QlFVTllMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVDBGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVV4Vk8wRkJUVmdzWTBGQlZTeHZRa0ZCVFR0QlFVTmFMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVVVGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVZaVk8wRkJWMWdzWjBKQlFWa3NjMEpCUVUwN1FVRkRaQ3hsUVVGUExGbEJRVVVzVDBGQlJpeERRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZc1JVRkJjVUk3UVVGRGJFTXNiMEpCUVZFc2JVSkJRVkVzVFVGQlVpeERRVUZsTEZWQlFYWkNPMEZCUTBnc1UwRkdUU3hEUVVGUU8wRkJSMGc3UVVGbVZTeERPenM3T3pzN096czdPenM3TzBGRFRXWTdPenM3T3pzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRVFUdEJRVWRCT3p0QlFVTkJPMEZCUTBFN1FVRkJRVHM3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVeEJPMEZCVDBFN1FVRkRRVHRCUVVOQk8wRkJaa0U3T3pzN08wRkJXRUU3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRkMEpCT3pzN08wRkJRMEU3T3pzN096czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJSa0U3UVVGRVFUdEJRVTFCT3p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJTVUU3UVVGRFFUdEJRVU5CTzBGQlJrRTdRVUZKUVR0QlFVTkJPMEZCUlVFN1FVRmtRVHRCUVdkQ1FUdEJRVU5CTzBGQlEwRTdRVUV6UWtFN096czdPMEZCTVVKQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRWVUU3T3pzN1FVRkRRVHM3T3pzN096dEJRVWRCTzBGQlEwRTdRVUZEUVR0QlFVWkJPMEZCUkVFN096czdPMEZCWWtFN1FVRkJRVHM3T3pzN096czdPenM3T3pzN08wRkRRVUU3TzBGRFFVRTdPMEZEUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU4wUWtFN1FVRkRRVHRCUVVOQk96dEJRMFpCTzBGQlEwRTdPMEZEUkVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdPMEZEUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRjRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRkRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUczdRVU5FUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTI1Q1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBwQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwaEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwNUJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMGhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRelZFUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5PUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOSVFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFCQk96dEJRMEZCTzBGQlEwRTdRVUZEUVRzN1FVTkdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHM3UVVOR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTmFRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTnlSVUU3UVVGRFFUdEJRVU5CT3p0QlEwWkJPenRCUTBGQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOb1EwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRM3BEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5tUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOYVFUczdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOYVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMmhDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5PUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFCQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTB4Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRhRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOTVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTB4Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMWhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5XUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExQkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwNUJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEycERRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5JUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyaENRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5hUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z1pTaDBMRzRzY2lsN1puVnVZM1JwYjI0Z2N5aHZMSFVwZTJsbUtDRnVXMjlkS1h0cFppZ2hkRnR2WFNsN2RtRnlJR0U5ZEhsd1pXOW1JSEpsY1hWcGNtVTlQVndpWm5WdVkzUnBiMjVjSWlZbWNtVnhkV2x5WlR0cFppZ2hkU1ltWVNseVpYUjFjbTRnWVNodkxDRXdLVHRwWmlocEtYSmxkSFZ5YmlCcEtHOHNJVEFwTzNaaGNpQm1QVzVsZHlCRmNuSnZjaWhjSWtOaGJtNXZkQ0JtYVc1a0lHMXZaSFZzWlNBblhDSXJieXRjSWlkY0lpazdkR2h5YjNjZ1ppNWpiMlJsUFZ3aVRVOUVWVXhGWDA1UFZGOUdUMVZPUkZ3aUxHWjlkbUZ5SUd3OWJsdHZYVDE3Wlhod2IzSjBjenA3ZlgwN2RGdHZYVnN3WFM1allXeHNLR3d1Wlhod2IzSjBjeXhtZFc1amRHbHZiaWhsS1h0MllYSWdiajEwVzI5ZFd6RmRXMlZkTzNKbGRIVnliaUJ6S0c0L2JqcGxLWDBzYkN4c0xtVjRjRzl5ZEhNc1pTeDBMRzRzY2lsOWNtVjBkWEp1SUc1YmIxMHVaWGh3YjNKMGMzMTJZWElnYVQxMGVYQmxiMllnY21WeGRXbHlaVDA5WENKbWRXNWpkR2x2Ymx3aUppWnlaWEYxYVhKbE8yWnZjaWgyWVhJZ2J6MHdPMjg4Y2k1c1pXNW5kR2c3YnlzcktYTW9jbHR2WFNrN2NtVjBkWEp1SUhOOUtTSXNJbWx0Y0c5eWRDQldkV1VnWm5KdmJTQW5kblZsSjF4eVhHNXBiWEJ2Y25RZ1FYQndJR1p5YjIwZ0p5NHZhVzVrWlhndWRuVmxKMXh5WEc1Y2NseHVibVYzSUZaMVpTaDdYSEpjYmlBZ0lDQmxiRG9nSnlOaGNIQW5MRnh5WEc0Z0lDQWdjbVZ1WkdWeU9pQW9hQ2tnUFQ0Z2FDaEJjSEFwWEhKY2JuMHBYSEpjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnSUNBOFptVjZMWEJoWjJVK1hHNGdJQ0FnSUNBZ0lEeG1aWG90YW5WdFltOTBjbTl1UGp3dlptVjZMV3AxYldKdmRISnZiajVjYmlBZ0lDQWdJQ0FnUEdabGVpMXNhWE4wYVc1blBqd3ZabVY2TFd4cGMzUnBibWMrWEc0Z0lDQWdQQzltWlhvdGNHRm5aVDVjYmp3dmRHVnRjR3hoZEdVK1hHNDhjMk55YVhCMFBseHVhVzF3YjNKMElHWmxlbEJoWjJVZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmNHRm5aUzUyZFdVblhHNXBiWEJ2Y25RZ1ptVjZTblZ0WW05MGNtOXVJR1p5YjIwZ0p5NHZiVzlrZFd4bEwycDFiV0p2ZEhKdmJpOXBibVJsZUM1MmRXVW5YRzVwYlhCdmNuUWdabVY2VEdsemRHbHVaeUJtY205dElDY3VMMjF2WkhWc1pTOXNhWE4wYVc1bkwybHVaR1Y0TG5aMVpTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHTnZiWEJ2Ym1WdWRITTZJSHRjYmlBZ0lDQWdJQ0FnWm1WNlVHRm5aU3hjYmlBZ0lDQWdJQ0FnWm1WNlNuVnRZbTkwY205dUxGeHVJQ0FnSUNBZ0lDQm1aWHBNYVhOMGFXNW5YRzRnSUNBZ2ZWeHVmVnh1UEM5elkzSnBjSFErWEc0aUxDSThkR1Z0Y0d4aGRHVStYRzRnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbXAxYldKdmRISnZibHdpUGx4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lZMjl1ZEdGcGJtVnlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThhREVnZGkxMFpYaDBQVndpYW5WdFltOTBjbTl1UkdGMFlTNTBhWFJzWlZ3aVBqd3ZhREUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjQ0IyTFhSbGVIUTlYQ0pxZFcxaWIzUnliMjVFWVhSaExtTnZiblJsYm5SY0lqNDhMM0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCamJHRnpjejFjSW1KMGJpQmlkRzR0Y0hKcGJXRnllU0JpZEc0dGJHZGNJaUE2YUhKbFpqMWNJbXAxYldKdmRISnZia1JoZEdFdVluVjBkRzl1TG1oeVpXWmNJaUJ5YjJ4bFBWd2lZblYwZEc5dVhDSWdkaTFvZEcxc1BWd2lhblZ0WW05MGNtOXVSR0YwWVM1aWRYUjBiMjR1Ym1GdFpWd2lQand2WVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2JpQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQQzlrYVhZK1hHNDhMM1JsYlhCc1lYUmxQbHh1UEhOamNtbHdkRDVjYm1sdGNHOXlkQ0JUWlhKMmFXTmxJR1p5YjIwZ0p5NHZjMlZ5ZG1salpTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmhkR0VvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3AxYldKdmRISnZia1JoZEdFNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0oxZEhSdmJqb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1lHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9jbVZtT2lCY0lsd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHMWxkR2h2WkhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdwMWJXSnZkSEp2YmpvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUY5MmJTQTlJSFJvYVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCVFpYSjJhV05sTG5KbGJtUmxja1JoZEdFb0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjkyYlM1cWRXMWliM1J5YjI0Z1BTQlBZbXBsWTNRdVlYTnphV2R1S0Y5MmJTNXFkVzFpYjNSeWIyNUVZWFJoTENCa1lYUmhLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOeVpXRjBaV1FvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtcDFiV0p2ZEhKdmJpZ3BYRzRnSUNBZ0lDQWdJSDFjYm4xY2Jqd3ZjMk55YVhCMFBseHVJaXdpYVcxd2IzSjBJRUZ3YVVSaGRHRWdabkp2YlNBbmNIVmliR2xqTDJSbGJXOHRaR0YwWVNkY2JseHVhVzF3YjNKMElGRWdabkp2YlNBbmNTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lISmxibVJsY2tSaGRHRW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2hCY0dsRVlYUmhMbXhwYzNRdWFuVnRZbTkwY205dUtWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNibjFjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnSUNBOFpHbDJJR05zWVhOelBWd2lZMjl1ZEdGcGJtVnlYQ0krWEc0Z0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnliM2RjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKamIyd3RiV1F0TkZ3aUlIWXRabTl5UFZ3aWFYUmxiU0JwYmlCc2FYTjBhVzVuWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHZ3lQbnQ3YVhSbGJTNTBhWFJzWlgxOVBDOW9NajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0Q1N2UybDBaVzB1WkdWelkzMTlQQzl3UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1BqeGhJR05zWVhOelBWd2lZblJ1SUdKMGJpMWtaV1poZFd4MFhDSWdPbWh5WldZOVhDSW5ZWEowYVdOc1pTNW9kRzFzUDJsa1BTY2dLeUJwZEdWdExtbGtYQ0lnY205c1pUMWNJbUoxZEhSdmJsd2lQa1JsZEdGcGJEd3ZZVDQ4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lEeG9jajVjYmlBZ0lDQThMMlJwZGo1Y2Jqd3ZkR1Z0Y0d4aGRHVStYRzQ4YzJOeWFYQjBQbHh1YVcxd2IzSjBJRk5sY25acFkyVWdabkp2YlNBbkxpOXpaWEoyYVdObEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHRjBZU2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR2x6ZEdsdVp6b2dXMTFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYldWMGFHOWtjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR2x6ZEdsdVowbHVhWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JmZG0wZ1BTQjBhR2x6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVTJWeWRtbGpaUzV5Wlc1a1pYSkVZWFJoS0NrdWRHaGxiaWdvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmZkbTB1YkdsemRHbHVaeUE5SUdSaGRHRmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqY21WaGRHVmtLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c2FYTjBhVzVuU1c1cGRDZ3BYRzRnSUNBZ0lDQWdJSDFjYm4xY2Jqd3ZjMk55YVhCMFBseHVJaXdpYVcxd2IzSjBJRUZ3YVVSaGRHRWdabkp2YlNBbmNIVmliR2xqTDJSbGJXOHRaR0YwWVNkY2JseHVhVzF3YjNKMElGRWdabkp2YlNBbmNTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lISmxibVJsY2tSaGRHRW9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlkRzVFWVhSaElEMGdXMTFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhZZ2IyWWdRWEJwUkdGMFlTNW1jbUZ0WlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWkdGMFlVbDBaVzBnUFNCN2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVVsMFpXMHVkR2wwYkdVZ1BTQjJMblJwZEd4bFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVWwwWlcwdVpHVnpZeUE5SUhZdVpHVnpZMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdGSmRHVnRMbWxrSUQwZ2RpNTBhWFJzWlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuUnVSR0YwWVM1d2RYTm9LR1JoZEdGSmRHVnRLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hKMGJrUmhkR0VwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpYkdWMElHWnlZVzFsY3lBOUlGdDdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVRtOWtaV3B6WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwNkU1YnU2NVp5b0lFNXZaR1ZLVXlEbG43cmt1bzRnUTJoeWIyMWxJRlk0SU9XOGxlYVRqdWVhaENCS1lYWmhVMk55YVhCMElPaS9rT2loak9lT3IrV2lnKys4ak9XRnR1UzZpK1M3dHVtcHNlV0txT21kbnVtWXUrV2hudWVhaE9lSnVlYUFwKys4ak9hZWdlV0Z0dVcvcSttQW4rZWFoT2U4bHVpdmtlV0pqZWVycitXUWhPZW5qZWkxaE9hNmtGd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThaR2wySUdsa1BWd2lhRzl0WlMxcGJuUnliMXdpUGx4dVhHNGdJQ0FnSUNBZ0lEeHdQazV2WkdVdWFuUENyaUJwY3lCaElFcGhkbUZUWTNKcGNIUWdjblZ1ZEdsdFpTQmlkV2xzZENCdmJpQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OWtaWFpsYkc5d1pYSnpMbWR2YjJkc1pTNWpiMjB2ZGpndlhDSStRMmh5YjIxbEozTWdWamdnU21GMllWTmpjbWx3ZENCbGJtZHBibVU4TDJFK0xseHVUbTlrWlM1cWN5QjFjMlZ6SUdGdUlHVjJaVzUwTFdSeWFYWmxiaXdnYm05dUxXSnNiMk5yYVc1bklFa3ZUeUJ0YjJSbGJDQjBhR0YwSUcxaGEyVnpJR2wwWEc1c2FXZG9kSGRsYVdkb2RDQmhibVFnWldabWFXTnBaVzUwTGlCT2IyUmxMbXB6SnlCd1lXTnJZV2RsSUdWamIzTjVjM1JsYlN3Z1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmQzZDNMbTV3YldwekxtTnZiUzljSWo1dWNHMDhMMkUrTENCcGN5QjBhR1VnYkdGeVoyVnpkQ0JsWTI5emVYTjBaVzBnYjJZZ2IzQmxibHh1YzI5MWNtTmxJR3hwWW5KaGNtbGxjeUJwYmlCMGFHVWdkMjl5YkdRdVBDOXdQbHh1WEc1Y2JseHVJQ0FnSUNBZ0lDQThhRElnYVdROVhDSm9iMjFsTFdSdmQyNXNiMkZrYUdWaFpGd2lJR1JoZEdFdFpHd3RiRzlqWVd3OVhDSkViM2R1Ykc5aFpDQm1iM0pjSWo1RWIzZHViRzloWkNCbWIzSWdiV0ZqVDFNZ0tIZzJOQ2s4TDJneVBseHVYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZbXh2WTJ0Y0lqNWNibHh1SUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzkyTmk0eE1DNHdMMjV2WkdVdGRqWXVNVEF1TUM1d2EyZGNJaUJqYkdGemN6MWNJbWh2YldVdFpHOTNibXh2WVdSaWRYUjBiMjVjSWlCMGFYUnNaVDFjSWtSdmQyNXNiMkZrSUhZMkxqRXdMakFnVEZSVFhDSWdaR0YwWVMxMlpYSnphVzl1UFZ3aWRqWXVNVEF1TUZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZGpZdU1UQXVNQ0JNVkZOY2JpQWdJQ0FnSUNBZ0lDQWdJRHh6YldGc2JENVNaV052YlcxbGJtUmxaQ0JHYjNJZ1RXOXpkQ0JWYzJWeWN6d3ZjMjFoYkd3K1hHNGdJQ0FnSUNBZ0lDQWdQQzloUGx4dVhHNGdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpYkdsemRDMWthWFpwWkdWeUxYQnBjR1VnYUc5dFpTMXpaV052Ym1SaGNua3RiR2x1YTNOY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWxiaTlrYjNkdWJHOWhaQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyNXZaR1ZxY3k5dWIyUmxMMkpzYjJJdmJXRnpkR1Z5TDJSdll5OWphR0Z1WjJWc2IyZHpMME5JUVU1SFJVeFBSMTlXTmk1dFpDTTJMakV3TGpCY0lqNURhR0Z1WjJWc2IyYzhMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJScGMzUXZiR0YwWlhOMExYWTJMbmd2Wkc5amN5OWhjR2t2WENJK1FWQkpJRVJ2WTNNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUR3dmRXdytYRzVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKc2IyTnJYQ0krWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2WkdsemRDOTJOeTQzTGpFdmJtOWtaUzEyTnk0M0xqRXVjR3RuWENJZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZblYwZEc5dVhDSWdkR2wwYkdVOVhDSkViM2R1Ykc5aFpDQjJOeTQzTGpFZ1EzVnljbVZ1ZEZ3aUlHUmhkR0V0ZG1WeWMybHZiajFjSW5ZM0xqY3VNVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyTnk0M0xqRWdRM1Z5Y21WdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMyMWhiR3crVEdGMFpYTjBJRVpsWVhSMWNtVnpQQzl6YldGc2JENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dllUNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2liR2x6ZEMxa2FYWnBaR1Z5TFhCcGNHVWdhRzl0WlMxelpXTnZibVJoY25rdGJHbHVhM05jSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZaVzR2Wkc5M2JteHZZV1F2WTNWeWNtVnVkQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDI1dlpHVnFjeTl1YjJSbEwySnNiMkl2YldGemRHVnlMMlJ2WXk5amFHRnVaMlZzYjJkekwwTklRVTVIUlV4UFIxOVdOeTV0WkNNM0xqY3VNVndpUGtOb1lXNW5aV3h2Wnp3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzlzWVhSbGMzUXRkamN1ZUM5a2IyTnpMMkZ3YVM5Y0lqNUJVRWtnUkc5amN6d3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQSEErWEc0Z0lDQWdJQ0FnSUNBZ1QzSWdhR0YyWlNCaElHeHZiMnNnWVhRZ2RHaGxJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Ym05a1pXcHpMMHhVVXlOc2RITXRjMk5vWldSMWJHVmNJajVNVkZNZ2MyTm9aV1IxYkdVdVBDOWhQbHh1SUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBOEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMXdpWEc0Z0lDQWdmVnh1ZlN3Z2UxeHVJQ0FnSUhScGRHeGxPaUJjSWs1UVRWd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT1M5ditlVXFDQk9VRTBnNW82bDVZV2w1WVdvNTVDRDVweUE1YVNuNTVxRTVieUE1cnFRNTVTZjVvQ0I1N083NTd1Zjc3eU01WVczNWFTSDVwZWc2Wm1RNTVxRTVZcWY2SU85NW9tcDViR1Y2SU85NVlxYjc3eU01WSt2NXBXMDVaQ0k1WnU5NlptRjVZbU41cksvNTVxRTVieUE1cnFRNXFHRzVwNjI3N3lNNllDQzVicVU1NTZzNW9HdjVMaUg1WStZNTVxRTVvcUE1cHl2NXB1MDVwdS9YQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHhvTVNCamJHRnpjejFjSW5ScGRHeGxJR1Z0TFdSbFptRjFiSFFnZEhsd1pTMXVaWFYwY21Gc0xURXhYQ0krWEc0Z0lDQWdJQ0FnSUNBZ1FuVnBiR1FnWVcxaGVtbHVaeUIwYUdsdVozTmNiaUFnSUNBZ0lDQWdQQzlvTVQ1Y2JpQWdJQ0FnSUNBZ1BIQWdZMnhoYzNNOVhDSm9OU0JsYlMxa1pXWmhkV3gwSUhSNWNHVXRibVYxZEhKaGJDMHhNU0J3WW5oc1hDSStYRzRnSUNBZ0lDQWdJQ0FnYm5CdElHbHpJSFJvWlNCd1lXTnJZV2RsSUcxaGJtRm5aWElnWm05eUlFcGhkbUZUWTNKcGNIUXVJRVpwYm1Rc0lITm9ZWEpsTENCaGJtUWdjbVYxYzJWY2JpQWdJQ0FnSUNBZ0lDQndZV05yWVdkbGN5QnZaaUJqYjJSbElHWnliMjBnYUhWdVpISmxaSE1nYjJZZ2RHaHZkWE5oYm1SeklHOW1JR1JsZG1Wc2IzQmxjbk1nNG9DVUlHRnVaRnh1SUNBZ0lDQWdJQ0FnSUdGemMyVnRZbXhsSUhSb1pXMGdhVzRnY0c5M1pYSm1kV3dnYm1WM0lIZGhlWE11WEc0Z0lDQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lDQWdQR0VnYVdROVhDSnRZV2x1TFdOMFlWd2lJR2h5WldZOVhDSWpjR0Z1WlMxb2IyMWxjR0ZuWlMxd2NtbGphVzVuWENJZ1kyeGhjM005WENKaWRHNGdZblJ1TFdocFoyaHNhV2RvZEMweklHMXliRndpSUdSaGRHRXRaWFpsYm5RdGJtRnRaVDFjSW1odmJXVndZV2RsTFdobGNtOHRZM1JoWENJK1IyVjBJSE4wWVhKMFpXUThMMkUrWUN4Y2JpQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSXVhYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhCek9pOHZkM2QzTG01d2JXcHpMbU52YlM5Y0lseHVJQ0FnSUgxY2JuMHNJSHRjYmlBZ0lDQjBhWFJzWlRvZ1hDSkhkV3h3WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwVzA1WkNJUjNWc2NPZWFoT1M4bCtXa211YVBrdVM3dHUrOGpPZThsdWl2a2VPQWdlUzhtT1dNbHVXU2pPZTdoT2U3aCtXSmplZXJyK1dramVhZGd1ZWFoT2Fvb2VXZGwrV1BpdW1kbWVhQWdlaTFoT2E2a08rOGpPV1duZWVkZ09XUHIrUzVrT1dFditPQWdlV1R2T2VkZ09Xd2orYWJzdVdFdisrOGpPaUhxdVdLcU9XTWx1V3VqT2FJa09XSmplZXJyK1drcCttSGorbUhqZVdramVXM3BlUzluRndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4YURFZ1kyeGhjM005WENKb1pXRmthVzVuSUhSbGVIUXRZMlZ1ZEdWeVhDSStRWFYwYjIxaGRHVWdZVzVrSUdWdWFHRnVZMlVnZVc5MWNpQjNiM0pyWm14dmR6d3ZhREUrUEdneUlHTnNZWE56UFZ3aWNHRnlZV2R5WVhCb1hDSStYRzRnSUNBZ0lDQWdJQ0FnWjNWc2NDQnBjeUJoSUhSdmIyeHJhWFFnWm05eUlHRjFkRzl0WVhScGJtY2djR0ZwYm1aMWJDQnZjaUIwYVcxbExXTnZibk4xYldsdVp5QjBZWE5yY3lCcGJpQjViM1Z5SUdSbGRtVnNiM0J0Wlc1MElIZHZjbXRtYkc5M0xDQnpieUI1YjNVZ1kyRnVJSE4wYjNBZ2JXVnpjMmx1WnlCaGNtOTFibVFnWVc1a0lHSjFhV3hrSUhOdmJXVjBhR2x1Wnk1Y2JpQWdJQ0FnSUNBZ1BDOW9NajQ4WkdsMklHTnNZWE56UFZ3aVkzUmhjMXdpUGx4dUlDQWdJQ0FnSUNBZ0lEeGhJR05zWVhOelBWd2lZM1JoY3kxaWRYUjBiMjVjSWlCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkMWJIQnFjeTluZFd4d0wySnNiMkl2YldGemRHVnlMMlJ2WTNNdloyVjBkR2x1WnkxemRHRnlkR1ZrTG0xa1hDSStSMlYwSUZOMFlYSjBaV1E4TDJFK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd09pOHZaM1ZzY0dwekxtTnZiUzljSWx4dUlDQWdJSDFjYm4wc0lIdGNiaUFnSUNCMGFYUnNaVG9nWENKQ2NtOTNjMlZ5YVdaNVhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1TDIvNTVTb0lFSnliM2R6WlhKcFpua2c1cWloNVoyWDVZeVc1N3VFNTd1SDVaS001NjZoNTVDRzZhRzU1NXV1NTVxRTVaQ0U1TGlxNVlxZjZJTzk1cWloNVoyWDc3eU01cDZCNWFTbjVvK1E1WTJINmFHNTU1dXU1NXFFNVkrdjU3dTA1b3FrNW9DbjQ0Q0I1WXFmNklPOTVhU041NVNvNW9Dbjc3eU01Ym0yNWE2ZTU0Nnc1NmV2NXB5bzVieVA1NXFFNXBDdDVidTY1NzJSNmFHMVhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeHpaV04wYVc5dUlHbGtQVndpZEc5d0xXaHZiV1V0YzJWamRHbHZibHdpSUdOc1lYTnpQVndpZEc5d0xYTmxZM1JwYjI0Z1kyOXNiM0l0WVZ3aVBseHVJQ0FnSUNBZ1BHUnBkaUJwWkQxY0luUnZjQzFvYjIxbExXbHRZV2RsWENJK1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBOGFETWdhV1E5WENKMGIzQXRjM1ZpZEdsMGJHVmNJaUJqYkdGemN6MWNJbXhoY21kbExXWnZiblJjSWo1Q2NtOTNjMlZ5YVdaNUlHeGxkSE1nZVc5MUlISmxjWFZwY21Vb1BITndZVzRnWTJ4aGMzTTlYQ0pqYjJ4dmNpMWtYQ0krSjIxdlpIVnNaWE1uUEM5emNHRnVQaWtnYVc0Z2RHaGxJR0p5YjNkelpYSWdZbmtnWW5WdVpHeHBibWNnZFhBZ1lXeHNJRzltSUhsdmRYSWdaR1Z3Wlc1a1pXNWphV1Z6TGp3dmFETStYRzRnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM04xWW5OMFlXTnJMMjV2WkdVdFluSnZkM05sY21sbWVTTjFjMkZuWlZ3aVBseHVJQ0FnSUNBZ0lDQThZblYwZEc5dUlHTnNZWE56UFZ3aWRHOXdMV0oxZEhSdmJsd2lJR2xrUFZ3aWRHOXdMV0oxZEhSdmJqSmNJajVjYmlBZ0lDQWdJQ0FnSUNCRWIyTjFiV1Z1ZEdGMGFXOXVYRzRnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdQQzloUGx4dUlDQWdJRHd2YzJWamRHbHZiajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0RvdkwySnliM2R6WlhKcFpua3ViM0puTDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZkMlZ5WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVZK3Y2WVdONTcydTVMMi81NVNvSUVKdmQyVnlJT2FRbk9lMG91T0FnZVd1aWVpamhlT0FnZWFidE9hV3NPV1NqT1dOdU9pOXZlV21na3BoZG1GVFkzSnBjSFRqZ0lGRFUxUGt1WXZuc2J2bm1vVG52WkhudTV6b3RZVG11cER2dkl6cGdKcm92NGZvaDZybGlxamxqSmJtczZqbGhhWG1pb0RtbksvbHJvem52bzdvcDZQbGhyUGxwSTNtbllMbm1vVG1vWWJtbnJibGpJWG5ycUhua0licGw2N3BvcGhjSWl4Y2JpQWdJQ0JqYjI1MFpXNTBPaUJnUEdScGRpQmpiR0Z6Y3oxY0ltMWhhVzVjSWo1Y2JqeHdJR05zWVhOelBWd2liR1ZoWkZ3aVBsZGxZaUJ6YVhSbGN5QmhjbVVnYldGa1pTQnZaaUJzYjNSeklHOW1JSFJvYVc1bmN5RGlnSlFnWm5KaGJXVjNiM0pyY3l3Z2JHbGljbUZ5YVdWekxDQmhjM05sZEhNc0lHRnVaQ0IxZEdsc2FYUnBaWE11SUVKdmQyVnlJRzFoYm1GblpYTWdZV3hzSUhSb1pYTmxJSFJvYVc1bmN5Qm1iM0lnZVc5MUxqd3ZjRDVjYmp4d1BrdGxaWEJwYm1jZ2RISmhZMnNnYjJZZ1lXeHNJSFJvWlhObElIQmhZMnRoWjJWeklHRnVaQ0J0WVd0cGJtY2djM1Z5WlNCMGFHVjVJR0Z5WlNCMWNDQjBieUJrWVhSbElDaHZjaUJ6WlhRZ2RHOGdkR2hsSUhOd1pXTnBabWxqSUhabGNuTnBiMjV6SUhsdmRTQnVaV1ZrS1NCcGN5QjBjbWxqYTNrdUlFSnZkMlZ5SUhSdklIUm9aU0J5WlhOamRXVWhQQzl3UGx4dVBIQStRbTkzWlhJZ1kyRnVJRzFoYm1GblpTQmpiMjF3YjI1bGJuUnpJSFJvWVhRZ1kyOXVkR0ZwYmlCSVZFMU1MQ0JEVTFNc0lFcGhkbUZUWTNKcGNIUXNJR1p2Ym5SeklHOXlJR1YyWlc0Z2FXMWhaMlVnWm1sc1pYTXVJRUp2ZDJWeUlHUnZaWE51NG9DWmRDQmpiMjVqWVhSbGJtRjBaU0J2Y2lCdGFXNXBabmtnWTI5a1pTQnZjaUJrYnlCaGJubDBhR2x1WnlCbGJITmxJQzBnYVhRZ2FuVnpkQ0JwYm5OMFlXeHNjeUIwYUdVZ2NtbG5hSFFnZG1WeWMybHZibk1nYjJZZ2RHaGxJSEJoWTJ0aFoyVnpJSGx2ZFNCdVpXVmtJR0Z1WkNCMGFHVnBjaUJrWlhCbGJtUmxibU5wWlhNdVBDOXdQbHh1UEhBK1ZHOGdQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJajVuWlhRZ2MzUmhjblJsWkR3dllUNHNJRUp2ZDJWeUlIZHZjbXR6SUdKNUlHWmxkR05vYVc1bklHRnVaQ0JwYm5OMFlXeHNhVzVuSUR4aElHaHlaV1k5WENJdmMyVmhjbU5vWENJK2NHRmphMkZuWlhNOEwyRStJR1p5YjIwZ1lXeHNJRzkyWlhJc0lIUmhhMmx1WnlCallYSmxJRzltSUdoMWJuUnBibWNzSUdacGJtUnBibWNzSUdSdmQyNXNiMkZrYVc1bkxDQmhibVFnYzJGMmFXNW5JSFJvWlNCemRIVm1aaUI1YjNYaWdKbHlaU0JzYjI5cmFXNW5JR1p2Y2k0Z1FtOTNaWElnYTJWbGNITWdkSEpoWTJzZ2IyWWdkR2hsYzJVZ2NHRmphMkZuWlhNZ2FXNGdZU0J0WVc1cFptVnpkQ0JtYVd4bExDQThZU0JvY21WbVBWd2lMMlJ2WTNNdlkzSmxZWFJwYm1jdGNHRmphMkZuWlhNdkkySnZkMlZ5YW5OdmJsd2lQanhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2k1cWMyOXVQQzlqYjJSbFBqd3ZZVDR1SUVodmR5QjViM1VnZFhObElEeGhJR2h5WldZOVhDSXZjMlZoY21Ob1hDSStjR0ZqYTJGblpYTThMMkUrSUdseklIVndJSFJ2SUhsdmRTNGdRbTkzWlhJZ2NISnZkbWxrWlhNZ2FHOXZhM01nZEc4Z1ptRmphV3hwZEdGMFpTQjFjMmx1WnlCd1lXTnJZV2RsY3lCcGJpQjViM1Z5SUR4aElHaHlaV1k5WENJdlpHOWpjeTkwYjI5c2Mxd2lQblJ2YjJ4eklHRnVaQ0IzYjNKclpteHZkM004TDJFK0xqd3ZjRDVjYmp4d1BrSnZkMlZ5SUdseklHOXdkR2x0YVhwbFpDQm1iM0lnZEdobElHWnliMjUwTFdWdVpDNGdTV1lnYlhWc2RHbHdiR1VnY0dGamEyRm5aWE1nWkdWd1pXNWtJRzl1SUdFZ2NHRmphMkZuWlNBdElHcFJkV1Z5ZVNCbWIzSWdaWGhoYlhCc1pTQXRJRUp2ZDJWeUlIZHBiR3dnWkc5M2JteHZZV1FnYWxGMVpYSjVJR3AxYzNRZ2IyNWpaUzRnVkdocGN5QnBjeUJyYm05M2JpQmhjeUJoSUdac1lYUWdaR1Z3Wlc1a1pXNWplU0JuY21Gd2FDQmhibVFnYVhRZ2FHVnNjSE1nY21Wa2RXTmxJSEJoWjJVZ2JHOWhaQzQ4TDNBK1hHNDhhRElnYVdROVhDSnBibk4wWVd4c0xXSnZkMlZ5WENJK1BHRWdhSEpsWmoxY0lpTnBibk4wWVd4c0xXSnZkMlZ5WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStTVzV6ZEdGc2JDQkNiM2RsY2p3dmFESStYRzQ4Y0Q1Q2IzZGxjaUJwY3lCaElHTnZiVzFoYm1RZ2JHbHVaU0IxZEdsc2FYUjVMaUJKYm5OMFlXeHNJR2wwSUhkcGRHZ2dibkJ0TGp3dmNENWNianhtYVdkMWNtVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmNJajQ4Y0hKbFBqeGpiMlJsSUdOc1lYTnpQVndpYkdGdVozVmhaMlV0WW1GemFGd2lJR1JoZEdFdGJHRnVaejFjSW1KaGMyaGNJajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrYm5CdElHbHVjM1JoYkd3Z0xXY2dZbTkzWlhJOEwyTnZaR1UrUEM5d2NtVStQQzltYVdkMWNtVStYRzQ4Y0Q1Q2IzZGxjaUJ5WlhGMWFYSmxjeUE4WVNCb2NtVm1QVndpYUhSMGNEb3ZMMjV2WkdWcWN5NXZjbWN2WENJK2JtOWtaU3dnYm5CdFBDOWhQaUJoYm1RZ1BHRWdhSEpsWmoxY0ltaDBkSEE2THk5bmFYUXRjMk50TG05eVoxd2lQbWRwZER3dllUNHVQQzl3UGx4dVBIQStUR0YwWlhOMElISmxiR1ZoYzJVNklEeGhJR2h5WldZOVhDSmNJajQ4YVcxbklITnlZejFjSW1oMGRIQnpPaTh2YVcxbkxuTm9hV1ZzWkhNdWFXOHZibkJ0TDNZdlltOTNaWEl1YzNablAyMWhlRUZuWlQweU5Ua3lNREF3WENJZ1lXeDBQVndpWW05M1pYSWdkbVZ5YzJsdmJsd2lQand2WVQ0OEwzQStYRzQ4Y0Q1R2IzSWdkSEp2ZFdKc1pYTm9iMjkwYVc1bklHbHVjM1JoYkd4aGRHbHZiaUJ2YmlCa2FXWm1aWEpsYm5RZ2NHeGhkR1p2Y20xekxDQnlaV0ZrSUhSb1pTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkp2ZDJWeUwySnZkMlZ5TDNkcGEya3ZWSEp2ZFdKc1pYTm9iMjkwYVc1blhDSStkSEp2ZFdKc1pYTm9iMjkwYVc1blBDOWhQaUIzYVd0cElIQmhaMlV1UEM5d1BseHVQR2d5SUdsa1BWd2laMlYwZEdsdVp5MXpkR0Z5ZEdWa1hDSStQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1SFpYUjBhVzVuSUhOMFlYSjBaV1E4TDJneVBseHVQR2d6SUdsa1BWd2lhVzV6ZEdGc2JDMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqYVc1emRHRnNiQzF3WVdOcllXZGxjMXdpSUdOc1lYTnpQVndpYUdWaFpHVnlMV0Z1WTJodmNsd2lQc0tuUEM5aFBrbHVjM1JoYkd3Z2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1NXNXpkR0ZzYkNCd1lXTnJZV2RsY3lCM2FYUm9JRHhoSUdoeVpXWTlYQ0l2Wkc5amN5OWhjR2tqYVc1emRHRnNiRndpUGp4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpQnBibk4wWVd4c1BDOWpiMlJsUGp3dllUNHVJRUp2ZDJWeUlHbHVjM1JoYkd4eklIQmhZMnRoWjJWeklIUnZJRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2w5amIyMXdiMjVsYm5Sekx6d3ZZMjlrWlQ0dVBDOXdQbHh1UEdacFozVnlaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kRndpUGp4d2NtVStQR052WkdVZ1kyeGhjM005WENKc1lXNW5kV0ZuWlMxaVlYTm9YQ0lnWkdGMFlTMXNZVzVuUFZ3aVltRnphRndpUGp4emNHRnVJR05zWVhOelBWd2laM0JjSWo0a0lEd3ZjM0JoYmo1aWIzZGxjaUJwYm5OMFlXeHNJQ1pzZER0d1lXTnJZV2RsSm1kME96d3ZZMjlrWlQ0OEwzQnlaVDQ4TDJacFozVnlaVDVjYmp4d1BrRWdjR0ZqYTJGblpTQmpZVzRnWW1VZ1lTQkhhWFJJZFdJZ2MyaHZjblJvWVc1a0xDQmhJRWRwZENCbGJtUndiMmx1ZEN3Z1lTQlZVa3dzSUdGdVpDQnRiM0psTGlCU1pXRmtJRzF2Y21VZ1lXSnZkWFFnUEdFZ2FISmxaajFjSWk5a2IyTnpMMkZ3YVM4amFXNXpkR0ZzYkZ3aVBqeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaUJwYm5OMFlXeHNQQzlqYjJSbFBqd3ZZVDR1UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFpWVhOb1hDSWdaR0YwWVMxc1lXNW5QVndpWW1GemFGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nYVc1emRHRnNiSE1nZEdobElIQnliMnBsWTNRZ1pHVndaVzVrWlc1amFXVnpJR3hwYzNSbFpDQnBiaUJpYjNkbGNpNXFjMjl1UEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHeGNianh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nY21WbmFYTjBaWEpsWkNCd1lXTnJZV2RsUEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHd2dhbkYxWlhKNVhHNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJRWRwZEVoMVlpQnphRzl5ZEdoaGJtUThMM053WVc0K1hHNDhjM0JoYmlCamJHRnpjejFjSW1kd1hDSStKQ0E4TDNOd1lXNCtZbTkzWlhJZ2FXNXpkR0ZzYkNCa1pYTmhibVJ5Ynk5dFlYTnZibko1WEc0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklFZHBkQ0JsYm1Sd2IybHVkRHd2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c0lHZHBkRG92TDJkcGRHaDFZaTVqYjIwdmRYTmxjaTl3WVdOcllXZGxMbWRwZEZ4dVBITndZVzRnWTJ4aGMzTTlYQ0pqWENJK0l5QlZVa3c4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQm9kSFJ3T2k4dlpYaGhiWEJzWlM1amIyMHZjMk55YVhCMExtcHpQQzlqYjJSbFBqd3ZjSEpsUGp3dlptbG5kWEpsUGx4dVBHZ3pJR2xrUFZ3aWMyVmhjbU5vTFhCaFkydGhaMlZ6WENJK1BHRWdhSEpsWmoxY0lpTnpaV0Z5WTJndGNHRmphMkZuWlhOY0lpQmpiR0Z6Y3oxY0ltaGxZV1JsY2kxaGJtTm9iM0pjSWo3Q3B6d3ZZVDVUWldGeVkyZ2djR0ZqYTJGblpYTThMMmd6UGx4dVBIQStQR0VnYUhKbFpqMWNJaTl6WldGeVkyaGNJajVUWldGeVkyZ2dRbTkzWlhJZ2NHRmphMkZuWlhNOEwyRStJR0Z1WkNCbWFXNWtJSFJvWlNCeVpXZHBjM1JsY21Wa0lIQmhZMnRoWjJVZ2JtRnRaWE1nWm05eUlIbHZkWElnWm1GMmIzSnBkR1VnY0hKdmFtVmpkSE11UEM5d1BseHVQR2d6SUdsa1BWd2ljMkYyWlMxd1lXTnJZV2RsYzF3aVBqeGhJR2h5WldZOVhDSWpjMkYyWlMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQbE5oZG1VZ2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1EzSmxZWFJsSUdFZ1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlMbXB6YjI0OEwyTnZaR1UrSUdacGJHVWdabTl5SUhsdmRYSWdjR0ZqYTJGblpTQjNhWFJvSUR4aElHaHlaV1k5WENJdlpHOWpjeTlqY21WaGRHbHVaeTF3WVdOcllXZGxjeThqWW05M1pYSnFjMjl1WENJK1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlJR2x1YVhROEwyTnZaR1UrUEM5aFBpNDhMM0ErWEc0OGNENVVhR1Z1SUhOaGRtVWdibVYzSUdSbGNHVnVaR1Z1WTJsbGN5QjBieUI1YjNWeUlEeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaTVxYzI5dVBDOWpiMlJsUGlCM2FYUm9JRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2lCcGJuTjBZV3hzSUZCQlEwdEJSMFVnTFMxellYWmxQQzlqYjJSbFBqd3ZjRDVjYmp4b015QnBaRDFjSW5WelpTMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqZFhObExYQmhZMnRoWjJWelhDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrVlhObElIQmhZMnRoWjJWelBDOW9NejVjYmp4d1BraHZkeUI1YjNVZ2RYTmxJSEJoWTJ0aFoyVnpJR2x6SUhWd0lIUnZJSGx2ZFM0Z1YyVWdjbVZqYjIxdFpXNWtJSGx2ZFNCMWMyVWdRbTkzWlhJZ2RHOW5aWFJvWlhJZ2QybDBhQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZkRzl2YkhNdlhDSStSM0oxYm5Rc0lGSmxjWFZwY21WS1V5d2dXV1Z2YldGdUxDQmhibVFnYkc5MGN5QnZaaUJ2ZEdobGNpQjBiMjlzY3p3dllUNGdiM0lnWW5WcGJHUWdlVzkxY2lCdmQyNGdkMjl5YTJac2IzY2dkMmwwYUNBOFlTQm9jbVZtUFZ3aUwyUnZZM012WVhCcEwxd2lQblJvWlNCQlVFazhMMkUrTGlCWmIzVWdZMkZ1SUdGc2MyOGdkWE5sSUhSb1pTQnBibk4wWVd4c1pXUWdjR0ZqYTJGblpYTWdaR2x5WldOMGJIa3NJR3hwYTJVZ2RHaHBjeXdnYVc0Z2RHaGxJR05oYzJVZ2IyWWdQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtcHhkV1Z5ZVR3dlkyOWtaVDQ2UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFvZEcxc1hDSWdaR0YwWVMxc1lXNW5QVndpYUhSdGJGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aWJuUmNJajRtYkhRN2MyTnlhWEIwSUR3dmMzQmhiajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltNWhYQ0krYzNKalBUd3ZjM0JoYmo0OGMzQmhiaUJqYkdGemN6MWNJbk5jSWo1Y0ltSnZkMlZ5WDJOdmJYQnZibVZ1ZEhNdmFuRjFaWEo1TDJScGMzUXZhbkYxWlhKNUxtMXBiaTVxYzF3aVBDOXpjR0Z1UGp4emNHRnVJR05zWVhOelBWd2liblJjSWo0bVozUTdKbXgwT3k5elkzSnBjSFFtWjNRN1BDOXpjR0Z1UGp3dlkyOWtaVDQ4TDNCeVpUNDhMMlpwWjNWeVpUNWNianhvTWlCcFpEMWNJblIzYVhSMFpYSXRkWEJrWVhSbGN5MW1jbTl0TFdKdmQyVnlhSFIwY0hOMGQybDBkR1Z5WTI5dFltOTNaWEpjSWo0OFlTQm9jbVZtUFZ3aUkzUjNhWFIwWlhJdGRYQmtZWFJsY3kxbWNtOXRMV0p2ZDJWeWFIUjBjSE4wZDJsMGRHVnlZMjl0WW05M1pYSmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1VWQybDBkR1Z5SUhWd1pHRjBaWE1nWm5KdmJTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OTBkMmwwZEdWeUxtTnZiUzlpYjNkbGNsd2lQa0JpYjNkbGNqd3ZZVDQ4TDJneVBseHVQSEErUEdFZ1kyeGhjM005WENKMGQybDBkR1Z5TFhScGJXVnNhVzVsWENJZ2FISmxaajFjSW1oMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlltOTNaWEpjSWlCa1lYUmhMWGRwWkdkbGRDMXBaRDFjSWpRNE1ETTNOekk1TVRNMk9UYzFORFl5TlZ3aVBsUjNaV1YwY3lCaWVTQkFZbTkzWlhJOEwyRStYRzQ4TDNBK1hHNWNiand2WkdsMlBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndjem92TDJKdmQyVnlMbWx2TDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZjbmR6WlhKVGVXNWpYQ0lzWEc0Z0lDQWdaR1Z6WXpvZ1hDSkdSVm9nNUwyLzU1U29JRUp5YjNkelpYSnplVzVqSU9pdXFlYTFqK2luaU9XWnFPV3VudWFYdHVXL3ErbUFuK2VhaE9XVGplVzZsT1dKamVlcnIrV1FoT2VuamVhV2grUzd0dWVhaE9hYnRPYVV1ZVc1dHVpSHF1V0txT1dJdCthV3NPbWh0ZW1kb3UrOGpPUzZwdVdQcitXdW51YVh0dVdRak9hdHBlV1FoT1M0cXVlN2lPZXJyKys4ak9hUGtPbXJtT2lIcytXd2tUTXdKZWVhaE9XOGdPV1BrZWFWaU9lT2gxd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThhREVnWTJ4aGMzTTlYQ0pvYjI5clhDSStWR2x0WlMxellYWnBibWNnYzNsdVkyaHliMjVwYzJWa0lHSnliM2R6WlhJZ2RHVnpkR2x1Wnk0OEwyZ3hQanh3SUdOc1lYTnpQVndpY205dWMyVmhiRndpUGtsMDRvQ1pjeUIzYVdOclpXUXRabUZ6ZENCaGJtUWdkRzkwWVd4c2VTQm1jbVZsTGp3dmNENDhjQ0JqYkdGemN6MWNJblpwWkdWdlhDSStQR0VnWTJ4aGMzTTlYQ0oyYVdSbGIxOWZiR2x1YTF3aUlHaHlaV1k5WENJalhDSStQQzloUGp3dmNENDhjQ0JqYkdGemN6MWNJbWh2ZHkxMGIxd2lQand2Y0Q0OGNDQmpiR0Z6Y3oxY0ltaHZkeTEwYjE5ZlkyOXRiV0Z1WkZ3aVBtNXdiU0JwYm5OMFlXeHNJQzFuSUdKeWIzZHpaWEl0YzNsdVl6d3ZjRDQ4Y0NCamJHRnpjejFjSW1OMFlWd2lQanhoSUdOc1lYTnpQVndpWW5WMGRHOXVJR0oxZEhSdmJpMHRjSEpwYldGeWVWd2lJR2h5WldZOVhDSWphVzV6ZEdGc2JGd2lJSFJwZEd4bFBWd2lSMlYwSUZOMFlYSjBaV1JjSWo1SFpYUWdVM1JoY25SbFpEd3ZZVDQ4TDNBK1BHUnBkaUJqYkdGemN6MWNJbkJzWVhsbGNsd2lQanh3UGlkaWIyNXFiM1Z5UEM5d1Bqd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd2N6b3ZMMkp5YjNkelpYSnplVzVqTG1sdkwxd2lYRzRnSUNBZ2ZWeHVmVjFjYmx4dWJHVjBJR2x1WkdWNElEMGdlMXh1SUNBZ0lHWmxlbVJsYzJNNklGd2lSa1ZhSU9XSmplZXJyK2Fvb2VXZGwrV01sdVczcGVlb2krVzhnT1dQa2VhaGh1YWV0bHdpTEZ4dUlDQWdJR3AxYldKdmRISnZiam9nZTF4dUlDQWdJQ0FnSUNCMGFYUnNaVG9nWENKSVpXeHNieXdnUmtWYUlFRnVaQ0JXZFdVaFhDSXNYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpNkwrWjVwaXY1TGlBNUxpcTVMMi81NVNvSUVaRldpRG1ub1RsdTdybm1vVGxpWTNucTYvbXFLSGxuWmZsakpibHZJRGxqNUhucExya3ZvdnZ2SXptdkpUbnBMcmt1b2Jsbjdya3VvNVdkV1hsalpYbWxvZmt1N2JudTRUa3U3Ym5tb1RsdklEbGo1SG51NVBtbm9UamdJSmNJaXhjYmlBZ0lDQWdJQ0FnWW5WMGRHOXVPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVZVzFsT2lCZ1BHa2dZMnhoYzNNOVhDSm1ZU0JtWVMxbmFYUm9kV0l0WVd4MFhDSStQQzlwUGlCSGFYUklkV0pnTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZablZ5YVdNdGVtaGhieTltWlhwY0lseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1c1pYUWdiR2x6ZENBOUlIdGNiaUFnSUNCcWRXMWliM1J5YjI0NklIdGNiaUFnSUNBZ0lDQWdkR2wwYkdVNklGd2lSa1ZhSUVGdVpDQldkV1VnUm5KaGJXVWhYQ0lzWEc0Z0lDQWdJQ0FnSUdOdmJuUmxiblE2SUZ3aTZMK1o1cGl2NUxpQTVMaXFSa1ZhNXBXMDVaQ0lWblZsNTVxRTVZaVg2S0dvNWJHVjU2UzY2YUcxNzd5TTZLKzM1NEs1NVllNzVMaUw2WjJpNVlpWDZLR281NXFFSUVSbGRHRnBiQ0RtaklucGtxN292NXZsaGFYb3I2Ym1nNFhwb2JYbXRZL29wNGhjSWl4Y2JpQWdJQ0FnSUNBZ1luVjBkRzl1T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQmNJdWFmcGVlY2krYWJ0T1drbXVTL29lYUJyMXdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3T2k4dlptVjZMbWhsYzNSMVpIa3VZMjl0WENKY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMWNibHh1YkdWMElHTnZiVzF2YmlBOUlIdGNiaUFnSUNCemFYUmxUbUZ0WlRvZ1hDSkdSVm9nVm5WbElFUkZUVTljSWl4Y2JseHVJQ0FnSUc1aGRrUmhkR0U2SUZ0N1hHNGdJQ0FnSUNBZ0lHNWhiV1U2SUZ3aTZhYVc2YUcxWENJc1hHNGdJQ0FnSUNBZ0lHaHlaV1k2SUZ3aWFXNWtaWGd1YUhSdGJGd2lYRzRnSUNBZ2ZTd2dlMXh1SUNBZ0lDQWdJQ0J1WVcxbE9pQmNJa1pGV3VXZnV1YWNyT2FldHVhZWhGd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbXhwYzNRdWFIUnRiRndpWEc0Z0lDQWdmVjBzWEc1Y2JpQWdJQ0JtYjI5MFpYSlVaWGgwT2lCY0lzS3BJREl3TVRjZ1JrVmFJT1dKamVlcnIrYW9vZVdkbCtXTWx1VzNwZWVvaStXOGdPV1BrZWFoaHVhZXRpQkRjbVZoZEdWa0lHSjVJRVoxY21sakxucG9ZVzljSWx4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1hDSnBibVJsZUZ3aU9pQnBibVJsZUN4Y2JpQWdJQ0JjSW14cGMzUmNJam9nYkdsemRDeGNiaUFnSUNCY0ltWnlZVzFsYzF3aU9pQm1jbUZ0WlhNc1hHNGdJQ0FnWENKamIyMXRiMjVjSWpvZ1kyOXRiVzl1WEc1OVhHNGlMQ0pwYlhCdmNuUWdVU0JtY205dElDZHhKMXh1WEc1cGJYQnZjblFnUVhCcFJHRjBZU0JtY205dElDZHdkV0pzYVdNdlpHVnRieTFrWVhSaEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2JtRjJUR2x6ZERvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVVM1UWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvUVhCcFJHRjBZUzVqYjIxdGIyNHVibUYyUkdGMFlTbGNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQjlMRnh1SUNBZ0lITnBkR1ZPWVcxbE9pQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCUkxsQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpiMngyWlNoQmNHbEVZWFJoTG1OdmJXMXZiaTV6YVhSbFRtRnRaU2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0I5TEZ4dUlDQWdJR1p2YjNSbGNsUmxlSFE2SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOdmJIWmxLRUZ3YVVSaGRHRXVZMjl0Ylc5dUxtWnZiM1JsY2xSbGVIUXBYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdmVnh1ZlZ4dUlpd2lQSFJsYlhCc1lYUmxQbHh1SUNBZ0lEeG1iMjkwWlhJZ1kyeGhjM005WENKamIyNTBZV2x1WlhKY0lqNWNiaUFnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM005WENKd2RXeHNMV3hsWm5SY0lqNTdlM1JsZUhSOWZUd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ1BITndZVzRnWTJ4aGMzTTlYQ0p3ZFd4c0xYSnBaMmgwWENJK1hHNWNkRngwUEdrZ1kyeGhjM005WENKcFkyOXVJR2xqYjI0dGQyVnBlR2x1WENJK1BDOXBQbHh1WEhSY2REeHBJR05zWVhOelBWd2lhV052YmlCcFkyOXVMWGRsYVdKdlhDSStQQzlwUGx4dVhIUThMM053WVc0K1hHNGdJQ0FnUEM5bWIyOTBaWEkrWEc0OEwzUmxiWEJzWVhSbFBseHVQSE5qY21sd2RENWNibWx0Y0c5eWRDQlRaWEoyYVdObElHWnliMjBnSnk0dlkyOXRiVzl1SjF4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JoZEdFb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdYSFIwWlhoME9sd2lYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYldWMGFHOWtjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl2ZEdWeU9pQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JUWlhKMmFXTmxMbVp2YjNSbGNsUmxlSFFvS1M1MGFHVnVLQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEhSMGFHbHpMblJsZUhRZ1BTQmtZWFJoWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kzSmxZWFJsWkNncElIdGNiaUFnSUNBZ0lDQWdYSFIwYUdsekxtWnZiM1JsY2lncFhHNGdJQ0FnSUNBZ0lIMWNibjFjYmp3dmMyTnlhWEIwUGx4dUlpd2lQSFJsYlhCc1lYUmxQbHh1SUNBZ0lEeHVZWFlnWTJ4aGMzTTlYQ0p1WVhaaVlYSWdibUYyWW1GeUxXbHVkbVZ5YzJVZ2JtRjJZbUZ5TFdacGVHVmtMWFJ2Y0Z3aVBseHVJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpWTI5dWRHRnBibVZ5WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWJtRjJZbUZ5TFdobFlXUmxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnZEhsd1pUMWNJbUoxZEhSdmJsd2lJR05zWVhOelBWd2libUYyWW1GeUxYUnZaMmRzWlNCamIyeHNZWEJ6WldSY0lpQmtZWFJoTFhSdloyZHNaVDFjSW1OdmJHeGhjSE5sWENJZ1pHRjBZUzEwWVhKblpYUTlYQ0lqYm1GMlltRnlYQ0lnWVhKcFlTMWxlSEJoYm1SbFpEMWNJbVpoYkhObFhDSWdZWEpwWVMxamIyNTBjbTlzY3oxY0ltNWhkbUpoY2x3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNCaGJpQmpiR0Z6Y3oxY0luTnlMVzl1YkhsY0lqNVViMmRuYkdVZ2JtRjJhV2RoZEdsdmJqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM005WENKcFkyOXVMV0poY2x3aVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM005WENKcFkyOXVMV0poY2x3aVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM005WENKcFkyOXVMV0poY2x3aVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwySjFkSFJ2Ymo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQmpiR0Z6Y3oxY0ltNWhkbUpoY2kxaWNtRnVaRndpSUdoeVpXWTlYQ0l2WENJK2UzdG9aV0ZrWlhKRVlYUmhMbk5wZEdWT1lXMWxmWDA4TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdhV1E5WENKdVlYWmlZWEpjSWlCamJHRnpjejFjSW1OdmJHeGhjSE5sSUc1aGRtSmhjaTFqYjJ4c1lYQnpaVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0ltNWhkaUJ1WVhaaVlYSXRibUYyWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVNCMkxXWnZjajFjSW1sMFpXMGdhVzRnYUdWaFpHVnlSR0YwWVM1dVlYWk1hWE4wWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQTZhSEpsWmoxY0ltbDBaVzB1YUhKbFpsd2lQbnQ3YVhSbGJTNXVZVzFsZlgwOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzkxYkQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUENFdExTOHVibUYyTFdOdmJHeGhjSE5sSUMwdFBseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0E4TDI1aGRqNWNiand2ZEdWdGNHeGhkR1UrWEc0OGMyTnlhWEIwUGx4dWFXMXdiM0owSUZObGNuWnBZMlVnWm5KdmJTQW5MaTlqYjIxdGIyNG5YRzVwYlhCdmNuUWdVU0JtY205dElDZHhKMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmhkR0VvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNrUmhkR0U2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmwwWlU1aGJXVTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoZGt4cGMzUTZJRnRkWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCdFpYUm9iMlJ6T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldGa1pYSkVZWFJoU1c1cGREb2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElGOTJiU0E5SUhSb2FYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQlJMbUZzYkNoYlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRk5sY25acFkyVXVjMmwwWlU1aGJXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1UyVnlkbWxqWlM1dVlYWk1hWE4wS0NsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZEtTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCeWRHNUVZWFJoSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MybDBaVTVoYldVNklHUmhkR0ZiTUYwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVlYWk1hWE4wT2lCa1lYUmhXekZkWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDNadExtaGxZV1JsY2tSaGRHRWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0J5ZEc1RVlYUmhLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kzSmxZWFJsWkNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR1ZoWkdWeVJHRjBZVWx1YVhRb0tWeHVJQ0FnSUNBZ0lDQjlYRzU5WEc0OEwzTmpjbWx3ZEQ1Y2JpSXNJangwWlcxd2JHRjBaVDVjYmlBZ0lDQThaR2wyUGx4dUlDQWdJQ0FnSUNBOElTMHRJRzVoZGlBdExUNWNiaUFnSUNBZ0lDQWdQR1psZWkxb1pXRmtaWEkrUEM5bVpYb3RhR1ZoWkdWeVBseHVJQ0FnSUNBZ0lDQThJUzB0SUdwMWJXSnZkSEp2YmlBdExUNWNiaUFnSUNBZ0lDQWdQSE5zYjNRK1BDOXpiRzkwUGx4dUlDQWdJQ0FnSUNBOFptVjZMV1p2YjNSbGNqNDhMMlpsZWkxbWIyOTBaWEkrWEc0Z0lDQWdQQzlrYVhZK1hHNDhMM1JsYlhCc1lYUmxQbHh1UEhOamNtbHdkRDVjYm1sdGNHOXlkQ0JtWlhwSVpXRmtaWElnWm5KdmJTQW5jSFZpYkdsakwyMXZaSFZzWlM5amIyMXRiMjR2YUdWaFpHVnlMbloxWlNkY2JtbHRjRzl5ZENCbVpYcEdiMjkwWlhJZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dlptOXZkR1Z5TG5aMVpTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHTnZiWEJ2Ym1WdWRITTZJSHRjYmlBZ0lDQWdJQ0FnWm1WNlNHVmhaR1Z5TEZ4dUlDQWdJQ0FnSUNCbVpYcEdiMjkwWlhKY2JpQWdJQ0I5WEc1OVhHNDhMM05qY21sd2RENWNiaUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZXlCY0ltUmxabUYxYkhSY0lqb2djbVZ4ZFdseVpTaGNJbU52Y21VdGFuTXZiR2xpY21GeWVTOW1iaTluWlhRdGFYUmxjbUYwYjNKY0lpa3NJRjlmWlhOTmIyUjFiR1U2SUhSeWRXVWdmVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhzZ1hDSmtaV1poZFd4MFhDSTZJSEpsY1hWcGNtVW9YQ0pqYjNKbExXcHpMMnhwWW5KaGNua3ZabTR2YjJKcVpXTjBMMkZ6YzJsbmJsd2lLU3dnWDE5bGMwMXZaSFZzWlRvZ2RISjFaU0I5T3lJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVYRzUyWVhJZ1gyRnpjMmxuYmlBOUlISmxjWFZwY21Vb1hDSXVMaTlqYjNKbExXcHpMMjlpYW1WamRDOWhjM05wWjI1Y0lpazdYRzVjYm5aaGNpQmZZWE56YVdkdU1pQTlJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb1gyRnpjMmxuYmlrN1hHNWNibVoxYm1OMGFXOXVJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRb2IySnFLU0I3SUhKbGRIVnliaUJ2WW1vZ0ppWWdiMkpxTGw5ZlpYTk5iMlIxYkdVZ1B5QnZZbW9nT2lCN0lHUmxabUYxYkhRNklHOWlhaUI5T3lCOVhHNWNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRjloYzNOcFoyNHlMbVJsWm1GMWJIUWdmSHdnWm5WdVkzUnBiMjRnS0hSaGNtZGxkQ2tnZTF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTVRzZ2FTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUhaaGNpQnpiM1Z5WTJVZ1BTQmhjbWQxYldWdWRITmJhVjA3WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdjMjkxY21ObEtTQjdYRzRnSUNBZ0lDQnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0hOdmRYSmpaU3dnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0IwWVhKblpYUmJhMlY1WFNBOUlITnZkWEpqWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjBZWEpuWlhRN1hHNTlPeUlzSW5KbGNYVnBjbVVvSnk0dUwyMXZaSFZzWlhNdmQyVmlMbVJ2YlM1cGRHVnlZV0pzWlNjcE8xeHVjbVZ4ZFdseVpTZ25MaTR2Ylc5a2RXeGxjeTlsY3pZdWMzUnlhVzVuTG1sMFpYSmhkRzl5SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHVMMjF2WkhWc1pYTXZZMjl5WlM1blpYUXRhWFJsY21GMGIzSW5LVHNpTENKeVpYRjFhWEpsS0NjdUxpOHVMaTl0YjJSMWJHVnpMMlZ6Tmk1dlltcGxZM1F1WVhOemFXZHVKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dUx5NHVMMjF2WkhWc1pYTXZYMk52Y21VbktTNVBZbXBsWTNRdVlYTnphV2R1T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCcFppaDBlWEJsYjJZZ2FYUWdJVDBnSjJaMWJtTjBhVzl1SnlsMGFISnZkeUJVZVhCbFJYSnliM0lvYVhRZ0t5QW5JR2x6SUc1dmRDQmhJR1oxYm1OMGFXOXVJU2NwTzF4dUlDQnlaWFIxY200Z2FYUTdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b0tYc2dMeW9nWlcxd2RIa2dLaThnZlRzaUxDSjJZWElnYVhOUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBjeTF2WW1wbFkzUW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0JwWmlnaGFYTlBZbXBsWTNRb2FYUXBLWFJvY205M0lGUjVjR1ZGY25KdmNpaHBkQ0FySUNjZ2FYTWdibTkwSUdGdUlHOWlhbVZqZENFbktUdGNiaUFnY21WMGRYSnVJR2wwTzF4dWZUc2lMQ0l2THlCbVlXeHpaU0F0UGlCQmNuSmhlU05wYm1SbGVFOW1YRzR2THlCMGNuVmxJQ0F0UGlCQmNuSmhlU05wYm1Oc2RXUmxjMXh1ZG1GeUlIUnZTVTlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXbHZZbXBsWTNRbktWeHVJQ0FzSUhSdlRHVnVaM1JvSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFd4bGJtZDBhQ2NwWEc0Z0lDd2dkRzlKYm1SbGVDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmRHOHRhVzVrWlhnbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9TVk5mU1U1RFRGVkVSVk1wZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0b0pIUm9hWE1zSUdWc0xDQm1jbTl0U1c1a1pYZ3BlMXh1SUNBZ0lIWmhjaUJQSUNBZ0lDQWdQU0IwYjBsUFltcGxZM1FvSkhSb2FYTXBYRzRnSUNBZ0lDQXNJR3hsYm1kMGFDQTlJSFJ2VEdWdVozUm9LRTh1YkdWdVozUm9LVnh1SUNBZ0lDQWdMQ0JwYm1SbGVDQWdQU0IwYjBsdVpHVjRLR1p5YjIxSmJtUmxlQ3dnYkdWdVozUm9LVnh1SUNBZ0lDQWdMQ0IyWVd4MVpUdGNiaUFnSUNBdkx5QkJjbkpoZVNOcGJtTnNkV1JsY3lCMWMyVnpJRk5oYldWV1lXeDFaVnBsY204Z1pYRjFZV3hwZEhrZ1lXeG5iM0pwZEdodFhHNGdJQ0FnYVdZb1NWTmZTVTVEVEZWRVJWTWdKaVlnWld3Z0lUMGdaV3dwZDJocGJHVW9iR1Z1WjNSb0lENGdhVzVrWlhncGUxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCUFcybHVaR1Y0S3l0ZE8xeHVJQ0FnSUNBZ2FXWW9kbUZzZFdVZ0lUMGdkbUZzZFdVcGNtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0x5OGdRWEp5WVhramRHOUpibVJsZUNCcFoyNXZjbVZ6SUdodmJHVnpMQ0JCY25KaGVTTnBibU5zZFdSbGN5QXRJRzV2ZEZ4dUlDQWdJSDBnWld4elpTQm1iM0lvTzJ4bGJtZDBhQ0ErSUdsdVpHVjRPeUJwYm1SbGVDc3JLV2xtS0VsVFgwbE9RMHhWUkVWVElIeDhJR2x1WkdWNElHbHVJRThwZTF4dUlDQWdJQ0FnYVdZb1QxdHBibVJsZUYwZ1BUMDlJR1ZzS1hKbGRIVnliaUJKVTE5SlRrTk1WVVJGVXlCOGZDQnBibVJsZUNCOGZDQXdPMXh1SUNBZ0lIMGdjbVYwZFhKdUlDRkpVMTlKVGtOTVZVUkZVeUFtSmlBdE1UdGNiaUFnZlR0Y2JuMDdJaXdpTHk4Z1oyVjBkR2x1WnlCMFlXY2dabkp2YlNBeE9TNHhMak11TmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuS0NsY2JuWmhjaUJqYjJZZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjJZbktWeHVJQ0FzSUZSQlJ5QTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2QwYjFOMGNtbHVaMVJoWnljcFhHNGdJQzh2SUVWVE15QjNjbTl1WnlCb1pYSmxYRzRnSUN3Z1FWSkhJRDBnWTI5bUtHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQmhjbWQxYldWdWRITTdJSDBvS1NrZ1BUMGdKMEZ5WjNWdFpXNTBjeWM3WEc1Y2JpOHZJR1poYkd4aVlXTnJJR1p2Y2lCSlJURXhJRk5qY21sd2RDQkJZMk5sYzNNZ1JHVnVhV1ZrSUdWeWNtOXlYRzUyWVhJZ2RISjVSMlYwSUQwZ1puVnVZM1JwYjI0b2FYUXNJR3RsZVNsN1hHNGdJSFJ5ZVNCN1hHNGdJQ0FnY21WMGRYSnVJR2wwVzJ0bGVWMDdYRzRnSUgwZ1kyRjBZMmdvWlNsN0lDOHFJR1Z0Y0hSNUlDb3ZJSDFjYm4wN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQjJZWElnVHl3Z1ZDd2dRanRjYmlBZ2NtVjBkWEp1SUdsMElEMDlQU0IxYm1SbFptbHVaV1FnUHlBblZXNWtaV1pwYm1Wa0p5QTZJR2wwSUQwOVBTQnVkV3hzSUQ4Z0owNTFiR3duWEc0Z0lDQWdMeThnUUVCMGIxTjBjbWx1WjFSaFp5QmpZWE5sWEc0Z0lDQWdPaUIwZVhCbGIyWWdLRlFnUFNCMGNubEhaWFFvVHlBOUlFOWlhbVZqZENocGRDa3NJRlJCUnlrcElEMDlJQ2R6ZEhKcGJtY25JRDhnVkZ4dUlDQWdJQzh2SUdKMWFXeDBhVzVVWVdjZ1kyRnpaVnh1SUNBZ0lEb2dRVkpISUQ4Z1kyOW1LRThwWEc0Z0lDQWdMeThnUlZNeklHRnlaM1Z0Wlc1MGN5Qm1ZV3hzWW1GamExeHVJQ0FnSURvZ0tFSWdQU0JqYjJZb1R5a3BJRDA5SUNkUFltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCUExtTmhiR3hsWlNBOVBTQW5ablZ1WTNScGIyNG5JRDhnSjBGeVozVnRaVzUwY3ljZ09pQkNPMXh1ZlRzaUxDSjJZWElnZEc5VGRISnBibWNnUFNCN2ZTNTBiMU4wY21sdVp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0dsMEtTNXpiR2xqWlNnNExDQXRNU2s3WEc1OU95SXNJblpoY2lCamIzSmxJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZG1WeWMybHZiam9nSnpJdU5DNHdKMzA3WEc1cFppaDBlWEJsYjJZZ1gxOWxJRDA5SUNkdWRXMWlaWEluS1Y5ZlpTQTlJR052Y21VN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGRXNWtaV1lpTENJdkx5QnZjSFJwYjI1aGJDQXZJSE5wYlhCc1pTQmpiMjUwWlhoMElHSnBibVJwYm1kY2JuWmhjaUJoUm5WdVkzUnBiMjRnUFNCeVpYRjFhWEpsS0NjdUwxOWhMV1oxYm1OMGFXOXVKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dadUxDQjBhR0YwTENCc1pXNW5kR2dwZTF4dUlDQmhSblZ1WTNScGIyNG9abTRwTzF4dUlDQnBaaWgwYUdGMElEMDlQU0IxYm1SbFptbHVaV1FwY21WMGRYSnVJR1p1TzF4dUlDQnpkMmwwWTJnb2JHVnVaM1JvS1h0Y2JpQWdJQ0JqWVhObElERTZJSEpsZEhWeWJpQm1kVzVqZEdsdmJpaGhLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzSUdFcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnWTJGelpTQXlPaUJ5WlhSMWNtNGdablZ1WTNScGIyNG9ZU3dnWWlsN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm00dVkyRnNiQ2gwYUdGMExDQmhMQ0JpS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJR05oYzJVZ016b2djbVYwZFhKdUlHWjFibU4wYVc5dUtHRXNJR0lzSUdNcGUxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDd2dZU3dnWWl3Z1l5azdYRzRnSUNBZ2ZUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0b0x5b2dMaTR1WVhKbmN5QXFMeWw3WEc0Z0lDQWdjbVYwZFhKdUlHWnVMbUZ3Y0d4NUtIUm9ZWFFzSUdGeVozVnRaVzUwY3lrN1hHNGdJSDA3WEc1OU95SXNJaTh2SURjdU1pNHhJRkpsY1hWcGNtVlBZbXBsWTNSRGIyVnlZMmxpYkdVb1lYSm5kVzFsYm5RcFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2FXWW9hWFFnUFQwZ2RXNWtaV1pwYm1Wa0tYUm9jbTkzSUZSNWNHVkZjbkp2Y2loY0lrTmhiaWQwSUdOaGJHd2diV1YwYUc5a0lHOXVJQ0JjSWlBcklHbDBLVHRjYmlBZ2NtVjBkWEp1SUdsME8xeHVmVHNpTENJdkx5QlVhR0Z1YXlkeklFbEZPQ0JtYjNJZ2FHbHpJR1oxYm01NUlHUmxabWx1WlZCeWIzQmxjblI1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNGeVpYRjFhWEpsS0NjdUwxOW1ZV2xzY3ljcEtHWjFibU4wYVc5dUtDbDdYRzRnSUhKbGRIVnliaUJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2UzMHNJQ2RoSnl3Z2UyZGxkRG9nWm5WdVkzUnBiMjRvS1hzZ2NtVjBkWEp1SURjN0lIMTlLUzVoSUNFOUlEYzdYRzU5S1RzaUxDSjJZWElnYVhOUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBjeTF2WW1wbFkzUW5LVnh1SUNBc0lHUnZZM1Z0Wlc1MElEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWt1Wkc5amRXMWxiblJjYmlBZ0x5OGdhVzRnYjJ4a0lFbEZJSFI1Y0dWdlppQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwSUdseklDZHZZbXBsWTNRblhHNGdJQ3dnYVhNZ1BTQnBjMDlpYW1WamRDaGtiMk4xYldWdWRDa2dKaVlnYVhOUFltcGxZM1FvWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDazdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdjbVYwZFhKdUlHbHpJRDhnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHBkQ2tnT2lCN2ZUdGNibjA3SWl3aUx5OGdTVVVnT0MwZ1pHOXVKM1FnWlc1MWJTQmlkV2NnYTJWNWMxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQW9YRzRnSUNkamIyNXpkSEoxWTNSdmNpeG9ZWE5QZDI1UWNtOXdaWEowZVN4cGMxQnliM1J2ZEhsd1pVOW1MSEJ5YjNCbGNuUjVTWE5GYm5WdFpYSmhZbXhsTEhSdlRHOWpZV3hsVTNSeWFXNW5MSFJ2VTNSeWFXNW5MSFpoYkhWbFQyWW5YRzRwTG5Od2JHbDBLQ2NzSnlrN0lpd2lkbUZ5SUdkc2IySmhiQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmRzYjJKaGJDY3BYRzRnSUN3Z1kyOXlaU0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWTI5eVpTY3BYRzRnSUN3Z1kzUjRJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWTNSNEp5bGNiaUFnTENCb2FXUmxJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5bGNiaUFnTENCUVVrOVVUMVJaVUVVZ1BTQW5jSEp2ZEc5MGVYQmxKenRjYmx4dWRtRnlJQ1JsZUhCdmNuUWdQU0JtZFc1amRHbHZiaWgwZVhCbExDQnVZVzFsTENCemIzVnlZMlVwZTF4dUlDQjJZWElnU1ZOZlJrOVNRMFZFSUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1Umx4dUlDQWdJQ3dnU1ZOZlIweFBRa0ZNSUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1UjF4dUlDQWdJQ3dnU1ZOZlUxUkJWRWxESUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1VTF4dUlDQWdJQ3dnU1ZOZlVGSlBWRThnSUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1VUZ4dUlDQWdJQ3dnU1ZOZlFrbE9SQ0FnSUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1UWx4dUlDQWdJQ3dnU1ZOZlYxSkJVQ0FnSUQwZ2RIbHdaU0FtSUNSbGVIQnZjblF1VjF4dUlDQWdJQ3dnWlhod2IzSjBjeUFnSUQwZ1NWTmZSMHhQUWtGTUlEOGdZMjl5WlNBNklHTnZjbVZiYm1GdFpWMGdmSHdnS0dOdmNtVmJibUZ0WlYwZ1BTQjdmU2xjYmlBZ0lDQXNJR1Y0Y0ZCeWIzUnZJQ0E5SUdWNGNHOXlkSE5iVUZKUFZFOVVXVkJGWFZ4dUlDQWdJQ3dnZEdGeVoyVjBJQ0FnSUQwZ1NWTmZSMHhQUWtGTUlEOGdaMnh2WW1Gc0lEb2dTVk5mVTFSQlZFbERJRDhnWjJ4dlltRnNXMjVoYldWZElEb2dLR2RzYjJKaGJGdHVZVzFsWFNCOGZDQjdmU2xiVUZKUFZFOVVXVkJGWFZ4dUlDQWdJQ3dnYTJWNUxDQnZkMjRzSUc5MWREdGNiaUFnYVdZb1NWTmZSMHhQUWtGTUtYTnZkWEpqWlNBOUlHNWhiV1U3WEc0Z0lHWnZjaWhyWlhrZ2FXNGdjMjkxY21ObEtYdGNiaUFnSUNBdkx5QmpiMjUwWVdsdWN5QnBiaUJ1WVhScGRtVmNiaUFnSUNCdmQyNGdQU0FoU1ZOZlJrOVNRMFZFSUNZbUlIUmhjbWRsZENBbUppQjBZWEpuWlhSYmEyVjVYU0FoUFQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUdsbUtHOTNiaUFtSmlCclpYa2dhVzRnWlhod2IzSjBjeWxqYjI1MGFXNTFaVHRjYmlBZ0lDQXZMeUJsZUhCdmNuUWdibUYwYVhabElHOXlJSEJoYzNObFpGeHVJQ0FnSUc5MWRDQTlJRzkzYmlBL0lIUmhjbWRsZEZ0clpYbGRJRG9nYzI5MWNtTmxXMnRsZVYwN1hHNGdJQ0FnTHk4Z2NISmxkbVZ1ZENCbmJHOWlZV3dnY0c5c2JIVjBhVzl1SUdadmNpQnVZVzFsYzNCaFkyVnpYRzRnSUNBZ1pYaHdiM0owYzF0clpYbGRJRDBnU1ZOZlIweFBRa0ZNSUNZbUlIUjVjR1Z2WmlCMFlYSm5aWFJiYTJWNVhTQWhQU0FuWm5WdVkzUnBiMjRuSUQ4Z2MyOTFjbU5sVzJ0bGVWMWNiaUFnSUNBdkx5QmlhVzVrSUhScGJXVnljeUIwYnlCbmJHOWlZV3dnWm05eUlHTmhiR3dnWm5KdmJTQmxlSEJ2Y25RZ1kyOXVkR1Y0ZEZ4dUlDQWdJRG9nU1ZOZlFrbE9SQ0FtSmlCdmQyNGdQeUJqZEhnb2IzVjBMQ0JuYkc5aVlXd3BYRzRnSUNBZ0x5OGdkM0poY0NCbmJHOWlZV3dnWTI5dWMzUnlkV04wYjNKeklHWnZjaUJ3Y21WMlpXNTBJR05vWVc1blpTQjBhR1Z0SUdsdUlHeHBZbkpoY25sY2JpQWdJQ0E2SUVsVFgxZFNRVkFnSmlZZ2RHRnlaMlYwVzJ0bGVWMGdQVDBnYjNWMElEOGdLR1oxYm1OMGFXOXVLRU1wZTF4dUlDQWdJQ0FnZG1GeUlFWWdQU0JtZFc1amRHbHZiaWhoTENCaUxDQmpLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeUJwYm5OMFlXNWpaVzltSUVNcGUxeHVJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdNRG9nY21WMGRYSnVJRzVsZHlCRE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQXhPaUJ5WlhSMWNtNGdibVYzSUVNb1lTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJREk2SUhKbGRIVnliaUJ1WlhjZ1F5aGhMQ0JpS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJSEpsZEhWeWJpQnVaWGNnUXloaExDQmlMQ0JqS1R0Y2JpQWdJQ0FnSUNBZ2ZTQnlaWFIxY200Z1F5NWhjSEJzZVNoMGFHbHpMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUVaYlVGSlBWRTlVV1ZCRlhTQTlJRU5iVUZKUFZFOVVXVkJGWFR0Y2JpQWdJQ0FnSUhKbGRIVnliaUJHTzF4dUlDQWdJQzh2SUcxaGEyVWdjM1JoZEdsaklIWmxjbk5wYjI1eklHWnZjaUJ3Y205MGIzUjVjR1VnYldWMGFHOWtjMXh1SUNBZ0lIMHBLRzkxZENrZ09pQkpVMTlRVWs5VVR5QW1KaUIwZVhCbGIyWWdiM1YwSUQwOUlDZG1kVzVqZEdsdmJpY2dQeUJqZEhnb1JuVnVZM1JwYjI0dVkyRnNiQ3dnYjNWMEtTQTZJRzkxZER0Y2JpQWdJQ0F2THlCbGVIQnZjblFnY0hKdmRHOGdiV1YwYUc5a2N5QjBieUJqYjNKbExpVkRUMDVUVkZKVlExUlBVaVV1YldWMGFHOWtjeTRsVGtGTlJTVmNiaUFnSUNCcFppaEpVMTlRVWs5VVR5bDdYRzRnSUNBZ0lDQW9aWGh3YjNKMGN5NTJhWEowZFdGc0lIeDhJQ2hsZUhCdmNuUnpMblpwY25SMVlXd2dQU0I3ZlNrcFcydGxlVjBnUFNCdmRYUTdYRzRnSUNBZ0lDQXZMeUJsZUhCdmNuUWdjSEp2ZEc4Z2JXVjBhRzlrY3lCMGJ5QmpiM0psTGlWRFQwNVRWRkpWUTFSUFVpVXVjSEp2ZEc5MGVYQmxMaVZPUVUxRkpWeHVJQ0FnSUNBZ2FXWW9kSGx3WlNBbUlDUmxlSEJ2Y25RdVVpQW1KaUJsZUhCUWNtOTBieUFtSmlBaFpYaHdVSEp2ZEc5YmEyVjVYU2xvYVdSbEtHVjRjRkJ5YjNSdkxDQnJaWGtzSUc5MWRDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVMeThnZEhsd1pTQmlhWFJ0WVhCY2JpUmxlSEJ2Y25RdVJpQTlJREU3SUNBZ0x5OGdabTl5WTJWa1hHNGtaWGh3YjNKMExrY2dQU0F5T3lBZ0lDOHZJR2RzYjJKaGJGeHVKR1Y0Y0c5eWRDNVRJRDBnTkRzZ0lDQXZMeUJ6ZEdGMGFXTmNiaVJsZUhCdmNuUXVVQ0E5SURnN0lDQWdMeThnY0hKdmRHOWNiaVJsZUhCdmNuUXVRaUE5SURFMk95QWdMeThnWW1sdVpGeHVKR1Y0Y0c5eWRDNVhJRDBnTXpJN0lDQXZMeUIzY21Gd1hHNGtaWGh3YjNKMExsVWdQU0EyTkRzZ0lDOHZJSE5oWm1WY2JpUmxlSEJ2Y25RdVVpQTlJREV5T0RzZ0x5OGdjbVZoYkNCd2NtOTBieUJ0WlhSb2IyUWdabTl5SUdCc2FXSnlZWEo1WUNCY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0pHVjRjRzl5ZERzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHVjRaV01wZTF4dUlDQjBjbmtnZTF4dUlDQWdJSEpsZEhWeWJpQWhJV1Y0WldNb0tUdGNiaUFnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdmVnh1ZlRzaUxDSXZMeUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2ZW14dmFYSnZZMnN2WTI5eVpTMXFjeTlwYzNOMVpYTXZPRFlqYVhOemRXVmpiMjF0Wlc1MExURXhOVGMxT1RBeU9GeHVkbUZ5SUdkc2IySmhiQ0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZEhsd1pXOW1JSGRwYm1SdmR5QWhQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdVRXRjBhQ0E5UFNCTllYUm9YRzRnSUQ4Z2QybHVaRzkzSURvZ2RIbHdaVzltSUhObGJHWWdJVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjMlZzWmk1TllYUm9JRDA5SUUxaGRHZ2dQeUJ6Wld4bUlEb2dSblZ1WTNScGIyNG9KM0psZEhWeWJpQjBhR2x6Snlrb0tUdGNibWxtS0hSNWNHVnZaaUJmWDJjZ1BUMGdKMjUxYldKbGNpY3BYMTluSUQwZ1oyeHZZbUZzT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhWdVpHVm1JaXdpZG1GeUlHaGhjMDkzYmxCeWIzQmxjblI1SUQwZ2UzMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBMQ0JyWlhrcGUxeHVJQ0J5WlhSMWNtNGdhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2hwZEN3Z2EyVjVLVHRjYm4wN0lpd2lkbUZ5SUdSUUlDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaSEFuS1Z4dUlDQXNJR055WldGMFpVUmxjMk1nUFNCeVpYRjFhWEpsS0NjdUwxOXdjbTl3WlhKMGVTMWtaWE5qSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZYMlJsYzJOeWFYQjBiM0p6SnlrZ1B5Qm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lHdGxlU3dnZG1Gc2RXVXBlMXh1SUNCeVpYUjFjbTRnWkZBdVppaHZZbXBsWTNRc0lHdGxlU3dnWTNKbFlYUmxSR1Z6WXlneExDQjJZV3gxWlNrcE8xeHVmU0E2SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnYTJWNUxDQjJZV3gxWlNsN1hHNGdJRzlpYW1WamRGdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lISmxkSFZ5YmlCdlltcGxZM1E3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWt1Wkc5amRXMWxiblFnSmlZZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwT3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0lYSmxjWFZwY21Vb0p5NHZYMlJsYzJOeWFYQjBiM0p6SnlrZ0ppWWdJWEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h5WlhGMWFYSmxLQ2N1TDE5a2IyMHRZM0psWVhSbEp5a29KMlJwZGljcExDQW5ZU2NzSUh0blpYUTZJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUEzT3lCOWZTa3VZU0FoUFNBM08xeHVmU2s3SWl3aUx5OGdabUZzYkdKaFkyc2dabTl5SUc1dmJpMWhjbkpoZVMxc2FXdGxJRVZUTXlCaGJtUWdibTl1TFdWdWRXMWxjbUZpYkdVZ2IyeGtJRlk0SUhOMGNtbHVaM05jYm5aaGNpQmpiMllnUFNCeVpYRjFhWEpsS0NjdUwxOWpiMlluS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wS0NkNkp5a3VjSEp2Y0dWeWRIbEpjMFZ1ZFcxbGNtRmliR1VvTUNrZ1B5QlBZbXBsWTNRZ09pQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lISmxkSFZ5YmlCamIyWW9hWFFwSUQwOUlDZFRkSEpwYm1jbklEOGdhWFF1YzNCc2FYUW9KeWNwSURvZ1QySnFaV04wS0dsMEtUdGNibjA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdhWFFnUFQwOUlDZHZZbXBsWTNRbklEOGdhWFFnSVQwOUlHNTFiR3dnT2lCMGVYQmxiMllnYVhRZ1BUMDlJQ2RtZFc1amRHbHZiaWM3WEc1OU95SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JuWmhjaUJqY21WaGRHVWdJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFqY21WaGRHVW5LVnh1SUNBc0lHUmxjMk55YVhCMGIzSWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjSEp2Y0dWeWRIa3RaR1Z6WXljcFhHNGdJQ3dnYzJWMFZHOVRkSEpwYm1kVVlXY2dQU0J5WlhGMWFYSmxLQ2N1TDE5elpYUXRkRzh0YzNSeWFXNW5MWFJoWnljcFhHNGdJQ3dnU1hSbGNtRjBiM0pRY205MGIzUjVjR1VnUFNCN2ZUdGNibHh1THk4Z01qVXVNUzR5TGpFdU1TQWxTWFJsY21GMGIzSlFjbTkwYjNSNWNHVWxXMEJBYVhSbGNtRjBiM0pkS0NsY2JuSmxjWFZwY21Vb0p5NHZYMmhwWkdVbktTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2djbVZ4ZFdseVpTZ25MaTlmZDJ0ekp5a29KMmwwWlhKaGRHOXlKeWtzSUdaMWJtTjBhVzl1S0NsN0lISmxkSFZ5YmlCMGFHbHpPeUI5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaERiMjV6ZEhKMVkzUnZjaXdnVGtGTlJTd2dibVY0ZENsN1hHNGdJRU52Ym5OMGNuVmpkRzl5TG5CeWIzUnZkSGx3WlNBOUlHTnlaV0YwWlNoSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlN3Z2UyNWxlSFE2SUdSbGMyTnlhWEIwYjNJb01Td2dibVY0ZENsOUtUdGNiaUFnYzJWMFZHOVRkSEpwYm1kVVlXY29RMjl1YzNSeWRXTjBiM0lzSUU1QlRVVWdLeUFuSUVsMFpYSmhkRzl5SnlrN1hHNTlPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lCTVNVSlNRVkpaSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyeHBZbkpoY25rbktWeHVJQ0FzSUNSbGVIQnZjblFnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlpYaHdiM0owSnlsY2JpQWdMQ0J5WldSbFptbHVaU0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNKbFpHVm1hVzVsSnlsY2JpQWdMQ0JvYVdSbElDQWdJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJocFpHVW5LVnh1SUNBc0lHaGhjeUFnSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR0Z6SnlsY2JpQWdMQ0JKZEdWeVlYUnZjbk1nSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcFhHNGdJQ3dnSkdsMFpYSkRjbVZoZEdVZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5cGRHVnlMV055WldGMFpTY3BYRzRnSUN3Z2MyVjBWRzlUZEhKcGJtZFVZV2NnUFNCeVpYRjFhWEpsS0NjdUwxOXpaWFF0ZEc4dGMzUnlhVzVuTFhSaFp5Y3BYRzRnSUN3Z1oyVjBVSEp2ZEc5MGVYQmxUMllnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFozQnZKeWxjYmlBZ0xDQkpWRVZTUVZSUFVpQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcEtDZHBkR1Z5WVhSdmNpY3BYRzRnSUN3Z1FsVkhSMWtnSUNBZ0lDQWdJQ0FnUFNBaEtGdGRMbXRsZVhNZ0ppWWdKMjVsZUhRbklHbHVJRnRkTG10bGVYTW9LU2tnTHk4Z1UyRm1ZWEpwSUdoaGN5QmlkV2RuZVNCcGRHVnlZWFJ2Y25NZ2R5OXZJR0J1WlhoMFlGeHVJQ0FzSUVaR1gwbFVSVkpCVkU5U0lDQWdJRDBnSjBCQWFYUmxjbUYwYjNJblhHNGdJQ3dnUzBWWlV5QWdJQ0FnSUNBZ0lDQWdQU0FuYTJWNWN5ZGNiaUFnTENCV1FVeFZSVk1nSUNBZ0lDQWdJQ0E5SUNkMllXeDFaWE1uTzF4dVhHNTJZWElnY21WMGRYSnVWR2hwY3lBOUlHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQjBhR2x6T3lCOU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLRUpoYzJVc0lFNUJUVVVzSUVOdmJuTjBjblZqZEc5eUxDQnVaWGgwTENCRVJVWkJWVXhVTENCSlUxOVRSVlFzSUVaUFVrTkZSQ2w3WEc0Z0lDUnBkR1Z5UTNKbFlYUmxLRU52Ym5OMGNuVmpkRzl5TENCT1FVMUZMQ0J1WlhoMEtUdGNiaUFnZG1GeUlHZGxkRTFsZEdodlpDQTlJR1oxYm1OMGFXOXVLR3RwYm1RcGUxeHVJQ0FnSUdsbUtDRkNWVWRIV1NBbUppQnJhVzVrSUdsdUlIQnliM1J2S1hKbGRIVnliaUJ3Y205MGIxdHJhVzVrWFR0Y2JpQWdJQ0J6ZDJsMFkyZ29hMmx1WkNsN1hHNGdJQ0FnSUNCallYTmxJRXRGV1ZNNklISmxkSFZ5YmlCbWRXNWpkR2x2YmlCclpYbHpLQ2w3SUhKbGRIVnliaUJ1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9kR2hwY3l3Z2EybHVaQ2s3SUgwN1hHNGdJQ0FnSUNCallYTmxJRlpCVEZWRlV6b2djbVYwZFhKdUlHWjFibU4wYVc5dUlIWmhiSFZsY3lncGV5QnlaWFIxY200Z2JtVjNJRU52Ym5OMGNuVmpkRzl5S0hSb2FYTXNJR3RwYm1RcE95QjlPMXh1SUNBZ0lIMGdjbVYwZFhKdUlHWjFibU4wYVc5dUlHVnVkSEpwWlhNb0tYc2djbVYwZFhKdUlHNWxkeUJEYjI1emRISjFZM1J2Y2loMGFHbHpMQ0JyYVc1a0tUc2dmVHRjYmlBZ2ZUdGNiaUFnZG1GeUlGUkJSeUFnSUNBZ0lDQWdQU0JPUVUxRklDc2dKeUJKZEdWeVlYUnZjaWRjYmlBZ0lDQXNJRVJGUmw5V1FVeFZSVk1nUFNCRVJVWkJWVXhVSUQwOUlGWkJURlZGVTF4dUlDQWdJQ3dnVmtGTVZVVlRYMEpWUnlBOUlHWmhiSE5sWEc0Z0lDQWdMQ0J3Y205MGJ5QWdJQ0FnSUQwZ1FtRnpaUzV3Y205MGIzUjVjR1ZjYmlBZ0lDQXNJQ1J1WVhScGRtVWdJQ0FnUFNCd2NtOTBiMXRKVkVWU1FWUlBVbDBnZkh3Z2NISnZkRzliUmtaZlNWUkZVa0ZVVDFKZElIeDhJRVJGUmtGVlRGUWdKaVlnY0hKdmRHOWJSRVZHUVZWTVZGMWNiaUFnSUNBc0lDUmtaV1poZFd4MElDQWdQU0FrYm1GMGFYWmxJSHg4SUdkbGRFMWxkR2h2WkNoRVJVWkJWVXhVS1Z4dUlDQWdJQ3dnSkdWdWRISnBaWE1nSUNBOUlFUkZSa0ZWVEZRZ1B5QWhSRVZHWDFaQlRGVkZVeUEvSUNSa1pXWmhkV3gwSURvZ1oyVjBUV1YwYUc5a0tDZGxiblJ5YVdWekp5a2dPaUIxYm1SbFptbHVaV1JjYmlBZ0lDQXNJQ1JoYm5sT1lYUnBkbVVnUFNCT1FVMUZJRDA5SUNkQmNuSmhlU2NnUHlCd2NtOTBieTVsYm5SeWFXVnpJSHg4SUNSdVlYUnBkbVVnT2lBa2JtRjBhWFpsWEc0Z0lDQWdMQ0J0WlhSb2IyUnpMQ0JyWlhrc0lFbDBaWEpoZEc5eVVISnZkRzkwZVhCbE8xeHVJQ0F2THlCR2FYZ2dibUYwYVhabFhHNGdJR2xtS0NSaGJubE9ZWFJwZG1VcGUxeHVJQ0FnSUVsMFpYSmhkRzl5VUhKdmRHOTBlWEJsSUQwZ1oyVjBVSEp2ZEc5MGVYQmxUMllvSkdGdWVVNWhkR2wyWlM1allXeHNLRzVsZHlCQ1lYTmxLU2s3WEc0Z0lDQWdhV1lvU1hSbGNtRjBiM0pRY205MGIzUjVjR1VnSVQwOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVcGUxeHVJQ0FnSUNBZ0x5OGdVMlYwSUVCQWRHOVRkSEpwYm1kVVlXY2dkRzhnYm1GMGFYWmxJR2wwWlhKaGRHOXljMXh1SUNBZ0lDQWdjMlYwVkc5VGRISnBibWRVWVdjb1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVc0lGUkJSeXdnZEhKMVpTazdYRzRnSUNBZ0lDQXZMeUJtYVhnZ1ptOXlJSE52YldVZ2IyeGtJR1Z1WjJsdVpYTmNiaUFnSUNBZ0lHbG1LQ0ZNU1VKU1FWSlpJQ1ltSUNGb1lYTW9TWFJsY21GMGIzSlFjbTkwYjNSNWNHVXNJRWxVUlZKQlZFOVNLU2xvYVdSbEtFbDBaWEpoZEc5eVVISnZkRzkwZVhCbExDQkpWRVZTUVZSUFVpd2djbVYwZFhKdVZHaHBjeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJQzh2SUdacGVDQkJjbkpoZVNON2RtRnNkV1Z6TENCQVFHbDBaWEpoZEc5eWZTNXVZVzFsSUdsdUlGWTRJQzhnUmtaY2JpQWdhV1lvUkVWR1gxWkJURlZGVXlBbUppQWtibUYwYVhabElDWW1JQ1J1WVhScGRtVXVibUZ0WlNBaFBUMGdWa0ZNVlVWVEtYdGNiaUFnSUNCV1FVeFZSVk5mUWxWSElEMGdkSEoxWlR0Y2JpQWdJQ0FrWkdWbVlYVnNkQ0E5SUdaMWJtTjBhVzl1SUhaaGJIVmxjeWdwZXlCeVpYUjFjbTRnSkc1aGRHbDJaUzVqWVd4c0tIUm9hWE1wT3lCOU8xeHVJQ0I5WEc0Z0lDOHZJRVJsWm1sdVpTQnBkR1Z5WVhSdmNseHVJQ0JwWmlnb0lVeEpRbEpCVWxrZ2ZId2dSazlTUTBWRUtTQW1KaUFvUWxWSFIxa2dmSHdnVmtGTVZVVlRYMEpWUnlCOGZDQWhjSEp2ZEc5YlNWUkZVa0ZVVDFKZEtTbDdYRzRnSUNBZ2FHbGtaU2h3Y205MGJ5d2dTVlJGVWtGVVQxSXNJQ1JrWldaaGRXeDBLVHRjYmlBZ2ZWeHVJQ0F2THlCUWJIVm5JR1p2Y2lCc2FXSnlZWEo1WEc0Z0lFbDBaWEpoZEc5eWMxdE9RVTFGWFNBOUlDUmtaV1poZFd4ME8xeHVJQ0JKZEdWeVlYUnZjbk5iVkVGSFhTQWdQU0J5WlhSMWNtNVVhR2x6TzF4dUlDQnBaaWhFUlVaQlZVeFVLWHRjYmlBZ0lDQnRaWFJvYjJSeklEMGdlMXh1SUNBZ0lDQWdkbUZzZFdWek9pQWdSRVZHWDFaQlRGVkZVeUEvSUNSa1pXWmhkV3gwSURvZ1oyVjBUV1YwYUc5a0tGWkJURlZGVXlrc1hHNGdJQ0FnSUNCclpYbHpPaUFnSUNCSlUxOVRSVlFnSUNBZ0lEOGdKR1JsWm1GMWJIUWdPaUJuWlhSTlpYUm9iMlFvUzBWWlV5a3NYRzRnSUNBZ0lDQmxiblJ5YVdWek9pQWtaVzUwY21sbGMxeHVJQ0FnSUgwN1hHNGdJQ0FnYVdZb1JrOVNRMFZFS1dadmNpaHJaWGtnYVc0Z2JXVjBhRzlrY3lsN1hHNGdJQ0FnSUNCcFppZ2hLR3RsZVNCcGJpQndjbTkwYnlrcGNtVmtaV1pwYm1Vb2NISnZkRzhzSUd0bGVTd2diV1YwYUc5a2MxdHJaWGxkS1R0Y2JpQWdJQ0I5SUdWc2MyVWdKR1Y0Y0c5eWRDZ2taWGh3YjNKMExsQWdLeUFrWlhod2IzSjBMa1lnS2lBb1FsVkhSMWtnZkh3Z1ZrRk1WVVZUWDBKVlJ5a3NJRTVCVFVVc0lHMWxkR2h2WkhNcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdFpYUm9iMlJ6TzF4dWZUc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1J2Ym1Vc0lIWmhiSFZsS1h0Y2JpQWdjbVYwZFhKdUlIdDJZV3gxWlRvZ2RtRnNkV1VzSUdSdmJtVTZJQ0VoWkc5dVpYMDdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UzMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0IwY25WbE95SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JpOHZJREU1TGpFdU1pNHhJRTlpYW1WamRDNWhjM05wWjI0b2RHRnlaMlYwTENCemIzVnlZMlVzSUM0dUxpbGNiblpoY2lCblpYUkxaWGx6SUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMXJaWGx6SnlsY2JpQWdMQ0JuVDFCVElDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxbmIzQnpKeWxjYmlBZ0xDQndTVVVnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzF3YVdVbktWeHVJQ0FzSUhSdlQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YjJKcVpXTjBKeWxjYmlBZ0xDQkpUMkpxWldOMElDQTlJSEpsY1hWcGNtVW9KeTR2WDJsdlltcGxZM1FuS1Z4dUlDQXNJQ1JoYzNOcFoyNGdJRDBnVDJKcVpXTjBMbUZ6YzJsbmJqdGNibHh1THk4Z2MyaHZkV3hrSUhkdmNtc2dkMmwwYUNCemVXMWliMnh6SUdGdVpDQnphRzkxYkdRZ2FHRjJaU0JrWlhSbGNtMXBibWx6ZEdsaklIQnliM0JsY25SNUlHOXlaR1Z5SUNoV09DQmlkV2NwWEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNFa1lYTnphV2R1SUh4OElISmxjWFZwY21Vb0p5NHZYMlpoYVd4ekp5a29ablZ1WTNScGIyNG9LWHRjYmlBZ2RtRnlJRUVnUFNCN2ZWeHVJQ0FnSUN3Z1FpQTlJSHQ5WEc0Z0lDQWdMQ0JUSUQwZ1UzbHRZbTlzS0NsY2JpQWdJQ0FzSUVzZ1BTQW5ZV0pqWkdWbVoyaHBhbXRzYlc1dmNIRnljM1FuTzF4dUlDQkJXMU5kSUQwZ056dGNiaUFnU3k1emNHeHBkQ2duSnlrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlocktYc2dRbHRyWFNBOUlHczdJSDBwTzF4dUlDQnlaWFIxY200Z0pHRnpjMmxuYmloN2ZTd2dRU2xiVTEwZ0lUMGdOeUI4ZkNCUFltcGxZM1F1YTJWNWN5Z2tZWE56YVdkdUtIdDlMQ0JDS1NrdWFtOXBiaWduSnlrZ0lUMGdTenRjYm4wcElEOGdablZ1WTNScGIyNGdZWE56YVdkdUtIUmhjbWRsZEN3Z2MyOTFjbU5sS1hzZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJHbHVaU0J1YnkxMWJuVnpaV1F0ZG1GeWMxeHVJQ0IyWVhJZ1ZDQWdJQ0FnUFNCMGIwOWlhbVZqZENoMFlYSm5aWFFwWEc0Z0lDQWdMQ0JoVEdWdUlDQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHaGNiaUFnSUNBc0lHbHVaR1Y0SUQwZ01WeHVJQ0FnSUN3Z1oyVjBVM2x0WW05c2N5QTlJR2RQVUZNdVpseHVJQ0FnSUN3Z2FYTkZiblZ0SUNBZ0lDQTlJSEJKUlM1bU8xeHVJQ0IzYUdsc1pTaGhUR1Z1SUQ0Z2FXNWtaWGdwZTF4dUlDQWdJSFpoY2lCVElDQWdJQ0FnUFNCSlQySnFaV04wS0dGeVozVnRaVzUwYzF0cGJtUmxlQ3NyWFNsY2JpQWdJQ0FnSUN3Z2EyVjVjeUFnSUQwZ1oyVjBVM2x0WW05c2N5QS9JR2RsZEV0bGVYTW9VeWt1WTI5dVkyRjBLR2RsZEZONWJXSnZiSE1vVXlrcElEb2daMlYwUzJWNWN5aFRLVnh1SUNBZ0lDQWdMQ0JzWlc1bmRHZ2dQU0JyWlhsekxteGxibWQwYUZ4dUlDQWdJQ0FnTENCcUlDQWdJQ0FnUFNBd1hHNGdJQ0FnSUNBc0lHdGxlVHRjYmlBZ0lDQjNhR2xzWlNoc1pXNW5kR2dnUGlCcUtXbG1LR2x6Ulc1MWJTNWpZV3hzS0ZNc0lHdGxlU0E5SUd0bGVYTmJhaXNyWFNrcFZGdHJaWGxkSUQwZ1UxdHJaWGxkTzF4dUlDQjlJSEpsZEhWeWJpQlVPMXh1ZlNBNklDUmhjM05wWjI0N0lpd2lMeThnTVRrdU1TNHlMaklnTHlBeE5TNHlMak11TlNCUFltcGxZM1F1WTNKbFlYUmxLRThnV3l3Z1VISnZjR1Z5ZEdsbGMxMHBYRzUyWVhJZ1lXNVBZbXBsWTNRZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5aGJpMXZZbXBsWTNRbktWeHVJQ0FzSUdSUWN5QWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYjJKcVpXTjBMV1J3Y3ljcFhHNGdJQ3dnWlc1MWJVSjFaMHRsZVhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlsYm5WdExXSjFaeTFyWlhsekp5bGNiaUFnTENCSlJWOVFVazlVVHlBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNOb1lYSmxaQzFyWlhrbktTZ25TVVZmVUZKUFZFOG5LVnh1SUNBc0lFVnRjSFI1SUNBZ0lDQWdJRDBnWm5WdVkzUnBiMjRvS1hzZ0x5b2daVzF3ZEhrZ0tpOGdmVnh1SUNBc0lGQlNUMVJQVkZsUVJTQWdJRDBnSjNCeWIzUnZkSGx3WlNjN1hHNWNiaTh2SUVOeVpXRjBaU0J2WW1wbFkzUWdkMmwwYUNCbVlXdGxJR0J1ZFd4c1lDQndjbTkwYjNSNWNHVTZJSFZ6WlNCcFpuSmhiV1VnVDJKcVpXTjBJSGRwZEdnZ1kyeGxZWEpsWkNCd2NtOTBiM1I1Y0dWY2JuWmhjaUJqY21WaGRHVkVhV04wSUQwZ1puVnVZM1JwYjI0b0tYdGNiaUFnTHk4Z1ZHaHlZWE5vTENCM1lYTjBaU0JoYm1RZ2MyOWtiMjE1T2lCSlJTQkhReUJpZFdkY2JpQWdkbUZ5SUdsbWNtRnRaU0E5SUhKbGNYVnBjbVVvSnk0dlgyUnZiUzFqY21WaGRHVW5LU2duYVdaeVlXMWxKeWxjYmlBZ0lDQXNJR2tnSUNBZ0lDQTlJR1Z1ZFcxQ2RXZExaWGx6TG14bGJtZDBhRnh1SUNBZ0lDd2diSFFnSUNBZ0lEMGdKenduWEc0Z0lDQWdMQ0JuZENBZ0lDQWdQU0FuUGlkY2JpQWdJQ0FzSUdsbWNtRnRaVVJ2WTNWdFpXNTBPMXh1SUNCcFpuSmhiV1V1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp6dGNiaUFnY21WeGRXbHlaU2duTGk5ZmFIUnRiQ2NwTG1Gd2NHVnVaRU5vYVd4a0tHbG1jbUZ0WlNrN1hHNGdJR2xtY21GdFpTNXpjbU1nUFNBbmFtRjJZWE5qY21sd2REb25PeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWE5qY21sd2RDMTFjbXhjYmlBZ0x5OGdZM0psWVhSbFJHbGpkQ0E5SUdsbWNtRnRaUzVqYjI1MFpXNTBWMmx1Wkc5M0xrOWlhbVZqZER0Y2JpQWdMeThnYUhSdGJDNXlaVzF2ZG1WRGFHbHNaQ2hwWm5KaGJXVXBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQ0E5SUdsbWNtRnRaUzVqYjI1MFpXNTBWMmx1Wkc5M0xtUnZZM1Z0Wlc1ME8xeHVJQ0JwWm5KaGJXVkViMk4xYldWdWRDNXZjR1Z1S0NrN1hHNGdJR2xtY21GdFpVUnZZM1Z0Wlc1MExuZHlhWFJsS0d4MElDc2dKM05qY21sd2RDY2dLeUJuZENBcklDZGtiMk4xYldWdWRDNUdQVTlpYW1WamRDY2dLeUJzZENBcklDY3ZjMk55YVhCMEp5QXJJR2QwS1R0Y2JpQWdhV1p5WVcxbFJHOWpkVzFsYm5RdVkyeHZjMlVvS1R0Y2JpQWdZM0psWVhSbFJHbGpkQ0E5SUdsbWNtRnRaVVJ2WTNWdFpXNTBMa1k3WEc0Z0lIZG9hV3hsS0drdExTbGtaV3hsZEdVZ1kzSmxZWFJsUkdsamRGdFFVazlVVDFSWlVFVmRXMlZ1ZFcxQ2RXZExaWGx6VzJsZFhUdGNiaUFnY21WMGRYSnVJR055WldGMFpVUnBZM1FvS1R0Y2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVDJKcVpXTjBMbU55WldGMFpTQjhmQ0JtZFc1amRHbHZiaUJqY21WaGRHVW9UeXdnVUhKdmNHVnlkR2xsY3lsN1hHNGdJSFpoY2lCeVpYTjFiSFE3WEc0Z0lHbG1LRThnSVQwOUlHNTFiR3dwZTF4dUlDQWdJRVZ0Y0hSNVcxQlNUMVJQVkZsUVJWMGdQU0JoYms5aWFtVmpkQ2hQS1R0Y2JpQWdJQ0J5WlhOMWJIUWdQU0J1WlhjZ1JXMXdkSGs3WEc0Z0lDQWdSVzF3ZEhsYlVGSlBWRTlVV1ZCRlhTQTlJRzUxYkd3N1hHNGdJQ0FnTHk4Z1lXUmtJRndpWDE5d2NtOTBiMTlmWENJZ1ptOXlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmlCd2IyeDVabWxzYkZ4dUlDQWdJSEpsYzNWc2RGdEpSVjlRVWs5VVQxMGdQU0JQTzF4dUlDQjlJR1ZzYzJVZ2NtVnpkV3gwSUQwZ1kzSmxZWFJsUkdsamRDZ3BPMXh1SUNCeVpYUjFjbTRnVUhKdmNHVnlkR2xsY3lBOVBUMGdkVzVrWldacGJtVmtJRDhnY21WemRXeDBJRG9nWkZCektISmxjM1ZzZEN3Z1VISnZjR1Z5ZEdsbGN5azdYRzU5TzF4dUlpd2lkbUZ5SUdGdVQySnFaV04wSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZllXNHRiMkpxWldOMEp5bGNiaUFnTENCSlJUaGZSRTlOWDBSRlJrbE9SU0E5SUhKbGNYVnBjbVVvSnk0dlgybGxPQzFrYjIwdFpHVm1hVzVsSnlsY2JpQWdMQ0IwYjFCeWFXMXBkR2wyWlNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxYQnlhVzFwZEdsMlpTY3BYRzRnSUN3Z1pGQWdJQ0FnSUNBZ0lDQWdJQ0FnUFNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIazdYRzVjYm1WNGNHOXlkSE11WmlBOUlISmxjWFZwY21Vb0p5NHZYMlJsYzJOeWFYQjBiM0p6SnlrZ1B5QlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtnT2lCbWRXNWpkR2x2YmlCa1pXWnBibVZRY205d1pYSjBlU2hQTENCUUxDQkJkSFJ5YVdKMWRHVnpLWHRjYmlBZ1lXNVBZbXBsWTNRb1R5azdYRzRnSUZBZ1BTQjBiMUJ5YVcxcGRHbDJaU2hRTENCMGNuVmxLVHRjYmlBZ1lXNVBZbXBsWTNRb1FYUjBjbWxpZFhSbGN5azdYRzRnSUdsbUtFbEZPRjlFVDAxZlJFVkdTVTVGS1hSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUdSUUtFOHNJRkFzSUVGMGRISnBZblYwWlhNcE8xeHVJQ0I5SUdOaGRHTm9LR1VwZXlBdktpQmxiWEIwZVNBcUx5QjlYRzRnSUdsbUtDZG5aWFFuSUdsdUlFRjBkSEpwWW5WMFpYTWdmSHdnSjNObGRDY2dhVzRnUVhSMGNtbGlkWFJsY3lsMGFISnZkeUJVZVhCbFJYSnliM0lvSjBGalkyVnpjMjl5Y3lCdWIzUWdjM1Z3Y0c5eWRHVmtJU2NwTzF4dUlDQnBaaWduZG1Gc2RXVW5JR2x1SUVGMGRISnBZblYwWlhNcFQxdFFYU0E5SUVGMGRISnBZblYwWlhNdWRtRnNkV1U3WEc0Z0lISmxkSFZ5YmlCUE8xeHVmVHNpTENKMllYSWdaRkFnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktWeHVJQ0FzSUdGdVQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQm5aWFJMWlhseklDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFyWlhsekp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGFXVnpJRG9nWm5WdVkzUnBiMjRnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhQTENCUWNtOXdaWEowYVdWektYdGNiaUFnWVc1UFltcGxZM1FvVHlrN1hHNGdJSFpoY2lCclpYbHpJQ0FnUFNCblpYUkxaWGx6S0ZCeWIzQmxjblJwWlhNcFhHNGdJQ0FnTENCc1pXNW5kR2dnUFNCclpYbHpMbXhsYm1kMGFGeHVJQ0FnSUN3Z2FTQTlJREJjYmlBZ0lDQXNJRkE3WEc0Z0lIZG9hV3hsS0d4bGJtZDBhQ0ErSUdrcFpGQXVaaWhQTENCUUlEMGdhMlY1YzF0cEt5dGRMQ0JRY205d1pYSjBhV1Z6VzFCZEtUdGNiaUFnY21WMGRYSnVJRTg3WEc1OU95SXNJbVY0Y0c5eWRITXVaaUE5SUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNN0lpd2lMeThnTVRrdU1TNHlMamtnTHlBeE5TNHlMak11TWlCUFltcGxZM1F1WjJWMFVISnZkRzkwZVhCbFQyWW9UeWxjYm5aaGNpQm9ZWE1nSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaGhjeWNwWEc0Z0lDd2dkRzlQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTF2WW1wbFkzUW5LVnh1SUNBc0lFbEZYMUJTVDFSUElDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmMyaGhjbVZrTFd0bGVTY3BLQ2RKUlY5UVVrOVVUeWNwWEc0Z0lDd2dUMkpxWldOMFVISnZkRzhnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFOWlhbVZqZEM1blpYUlFjbTkwYjNSNWNHVlBaaUI4ZkNCbWRXNWpkR2x2YmloUEtYdGNiaUFnVHlBOUlIUnZUMkpxWldOMEtFOHBPMXh1SUNCcFppaG9ZWE1vVHl3Z1NVVmZVRkpQVkU4cEtYSmxkSFZ5YmlCUFcwbEZYMUJTVDFSUFhUdGNiaUFnYVdZb2RIbHdaVzltSUU4dVkyOXVjM1J5ZFdOMGIzSWdQVDBnSjJaMWJtTjBhVzl1SnlBbUppQlBJR2x1YzNSaGJtTmxiMllnVHk1amIyNXpkSEoxWTNSdmNpbDdYRzRnSUNBZ2NtVjBkWEp1SUU4dVkyOXVjM1J5ZFdOMGIzSXVjSEp2ZEc5MGVYQmxPMXh1SUNCOUlISmxkSFZ5YmlCUElHbHVjM1JoYm1ObGIyWWdUMkpxWldOMElEOGdUMkpxWldOMFVISnZkRzhnT2lCdWRXeHNPMXh1ZlRzaUxDSjJZWElnYUdGeklDQWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCMGIwbFBZbXBsWTNRZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiMkpxWldOMEp5bGNiaUFnTENCaGNuSmhlVWx1WkdWNFQyWWdQU0J5WlhGMWFYSmxLQ2N1TDE5aGNuSmhlUzFwYm1Oc2RXUmxjeWNwS0daaGJITmxLVnh1SUNBc0lFbEZYMUJTVDFSUElDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzTm9ZWEpsWkMxclpYa25LU2duU1VWZlVGSlBWRThuS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lHNWhiV1Z6S1h0Y2JpQWdkbUZ5SUU4Z0lDQWdJQ0E5SUhSdlNVOWlhbVZqZENodlltcGxZM1FwWEc0Z0lDQWdMQ0JwSUNBZ0lDQWdQU0F3WEc0Z0lDQWdMQ0J5WlhOMWJIUWdQU0JiWFZ4dUlDQWdJQ3dnYTJWNU8xeHVJQ0JtYjNJb2EyVjVJR2x1SUU4cGFXWW9hMlY1SUNFOUlFbEZYMUJTVDFSUEtXaGhjeWhQTENCclpYa3BJQ1ltSUhKbGMzVnNkQzV3ZFhOb0tHdGxlU2s3WEc0Z0lDOHZJRVJ2YmlkMElHVnVkVzBnWW5WbklDWWdhR2xrWkdWdUlHdGxlWE5jYmlBZ2QyaHBiR1VvYm1GdFpYTXViR1Z1WjNSb0lENGdhU2xwWmlob1lYTW9UeXdnYTJWNUlEMGdibUZ0WlhOYmFTc3JYU2twZTF4dUlDQWdJSDVoY25KaGVVbHVaR1Y0VDJZb2NtVnpkV3gwTENCclpYa3BJSHg4SUhKbGMzVnNkQzV3ZFhOb0tHdGxlU2s3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjA3SWl3aUx5OGdNVGt1TVM0eUxqRTBJQzhnTVRVdU1pNHpMakUwSUU5aWFtVmpkQzVyWlhsektFOHBYRzUyWVhJZ0pHdGxlWE1nSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0YTJWNWN5MXBiblJsY201aGJDY3BYRzRnSUN3Z1pXNTFiVUoxWjB0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDE5bGJuVnRMV0oxWnkxclpYbHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wTG10bGVYTWdmSHdnWm5WdVkzUnBiMjRnYTJWNWN5aFBLWHRjYmlBZ2NtVjBkWEp1SUNSclpYbHpLRThzSUdWdWRXMUNkV2RMWlhsektUdGNibjA3SWl3aVpYaHdiM0owY3k1bUlEMGdlMzB1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaGlhWFJ0WVhBc0lIWmhiSFZsS1h0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCbGJuVnRaWEpoWW14bElDQTZJQ0VvWW1sMGJXRndJQ1lnTVNrc1hHNGdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQWhLR0pwZEcxaGNDQW1JRElwTEZ4dUlDQWdJSGR5YVhSaFlteGxJQ0FnSURvZ0lTaGlhWFJ0WVhBZ0ppQTBLU3hjYmlBZ0lDQjJZV3gxWlNBZ0lDQWdJQ0E2SUhaaGJIVmxYRzRnSUgwN1hHNTlPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwT3lJc0luWmhjaUJrWldZZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaSEFuS1M1bVhHNGdJQ3dnYUdGeklEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCVVFVY2dQU0J5WlhGMWFYSmxLQ2N1TDE5M2EzTW5LU2duZEc5VGRISnBibWRVWVdjbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZEN3Z2RHRm5MQ0J6ZEdGMEtYdGNiaUFnYVdZb2FYUWdKaVlnSVdoaGN5aHBkQ0E5SUhOMFlYUWdQeUJwZENBNklHbDBMbkJ5YjNSdmRIbHdaU3dnVkVGSEtTbGtaV1lvYVhRc0lGUkJSeXdnZTJOdmJtWnBaM1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhSaFozMHBPMXh1ZlRzaUxDSjJZWElnYzJoaGNtVmtJRDBnY21WeGRXbHlaU2duTGk5ZmMyaGhjbVZrSnlrb0oydGxlWE1uS1Z4dUlDQXNJSFZwWkNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNWcFpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhyWlhrcGUxeHVJQ0J5WlhSMWNtNGdjMmhoY21Wa1cydGxlVjBnZkh3Z0tITm9ZWEpsWkZ0clpYbGRJRDBnZFdsa0tHdGxlU2twTzF4dWZUc2lMQ0oyWVhJZ1oyeHZZbUZzSUQwZ2NtVnhkV2x5WlNnbkxpOWZaMnh2WW1Gc0p5bGNiaUFnTENCVFNFRlNSVVFnUFNBblgxOWpiM0psTFdwelgzTm9ZWEpsWkY5ZkoxeHVJQ0FzSUhOMGIzSmxJQ0E5SUdkc2IySmhiRnRUU0VGU1JVUmRJSHg4SUNobmJHOWlZV3hiVTBoQlVrVkVYU0E5SUh0OUtUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hMlY1S1h0Y2JpQWdjbVYwZFhKdUlITjBiM0psVzJ0bGVWMGdmSHdnS0hOMGIzSmxXMnRsZVYwZ1BTQjdmU2s3WEc1OU95SXNJblpoY2lCMGIwbHVkR1ZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGJuUmxaMlZ5SnlsY2JpQWdMQ0JrWldacGJtVmtJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWtaV1pwYm1Wa0p5azdYRzR2THlCMGNuVmxJQ0F0UGlCVGRISnBibWNqWVhSY2JpOHZJR1poYkhObElDMCtJRk4wY21sdVp5TmpiMlJsVUc5cGJuUkJkRnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhVVDE5VFZGSkpUa2NwZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0b2RHaGhkQ3dnY0c5ektYdGNiaUFnSUNCMllYSWdjeUE5SUZOMGNtbHVaeWhrWldacGJtVmtLSFJvWVhRcEtWeHVJQ0FnSUNBZ0xDQnBJRDBnZEc5SmJuUmxaMlZ5S0hCdmN5bGNiaUFnSUNBZ0lDd2diQ0E5SUhNdWJHVnVaM1JvWEc0Z0lDQWdJQ0FzSUdFc0lHSTdYRzRnSUNBZ2FXWW9hU0E4SURBZ2ZId2dhU0ErUFNCc0tYSmxkSFZ5YmlCVVQxOVRWRkpKVGtjZ1B5QW5KeUE2SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0JoSUQwZ2N5NWphR0Z5UTI5a1pVRjBLR2twTzF4dUlDQWdJSEpsZEhWeWJpQmhJRHdnTUhoa09EQXdJSHg4SUdFZ1BpQXdlR1JpWm1ZZ2ZId2dhU0FySURFZ1BUMDlJR3dnZkh3Z0tHSWdQU0J6TG1Ob1lYSkRiMlJsUVhRb2FTQXJJREVwS1NBOElEQjRaR013TUNCOGZDQmlJRDRnTUhoa1ptWm1YRzRnSUNBZ0lDQS9JRlJQWDFOVVVrbE9SeUEvSUhNdVkyaGhja0YwS0drcElEb2dZVnh1SUNBZ0lDQWdPaUJVVDE5VFZGSkpUa2NnUHlCekxuTnNhV05sS0drc0lHa2dLeUF5S1NBNklDaGhJQzBnTUhoa09EQXdJRHc4SURFd0tTQXJJQ2hpSUMwZ01IaGtZekF3S1NBcklEQjRNVEF3TURBN1hHNGdJSDA3WEc1OU95SXNJblpoY2lCMGIwbHVkR1ZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGJuUmxaMlZ5SnlsY2JpQWdMQ0J0WVhnZ0lDQWdJQ0FnUFNCTllYUm9MbTFoZUZ4dUlDQXNJRzFwYmlBZ0lDQWdJQ0E5SUUxaGRHZ3ViV2x1TzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGJtUmxlQ3dnYkdWdVozUm9LWHRjYmlBZ2FXNWtaWGdnUFNCMGIwbHVkR1ZuWlhJb2FXNWtaWGdwTzF4dUlDQnlaWFIxY200Z2FXNWtaWGdnUENBd0lEOGdiV0Y0S0dsdVpHVjRJQ3NnYkdWdVozUm9MQ0F3S1NBNklHMXBiaWhwYm1SbGVDd2diR1Z1WjNSb0tUdGNibjA3SWl3aUx5OGdOeTR4TGpRZ1ZHOUpiblJsWjJWeVhHNTJZWElnWTJWcGJDQWdQU0JOWVhSb0xtTmxhV3hjYmlBZ0xDQm1iRzl2Y2lBOUlFMWhkR2d1Wm14dmIzSTdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdjbVYwZFhKdUlHbHpUbUZPS0dsMElEMGdLMmwwS1NBL0lEQWdPaUFvYVhRZ1BpQXdJRDhnWm14dmIzSWdPaUJqWldsc0tTaHBkQ2s3WEc1OU95SXNJaTh2SUhSdklHbHVaR1Y0WldRZ2IySnFaV04wTENCMGIwOWlhbVZqZENCM2FYUm9JR1poYkd4aVlXTnJJR1p2Y2lCdWIyNHRZWEp5WVhrdGJHbHJaU0JGVXpNZ2MzUnlhVzVuYzF4dWRtRnlJRWxQWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5cGIySnFaV04wSnlsY2JpQWdMQ0JrWldacGJtVmtJRDBnY21WeGRXbHlaU2duTGk5ZlpHVm1hVzVsWkNjcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lISmxkSFZ5YmlCSlQySnFaV04wS0dSbFptbHVaV1FvYVhRcEtUdGNibjA3SWl3aUx5OGdOeTR4TGpFMUlGUnZUR1Z1WjNSb1hHNTJZWElnZEc5SmJuUmxaMlZ5SUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc1MFpXZGxjaWNwWEc0Z0lDd2diV2x1SUNBZ0lDQWdJRDBnVFdGMGFDNXRhVzQ3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2wwSUQ0Z01DQS9JRzFwYmloMGIwbHVkR1ZuWlhJb2FYUXBMQ0F3ZURGbVptWm1abVptWm1abVptWm1LU0E2SURBN0lDOHZJSEJ2ZHlneUxDQTFNeWtnTFNBeElEMDlJRGt3TURjeE9Ua3lOVFEzTkRBNU9URmNibjA3SWl3aUx5OGdOeTR4TGpFeklGUnZUMkpxWldOMEtHRnlaM1Z0Wlc1MEtWeHVkbUZ5SUdSbFptbHVaV1FnUFNCeVpYRjFhWEpsS0NjdUwxOWtaV1pwYm1Wa0p5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZENoa1pXWnBibVZrS0dsMEtTazdYRzU5T3lJc0lpOHZJRGN1TVM0eElGUnZVSEpwYldsMGFYWmxLR2x1Y0hWMElGc3NJRkJ5WldabGNuSmxaRlI1Y0dWZEtWeHVkbUZ5SUdselQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWE10YjJKcVpXTjBKeWs3WEc0dkx5QnBibk4wWldGa0lHOW1JSFJvWlNCRlV6WWdjM0JsWXlCMlpYSnphVzl1TENCM1pTQmthV1J1SjNRZ2FXMXdiR1Z0Wlc1MElFQkFkRzlRY21sdGFYUnBkbVVnWTJGelpWeHVMeThnWVc1a0lIUm9aU0J6WldOdmJtUWdZWEpuZFcxbGJuUWdMU0JtYkdGbklDMGdjSEpsWm1WeWNtVmtJSFI1Y0dVZ2FYTWdZU0J6ZEhKcGJtZGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFzSUZNcGUxeHVJQ0JwWmlnaGFYTlBZbXBsWTNRb2FYUXBLWEpsZEhWeWJpQnBkRHRjYmlBZ2RtRnlJR1p1TENCMllXdzdYRzRnSUdsbUtGTWdKaVlnZEhsd1pXOW1JQ2htYmlBOUlHbDBMblJ2VTNSeWFXNW5LU0E5UFNBblpuVnVZM1JwYjI0bklDWW1JQ0ZwYzA5aWFtVmpkQ2gyWVd3Z1BTQm1iaTVqWVd4c0tHbDBLU2twY21WMGRYSnVJSFpoYkR0Y2JpQWdhV1lvZEhsd1pXOW1JQ2htYmlBOUlHbDBMblpoYkhWbFQyWXBJRDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdJV2x6VDJKcVpXTjBLSFpoYkNBOUlHWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzF4dUlDQnBaaWdoVXlBbUppQjBlWEJsYjJZZ0tHWnVJRDBnYVhRdWRHOVRkSEpwYm1jcElEMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ0lXbHpUMkpxWldOMEtIWmhiQ0E5SUdadUxtTmhiR3dvYVhRcEtTbHlaWFIxY200Z2RtRnNPMXh1SUNCMGFISnZkeUJVZVhCbFJYSnliM0lvWENKRFlXNG5kQ0JqYjI1MlpYSjBJRzlpYW1WamRDQjBieUJ3Y21sdGFYUnBkbVVnZG1Gc2RXVmNJaWs3WEc1OU95SXNJblpoY2lCcFpDQTlJREJjYmlBZ0xDQndlQ0E5SUUxaGRHZ3VjbUZ1Wkc5dEtDazdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR3RsZVNsN1hHNGdJSEpsZEhWeWJpQW5VM2x0WW05c0tDY3VZMjl1WTJGMEtHdGxlU0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdKeWNnT2lCclpYa3NJQ2NwWHljc0lDZ3JLMmxrSUNzZ2NIZ3BMblJ2VTNSeWFXNW5LRE0yS1NrN1hHNTlPeUlzSW5aaGNpQnpkRzl5WlNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmMyaGhjbVZrSnlrb0ozZHJjeWNwWEc0Z0lDd2dkV2xrSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzVnBaQ2NwWEc0Z0lDd2dVM2x0WW05c0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyZHNiMkpoYkNjcExsTjViV0p2YkZ4dUlDQXNJRlZUUlY5VFdVMUNUMHdnUFNCMGVYQmxiMllnVTNsdFltOXNJRDA5SUNkbWRXNWpkR2x2YmljN1hHNWNiblpoY2lBa1pYaHdiM0owY3lBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2JtRnRaU2w3WEc0Z0lISmxkSFZ5YmlCemRHOXlaVnR1WVcxbFhTQjhmQ0FvYzNSdmNtVmJibUZ0WlYwZ1BWeHVJQ0FnSUZWVFJWOVRXVTFDVDB3Z0ppWWdVM2x0WW05c1cyNWhiV1ZkSUh4OElDaFZVMFZmVTFsTlFrOU1JRDhnVTNsdFltOXNJRG9nZFdsa0tTZ25VM2x0WW05c0xpY2dLeUJ1WVcxbEtTazdYRzU5TzF4dVhHNGtaWGh3YjNKMGN5NXpkRzl5WlNBOUlITjBiM0psT3lJc0luWmhjaUJqYkdGemMyOW1JQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWpiR0Z6YzI5bUp5bGNiaUFnTENCSlZFVlNRVlJQVWlBZ1BTQnlaWEYxYVhKbEtDY3VMMTkzYTNNbktTZ25hWFJsY21GMGIzSW5LVnh1SUNBc0lFbDBaWEpoZEc5eWN5QTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjNKbEp5a3VaMlYwU1hSbGNtRjBiM0pOWlhSb2IyUWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJR2xtS0dsMElDRTlJSFZ1WkdWbWFXNWxaQ2x5WlhSMWNtNGdhWFJiU1ZSRlVrRlVUMUpkWEc0Z0lDQWdmSHdnYVhSYkowQkFhWFJsY21GMGIzSW5YVnh1SUNBZ0lIeDhJRWwwWlhKaGRHOXljMXRqYkdGemMyOW1LR2wwS1YwN1hHNTlPeUlzSW5aaGNpQmhiazlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJGdUxXOWlhbVZqZENjcFhHNGdJQ3dnWjJWMElDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwyTnZjbVV1WjJWMExXbDBaWEpoZEc5eUxXMWxkR2h2WkNjcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjNKbEp5a3VaMlYwU1hSbGNtRjBiM0lnUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhaaGNpQnBkR1Z5Um00Z1BTQm5aWFFvYVhRcE8xeHVJQ0JwWmloMGVYQmxiMllnYVhSbGNrWnVJQ0U5SUNkbWRXNWpkR2x2YmljcGRHaHliM2NnVkhsd1pVVnljbTl5S0dsMElDc2dKeUJwY3lCdWIzUWdhWFJsY21GaWJHVWhKeWs3WEc0Z0lISmxkSFZ5YmlCaGJrOWlhbVZqZENocGRHVnlSbTR1WTJGc2JDaHBkQ2twTzF4dWZUc2lMQ0luZFhObElITjBjbWxqZENjN1hHNTJZWElnWVdSa1ZHOVZibk5qYjNCaFlteGxjeUE5SUhKbGNYVnBjbVVvSnk0dlgyRmtaQzEwYnkxMWJuTmpiM0JoWW14bGN5Y3BYRzRnSUN3Z2MzUmxjQ0FnSUNBZ0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdGMzUmxjQ2NwWEc0Z0lDd2dTWFJsY21GMGIzSnpJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcFhHNGdJQ3dnZEc5SlQySnFaV04wSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x2WW1wbFkzUW5LVHRjYmx4dUx5OGdNakl1TVM0ekxqUWdRWEp5WVhrdWNISnZkRzkwZVhCbExtVnVkSEpwWlhNb0tWeHVMeThnTWpJdU1TNHpMakV6SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVyWlhsektDbGNiaTh2SURJeUxqRXVNeTR5T1NCQmNuSmhlUzV3Y205MGIzUjVjR1V1ZG1Gc2RXVnpLQ2xjYmk4dklESXlMakV1TXk0ek1DQkJjbkpoZVM1d2NtOTBiM1I1Y0dWYlFFQnBkR1Z5WVhSdmNsMG9LVnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5cGRHVnlMV1JsWm1sdVpTY3BLRUZ5Y21GNUxDQW5RWEp5WVhrbkxDQm1kVzVqZEdsdmJpaHBkR1Z5WVhSbFpDd2dhMmx1WkNsN1hHNGdJSFJvYVhNdVgzUWdQU0IwYjBsUFltcGxZM1FvYVhSbGNtRjBaV1FwT3lBdkx5QjBZWEpuWlhSY2JpQWdkR2hwY3k1ZmFTQTlJREE3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklHNWxlSFFnYVc1a1pYaGNiaUFnZEdocGN5NWZheUE5SUd0cGJtUTdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJR3RwYm1SY2JpOHZJREl5TGpFdU5TNHlMakVnSlVGeWNtRjVTWFJsY21GMGIzSlFjbTkwYjNSNWNHVWxMbTVsZUhRb0tWeHVmU3dnWm5WdVkzUnBiMjRvS1h0Y2JpQWdkbUZ5SUU4Z0lDQWdJRDBnZEdocGN5NWZkRnh1SUNBZ0lDd2dhMmx1WkNBZ1BTQjBhR2x6TGw5clhHNGdJQ0FnTENCcGJtUmxlQ0E5SUhSb2FYTXVYMmtyS3p0Y2JpQWdhV1lvSVU4Z2ZId2dhVzVrWlhnZ1BqMGdUeTVzWlc1bmRHZ3BlMXh1SUNBZ0lIUm9hWE11WDNRZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2NtVjBkWEp1SUhOMFpYQW9NU2s3WEc0Z0lIMWNiaUFnYVdZb2EybHVaQ0E5UFNBbmEyVjVjeWNnSUNseVpYUjFjbTRnYzNSbGNDZ3dMQ0JwYm1SbGVDazdYRzRnSUdsbUtHdHBibVFnUFQwZ0ozWmhiSFZsY3ljcGNtVjBkWEp1SUhOMFpYQW9NQ3dnVDF0cGJtUmxlRjBwTzF4dUlDQnlaWFIxY200Z2MzUmxjQ2d3TENCYmFXNWtaWGdzSUU5YmFXNWtaWGhkWFNrN1hHNTlMQ0FuZG1Gc2RXVnpKeWs3WEc1Y2JpOHZJR0Z5WjNWdFpXNTBjMHhwYzNSYlFFQnBkR1Z5WVhSdmNsMGdhWE1nSlVGeWNtRjVVSEp2ZEc5ZmRtRnNkV1Z6SlNBb09TNDBMalF1Tml3Z09TNDBMalF1TnlsY2JrbDBaWEpoZEc5eWN5NUJjbWQxYldWdWRITWdQU0JKZEdWeVlYUnZjbk11UVhKeVlYazdYRzVjYm1Ga1pGUnZWVzV6WTI5d1lXSnNaWE1vSjJ0bGVYTW5LVHRjYm1Ga1pGUnZWVzV6WTI5d1lXSnNaWE1vSjNaaGJIVmxjeWNwTzF4dVlXUmtWRzlWYm5OamIzQmhZbXhsY3lnblpXNTBjbWxsY3ljcE95SXNJaTh2SURFNUxqRXVNeTR4SUU5aWFtVmpkQzVoYzNOcFoyNG9kR0Z5WjJWMExDQnpiM1Z5WTJVcFhHNTJZWElnSkdWNGNHOXlkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyVjRjRzl5ZENjcE8xeHVYRzRrWlhod2IzSjBLQ1JsZUhCdmNuUXVVeUFySUNSbGVIQnZjblF1Uml3Z0owOWlhbVZqZENjc0lIdGhjM05wWjI0NklISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMWhjM05wWjI0bktYMHBPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lBa1lYUWdJRDBnY21WeGRXbHlaU2duTGk5ZmMzUnlhVzVuTFdGMEp5a29kSEoxWlNrN1hHNWNiaTh2SURJeExqRXVNeTR5TnlCVGRISnBibWN1Y0hKdmRHOTBlWEJsVzBCQWFYUmxjbUYwYjNKZEtDbGNibkpsY1hWcGNtVW9KeTR2WDJsMFpYSXRaR1ZtYVc1bEp5a29VM1J5YVc1bkxDQW5VM1J5YVc1bkp5d2dablZ1WTNScGIyNG9hWFJsY21GMFpXUXBlMXh1SUNCMGFHbHpMbDkwSUQwZ1UzUnlhVzVuS0dsMFpYSmhkR1ZrS1RzZ0x5OGdkR0Z5WjJWMFhHNGdJSFJvYVhNdVgya2dQU0F3T3lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCdVpYaDBJR2x1WkdWNFhHNHZMeUF5TVM0eExqVXVNaTR4SUNWVGRISnBibWRKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU1V1Ym1WNGRDZ3BYRzU5TENCbWRXNWpkR2x2YmlncGUxeHVJQ0IyWVhJZ1R5QWdJQ0FnUFNCMGFHbHpMbDkwWEc0Z0lDQWdMQ0JwYm1SbGVDQTlJSFJvYVhNdVgybGNiaUFnSUNBc0lIQnZhVzUwTzF4dUlDQnBaaWhwYm1SbGVDQStQU0JQTG14bGJtZDBhQ2x5WlhSMWNtNGdlM1poYkhWbE9pQjFibVJsWm1sdVpXUXNJR1J2Ym1VNklIUnlkV1Y5TzF4dUlDQndiMmx1ZENBOUlDUmhkQ2hQTENCcGJtUmxlQ2s3WEc0Z0lIUm9hWE11WDJrZ0t6MGdjRzlwYm5RdWJHVnVaM1JvTzF4dUlDQnlaWFIxY200Z2UzWmhiSFZsT2lCd2IybHVkQ3dnWkc5dVpUb2dabUZzYzJWOU8xeHVmU2s3SWl3aWNtVnhkV2x5WlNnbkxpOWxjell1WVhKeVlYa3VhWFJsY21GMGIzSW5LVHRjYm5aaGNpQm5iRzlpWVd3Z0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZaMnh2WW1Gc0p5bGNiaUFnTENCb2FXUmxJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwWEc0Z0lDd2dTWFJsY21GMGIzSnpJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhKaGRHOXljeWNwWEc0Z0lDd2dWRTlmVTFSU1NVNUhYMVJCUnlBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcEtDZDBiMU4wY21sdVoxUmhaeWNwTzF4dVhHNW1iM0lvZG1GeUlHTnZiR3hsWTNScGIyNXpJRDBnV3lkT2IyUmxUR2x6ZENjc0lDZEVUMDFVYjJ0bGJreHBjM1FuTENBblRXVmthV0ZNYVhOMEp5d2dKMU4wZVd4bFUyaGxaWFJNYVhOMEp5d2dKME5UVTFKMWJHVk1hWE4wSjEwc0lHa2dQU0F3T3lCcElEd2dOVHNnYVNzcktYdGNiaUFnZG1GeUlFNUJUVVVnSUNBZ0lDQWdQU0JqYjJ4c1pXTjBhVzl1YzF0cFhWeHVJQ0FnSUN3Z1EyOXNiR1ZqZEdsdmJpQTlJR2RzYjJKaGJGdE9RVTFGWFZ4dUlDQWdJQ3dnY0hKdmRHOGdJQ0FnSUNBOUlFTnZiR3hsWTNScGIyNGdKaVlnUTI5c2JHVmpkR2x2Ymk1d2NtOTBiM1I1Y0dVN1hHNGdJR2xtS0hCeWIzUnZJQ1ltSUNGd2NtOTBiMXRVVDE5VFZGSkpUa2RmVkVGSFhTbG9hV1JsS0hCeWIzUnZMQ0JVVDE5VFZGSkpUa2RmVkVGSExDQk9RVTFGS1R0Y2JpQWdTWFJsY21GMGIzSnpXMDVCVFVWZElEMGdTWFJsY21GMGIzSnpMa0Z5Y21GNU8xeHVmU0lzSW5aaGNpQldkV1VnTHk4Z2JHRjBaU0JpYVc1a1hHNTJZWElnZG1WeWMybHZibHh1ZG1GeUlHMWhjQ0E5SUhkcGJtUnZkeTVmWDFaVlJWOUlUMVJmVFVGUVgxOGdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwWEc1MllYSWdhVzV6ZEdGc2JHVmtJRDBnWm1Gc2MyVmNiblpoY2lCcGMwSnliM2R6WlhKcFpua2dQU0JtWVd4elpWeHVkbUZ5SUdsdWFYUkliMjlyVG1GdFpTQTlJQ2RpWldadmNtVkRjbVZoZEdVblhHNWNibVY0Y0c5eWRITXVhVzV6ZEdGc2JDQTlJR1oxYm1OMGFXOXVJQ2gyZFdVc0lHSnliM2R6WlhKcFpua3BJSHRjYmlBZ2FXWWdLR2x1YzNSaGJHeGxaQ2tnY21WMGRYSnVYRzRnSUdsdWMzUmhiR3hsWkNBOUlIUnlkV1ZjYmx4dUlDQldkV1VnUFNCMmRXVXVYMTlsYzAxdlpIVnNaU0EvSUhaMVpTNWtaV1poZFd4MElEb2dkblZsWEc0Z0lIWmxjbk5wYjI0Z1BTQldkV1V1ZG1WeWMybHZiaTV6Y0d4cGRDZ25MaWNwTG0xaGNDaE9kVzFpWlhJcFhHNGdJR2x6UW5KdmQzTmxjbWxtZVNBOUlHSnliM2R6WlhKcFpubGNibHh1SUNBdkx5QmpiMjF3WVhRZ2QybDBhQ0E4SURJdU1DNHdMV0ZzY0doaExqZGNiaUFnYVdZZ0tGWjFaUzVqYjI1bWFXY3VYMnhwWm1WamVXTnNaVWh2YjJ0ekxtbHVaR1Y0VDJZb0oybHVhWFFuS1NBK0lDMHhLU0I3WEc0Z0lDQWdhVzVwZEVodmIydE9ZVzFsSUQwZ0oybHVhWFFuWEc0Z0lIMWNibHh1SUNCbGVIQnZjblJ6TG1OdmJYQmhkR2xpYkdVZ1BTQjJaWEp6YVc5dVd6QmRJRDQ5SURKY2JpQWdhV1lnS0NGbGVIQnZjblJ6TG1OdmJYQmhkR2xpYkdVcElIdGNiaUFnSUNCamIyNXpiMnhsTG5kaGNtNG9YRzRnSUNBZ0lDQW5XMGhOVWwwZ1dXOTFJR0Z5WlNCMWMybHVaeUJoSUhabGNuTnBiMjRnYjJZZ2RuVmxMV2h2ZEMxeVpXeHZZV1F0WVhCcElIUm9ZWFFnYVhNZ0p5QXJYRzRnSUNBZ0lDQW5iMjVzZVNCamIyMXdZWFJwWW14bElIZHBkR2dnVm5WbExtcHpJR052Y21VZ1hqSXVNQzR3TGlkY2JpQWdJQ0FwWEc0Z0lDQWdjbVYwZFhKdVhHNGdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lTQnlaV052Y21RZ1ptOXlJR0VnYUc5MElHMXZaSFZzWlN3Z2QyaHBZMmdnYTJWbGNITWdkSEpoWTJzZ2IyWWdhWFJ6SUdOdmJuTjBjblZqZEc5eVhHNGdLaUJoYm1RZ2FXNXpkR0Z1WTJWelhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdsa1hHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiM0IwYVc5dWMxeHVJQ292WEc1Y2JtVjRjRzl5ZEhNdVkzSmxZWFJsVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0dsa0xDQnZjSFJwYjI1ektTQjdYRzRnSUhaaGNpQkRkRzl5SUQwZ2JuVnNiRnh1SUNCcFppQW9kSGx3Wlc5bUlHOXdkR2x2Ym5NZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0JEZEc5eUlEMGdiM0IwYVc5dWMxeHVJQ0FnSUc5d2RHbHZibk1nUFNCRGRHOXlMbTl3ZEdsdmJuTmNiaUFnZlZ4dUlDQnRZV3RsVDNCMGFXOXVjMGh2ZENocFpDd2diM0IwYVc5dWN5bGNiaUFnYldGd1cybGtYU0E5SUh0Y2JpQWdJQ0JEZEc5eU9pQldkV1V1WlhoMFpXNWtLRzl3ZEdsdmJuTXBMRnh1SUNBZ0lHbHVjM1JoYm1ObGN6b2dXMTFjYmlBZ2ZWeHVmVnh1WEc0dktpcGNiaUFxSUUxaGEyVWdZU0JEYjIxd2IyNWxiblFnYjNCMGFXOXVjeUJ2WW1wbFkzUWdhRzkwTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0JwWkZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOXdkR2x2Ym5OY2JpQXFMMXh1WEc1bWRXNWpkR2x2YmlCdFlXdGxUM0IwYVc5dWMwaHZkQ0FvYVdRc0lHOXdkR2x2Ym5NcElIdGNiaUFnYVc1cVpXTjBTRzl2YXlodmNIUnBiMjV6TENCcGJtbDBTRzl2YTA1aGJXVXNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J0WVhCYmFXUmRMbWx1YzNSaGJtTmxjeTV3ZFhOb0tIUm9hWE1wWEc0Z0lIMHBYRzRnSUdsdWFtVmpkRWh2YjJzb2IzQjBhVzl1Y3l3Z0oySmxabTl5WlVSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RtRnlJR2x1YzNSaGJtTmxjeUE5SUcxaGNGdHBaRjB1YVc1emRHRnVZMlZ6WEc0Z0lDQWdhVzV6ZEdGdVkyVnpMbk53YkdsalpTaHBibk4wWVc1alpYTXVhVzVrWlhoUFppaDBhR2x6S1N3Z01TbGNiaUFnZlNsY2JuMWNibHh1THlvcVhHNGdLaUJKYm1wbFkzUWdZU0JvYjI5cklIUnZJR0VnYUc5MElISmxiRzloWkdGaWJHVWdZMjl0Y0c5dVpXNTBJSE52SUhSb1lYUmNiaUFxSUhkbElHTmhiaUJyWldWd0lIUnlZV05ySUc5bUlHbDBMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZjSFJwYjI1elhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdibUZ0WlZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdhRzl2YTF4dUlDb3ZYRzVjYm1aMWJtTjBhVzl1SUdsdWFtVmpkRWh2YjJzZ0tHOXdkR2x2Ym5Nc0lHNWhiV1VzSUdodmIyc3BJSHRjYmlBZ2RtRnlJR1Y0YVhOMGFXNW5JRDBnYjNCMGFXOXVjMXR1WVcxbFhWeHVJQ0J2Y0hScGIyNXpXMjVoYldWZElEMGdaWGhwYzNScGJtZGNiaUFnSUNBL0lFRnljbUY1TG1selFYSnlZWGtvWlhocGMzUnBibWNwWEc0Z0lDQWdJQ0EvSUdWNGFYTjBhVzVuTG1OdmJtTmhkQ2hvYjI5cktWeHVJQ0FnSUNBZ09pQmJaWGhwYzNScGJtY3NJR2h2YjJ0ZFhHNGdJQ0FnT2lCYmFHOXZhMTFjYm4xY2JseHVablZ1WTNScGIyNGdkSEo1VjNKaGNDQW9abTRwSUh0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaHBaQ3dnWVhKbktTQjdYRzRnSUNBZ2RISjVJSHNnWm00b2FXUXNJR0Z5WnlrZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lobEtWeHVJQ0FnSUNBZ1kyOXVjMjlzWlM1M1lYSnVLQ2RUYjIxbGRHaHBibWNnZDJWdWRDQjNjbTl1WnlCa2RYSnBibWNnVm5WbElHTnZiWEJ2Ym1WdWRDQm9iM1F0Y21Wc2IyRmtMaUJHZFd4c0lISmxiRzloWkNCeVpYRjFhWEpsWkM0bktWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25SekxuSmxjbVZ1WkdWeUlEMGdkSEo1VjNKaGNDaG1kVzVqZEdsdmJpQW9hV1FzSUc5d2RHbHZibk1wSUh0Y2JpQWdkbUZ5SUhKbFkyOXlaQ0E5SUcxaGNGdHBaRjFjYmlBZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnYjNCMGFXOXVjeUE5SUc5d2RHbHZibk11YjNCMGFXOXVjMXh1SUNCOVhHNGdJSEpsWTI5eVpDNURkRzl5TG05d2RHbHZibk11Y21WdVpHVnlJRDBnYjNCMGFXOXVjeTV5Wlc1a1pYSmNiaUFnY21WamIzSmtMa04wYjNJdWIzQjBhVzl1Y3k1emRHRjBhV05TWlc1a1pYSkdibk1nUFNCdmNIUnBiMjV6TG5OMFlYUnBZMUpsYm1SbGNrWnVjMXh1SUNCeVpXTnZjbVF1YVc1emRHRnVZMlZ6TG5Oc2FXTmxLQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYVc1emRHRnVZMlVwSUh0Y2JpQWdJQ0JwYm5OMFlXNWpaUzRrYjNCMGFXOXVjeTV5Wlc1a1pYSWdQU0J2Y0hScGIyNXpMbkpsYm1SbGNseHVJQ0FnSUdsdWMzUmhibU5sTGlSdmNIUnBiMjV6TG5OMFlYUnBZMUpsYm1SbGNrWnVjeUE5SUc5d2RHbHZibk11YzNSaGRHbGpVbVZ1WkdWeVJtNXpYRzRnSUNBZ2FXNXpkR0Z1WTJVdVgzTjBZWFJwWTFSeVpXVnpJRDBnVzEwZ0x5OGdjbVZ6WlhRZ2MzUmhkR2xqSUhSeVpXVnpYRzRnSUNBZ2FXNXpkR0Z1WTJVdUpHWnZjbU5sVlhCa1lYUmxLQ2xjYmlBZ2ZTbGNibjBwWEc1Y2JtVjRjRzl5ZEhNdWNtVnNiMkZrSUQwZ2RISjVWM0poY0NobWRXNWpkR2x2YmlBb2FXUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnZjSFJwYjI1eklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnYjNCMGFXOXVjeUE5SUc5d2RHbHZibk11YjNCMGFXOXVjMXh1SUNCOVhHNGdJRzFoYTJWUGNIUnBiMjV6U0c5MEtHbGtMQ0J2Y0hScGIyNXpLVnh1SUNCMllYSWdjbVZqYjNKa0lEMGdiV0Z3VzJsa1hWeHVJQ0JwWmlBb2RtVnljMmx2YmxzeFhTQThJRElwSUh0Y2JpQWdJQ0F2THlCd2NtVnpaWEoyWlNCd2NtVWdNaTR5SUdKbGFHRjJhVzl5SUdadmNpQm5iRzlpWVd3Z2JXbDRhVzRnYUdGdVpHeHBibWRjYmlBZ0lDQnlaV052Y21RdVEzUnZjaTVsZUhSbGJtUlBjSFJwYjI1eklEMGdiM0IwYVc5dWMxeHVJQ0I5WEc0Z0lIWmhjaUJ1WlhkRGRHOXlJRDBnY21WamIzSmtMa04wYjNJdWMzVndaWEl1WlhoMFpXNWtLRzl3ZEdsdmJuTXBYRzRnSUhKbFkyOXlaQzVEZEc5eUxtOXdkR2x2Ym5NZ1BTQnVaWGREZEc5eUxtOXdkR2x2Ym5OY2JpQWdjbVZqYjNKa0xrTjBiM0l1WTJsa0lEMGdibVYzUTNSdmNpNWphV1JjYmlBZ2NtVmpiM0prTGtOMGIzSXVjSEp2ZEc5MGVYQmxJRDBnYm1WM1EzUnZjaTV3Y205MGIzUjVjR1ZjYmlBZ2FXWWdLRzVsZDBOMGIzSXVjbVZzWldGelpTa2dlMXh1SUNBZ0lDOHZJSFJsYlhCdmNtRnllU0JuYkc5aVlXd2diV2w0YVc0Z2MzUnlZWFJsWjNrZ2RYTmxaQ0JwYmlBOElESXVNQzR3TFdGc2NHaGhMalpjYmlBZ0lDQnVaWGREZEc5eUxuSmxiR1ZoYzJVb0tWeHVJQ0I5WEc0Z0lISmxZMjl5WkM1cGJuTjBZVzVqWlhNdWMyeHBZMlVvS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNocGJuTjBZVzVqWlNrZ2UxeHVJQ0FnSUdsbUlDaHBibk4wWVc1alpTNGtkbTV2WkdVZ0ppWWdhVzV6ZEdGdVkyVXVKSFp1YjJSbExtTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lHbHVjM1JoYm1ObExpUjJibTlrWlM1amIyNTBaWGgwTGlSbWIzSmpaVlZ3WkdGMFpTZ3BYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTnZiR1V1ZDJGeWJpZ25VbTl2ZENCdmNpQnRZVzUxWVd4c2VTQnRiM1Z1ZEdWa0lHbHVjM1JoYm1ObElHMXZaR2xtYVdWa0xpQkdkV3hzSUhKbGJHOWhaQ0J5WlhGMWFYSmxaQzRuS1Z4dUlDQWdJSDFjYmlBZ2ZTbGNibjBwWEc0aVhYMD0ifQ==
