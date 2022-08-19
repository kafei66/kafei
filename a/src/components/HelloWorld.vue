
<template>
<div class="aside">
<div class="left-top">
      <img src="/fire.png" alt=""> imooc-admin
    </div>
    <ul>
      <li v-for="item,index in leftNav" :key="index" @click="$router.push(`${item.path}`)">
        <i class="el-icon-user-solid"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      leftNav:[{
        icon:'el-icon-user-solid',
        title:'个人中心',
        path:'/pople'
      },
      {
        icon:'el-icon-user-solid',
        title:'数据可视化',
        path:'/json'
      },
      {
        icon:'el-icon-user-solid',
        title:'用户',
        path:'/user'
      },
      {
        icon:'el-icon-user-solid',
        title:'文章',
        path:'/article'
      }]
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.aside{
    background-color:#304156;
    color: #eee;
    height: 100vh; 
    padding: 20px 10px;
    ul{
      margin-top: 20px;
      li{
        margin-top: 10px;
        // padding: 0 20px;
        font-size: 14px;
        span{
          margin-left:20px; 
        }
      } 
    }
  }
</style>
