const { registerService, loginService, validateUserService, reSendCodeValidationService, loginTokenService, oAuthService } = require('../services/auth.service')

const authTokenController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await loginTokenService(userId)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const registerController = async (req, res) => {
  try {
    const result = await registerService(req.body)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const loginController = async (req, res) => {
  try {
    const result = await loginService(req.body)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const validateController = async (req, res) => {
  try {
    const result = await validateUserService(req.body)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const resendCodeController = async (req, res) => {
  try {
    const { email } = req.params
    await reSendCodeValidationService(email)
    res.status(200).json({ message: 'RESEND_SUCCESSFUL' })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const oAuthController = async (req, res) => {
  try {
    const result = await oAuthService(req.body)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  authTokenController,
  registerController,
  loginController,
  validateController,
  resendCodeController,
  oAuthController
}
