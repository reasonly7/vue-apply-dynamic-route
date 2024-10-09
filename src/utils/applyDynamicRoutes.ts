import { ResourceTreeItem, RouteName } from '@/api'
import { router } from '@/router'
import { dynamicRouteMap } from '@/router/dynamicRouteMap'
import { RouteRecordRaw } from 'vue-router'

export const applyDynamicRoutes = (
  parentName: RouteName | 'BASE_LAYOUT',
  resourceTree: ResourceTreeItem[],
) => {
  resourceTree.forEach((resource) => {
    if (resource.type === 'page') {
      const route: RouteRecordRaw = {
        path: resource.path,
        name: resource.name,
        component: dynamicRouteMap[resource.name],
        meta: resource.meta,
      }

      router.addRoute(parentName, route)
    }

    if (resource.type === 'layout') {
      const route: RouteRecordRaw = {
        path: '',
        name: resource.name,
        component: dynamicRouteMap[resource.name],
        meta: resource.meta,
        redirect: resource.redirect,
        children: [],
      }
      router.addRoute(parentName, route)
      applyDynamicRoutes(resource.name, resource.children)
    }
  })
}
