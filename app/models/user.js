const {db} = require('../../core/db');
const {Sequelize, Model} = require('sequelize');

class User extends Model {
  constructor() {
    super();
  }
}

User.init({
  id: {
    type: Sequelize.INTEGER, // 整型
    primaryKey: true, // 设置主键
    autoIncrement: true, // 自动增加
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  openid: {
    type: Sequelize.STRING,
    unique: true, // 唯一
  }
});