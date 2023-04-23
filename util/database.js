const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','tej@22', {
    dialect: 'mysql',
    host: 'localhost'
    });

module.exports = sequelize;