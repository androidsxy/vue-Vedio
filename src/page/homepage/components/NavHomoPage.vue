<template>
  <div class="vedio_nav"> 
     <ul class="vedio_nav_ul">
       <li v-for="(item,index) in nav" :key="index" class="vedio_nav_ul_li">{{item}}</li>
     </ul>
  </div>
</template>

<script>
export default {
    name:"NavHomoPage",
    data(){
        return{
            nav:["首页","电影","剧集","动漫","综艺","直播"]
        }
    }
}
</script>

<style lang="stylus" scoped>
.vedio_nav
  margin-top:.1rem
  display:inline-block
  width:100%
  .vedio_nav_ul
    width:100%
    .vedio_nav_ul_li
      list-style:none
      float:left
      width:13.7%
      text-align:center
      margin-left:.18rem
      padding:.1rem 0
    .vedio_nav_ul_li:nth-child(1)
      background:#fd0
      border-radius:0.25rem
</style>

