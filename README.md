# 学习七月的nodejs+koa2开发服务端API

## 前端工程师为什么要学习nodejs

一个进阶工程师需要的学习的，前后端界限越来越模糊，思维方式的培养，更加成熟，考虑问题更加全面，学习服务端对于提高前端编程还是很有帮助的

* 使js能够脱离浏览器运行

* 操作文件的能力，作为前端工程化的基础

* 可以开发服务端API

* 作为中间层

## 异步编程

nodejs都是异步操作的

对异步操作的解决方案

- callback，回调函数

- promise

- generator，生成器

- async和await

  1. await必须搭配async一起出现，但是可以只有async

  2. async：指明该函数是一个异步函数，并会强制将函数的返回值包装成一个promise对象

  3. await：求值关键字， 后面可以跟任何一个js表达式，不一定是一个promise对象，返回值就是对这个表达式的求值，会阻塞线程

## koa2中间件

洋葱模型的先决条件，是在调用next前面加上await，即便是异步代码也能以同步的方式运行，从而保证了洋葱模型的执行顺序。


```javascript

app.use(async(ctx, next) => {

  console.log(1);

  next();

  console.log(2);

})

app.use(async(ctx, next) => {

  console.log(3);

  next();

  console.log(4);

})

// 打印的顺序是1342


```
