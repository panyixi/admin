<style scoped lang="scss">

@import "../../css/main.scss";
.tabbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    z-index: 500;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    &:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid $light-gray;
        color: $light-gray;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .tabbar__item {
        display: block;
        -webkit-box-flex: 1.0;
        -webkit-flex-grow: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        flex-shrink: 1;
        padding: px2rem(10) 0 0;
        font-size: 0;
        color: $dark-gray;
        text-align: center;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        .tabbar__icon {
            display: inline-block;
            @extend .icon48;
        }
        .tabbar__label {
            text-align: center;
            color: $dark-gray;
            @extend .font12;
            line-height: 1.8;
        }
        &.bar__item_on {
            .tabbar__icon,
            .tabbar__label {
                color: $green;
            }
        }
    }
}

</style>

<template lang="html">

<!-- <div class="weui-tab">
    <div class="weui-tab__panel">

    </div>

</div> -->
<div class="tabbar">
    <a href="javascript:;" @click="changeTab(tab)"
    :class="['tabbar__item', {'bar__item_on': tab.selected}]"
    v-for="tab in tabs">
        <svg class="tabbar__icon" aria-hidden="true">
            <use :xlink:href="tab.icon"></use>
        </svg>
        <p class="tabbar__label">{{tab.label}}</p>
    </a>
</div>

</template>

<script>

import iconfont from './font/iconfont.js';
export default {
    data() {
        return {
            tabs: [{
                label: '首页',
                icon: '#icon-wxbzhuye',
                selected: true
            }, {
                label: '发现',
                icon: '#icon-search',
                selected: false
            }, {
                label: '消息',
                icon: '#icon-comments',
                selected: false
            }, {
                label: '我',
                icon: '#icon-account',
                selected: false
            }]
        };
    },
    methods: {
        changeTab(tab) {
            this.tabs.forEach(d => {
                d.selected = d.label !== tab.label ? false : true;
            });
        }
    }
}

</script>
