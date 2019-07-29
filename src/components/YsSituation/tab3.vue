<template>
 
    <div class="haikuang">
      
        <div class="myFrame">
                  <el-tabs tab-position="top" v-model="activeName" type=" "  @tab-click="goweb" >
                    <el-tab-pane label="海浪预报" name="first" :key="first">
                      <img class="hailang" src="http://www.dhybzx.org/yubao/image/hyybImg/lang.jpg">
                    </el-tab-pane>
                    <el-tab-pane label="潮汐预报" name="second" :key="second">
                      <tab2></tab2>
                      <img class="hailang2" width="500px"  src="http://www.dhybzx.org/yubao/image/tide/cx_00.png">
                    </el-tab-pane>
                    <el-tab-pane label="灾害预警" name="third" :key="third">
                      <tab3></tab3>
                    </el-tab-pane>
                    <el-tab-pane label="海流图" name="fouth" :key="fouth">
                      <tab4></tab4>
                      <img class="hailang3" width="500px"  src="http://www.dhybzx.org/yubao/image/current/k_00.png">
                    </el-tab-pane>
                  </el-tabs>
          </div>
        
      </div>
</template>
<script>
    export default {
      name: 'haikuang',
      data(){
      return{
        activeName: "first"
        
      }
    },
      methods:{
        goweb ( val) {
          if(val.name=='third'){
            window.location.href="http://www.dhybzx.org/OceanPortal/findHistoryDocWarning.action?type=storm";
       }  
     } 
      }
    }
</script>
<style  scoped>
    .myFrame{
      width: 650px;
      height: 427px;
      margin: 0 auto;
    }
</style>

