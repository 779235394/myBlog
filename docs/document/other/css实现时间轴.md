---
title: css实现时间轴
date: 2020-08-28
categories:
 - 其他
tags:
 - css
image: /vuetimg4.jpeg
---

## 纯css实现时间轴
记录一次纯css实现的时间轴。

``` vue
<template>
  <div class="timeline">
    <div class="timelineItem">
      <div class="title">2020-10-2</div>
      <div class="content">sdadasdasdasds</div>
    </div>
    <div class="timelineItem">
      <div class="title">2020-10-2</div>
      <div class="content">sdadasdasdasds</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.timeline {
  .timelineItem {
    position: relative;
    font-size: 12px;
    padding-bottom: 20px;
    padding-left: 20px;
    line-height: 12px;
    box-shadow: -1px 0px 0px 0 #999;
    .title {
      margin-bottom: 10px;
    }
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: green;
      position: absolute;
      left: -5px;
      top: -2px;
      z-index: 1;
    }
    &:last-child {
      box-shadow: 0 0 0 0 #999;
    }
  }
}
</style>
```