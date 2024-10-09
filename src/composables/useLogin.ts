import { router } from '@/router'
import { useLocalStorage } from '@vueuse/core'

export const accessToken = useLocalStorage<string>('access_token', '')

export const login = async () => {
  accessToken.value = 'Bearer xxx'
}

export const logout = () => {
  accessToken.value = ''
  // router.clearRoutes()
  console.log('Log out', router.getRoutes())
}
