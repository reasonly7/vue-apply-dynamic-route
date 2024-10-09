<script setup lang="ts">
import { router } from '@/router'
import { dynamicRouteMap } from '@/router/dynamicRouteMap'

const pageList = Object.keys(dynamicRouteMap)
const navigate = (page: string) => {
  router.push({ name: page })
}
</script>

<template>
  <div class="user-layout">
    <aside>
      <div class="route-item" v-for="page in pageList" @click="navigate(page)">
        {{ page }}
      </div>
    </aside>
    <main>
      <header>
        <button>Log out</button>
      </header>
      <div class="view-wrapper">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
.user-layout {
  width: 100%;
  height: 100%;
  display: flex;

  > aside {
    background-color: #f6f6f6;
    overflow-y: auto;
    .route-item {
      height: 36px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
  > main {
    flex: 1;
    width: 0;
    display: flex;
    flex-direction: column;
    > header {
      height: 60px;
      background-color: #f3f3f3;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    > .view-wrapper {
      flex: 1;
      height: 0;
      width: 100%;
    }
  }
}
</style>
