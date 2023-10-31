const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET
const expire = process.env.JWT_EXPIRE

const createToken = (payload, expiresIn = expire) => {
  return jwt.sign(payload, secret, { expiresIn })
}

const validToken = (token) => {
  try {
    const result = jwt.verify(token, secret)
    return result
  } catch (error) {
    return null
  }
}

module.exports = { createToken, validToken }
