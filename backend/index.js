const paymentRoutes = require('./src/routes/payment.routes')
const express = require('express')
const morgan = require('morgan')
const { config } = require('dotenv')
config()

const app = express() // Crea una instancia de express

app.use(paymentRoutes)

app.use(morgan('dev')) // Registra las solicitudes en modo 'dev'

const server = require('./src/server')
const { connectionDatabase } = require('./src/database')

const port = process.env.PORT || 3000
const force = false// Forzar a regenerar la base de datos

server.listen(port, async () => {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  connectionDatabase(force)
  console.log(`Server up in port ${port}`)
})
