import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import VIPPage from '../views/VIPPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/vip',
      name: 'vip',
      component: VIPPage
    }
  ]
})

export default router
