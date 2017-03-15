<style scoped lang="sass">

@import "./common/css/main.scss";

</style>

<template>

<div id="app">
    <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <!-- 当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <p>
        <router-link to="/user/foo">Go to user/foo home</router-link>
        <router-link to="/user/bar">Go to user/bar home</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <!-- <img src="./common/img/logo.png">
    <h1>{{msg}}</h1>
    <h2>Essential Links</h2>
    <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
</div>

</template>

<script>

export default {
    // name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    watch: {
        '$route' (to, from) {
            console.log('router to: ' + to.path);
            console.log('router from: ' + from.path);
        }
    }
}

</script>
