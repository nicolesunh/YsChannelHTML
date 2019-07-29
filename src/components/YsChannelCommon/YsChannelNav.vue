<template>
     <div class="ysChannelNav">
       <div class="ysChannelNavAll">
         <div class="ysChannelNavAllTitle">
           上海国际航运中心-洋山频道
         </div>
         <div class="ysChannelNavAllItems">
           <ul>
             <li :class="{active:shows=='YsChannelHome'}" @click="addClick1()">首页</li>
             <li :class="{active:shows==2}" @click="addClick2()">新闻咨询</li>
             <li :class="{active:shows==3}" @click="addClick3()">在线查询</li>
             <li :class="{active:shows==4}" @click="addClick4()">洋山手册</li>
             <li :class="{active:shows==5}" @click="addClick5()">在线服务</li>
             <li :class="{active:shows==6}" @click="addClick6()">办事指南</li>
             <li :class="{active:shows==7}" @click="addClick7()">视频欣赏</li>
             <li :class="{active:shows=='YsChannelSituation'}" @click="addClick8()">洋山状况</li>
             <li :class="{active:shows=='YsChannelCallCenter'}" @click="addClick9()">呼叫中心</li>
           </ul>
         </div>
       </div>
     </div>
</template>

<script>
    export default {
        name: "YsChannelNav",
        data(){
          return{
            shows:"YsChannelHome",
          }
        },
        props: ['parentToChild'],
        created:function () {
          this.shows = this.parentToChild;
        },
        methods:{
          addClick1:function () {
            this.shows = 'YsChannelHome';
            this.$router.push(
              {
                name: 'YsChannelHome',
                path:"/ysChannelHome"
              }
            );
          },
          addClick2:function () {
            this.shows = 2;
          },
          addClick3:function () {
            this.shows = 3;
          },
          addClick4:function () {
            this.shows = 4;
          },
          addClick5:function () {
            this.shows = 5;
          },
          addClick6:function () {
            this.shows = 6;
          },
          addClick7:function () {
            this.shows = 7;
          },
          addClick8:function () {
            this.shows = 'YsChannelSituation';
            this.$router.push(
              {
                name: 'YsChannelSituation',
                path:"/ysChannelSituation"
              }
            );
          },
          addClick9:function () {
            this.shows = "YsChannelCallCenter";
            this.$router.push(
              {
                name: 'YsChannelCallCenter',
                path:"/ysChannelCallCenter"
              }
            );
          },

        }

    }
</script>

<style lang = scss scoped>
  .ysChannelNav{
    background: #ffffff;
    border-bottom:1px solid #E5E5E5;
    .ysChannelNavAll{
      width: 1170px;
      margin: 0 auto;
      height: 60px;
      overflow: hidden;
      .ysChannelNavAllTitle{
        color: #5e5e5e;
        background-color: transparent;
        margin-top: 5px;
        float: left;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
        font-weight: bold;
      }
      .ysChannelNavAllItems{
        float: right;
        width: 750px;
        margin-top: 5px;
        padding: 15px 15px;
        line-height: 20px;
        ul{
          overflow: hidden;
          font-size: 14px;
          li{
            float: left;
            width: 11.11%;
            color: #777777;
            text-align: center;
            cursor: pointer;
          }
          .active{
            color: #00a0dc;
          }
        }
      }
    }
  }

</style>
