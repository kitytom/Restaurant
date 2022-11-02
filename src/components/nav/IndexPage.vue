<template>
  <div class="indexbox">
    <div class="indexboxtop">
      <div class="topbox1">
       <HostMan></HostMan>
     </div>
   <div class="topbox2">
     <TingjiPage></TingjiPage>
   </div>
   <div class="topbox3">
      <DatyPlay></DatyPlay>
   </div>
    </div>
    <!--  -->
    <div class="centerbox">
      <div class="centerbox1">
        <PortFit></PortFit>
      </div>
      <div class="centerbox2">
        <div class="centerbox2left">  <ul>
        <li>智能推荐</li>
        <li>(1-10)天-的利润 <span>￥8900</span></li>
        <li>(1-10)天-顾客总数：<span>1000人</span> </li>
        <li>销量最好的前三种菜系：<span>小炒黄牛肉、鳌虾、西冷牛排</span></li>
        <li>出现亏损的时间和亏损金额：<span>00</span>
        </li>
        <li>推荐主打菜系：<span>小炒黄牛肉、鳌虾、西冷牛排</span></li>
        <li>放弃销量热度低的菜系：</li>
        <li>顾客就餐时间段推荐：<span>17:00-20:00</span> </li>
      </ul>
    </div>
        <div class="centerbox2right">
          <el-card class="box-card">
            <div v-for="(item , index) in datalist" :key="item" class="text item">
              {{index+1}}:&nbsp;&nbsp;&nbsp;{{ item}}
            </div>
          </el-card>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import HostMan from './HostMan.vue'
import TingjiPage from './TongjiPage.vue'
import DatyPlay from './DatyPlay.vue'
import PortFit from './ProFit.vue'
export default {
  components: {
    HostMan,
    TingjiPage,
    DatyPlay,
    PortFit
  },
  data () {
    return {
      data: '',
      datalist: [
        '实时疫情推荐',
        '郑州新增100+例',
        '上海新增5例',
        '贵阳一例复阳',
        '本土无确诊病例'
      ]
    }
  },
  methods: {

  },
  created () {
  },
  mounted () {
    this.data = this.$store.state.drk
  }
}
</script>

<style>
.indexboxtop{
  margin-left: -10px;
  display: flex;
}
.topbox1{
  width: 450px;
  height: 450px;
  margin-left: 10px;
}
.topbox2{
  width: 450px;
  height: 450px;
  margin-left: 10px;
}
.topbox3{
  width: 450px;
  height: 450px;
  margin-left: 10px;
}
.centerbox{
  margin-top: -20px;
   display: flex;
   margin-left: -10px;
   position: relative;
}
.centerbox .centerbox1{
  width: 450px;
  height: 400px;
  margin-left: 10px;
  padding-left: 30px;
  color: aliceblue;
  background-color:#0F0B28 ;
  box-shadow: -2px -2px 5px rgb(255, 255, 255);

}
.centerbox .centerbox2{
  width: 773px;
  height: 400px;
  margin-left: 10px;
  color: aliceblue;
  display: flex;
}
.centerbox2 ul li{
  width: 100%;
  height: 50px;
  color: #FE8452;
  line-height: 50px;
  margin-left: 20px;
}
.centerbox2 ul li span{
  color: aquamarine;
}
.centerbox2left{
  width: 480px;
  margin-right: 10px;
  background-color: #0F0B28;
  box-shadow: 2px 2px 5px rgb(255, 255, 255);
}
.item {
  padding: 18px 0;
}

.centerbox2right .box-card {
  height: 392px;
  width: 280px;
  margin: 1px 0px 30px 3px;
  color: black;
  font-size: 18px;
  border: 3px solid rgb(167, 247, 227);
  background-color: #6de0ba;
}
</style>
