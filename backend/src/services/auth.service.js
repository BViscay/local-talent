const { USER_STATUS } = require('../config/constants')
const { generateRandomNumber } = require('../libs/handleRandom')
const { createToken } = require('../libs/handleToken')
const { sendRegisterNotification, sendWelcomeMessage } = require('./email.service')
const { findUser, createUser } = require('./user.service')

const loginService = async ({ email, password }) => {
  // Busco por el email
  const user = await findUser({ email })

  // Validacion de usuario
  if (!user) throw new Error('USER_NOT_FOUND')
  if (user.status === 0) throw new Error('USER_REQUIRE_VALIDATE')
  if (!user.comparePassword(password)) throw new Error('PASSWORD_INVALID')

  // Creo un token con id idUsuario
  const token = createToken({ idUser: user.id })

  // Doy formato de salida
  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email,
    status: user.status
  }

  return { session, token }
}

const registerService = async (data) => {
  const { email } = data

  // Verifico si existe
  const user = await findUser({ email })
  if (user) throw new Error('USER_EXIST')

  // Genero el codigo de validación
  const validator = generateRandomNumber().toString()

  // Creo el nuevo ususario
  const newUser = await createUser({ ...data, validator })

  // Envío noficiacion de validacion
  sendRegisterNotification(newUser)

  return newUser
}

const validateUserService = async (data) => {
  const { email, code } = data

  // Verifico si existe y estado
  const user = await findUser({ email })
  if (!user) throw new Error('USER_NO_EXIST')
  if (user.status !== 0) throw new Error('USER_NO_REQUIRE_VALIDATE')
  if (user.validator !== code) throw new Error('IVALID_CODE')

  user.status = USER_STATUS.VALIDATE
  await user.save()

  // Envío confirmación de activacion
  sendWelcomeMessage({ email })

  return true
}

module.exports = {
  loginService,
  registerService,
  validateUserService
}
