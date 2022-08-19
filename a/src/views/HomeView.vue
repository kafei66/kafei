<template>
  <div class="home">
    <div class="login-box">
      <h4>用户登录 </h4>
      <p>
        <i
          slot="prefix"
          class="el-icon-user-solid"
        ></i>
        <input
          class="inp"
          placeholder="请输入内容"
          v-model="username"
        >

        </input>
      </p>

      <p>
        <i
          slot="prefix"
          class="el-icon-lock"
        ></i>
        <input
          class="inp"
          placeholder="请输入内容"
          v-model="password"
        >

        </input>
      </p>
      <span
        class="sp"
        v-show="spShow"
      >密码不能少于6位</span>
      <p>
        <el-button
          class="btn"
          type="primary"
          @click="loginBtn"
        >登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {
    
  },
  data() {
    return {
      username: "",
      password: "",
      spShow: null
    };
  },
  methods: {
    loginBtn() {
      if (this.password.length < 6) {
        this.spShow = true;
      } else {
        this.spShow = false;
      }
      if(this.username == 'admin' && this.spShow === false){
        this.$router.push('/about')
        this.$axios.post('https://imooc-admin.lgdsunday.club/prod-api/sys/login',{username:this.username,password:this.password}).then(res=>{
          console.log(res);
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #30394a;
  overflow: hidden;
  // text-align: center;
}
.login-box {
  margin: 100px auto;
  color: #fff;
  width: 800px;
  h4{
    padding: 0 0 0 120px;
    text-align: left;
  }
  p {
    padding: 0 20px;
    margin-top: 20px;
    .inp {
      width: 30%;
      height: 30px;
      padding: 0 20px;
      background-color: #2b3340 !important;
      border: none;
      color: #fff;
    }
  }
}
.btn {
  width: 35%;
}
.sp {
  color: red;
  float: left;
  font-size: 10px;
}
</style>
