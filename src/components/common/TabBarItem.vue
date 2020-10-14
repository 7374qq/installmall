<template>
    <div class="tab-bar-item" @click="itemClick">
       <div v-if="!isActive"><slot name="item-icon"></slot></div>
       <div v-else><slot name="item-icon-active"></slot></div>
       <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String, 
            default:'red'
        }
    },
    // data:function(){
    //     return{
    //         isActive:true
    //     }
    // },
    computed:{
        isActive:function(){
            return this.$route.path.indexOf(this.path)!==-1;
        },
        activeStyle:function(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
     methods:{
      itemClick:function(){
        // console.log('a');
        console.log(this.path);
        this.$router.push(this.path)
      }
    }
}
</script>

<style scoped>
    .tab-bar-item{
        flex:1;
        text-align:center;
        background-color:#f6f6f6;
        box-shadow:0px -2px 2px rgba(214, 194, 194, 0.8);
    }
    .tab-bar-item img{
        width:24px;
        height:24px;
    }
    /* .active{
        color:red;
    } */
</style>