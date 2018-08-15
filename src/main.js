import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.css'
Vue.use(elementUi)
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('mytoken')
  if(token) {
    next()
  }else if(to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
  
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
