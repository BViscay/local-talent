const { param } = require('express-validator')
const { validateResult } = require('../libs/validator.js')

const validateId = [
  param('id').exists().notEmpty().isUUID(),
  (req, res, next) => validateResult(req, res, next)
]

module.exports = { validateId }
