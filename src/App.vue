<template>
  <div class="wrapper">11</div>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <i class="iconfont">&#xe6cb;</i>
      首页</span
    >
    <span class="docker__item"> <i class="iconfont">&#xe682;</i>购物车</span>
    <span class="docker__item"> <i class="iconfont">&#xe897;</i>订单</span>
    <span class="docker__item"> <i class="iconfont">&#xe8a0;</i>我的</span>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: .5rem;
  right: 0;
  background-color: yellow;
}
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  box-sizing: border-box;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    color: #000;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
