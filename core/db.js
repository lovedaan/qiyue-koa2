const {Sequelize} = require('sequelize');
const {dbName, port, host, password, user} = require('../config/index').database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  port,
  host,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps:true,
    paranoid:true,
    createdAt:'created_at',
    updatedAt:'updated_at',
    deletedAt:'deleted_at',
    underscored:true,
    // freezeTableName:true,

  },
})

sequelize.sync({force: false});

module.exports = {db: sequelize};

