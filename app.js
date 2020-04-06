const Koa = require('koa');
const koaBody = require('koa-body');
const InitManager = require('./core/init');
/*const classic = require('./api/v1/classic');
const book = require('./api/v1/book');*/

const app = new Koa();

// 注册解析post参数的中间件
app.use(koaBody({
  multipart: true
}));

// 使用第三方库自动引用并注册
InitManager.initCore(app);

/*
  // 获取当前根目录的绝对路径
  const path = process.cwd();
  console.log("path: ", path);
*/


app.listen(8000, () => {
  console.log('listen 8000');
})