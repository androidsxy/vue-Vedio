<template>
    <div class="relevant_vedio">
         <span class="relevant_h4">猜你喜欢</span>
         <div class="pelevant" :style="lefttion">
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
         <div class="sping">
              <div class="sping_left" @click="leftClick">
                <span class='iconfont'>&#xe607;</span>
              </div>
              <div class="sping_right" @click="rightClick">
                <span class='iconfont'>&#xe61b;</span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"RelevantPalyPage",
    data(){
      return{
        lefttion:{
          left:"0"
        },
        index:0
      }
    },
    methods:{
      leftClick(){
        if(this.index!=0){
          this.index--;
          this.lefttion.left = (this.index*-2.4)+"rem"
        }
      },
      rightClick(){
        if(this.index<=2){
          this.index++;
          this.lefttion.left = (this.index*-2.4)+"rem"
        }
       
      }
    }
}
</script>



<style lang="stylus" scoped>
.relevant_vedio
  position:relative
  width:100%
  margin-top:.2rem
  .sping
      position:absolute
      top:40%
      width:100%
      .sping_left
         float:left
         background:#AAA
         opacity:0.6
         height:1rem
         line-height:1rem
         color:#fff
      .sping_right
         float:right
         background:#AAA
         opacity:0.6
         height:1rem
         line-height:1rem
         color:#fff
  .relevant_h4
    width:100%
    padding:.2rem .2rem
  .pelevant
    position:relative
    width:20rem
    margin-top:.5rem
    transition: left 0.5s
    .pelevant_item
      position:relative
      width:10.7%
      margin-left:.2rem
      height:3.7rem
      display:inline-block
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

