'use strict'


//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        name: DataTypes.STRING,
        picture: DataTypes.STRING,
        price: {type: DataTypes.INTEGER, defaultValue: 0},
        category: {type: DataTypes.ENUM, values: ['computers', 'phone', 'accesories']},
        description: DataTypes.TEXT('tiny')
    })
}