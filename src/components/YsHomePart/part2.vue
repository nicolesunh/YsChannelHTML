<template>
  <div class="news">
    <a class= "xinwen" href="http://www.shisc.net/archives/category/home/zxzx/">新闻资讯</a>
      <div class="zixun">
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div class="grid-content ">
              <div >
                <a href="http://www.shisc.net/archives/category/home/zxzx/">通知公告</a>
                <div class="imgbr"><img src="../.././assets/img/tongzhi.jpg" alt=""></div><br>
                <a class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[0].ID">{{msg[0].post_title}}</a>
                <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content ">
              <div >
                <a href="http://www.shisc.net/archives/category/home/zxzx/">港口新闻</a>
                <div class="imgbr"><img src="../.././assets/img/gangkou.jpg" alt=""></div><br>
                <a  class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[1].ID">{{msg[1].post_title}}</a>
                <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
              </div>
            </div>
          </el-col>
          <div class="brr"></div>
          <el-col :span="12">
            <div class="grid-content ">
              <div >
                <a href="http://www.shisc.net/archives/category/home/zxzx/">上海新闻</a>
                <div class="imgbr"><img src="../.././assets/img/shanghai.jpg" alt=""></div><br>
                <a class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[2].ID">{{msg[2].post_title}}</a>
                <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
                <div class="grid-content ">
                  <div >
                    <a href="http://www.shisc.net/archives/category/home/zxzx/">国内新闻</a>
                    <div class="imgbr"><img src="../.././assets/img/guonei.jpg" alt=""></div><br>
                    <a class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[3].ID">{{msg[3].post_title}}</a>
                    <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
                  </div>
                </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content ">
              <div >
                <a href="http://www.shisc.net/archives/category/home/zxzx/">国际新闻</a>
                <div class="imgbr"><img src="../.././assets/img/guoji.jpg" alt=""></div><br>
                <a class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[4].ID">{{msg[4].post_title}}</a>
                <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content ">
              <div >
                <a href="http://www.shisc.net/archives/category/home/zxzx/">统计数据</a>
                <div class="imgbr"><img src="../.././assets/img/tongji.jpg" alt=""></div><br>
                <a class="nomaltext" :href="'http://www.shisc.net/p/archives/'+msg[5].ID">{{msg[5].post_title}}</a>
                <a class="more" href="http://www.shisc.net/archives/category/home/zcgg">更多</a> 
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>
<script>
import axios from "axios";
  export default {
    name: " ",
    data(){
      return{
        msg:' ',
      }
    },
    mounted(){ //then获取成功；response成功后的返回值（对象）
      axios.get('http://www.shisc.net/p/fund/public/yangshan').then(response=>{
         this.msg=response.data;
      }).catch(error=>{ //获取失败
          console.log(error);
          alert('网络错误，不能访问');
      })
    }
  }
</script>
<style  lang = scss scoped>
  .news{
    background-color: #f0f2f4;
    text-align:center;
    padding-bottom: 12%;
     .xinwen {
      font-size: 3em;
      color: #00a0dc;
      border-bottom: 2px solid #ddd;
      display: inline-block;
      margin-top: 50px;
      padding-bottom: 10px;
      letter-spacing: 2px;
      word-spacing: 5px;
    }
     a:hover {color:#003366;}
  }
 .imgbr{
   padding-top: 10px;
  }
  .zixun{
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 80px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    background-color: #f1f0f4;
    border-radius: 4px;
    min-height: 450px;
    min-width: 60px;
    margin-left: 9px;
    margin-right: 9px;
    a {
      text-decoration: none;  
      font-size: 18px;
      color: #00a0dc;
    }
    a:hover {color:#003366;}
    }
  .grid-content .more {
    font-size: 12px;
    float: right;
    padding-top: 10px;
  }
  .brr{
  margin: 24% 0;
  }
 .grid-content .nomaltext{
    color:#000;
    font-size: 14px;
    white-space: nowrap; 
    text-overflow:ellipsis;
    width: 70%; 
	  display: inline-block; 
    overflow: hidden;
  }
</style>








