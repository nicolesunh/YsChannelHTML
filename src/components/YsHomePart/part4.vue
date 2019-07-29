<template>
  <div class="service">
    <div class="head">
      <h4>在线服务</h4>
      <div class="buttons">
        <div>
          <el-radio-group v-model="radio" fill=" " text-color="#fff" @change="onClick">
            <el-radio-button label="1" >查询</el-radio-button>
            <el-radio-button label="2" >企业服务</el-radio-button>
          </el-radio-group>
          <div class="gallery">
             <template v-if="imgShow">
                        <ul id="Grid" class="unstyled">
                          <li class="mix tablet animated"  style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/yinhang.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/32007">上海港引航站生产管理系统</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/sanhuo.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a  href="http://www.shisc.net/p/archives/23070">散货码头进港查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/neimao.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a  href="http://www.shisc.net/p/archives/23068">内贸船舶信息查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/dianzi.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23065">电子装箱单（运抵报告）查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/haiguan.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23063">海关放行信息查询</a></p>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/jianyan.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23097">检验检疫提货单查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/jizhuang.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23069">集装箱进出门查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/chukou.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23067">出口船舶信息查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/jinkou.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="http://www.shisc.net/p/archives/23066">进口船舶信息查询</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="mix tablet animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                            <div>
                              <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/more.jpg">
                                <div class="media-desc">
                                  <div>
                                    <p><a href="">更多</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
              </template>
              <template  v-else>
                        <ul id="Grid" class="unstyled">
                          <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                              <div>
                                <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/danyi.jpg">
                                  <div class="media-desc">
                                    <div>
                                      <p><a href="http://www.shisc.net/p/archives/43593">上海国际贸易单一窗口</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                              <div>
                                <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/huandan.jpg">
                                  <div class="media-desc">
                                    <div>
                                      <p><a href="http://www.shisc.net/p/archives/23084">换单费结算业务系统</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                              <div>
                                <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/waizi.jpg">
                                  <div class="media-desc">
                                    <div>
                                      <p><a href="http://www.shisc.net/p/archives/23058">上海市外资网上办事</a></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li class="mix phone animated" data-classin="fadeInDown" style="display:inline-block; opacity: 1;">
                                <div>
                                  <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/hangyun.jpg">
                                    <div class="media-desc">
                                      <div>
                                        <p><a href="http://www.shisc.net/p/archives/23019">中国航运数据库</a></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                  <div>
                                    <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/shouji.jpg">
                                      <div class="media-desc">
                                        <div>
                                          <p><a href="http://www.shisc.net/p/archives/23035">航运手机报</a></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                  <div>
                                    <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/zhineng.jpg">
                                      <div class="media-desc">
                                        <div>
                                          <p><a href="http://www.shisc.net/p/archives/23095">上海交通智能地图</a></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                              </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                    <div>
                                      <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/changjiang.jpg">
                                        <div class="media-desc">
                                          <div>
                                            <p><a href="http://www.shisc.net/p/archives/23072">长江电子航道图</a></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                              </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                    <div>
                                      <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/zhixing.jpg">
                                        <div class="media-desc">
                                          <div>
                                            <p><a href="http://www.shisc.net/p/archives/23090">智行者</a></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                              </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                    <div>
                                      <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/cangdan.jpg">
                                        <div class="media-desc">
                                          <div>
                                            <p><a href="http://www.shisc.net/p/archives/23084">海运舱单管理系统</a></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                              </li>
                              <li class="mix phone animated" data-classin="fadeInDown" style="display: inline-block; opacity: 1;">
                                    <div>
                                      <div class="media-thumb"> <img src="http://www.shisc.net/p/yangshan/images/clients/more.jpg">
                                        <div class="media-desc">
                                          <div>
                                            <p><a href="">更多</a></p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                              </li>
                      </ul>
              </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
         radio: '1',
         imgShow:true
    };
  },
  methods:{
    onClick(val){
      let that = this
      that.imgShow=(val==='1')?true:false;
    }
  }
}
</script>
 <style  lang = scss scoped>
  .service{
    background-color: #2a333b;
    text-align: center;
    min-height: 320px;
    overflow: hidden;
    padding-top: 30px;

  }
  h4 {
    font-size: 3em;
    text-transform: uppercase;
    color: #00a0dc;
    border-bottom: 2px solid #313b44;
    display: inline-block;
    padding-bottom: 10px;
    margin-bottom: 35px;
    letter-spacing: 2px;
    word-spacing: 5px;
    padding-top: 5%;
  }
  .buttons{
    padding-top: 5px;
  }
  .gallery{
    padding-top: 18px;
  }
  .gallery-control {
    margin: 0 0 30px;
    text-align:center;
  }
  .media-desc a{
    color:#fff;
    font-size:18px;
  }
  #Grid {
    font-size: 0;
    line-height: 0;
    text-align: justify;
    display: inline-block;
    width: 100%;
  }
  #Grid .mix {
    opacity: 0;
    display: none;
    width: 20%;
    vertical-align: top;
    font-size: 14px;
  }
  #Grid .mix > div .media-thumb {
    position: relative;
    overflow: hidden;
  }
  #Grid .mix > div .media-thumb img {
    display: block;
    max-width: 100%;
  }
  #Grid .mix > div .media-thumb:hover .media-desc {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }
  #Grid .mix > div .media-desc {
    opacity: 0;
    filter: alpha(opacity=0);
    background: #00a0dc  ;
    background: rgb(37, 38, 41);
    color: #fff;
    color: rgba(255, 255, 255, 0.7);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 20px;
    -o-transition: opacity .3s linear;
    -ms-transition: opacity .3s linear;
    -moz-transition: opacity .3s linear;
    -webkit-transition: opacity .3s linear;
    /* ...and now override with proper CSS property */
    transition: opacity .3s linear;
  }
  #Grid .mix > div .media-desc > div {
      width: 100%;
      padding: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
</style>
