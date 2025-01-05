const Sequelize = require('sequelize');

const sequelize = new Sequelize('node','root','1!Samrat!1',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;