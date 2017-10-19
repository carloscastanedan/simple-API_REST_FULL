'use strict'

//Dependecies
const express = require('express')

//Assets
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const router = express.Router()

router.get('/product', productCtrl.getProduct)
router.get('/product/:productId', productCtrl.getProducts)
router.post('/product', productCtrl.saveProduct)
router.put('/product/:productId', productCtrl.updateProduct)
router.delete('/product/:productId', productCtrl.deleteProduct)

router.post('/singUp', userCtrl.singUp)
router.post('/singIn', userCtrl.singIn)

router.get('/private', auth, (req, res) => {res.status(200).send({message: 'Tienes acceso'})})

module.exports = router