<template>
    <div :id="id" class="ecahrtStyle"></div>
</template>

<script>
import { debounce } from 'lodash'
// 引入ecahrts
import * as echarts from 'echarts'
import shortid from 'shortid'
const EVENTS = ['click', 'dblclick', 'mouseover', 'mouseout', 'mousedown', 'mouseup']
export default {
  name: 'EchartsComponents',
  props: {
    options: Object
  },
  data () {
    return {
      chart: null,
      id: shortid.generate()
    }
  },
  computed: {
  },
  methods: {
    init () {
      if (!this.id) return
      this.chart = echarts.init(document.getElementById(this.id))
      EVENTS.forEach(event => {
        this.chart.on(event, params => {
          this.$emit(event, params)
        })
      })
      if (!this.chart) return
      this.chart.setOption(this.options)
      const that = this
      window.addEventListener(
        'resize',
        debounce(() => {
          // 引入debounce，防止频繁更改浏览页尺寸出现页面抖动
          if (that.chart) {
            that.chart.resize()
          }
        }, 100)
      )
    },
    convertFromPixel (finder, value) {
      return this.chart.convertFromPixel(finder, value)
    }
  },
  mounted () {
    this.init()
  },
  beforeUnmount () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  registerMap (mapName, geoJSON, specialAreas) {
    echarts.registerMap(mapName, geoJSON, specialAreas)
  },
  watch: {
    options: {
      handler () {
        this.$nextTick(() => {
          this.init()
        })
      },
      deep: true
    }
  }
}
</script>

<style>
.ecahrtStyle {
    width: 100%;
    height: 100%;
}
</style>
