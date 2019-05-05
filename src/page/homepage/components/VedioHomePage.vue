<template>
    <div class="vedio">
      <div class="vedio_head">
          <div class="vedio_head_left">
              <span class='iconfont iconfont_left'>&#xe6af;</span>
              <span>电影</span>
          </div>
          <div class="vedio_head_right">
              <span class="gd">更多</span>
              <span class='iconfont iconfont_right'>&#xe62b;</span>
          </div>
      </div>
      <div class="vedio_list">
          <div class="vedio_item">
              <img class="vedio_item_img" src="http://p3.qhimg.com/d/dy_c2961c85f1c7d6a0da60e07fe6c6c362.jpg" alt="">
              <span class="vedio_item_span">豆瓣分9.5</span>
              <p>ABCD</p>
           </div>
           <div class="vedio_item">
              <img class="vedio_item_img" src="http://p3.qhimg.com/d/dy_c2961c85f1c7d6a0da60e07fe6c6c362.jpg" alt="">
              <span class="vedio_item_span">豆瓣分8.0</span>
              <p>ABCD</p>
           </div>
           <div class="vedio_item">
              <img class="vedio_item_img" src="http://p3.qhimg.com/d/dy_c2961c85f1c7d6a0da60e07fe6c6c362.jpg" alt="">
              <span class="vedio_item_span" >豆瓣分7.5</span>
              <p>ABCD</p>
           </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"VedioHomePage"
}
</script>

<style lang="stylus" scoped>
  .vedio
    margin-top:.5rem
    width:100%
    text-align:center
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
        width:29.5%
        margin-left:.21rem
        .vedio_item_img
          width:100%
        .vedio_item_span
          position:absolute
          top:.2rem
          left:-0.1rem
          z-index:100
          background:#204060
          color:#fff
          padding:0.1rem 0.1rem
          font-size:0.2rem

</style>

