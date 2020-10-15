const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const path = require('path')

// Ejecuto variables de entorno 
require('dotenv').config()

// Ejecuto la conexión a base de datos
require('./config/db')

// Elemento servidor
const server = express()

//middleware (sucede antes de llegar a la ruta)
server.use(cors())
server.use(express.json())

// Rutas (para todos los métodos)
server.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'))
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })
}

const host = process.env.HOST || '0.0.0.0'

server.listen(process.env.PORT, host, () => console.log("APP listening in port 4000"))
