import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView.vue'
import ModifyFormView from '@/views/user/ModifyFormView.vue'
import JoinFormView from '@/views/user/JoinFormView.vue'
import JoinOkView from '@/views/user/JoinOkView.vue'
import AttachFormView from '@/views/attach/AttachFormView.vue'
import AttachResultView from '@/views/attach/AttachResultView.vue'
import AddListView from '@/views/guestbook/AddListView.vue'
import DeleteFormView from '@/views/guestbook/DeleteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: '/user/loginform',
    component: LoginFormView
  },
  {
    path: '/user/modifyform',
    name: '/user/modifyform',
    component: ModifyFormView
  },
  {
    path: '/user/joinform',
    name: '/user/joinform',
    component: JoinFormView
  },
  {
    path: '/user/joinok',
    name: '/user/joinok',
    component: JoinOkView
  },
  {
    path: '/attach/form',
    name: '/attach/form',
    component: AttachFormView
  },
  {
    path: '/attach/result',
    name: '/attach/result',
    component: AttachResultView
  },
  {
    path: '/guestbook/addlist',
    name: '/guestbook/addlist',
    component: AddListView
  },
  {
    path: '/guestbook/deleteform/:no',
    name: '/guestbook/deleteform',
    component: DeleteFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
