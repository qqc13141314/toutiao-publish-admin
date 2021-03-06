import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
