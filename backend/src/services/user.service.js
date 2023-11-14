const User = require('../models/user.model')
const { uploadImageCreate } = require('./image.service')

const { hashPassword } = require('../libs/handleEncrynpt')

const attributes = ['id', 'firstname', 'lastname', 'email', 'whatsapp', 'image', 'rating', 'status']

const findUserData = async (where) => {
  const user = await User.findOne({ where })
  if (!user) return {}
  const { id, name, email, status } = user
  return { id, name, email, status }
}

const findUserService = async (where) => await User.findOne({ where })

const createUserService = async (data) => await User.create(data)

const userImage = async (dataImg, dataId) => {
  const resultImage = await uploadImageCreate(dataImg)

  const modifyUser = await User.update(
    {
      image: resultImage.secureUrl
    },
    { where: { id: dataId } }
  )

  return modifyUser
}

const changePasswordService = async (userId, password) => {
  password = await hashPassword(password)
  const res = await User.update({ password }, { where: { id: userId } })
  if (res[0] === 0) throw new Error('USER_NOT_FOUND')
  return true
}

const userUpdateService = async ({ values, userId }) => {
  const modify = await User.update(values, { where: { id: userId } })
  return modify
}

const findAllUsersService = async (where) => await User.findAll({
  where,
  attributes
})

const countUsers = async () => await User.count()

module.exports = {
  findUserData,
  findUserService,
  createUserService,
  userImage,
  userUpdateService,
  findAllUsersService,
  changePasswordService,
  countUsers
}
