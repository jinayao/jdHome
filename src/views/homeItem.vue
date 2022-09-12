<template>
  <div>
    <!-- 主体内容开始 -->
    <div class="wrapper">
      <!-- 定位开始 -->
      <div class="wrapper__position">
        <i class="iconfont">&#xe64c;</i>
        <span>我在哪我在哪我在哪我在哪我在哪我在哪我在哪我在哪</span>
        <i class="iconfont">&#xe60d;</i>
      </div>
      <!-- 定位结束 -->
      <!-- 搜索开始 -->
      <div class="wrapper__search">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          shape="round"
        />
      </div>
      <!-- 搜索结束 -->
      <!-- 轮播图开始 -->
      <div class="wrapper__banner">
        <van-swipe :autoplay="3000" lazy-render :height="140">
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 轮播图结束-->
    </div>
    <!-- 主体内容结束 -->
  </div>
</template>

<script setup>
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]
</script>

<style lang="scss" scoped>
@import "../style/viriabes.scss";
@import "../style/mixin.scss";
// 主体内容样式
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  &__position {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.16rem;
    line-height: 0.22rem;
    padding: 0.16rem 0;
    .iconfont {
      font-size: 0.19rem;
      color: $content-fontcolor;
      &:first-child {
        margin-right: 0.08rem;
      }
    }
    span {
      display: inline-block;
      flex: 1;
      color: $content-fontcolor;
      @include ellipsis;
    }
  }
  &__search {
    padding: 0 0.12rem;
    font-size: 0.14rem;
    .van-search {
      padding: 0;
      background-color: transparent;
    }
  }
  &__banner {
    margin-top: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
