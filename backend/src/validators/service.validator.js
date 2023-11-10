const { body, header } = require('express-validator')
const { validateResult } = require('../libs/validator.js')

const ValidateCreateService = [
  body('categoryId')
    .exists().withMessage('categoryId must exist as a property')
    .notEmpty().withMessage('categoryId must be complete')
    .isInt().withMessage('categoryId must be integer'),
  body('title')
    .exists().withMessage('title must exist as a property')
    .notEmpty().withMessage('title must be complete')
    .isString().withMessage('title must be string ')
    .isLength({ min: 10, max: 60 }).withMessage('title must be between 10 to 60 characters'),
  body('description')
    .exists().withMessage('description must exist as a property')
    .notEmpty().withMessage('description must be complete')
    .isString().withMessage('description must be string')
    .isLength({ min: 10, max: 180 }).withMessage('description must be between 10 to 180 characters'),
  body('price')
    .exists().withMessage('price must exist as a property')
    .notEmpty().withMessage('precio must be complete')
    .isDecimal({ decimal_digits: '2' }),
  // image es un req.file
  // body('image')
  body('latitude').exists().notEmpty().isDecimal({ decimal_digits: '2' }),
  body('longitude').exists().notEmpty().isDecimal({ decimal_digits: '2' }),

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

module.exports = {
  ValidateCreateService
}
