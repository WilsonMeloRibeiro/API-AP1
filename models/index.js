const Sequelize = require('sequelize');
const dbconfig = require('../config/database.js');
const Class = require('./class.js');

const connection = new Sequelize(dbconfig);

Class.init(connection);


module.exports = connection;