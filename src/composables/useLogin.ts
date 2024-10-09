// import { getPermissionTree } from '@/api'
import { router } from '@/router'
import { useLocalStorage } from '@vueuse/core'

export const isLogin = useLocalStorage<boolean>('isLogin', false)

const _setIsLogin = (status: boolean) => {
  isLogin.value = status
}

export const login = () => {
  _setIsLogin(true)
  // const data = await getPermissionTree()

  router.replace('/home')
}

export const logout = () => {
  _setIsLogin(false)
  router.replace('/login')
}
