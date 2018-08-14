import Vue from 'vue'
import Login from '../view/Login.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default  new VueRouter({
    routes: [
        {name: 'Login', path: '/login', component: Login}
    ]
})