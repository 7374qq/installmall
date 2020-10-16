<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" 
                :key="index" 
                class="tab-control-item"
                :class="{active:index===currentIndex}"
                @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{//保存传来的数据
            type:Array,
            dedault(){
                return []
            }
        }
    },
    data:function(){
        return {
            currentIndex:0//表示当前
        }
    },
    methods:{
        itemClick:function(index){
            this.currentIndex=index;
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display:flex;
        text-align:center;
        height:40px;
        line-height:40px;
        font-size:14px;
        background-color:#fff/*背景透明*/
    }
    .tab-control-item{
        flex:1
    }
    .active{
        color:pink;
    }
    /* .tab-control-item表示每一个;active表示动态单个*/
    .active span{
        border-bottom:3px solid pink;
    }
    .tab-control-item span{
        padding:5px;
    }
</style>