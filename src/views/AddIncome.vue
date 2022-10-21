<template>
  <div class="addIncome">
    <van-nav-bar :title="id?'编辑明细':'增加明细'" left-arrow @click-left="onClickLeft" />
    <div class="addIncome__form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="formData.incomeOrPay" name="incomeOrPay" is-link readonly label="收支类型"
            placeholder="选择收支类型" @click="showIncomeOrPayPicker = true" />
          <van-field v-model="formData.type" name="type" is-link readonly label="收支分类" placeholder="选择收支类型"
            @click="showType = true" />
          <van-field v-model="formData.time" name="time" is-link readonly label="日期" placeholder="请选择日期"
            @click="showTime = true" />
          <van-field v-model="formData.number" name="number" type="number"
            :rules="[{ required: true, message: '金额为必填' }]" label="金额(元)" placeholder="请填写收支金额" />
          <van-field v-model="formData.des" name="des" label="描述" placeholder="请填写收支描述" />
          <van-popup v-model:show="showIncomeOrPayPicker" round position="bottom">
            <van-picker title="收支类型" :columns="columns1" @confirm="onConfirm1" @cancel="onCancel1" />
          </van-popup>
          <van-popup v-model:show="showType" round position="bottom">
            <van-picker title="收支分类" :columns="columns2" @confirm="onConfirm2" @cancel="onCancel2" />
          </van-popup>
          <van-popup v-model:show="showTime" round position="bottom">
            <van-datetime-picker v-model="selectTime" type="date" title="选择年月日" @confirm="onConfirm3"
              @cancel="onCancel3" />
          </van-popup>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            {{id?"确认修改":"确认添加"}}
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { formatDate } from '@/util/index'
import { useRoute } from 'vue-router';

// 初始化相关
const useInitEffect = () => {
  const route = useRoute();
  const id = route.query.id;
  // 返回
  const onClickLeft = () => history.back()
  // 提交
  const onSubmit = (values) => {
    console.log('submit', values);
  };
  // 表单数据
  const formData = reactive({
    number: '',
    type: '工资',
    incomeOrPay: '收入',
    time: formatDate(new Date()),
    des: ''
  })
  return { id, onClickLeft, onSubmit, formData }
}

// 分类选择相关
const useTypeSelectEffect = (formData) => {
  const showType = ref(false);
  const columns2 = ['工资', '闲鱼'];
  const onConfirm2 = (value, index) => {
    formData.type = value;
    showType.value = false
  };
  const onCancel2 = () => {
    showType.value = false
  };
  return { showType, columns2, onConfirm2, onCancel2 }
}

// 收支选择相关
const useIncomeOrPayEffect = (formData) => {
  const columns1 = ['支出', '收入'];
  const showIncomeOrPayPicker = ref(false)
  const onConfirm1 = (value, index) => {
    formData.incomeOrPay = value;
    showIncomeOrPayPicker.value = false
  };
  const onCancel1 = () => {
    showIncomeOrPayPicker.value = false
  };
  return { showIncomeOrPayPicker, columns1, onConfirm1, onCancel1 }
}

// 时间选择相关
const useTimeEffect = (formData) => {
  const showTime = ref(false)
  const onConfirm3 = (value, index) => {
    formData.time = formatDate(value);
    showTime.value = false
  };
  const onCancel3 = () => {
    showTime.value = false
  }
  return { showTime, onConfirm3, onCancel3 }
}
export default {
  setup() {
    // 初始化
    const { id, onClickLeft, onSubmit, formData } = useInitEffect()
    // 分类选择
    const { showType, columns2, onConfirm2, onCancel2 } = useTypeSelectEffect(formData)
    // 收支选择
    const { showIncomeOrPayPicker, columns1, onConfirm1, onCancel1 } = useIncomeOrPayEffect(formData)
    // 时间选择
    const { showTime, onConfirm3, onCancel3 } = useTimeEffect(formData)
    return {
      onClickLeft,
      onSubmit,
      formData,
      columns1,
      onCancel1,
      onConfirm1,
      showIncomeOrPayPicker,
      showType,
      columns2,
      onCancel2,
      onConfirm2,
      onConfirm3,
      onCancel3,
      showTime,
      id
    }
  }
}
</script>

<style>

</style>
