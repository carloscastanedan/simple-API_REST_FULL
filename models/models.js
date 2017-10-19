'use strict'

//Dependencies
const path = require('path')

//Assets
const sequelize = require('./database')

const Product = sequelize.import(path.join(__dirname, 'product'))
const User = sequelize.import(path.join(__dirname, 'user'))

Product.sync()
User.sync()

exports.Product = Product
exports.User = User