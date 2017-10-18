'use strict'

//Assets
const models = require('../models/models')

function getProduct(req, res)
{
    let Product = models.Product
    Product.findAll()
    .then( products => {
        if(!products)
        {
                res.status(404).send({message: 'No existen products'})
                return
        }
        res.status(200).send({products})
    })
    .catch(err => {
        res.status(500).send({err})
    })
}

function getProducts(req, res)
{
    let Product = models.Product
    let productId = req.params.productId
    Product.findById(productId)
    .then(product => {
        if(!product)
        {
            res.status(404).send({message: 'No existe el producto'})
            return
        }
        res.status(500).send({product})
    })
    .catch( err => {
        res.status(500).send({err})
    })
}

function saveProduct(req, res)
{
    let product = models.Product.build({
        name: req.body.name,
        picture: req.body.picture,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    })
    product.save()
    .then(()=> {
        res.status(200)
        res.send(product)
    })
    .catch((err)=>{
        res.status(500)
        res.send({message:`Error al salvar el producto:${err}`})
    })
}

function updateProduct(req, res)
{
    let Product = models.Product
    let productId = req.params.productId
    
    Product.update({
        name: req.body.name,
        picture: req.body.picture,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    }, {
        where: {
            id: productId
        }
    })
    .then( () => {
        res.status(500).send({message: 'Producto actualizado con exito'})
    })
    .catch(err => {
        res.status(500).send({message: `Error al actualizar el producto: ${err}`})
        console.log(err)
    })
}

function deleteProduct(req, res)
{
    let Product = models.Product
    let productId = req.params.productId
    
   Product.destroy({
       where: {
           id: productId
       }
   })
   .then( () => {
       res.status(200).send({message: 'Producto eliminado con exito'})
   })
   .catch( err => { 
       res.status(500).send({message: `Error al eliminar el producto:${err}`})
   })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}