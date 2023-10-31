const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

const handleHttpError = (res, e, status = 500) => {
  console.log(e)
  return res.status(status).send({ error: e })
}

module.exports = { validateResult, handleHttpError }
