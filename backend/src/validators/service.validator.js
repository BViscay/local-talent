const { check } = require('express-validator')
const { validateResult } = require('../libs/validator.js')

const ValidateCreateService = [
  check('user_id').exists().notEmpty(),
  check('category_id').exists().notEmpty(),
  (req, res, next) => validateResult(req, res, next)
]

// const validateRegister = [
//   check('firstname').exists().notEmpty(),
//   check('lastname').exists().notEmpty(),
//   check('email').exists().notEmpty(),
//   check('password').exists().notEmpty().isLength({ min: 6, max: 15 }),
//   (req, res, next) => validateResult(req, res, next)
// ]

// const validateAccount = [
//   check('email').exists().notEmpty().isEmail(),
//   check('code').exists().notEmpty().isLength({ min: 6, max: 6 }),
//   (req, res, next) => validateResult(req, res, next)
// ]

// module.exports = { ValidateCreateService, validateRegister, validateAccount }
