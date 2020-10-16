<template>
    <div>
        <!-- 导航 -->
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartCount}})</div>
        </nav-bar>

        <!-- 商品列表 -->
        <cart-list/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'

//计算属性独立
import {mapGetters} from 'vuex'

export default {
    name:'category',
    components:{
        NavBar,
        CartList
    },
    computed: {
		  cartList() {
		    return this.$store.getters.cartList
      },
      cartCount() {
		    return this.$store.getters.cartCount
      }
    }
}
</script>

<style scoped>
    .nav-bar{
        background-color:pink;
        color:#fff;
    }
</style>