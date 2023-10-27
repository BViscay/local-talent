const express = require('express')
const cors = require('cors')
const path = require('path')

// const multer = require('multer')
const fileUpload = require('express-fileupload')
const { verifyAndCreateFolder } = require('./libs/handleFile')

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
// server.use(express.static(pathPublic))
server.use(express.urlencoded({ extended: true }))
// server.use(multer({ dest: filesStoage }).single('csv'))

const pathUploads = path.join(__dirname, 'upload')
verifyAndCreateFolder(pathUploads)

server.use(fileUpload({
  useTempFiles: false,
  tempFileDir: pathUploads
}))

// Routes
server.use('/api', require('./routes/api.routes'))
server.get('/', (req, res) => res.send('API LOCAL-TALENT v1.0'))

module.exports = server
