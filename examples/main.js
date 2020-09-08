import Vue from 'vue'
// 导入组件库
import Xixi from './../packages'
import App from './App.vue'

Vue.use(Xixi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
