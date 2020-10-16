<template>
    <!-- <div class="detail-swiper"> -->
        <swiper class="swiper-item">
            <swiper-item v-for="(item,index) in topImages" :key="index" >
                <img :src="item" />
            </swiper-item>    
        </swiper>
    <!-- </div> -->
</template>

<script>
//将两个文件一起导入
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:"DetailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return{}
            }
        }
    }
}
</script>

<style scoped>
    .swiper-item{
        height:300px;
        overflow:hidden;
    }
</style>