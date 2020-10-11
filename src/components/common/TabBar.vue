<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
    .tab-bar{
        display:flex;
        position:fixed;
        left:0px;
        right:0px;
        bottom:0px;
        height:49px;
    }
   
</style>