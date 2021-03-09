import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/seoelp',
    name: 'SeoElp',
    component: () => import(/* webpackChunkName: "about" */ '../views/SeoElp.vue')
  },
  {
    path: '/dreamreality',
    name: 'DreamReality',
    component: () => import(/* webpackChunkName: "about" */ '../views/DreamReality.vue')
  },
  {
    path: '/georgesmelies',
    name: 'GeorgesMelies',
    component: () => import(/* webpackChunkName: "about" */ '../views/GeorgesMelies.vue')
  },
  {
    path: '/campuscar',
    name: 'CampusCar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CampusCar.vue')
  },
  {
    path: '/gallerie',
    name: 'gallerie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallerie.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
