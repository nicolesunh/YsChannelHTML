<template>
  <div class="matou">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一期码头概况" name="1">
            <div class="team_item">
              <div class="jumbotron">
                <p class="lead ">
                  <img src="http://www.shisc.net/p/yangshan/images/dili.png">
                </p>
              </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="二期码头概况" name="2">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead text-left">
                为充分发挥洋山深水港区的综合规模效益，进一步加快上海国际航运中心的建设步伐，在洋山深水港一期港区顺利投产的基础上，根据国家有关批复精神和上海市委、市府有关“二期工程于2006年底前建成投产”的要求，市深水港工程建设指挥部、上海同盛投资（集团）有限公司抓紧组织建设二期工程。经过广大建设者两年多的艰苦努力、通力协作，二期工程已于2006年10月底全面建成较计划提前一个月交付生产准备，为二期工程将于12月10日投入试生产奠定了基础。<br>
                洋山深水港区二期工程位于小洋山岛南侧的水域，建设4个集装箱专用泊位，码头岸线 1400米，陆域总面积约88.83万平方米，16台载荷60吨的桥吊（其中双40英尺桥吊13台）设计集装箱年吞吐量210万TEU。<br>
                洋山1号2号码头将合并运作，形成码头岸线全长3000米，配备9个集装箱深水泊位，设计年吞吐量达到430万TEU。<br>
              </p>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
  </div>
</template>
<script>
    export default {
      name: 'team_item',
      data(){
        return{
          activeName:" "
        };
      },
      mounted(){
      }
    }
</script>
<style lang="scss" scoped>
.matou{
  text-align: center;
  margin-left: 50px;
}
    .team_item{
      margin-left: 30px;
      margin-bottom: 30px;
      text-align: center;
      width: 800px;
    .jumbotron{
      padding: 30px;
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 200;
      line-height: 2.1428571435;
      color: inherit;
      background-color: #eeeeee;
    }
       p{
      margin-bottom: 20px;
      font-size: 15px;
      font-weight: 200;
      line-height: 1.4;
      color: #666;
    }
    .text-left{
      text-align:left;
    }
}
</style>



