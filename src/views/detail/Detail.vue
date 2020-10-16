<template>
    <div id="detail">
        <child-comps></child-comps>
        <detail-Swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"/>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import childComps from './childComps'
import {getDetail,Goods} from "network/detail"
import DetailSwiper from './DetailSwiper'
import DetailBaseInfo from './DetailBaseInfo'

export default {
    name:'Detail',
    components:{
        childComps,
        DetailSwiper,
        DetailBaseInfo
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
        
    }
}
</script>

<style scoped>
</style>