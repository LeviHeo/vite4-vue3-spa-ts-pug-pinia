import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes = [
    {
      meta: {
        title:'Vue SPA Home'
      },
      path: '/',
      name: 'entry',
      component: Home
    },
    {
        meta: {
          title:'Vue SPA Home'
        },
        path: '/home',
        name: 'index',
        component: Home
    },
    {
        meta: {
          title:'Vue SPA About'
        },
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next();
})

export default router