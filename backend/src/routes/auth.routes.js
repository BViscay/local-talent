const express = require('express')

const {
  validateRegister,
  validateLogin,
  validateAccount,
  validateCode
} = require('../validators/auth.validator.js')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  authTokenController,
  registerController,
  loginController,
  validateController,
  resendCodeController,
  oAuthController
} = require('../controllers/auth.controller.js')

const router = express.Router()

// Login con token
router.get('/', validateToken, authTokenController)

router.post('/register', validateRegister, registerController)
router.post('/login', validateLogin, loginController)
router.post('/validate', validateAccount, validateController)
router.post('/resend/:email', validateCode, resendCodeController)
router.post('/google', oAuthController)

module.exports = router
