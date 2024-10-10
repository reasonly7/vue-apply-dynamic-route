<script setup lang="ts">
import { login, logout } from '@/composables/useLogin'
import { onMounted } from 'vue'

onMounted(logout)
</script>

<template>
  <div class="page-wrapper">
    <button @click="login">Login</button>
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
