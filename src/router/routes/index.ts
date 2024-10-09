import LoginView from '@/views/LoginView.vue'
import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginView,
  },
]
