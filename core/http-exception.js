class HttpException extends Error {
  constructor(msg = '出错了！', errorCode = 10000, code = 400) {
    super();

    this.msg = msg;
    this.errorCode = errorCode;
    this.code = code;
  }
}


class ParameterException extends HttpException {
  constructor(msg = '参数错误', errCode = 10000) {
    super();
    this.code = 400;
    this.msg = msg;
    this.errCode = errCode;
  }
}

module.exports = {
  HttpException,
  ParameterException
};