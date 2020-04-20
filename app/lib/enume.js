const LoginType = {
  EMALI_TYPE: 100,
  MOBILE_TYPE: 101,
  MINIPROGRAM_TYPE: 102,
  isLginType(type) {
    if(!type) return false;
    for(let k in this) {
      if(this[k] === type) {
        return true;
      }
    }
    return false;
  },
}

module.exports = {
  LoginType
}