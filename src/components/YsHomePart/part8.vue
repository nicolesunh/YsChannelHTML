<template>
    <div class="container">
        <div class="section-headlines">
          <h4><a href=" ">洋山手册</a></h4>
          <div class="col">
           <el-row>
            <el-col :span="12">
              <div class="grid-content">
                  <img src="http://www.shisc.net/p/yangshan/images/pic3-450x410.png" alt="" /> 
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content ">
                <div class="col-l">
                    <template class="media"> <i class="el-icon-s-home"></i>
                      <div class="media-body" > 
                        <h3><router-link  :to="{path:'/YsChannelShouce',query:{id:'first'} }">单位名录</router-link></h3>
                          <p >上海口岸管理单位一览表</p>
                      </div>
                    </template>
                    <br class="gap-30" />
                    <template class="media"> <i class="el-icon-view"></i>
                      <div class="media-body">
                        <h3><router-link  :to="{path:'/YsChannelShouce',query:{id:'second'} }">码头概况</router-link></h3>
                        <p>洋山深水港一期码头概况,洋山深水港二期码头概况</p>
                      </div>
                    </template>
                    <br class="gap-30" />
                    <template class="media"> <i class="el-icon-s-order"></i>
                      <div class="media-body">
                        <h3><router-link  :to="{path:'/YsChannelShouce',query:{id:'third'} }">业务介绍</router-link></h3>
                        <p>洋山一期运作服务指南,洋山一期二期合并运作服务指南</p>
                      </div>
                    </template>
                    <br class="gap-30" />
                    <template class="media"> <i class="el-icon-document"></i>
                      <div class="media-body">
                        <h3><router-link  :to="{path:'/YsChannelShouce',query:{id:'fourth'} }">操作指南</router-link></h3>
                        <p>关于优化洋山保税港区通关环境的若干意见,办理检验检疫手续须知
                      </p>
                      </div>
                    </template>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>      
  </div>
</template>
<script>
export default {
  name :'shouce',
  data(){
    return{
    }
  },
  // methods:{
  //   jump:function(id,title){
  //     console.log(id)
  //     this.$router.push({
  //       path:'/YsChannelShouce',
  //       name:'YsChannelShouce',
  //       query:{
  //         id:this.id,
  //       }
  //     });
  //   }
  // }
}
</script>
<style  lang = scss scoped>
  .section-headlines{
    margin: 80px 0;
    text-align: center;
    overflow: hidden;
  h4 {
    font-size: 3em;
    border-bottom: 2px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
    margin-bottom: 35px;
    letter-spacing: 2px;
    word-spacing: 5px;
    a{
      color: #00a0dc;
    }
    :hover{
      color: #074786;
    }
   }


.col{
  padding-top: 5%;
}
.media,
.media-body {
   overflow: hidden;
   zoom: 1;
}
.media-body{
  text-align-last: left;
}
  .grid-content {
    border-radius: 60px;
    min-height: 400px;
    background-color:#fff;
  }  
 .gap-30 {
   height: 30px;
}
a {
    color: #0088cc;
}
h3 {
    font-size: 18px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
 i {
  font-size: 28px;
  line-height: 55px;
  margin-right: 25px;
  width: 50px;
  height: 50px;
  color: rgb(114, 110, 110);
  border: 3px solid rgb(216, 214, 214);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  float: left;
}


  }
</style>

