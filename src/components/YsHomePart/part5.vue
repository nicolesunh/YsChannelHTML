<template>
  <div class="banshi">
    <a class= "zhinan" href=" ">办事指南</a>
    <div class="list">
        <ul class="list1"> 
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.portshanghai.com.cn/jtwbs/xinwen/2016-7/1467363134228.html">上海港收费</a></li>
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.shisc.net/p/%e4%b8%93%e9%a1%b9%e8%b5%84%e9%87%91">航运基金申报</a></li>
        </ul>
         <ul class="list2"> 
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.sh-pilots.com.cn/info/Application.aspx">引航服务</a></li>
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.shisc.net/p/archives/43593">国际贸易单一窗口</a></li>
        </ul>
         <ul class="list3"> 
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.shisc.net/p/%e4%b8%93%e9%a1%b9%e8%b5%84%e9%87%91">航运基金申报</a></li>
          <li class="listicon"><i  class="el-icon-location"></i><a href="http://www.shmsa.gov.cn/workguide.aspx?id=1f12c99f-1ffd-4638-89b2-cd7ce4496852&type=0 ">船舶所有权登记</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .banshi {
    background-color: #f7f7f7;
    text-align: center;
    overflow: hidden;
    padding-bottom: 90px;
  .zhinan {
    font-size: 3em;
    text-transform: uppercase;
    color: #00a0dc;
    border-bottom: 2px solid #ddd;
    display: inline-block;
    padding-top: 40px;
    padding-bottom: 10px;
    margin-top: 50px;
    margin-bottom: 6%;
    letter-spacing: 2px;
    word-spacing: 5px;
    }
  a:hover {color:#003366;}
  }
  .banshi .list{
    margin-right: auto;
    margin-left: auto;
    padding-left: 10%;
    padding-right: 15px;
    .list1 ,.list2 ,.list3{
      float: left;
      width: 33%;
      color:#00a0dc;
      text-align: left;
      .listicon{
        font-size: 2em;
        padding-bottom: 35px;
        a{
          color: #00a0dc;
        }
      }
    }
  }
</style>

