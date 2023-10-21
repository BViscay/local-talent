const express = require('express')
const { validateRegister, validateLogin, validateAccount } = require('../validators/auth.validator.js')
const { registerController, loginController, validateController } = require('../controllers/auth.controller.js')

const router = express.Router()

router.post('/register', validateRegister, registerController)
router.post('/login', validateLogin, loginController)
router.post('/validate', validateAccount, validateController)

module.exports = router
