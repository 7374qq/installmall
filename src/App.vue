<template>
  <div id="app">
    <router-view></router-view>
    <min-tab-bar></min-tab-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
