import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import {routes} from './route/index.js';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    // mode: 'history', //默认 hash 模式，如 http://192.168.1.26:8000/#/foo
    base: __dirname,
    routes // （缩写）相当于 routes: routes
});
// 导航钩子主要用来拦截导航，让它完成跳转或取消
// 有多种方式可以在路由导航发生时执行钩子：全局的, 单个路由独享的, 或者组件级的
router.beforeEach((to, from, next) => {
    // console.log(from.path);
    // console.log(to.path);
    // console.log(to.matched.some(record => record.meta.requiresAuth));
    next(); // 一定要调用该方法来 resolve 这个钩子
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

// 现在，应用已经启动了！
