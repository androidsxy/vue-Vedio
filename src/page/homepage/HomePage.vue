<template>
  <div> 
    <haed-home-page></haed-home-page>
    <nav-homo-page></nav-homo-page>
    <vedio-home-page v-for="(item,index) in vedoeList" :key="index" :dylist="dylist" :itemlist="item"></vedio-home-page>
    <footer-home-page></footer-home-page>
    </div>
</template>

<script>
import HaedHomePage from './components/HaedHomePage'
import NavHomoPage from './components/NavHomoPage'
import VedioHomePage from './components/VedioHomePage'
import FooterHomePage from './components/FooterHomePage'
import axios from 'axios'
export default {
    name:"HomePage",
    data(){
      return{
        dylist:[],
        vedoeList:[{
          "ioon":"&#xe6af;","name":"电影","url":"/","bottom":{"margin-bottom":0}
        },{
          "ioon":"&#xe642;","name":"剧集","url":"/","bottom":{"margin-bottom":0}
        },{
          "ioon":"&#xe600;","name":"综艺","url":"/","bottom":{"margin-bottom":0}
        },{
          "ioon":"&#xe76d;","name":"动漫","url":"/","bottom":{"margin-bottom":"1.2rem"}
        }]
      }
    },
    components:{
       HaedHomePage,
       NavHomoPage,
       VedioHomePage,
       FooterHomePage
    },
    methods:{
      getHomeInfo(){
        axios.get('/api/list.php')
            .then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc(res){
        if(res.statusText=="OK"){
          this.dylist = res.data;
          console.log(this.dylist);
        }
;      }
    },
    mounted(){
      this.getHomeInfo();
    }
}
</script>

<style lang="stylus" scoped>

</style>

