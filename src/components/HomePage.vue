<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div class="userimg">
         <img src="../assets/14.jpg" alt="">
        </div>
        <!--  -->
        <el-row>
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#1c4d7b"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>菜单合集</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <i class="el-icon-orange"></i>
                  <router-link to="/index">数据中心</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <i class=" el-icon-postcard"></i>
                  <router-link to="/usernumber">业务管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-3">
                    <i class=" el-icon-shopping-cart-1"></i>
                      <router-link to="/addcai"> 添加菜品</router-link>
                    </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--  -->
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to="/userpage">顾客中心</router-link> </span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">用户设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
       </el-row>
       <!-- <div  class="bgbox">
        <button @click="bgcoro" class="an">暗</button>
        <button  @click="bgco" class="liang">亮</button>
       </div> -->
        <!--  -->
      </el-aside>
      <el-container>
        <el-header>
           <div class="headerbox"> 大鱼铁板烧管理系统</div>
        </el-header>
        <el-main>
        <router-view></router-view>
        </el-main>
        <el-footer>
          <div class="headerbox"> 大鱼铁板烧</div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
    // bgcoro () {
    //   console.log('oo')
    //   const nm = 'dark'
    //   this.$store.commit('bgcolor', nm)
    //   console.log(this.$store.state.drk)
    // },
    // bgco () {
    //   const nm = ''
    //   this.$store.commit('bgcolor', nm)
    //   console.log(this.$store.state.drk)
    // }
  }
}
</script>

<style scoped>
.headerbox{
  width: 180px;
  height: 58px;
  line-height: 58px;
  font-size: 18px;
  color: #3BFFBD;
  margin-left: 90px;
}
.userimg{
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #333;
  border-radius: 100%;
  margin: 40px 0px 10px 60px;
  background-color: #E9EEF3;
  position: fixed;
 }
 .userimg img{
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 1px 1px 9px #3BFFBD;
 }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header{
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0px;
}
.el-header, .el-footer {
  background-color: #1c4d7b;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
}
.el-header .titlebox{
  width: 203px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
}
.el-aside {
  background-color: #3b6893;
  color: rgb(255, 255, 255);
  text-align: center;
 background-image: url();
}

.el-main {
  margin-top: 50px;
  height: 100%;
  background-color: #00326C;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.transition-box {
  margin-bottom: 10px;
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #B3C0D1;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  margin-right: 20px;
  margin-left: 20px;
}
.boxleft .el-button{
  height: 60px;
  width: 160px;
  position: fixed;
  top: 50px;
  left: 20px;
}
.boxleft{
margin-top: -40px;
}
.mainbox{
  height: 700px;
  margin-top: 70px;
  background-color: #d3d9e0;
}
.title{
  margin-left: 100px;
}
.leftnav{
  position: fixed;
  top: 160px;
}
.transition-botton{
  height: 50px;
  margin-left: 20px;
  margin-right: 10px;
}
.bgbox button{
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: #97c3f9;
  margin-left: 10px;
}
.liang{
  background-color: #fff;
}
.an{
  background-color: black;
  color: #fff;
}
.el-menu{
  margin-left: -2px;
  border: 0;
  position: fixed;
  top: 140px;
  border:1px solid #FEA147;
}
.el-submenu a{
  color: #3BFFBD;
}
.el-menu-item a ,.el-menu-item span ,.el-submenu span{
  color: #FEA147;
}
</style>
