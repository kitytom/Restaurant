<template>
  <div class="indexbox">
   <div id="main1">
   </div>
  </div>
</template>

<script>import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  GridComponent,
  VisualMapComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

export default {
  props: ['nm'],
  data () {
    return {

    }
  },
  created () {
    echarts.use([
      DatasetComponent,
      GridComponent,
      VisualMapComponent,
      BarChart,
      CanvasRenderer
    ])
  },
  mounted () {
    const chartDom = document.getElementById('main1')
    const myChart = echarts.init(chartDom, 'dark')

    const option = {
      title: {
        text: '各类菜系销售统计',
        left: 'center',
        top: 20,
        // 标题颜色
        textStyle: {
          color: '#FD7F55'
        }
      },
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 58212, '炒菜类'],
          [57.1, 78254, '汤类'],
          [74.4, 41032, '火锅类'],
          [50.1, 12755, '肉排类'],
          [89.7, 20145, '凉菜'],
          [68.1, 79146, '酒水类'],
          [19.6, 91852, '外卖类'],
          [10.6, 101852, '面类'],
          [32.7, 20112, '刺身']
        ]
      },
      grid: { containLabel: true },
      xAxis: { name: 'amount' },
      yAxis: { type: 'category' },
      visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['高', '低'],
        // Map the score column to color
        dimension: 0,
        inRange: {
          color: ['#65B581', '#FFCE34', '#FD665F']
        }
      },
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          }
        }
      ]
    }
    option && myChart.setOption(option)
  }
}
</script>

<style scoped>
#main1{
  width: 400px;
  height: 400px;
  box-shadow: 2px 2px 3px rgb(150, 151, 148);
}
</style>
