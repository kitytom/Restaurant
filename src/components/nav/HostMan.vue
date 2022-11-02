<template>
  <div class="indexbox">
   <div id="main">
   </div>
   {{dr}}
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

export default {
  props: ['dr'],
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    echarts.use([GridComponent, BarChart, CanvasRenderer])
  },
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom, 'dark')

    const option = {
      title: {
        // 标题
        text: '收入统计',
        // 字体居中
        left: 'center',
        // 字体颜色
        textStyle: {
          color: '#FD7F55'
        }

      },
      xAxis: {
        type: 'category',
        data: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [
            1120,
            {
              value: 1500,
              itemStyle: {
                color: '#7FFFD4'
              }
            },
            950,
            {
              value: 1000,
              itemStyle: {
                color: '#7FFFD4'
              }
            },
            790,
            {
              value: 1620,
              itemStyle: {
                color: '#7FFFD4'
              }
            },
            930
          ],
          type: 'bar'
        }
      ]
    }
    option && myChart.setOption(option)
  }
}
</script>

<style scoped>

#main{
  width: 400px;
  height: 400px;
  box-shadow: 2px 2px 3px rgb(150, 151, 148);
}
</style>
