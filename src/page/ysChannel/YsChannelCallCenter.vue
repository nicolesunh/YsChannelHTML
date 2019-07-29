<template>
  <div class="ysChannelCallCenter">
    <YsChannelNav :parentToChild="addActive"></YsChannelNav>
    <div class="ysChannelCallCenterAll">
         <div class="ysChannelCallCenterAllBd">
            <br>
            <h4> 呼叫中心 </h4>
            <div class="col-md-12">
              <div class="text">
                <p class="maintext">
                  洋山特服号： 20260154
                  <br>
                  呼叫中心作为洋山深水港综合信息服务平台的子系统之一，接入方式以语音接入为主，	同时能够处理email和传真请求。主要为洋山各政府部门、运营单位、各类企业提供高效服务。
                  <br>
                  <br>
                  <img src="../.././assets/img/callcenter_pic.gif" alt=""> <br>
                  呼叫中心在第一期实现以下功能：<br>
                  • 相关业务咨询 ：对于业务办理情况不熟悉的用户，声讯服务子系统坐席人员将为其提供受理前咨询，为各类企业办理业务提供咨询服务。<br>
                  • 港区 114 ： 用户能对港区内各单位的电话号码进行自动语音查询和人工查询。为用户提供方便、快捷的查询手段，提高办事效率。<br>
                  • 实况信息 ：用户得到关于洋山深水港区的天气信息、海洋和大桥交通等实况信息，为各类企业用户出行办事提供重要参考。<br>
                </p>
              </div>  
            </div>
          </div> 
    </div>
    <YsChannelFooter :parentToChild="isShow"></YsChannelFooter>
  </div>
</template>
<script>
  import YsChannelNav from "../.././components/YsChannelCommon/YsChannelNav"
  import YsChannelFooter from "../.././components/YsChannelCommon/YsChannelFooter"
  export default {
    name: "YsChannelCallCenter",
    data(){
      return{
        addActive:"YsChannelCallCenter",
        isShow:"YsChannelCallCenter",
      }
    },
    components: {
      YsChannelNav:YsChannelNav,
      YsChannelFooter:YsChannelFooter
    }    
  }
</script>
<style  lang = scss scoped>
  .ysChannelCallCenterAll{
    width: 100%;
    background: #ffffff;
     padding-top: 20px;
    .ysChannelCallCenterAllBd{
      width: 1170px;
      margin: 0 auto;
      min-height: 820px;
      background: #ffffff;
    }
  }
  .ysChannelCallCenterAllBd{
    padding-top: 14px;
    text-align: center;
  }
  .maintext{
    font-size: 15px;
    line-height: 24px;
    color: #666;
    text-align: left;
  }
  h4 {
    font-size: 3em;
    text-transform: uppercase;
    color: #00a0dc;
    border-bottom: 2px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
    margin-bottom: 35px;
    letter-spacing: 2px;
    word-spacing: 5px;
  }
</style>
