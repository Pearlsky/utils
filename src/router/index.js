import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ErrorItem from '../components/404Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:
        'before:content-highlight before:absolute before:top-[-2.5px] before:left-[calc(50%-70px)] md:before:left-[50%-100%]',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CounterView.vue')
    },
    {
      path: '/alarm',
      name: 'alarm',
      component: () => import('../views/AlarmView.vue')
    },
    {
      path: '/stopwatch',
      name: 'stopwatch',
      component: () => import('../views/StopwatchView.vue')
    },

    {
      path: '/:catchAll(.*)', 
      component: ErrorItem,
      name: '404 Error'
    }
  ]
})

export default router
