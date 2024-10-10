export const enum DynamicRouteName {
  UserLayout = 'UserLayout',
  Dashboard = 'Dashboard',
  Notes = 'Notes',
  NoteDetail = 'NoteDetail',
  Positions = 'Positions',
  Roles = 'Roles',
  Users = 'Users',
  Permissions = 'Permissions',
  LogsLayout = 'LogsLayout',
  LoginLogs = 'LoginLogs',
  OperationLogs = 'OperationLogs',
  ErrorLogs = 'ErrorLogs',
  NotFound = 'NotFound',
}

export const dynamicRouteMap: {
  [key in DynamicRouteName]: () => Promise<unknown>
} = {
  UserLayout: () => import('@/components/UserLayout.vue'),
  Dashboard: () => import('@/views/ExampleView.vue'),
  Notes: () => import('@/views/ExampleView.vue'),
  NoteDetail: () => import('@/views/ExampleView.vue'),
  Positions: () => import('@/views/ExampleView.vue'),
  Roles: () => import('@/views/ExampleView.vue'),
  Users: () => import('@/views/ExampleView.vue'),
  Permissions: () => import('@/views/ExampleView.vue'),
  LogsLayout: () => import('@/components/LogsLayout.vue'),
  LoginLogs: () => import('@/views/ExampleView.vue'),
  OperationLogs: () => import('@/views/ExampleView.vue'),
  ErrorLogs: () => import('@/views/ExampleView.vue'),
  NotFound: () => import('@/views/NotFoundView.vue'),
}
