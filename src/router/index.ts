// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/views/Signup.vue'),
      },
      {
        path: 'plays',
        name: 'Plays',
        component: () => import('@/views/Plays.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/EYE-web'),
  routes,
})

export default router
