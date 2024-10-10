import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'
import * as dynamicRoutes from '@/composables/useDynamicRoutes'
import { router, StaticRouteName } from '@/router'

export const accessToken = useLocalStorage<string>('access_token', '')
export const isLogin = computed(() => !!accessToken.value)

export const login = async () => {
  accessToken.value = 'xxx'
  await dynamicRoutes.init()
  router.replace({ name: dynamicRoutes.firstRouteName.value })
}

export const logout = () => {
  accessToken.value = ''
  if (router.currentRoute.value.name !== StaticRouteName.Login) {
    router.push({ name: StaticRouteName.Login })
  }
}
