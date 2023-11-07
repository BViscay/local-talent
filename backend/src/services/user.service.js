const User = require('../models/user.model')
const { uploadImageCreate } = require('./image.service')

const attributes = ['id', 'firstname', 'lastname', 'email', 'whatsapp', 'image', 'rating', 'status']

const findUserData = async (where) => {
  const user = await User.findOne({ where })
  if (!user) return {}
  const { id, name, email, status } = user
  return { id, name, email, status }
}

const findUserService = async (where) => {
  const user = await User.findOne({
    where,
    attributes
  })

  if (!user) throw new Error('USER_NOT_FOUND')

  return user
}

const createUserService = async (data) => {
  const user = await User.create(data)
  return user
}

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
  const user = await User.update({ password }, { where: { id: userId } })
  console.log(user)
  return user
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
