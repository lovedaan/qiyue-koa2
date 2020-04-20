const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/user'
});
const {User} = require('../../models/user.js');

const { RegisterValidator } = require('../../validators/validator');

const {Success} = require('../../../core/http-exception');
router.post('/register', async (ctx, next) => {
  
  const v = await new RegisterValidator().validate(ctx);
  const userInfo = {
    nickname: v.get('body.nickname'),
    password: v.get('body.password2'),
    email: v.get('body.email')
  };
  const res = await User.create(userInfo)
  // console.log(res.dataValues)
  throw new Success('注册成功', 100, res.dataValues)

});

module.exports = router;