<template>
  <div class="minglu">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="上海口岸管理单位一览表" name="1">
            <div class="team_item">
              <div class="jumbotron">
                <p class="lead ">
                  <img src="http://www.shisc.net/p/yangshan/images/yilan.png">
                </p>
              </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="上海组合港及港航行业协会一览表" name="2">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead">
                <img src="http://www.shisc.net/p/yangshan/images/xiehui.png" alt="">
              </p>
            </div>
          </div>
        </el-collapse-item>
         <el-collapse-item title="驻洋山港区主要单位一览表" name="3">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead">
                <img src="http://www.shisc.net/p/yangshan/images/danwei.png" alt="">
              </p>
            </div>
          </div>
        </el-collapse-item>
         <el-collapse-item title="上海国际港务(集团)有限公司公用码头一览表" name="4">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead">
                <img src="http://www.shisc.net/p/yangshan/images/shanggang.png" alt="">
              </p>
            </div>
          </div>
        </el-collapse-item>
         <el-collapse-item title="上海港口危险货物作业单位名单" name="5">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead">
                <img src="http://www.shisc.net/p/yangshan/images/weixian.png" alt="">
              </p>
            </div>
          </div>
        </el-collapse-item>
         <el-collapse-item title="其他港航相关企事业单位一览表" name="6">
          <div class="team_item">
            <div class="jumbotron">
              <p class="lead">
                <img src="http://www.shisc.net/p/yangshan/images/qita.png" alt="">
              </p>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
  </div>
</template>
<script>
    export default {
      name: 'minglu',
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
.minglu{
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



