<template>
    <div>
        <div class="content">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" @change="onChange" route>
            <van-tabbar-item icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
            <van-tabbar-item icon="search">暂定</van-tabbar-item>
            <van-tabbar-item icon="friends-o">暂定</van-tabbar-item>
            <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
const onChange = (index) => {
  active.value = index
}
</script>

<style lang="scss">

.content {
    height: calc(100vh - 0.5rem);
    .van-nav-bar__title {
        font-size: 0.14rem;
    }
}
</style>
