<template>
    <div class="ysChannelFooter">
      <div v-if="valueFromParent == 'YsChannelHome'">
          <div class="ysChannelFooterAll">
            <ul>
              <li>管理单位</li>
              <li>上海口岸</li>
              <li>上海市口岸委</li>
              <li>上海市发改委</li>
              <li>上海市信息委</li>
              <li>上海海关</li>
              <li>上海出入境检验检疫局</li>
              <li>上海海事局</li>
              <li>上海市交通委员会</li>
              <li>上海市交通局</li>
              <li>上海市海洋局</li>
              <li>上海市气象局</li>
              <li>临港新城管委会</li>
            </ul>
            <ul>
              <li>相关单位</li>
              <li>上海电子口岸网</li>
              <li>上海国际港务集团</li>
              <li>中华航运网</li>
              <li>上海商业网</li>
              <li>亿通网</li>
              <li>航运商务网</li>
              <li>盛东公司</li>
              <li>深水港国际物流</li>
              <li>洋山深水港观光游览区</li>
              <li>中国(上海)自由贸易试验区洋山保税港区企业服务平台</li>
            </ul>
            <ul>
              <li>其他港口</li>
              <li>上海港</li>
              <li>宁波港</li>
              <li>天津港</li>
              <li>广州港</li>
              <li>青岛港</li>
              <li>大连港</li>
              <li>秦皇岛港</li>
              <li>深圳港</li>
              <li>宁波保税区</li>
            </ul>
            <ul>
              <li>码头单位</li>
              <li>上海振东集装箱码头有限公司</li>
              <li>上海沪东集装箱码头有限公司</li>
              <li>上海明东集装箱码头有限公司</li>
              <li>上海盛东集装箱码头有限公司</li>
              <li>上海冠东集装箱码头有限公司</li>
            </ul>
            <ul>
              <li>呼叫中心</li>
              <li class="phoneImg"><img src="../.././assets/img/phone.png" alt=""></li>
              <li class="phoneTitle">电话:20260154</li>
            </ul>
          </div>
          <div class="bottom">
            <router-link to="/aboutUs" >关于我们</router-link>
            <router-link to="/contactUs" >联系我们</router-link>
            ©2017 洋山综合信息服务网
          </div>
      </div>
      <div v-if="valueFromParent == 'YsChannelSituation' || valueFromParent == 'YsChannelCallCenter'">
        <div class="ysChannelFooterAll2">
           Copyright © 洋山综合信息服务网
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "YsChannelFooter",
        data(){
          return{
            valueFromParent:""
          }
        },
        props: ['parentToChild'],
        created:function () {
          this.valueFromParent = this.parentToChild;
        }
    }
</script>

<style lang = scss scoped>
  .ysChannelFooter{
    background: #242b32;
    padding: 20px 0;
    .ysChannelFooterAll{
      width: 1170px;
      margin: 0 auto;
      min-height: 450px;
      overflow: hidden;
      ul{
        width: 20%;
        float: left;
        margin-top: 15px;
        li{
          padding: 10px;
          color: #959595;
          text-decoration: none;
          font-size: 15px;
          font-weight: lighter;
        }
        li:nth-child(1){
          font-size: 22px;
          font-weight: bold;
        }
        .phoneTitle{
          font-size: 20px;
          color: red;
        }
      }
    }
    .bottom{
      width: 1170px;
      margin: 0 auto;
      margin-top: 15px;
      a{
        color: #0088cc;
      }
      text-align: center;
      color: #959595;
    }
  }
  .ysChannelFooterAll2{
    width: 1170px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #959595;
  }
</style>
