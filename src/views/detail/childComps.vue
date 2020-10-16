<template>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg"/>
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" :key="index" 
                    class="title-item" 
                    :class="{active:index===currentIndex}"
                    @click="titleClick(index)">
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:"childComps",
    components:{
        NavBar
    },
    data:function(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick:function(index){
            this.currentIndex=index;
        },
        backClick:function(){
            this.$router.go(-1);
        }
    }

}
</script>

<style scoped>
    .title{
        display:flex;
        /* text-align:center; */
        /* background-color:red; */
    }
    .title-item{
        flex:1;
        font-size:14px;
    }
    .active{
        color:red;
    }
    .back img{
        margin:11px 15px;
    }
</style>