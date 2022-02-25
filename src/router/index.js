import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NameData from '../views/NameData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/',
      name: 'name-data',
      component: NameData
    },
    {
      path: '/birth-data',
      name: 'birth-data',
      component: () => import('../views/BirthData.vue')
    },
    {
      path: '/contact-data',
      name: 'contact-data',
      component: () => import('../views/ContactData.vue')
    },
  ]
})

export default router
