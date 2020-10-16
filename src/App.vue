<template>
  <div id="app">
    <!-- 使图片刷新 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <min-tab-bar></min-tab-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/common/tarbar/HelloWorld.vue'
import MinTabBar from 'components/content/mintabbar'

export default {
  name: 'App',
  components: {
    MinTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
