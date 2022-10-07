<template>
  <div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import './style/viriabes.scss';

.content {
  height: 100vh;
  overflow: auto;
}
</style>
