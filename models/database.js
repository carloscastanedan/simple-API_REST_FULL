'use strict'

//Dependencies
const Sequelize = require('Sequelize')

//Assets
const config = require('../config')

const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect
        //logging: false
    }
)

module.exports = sequelize