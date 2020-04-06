const Router = require('koa-router');
const router = new Router();

router.get('/v1/classic/latest', async (ctx, next) => {
  ctx.body = {
    code: 0,
    msg: '请求成功',
    data: {
      name: 'classic'
    },
  };
});

module.exports = router;