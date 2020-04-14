const { HttpException } = require('../core/http-exception');
const ErrorHandle = async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    // console.log(e);
    // 只有在开发环境下才抛出异常
    const isDev = global.config.environment === 'dev';
    const isHttpException = e instanceof HttpException;
    if(isDev && !isHttpException) {
      throw e;
    }
    if(isHttpException) {
      ctx.body = {
        errCode: e.errCode,
        message: e.msg,
        requestUrl: `${ctx.method} ${ctx.path}`,
        data: e.data,
      };
      ctx.status = e.code;
    } else {
      ctx.body = {
        errCode: 9999,
        message: '出错了，请稍后再试一下！',
        requestUrl: `${ctx.method} ${ctx.path}`,
        data: null,
      };
      ctx.status = 500;
    }

  }
}

module.exports = ErrorHandle;