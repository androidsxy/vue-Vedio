<template>
    <div class="relevant_vedio">
         <span class="relevant_h4">猜你喜欢</span>
         <div class="pelevant">
            <div class="pelevant_item">
                <img class="pelevant_img" src="http://p9.qhimg.com/dmfd/180_246_/d/dy_78306ff38da1b5a1b7262dd60e3eab28.jpg" alt="">
                <span class="pelevant_span" >推荐</span>
                <p class="pelevant_name">人间喜剧</p>
            </div>
            <div class="pelevant_item">
                <img class="pelevant_img" src="http://p9.qhimg.com/dmfd/180_246_/d/dy_78306ff38da1b5a1b7262dd60e3eab28.jpg" alt="">
                <span class="pelevant_span" >推荐</span>
                <p class="pelevant_name">人间喜剧</p>
            </div>
            <div class="pelevant_item">
                <img class="pelevant_img" src="http://p9.qhimg.com/dmfd/180_246_/d/dy_78306ff38da1b5a1b7262dd60e3eab28.jpg" alt="">
                <span class="pelevant_span" >推荐</span>
                <p class="pelevant_name">人间喜剧</p>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"RelevantPalyPage"
}
</script>



<style lang="stylus" scoped>
.relevant_vedio
  width:100%
  margin-top:.2rem
  .relevant_h4
    width:100%
    padding:.2rem .2rem
  .pelevant
    width:100%
    margin-top:.5rem
    .pelevant_item
      position:relative
      width:28.7%
      margin-left:.2rem
      float:left
      height:3.7rem
      overflow: hidden
      .pelevant_span
        position:absolute
        left:.1rem
        top:.2rem
        background:#204060
        color:#fff
        font-size:0.2rem
        padding:.05rem 0.1rem
      .pelevant_img
        height:85%
        width:auto
      .pelevant_name
        display:inline-block
        text-align:center
        width:100%
        padding: .1rem 0
        

    
    
    
</style>

