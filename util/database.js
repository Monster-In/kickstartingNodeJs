const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Iliyastechs@ngli10', {
    dialect: 'mysql',
    host: 'localhost'
    });

module.exports = sequelize;