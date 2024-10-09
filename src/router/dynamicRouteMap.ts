export const dynamicRouteMap = {
  USER_LAYOUT: () => import('@/components/UserLayout.vue'),
  DASHBOARD: () => import('@/views/ExampleView.vue'),
  NOTES: () => import('@/views/ExampleView.vue'),
  NOTE_DETAIL: () => import('@/views/ExampleView.vue'),
  POSITIONS: () => import('@/views/ExampleView.vue'),
  ROLES: () => import('@/views/ExampleView.vue'),
  USERS: () => import('@/views/ExampleView.vue'),
  PERMISSIONS: () => import('@/views/ExampleView.vue'),
  LOGIN_LOGS: () => import('@/views/ExampleView.vue'),
  OPERATION_LOGS: () => import('@/views/ExampleView.vue'),
  ERROR_LOGS: () => import('@/views/ExampleView.vue'),
}
