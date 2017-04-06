<style scoped lang="scss">

@import "./common/css/main.scss";
.container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // -webkit-overflow-scrolling: touch;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f8f8f8;
    color: $black;
    overflow: hidden;
    line-height: 1.5;
}

.view {
    &.one {
        transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
    &.two {
        color: $red;
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

</style>

<template>

<div id="app" class="container">
    <!-- 顶部导航 -->
    <top-nav></top-nav>

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

    <tabbar></tabbar>
</div>

</template>

<script>

import nav from './view/nav.vue';
import tabbar from './common/tpl/tabbar.vue';

export default {
    // name: 'app',
    components: {
        'top-nav': nav,
        tabbar
    },
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
