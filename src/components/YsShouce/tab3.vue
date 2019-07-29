<template>
  <div class="matou">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="洋山一期运作服务指南" name="1">
            <div class="team_item">
              <div class="jumbotron">
                  <div class="team_item">
                      <div class="jumbotron">
                        <div class="details">
                            <el-collapse v-model="activeName">
                              <el-collapse-item title="1.上海盛东国际集装箱码头有限公司业务运作模式" name="4">
                                  <div class="team_item_1">
                                      <p >
                                        <img src="http://www.shisc.net/p/yangshan/images/shengdong.png">
                                      </p>
                                  </div>
                              </el-collapse-item>
                            </el-collapse>
                        </div>
                            <p class=" lead text-left">
                            洋山港区调度管理<br>
                            上海盛东国际集装箱码头有限公司生产管理<br>
                            主要业务流程<br>
                            业务受理<br>
                            特色服务<br>
                            物流服务<br>
                            港口服务<br>
                          </p>
                        <div class="details">
                            <el-collapse v-model="activeName">
                              <el-collapse-item title="2.洋山港区集装箱的集疏作业方式" name="5">
                                  <div class="team_item_1">
                                      <p >
                                        <img src="http://www.shisc.net/p/yangshan/images/zuoye.png">
                                      </p>
                                  </div>
                              </el-collapse-item>
                            </el-collapse>
                        </div>
                        <p class="lead text-left">
                          洋山港区集装箱集疏港<br>
                          进口箱提箱<br>
                          出口箱集港<br>
                          洋山港区至外高桥港区专用支线—“穿梭巴士”<br>
                          水水转运<br>
                        </p>
                        <div class="details">
                            <el-collapse v-model="activeName">
                              <el-collapse-item title="3.洋山港区海关，国检监管，海事管理" name="6">
                                  <div class="team_item_1">
                                      <p >
                                        <img src="http://www.shisc.net/p/yangshan/images/haiguan.png">
                                      </p>
                                  </div>
                              </el-collapse-item>
                            </el-collapse>
                        </div>
                        <p class="lead text-left">
                          海关监管模式<br>
                          国检监管模式<br>
                          海事行政管理<br>
                        </p>
                        <div class="details">
                            <el-collapse v-model="activeName">
                            <el-collapse-item title="4.洋山港区班轮安排原则" name="7">
                                <div class="team_item_1">
                                 
                                   

                                    <div class="team_item_2 ">
                                          <div class="jumbotron_1">
                                            <p class="lead text-left">
                                              1. 充分利用洋山港区深水岸线资源，满足集装箱船舶大型化趋势对枢纽港的需求；<br>

                                              2. 充分尊重船公司的意见，在同相关船公司具体协商，取得共识的基础上，制定班轮安排方案；<br>

                                              3. 有利于发挥班轮公司在推动水水转运业务中的重要作用，促进国际中转和沿海，长江内支线中转业务的发展；<br>

                                              4. 有利于洋山港区在投入营运初期顺利形成生产规模，迅速发挥码头的产生能力。<br>
                                            </p>
                                          </div>
                                        </div>
                                </div>
                            </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="details">
                            <el-collapse v-model="activeName">
                              <el-collapse-item title="5.洋山港区费收标准" name="8">
                                  <div class="team_item_1">
                                    <div class="team_item_2">
                                      <div class="jumbotron_1">
                                        <p class="lead text-left">
                                          洋山港区费收标准
                                          一、货物港务费，港口建设费<br>
                                          洋山港区码头按照交通部颁布的规定计收货物港务费及货物港口建设费。<br>
                                          二、船舶引航费<br>
                                          1. 洋山码头引航费<br>
                                          洋山港区引航锚地距离洋山码头约 16 海里 ，按照交通部颁布的引航费计收办法：基本引航费为 0.53 元 / 净吨<br>
                                          2. 实施二靠的引航费<br>
                                          船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，按部颁发规定 0.22 元 / 净吨计收移泊费。<br>
                                          三、拖轮包干费<br>
                                          1. 洋山码头拖轮包干费<br>
                                          洋山港区外轮，地方船拖轮包干费率表 单位：元<br>
                                          <img class="half" src="http://www.shisc.net/p/yangshan/images/yssc_24.gif"><br>
                                          2. 实施二靠的拖轮包干费<br>
                                          船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，第一次靠泊的码头按规定费率计收；第二次靠泊的码头按规定标准的 70% 计收。<br>
                                          四、停泊费，系解缆费<br>
                                          1. 洋山码头停泊费，系解缆费<br>
                                          靠泊洋山码头的船舶发生的停泊费，系解缆费，按交通部颁布的规定计收。<br>
                                          2. 实施二靠的停泊费，系解缆费<br>
                                          船舶从外高桥移至洋山码头，或从洋山移至外高桥码头，第一次靠泊的码头按规定计收停泊费；第二次靠泊的码头按部颁布标准的 70% 计收。<br>
                                          五、船舶其他使费<br>
                                          洋山码头发生的开关舱费，供水费，供水劳务费，船舶杂项作业费等，统一按交通部颁布的《港口费收规则》的相关规定执行。<br>
                                          六、 集装箱装卸包干费<br>
                                          洋山码头集装箱装卸包干费按照交通部颁布的包干费标准计收：<br>
                                          洋山港区一期码头装卸包干费率表 单位：元<br>
                                          <img class="half" src="http://www.shisc.net/p/yangshan/images/yssc_25.gif"><br>
                                          七、集装箱中转包干费<br>
                                          1、洋山港区集装箱中转包干费率<br>
                                          经洋山港区码头中转的沿海、长江、国际中转集装箱，按以下标准计收中转包干费：<br>
                                          <img class="half" src="http://www.shisc.net/p/yangshan/images/fei.png"><br>
                                          2、互转国际中转箱中转包干费计收<br>
                                          国际中转箱在洋山与外高桥码头之间互转，洋山及外高桥码头分别按以上费率标准的50%计收中转包干费。<br>
                                          3、互转国际中转箱驳运包干费<br>
                                          国际中转箱由“穿梭巴士”完成洋山与外高桥码头之间的驳运，按以下标准计收“穿梭巴士”驳运包干费：<br>
                                          <img class="half" src="http://www.shisc.net/p/yangshan/images/fei2.png"><br>
                                          4、以上驳运包干费全部作运费支付“穿梭巴士”承运人，码头装卸费免收。<br>
                                          二、沿海、长江中转集装箱发生的“穿梭巴士”驳运包干费仍按沪港务业发[2005]0448号文件规定的标准计收。<br>
                                          三、集装箱换船装卸费<br>
                                          由于调换承运船舶而发生的集装箱装卸，所有码头均按上述“洋山港区集装箱中转包干费率表”的标准计收包干费。<br>
                                          八、外高桥“专用码头”换装，驳运包干费<br>
                                          长江内支线与“穿梭巴士”靠泊外高桥“专用码头”，进行中转箱的换装，以及外高桥港区与洋山港区之间的驳运总包干费为： 350.00 元 / 20 ' 575.00 元 / 40 '<br>
                                          九、跨海大桥集卡驳运费<br>
                                          遇有特殊情况，需采用集卡完成集装箱在芦潮港辅助园区与洋山码头之间的驳运，按以下标准计收集卡驳运费，免上下车费。 180.00 元 / 20 ' 360.00 元 / 40 '<br>
                                          十、外高桥至洋山码头集驳运费<br>
                                          外高桥码头至洋山码头的中转箱采用集卡驳运，按以下标准计收驳运费： 500.00 元 / 20 ' 750.00 元 / 40 '<br>
                                          十一、集装箱疏港费<br>
                                          洋山码头集装箱疏港包干费计收标准按现行标准执行。<br>
                                          十二、集装箱理货费<br>
                                          洋山港区集装箱理货费，由外轮理货公司与各船公司签定的相关协议计收。<br>
                                          十三、洋山港区其他费收<br>
                                          洋山港区发生的堆存费，查验服务费，喷淋降温费，制冷费，搬移费，上下车费等，均按上海国际港务集团现行的相关规定执行。<br>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                              </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="details">
                            <el-collapse v-model="activeName">
                            <el-collapse-item title="6.外来集卡进港须知" name="9">
                                <div class="team_item_1">

                                      <div class="team_item_2">
                                        <div class="jumbotron_1">
                                          <h2>外来集卡进港须知</h2>
                                          <p class="lead text-left">
                                            
                                            车辆进港必须遵守交通法规,服从交通民警和现场管理人员的指挥.<br>
                                            车辆进港前驾驶员需解开平板锁钮.与作业无关人员不要随车进入港区.进入箱区后,驾驶员需在驾驶室内等候交收箱,不要擅自下车.<br>
                                            车辆进港前请安装火星熄灭器,港内道路限速35公里/小时.进出大门、道口、拆装箱场、停车场、交叉路口或视线不清时,限速5公里/小时.不准超速行驶.<br>
                                            请按照道路标志标线行驶,不准擅自驶入码头平台,不要擅自进入危险品箱区.驶出箱区通道请右转,不要横穿道路直行.<br>
                                            码头装卸器械具有优先行驶权,请主动避让,避免碰撞.外来集卡因挡道、抢道、占道、压线导致与码头轮胎吊碰撞,要承担一切责任.<br>
                                            完成作业请立即驶离港区,不准在港区内逗留和过夜.<br>
                                            车辆在港区内发生事故,请保护好现场,及时通知交通民警,等待处理.<br>
                                            驾驶员要文明驾驶,不要乱鸣号,请不要将各类杂物抛弃在港区内,港区内禁止吸烟.<br>
                                          </p>
                                        </div>
                                      </div>                                 
                                </div>
                            </el-collapse-item>
                            </el-collapse>
                        </div>
                      </div>
                 </div>
              </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="洋山一期二期合并运作指南" name="2">
          <div class="team_item">
            <div class="jumbotron">
              <div class="team_item">
                  <div class="jumbotron">
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="1.服务导航" name="10">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/daohang.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="2.主要业务流程" name="11">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/liucheng.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="3.交通安全需知" name="12">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/anquan.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="4.主要岗位服务范围" name="13">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/gangwei.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="5.相关岗位联系电话" name="14">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/ganglian.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                      <div class="details">
                          <el-collapse v-model="activeName">
                            <el-collapse-item title="6.集装箱费率表" name="15">
                                <div class="team_item_1">
                                    <p >
                                      <img src="http://www.shisc.net/p/yangshan/images/feilv.png">
                                    </p>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
  </div>
</template>
<script>
    export default {
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
      // margin-left: 30px;
      margin-bottom: 30px;
      text-align: center;
      width: 840px;
    .jumbotron{
      // padding: 30px;
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
      padding-left: 30px;
      padding-top: 10px;
    }
}
.team_item_1{
      margin-bottom: 30px;
      text-align: left;
      width: 840px;
      img{
        width: 90%;
      }
}
.team_item_2{
      margin-left: 30px;
      margin-bottom: 30px;
      text-align: center;
      width: 840px;
        .jumbotron_1{
      padding: 30px;
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 200;
      line-height: 2.1428571435;
      color: inherit;
      background-color: #eeeeee;
      }
  }
  h2{
      font-size: 24px;
      font-family: 'Roboto', Arial, sans-serif;
      font-weight: 500;
      color:#444;
      margin-top: 0;
      margin-bottom: 15px;
      line-height: 1.15;
  }
.jumbotron_1 .half{
      width: 50%;
}
</style>




