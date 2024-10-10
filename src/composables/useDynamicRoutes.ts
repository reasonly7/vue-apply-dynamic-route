import { resourceApi, ResourceTreeItem, ResourceType } from '@/api'
import { router, StaticRouteName } from '@/router'
import { dynamicRouteMap, DynamicRouteName } from '@/router/dynamicRouteMap'
import { ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export let isReady = ref(false)
export const firstRouteName = ref<DynamicRouteName>(DynamicRouteName.NotFound)

const _getTree = async () => {
  const tree = await resourceApi.getTree()
  isReady.value = true
  if (tree.length > 0) {
    firstRouteName.value = tree[0].name
  }
  return tree || []
}

const _apply = (
  parentName: DynamicRouteName | StaticRouteName.BaseLayout,
  resourceTree: ResourceTreeItem[],
) => {
  resourceTree.forEach((resource) => {
    if (resource.type === ResourceType.page) {
      const route: RouteRecordRaw = {
        path: resource.path,
        name: resource.name,
        component: dynamicRouteMap[resource.name],
        meta: resource.meta,
      }

      router.addRoute(parentName, route)
    }

    if (resource.type === ResourceType.layout) {
      const route: RouteRecordRaw = {
        path: resource.path,
        name: resource.name,
        component: dynamicRouteMap[resource.name],
        meta: resource.meta,
        redirect: resource.redirect,
        children: [],
      }
      router.addRoute(parentName, route)
      _apply(resource.name, resource.children)
    }
  })
}

export const init = async () => {
  const tree = await _getTree()
  _apply(StaticRouteName.BaseLayout, tree)
}
