<style scoped lang="scss">

@import "../common/css/main.scss";
.wrapper {
    text-align: center;
    h1 {
        font-weight: bold;
        @include dpr-font-size(16);
    }
    h2 {
        font-weight: normal;
        @include dpr-font-size(14);
    }
    a {
        display: inline-block;
        padding: px2rem(20) px2rem(30);
        color: $green;
        @include dpr-font-size(12);
    }
    .logo {
        @include square(200);
    }
}

</style>

<template>

<div class="wrapper">
    <!-- 顶部导航 -->
    <top-nav></top-nav>
    
    <img src="../common/img/logo.png" class="logo">
    <h1>{{msg}}</h1>
    <h2>Essential Links</h2>
    <ul class="flex flex-main-center">
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul class="flex flex-main-center">
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
</div>

</template>

<script>
import nav from '../common/tpl/navbar/navbar.vue';
export default {
    components: {
        'top-nav':nav
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>
