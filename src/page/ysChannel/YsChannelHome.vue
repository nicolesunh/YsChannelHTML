<template>
    <div class="ysChannelHome">
        <YsChannelNav :parentToChild="addActive"></YsChannelNav>
        <div class="ysChannelHomeAll">
          <div class="ysChannelHomeAllBd">
              <part1></part1>
              <part2></part2>
              <part3></part3>
              <part8></part8>
              <part4></part4>
              <part5></part5>
              <part6></part6>
              <part7></part7>
          </div>
        </div>
        <YsChannelFooter :parentToChild="isShow"></YsChannelFooter>
    </div>
</template>
<script>
    import YsChannelNav from "../.././components/YsChannelCommon/YsChannelNav"
    import YsChannelFooter from "../.././components/YsChannelCommon/YsChannelFooter"
    import part1 from "../.././components/YsHomePart/part1"
    import part2 from "../.././components/YsHomePart/part2"
    import part3 from "../.././components/YsHomePart/part3"
    import part4 from "../.././components/YsHomePart/part4"
    import part5 from "../.././components/YsHomePart/part5"
    import part6 from "../.././components/YsHomePart/part6"
    import part7 from "../.././components/YsHomePart/part7"
    import part8 from "../.././components/YsHomePart/part8"
    export default {
        name: "YsChannelHome",
        data(){
          return{
            addActive:"YsChannelHome",
            isShow:"YsChannelHome"
          }
        },
        components: {
          YsChannelNav:YsChannelNav,
          YsChannelFooter:YsChannelFooter,
          part1:part1,
          part2:part2,
          part3:part3,
          part8:part8,
          part4:part4,
          part5:part5,
          part6:part6,
          part7:part7,
        },
      }
</script>
<style  lang = scss scoped>
  .ysChannelHomeAll{
    width: 100%;
    background: #ffffff;
    padding-top: 20px;
    .ysChannelHomeAllBd{
      width: 1170px;
      margin: 0 auto;
      min-height: 600px;
      background: #ffffff;
    }
  }
</style>
