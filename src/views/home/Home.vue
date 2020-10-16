<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <featrue-view></featrue-view>
        <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
        <goods-list :goods="goods['pop'].list"></goods-list>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'//头部
import HomeSwiper from './childComps/HomeSwiper'//轮番图
import RecommendView from './childComps/RecommendView'//……
import FeatrueView from './childComps/FeatrueView'
import {getHomeMultidata,getHomeGoods} from 'network/home'//获取数据
import GoodsList from 'components/content/goods/GoodsList'

import TabControl from 'components/content/tabControl/TabControl'//粉色下划线文字

export default {
    name:'home',
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatrueView,
        TabControl,
        GoodsList
    },
    data:function(){
        return {
            // result:null
            banners:[],
            recommends:[],
            //请求上拉加载数据
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            }
        }
    },
    created(){//组件创建完成后
        // 1.请求多个数据
        this.getHomeMultidata()//写this才能调用下面的函数
        // 2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        // 1.请求多个数据
        getHomeMultidata(){
             getHomeMultidata().then(res=>{
                // console.log(res);
                // this.result=res;
                this.banners=res.data.banner.list;//banners.list是res里面的数据
                this.recommends=res.data.recommend.list;
            })
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
                // console.log(res);
                this.goods[type].list.push(...res.data.list)//...可以内部解析list数组，然后一个个添加到对应的数组
                this.goods[type].page+=1;//修改page的值
            })
        }
    }
}
</script>

<style scoped>
    .home-nav{
        background-color:pink;
        

        position:fixed;
        left:0px;
        right:0px;
        top:0px;
        z-index:9;
    }
    #home{
        padding-top:44px;
    }

    /*TabControl样式*/
    .tab-control{
        position: sticky;/*当滚动距离顶部44px时，就会固定，当没有达到44px时，就不会固定*/
        top:44px;/*距离顶部44px*/
        z-index:9/*主页图片"流行","新款"……*/
    }
</style>