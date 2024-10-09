import BaseLayout from '@/components/BaseLayout.vue'
import { accessToken } from '@/composables/useLogin'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'BASE_LAYOUT',
      component: BaseLayout,
      redirect: '/login',
      children: [
        { path: '/login', name: 'LOGIN', component: LoginView },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
      ],
    },
  ],
})

router.beforeEach((to) => {
  if (to.name !== 'LOGIN' && !accessToken.value) {
    return { name: 'LOGIN' }
  }
  return
})
