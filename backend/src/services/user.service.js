const User = require('../models/user.model')
const { uploadImageCreate } = require('./image.service')
const bcrypt = require('bcrypt')

const attributes = ['id', 'firstname', 'lastname', 'email', 'whatsapp', 'image', 'rating', 'status']

const findUserData = async (where) => {
  const user = await User.findOne({ where })
  if (!user) return {}
  const { id, name, email, status } = user
  return { id, name, email, status }
}

const findUserService = async (where) => {
  const user = await User.findOne({ where })

  if (!user) throw new Error('USER_NOT_FOUND')

  return user
}

const createUserService = async (data) => await User.create(data)

const userImage = async (dataImg, dataId) => {
  const resultImage = await uploadImageCreate(dataImg)

  const modifyUser = await User.update(
    {
      image: resultImage
    },
    { where: { id: dataId } }
  )

  return modifyUser
}

const changePasswordService = async (userId, password) => {
  password = await bcrypt.hash(password, 10)
  const res = await User.update({ password }, { where: { id: userId } })
  if (res[0] === 0) throw new Error('USER_NOT_FOUND')
  return true
}

const userUpdateService = async (values, userId) => await User.update(values, { where: { id: userId } })

const findAllUsersService = async (where) => await User.findAll({
  where,
  attributes
})

module.exports = {
  findUserData,
  findUserService,
  createUserService,
  userImage,
  userUpdateService,
  findAllUsersService,
  changePasswordService
}
