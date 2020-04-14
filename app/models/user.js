const bcrypt = require('bcryptjs');

const {db} = require('../../core/db');
const {Sequelize, Model} = require('sequelize');

class User extends Model {
  /*constructor() {
    super();
  }*/
}

User.init({
  id: {
    type: Sequelize.INTEGER, // 整型
    primaryKey: true, // 设置主键
    autoIncrement: true, // 自动增加
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128).BINARY,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    set(val) {
      const salt = bcrypt.genSaltSync(10);
      const pwd = bcrypt.hashSync(val, salt);
      this.setDataValue('password', pwd);
    }
  },
  openid: {
    type: Sequelize.STRING(64).BINARY,
    unique: true, // 唯一
  }
}, {
  sequelize: db,
  modelName: 'user',
});

module.exports = {
    User
}

/*
// Find all users
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");
});
 */