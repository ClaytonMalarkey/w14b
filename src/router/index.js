import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import GamePage from '../views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/game',
    name: 'game',
    component: GamePage,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

export default router
