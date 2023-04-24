import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/linux',
      name: 'linux',
      component: () => import('../views/HomeSub/linux.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('../views/HomeSub/tools.vue')
    },
    {
      path: '/themes',
      name: 'themes',
      component: () => import('../views/HomeSub/themes.vue')
    }
  ]  
})

export default router
