<template>
    <div class="pieEchart">
        <Echart :options="options" />
    </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import Echart from './index.vue'

const pieEchartEffect = (dataValue, title) => {
  // 饼图基本配置
  const options = reactive({
    title: {
      text: title.value,
      textStyle: {
        fontSize: 10
      },
      left: '28%',
      top: '10'
    },
    tooltip: {
      show: false
    },
    legend: {
      show: true,
      bottom: 0,
      itemHeight: 6,
      itemWidth: 10,
      orient: 'horizontal',
      textStyle: {
        fontSize: 8
      },
      itemGap: 4
    },
    series: []
  })
  // 饼图颜色配置
  const colorOption = reactive([
    ['#3AD9CF', '#12C9E7'],
    ['#06EFF8', '#1C7DFF'],
    ['#002DE2', '#506BF3'],
    ['#c3ddf7', '#c4ddfc'],
    ['#06C687', '#4AFFC9'],
    ['#6A2EFF', '#A688EE']
  ])
  //   初始化饼图配置
  const initData = () => {
    const datasOption = []
    if (dataValue.value) {
      dataValue.value.forEach((item, index) => {
        const color = colorOption[index]
        const dataOption = {
          value: 0,
          name: '',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'red' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'blue' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
        dataOption.value = item.value
        dataOption.name = item.name
        // 根据自定义的颜色进行配置
        dataOption.itemStyle.color.colorStops = [
          {
            offset: 0,
            color: color[0] // 0% 处的颜色
          },
          {
            offset: 1,
            color: color[1] // 100% 处的颜色
          }
        ]
        datasOption.push(dataOption)
      })
    }
    options.series.push({
      type: 'pie',
      radius: ['30%', '50%'],
      percentPrecision: 0,
      emphasis: {
        scale: true,
        scaleSize: 20
      },
      avoidLabelOverlap: false,
      label: {
        show: true,
        formatter: '{d}%',
        fontSize: 8
      },
      data: datasOption,
      labelLine: {
        length: 5,
        length2: 5
      }
    })
  }
  return { options, colorOption, initData }
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
    const { options, initData } = pieEchartEffect(dataValue, title)
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
.pieEchart {
    width: 100%;
    height: 100%;
}
</style>
