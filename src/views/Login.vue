<template>
    <div class="login">
        <h1>XXX平台</h1>
        <div class="login__form">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const onSubmit = (values) => {
      sessionStorage.setItem('token', 'dqwdqw')
      console.log(router)
      router.push({ name: 'home' })
    }

    return {
      username,
      password,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url('../assets/bg.jpeg');
    h1{
        color: #fff;
    }
    &__form{
        width: 90%;
        padding: 0.2rem 0.06rem;
        border: 1px solid #aaa;
        box-shadow: 0.06rem 0.06rem 0.1rem #000;
    }
}
</style>
