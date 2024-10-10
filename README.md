# vue-apply-dynamic-route

A function that handles resources tree and front-end routes（一个处理资源树和动态路由的函数）

[utils/applyDynamicRoutes.ts](./src/utils/applyDynamicRoutes.ts)

## tips

1. 为什么 NotFound 要放到 dynamicRouteMap 中？

因为 `/:pathMatch(.*)*` 会影响 beforeEach 中 init 后的路由跳转

2. 做“资源管理”页面时，需要排除 StaticRouteName 中定义的 key 和静态路由 path，比如：`/login`

3. 刷新浏览器时，Vue Router 会报一个没有找到当前路由的警告，这是动态 addRoute 造成的，但生产环境不会报，考虑是否处理。
