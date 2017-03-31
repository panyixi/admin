<style scoped lang="scss">

@import "../common/css/main.scss";
.nav {
    box-shadow: 0 0 2px alpha(0.25);
    overflow-x: scroll;
    white-space: nowrap;
    background-color: #fff;
}

a {
    box-sizing: border-box;
    display: inline-block;
    padding: .4rem;
    @include dpr-font-size(14);
    color: $dark-gray;
    border-bottom: 2px solid #fff;
}

.router-link-active {
    border-bottom-color: $green;
}

</style>

<template>

<div class="nav">
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!-- 当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active -->

    <!-- 这个链接只会在地址为 / 的时候被激活 -->
    <router-link to="/" exact>首页</router-link>

    <router-link to="/foo">前端</router-link>
    <!-- <router-link :to="{name:'foo'}">Go to Foo</router-link> -->

    <router-link to="/bar">设计</router-link>

    <router-link to="/user/foo">产品</router-link>
    <router-link to="/user/bar">工具资源</router-link>
</div>

</template>

<script>

export default {}

</script>
