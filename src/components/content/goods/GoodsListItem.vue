<template>
    <div class="goods" @click="itemClick">
        <img :src="goodsItem.show.img">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        itemClick(){
            this.$router.push('detail')//跳转到详情页,push跳转
        },
        itemClick(){
          this.$router.push('/detail/'+this.goodsItem.iid)
        }
    }
}
</script>

<style scoped>
.goods {
    padding-bottom: 40px;
    position: relative;

    width:48%;/*多个屏幕中可以适应*/
    height:280px;
  }
  .goods img {
    width: 100%;
    border-radius:10px;
    padding:5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>