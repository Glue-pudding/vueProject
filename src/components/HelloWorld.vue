<template>
  <el-scrollbar style="height:100%">
    <div class="login-content">
      <div class="login-left"></div>
      <div class="login-right">
        <div class="login-container">
          <div >Hi~</div>
          <div>欢迎登录</div>
        </div>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.1rem;
}
a {
  color: #42b983;
}

.login-content {
  width: 1435px;
  height: 610px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -305px;
  margin-left: -717.5px;
  z-index: 999;
  .login-left {
    display: inline-block;
    width: 658px;
    height: 116px;
    background: url(../assets/register.png) no-repeat;
    background-size: 100% 100%;
    margin: 247px 140px 247px 0;
    vertical-align: bottom;
  }
  .login-right {
    display: inline-block;
    width: 580px;
    height: 566px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0px 6px 20px 0px rgba(0, 125, 69, 0.35);
    .login-container {
      width: 580px;
      height: 566px;
      background: #fff;
    }
  }
}
</style>
