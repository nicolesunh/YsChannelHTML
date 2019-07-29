<template>
  <div class="ysChannelShouce">
    <YsChannelNav :parentToChild="addActive"></YsChannelNav>
    <div class="ysChannelSituationAll">
         <div class="ysChannelShouceAllBd">
           <div class="headlines">
            <h4>洋山手册</h4><br>
            <div class="zujian">
                    <el-tabs tab-position="left" v-model="activeName" @tab-click="goweb">
                      <el-tab-pane label="单位名录" name="first" :key="first">
                        <tab1></tab1> 
                      </el-tab-pane>
                      <el-tab-pane label="码头概况" name="second" :key="second">
                        <tab2></tab2>
                      </el-tab-pane>
                      <el-tab-pane label="业务介绍" name="third" :key="third">
                        <tab3></tab3>
                      </el-tab-pane>
                      <el-tab-pane label="通关操作指南" name="fourth" :key="fouth">
                        <tab4></tab4>
                      </el-tab-pane>
                      <el-tab-pane label="洋山客运" name="fifth" :key="fifth">
                        <tab5></tab5>
                      </el-tab-pane>
                      <el-tab-pane label="大桥通行" name="sixth" :key="sixth" >
                        <tab6></tab6>
                      </el-tab-pane>
                      <el-tab-pane label="公交信息" name="seventh" :key="sixth" >
                        <tab7></tab7>
                      </el-tab-pane>
                      <el-tab-pane label="洋山观光" name="eighth" :key="sixth" >
                         <tab8></tab8>
                      </el-tab-pane>
                      <el-tab-pane label="行车地图" name="ninth" :key="sixth" >
                         <tab9></tab9>
                      </el-tab-pane>
                    </el-tabs>
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
  import tab1 from "../.././components/YsShouce/tab1"
  import tab2 from "../.././components/YsShouce/tab2"
  import tab3 from "../.././components/YsShouce/tab3"
  import tab4 from "../.././components/YsShouce/tab4"
  import tab5 from "../.././components/YsShouce/tab5"
  import tab6 from "../.././components/YsShouce/tab6"
  import tab7 from "../.././components/YsShouce/tab7"
  import tab8 from "../.././components/YsShouce/tab8"
  import tab9 from "../.././components/YsShouce/tab9"
  export default {
    name: "YsChannelShouce",
    data(){
      return{
        addActive:"YsChannelShouce",
        isShow:"YsChannelShouce",
        activeName:" "
      }
    },
    created(){
      this.activeName=this.$route.query.id;
      console.log(this.activeName)
    },
    components: {
      YsChannelNav:YsChannelNav,
      YsChannelFooter:YsChannelFooter,
      tab1:tab1,
      tab2:tab2,
      tab3:tab3,
      tab4:tab4,
      tab5:tab5,
      tab6:tab6,
      tab7:tab7,
      tab8:tab8,
      tab9:tab9,
    }
  } 
</script>
<style  lang = scss scoped>
  .ysChannelShouce{
    width: 100%;
    background: #ffffff;
    padding-top: 20px;
    .ysChannelShouceAllBd{
      width: 1170px;
      margin: 0 auto;
      min-height: 820px;
      background: #ffffff;
      text-align: center;
    }
  }
  .headlines{
    margin: 30px 0;
  }
  h4 {
  font-size: 3em;
  text-transform: uppercase;
  color: #00a0dc;
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  margin-bottom: 80px;
  letter-spacing: 2px;
  word-spacing: 5px;
  }
  .zujian{
    margin: 0 0 0 10%;
  }
</style>
