<template>
  <div class="chaxun">
    <a class= "xinwen" href="http://www.shisc.net/archives/category/home/zxzx/">在线查询</a>
    <div class="iconimg">
        <ul>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'first'} }"><img src="../.././assets/img/jingxi.png" alt="" /></router-link></li>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'third'} }"><img src="../.././assets/img/haikuang.png" alt="" /></router-link></li>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'sixth'} }"><img src="../.././assets/img/kaogang.png" alt="" /></router-link></li>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'fifth'} }"><img src="../.././assets/img/ditu.png" alt="" /></router-link></li>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'fourth'} }"><img src="../.././assets/img/jiaotong.png" alt="" /></router-link></li>
            <li class="imgchaxun"><router-link  :to="{path:'/YsChannelSituation',query:{id:'second'} }"><img src="../.././assets/img/tianqi.png" alt="" /></router-link></li>
            <router-view></router-view>
        </ul>
    </div>
  </div>
</template>
<style lang = scss scoped>
  .chaxun{
    background-color:  #f7f7f7;
    text-align: center;
    .xinwen {
      font-size: 3em;
      text-transform: uppercase;
      color: #00a0dc;
      border-bottom: 2px solid #ddd;
      display: inline-block;
      padding-top: 40px;
      padding-bottom: 10px;
      margin-bottom: 35px;
      letter-spacing: 2px;
      word-spacing: 5px;
      }
    a:hover {color:#003366;}
  }
  .chaxun .imgchaxun{
      position: relative;
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
      text-decoration: none;
      display: inline;
  }
  .iconimg{
    padding-bottom: 90px;
    padding-top: 30px;
  }
</style>