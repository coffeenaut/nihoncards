import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
const path = "/nihoncards"
const routes = [
  {
    path: path+'/',
    name: 'home',
    component: HomeView,
  },
  {
    path: path+'/sanitize',
    name: 'sanitze',
    component: () => import ('../views/sanitizeView.vue')
  },
  {
    path: path+'/multichoice',
    name: 'multiple choice',
    component: () => import ('../views/multipickView.vue')
  },
  {
    path: path+'/wordmatch',
    name: 'word match',
    component: () => import ('../views/wordmatchView.vue')
  },
  {
    path: path+'/info',
    name: 'info',
    component: () => import ('../views/infoView.vue')
  },
  {
    path: path+'/learn/kanatables',
    name: 'kana tables',
    component: () => import ('../views/kanatableView.vue')
  },
  {
    path: path+'/learn/glossary',
    name: 'glossary',
    component: () => import ('../views/glossaryView.vue')
  },
  {
    path: path+'/learn/flashcards',
    name: 'flash cards',
    component: () => import ('../views/flashcardsView.vue')
  },
  {
    path: path+'/learn/kanainfo',
    name: 'kana info',
    component: () => import ('../views/kanaInfoView.vue')
  },
  {
    path: path+'/learn/kanaflashcards',
    name: 'kana flash cards',
    component: () => import ('../views/flashcardsKanaView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'activePage',
  routes
})

export default router