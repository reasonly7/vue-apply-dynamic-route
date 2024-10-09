import { dynamicRouteMap } from '@/router/dynamicRouteMap'

export type RouteName = keyof typeof dynamicRouteMap

export type ResourceTreeItem =
  | {
      type: 'page'
      path: string
      name: RouteName
      meta: { title: string }
    }
  | {
      type: 'layout'
      path: string
      name: RouteName
      redirect: string
      children: ResourceTreeItem[]
      meta: { title: string }
    }

const mockData: ResourceTreeItem[] = [
  {
    type: 'layout',
    name: 'USER_LAYOUT',
    path: '/user-layout',
    redirect: '/dashboard',
    meta: { title: 'User Layout' },
    children: [
      {
        type: 'page',
        path: '/dashboard',
        name: 'DASHBOARD',
        meta: { title: 'Dashboard' },
      },
      {
        type: 'page',
        path: '/note',
        name: 'NOTES',
        meta: { title: 'Notes' },
      },
      {
        type: 'page',
        path: '/note/:id',
        name: 'NOTE_DETAIL',
        meta: { title: 'Note Detail' },
      },
      {
        type: 'page',
        path: '/sys/positions',
        name: 'POSITIONS',
        meta: { title: 'Positions' },
      },
      {
        type: 'page',
        path: '/sys/roles',
        name: 'ROLES',
        meta: { title: 'Roles' },
      },
      {
        type: 'page',
        path: '/sys/users',
        name: 'USERS',
        meta: { title: 'Users' },
      },
      {
        type: 'page',
        path: '/sys/permissions',
        name: 'PERMISSIONS',
        meta: { title: 'Permissions' },
      },
      {
        type: 'layout',
        name: 'LOGS_LAYOUT',
        path: '/logs-layout',
        redirect: '/sys/login-logs',
        meta: { title: 'User Layout' },
        children: [
          {
            type: 'page',
            path: '/sys/login-logs',
            name: 'LOGIN_LOGS',
            meta: { title: 'Login Logs' },
          },
          {
            type: 'page',
            path: '/sys/operation-logs',
            name: 'OPERATION_LOGS',
            meta: { title: 'Operation Logs' },
          },
          {
            type: 'page',
            path: '/sys/error-logs',
            name: 'ERROR_LOGS',
            meta: { title: 'Error Logs' },
          },
        ],
      },
    ],
  },
]

export const getResourceTree: () => Promise<ResourceTreeItem[]> = () => {
  return new Promise((resolve) => {
    resolve(mockData)
  })
}
