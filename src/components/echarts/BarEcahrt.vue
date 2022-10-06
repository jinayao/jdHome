<template>
    <div class="echartBox">
      <Echart :options="options"></Echart>
    </div>
  </template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import Echart from './index.vue'

const barEchartEffect = (dataValue, title) => {
  const options = reactive({
    title: {
      text: title,
      textStyle: {
        fontSize: 10
      },
      left: '45%',
      top:'10'
    },
    legend:{
      itemHeight: 6,
      itemWidth: 10,
      orient: 'horizontal',
      left:'10',
      top:'14',
      textStyle: {
        fontSize: 8
      }
    },
    grid: {
      bottom: 30,
      top: 70
    },
    tooltip: {
      show: false
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          fontSize: 8
        }
      },
      data: []
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          fontSize: 6
        }
      }
    },
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(28,125,255,0.5500)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(37,222,203,0.2600)' // 100% 处的颜色
        }
      ]
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(255,0,0,0.5500)' // 0% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(37,0,0,0.100)' // 100% 处的颜色
        }
      ]
    }]
  })
  const initData = () => {
    const x = []
    const y = []
    dataValue.forEach((val) => {
      x.push(val.x)
      y.push(val.y)
    })
    options.xAxis = {
      type: 'category',
      data: x
    }
    options.series = [
      {
        name:'支出',
        data: y,
        type: 'bar',
        barWidth: 15,
        label: {
          show: true,
          formatter: '{c}',
          color: '#000',
          fontSize: 6,
          position: 'top'
        }
      },
      {
        name:'收入',
        data: y,
        type: 'bar',
        barWidth: 15,
        label: {
          show: true,
          formatter: '{c}',
          color: '#000',
          fontSize: 6,
          position: 'top'
        }
      },
      {
        type: 'pictorialBar',
        data: y,
        symbol: 'rect',
        symbolSize: [15, 2],
        symbolOffset: [-9, -2],
        symbolPosition: 'end',
        itemStyle: {
          color: '#1C7DFF'
        }
      },
      {
        type: 'pictorialBar',
        data: y,
        symbol: 'rect',
        symbolSize: [15, 2],
        symbolOffset: [9, -2],
        symbolPosition: 'end',
        itemStyle: {
          color: 'rgba(255,0,0,0.9)'
        }
      }
    ]
  }
  return { options, initData }
}
export default {
  components: {
    Echart
  },
  props: {
    dataValue: {
      type: Object,
      default: []
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { dataValue, title } = toRefs(props)
    const { options, initData } = barEchartEffect(dataValue.value, title.value)
    onMounted(() => {
      initData()
    })
    return {
      options
    }
  }
}
</script>

  <style lang="scss" scoped>
  .echartBox {
    width: 100%;
    height: 100%;
  }
  </style>
