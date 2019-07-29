<template>
  <div class="shipin">
    <a class= "video" >视频赏析</a>
    <div class="textline">
      <h2>阅尽“东方大港”洋山港的繁华</h2>
      <div class="formp4">
        <video controls="controls"  height="600px" width="80%">
              <source src="http://www.shisc.net/p/wp-content/uploads/2017/05/央视新闻160秒-阅尽“东方大港”洋山港的繁华.mp4?_=1" type="video/mp4" >
        </video>
      </div>
    </div>
  </div>
</template>


<script>
export default {
		name: 'shipin',
		data() {
			return {
			}
    },
    methods: {
      }
    }
</script>
<style lang = scss scoped>
.shipin{
  background-color:  #fff;
  text-align: center;
  .video {
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
  .textline h2{
    font-size: 24px;
    color: black;
    padding-top: 40px;
    margin-bottom: 20px;
  }  
}
 
.formp4{
 padding-bottom: 80px;
}

</style>