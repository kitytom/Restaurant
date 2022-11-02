<template>
  <div class="loginbox">
    <div class="contentbox">
      <input type="text" placeholder="输入用户名" class="username">
      <input type="text" placeholder="输入密码" class="password">
      <div class="loginbtn" @click="submitForm"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    submitForm (formName) {
      this.$router.push('/show')
    }
  }
}
</script>

<style scoped>
.loginbox{
  width: 100%;
  height: 583px;
  padding-top: 130px;
  background-image: url('.././assets/logo.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
.contentbox{
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background-image: url('.././assets/log1.png');
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}
.contentbox .username{
  width: 349px;
  height: 27px;
  position: absolute;
  top: 94px;
  left: 100px;
  outline: none ;
  border: 0;
  font-size: 16px;
  color: aquamarine;
  background-color: #0095C1;
}
.contentbox .password{
  width: 349px;
  height: 27px;
  position: absolute;
  top: 159px;
  left: 100px;
  outline: none ;
  border: 0;
  font-size: 16px;
  color: aquamarine;
  background-color: #0095C1;
}
.loginbtn{
width: 400px;
height: 40px;
position: absolute;
top: 253px;
left: 50px;
}
</style>
