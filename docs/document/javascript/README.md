---
title: JavaScript小技巧
categories:
 - JavaScript
tags:
 - JavaScript
---

# JavaScript小技巧
## 过滤 

Set类型是在 ES6中新增的，它类似于数组，但是成员的值都是唯一的，没有重复的值。结合扩展运算符（...）我们可以创建一个新的数组，达到过滤原数组重复值的功能。
```
const array=[1,2,3,4,5,2,3,4,5,6]
const arrayFilter =[...new Set(array)];
console.log(arrayFilter) //

```

## 全部替换

我们知道 string.replace() 函数仅替换第一次出现的情况,可以通过在正则表达式的末尾添加 /g来替换所有出现的内容。
```
    var example = "potato potato";
    console.log(example.replace(/pot/, "tom")); 
    // "tomato potato"
    console.log(example.replace(/pot/g, "tom")); 
    // "tomato tomato”

```

## 随机排列数组元素
```
    var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(my_list.sort(function() {
        return Math.random() - 0.5
    })); 
    // [4, 8, 2, 9, 1, 3, 6, 5, 7]
```

## 展开多维数组
```
	var entries = [1, [2, 5], [6, 7], 9];    
  var flat_entries = [].concat(...entries); 
  // [1, 2, 5, 6, 7, 9]
```

## 简写属性

在es5的时候是这样写的
```
 function person (x,y) {
   return {
     x:x,
     y:y
   }
 }
```

现在es6了，可以用简写的方式这样写

```
  function person (x,y) {
   return {
     x,
     y
   }
 }

```

## 解构赋值

  解构赋值有利于开发者的本人心理健康，常见的解构赋值如下

  ```
    function person ( config ){
      if( config.a ) { ... }
      if( config.b ) { ... }
      if( config.c ) { ... }
    }


    function person ( { a , b , c } ) {
      if(a){ ... }
      if(b){ ... } 
      if(c){ ... }
    }
  ```


## es6常用数组方法

### Array.from

::: tip
  快速把一个类似数组的可迭代的对象创建为一个新的对象实例
:::


```
  let obj={'0':'aaa','1':'bbb',length:2}

  console.log(Array.from(obj)) 
  // ['aaa','bbb']
```

比如说常见的封装组件，操作DOM的时候，经常会接收arguments,那这个时候我们就可以利用这个方法转数组操作

```
  let args=Array.from(arguments)
```

Array.from对 String、Set、map等拥有迭代器的对象也可以进行转换

Array.from还接收第二个参数，作用有点类似与map的方法，就是对每个元素都可以进行处理

```
  let list=[1,3,5]
  Array.form( list , x = > x + 1 )
  //[2,4,6]

  等同于
  Arrar.form(list).map(item=>item+1)
  //[2,4,6]
```

### fill

使用给定值填充数组

```
  [1,2,3,4,5,6].fill('a')
  // [a,a,a,a,a,a]

  new Array(3).fill(11)
  // [11,11,11]
```
 fill方法用于数组的初始化非常方便，当然fill还可以接收第二个和第三个参数，也就是起始位置和结束位置，用于指定填充范围

```
  [1,2,3,4,5,6].fill('a',2,4)
  // [1,2,a,a,5,6]
```
fill从2号开始到4号之前，全覆盖


### find和findIndex

::: tip
  find返回数组中第一个满足条件的元素,如果没有满足,返回undefined
  接收三个参数 

  item,index,array =>数组项，索引，原数组
:::

```
  [1,2,3,4,5,6].find((item,index,array)=>{
    return item>5
  })

  // 6

```

::: tip
  findIndex与find方法很相似,返回第一个满足条件的元素的位置,如果都不符合则返回-1
:::

```
  [1,2,3,4,5,6].findIndex((item,index,array)=>{
    return item>3
  })

  // 3

```

### includes

::: tip
  includes返回一个布尔值，表示某个数组是否包含了某一个特定值
:::

没有该方法时，以前我们用的时数组的indexof来检查是否包含某一特定值

```
 if(arrar.indexof('a')>-1){

 }
```

::: warning
  indexof有以下两个缺点
:::

1.不够语义化,它的含义是去找到参数的第一个位置，所以要去判断是否等于-1，不够直观

2.它的内部使用的是严格相等运算符(===),这样会导致对NaN的误判

```
 [NaN].indexOf(NaN)
 // -1
```

includes使用的是不一样的判断方法，所以就没有这样的问题
```
 [NaN].includes(NaN)
 // true
```







