
<template>
<div class="pople">
    <div class="left-box">
        <div class="left-top">
            介绍（已升级<br/>element-plus 正式 <br/>版）
        </div>
        <div class="left-red">
            <img src="/fire2.png" alt="">
            <p>super-admin</p>
            <p>超级管理员</p>
            <h3>项目管理员</h3>
        </div>
    </div>
    <div class="right-box">

    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.pople{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 100%;
    .left-box{
        width: 15%;
        height: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        margin-right: 10px;
        .left-top{
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .left-red{
            text-align: center;
            padding: 10px;
        }
    }
    .right-box{
        flex: 1;
        padding: 10px;
         border: 1px solid #ddd;
    }
}
</style>
