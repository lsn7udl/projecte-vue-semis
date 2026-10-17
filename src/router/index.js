import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LlibresView from '../views/LlibresView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/llibres',
      name: 'llibres',
      component: LlibresView
    },
    {
      path: '/sobre-nosaltres',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router