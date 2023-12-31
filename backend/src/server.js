const express = require('express')
const cors = require('cors')

// const multer = require('multer')
const fileUpload = require('express-fileupload')

const server = express()

// Development Environment
if (process.env.DEV) {
  console.log('DEVELOPMENT-MODE!!!')
  const morgan = require('morgan')
  server.use(morgan('dev'))
}

// Middlewares
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(fileUpload())

// Routes
server.use('/api', require('./routes/api.routes'))
server.get('/', (req, res) => res.send('API LOCAL-TALENT v1.0'))

module.exports = server
