'use strict'


//Assets
const sequelize = require('./database')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        email : {type: DataTypes.STRING, allowNull: false, unique: true},
        displayName: DataTypes.STRING,
        password: DataTypes.STRING,
        singUpDate: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
        lastLogin: DataTypes.DATE
    })
}

