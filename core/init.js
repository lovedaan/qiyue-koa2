const requireDirectory = require('require-directory');
const Router = require('koa-router');
const path = require('path');

class InitManager {

  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters(app);
  }

  static initLoadRouters(app) {
    requireDirectory(module, path.resolve(__dirname, '../app/api'), {
      visit: whenLoadRouter
    });

    // 当每一个文件被导入的时候就会调用这个函数
    function whenLoadRouter (obj) {
      if(obj instanceof Router) {
        app.use(obj.routes());
      }
    }
  }
}

module.exports = InitManager;