const { Rule, LinValidator } = require('../../core/lin-validator-v2');
const {User} = require('../models/user');
const { LoginType } = require('../lib/enume');

// 校验正整数的类
class PosityIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '请输入正整数', { min: 1 })
    ]
  }
}

// 注册参数校验
class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.nickname = [
      new Rule('isLength', '昵称不符合长度规范', { min: 3, max: 15 })
    ];
    this.email = [
      new Rule('isEmail', '邮箱不符合规范')
    ];
    this.password1 = [
      new Rule('isLength', '密码不符合长度规范', { min: 6, max: 15 }),
      new Rule('matches', '密码必须包含字母数字特殊字符', '(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
    ]
    this.password2 = this.password1;
  }

  validatePassword(vals) {
    const pwd1 = vals.body.password1;
    const pwd2 = vals.body.password2;
    if (pwd1 !== pwd2) {
      throw new Error('两次密码输入不一致');
    }
  }
  async validateEmail(vals) {
    const email = vals.body.email;
    const userInfo = await User.findOne({
      where: {
        email
      }
    });
    if(userInfo) {
      throw new Error('邮箱已存在');
    }

  }
}

// 登录参数校验
class TokenValidator extends LinValidator {
  constructor() {
    super();
    this.account = [
      new Rule('isLength', '账号不符合长度规范', {min: 6, max: 32})
    ];
    this.secret = [
      new Rule('isOptional'),
      new Rule('isLength', '密码最少6位', { min: 8, max: 24 })
    ];
  }
  validateLoginType(vals) {
    const { type } = vals.body;
    if(!type) {
      throw new Error('type参数必填');
    }
    if (!LoginType.isLginType(type)) {
      throw new Error('type参数不合法');
    }
  }
}

module.exports = {
  PosityIntegerValidator,
  RegisterValidator,
  TokenValidator,
};