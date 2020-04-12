const Router = require('koa-router');
const router = new Router();
// const { HttpException, ParameterException } = require('../../../core/http-exception');

const {PosityIntegerValidator} = require('../../validators/validator');

router.get('/v1/book/latest/:id', async (ctx, next) => {
  console.log(a)
  const {type} = ctx.query;
  const v = new PosityIntegerValidator().validate(ctx);
  const id = v.get('path.id');
  console.log(id)
  /*if(!type) {
    // const error = new HttpException('类型不能为空', 10001, 400);
    // const error = new ParameterException();
    // error.errorCode = 10001;
    // error.requestUrl = `${ctx.method} ${ctx.path}`;
    // error.status = 400;
    // throw error;
  }*/

  ctx.body = {
    code: 0,
    msg: '请求成功',
    data: {
      name: 'book',
      id
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