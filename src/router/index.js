import Vue from 'vue'
import Login from '../view/Login.vue'
import VueRouter from 'vue-router'
import home from '@/view/home.vue'
Vue.use(VueRouter)
export default  new VueRouter({
    routes: [
        {name: 'Login', path: '/login', component: Login},
        {name: 'home', path: '/', component: home}
    ]
})