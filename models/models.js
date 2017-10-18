'use strict'

//Dependencies
const path = require('path')

//Assets
const sequelize = require('./database')

var Product = sequelize.import(path.join(__dirname, 'product'))
Product.sync()

exports.Product = Product