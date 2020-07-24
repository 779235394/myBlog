# vue-cli3项目性能优化步骤

::: tip
  vue项目优化性能大致分为3种，代码包优化、源码优化、用户体验优化
:::

## 1. 代码包优化
1. 路由懒加载，打包时按组件打包模块。

2. js,css代码公用代码提取, 按需引入(cdn加载：externals)

3. js,css代码的最小化压缩和分割（splitchunks，UglifyJsPlugin，懒加载）

4. 图片文件的压缩（image-webpack-loader）

5. gzip的压缩（compression-webpack-plugin）

6. 屏蔽sourceMap，阻止.map文件的生成（.map文件：线上项目报错，根据.map文件来查找错误点）


## 2. 源码优化
1. 减少第三方插件的使用，尽可能使用原生代码，比如不使用vuex，用new Vue实例来代替，自己封装format来代替moment等

2. 减少请求次数（一次性获取数据，搜索功能可以交给前端等）

3. 减少v-show的使用，因为v-show的bool值true还是false，页面渲染时都会加载到。

4. v-for添加key，方便vue diff的时候找到相应的vnode实例。

5. 高度模块化组件（细分组件），减少组件过度庞大冗余，导致加载缓慢。

6. 减少watch函数的使用，当监听的数据过度庞大时，造成vue视图更新缓慢，页面渲染缓慢。

7. 静态资源按需加载，减少资源的请求次数。

8. [SSR（服务器渲染）](https://ssr.vuejs.org/zh/)：服务端返回模板，前端直接渲染页面，减少请求次数，节省性能消耗。（当项目过度庞大，首页加载时会出现黑屏或者shan闪屏的时候，可以考虑这个）。


## 3. 用户体验优化
1. better-click防止iphone点击延迟：在开发移动端vuejs项目时，手指触摸时会出现300ms的延迟效果，可以采用better-click对ipone系列的兼容体验优化。

2. 加载loading：当数据获取延迟过长时，添加一个加载动画loading。

3. 骨架屏加载：当首页数据过度庞大时，可以预加载dom布局。

4. 离线缓存优化(registerServiceWorker)：解决网络离线而访问不了页面问题。

