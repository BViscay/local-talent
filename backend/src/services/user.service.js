const User = require('../models/user.model')
const { uploadImageCreate } = require('./image.service')

const findUserData = async (where) => {
  const user = await User.findOne({ where })
  if (!user) return {}
  const { id, name, email, status } = user
  return { id, name, email, status }
}

const findUser = async (where) => {
  const user = await User.findOne({ where })
  return user
}

const createUser = async (data) => {
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

module.exports = { findUserData, findUser, createUser, userImage }
