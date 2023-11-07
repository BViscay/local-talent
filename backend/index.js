const dotenv = require('dotenv')
dotenv.config()

const server = require('./src/server')
const { connectionDatabase } = require('./src/database')

const port = process.env.PORT || 3000
const force = false // Forzar a regenerar la base de datos

server.listen(port, async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  connectionDatabase(force)
  console.log(`Server up in port ${port}`)
})
