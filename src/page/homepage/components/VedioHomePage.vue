<template>
    <div class="vedio" :style="itemlist.bottom">
      <div class="vedio_head">
          <div class="vedio_head_left">
              <span class='iconfont iconfont_left' v-html="itemlist.ioon"></span>
              <span>{{itemlist.name}}</span>
          </div>
          <div class="vedio_head_right">
              <span class="gd">更多</span>
              <span class='iconfont iconfont_right'>&#xe62b;</span>
          </div>
      </div>
      <div class="vedio_list">
          <div class="vedio_item" @click="jump(item.playurl1)" v-for="(item,index) in dylist" :key="index">
              <img class="vedio_item_img" :src="item.zimg1" alt="">
              <span class="vedio_item_span">豆瓣分9.5</span>
              <p class="vedio_item_p">{{item.zname1}}</p>
           </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"VedioHomePage",
    props:{
      itemlist:Object,
      dylist:Array
    },
        methods:{
             jump:function(url){
            //  console.log(url.split("?"));
             this.$router.push({
               name:'PalyPage',
               params:{
                 url:url
               }
             });
            },
        }
}
</script>

<style lang="stylus" scoped>
  .vedio
    width:100%
    text-align:center
    display: inline-block;
    .vedio_head
      position:relative
      margin-top:.2rem
      width:93%
      padding: .5rem 0;
      display:inline-block
      .vedio_head_left
        position:absolute
        top:.28rem
        font-size:.35rem
        line-height:.35rem
        left:0
        .iconfont_left
         position:relative
         top:.04rem
      .vedio_head_right
        position:absolute
        top:.25rem
        font-size:.2rem
        line-height:.4rem
        right:0
        .iconfont_right
          font-size:.5rem
          position:relative
          top:.07rem
          display:inline-block
    .vedio_list
      width:100%
      .vedio_item
        position:relative
        float:left
        width:28.5%
        height:3.7rem
        padding:0 .16rem 
        overflow: hidden
        margin-bottom:.3rem
        .vedio_item_img
          width:auto
          height:85%
        .vedio_item_p
          margin-top:.2rem
        .vedio_item_span
          position:absolute
          top:.15rem
          left:0.08rem
          z-index:100
          background:#204060
          color:#fff
          padding:0.1rem 0.1rem
          font-size:0.2rem
          z-index:10

</style>

