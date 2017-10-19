'use strict'

//Dependencies
const express = require('express')
const bodyParser = require('body-parser')

//Assets
const router = require('./routes/index')

//create app de express
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', router)

module.exports = app