const express = require('express')
const cors = require('cors')
// const multer = require('multer')
const fileUpload = require('express-fileupload')

const server = express()

// Development Environment
if (process.env.DEV) {
  const morgan = require('morgan')
  server.use(morgan('dev'))
}

// Middlewares
server.use(cors())
server.use(express.json())
// server.use(express.static(pathPublic))
server.use(express.urlencoded({ extended: true }))
// server.use(multer({ dest: filesStoage }).single('csv'))
server.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './src/uploads'
}))
// Routes
server.use('/api', require('./routes/api.routes'))

module.exports = server