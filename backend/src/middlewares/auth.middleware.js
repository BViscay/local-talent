const { validToken } = require('../libs/token')

const validateToken = (req, res, next) => {
  const { authorization } = req.headers
  let token
  if (authorization) {
    let parts = authorization.split(' ')
    if (parts[1]) token = parts[1]
    if (token) parts = token.split('.')
    if (parts.length !== 3) token = undefined
  }
  const session = validToken(token)
  if (!session) throw new Error('INVALID_TOKEN')
  req.headers.session = session
  next()
}

module.exports = { validateToken }
