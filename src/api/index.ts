type TreeItem =
  | {
      type: 'page'
      title: string
      path: string
      code: string
      invisible?: boolean
      children?: {
        type: 'page'
        title: string
        path: string
        code: string
        invisible: true
      }[]
    }
  | { type: 'link'; title: string; url: string }
  | { type: 'group'; title: string; children: TreeItem[] }

const mockData: TreeItem[] = [
  { type: 'page', title: 'Dashboard', path: '/dashboard', code: 'DASHBOARD' },
  { type: 'page', title: 'Notes', path: '/note', code: 'NOTES', children: [] }, // here
  { type: 'link', title: 'Google', url: 'https://www.google.com/' },
  {
    type: 'group',
    title: 'System',
    children: [
      {
        type: 'page',
        title: 'Positions',
        path: '/sys/positions',
        code: 'POSITIONS',
      },
      { type: 'page', title: 'Roles', path: '/sys/roles', code: 'ROLES' },
      { type: 'page', title: 'Users', path: '/sys/users', code: 'USERS' },
      {
        type: 'page',
        title: 'Permissions',
        path: '/sys/permissions',
        code: 'PERMISSIONS',
      },
      {
        type: 'group',
        title: 'Logs',
        children: [
          {
            type: 'page',
            title: 'Login Logs',
            path: '/sys/login-logs',
            code: 'LOGIN_LOGS',
          },
          {
            type: 'page',
            title: 'Operation Logs',
            path: '/sys/operation-logs',
            code: 'OPERATION_LOGS',
          },
          {
            type: 'page',
            title: 'Error Logs',
            path: '/sys/error-logs',
            code: 'ERROR_LOGS',
          },
        ],
      },
    ],
  },
]

export const getDynamicRoute = () => {
  return new Promise((resolve) => {
    resolve(mockData)
  })
}
