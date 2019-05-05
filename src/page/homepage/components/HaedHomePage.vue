<template>
    <div class="header">
        <input class="header_input" type="text" value="" placeholder="输入影片名称回车搜索..." name="" id="">
        <span class="header_img">搜</span>  
    </div>
</template>

<script>
export default {
    name:"HaedHomePage"
}
</script>

<style lang="stylus" scoped>
.header
  position:relative
  width:100%
  margin-top:.2rem
  margin-bottom:.2rem
  text-align:center
  .header_input
    display:inline-block
    width:87%
    border:1px solid #204060
    height:.65rem
    border-radius:.05rem
    padding: 0 .25rem;
  .header_img
    position:absolute
    right:.4rem
    font-size:0.35rem
    top:.15rem
</style>

