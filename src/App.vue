<style scoped lang="scss">

@import "./common/css/main.scss";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    color: $black;
    text-align: center;
}

.view {
    &.one {
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
    &.two {
        color: blue;
    }
}

$x-coordinate: px2rem(30);
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    height: 0;
    -webkit-transform: translate($x-coordinate, 0);
    transform: translate($x-coordinate, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    height: 0;
    -webkit-transform: translate(-$x-coordinate, 0);
    transform: translate(-$x-coordinate, 0);
}

.nav {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    overflow-x: scroll;
    white-space: nowrap;
}

a {
    box-sizing: border-box;
    display: inline-block;
    padding: .4rem;
    font-size: dpr-font-size(32);
    color: $grey;
}

.router-link-active {
    border-bottom: 2px solid $green;
}

</style>

<template>

<div id="app">
    <div class="nav">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <!-- 当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->

        <!-- 这个链接只会在地址为 / 的时候被激活 -->
        <router-link to="/" exact>Go to Index</router-link>

        <router-link to="/foo">Go to Foo</router-link>
        <!-- <router-link :to="{name:'foo'}">Go to Foo</router-link> -->

        <router-link to="/bar">Go to Bar</router-link>

        <router-link to="/user/foo">Go to user/foo home</router-link>
        <router-link to="/user/bar">Go to user/bar home</router-link>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- 如果 router-view 没有设置名字，那么默认为 default -->
    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
        <keep-alive>
            <router-view class="view one"></router-view>
        </keep-alive>
    </transition>

    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>

</div>

</template>

<script>

export default {
    // name: 'app',
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route' (to, from) {
            console.info('route: "' + from.path + '" ⟶ "' + to.path + '"');
            let toDepth = to.path.split('/').length;
            let fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    }
}

</script>
