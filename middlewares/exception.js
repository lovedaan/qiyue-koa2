const { HttpException } = require('../core/http-exception');
const ErrorHandle = async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    if(e instanceof HttpException) {
      ctx.body = {
        errorCode: e.errorCode,
        message: e.msg,
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = e.code;
    } else {
      ctx.body = '未知的错误，请等一下吧';
    }

  }
}

module.exports = ErrorHandle;