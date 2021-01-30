import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.less'

Vue.config.productionTip = false
// 创建VUE根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
