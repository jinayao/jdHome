<template>
    <div class="income">
        <van-nav-bar title="收支" left-arrow @click-left="onClickLeft" />
        <div class="income__message">
            <p class="income__message__income">当月收入XXX元，比起上月增加x%</p>
            <p class="income__message__pay">当月支出XXX元，比起上月增加x%</p>
        </div>
        <van-divider content-position="left">明细</van-divider>
        <div class="income__control">
            <div class="income__control__select">
                <van-field v-model="selectValue" is-link readonly label="展示类型" placeholder="选择类型"
                    @click="showPicker = true" />
                <van-popup v-model:show="showPicker" position="bottom">
                    <van-picker title="收支类型" :columns="columns" @confirm="onConfirm" @cancel="showPicker=false" />
                </van-popup>
            </div>
            <div class="income__control__add"></div>
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-swipe-cell v-for="item in list" :key="item">
                    <div class="income__item">
                        <div class="income__item__type">
                            <van-image width="0.4rem" height="0.4rem" fit="contain"
                                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                        </div>
                        <div class="income__item__content">
                            <div class="income__item__content__time">2022-10-07 <span>9000</span></div>
                            <div class="income__item__content__des">工资收入</div>
                        </div>
                    </div>
                    <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                    </template>
                </van-swipe-cell>
            </van-list>
        </van-pull-refresh>
        <div class="income__add">
            <van-button icon="plus" type="primary" round @click="addIncome"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
// 选择相关操作
const useSelectEffect = () => {
  const selectValue = ref('全部')
  const columns = ['全部', '收入', '支出']
  const showPicker = ref(false)
  const onConfirm = (value, index) => {
    selectValue.value = value
    showPicker.value = false
  }
  const onCancel = () => Toast('取消')
  return { selectValue, columns, showPicker, onConfirm, onCancel }
}
// 列表相关操作
const useListEffect = () => {
  const list = ref([])
  const loading = ref(false)
  const finished = ref(false)
  const refreshing = ref(false)
  const onLoad = () => {
    setTimeout(() => {
      if (refreshing.value) {
        list.value = []
        refreshing.value = false
      }

      for (let i = 0; i < 10; i++) {
        list.value.push(list.value.length + 1)
      }
      loading.value = false

      if (list.value.length >= 40) {
        finished.value = true
      }
    }, 1000)
  }

  const onRefresh = () => {
    // 清空列表数据
    finished.value = false

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    loading.value = true
    onLoad()
  }
  return { list, loading, finished, refreshing, onLoad, onRefresh }
}
export default {
  setup () {
    const router = useRouter()
    const onClickLeft = () => history.back()
    const { list, loading, finished, refreshing, onLoad, onRefresh } = useListEffect()
    const { selectValue, columns, showPicker, onConfirm, onCancel } = useSelectEffect()
    const addIncome = ()=> router.push({name:'addIncome'})
    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
      onClickLeft,
      columns,
      onCancel,
      onConfirm,
      showPicker,
      selectValue,
      addIncome
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

.goods-card {
    margin: 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

.delete-button {
    height: 100%;
}

.income {
    &__message {
        display: flex;
        position: relative;
        width: 100%;
        height: 1rem;
        background-image: url('@/assets/money.jpeg');
        background-repeat: no-repeat;
        background-size: 90% 100%;
        background-position: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 90%;
            height: 100%;
            margin: auto;
            background-color: rgba(0, 0, 0, 0.7);
        }

        &__income {
            color: rgb(255, 0, 0);
            z-index: 999;
            text-shadow: 10px 2px 6px rgba(255, 0, 0, 0.8);
        }

        &__pay {
            color: rgb(0, 255, 0);
            z-index: 999;
            text-shadow: 10px 2px 6px rgba(0, 255, 0, 0.8);
        }
    }

    .van-divider {
        margin-bottom: 0;
        font-size: 12px;
    }

    &__item {
        display: flex;
        padding: 0.1rem;
        align-items: center;
        border-bottom: 0.01rem solid #ddd;

        &__type {
            display: flex;
            width: 0.6rem;
            height: 0.6rem;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;
        }

        &__content {
            flex: 1;

            &__time {
                padding: 0.05rem;

                span {
                    color: rgb(255, 0, 0);
                    margin-left: 0.1rem;
                }
            }

            &__des {
                width: 45%;
                padding: 0.05rem;
                color: #999;
                @include ellipsis;
            }
        }
    }

    &__add {
        position: fixed;
        bottom: 1rem;
        right: 0.2rem;
    }
}
</style>
