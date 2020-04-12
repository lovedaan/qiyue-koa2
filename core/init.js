const requireDirectory = require('require-directory');
const Router = require('koa-router');
const path = require('path');


class InitManager {

  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters(app);
    InitManager.InitConfig();
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

  // 初始化加载配置文件，并绑定到全局global上
  static InitConfig() {
    const config = require(path.resolve(__dirname, '../config/index.js'));
    global.config = config;
  }

}

module.exports = InitManager;