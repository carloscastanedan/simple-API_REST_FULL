'use strict'

//Dependencies
const path = require('path')
const bcrypt = require('bcrypt');

//Assets
const sequelize = require('./database')

const Product = sequelize.import(path.join(__dirname, 'product'))
const User = sequelize.import(path.join(__dirname, 'user'))

Product.sync()
User.sync()


//Hooks
User.beforeSave((user, options) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        })
})

exports.Product = Product
exports.User = User