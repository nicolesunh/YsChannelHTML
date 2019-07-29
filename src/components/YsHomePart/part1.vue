<template>
  <div class="home">
  <el-carousel indicator-position="outside" :height="bannerH + 'px'" >
    <el-carousel-item >
      <div class="w1">
        <img src="http://www.shisc.net/p/yangshan/images/2.jpg" >
        <div class="ww1" >
          世界一流大港
          <div class="ww2">  上海深水洋山港 </div >
          </div>
      </div>
      
    </el-carousel-item>
    <el-carousel-item >
      
       <div class="w1">
        <img src="http://www.shisc.net/p/yangshan/images/3.jpg" >
        <div class="ww1" >
          国际航运枢纽港
        </div>
      </div>

    </el-carousel-item>
    <el-carousel-item >
      
       <div class="w1">
        <img src="http://www.shisc.net/p/yangshan/images/header/headerbg.jpg" >
        <div class="w2" >
          长江流域“龙头”
        </div>
      </div>

    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>

export default {
		name: 'home',
		data() {
			return {
				bannerH:900,
			}
    },
    methods: {
      setBannerH(){
        this.bannerH = document.body.clientWidth / 2
      }
    },
    mounted(){
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
    }
	}
</script>
<style lang = scss scoped>
 
  .w1{
    position:relative;
    .ww1{
      position:absolute;
      z-index:2; 
      top: 15%;
      left: 18%;
      font-size:4em; 
      color:white;
      .ww2{
        font-size:24px;
        color:white;
        text-align:center;
        padding-top:15px;
      }
    }
  }
  .w2{
     position:absolute;
  
      top: 45%;
      left: 17%;
      font-size:4em; 
      color:white;
  }
</style>