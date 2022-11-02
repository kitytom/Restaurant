<template>
  <div class="indexbox">
   <div id="mainp">
   </div>

  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
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
      TooltipComponent,
      GridComponent,
      LegendComponent,
      BarChart,
      CanvasRenderer
    ])
  },
  mounted () {
    const num = 'dark'
    const chartDom = document.getElementById('mainp')
    const myChart = echarts.init(chartDom, num)

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['利润', '成本', '总收入']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        }
      ],
      series: [
        {
          name: '利润',
          type: 'bar',
          label: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            focus: 'series'
          },
          data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
          name: '总收入',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: '成本',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'left'
          },
          emphasis: {
            focus: 'series'
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]
    }
    option && myChart.setOption(option)
  }
}
</script>

<style scoped>

#mainp{
  width: 400px;
  height: 400px;
}
</style>
