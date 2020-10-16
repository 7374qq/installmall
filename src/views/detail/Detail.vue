<template>
    <div id="detail">
        <!-- <div>{{$store.state.cartList.length}}</div> -->
        <child-comps></child-comps>
        <detail-Swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"/>
        
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>            
        </ul>
        <detail-bottom-bar class="detail-item" @addCart="addToCart"/>

        
    </div>
</template>

<script>
import childComps from './childComps'
import {getDetail,Goods} from "network/detail"
import DetailSwiper from './DetailSwiper'
import DetailBaseInfo from './DetailBaseInfo'
import DetailBottomBar from './DetailBottomBar'

export default {
    name:'Detail',
    components:{
        childComps,
        DetailSwiper,
        DetailBaseInfo,
        DetailBottomBar
    },
    data:function(){
        return{
            iid:null,
            topImages:[],
            goods:{}
        }
    },
    created(){
        // 1.保存传入的iid
        // console.log(this.$route.params.iid);
        this.iid=this.$route.params.iid
        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            // console.log(res);
            this.topImages=res.result.itemInfo.topImages

            // 3.获取商品信息   
            this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        })
    },
    methods:{
        addToCart(){
            // console.log('-------');
            // console.log(this.$route.params.iid);    
            console.log(this.goods);
            const product={}
            product.image=this.topImages[0];
            product.title=this.goods.title;
            product.desc=this.goods.desc;
            // product.price=this.goods.newPrice;
            // product.price=this.goods.oldPrice;
            product.iid=this.$route.params.iid;

            this.$store.commit('addCart',product)
        }
    }
}
</script>

<style scoped>
    .detail-item{
        margin-bottom:3px;
    }
</style>