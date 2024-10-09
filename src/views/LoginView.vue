<script setup lang="ts">
import { getResourceTree } from '@/api'
import { login, logout } from '@/composables/useLogin'
import { router } from '@/router'
import { applyDynamicRoutes } from '@/utils/applyDynamicRoutes'
import { onMounted } from 'vue'

onMounted(logout)

const clickHandler = async () => {
  await login()
  const resourceTree = await getResourceTree()
  applyDynamicRoutes('BASE_LAYOUT', resourceTree)
  if (resourceTree?.length > 0) {
    router.push({ name: resourceTree[0].name })
    console.log(router.getRoutes())
  } else {
    router.push({ name: 'NotFound' })
  }
}
</script>

<template>
  <div class="page-wrapper">
    <button @click="clickHandler">Login</button>
    <button @click="router.push('/login')">test</button>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
