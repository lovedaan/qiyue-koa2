const {Sequelize} = require('sequelize');
const {dbName, port, host, password, user} = require('../config/index').config;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  port,
  host,
  logging: true,
  timezone: '+08:00',
  define: {},
})

module.exports = {db: sequelize};

