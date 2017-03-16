<style scoped lang="scss">

@import "./common/css/main.scss";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}

.router-link-active {
    color: red;
}

.view {
    &.one {
        color: #333;
    }
    &.two {
        color: blue;
    }
}

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
    <p>
        <router-link :to="{name:'foo'}">Go to Foo</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- 如果 router-view 没有设置名字，那么默认为 default -->
    <router-view class="view one"></router-view>

    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
</div>

</template>

<script>

export default {
    // name: 'app',
    data() {
        return {

        }
    },
    watch: {
        '$route' (to, from) {
            console.info('route: "' + from.path + '" ⟶ "' + to.path + '"');
        }
    }
}

</script>
