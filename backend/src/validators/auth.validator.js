const { check, param } = require('express-validator')
const { validateResult } = require('../libs/validator.js')

const validateLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 6, max: 15 }),
  (req, res, next) => validateResult(req, res, next)
]

const validateRegister = [
  check('firstname').exists().notEmpty(),
  check('lastname').exists().notEmpty(),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 6, max: 15 }),
  (req, res, next) => validateResult(req, res, next)
]

const validateAccount = [
  check('email').exists().notEmpty().isEmail(),
  check('code').exists().notEmpty().isLength({ min: 6, max: 6 }),
  (req, res, next) => validateResult(req, res, next)
]

const validateCode = [
  param('email').exists().notEmpty().isEmail(),
  (req, res, next) => validateResult(req, res, next)
]

module.exports = { validateLogin, validateRegister, validateAccount, validateCode }
