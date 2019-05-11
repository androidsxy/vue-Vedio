<template>
    <div>
         <haed-home-page></haed-home-page>
         <nav-homo-page></nav-homo-page>
         <vedio-paly-page :payllist="payllist" :vedioname="vedioname" :vediourl="vediourl" ></vedio-paly-page>
         <relevant-paly-page></relevant-paly-page>
         <!-- <footer-home-page></footer-home-page> -->
    </div>
</template>

<script>
import HaedHomePage from '../components/HaedHomePage'
import FooterHomePage from '../components/FooterHomePage'
import VedioPalyPage from './components/VedioPalyPage'
import NavHomoPage from '../components/NavHomoPage'
import RelevantPalyPage from "./components/RelevantPalyPage"
import axios from 'axios'
export default {
    name:"PalyPage",
    components:{
       HaedHomePage,
       FooterHomePage,
       VedioPalyPage,
       NavHomoPage,
       RelevantPalyPage
    },
    data(){
        return{
            url:"",
            iframeState:false,
            payllist:{},
            vediourl:"",
            vedioname:""
        }
    },
    methods:{
        getHomeInfo(){
            const that = this;
            console.log(that.url);
            axios.get("/api/"+that.url).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            if(res.statusText="OK"){
                this.payllist = res.data;
            }
          //  console.log(this.payllist);
        }
    },
    mounted(){
        this.url = this.$route.params.url;
        console.log(this.url);
        this.getHomeInfo();
    }
}
</script>

<style lang="stylus" scoped>

</style>
