
<template>
    <div class="top-box">
        <div class="top-one">
            <div class="top-oneleft">
                <i class="el-icon-s-fold"></i> <span >个人中心</span>
            </div>
            <div class="top-oneright">
                <span><i class="el-icon-wind-power"></i></span>
                 
            <i class="el-icon-search"></i>
            <i class="el-icon-aim"></i>
            <i class="el-icon-folder"></i>
            <img src="/fire.png" alt="">
            </div>
            
           
        </div>
        <div class="top-two">
            <span class="top-twobom">.个人中心</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang='scss'>
.top-box {
  width: 100%;
  .top-one {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-oneright{
        width: 100px;
        margin-right: 100px;
       
    }
  }
  .top-two{
      height: 25px;
      line-height: 25px;
      padding: 5px;
      border-bottom: 2px solid #eee;
      .top-twobom{
          display: inline-block;
          background-color: #304156;
          color: #fff;
          text-align: center;
          padding: 0 10px
      }
  }
}
</style>
