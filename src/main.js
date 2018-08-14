import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUi)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
