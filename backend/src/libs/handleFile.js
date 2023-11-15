const fs = require('fs')

const verifyAndCreateFolder = (path) => !fs.existsSync(path) && fs.mkdirSync(path)

module.exports = { verifyAndCreateFolder }
