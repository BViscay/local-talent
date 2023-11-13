const { findRatinsService } = require('../services/rating.service')
const { userImage, userUpdateService, findAllUsersService, changePasswordService, findUserService } = require('../services/user.service')

const findAllUsersController = async (req, res) => {
  try {
    const result = await findAllUsersService()
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const userImageController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await userImage(req.files, userId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const userUpdateController = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.headers.session

    // Si tiene ID como parametro es proque uso ruta ADMIN
    const result = await userUpdateService(req.body, id || userId)

    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const changePasswordController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const { password } = req.body
    const result = await changePasswordService(userId, password)
    res.status(200).json({ message: result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findOneUserController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await findUserService({ id })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const userRatingController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await findRatinsService(id)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  userImageController,
  userUpdateController,
  findAllUsersController,
  changePasswordController,
  findOneUserController,
  userRatingController
}
