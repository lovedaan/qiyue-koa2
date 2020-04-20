const Router = require('koa-router');
const { LoginType } = require('../../lib/enume');
const router = new Router({
  prefix: '/v1/token'
});
const {User} = require('../../models/user.js');

const { TokenValidator } = require('../../validators/validator');

const {Success} = require('../../../core/http-exception');
router.post('/', async (ctx) => {

  const v = await new TokenValidator().validate(ctx);
  const account = v.get('body.account')
  const secret = v.get('body.secret')
  const type = v.get('body.type')

  switch(type) {
    case LoginType.EMALI_TYPE:
      // {"account": "123@qq.com", "type": 100, "secret": "@abc123456"}
      handleEmailLogin(account, secret);
      break;
    case LoginType.MOBILE_TYPE:

      break;
    case LoginType.MINIPROGRAM_TYPE:

      break;
    default:
      break;
  }

  // console.log(res.dataValues)
  // throw new Success('登录成功', 100, { account, secret})

});

async function handleEmailLogin(account, secret) {
  const user = await User.verfyEmailPassword(account, secret)
}

module.exports = router;