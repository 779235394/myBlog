---
title: 自动生成sidebar
date: 2020-08-19
categories:
 - 其他
tags:
 - vuepress
image: /vuetimg.jpeg
---

## 介绍
  在vuepress配置sidebar时，每篇文章都要配置对应的位置

  正常情况下咱们会这样配置
  ``` js
  // .vuepress/config.js
  module.exports = {
    themeConfig: {
      sidebar: [
        {
          title: 'vue',   // 必要的
          collapsable: false, // 是否展开分组 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            'document/vue/','document/vue/vue1.md','document/vue/vue2.md'
          ]
        },
        {
          title: 'js',
          children: [ /* ... */ ]
        }
      ]
    }
  }
  ```
  但是显而易见，当我们日后文章数量增加，又或者我们需要更改名称，这时候就又得找到位置更改名称。相当的麻烦。

## 开始配置

  首先，我们先整合下目录，根据不同文章分类进行分组，如下：

  ``` 
  .
  ├─document/
  │ ├─ vue/
  │ │  ├─ README.md
  │ │  ├─ vue1.md
  │ │  └─ vue2.md
  │ └─ js/
  │   ├─ README.md
  │   ├─ js1.md
  │   └─ js2.md
  ```

  接着我们在`.vuepress`创建两个文件
  一个是`sidebarConf.js`，用来生成对应的侧边栏列表
  另一个是`getDocPath.js`文件，用来获取所有的文章名
  ``` 
  .
  ├─ docs
  │  └─.vuepress
  │     ├─config.js
  │     ├─sidebarConf.js
  │     └─getDocPath.js
  ```

### 1.获取文件名
  `getDocPath.js` 获取一个目录下的所有文件名
  ``` js
    /**
     * 获取目录下的所有文件的相对路径
     * 解决路由名称枚举问题
     */
    const fs = require('fs')
    const path = require('path')
    // 排除检查的文件
    var excludes = ['.DS_Store']

    function getDocPath(title,collapsable,relateivePath) {
      const absolutePath = path.join(__dirname, '../' + relateivePath)
      const files = fs.readdirSync(absolutePath)
      const components = []
      let arr = files.sort(function(a, b) {
        // 截取'.'之前的数字进行排序 例如 1.vue 2.vue 3.vue
        return a.split('.')[0] - b.split('.')[0];
      });
      arr.forEach(function (item) {
        if (excludes.indexOf(item) < 0) {
          let stat = fs.lstatSync(absolutePath + '/' + item)
          if (item == 'README.md') {
            components.unshift(relateivePath + '/')
          } else if (!stat.isDirectory()) {
            components.push(relateivePath + '/' + item)
          } else {
            console.log(relateivePath + '/' + item)
            getDocPath(relateivePath + '/' + item)
          }
        }
      })
      let frame = {
        title:title,
        collapsable:collapsable,
        children:components
      }
      return frame
    }
    module.exports = getDocPath
  ```

### 2.配置侧边栏
  在`sidebarConf.js` 调用getDocPath()方法，组成侧边栏的数据列表，对应文章开头的原始配置格式。
  ``` js
  const getDocPath = require('./getDocPath')
  module.exports = [
      getDocPath('vue',true,'document/vue'),
      getDocPath('js',true,'document/js')
  ];
  ```

### 3.挂载进config
  ``` js
  themeConfig: {
      sidebar: require('./sidebarConf'),
  }
  ```

## 总结
  至此完整的功能已全部写完，
  如果此配置还满足不了你的需求，想配置成多个侧边栏，在每个不同的分类生成对应的自己想要的侧边栏，可以看另一篇侧边栏配置 -> [自动生成多个侧边栏](./自动生成多个侧边栏.md)