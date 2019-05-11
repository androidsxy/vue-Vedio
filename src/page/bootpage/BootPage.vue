<template>
<div class='wrapper'>
   <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="imgas.length!=0">
      <swiper-slide v-for="(item,index) in imgas" :key="index"> 
          <img class="img_bander" :src="url+item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination"  v-for="(item,index) in imgas" :key="index" slot="pagination" ></div>
   </swiper>
   <router-link to="/homepage/">
     <transition name="fade">
   <div v-if="startbool" class="buttom_bander">
     <img class="img_start" :src="url+buttomimg" />
   </div>
     </transition>
     </router-link>
</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
    name:"BootPage",
    data(){
        const that = this;
        return{
           buttomimg:"/novipVedio/imges/kaishi.jpg",
           url:"http://localhost",
           imgas:["/novipVedio/imges/sf01.jpg","/novipVedio/imges/sf02.jpg","/novipVedio/imges/sf03.jpg","/novipVedio/imges/sf04.jpg"],
           imgIndex: 1,
           startbool:false,
           swiperOption: {
           //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
           notNextTick: true,
           //循环
           loop: false,
           //设定初始化时slide的索引
           initialSlide: 0,
           //自动播放
        //    autoplay: {
        //      delay: 1500,
        //      stopOnLastSlide: false,
        //      /* 触摸滑动后是否继续轮播 */
        //    disableOnInteraction: false
        // },
           //滑动速度
           speed: 800,
           //滑动方向
           direction: "horizontal",
           //小手掌抓取滑动
           grabCursor: true,
           on: {
             //滑动之后回调函数
             slideChangeTransitionStart: function() {
             /* realIndex为滚动到当前的slide索引值 */
             that.imgIndex= this.realIndex - 1;
             that.imgIndex==2?that.startbool=true:that.startbool=false;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    }
    },
    components: {
    swiper,
    swiperSlide
}
}
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .5s;
.fade-enter, .fade-leave-to
  opacity: 0;
.wrapper >>> .swiper-pagination-bullet-active
    background :#fff !important
.wrapper
  touch-action: none;
  overflow hidden
  text-align:center
  width:100%
  height:100%
  .img_bander
    width:100%
    height:100%
  .buttom_bander
    position:absolute
    margin:0 auto
    left:0
    right:0
    bottom:1.7rem
    width:4.5rem
    height:.9rem 
    z-index:100
    .img_start
      width:100%
      border-radius:.2rem
</style>

