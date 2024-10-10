import { DynamicRouteName } from '@/router/dynamicRouteMap'

export const enum ResourceType {
  page = 'page',
  layout = 'layout',
}

export type ResourceTreeItem =
  | {
      type: ResourceType.page
      path: string
      name: DynamicRouteName
      meta: { title: string }
    }
  | {
      type: ResourceType.layout
      path: string
      name: DynamicRouteName
      redirect: string
      children: ResourceTreeItem[]
      meta: { title: string }
    }

const mockData: ResourceTreeItem[] = [
  {
    type: ResourceType.layout,
    name: DynamicRouteName.UserLayout,
    path: '',
    redirect: '/dashboard',
    meta: { title: 'User Layout' },
    children: [
      {
        type: ResourceType.page,
        path: '/dashboard',
        name: DynamicRouteName.Dashboard,
        meta: { title: 'Dashboard' },
      },
      {
        type: ResourceType.page,
        path: '/notes',
        name: DynamicRouteName.Notes,
        meta: { title: 'Notes' },
      },
      {
        type: ResourceType.page,
        path: '/note/:id',
        name: DynamicRouteName.NoteDetail,
        meta: { title: 'Note Detail' },
      },
      {
        type: ResourceType.page,
        path: '/sys/positions',
        name: DynamicRouteName.Positions,
        meta: { title: 'Positions' },
      },
      {
        type: ResourceType.page,
        path: '/sys/roles',
        name: DynamicRouteName.Roles,
        meta: { title: 'Roles' },
      },
      {
        type: ResourceType.page,
        path: '/sys/users',
        name: DynamicRouteName.Users,
        meta: { title: 'Users' },
      },
      {
        type: ResourceType.page,
        path: '/sys/permissions',
        name: DynamicRouteName.Permissions,
        meta: { title: 'Permissions' },
      },
      {
        type: ResourceType.layout,
        name: DynamicRouteName.LogsLayout,
        path: '',
        redirect: '/sys/login-logs',
        meta: { title: 'User Layout' },
        children: [
          {
            type: ResourceType.page,
            path: '/sys/login-logs',
            name: DynamicRouteName.LoginLogs,
            meta: { title: 'Login Logs' },
          },
          {
            type: ResourceType.page,
            path: '/sys/operation-logs',
            name: DynamicRouteName.OperationLogs,
            meta: { title: 'Operation Logs' },
          },
          {
            type: ResourceType.page,
            path: '/sys/error-logs',
            name: DynamicRouteName.ErrorLogs,
            meta: { title: 'Error Logs' },
          },
        ],
      },
    ],
  },
]

export const resourceApi = {
  getTree() {
    return new Promise<ResourceTreeItem[]>((resolve) => {
      resolve(mockData)
    })
  },
}
