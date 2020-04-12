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

module.exports = {
  PosityIntegerValidator
};