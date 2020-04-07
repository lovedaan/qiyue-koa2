class HttpException extends Error {
  constructor(msg = '出错了！', errorCode = 10000, code = 400) {
    super();

    this.msg = msg;
    this.errorCode = errorCode;
    this.code = code;
  }
}

module.exports = {
  HttpException
};