'use strict'

//Assets
const models = require('../models/models')
const service = require('../services')

function singUp(req, res)
{
    let user = models.User.build({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    user.save()
    .then(() => {
        res.status(200)
        res.send({token: service.createToken(user)})
    })
    .catch(err => {
        res.status(500)
        res.send({message:`Error al salvar el usuario:${err}`})
    })
}

function singIn(req, res)
{
    let user = models.User
    user.findOne({
        where: {email: req.body.email}
    })
    .then( user => {
        if(!user)
        {
            res.status(404).send({message: 'No existe el usuario'})
        }
    res.status(200).send({  message: 'Usuario autenticado',
                            token: service.createToken(user)})
    })
    .catch(err =>{
        res.status(500).send({err})
    })
}

module.exports = {
    singUp,
    singIn
}