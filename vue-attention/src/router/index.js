import { createRouter, createWebHistory } from 'vue-router'
import ManagerLoginView from '../views/ManagerLoginView.vue'
import ManagerView from '../views/ManagerView.vue'

const routes = [
  {
    path: '/manager/loginform',
    name: '/manager/loginform',
    component: ManagerLoginView
  },
  {
    path: '/manager',
    name: '/manager',
    component: ManagerView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
