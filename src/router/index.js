import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sanitize',
    name: 'sanitze',
    component: () => import ('../views/sanitizeView.vue')
  },
  {
    path: '/multichoice',
    name: 'multiple choice',
    component: () => import ('../views/multipickView.vue')
  },
  {
    path: '/wordmatch',
    name: 'word match',
    component: () => import ('../views/wordmatchView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import ('../views/infoView.vue')
  },
  {
    path: '/learn/kanatables',
    name: 'kana tables',
    component: () => import ('../views/kanatableView.vue')
  },
  {
    path: '/learn/glossary',
    name: 'glossary',
    component: () => import ('../views/glossaryView.vue')
  },
  {
    path: '/learn/flashcards',
    name: 'flash cards',
    component: () => import ('../views/flashcardsView.vue')
  },
  {
    path: '/learn/kanainfo',
    name: 'kana info',
    component: () => import ('../views/kanaInfoView.vue')
  },
  {
    path: '/learn/kanaflashcards',
    name: 'kana flash cards',
    component: () => import ('../views/flashcardsKanaView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'activePage',
  routes
})

export default router