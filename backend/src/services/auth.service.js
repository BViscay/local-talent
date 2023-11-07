// const { OAuth2Client } = require('google-auth-library')

const { USER_STATUS } = require('../config/constants')
const { generateRandomNumber } = require('../libs/handleRandom')
const { createToken } = require('../libs/handleToken')

const { sendRegisterNotification, sendWelcomeMessage } = require('./email.service')
const { findUserService, createUserService } = require('./user.service')
const { countNewUserNotificationsService } = require('./notification.service')

// Funcion para valdiar session por token
const loginTokenService = async (userId) => {
  const user = await findUserService({ id: userId })
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
    whatsapp: user.whatsapp,
    status: user.status,
    image: user.image,
    rol: user.rol || 'user',
    newNotifications
  }

  return { session, token }
}

const loginService = async ({ email, password }) => {
  // Busco por el email
  const user = await findUserService({ email })

  // Validacion de usuario
  if (!user) throw new Error('USER_NOT_FOUND')
  if (user.status === 0) throw new Error('USER_REQUIRE_VALIDATE')
  if (!user.comparePassword(password)) throw new Error('PASSWORD_INVALID')

  const token = createToken({ userId: user.id, rol: user.rol || 'user' })

  // Busco si tiene nuevas notificaciones
  const newNotifications = await countNewUserNotificationsService(user.id)

  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    whatsapp: user.whatsapp,
    status: user.status,
    image: user.image,
    rol: user.rol || 'user',
    newNotifications
  }

  return { session, token }
}

// Función para validar un usuario
const registerService = async (data) => {
  const { email } = data

  const user = await findUserService({ email })
  if (user) throw new Error('USER_EXIST')

  const validator = generateRandomNumber().toString()

  const newUser = await createUserService({ ...data, validator })

  await sendRegisterNotification(newUser)

  return {
    id: newUser.id,
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    email: newUser.email,
    whatsapp: user.whatsapp,
    rol: user.rol || 'user'
  }
}

// Función para validar un usuario
const validateUserService = async (data) => {
  const { email, code } = data

  const user = await findUserService({ email })
  if (!user) throw new Error('USER_NO_EXIST')
  if (user.status > 1) throw new Error('USER_BLOCKED')
  if (user.validator !== code) throw new Error('IVALID_CODE')

  user.status = USER_STATUS.VALIDATE
  await user.save()

  const token = createToken({ userId: user.id, rol: user.rol || 'user' })

  await sendWelcomeMessage({ email })

  const session = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email,
    status: user.status,
    rol: user.rol || 'user'
  }

  return { session, token }
}

// Funcion para reenvío de codigo de validación
const reSendCodeValidationService = async (email) => {
  const user = await findUserService({ email })
  if (!user) throw new Error('USER_NO_EXIST')

  // Creo un nuevo CODIGO VALIDADOR
  const validator = generateRandomNumber()

  // Actualizo el ususario
  user.validator = validator
  await user.save()

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
