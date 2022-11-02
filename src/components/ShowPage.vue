<template>
  <div class="indexbox">
       <div id="main" v-if="str">首页</div>
       <!-- <div v-if="showbox">
       </div> -->
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { GraphicComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

export default {
  data () {
    return {
      str: true
      // showbox: false
    }
  },
  methods: {
    // 4秒后关闭动态文字
    gaunbi () {
      setTimeout(() => {
        // this.showbox = true
        this.str = false
        this.$router.push('/home')
      }, 5030)
    }

  },
  created () {
    // 注册组件
    echarts.use([GraphicComponent, CanvasRenderer])
    this.gaunbi()
  },
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)
    const option = {
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '微信扫码点餐后台管理系统',
              fontSize: 70,
              fontWeight: 'bold',
              lineDash: [0, 500],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: 'BDFF3B',
              lineWidth: 1
            },
            keyframeAnimation: {
              // 动画快慢
              duration: 5000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: 'transparent',
                    lineDashOffset: 400,
                    lineDash: [200, 0]
                  }
                },
                {
                  // Stop for a while.
                  percent: 0.9,
                  style: {
                    fill: 'transparent'
                  }
                },
                {
                  percent: 1,
                  style: {
                    fill: 'brown'
                  }
                }
              ]
            }
          }
        ]
      }
    }

    option && myChart.setOption(option)
  }
}
</script>

<style scoped>
#main{
  width: 700px;
  height: 500px;
  margin: 0 auto;
  color: brown;
}
.indexbox .active{
  width: 0px;
  height: 0px;
  z-index: 4;
  color: rgb(191, 247, 228);
}
.indexbox{
  width: 100%;
  height: 715px;
  background-color: #1C4D7B;
}
</style>
