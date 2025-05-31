const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'Miguel2001$',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;