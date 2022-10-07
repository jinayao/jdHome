<template>
    <div class="addIncome">
        <van-nav-bar title="增加明细" left-arrow @click-left="onClickLeft" />
        <div class="addIncome__form">
            <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="描述"
      label="描述"
      placeholder="请填写收支描述"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      确认增加
    </van-button>
  </div>
</van-form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
    const onClickLeft = () => history.back()
    const username = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    return {
      onClickLeft,
      username,
      onSubmit
    }
  }
}
</script>

<style>

</style>
