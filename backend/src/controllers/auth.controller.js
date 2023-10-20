const { registerService, loginService, validateUserService } = require('../services/auth.service')

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
    await validateUserService(req.body)
    res.status(200).json({ message: 'USER_VALIDATE' })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = { registerController, loginController, validateController }
