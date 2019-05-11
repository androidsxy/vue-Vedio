<template>
    <div class="videoplay">
        <iframe id="video" :src="vediourl" allowfullscreen="true" allowtransparency="true" ></iframe>
        <p class="vedioname">{{vedioname}}</p>
        <div class="line">
            <ul class="line_ul" v-for="(item,index) in payllist.lineList" :key="index">
                <li   :class="['line_li',{'active':index2 === index}]" @click="lineClick(item,index)">线路{{index+1}}</li>
            </ul>
            <div style="clear:both"></div>
        </div>
        <div class="platform_pan" @click="showPlat">
                <span>点击播放</span>
                <span></span>
            </div>
        <div class="platfom_her" v-show="platfomShow">
                <ul class="platfom_ul">
                    <li v-for="(item,index) in payllist.videolist"   :key="index" @click="playClick(item.vodieurl,index)"   :class="['platfom_li',{'active':index1 === index}]">{{item.vodiename}}</li>
                </ul>
        </div>
        <div class="synopsis">
          <span class="synopsis_span">剧情介绍</span>
          <p class="synopsis_p" v-html="payllist.synopsis"></p>
        </div>
    </div>
</template>
<script>
export default {
    name:"VedioPalyPage",
    props:{
      payllist:Object,
    },
    data(){
        return{
            platfomShow:false,
            vediourlTrue:true,
            styleColor:{
              background:"#204060"
            },
            index1:0,
            lineurl:"",
            vediourl:"",
            vedioname:"",
            index2:0
        }
    },
    methods:{
      showPlat(){
        this.platfomShow = !this.platfomShow;
      },
      lineClick(res,index){
         this.index2 = index;
       this.lineurl = res;
       var vediourl = this.vediourl.split("=")[1]+this.vediourl.split("=")[2]
       this.vediourl = res+vediourl;
       console.log(this.vodieurl);
      },
      playClick(res,index){
        this.index1 = index;
        this.vediourl =this.lineurl+res;
        console.log(this.vodieurl);
      }
    },
    watch:{
     payllist(curVal,oldVal){
      if(curVal){
        console.log("??????????????????");
         this.vedioname = "正在播放-"+this.payllist.videolist[0].platformname+"-"+this.payllist.videolist[0].vodiename;
         this.vediourl = this.payllist.lineList[0]+this.payllist.videolist[0].vodieurl;
       }
     },
}
}
</script>

<style lang="stylus" scoped>
.videoplay
  margin-top:.2rem
  width:100%
  height:auto
  #video
    width:100%
    height:5rem
    border:none
    background:#000
  .vedioname
    padding:.2rem .2rem
    color:red
  .line
    margin-top:.2rem
    width:100%
    padding:.2rem .1rem
    border-top:.001rem solid #ccc
    border-bottom:.001rem solid #ccc
    .line_ul
      width:100%
      .line_li
        list-style:none
        border:1px solid #000
        float:left
        width:17%
        margin-left:.1rem
        margin-top:.1rem
        height:.6rem
        line-height:.6rem
        text-align:center
        border-radius:.1rem
      .active
        background:#204060
        color:#fff
   .platform_pan
     padding:.2rem .2rem
     height 0.8rem
     line-height:0.8rem
     border-bottom:1px solid #ccc
   .platfom_her
     padding:.2rem .2rem
     width:100%
     .platfom_ul
       width:100%
       .platfom_li
        float:left
        width:28%
        margin-left:.1rem
        border:.1px solid #ccc
        text-align:center
        padding:.15rem .1rem
        font-size:.1rem
      .active
        background:#204060
        color:#fff
   .synopsis
     margin-top:.5rem
     width:100%
     .synopsis_span
       display:block
       padding: .2rem .2rem
       border-bottom:1px solid #ccc
     .synopsis_p
       padding:.2rem .4rem
       text-indent:.6rem
       line-height:.4rem
</style>
