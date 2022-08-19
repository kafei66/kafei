
<template>
<div class="about">
  <el-container>
  <el-aside class="aside" width="200px">
    <HelloWorld></HelloWorld>
  </el-aside>
  <el-container>
    <el-header>
      <topTitle></topTitle>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import topTitle from "@/components/top.vue";
export default {
  name: '',
  components: {HelloWorld,topTitle},
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
.about{
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  
}
</style>
