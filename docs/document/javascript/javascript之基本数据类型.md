---
title: javascript之基本数据类型
date: 2020-08-29
categories:
 - JavaScript
tags:
 - JavaScript
image: /vuetimg.jpeg
---

## 变量

### 基本类型和引用了类型
在将一个值赋给变量时，解析器必须确定这个值是基本类型值还是引用类型值

1. 基本类型值指的是简单的数据段，而引用类型值指那些可能由多个值构成的对象。
2. 基本数据类型:Undefined、Null、Boolean、Number 和 String
3. 引用类型的值是保存在内存中的对象
4. JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。

::: tip
Symbol是es6新增的基本数据类型，可以用来表示唯一性
:::


### 复制基本类型值
在从一个变量向另一个变量复制基本类型值时，会在变量对象上创建一个新值，然后把该值复制 到为新变量分配的位置上。例
``` js
var num1 = 5;
var num2 = num1;
```

::: tip
num1 中保存的值是 5。当使用num1的值来初始化num2时,num2中也保存了值5。但num2中的5与num1中的5是完全独立的，该值只是num1中5的一个副本。因此，这两个变量可以参与任何操作而不会相互影响.
:::

### 复制引用类型值
当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到新变量分配的空间中。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。因为新旧对象都指向了同一个内存地址。
``` js
var obj1 = {};
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name);  //"Nicholas"
```

### 检测类型

1. typeof：typeof是检测基本数据类型的最佳工具。
``` js
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
typeof s;//string
typeof i;//number
typeof b;//number
typeof u;//undefined
typeof n;//object
typeof o;//object
```
::: tip
typeof对null的处理有问题，正确的结果应该是"null"，但是实际返回的是"object"，这个bug由来已久，也许以后也不会修复
:::

2. Object.prototype.toString()

``` js
let num = 123
let str = 'str'
let bol = false
let n = null
let und = undefined
let sbl = Symbol()
let fn = function() {}
let obj = {}
let arr = []
let reg = new RegExp()
let date = new Date()

console.log(typeof num, Object.prototype.toString.call(num)) // number [object Number]
console.log(typeof str, Object.prototype.toString.call(str)) // string [object String]
console.log(typeof bol, Object.prototype.toString.call(bol)) // boolean [object Boolean]
console.log(typeof n, Object.prototype.toString.call(n)) // object [object Null]
console.log(typeof und, Object.prototype.toString.call(und)) // undefined [object Undefined]
console.log(typeof obj, Object.prototype.toString.call(obj)) // object [object Object]
console.log(typeof arr, Object.prototype.toString.call(arr)) // object [object Array]
console.log(typeof fn, Object.prototype.toString.call(fn)) // function [object Function]
console.log(typeof sbl, Object.prototype.toString.call(sbl)) // symbol [object Symbol]
console.log(typeof date, Object.prototype.toString.call(date)) // object [object Date]
console.log(typeof reg, Object.prototype.toString.call(reg)) // object [object RegExp]

```
::: tip
使用typeof进行类型检测时候，typeof并不能友好的检测出obj、date、reg、arr等变量，因为他们实际上都属于object类型，而Object.prototype.toString.call()方法是可以相对友好的检测出具体的数据类型的
:::
### 扩展
封装一个可以检测数据类型的方法
``` js
function(value){
    return Object.prototype.toString.call(value).slice(8, Object.prototype.toString.call(value).length - 1).toLocaleLowerCase()
}
```
