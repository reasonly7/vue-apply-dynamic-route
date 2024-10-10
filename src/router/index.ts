import BaseLayout from '@/components/BaseLayout.vue'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import * as dynamicRoutes from '@/composables/useDynamicRoutes'
import { isLogin } from '@/composables/useLogin'

export const enum StaticRouteName {
  BaseLayout = 'BaseLayout',
  Login = 'Login',
  NotFound = 'NotFound',
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: StaticRouteName.BaseLayout,
      component: BaseLayout,
      redirect: { name: StaticRouteName.Login },
      children: [
        { path: '/login', name: StaticRouteName.Login, component: LoginView },
      ],
    },
  ],
})

router.beforeEach(async (to) => {
  if (isLogin.value) {
    if (!dynamicRoutes.isReady.value) {
      await dynamicRoutes.init()
      return { ...to, replace: true }
    }
  } else {
    if (to.name !== StaticRouteName.Login) {
      return { name: StaticRouteName.Login }
    }
  }
})
