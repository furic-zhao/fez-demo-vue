# fez-demo-vue
基于FEZ构建的Vue单文件组件形式的模块化开发示例

> 本示例演示了基于FEZ构建vue单文件组件形式的开发结构，借助 FEZ 可以使用es6标准特性开发项目。

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录，执行 `git clone https://github.com/furic-zhao/fez-demo-vue.git` 将本示例下载到 FEZ 根目录

- 进入 fez-demo-vue 目录 执行 `gulp` 或 `gulp dev`,FEZ 会自动打开系统默认浏览器并进入研发环境。

> 若项目不在FEZ工程根目录，请自行修改项目目录中的`gulpfile.babel.js`文件中的路径。

## 任务命令说明

- 研发环境

````bash
gulp
````

- 生产部署

````bash
gulp dist
````

- SSH上传

````bash
gulp sftp
````

- 打包压缩

````bash
gulp zip
````

- svg => icon 转换

````bash
gulp svg2icon
````

- 本地测试上线代码

````bash
gulp view
````

## 目录结构

#### 源码 src 目录

````bash
.
├── lib
│   └── q.js
├── static
│   ├── fonts
│   ├── images
│   │   └── fez-logo.png
│   ├── slice
│   │   ├── weibo.png
│   │   ├── weibo@2x.png
│   │   ├── weibo@3x.png
│   │   ├── weixin.png
│   │   ├── weixin@2x.png
│   │   └── weixin@3x.png
│   └── styles
│       ├── article.less
│       ├── common.less
│       ├── components
│       │   ├── modals.less
│       │   └── tooltip.less
│       ├── index
│       │   └── big-logo.less
│       ├── index.less
│       ├── lib
│       │   ├── mixins.less
│       │   ├── normalize.css
│       │   ├── rem.less
│       │   └── reset.less
│       ├── list.less
│       └── public
│           └── footer.less
└── views
    ├── article
    │   ├── index.html
    │   ├── index.js
    │   ├── index.vue
    │   └── module
    │       └── detail
    │           ├── index.vue
    │           ├── jumbotron.vue
    │           └── service.js
    ├── index
    │   ├── index.html
    │   ├── index.js
    │   ├── index.vue
    │   └── module
    │       ├── fezdesc
    │       │   ├── index.vue
    │       │   └── service.js
    │       └── jumbotron
    │           ├── index.vue
    │           └── service.js
    ├── list
    │   ├── index.html
    │   ├── index.js
    │   ├── index.vue
    │   └── module
    │       ├── jumbotron
    │       │   ├── index.vue
    │       │   └── service.js
    │       └── listing
    │           ├── index.vue
    │           └── service.js
    └── public
        ├── demo-data.js
        ├── module
        │   └── common
        │       ├── common.js
        │       ├── footer.vue
        │       ├── header.vue
        │       └── page.vue
        └── utils
            └── url-param.js
````

#### 研发环境目录

````bash
.
├── article.html
├── bower_components
│   ├── bootstrap
│   │   └── dist
│   │       ├── css
│   │       │   └── bootstrap.css
│   │       ├── fonts
│   │       │   ├── glyphicons-halflings-regular.eot
│   │       │   ├── glyphicons-halflings-regular.svg
│   │       │   ├── glyphicons-halflings-regular.ttf
│   │       │   ├── glyphicons-halflings-regular.woff
│   │       │   └── glyphicons-halflings-regular.woff2
│   │       └── js
│   │           └── bootstrap.js
│   ├── font-awesome
│   │   ├── css
│   │   │   └── font-awesome.css
│   │   └── fonts
│   │       ├── FontAwesome.otf
│   │       ├── fontawesome-webfont.eot
│   │       ├── fontawesome-webfont.svg
│   │       ├── fontawesome-webfont.ttf
│   │       ├── fontawesome-webfont.woff
│   │       └── fontawesome-webfont.woff2
│   ├── jquery
│   │   └── dist
│   │       └── jquery.js
│   └── vue
│       └── dist
│           └── vue.js
├── index.html
├── lib
│   └── q.js
├── list.html
├── static
│   ├── css
│   │   ├── article.css
│   │   ├── common.css
│   │   ├── index.css
│   │   └── list.css
│   ├── images
│   │   └── fez-logo.png
│   ├── js
│   │   ├── article.js
│   │   ├── index.js
│   │   └── list.js
│   └── slice
│       ├── weibo.png
│       ├── weibo@2x.png
│       ├── weibo@3x.png
│       ├── weixin.png
│       ├── weixin@2x.png
│       └── weixin@3x.png
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
````

#### 生产环境目录

````bash
.
├── article.html
├── index.html
├── list.html
├── manifest.json
└── static
    ├── css
    │   ├── article.17575a8d.css
    │   ├── common.1228ff3a.css
    │   ├── index.58f5c69b.css
    │   ├── list.17575a8d.css
    │   ├── vendor-bootstrap.37f7fae7.css
    │   └── vendor-font-awesome.97fc8e7e.css
    ├── fonts
    │   ├── fontawesome-webfont.79de9362.woff2
    │   ├── fontawesome-webfont.912ec66d.svg
    │   ├── fontawesome-webfont.b92842a7.woff
    │   ├── fontawesome-webfont.da5a2cea.eot
    │   ├── fontawesome-webfont.df8826c0.ttf
    │   ├── glyphicons-halflings-regular.5e8b1222.woff2
    │   ├── glyphicons-halflings-regular.85df732e.woff
    │   ├── glyphicons-halflings-regular.89889688.svg
    │   ├── glyphicons-halflings-regular.9f0aa0d8.eot
    │   └── glyphicons-halflings-regular.a31955de.ttf
    ├── images
    │   └── fez-logo.44b46304.png
    ├── js
    │   ├── a-vendor-jquery.c0eb4255.js
    │   ├── article.0b2738ca.js
    │   ├── b-vendor-bootstrap.fb613417.js
    │   ├── common.34f596f9.js
    │   ├── index.bba0c561.js
    │   ├── list.e2583d30.js
    │   └── vendor.aca3098c.js
    └── sprite
        ├── common.1614f1d4.png
        ├── common@2x.21ec16bb.png
        └── common@3x.ce5fc377.png
````
