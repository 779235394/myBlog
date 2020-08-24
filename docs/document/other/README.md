---
title: 时间轴
date: 2020-08-19
categories:
 - 其他
tags:
 - CSS
image: /vuetimg3.jpeg
---

# 时间轴样式

## 效果
[点击查看时间轴效果](/timeLine/)

## 配置
先参考vuepress-theme-reco文档时间轴配置

### 添加导航按钮
``` js
 module.exports = {
    theme: 'reco', // 主题
    themeConfig: {
      nav: [
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' } //导航栏添加时间轴按钮
      ]
    }
  }
```

### 添加时间

``` js
---
title: 标题
date: 要添加的时间
categories:
 - 分类
tags:
 - 标签
---
```

## 样式
``` css
.timeline-content
  width calc(100% - 20px)
  left 20px
  max-width 600px
  margin 30px auto 0 auto
  padding-bottom 50px
  .year-wrapper
    li
      margin-top 10px
      border 0 !important
      padding 2.5px !important
      .title
        color #fff !important
        padding 10px 20px 10px 20px !important
        background-image: -webkit-gradient(linear,left 0,right 0,from(#e66465),to(#9198e5))
        border-radius 50px
        display block
        width 100%
        transition all 1s

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      
      .date
        position absolute
        left -60px
        top 10px
        
        &:before
          left 42px !important
          top 12px !important
          transition all 1s
        
      
      &:hover
        .title
          transform translateX(20px)  
        .date
          color #ea5455 !important
          &:before
            transform scale(2.5)
            background #ea5455 !important


```