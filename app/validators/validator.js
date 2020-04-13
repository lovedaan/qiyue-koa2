const {Rule, LinValidator} = require('../../core/lin-validator');

// 校验正整数的类
class PosityIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '请输入正整数', {min: 1})
    ]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.nickname = [
      new Rule('isLength', '昵称不符合长度规范', {min: 3, max: 15})
    ];
    this.email = [
      new Rule('isEmail', '邮箱不符合规范')
    ];
    this.password1 = [
      new Rule('isLength', '密码不符合长度规范', {min: 6, max: 15}),
      new Rule('matches', '密码必须包含字母数字特殊字符', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
    ]
    this.password2 = this.password1;
  }

  validatePassword(vals) {
    const pwd1 = vals.body.password1;
    const pwd2 = vals.body.password2;
    if(pwd1 !== pwd2) {
      throw new Error('两次密码输入不一致');
    }
  }
}

module.exports = {
  PosityIntegerValidator,
  RegisterValidator,
};