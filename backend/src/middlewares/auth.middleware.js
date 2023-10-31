const { validToken } = require('../libs/handleToken')

const validateToken = (req, res, next) => {
  try {
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
  } catch ({ message }) {
    res.status(401).json({ message })
  }
}

module.exports = { validateToken }
