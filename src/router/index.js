import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import contenu from '../components/contenu.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: contenu
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound,

    }
  ]
})

export default router
