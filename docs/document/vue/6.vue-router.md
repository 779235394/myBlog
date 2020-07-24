# Vue-router功能详解

## 基础功能
### 1. 使用vue-router
```
  // 1. 创建router实例
  import Router from 'vue-router'
  Vue.use(Router)
  const router = new Router({
    routes: [
      //......
    ]
  })

  // 2. 注入router实例到vue
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app)
```

### 2. 动态路由匹配
**简介：通过router参数query或params来匹配相应的路由**
```
  const router = new VueRouter({
    routes: [
      // 动态路径参数 以冒号开头
      { path: '/user/:id', component: User }
    ]
  })
```

### 3. 嵌套路由
**简介：通常项目是由多页面（视图）组成，这时需要按照某种结构嵌套视图和组件**
```
  1. router进行嵌套配置：
  routes: [
    {
      name: xxx,
      path: /xxx,
      component: xxx,
      children: [
        {
          path: yyy,
          name: yyy,
          component: yyy
        }
      ]
    }
  ]

  2. 当同级视图有多个时，需要对视图进行命名：
  <router-view name='view1'></router-view>
  <router-view name='view2'></router-view>

  对应对路由也需要指定相应对视图：
  routes: [
    {
      path: xxx,
      name: xxx
      components: {
        view2: xxx
      }
    }
  ]
```

### 4. 编程式导航
```
// 字符串
  router.push('home')

// 对象
  router.push({ path: 'home' })

// 命名的路由
  router.push({ name: 'user',params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
  router.push({ path: 'register', query: { plan: 'private' }})


ps: 如果提供了 path，params 会被忽略, path和params参数不能同时存在
```

### 5. 重定向和别名
```
  1. 重定向
  routes: [
    { path: '/a', redirect: '/b' }
  ]

  2. 别名
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
  ps: 相当于 a路由多了一个名为b的路由名
```

### 6. 路由组件传参
```
  1. 通过$route实例获取参数：
    $route.params.xxx
    $route.query.xxx

  2. 通过设置props获取，在路由开启props，然后在组件内通过props参数获取：
    *router.js:
      routes: [
        { path: '/user/:id',component: User, props: true },
      ]

    *xxx.vue: 
      export default {
        props: ['id']
      }

```


## 进阶功能
### 1. 导航守卫
```
  1. 全局导航守卫
    router.beforeEach((to, from, next) => {
      // ...
    })

  2. 路由独享守卫
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        }
      }
    ]

  3. 组件内守卫
  export default {
    beforeRouteEnter (to, from, next) {
    },
  }

ps: 参数和其他守卫api请查看线上文档
```

### 2. 路由元信息
```
  // meta字段我们让我们保存每个组件的信息
  routes: [
    path: xxx,
    name: xxx,
    meta: {
      xxx
    }
  ]

  // 通过$route.matched获取meta字段里的信息
```

### 3. 数据获取
```
  1. 导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。

  2. 导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。

  ps：详情请看线上文档
```

### 4. 滚动
```
  可以通过scrollBehavior函数来设置滚动位置
  const router = new VueRouter({
    routes: [...],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 } // 滚动到顶部
    }
  })
```

### 5. 路由懒加载
```
  // 通过Promise函数实现懒加载
  const test = Promise.resolve({/* 组件定义对象 */})

  // 用动态 import语法来定义代码分块点
  import('./test.vue') // 也是Promise函数

  // 结合以上两者：
  const test = () => import('./test.vue')
```