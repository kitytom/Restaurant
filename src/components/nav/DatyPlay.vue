<template>
   <div id="main2">
   </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      VisualMapComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout
    ])
  },
  mounted () {
    const chartDom = document.getElementById('main2')
    const myChart = echarts.init(chartDom, 'dark')

    const option = {
      backgroundColor: '#2c343c',
      title: {
        text: '菜系销量前五排名',
        left: 'center',
        top: 20,
        // 标题颜色
        textStyle: {
          color: '#FD7F55'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '大鱼铁板烧',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '鳌虾' },
            { value: 310, name: '干锅牛肉' },
            { value: 274, name: '鳗鱼' },
            { value: 235, name: '西冷牛排' },
            { value: 400, name: '小炒黄牛肉' }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            // 字体颜色
            color: 'rgba(127,255,212)',
            // 字体大小
            size: '18px'
          },
          labelLine: {
            // 线的颜色
            lineStyle: {
              color: 'rgba(247,41,148)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            // 图像颜色
            color: '#7FFFD4',
            shadowBlur: 700,
            // 背景扩散范围
            shadowColor: 'rgba(127,255,212)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          }
        }
      ]
    }
    option && myChart.setOption(option)
  }
}
</script>

<style scoped>
#main2{
  width: 400px;
  height: 400px;
  box-shadow: 2px 2px 3px rgb(150, 151, 148);
}
</style>
