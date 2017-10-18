'use strict'

//Dependecies
const express = require('express')

//Assets
const productCtrl = require('../controllers/product')

const router = express.Router()

router.get('/product', productCtrl.getProduct)
router.get('/product/:productId', productCtrl.getProducts)
router.post('/product', productCtrl.saveProduct)
router.put('/product/:productId', productCtrl.updateProduct)
router.delete('/product/:productId', productCtrl.deleteProduct)

module.exports = router