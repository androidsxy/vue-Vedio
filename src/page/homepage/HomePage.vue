<template>
  <div> 
    <haed-home-page></haed-home-page>
    <vedio-home-page></vedio-home-page>
    </div>
</template>

<script>
import HaedHomePage from './components/HaedHomePage'
import VedioHomePage from './components/VedioHomePage'
export default {
    name:"HomePage",
    components:{
       HaedHomePage,
       VedioHomePage
    }
}
</script>

<style lang="stylus" scoped>

</style>

