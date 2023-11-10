const { validToken } = require('../libs/handleToken')

const validateToken = (req, res, next) => {
  try {
    const token = extractBearToken(req)

    const session = validToken(token)
    if (!session) throw new Error('INVALID_TOKEN')

    console.log(session)

    req.headers.session = session
    next()
  } catch ({ message }) {
    res.status(401).json({ message })
  }
}

const validateAdminRol = (req, res, next) => {
  try {
    const token = extractBearToken(req)

    const session = validToken(token)
    if (!session) throw new Error('INVALID_TOKEN')

    const { rol } = session
    if (rol !== 'admin') throw new Error('ACCESS_FORBIDDEN')

    req.headers.session = session

    next()
  } catch ({ message }) {
    res.status(403).json({ message })
  }
}

const extractBearToken = (req) => {
  const { authorization } = req.headers
  if (!authorization) throw new Error('INVALID_TOKEN')
  let token
  let parts = authorization.split(' ')
  if (parts[1]) token = parts[1]
  if (token) parts = token.split('.')
  if (parts.length !== 3) token = undefined

  if (!token) throw new Error('INVALID_TOKEN')

  return token
}

module.exports = { validateToken, validateAdminRol }
