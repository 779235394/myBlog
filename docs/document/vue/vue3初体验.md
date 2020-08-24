---
title: vue3初体验
date: 2020-08-23
categories:
 - VUE
tags:
 - VUE
image: /vuetimg6.jpg
---
# vue3初体验
## vue3的三种体验姿势

### 1.vite
vite是尤大开发的工具，估计是想取代webpack，体验的时候能清楚感受到速度之快。三种体验姿势最喜欢这种。

``` js
npm install -g create-vite-app
create-vite-app 01-vue3-vite
cd 01-vue3-vite
npm install
npm run dev
```

### 2.vue cli
官方定制的vue-cli 需要升级为最新版本才能体验
``` js
npm install -g @vue/cli
vue create 01-vue3-cli
cd 01-vue3-cli
vue add vue-next
npm run serve

```

### 3.webpack
直接干就完事
``` js
git clone https://github.com/vuejs/vue-next-webpack-preview.git 01-vue3-webpack
cd 01-vue3-webpack
npm install 
npm run dev
```

## vue3的Composition APi
### setup 
setup是一个新的选项，可以理解为composition的入口，在函数内部是在beforeCreate之前调用，函数return的内容内容作为渲染的上下文。

### reactive 和 ref
* vue2的时候，组件实例在初始化的时候会将 data 整个对象变为可观察对象，通过递归的方式给每个 Key 使用 Object.defineProperty 加上 getter 和 settter ，
如果是数组就重写代理数组对象的七个方法。虽然给我们带来的便利，但是在大型项目上来说，性能开销就很大了。

* Vue3.0之后不再将主动监听所有的数据，而是将选择权给你，实例在初始化时不需要再去递归 data 对象了，从而降低了组件实例化的时间。

* reactive函数接收一个对象作为参数，等价Vue2.x的Vue.observable()
* ref接收一个原始值，返回一个包装对象
* const count = ref(0)  等价 const count = reactive({value:0}) 


### computed
这个属性在vue3里面还是跟vue2一样，感觉没什么变化。

### 全局important

vue2的data，methods，computed等都是挂载到this上，这样就会有一个问题，比如当前模块没有用到computed，那么打包的时候任然会打包computed功能。

所以vue3中，一般是需要用到什么API就去引入什么API，所以速度当然会快。

``` js

import { reactive, computed, onMounted } from "vue";

```

## vue3生命周期
``` js

beforeCreate -> 使用setup()

created -> 使用setup()

beforeMount -> onBeforeMount

mounted -> onMounted

beforeUpdate -> onBeforeUpdate

updated -> onUpdated

beforeDestroy -> onBeforeUnmount

destroyed -> onUnmounted

```
## 初体验CODE
```js
<template>
  <h1>{{state.count}} * 2</h1>
  <h1>{{double}}</h1>
  <button @click="add">累加</button>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 1,
    });
    function add() {
      state.count++;
    }
    const double = computed(() => {
      return state.count * 2;
    });

    onMounted(() => {
      console.log("mounted");
    });

    return { state, add, double, onMounted };
  },
};
</script>
<style scoped>

</style>

```

## 资料附录
[Vue Composition API](https://composition-api.vuejs.org/)

[Vue3模版编译在线体验](https://vue-next-template-explorer.netlify.app/)

[Vue2模版编译在线体验](https://template-explorer.vuejs.org/) 

[vue作者谈vue3 beta现状](https://www.bilibili.com/video/BV1eK4y1k7BP)

[vue作者尤大的知乎](https://www.zhihu.com/people/evanyou)

