const { body } = require('express-validator')
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
    .isDecimal({ decimal_digits: '1,2' }).withMessage('the price must have a maximum of 2 decimal places'),
  // image es un req.file: si no se carga una imagen por defecto no se crea
  // body('image')
  body('latitude')
    .exists().withMessage('latitude must exist as a property')
    .notEmpty().withMessage('latitude must be complete')
    .isDecimal().withMessage('latitude must be complete'),
  body('longitude')
    .exists().withMessage('longitude must exist as a property')
    .notEmpty().withMessage('longitude must be complete')
    .isDecimal(),

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
