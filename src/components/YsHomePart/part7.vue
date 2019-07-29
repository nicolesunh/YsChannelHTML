<template>
  <div class="chaxun">
    <a class= "xinwen" href="http://www.shisc.net/archives/category/home/zxzx/">口岸服务</a>
    <div class="iconimg">
        <ul>
            <li class="imgchaxun"><a class="delline" href="./yingyong2.php?type=0"><img src="../.././assets/img/icon_gk_member.gif" alt="" /></a></li>
            <li class="imgchaxun"><a class="delline" href="./yingyong2.php?type=2"><img src="../.././assets/img/logo_cus.gif" alt="" /></a></li>
            <li class="imgchaxun"><a class="delline" href="http://www.hb56.com/PublicQuery/NewSchdule.aspx">  <img src="../.././assets/img/logo_jyjy.gif" alt="" /></a></li>
            <li class="imgchaxun"><a class="delline" href="./yingyong2.php?type=4"><img src="../.././assets/img/ysgj.gif" alt="" /></a></li>
            <li class="imgchaxun"><a class="delline" href="./yingyong2.php?type=3"><img src="../.././assets/img/icon_hsj_member.gif" alt="" /></a></li>
            <li class="imgchaxun"><a class="delline" href="./yingyong2.php?type=1"><img src="../.././assets/img/icon_ga_member.gif" alt="" /></a></li>
        </ul>
  
      <ul>
          <li class="mgchaxun"><a href="http://www.jt.sh.cn/jtw/index.html">港政航政</a></li>
          <li class="mgchaxun"><a href="http://www.shcus.gov.cn">上海海关</a></li>
          <li class="mgchaxun"><a href="http://yangshan.shciq.gov.cn/">洋山检验检疫</a></li>
          <li class="mgchaxun"><a href="http://www.sh-immigration.gov.cn/pagelist.aspx?id=15">洋山边检</a></li>
          <li class="mgchaxun"><a href="http://www.shmsa.gov.cn/NewsList.aspx?CatalogId=5eab1f68-6f13-4d51-84da-49c718584fcd">上海海事</a></li>
          <li class="mgchaxun"><a href="http://wsbs.police.sh.cn:81/wsfwzx/jsp/zd.jsp?pa=2038df35f3049ba4d06847a5df42930d2a8ba1c857c74826">港口公安</a></li>
      </ul>
      
  </div> 


  </div>
</template>
<script>

export default {
		name: '新闻资讯',
		data() {
			return {
			
			}
    },
    methods: {
      
      }
    }
    
</script>
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
    margin: 0 20px ;
    text-decoration: none;
    display: inline;
  .delline{
    text-decoration: none;
  }
 }

  .iconimg{
    padding-bottom: 90px;
    padding-top: 30px;
    img{
      width: 100px;
    }
  }

.mgchaxun {
   position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 40px ;
    text-decoration: none;
    display: inline;
 }


</style>