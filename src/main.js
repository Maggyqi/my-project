import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vegetables from './components/vegetables.vue'
Vue.use(vueRouter)
Vue.config.productionTip = false
const router = new vueRouter({
  routes: [
    {name: 'vegetables', path: '/list/:categ', component: vegetables}
  ]
})
new Vue({
  el: '#app',
  render: h => h(App)
})
