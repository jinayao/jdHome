<template>
    <div class="home">
        <van-nav-bar title="首页" />
        <div class="home__banner">
            <van-swipe :autoplay="3000" height="140" lazy-render>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="home__grid">
            <van-grid :border="false">
                <van-grid-item icon="photo-o" text="收入" :to="{name:'income'}">
                    <van-image width="0.2rem" height="0.2rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
                    <p>收支</p>
                </van-grid-item>
                <van-grid-item icon="photo-o" text="支出">
                    <van-image width="0.2rem" height="0.2rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
                    <p>暂定</p>
                </van-grid-item>
                <van-grid-item icon="photo-o" text="支出">
                    <van-image width="0.2rem" height="0.2rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
                    <p>暂定</p>
                </van-grid-item>
                <van-grid-item icon="photo-o" text="支出">
                    <van-image width="0.2rem" height="0.2rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
                    <p>暂定</p>
                </van-grid-item>
            </van-grid>
        </div>
        <div class="home__echart">
            <div class="home__echart__item">
                <Pie :dataValue="dataValue1" :title="title1" />
            </div>
            <div class="home__echart__item">
                <Pie :dataValue="dataValue2" :title="title2" />
            </div>
            <div class="home__echart__item">
                <Bar :dataValue="dataValue3" :title="title3" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import Pie from '@/components/echarts/PieEchart.vue'
import Bar from '@/components/echarts/BarEcahrt.vue'
export default {
  components: {
    Pie,
    Bar
  },
  setup () {
    const images = reactive([
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
    ])
    const dataValue1 = reactive([
      { value: 80, name: '支出' },
      { value: 20, name: '收入' }
    ])
    const dataValue2 = reactive([
      { value: 80, name: '购物' },
      { value: 20, name: '宠物' },
      { value: 20, name: '伙食' },
      { value: 20, name: '出行' },
      { value: 20, name: '孩子' },
      { value: 20, name: '父母' }
    ])
    const dataValue3 = reactive([
      { y: 80, x: '1月' },
      { y: 20, x: '2月' },
      { y: 20, x: '3月' },
      { y: 20, x: '4月' },
      { y: 20, x: '5月' },
      { y: 20, x: '6月' }
    ])
    const title1 = ref('当月收支占比')
    const title2 = ref('当月支出分类')
    const title3 = ref('近6月收支')
    return {
      images, dataValue1, dataValue2, title1, title2, dataValue3, title3
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: auto;

    &__banner {
        height: 1.4rem;
        padding:0.12rem;
        border-bottom: 1px solid #eee;
        img {
            width: 100%;
            height: 100%;

        }

        .van-swipe {
            border-radius: 0.1rem;
            box-shadow: 0px 0px 6px rgb(100, 100, 100);
        }
    }

    &__grid {
        padding: 0 0.12rem;
        .van-image{
            margin-bottom:0.06rem
        }
        p {
            font-size: 0.08rem;
            margin: 0;
        }
        :deep(.van-grid-item) {
            .van-grid-item__content{
            padding: 0.06rem !important;
        }
        }

    }

    &__echart {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &__item {
            width: 44%;
            height: 25vh;
            margin: 0.08rem;
            box-shadow: 0px 0px 10px #ccc;

            &:last-child {
                width: 98%;
                margin:0 0.08rem
            }
        }
    }
}
</style>
