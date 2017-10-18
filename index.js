 'use strict'


//Assets
const config = require('./config')
const sequelize = require('./models/database')
const app = require('./app')


sequelize
.authenticate()
.then(() => {
    console.log('Conexion con la base de datos establecida...')
    app.listen(config.port, ()=> {
        console.log(`API corriendo en http://localhost:${config.port}`)
    })
})
.catch((err) => {
    console.log(`Error al conectar con la base de datos:${err}`)
})

