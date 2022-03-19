import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/newPost',
      name: 'newPost',
      component: () => import('../views/NewPost.vue')
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/sweden',
      name: 'sweden',
      component: () => import('../views/SwedenView.vue')
    },
    {
      path: '/mallorca',
      name: 'mallorca',
      component: () => import('../views/MallorcaView.vue')
    },
    {
      path: '/greece',
      name: 'greece',
      component: () => import('../views/GreeceView.vue')
    },
    {
      path: '/paris',
      name: 'paris',
      component: () => import('../views/ParisView.vue')
    },
    {
      path: '/molotow',
      name: 'molotow',
      component: () => import('../views/MolotowView.vue')
    }

  ]
})

export default router
