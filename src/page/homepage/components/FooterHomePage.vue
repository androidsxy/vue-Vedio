<template>
    <div class="vedio_fooler">
        <ul class="vedio_fooler_ul">
           <li class="vedio_fooler_ul_li">
            <span class="iconfont iconfont_bttom">&#xe606;</span>
            <p>首页</p>
           </li>
            <li class="vedio_fooler_ul_li">
            <span class="iconfont iconfont_bttom">&#xe6af;</span>
            <p>电影</p>
           </li>
            <li class="vedio_fooler_ul_li">
            <span class="iconfont iconfont_bttom">&#xe642;</span>
            <p>剧集</p>
           </li>
            <li class="vedio_fooler_ul_li">
            <span class="iconfont iconfont_bttom">&#xe76d;</span>
            <p>动漫</p>
           </li>
            <li class="vedio_fooler_ul_li">
            <span class="iconfont iconfont_bttom">&#xe600;</span>
            <p>综艺</p>
           </li>
        </ul>
    </div>
</template>

<script>
export default {
    namd:"FooterHomePage"
}
</script>

<style lang="stylus" scoped>
.vedio_fooler
  width:100%
  position:fixed
  bottom:0
  z-index:1000
  background:#fff
  .vedio_fooler_ul
    width:100%
    .vedio_fooler_ul_li
      list-style:none
      float:left
      width:20%
      text-align:center
      padding: .2rem 0
      .iconfont_bttom
        margin-bottom:.1rem
        display:inline-block
</style>


