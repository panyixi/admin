前言

vue2 然后通过以下命令安装 webpack
cnpm install webpack -g
注：下面 orange 默认给出 npm 的安装方案，安装失败请自行转为 cnpm 安装 在需要创建工程的位置运行 vue init webpack-simple 工程名字<工程名字不能用中文> 或者创建 vue1.0 的项目，只需将命令换成 vue init webpack-simple#1.0 这里我们基于 2.x 开发的，直接使用第一种方法创建工程即可，下图是创建工程时的截图，需要你添加 Project name，Project description，Author. 图中已经给出下一步应该操作的步骤，我们按照步骤一步一步执行，这里 orange 不给大家一步一步列出。 注意：这里一定要使用 npm install 安装官方库，而不要使用淘宝镜像，会导致部分依赖丢失。 安装完成后，目录如下图。 然后我们运行我们的项目后浏览器会自动弹出，并展示以下页面 这里注意观察，默认给我们八个链接，可以根据这几个链接获得我们想要的学习资源，上面是必要的的链接（官方文档以及关注 vue 动态），下面是 vue 的生态系统，大家亲切的叫它们为全家桶。

二、Vue 全家桶 我们接下来介绍全家桶的安装（使用详情大家可以去初始页面的链接查看） 一句命令搞定全家桶 npm install vue-router vue-resource vuex --save package.json 已经加入了我们的全家桶，node_modules 目录下也有对应的依赖包，注意这里现在还不能用扩展之后的方法，因为我们没引入到项目中来。 src/main.js 修改如下 import Vue from 'vue' import VueResource from 'vue-resource' import VueRouter from 'vue-router' import Vuex from 'vuex' import App from './App.vue' Vue.use(VueResource) Vue.use(VueRouter) Vue.use(Vuex) new Vue({ el: '#app', render: h => h(App) }) 这时我们的项目就能运行对应的扩展方法了

三、集成 Sass 作为移动端的开发怎么能缺少 css 预编译语言。sass 安装需要几个依赖。 我们干脆在 package.json 把版本写死，然后通过 npm install 安装 在 "devDependencies": {} 中添加下面几个依赖 "node-sass": "^3.8.0", "sass": "^0.5.0", "sass-loader": "^4.0.0", 好，我们 npm install 后，就可以正式使用 sass 啦

四、目录结构建议 依赖的安装到这里差不多结束了，其它大家需要的可以自定义安装 下面给出我的目录建议供大家参考， 这里的 img 目录放置图片，script 目录放置公共的工具函数，style 目录放置我们的 sass 文件， 你查看 App.vue 文件时不难发现，默认的把样式文件给到了模块里，这样样式一直跟着模块 orange 建议大家不要这样做，因为这样十分不利于样式的模块化，注意区分与模版模块化的区别， 我们单独设置 style 目录，并在目录当中对 sass 进行模块化处理（通过 import 引入 sass 模块） 对应的 App.vue 也变得非常简洁，代码如下
<style lang="sass">
@import "/style/base.scss";
</style>

五、rem 适配 对于移动端的开发，rem 适配必不可少，我们可以用多种方式实现，下面给出一种方案 在 index.html 中添加如下代码 <script> let html = document.documentElement; window.rem = html.getBoundingClientRect().width / 16 ; html.style.fontSize = window.rem + 'px'; </script> 这里基于宽 320px 的屏幕分成了 16 份，也就是 1rem = 20px，目前大多数设计稿都是根据 iphone6 的宽（ 375px ）走的，建议大家在这里分成 25 份，也就是 1rem = 15px，计算起来方便些。 简单说下 rem 原理：根据 html 的 fontSize 属性值为基准，其它所有的 rem 值，根据这个基准计算。 我们根据屏幕宽度用 js 动态修改了 html 的 fontSize 属性值，达到移动端适配的目的

总结 以上就是这篇文章的全部内容了，本文作为移动端配置的基础篇，深入了解框架后才能继续构建网站，希望这是一个好的开始，有了这个架子再填充代码就方便了许多，不用再去考虑开发环境问题了。希望本文的内容对有需要的朋友们能有所帮助。

VpnVip | VpnVip资讯教程，软件使用平台。 | 发布于2016-12-18 12:55
