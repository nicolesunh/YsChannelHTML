<template>
  <div class="YsChannelSituation">
    <YsChannelNav :parentToChild="addActive"></YsChannelNav>
    <div class="ysChannelSituationAll">
         <div class="ysChannelSituationAllBd">
           <h4>洋山实况</h4><br>
            <div class="zujian">
                  <el-tabs tab-position="left" v-model="activeName" @tab-click="goweb">
                    <el-tab-pane label="精细化预报" name="first" :key="first">
                      <tab1></tab1> 
                    </el-tab-pane>
                    <el-tab-pane label="洋山天气" name="second" :key="second">
                      <tab2></tab2>
                    </el-tab-pane>
                    <el-tab-pane label="洋山海况" name="third" :key="third">
                      <tab3></tab3>
                    </el-tab-pane>
                    <el-tab-pane label="大桥交通" name="fourth" :key="fouth">
                      <tab4></tab4>
                    </el-tab-pane>
                    <el-tab-pane label="地图实况" name="fifth" :key="fifth">
                      <tab5></tab5>
                   </el-tab-pane>
                    <el-tab-pane label="靠港计划" name="sixth" :key="sixth" >
                      <!-- <tab6></tab6> -->
                    </el-tab-pane>
                  </el-tabs>
            </div>
          </div>
    </div>
    <YsChannelFooter :parentToChild="isShow"></YsChannelFooter>
  </div>
</template>
<script>
  import YsChannelNav from "../.././components/YsChannelCommon/YsChannelNav"
  import YsChannelFooter from "../.././components/YsChannelCommon/YsChannelFooter"
  import tab1 from "../.././components/YsSituation/tab1"
  import tab2 from "../.././components/YsSituation/tab2"
  import tab3 from "../.././components/YsSituation/tab3"
  import tab4 from "../.././components/YsSituation/tab4"
  import tab5 from "../.././components/YsSituation/tab5"
  import tab6 from "../.././components/YsSituation/tab6"
  export default {
    name: "YsChannelSituation",
    data(){
      return{
        addActive:"YsChannelSituation",
        isShow:"YsChannelSituation",
        activeName:"first"
      }
    },
    methods(){
      this.activeName=this.$route.query.id;
    },
    components: {
      YsChannelNav:YsChannelNav,
      YsChannelFooter:YsChannelFooter,
      tab1:tab1,
      tab2:tab2,
      tab3:tab3,
      tab4:tab4,
      tab5:tab5,
      tab6:tab6
    },
    methods:{
     goweb ( val) {
       if(val.name=='sixth'){
            window.location.href="http://www.hb56.com/Index.aspx";
       }  
     } 
    }
  }
</script>
<style  lang = scss scoped>
  .ysChannelSituationAll{
    width: 100%;
    background: #ffffff;
    padding-top: 20px;
    .ysChannelSituationAllBd{
      width: 1170px;
      margin: 0 auto;
      min-height: 820px;
      background: #ffffff;
      text-align: center;
    }
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
