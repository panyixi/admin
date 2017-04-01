<style scoped lang="scss">

.tabbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #f7f7fa
}

.tabbar:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #c0bfc4;
    color: #c0bfc4;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5)
}

.tabbar__item {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.tabbar__item.bar__item_on .tabbar__icon,
.tabbar__item.bar__item_on .tabbar__icon>i,
.tabbar__item.bar__item_on .tabbar__label {
    color: #09bb07
}

.tabbar__icon {
    display: inline-block;
    width: 27px;
    height: 27px
}

.tabbar__icon>i,
i.tabbar__icon {
    font-size: 24px;
    color: #999
}

.tabbar__icon img {
    width: 100%;
    height: 100%
}

.tabbar__label {
    text-align: center;
    color: #999;
    font-size: 10px;
    line-height: 1.8
}

</style>

<template lang="html">



</template>

<script>

export default {}

</script>
