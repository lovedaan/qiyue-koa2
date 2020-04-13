const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/user'
});

const {RegisterValidator} = require('../../validators/validator');

router.post('/register', async (ctx, next) => {

  const v = new RegisterValidator().validate(ctx);
  const nickname = v.get('body.nickname');
  console.log(nickname)

  ctx.body = {
    code: 0,
    msg: '请求成功',
    data: {
      nickname,
    },
  };
});


module.exports = router;