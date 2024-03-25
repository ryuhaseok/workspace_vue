import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import ModifyFormView from '../views/ModifyFormView.vue'
import WriteFormView from '../views/WriteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: ListView
  },
  {
    path: '/ModifyFormView',
    name: '/ModifyFormView',
    component: ModifyFormView
  },
  {
    path: '/WriteFormView',
    name: '/WriteFormView',
    component: WriteFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
