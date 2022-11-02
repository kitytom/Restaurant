<template>
  <div class="userpage">
    <h4>顾客中心</h4>

    <div class="topbox">
      <div  class="topbox1">
        <div class="usertitle">顾客就餐集中时间</div>
        <div class="elbox">
          <el-progress type="circle" :percentage="50" color="red"></el-progress>
          <el-progress type="circle" :percentage="25" color="coral"></el-progress>
     </div>
      <div class="eltime">
       <span>10:00--12:30 </span> <span>16:00--20:00</span>
      </div>
    </div>
    <div  class="topbox1">
      <UserNumaber></UserNumaber>
    </div>
    </div>
    <!--  -->
    <div class="userpage-footer">
      <div class="footul">
         <ul>
        <li>
          推荐最好盈利时间段
        </li>
      </ul>
      </div>

      <div  class="bottonrightbox">
        顾客喜爱的没事排名：
      </div>
    </div>
  </div>
</template>

<script>
import UserNumaber from '../components/nav/UserNumber'
export default {
  components: {
    UserNumaber
  }
}
</script>

<style scoped>
.userpage {
  height: 563px;
  color: aliceblue;
}
h4{
  height: 30px;
  margin-left: 100px;
  color: coral;
}
.userpage .topbox{
  display: flex;
 }
 .userpage .topbox .topbox1{
   width: 600px;
   height: 300px;
   margin-right:20px ;
   background-color: #1C4D7B;
   }
   .userpage-footer{
    width: 1230px;
    height: 200px;
    margin:30px 0px 10px 10px;
    color: rgb(234, 105, 13);
    background-color: #1C4D7B;
    display: flex;
   }
   .footul{
    margin-right: 10px;
    border-radius: 5px 0px 0px 5px;
   }
   .bottonrightbox{
    border-radius: 0px 5px 5px 0px;
   }
   .userpage-footer div{
     width: 630px;
     height: 200px;
     background-color: rgb(176, 217, 195);
   }
   .elbox{
    padding-left: 70px;
   }
   .elbox .el-progress{
    margin-left: 40px;
   }
   .eltime{
    height: 100px;
    line-height: 100px;
    color: aquamarine;
    padding-left: 80px;
   }
.eltime span{
    display: inline-block;
    margin-left: 50px;
   }
   .usertitle{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: aquamarine;
   }
</style>
