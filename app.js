const Koa = require('koa');
const koaBody = require('koa-body');
const ErrorHandle = require('./middlewares/exception');
// const mysql = require('mysql2/promise');
const InitManager = require('./core/init');
/*const classic = require('./api/v1/classic');
const book = require('./api/v1/book');*/

const app = new Koa();

app.use(ErrorHandle);

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

// 初始化数据库
/*async function initDataBase() {
  try {
    // create the connection to database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'koa2-test',
      password: '123456'
    });
    const [data] = await connection.query('SELECT * FROM `user`');
    console.log(data);
  } catch(e) {
    console.log(e)
  }
}

initDataBase()*/


app.listen(8000, () => {
  console.log('listen 8000');
})