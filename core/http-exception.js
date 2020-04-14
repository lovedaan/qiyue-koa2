class HttpException extends Error {
  constructor(msg = '出错了！', errorCode = 10000, code = 400, data = null) {
    super();

    this.msg = msg;
    this.errorCode = errorCode;
    this.code = code;
  }
}


class ParameterException extends HttpException {
  constructor(msg = '参数错误', errCode = 10000, data = null) {
    super();
    this.code = 400;
    this.msg = msg;
    this.errCode = errCode;
    this.data = data;
  }
}

class Success extends HttpException {
  constructor(msg = '请求成功', errCode = 100, data = null) {
    super();
    this.code = 200;
    this.msg = msg;
    this.errCode = errCode;
    this.data = data;
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
};