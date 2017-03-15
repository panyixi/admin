<style scoped lang="scss">



</style>

<template lang="html">

<div>
    UserId:{{JSON.stringify($route.params.id)}}
    <router-view></router-view>
</div>

</template>

<script>

export default {

}

</script>
