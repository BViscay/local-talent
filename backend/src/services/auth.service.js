const { OAuth2Client } = require('google-auth-library')

const { USER_STATUS } = require('../config/constants')
const { generateRandomNumber } = require('../libs/handleRandom')
const { createToken } = require('../libs/handleToken')

const { sendRegisterNotification, sendWelcomeMessage } = require('./email.service')
const { findUser, createUser } = require('./user.service')
const { countNewUserNotificationsService } = require('./notification.service')

// Funcion para valdiar session por token
const loginTokenService = async (userId) => {
  const user = await findUser({ id: userId })
  if (!user) throw new Error('USER_NOT_FOUND')
  if (user.status === 0) throw new Error('USER_REQUIRE_VALIDATE')

  const token = createToken({ userId: user.id })

  // Busco si tiene nuevas notificaciones
  const newNotifications = await countNewUserNotificationsService(user.id)

  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    status: user.status,
    newNotifications
  }

  return { session, token }
}

const loginService = async ({ email, password }) => {
  // Busco por el email
  const user = await findUser({ email })

  // Validacion de usuario
  if (!user) throw new Error('USER_NOT_FOUND')
  if (user.status === 0) throw new Error('USER_REQUIRE_VALIDATE')
  if (!user.comparePassword(password)) throw new Error('PASSWORD_INVALID')

  const token = createToken({ userId: user.id })

  // Busco si tiene nuevas notificaciones
  const newNotifications = await countNewUserNotificationsService(user.id)

  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email,
    status: user.status,
    newNotifications
  }

  return { session, token }
}

// Función para validar un usuario
const registerService = async (data) => {
  const { email } = data

  const user = await findUser({ email })
  if (user) throw new Error('USER_EXIST')

  const validator = generateRandomNumber().toString()

  const newUser = await createUser({ ...data, validator })

  await sendRegisterNotification(newUser)

  return {
    id: newUser.id,
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    email: newUser.email
  }
}

// Función para validar un usuario
const validateUserService = async (data) => {
  const { email, code } = data

  const user = await findUser({ email })
  if (!user) throw new Error('USER_NO_EXIST')
  if (user.status !== 0) throw new Error('USER_NO_REQUIRE_VALIDATE')
  if (user.validator !== code) throw new Error('IVALID_CODE')

  user.status = USER_STATUS.VALIDATE
  await user.save()

  const token = createToken({ userId: user.id })

  await sendWelcomeMessage({ email })

  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email,
    status: user.status
  }

  return { session, token }
}

// Funcion para reenvío de codigo de validación
const reSendCodeValidationService = async (email) => {
  const user = await findUser({ email })
  if (!user) throw new Error('USER_NO_EXIST')
  if (user.status !== 0) throw new Error('USER_NO_REQUIRE_VALIDATE')

  const { validator } = user
  sendRegisterNotification({ email, validator })

  return true
}

const oAuthService = () => {

}

module.exports = {
  loginService,
  registerService,
  validateUserService,
  reSendCodeValidationService,
  loginTokenService,
  oAuthService
}
