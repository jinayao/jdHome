import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'
import 'vant/lib/index.css'
import vant from 'vant'

createApp(App).use(store).use(router).use(vant).mount('#app')
