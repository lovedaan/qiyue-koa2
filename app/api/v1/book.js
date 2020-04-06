const Router = require('koa-router');
const router = new Router();

router.get('/v1/book/latest', async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: '请求成功',
    data: {
      name: 'book'
    },
  };
});

router.post('/v1/book/:id/latest', async (ctx, next) => {
  /*const params = ctx.params;
  const query = ctx.query;
  const headers = ctx.header;
  const body = ctx.request.body;
  console.log('params: ', params);
  console.log('query: ', query);
  console.log('headers: ', headers);
  console.log('body: ', body);*/
  ctx.body = {
    code: 0,
    msg: '请求成功',
    data: {
      name: 'book'
    },
  };
});

module.exports = router;