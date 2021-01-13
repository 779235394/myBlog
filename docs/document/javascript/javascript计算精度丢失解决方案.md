---
title: javascript计算精度丢失解决方案
date: 2021-01-13
categories:
 - JavaScript
tags:
 - JavaScript
image: /vuetimg2.jpeg
---

对于整数，前端出现问题的几率可能比较低，毕竟很少有业务需要需要用到超大整数，只要运算结果不超过 Math.pow(2, 53) 就不会丢失精度。
对于小数，前端出现问题的几率还是很多的，尤其在一些电商网站涉及到金额等数据。解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）

```js
// 0.1 + 0.2
(0.1*10 + 0.2*10) / 10 == 0.3 // true
```

解决方案如下

```js
var Calc = function () {
     /*
      * 将浮点数去除小数点，返回整数和倍数。如 3.14 >> 314，倍数是 100
      * @param n {number} 浮点数
      * return {object}
      * {num: 314, times: 100}
      * */
     function toInt(n) {
         var n = +n, res = {num: n, times: 1};
         if (n !== (n | 0)) { //判断浮点数，n===parseInt(n)
             var arr = ('' + n).split('.');
             var len = arr[1].length; //小数长度
             res.times = Math.pow(10, len); //需要乘的倍数=>10的指数
             res.num = Math.round(n * res.times); //四舍五入取整
         }
         return res;
     }

     function operation(a, b, op) {
         var result; //最终计算的值
         var o1 = toInt(a), o2 = toInt(b);

         var n1 = o1.num, t1 = o1.times;
         var n2 = o2.num, t2 = o2.times;

         var max = Math.max(t1, t2);

         switch (op) {
             case 'add':
                 if (t1 > t2) {
                     result = n1 + n2 * (t1 / t2);
                 } else {
                     result = n2 + n1 * (t2 / t1);
                 }
                 result = result / max;
                 break;
             case 'subtract':
                 if (t1 > t2) {
                     result = n1 - n2 * (t1 / t2);
                 } else {
                     result = n1 * (t2 / t1) - n2;
                 }
                 result = result / max;
                 break;
             case 'multiply':
                 result = (n1 * n2) / (t1 * t2);
                 return result;
                 break;
             case 'divide':
                 result = (n1 / n2) * (t2 / t1);
                 return result;
                 break;

         }
         return result;
     }

     /*加*/
     function add(a, b) {
         return operation(a, b, 'add');
     }

     /*减*/
     function subtract(a, b) {
         return operation(a, b, 'subtract');
     }

     /*乘*/
     function multiply(a, b) {
         return operation(a, b, 'multiply');
     }

     /*除*/
     function divide(a, b) {
         return operation(a, b, 'divide');
     }

     //exports
     return {
         add: add,
         subtract: subtract,
         multiply: multiply,
         divide: divide
     }
 }();
```

