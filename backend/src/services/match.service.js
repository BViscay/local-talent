const Match = require('../models/match.model')
const Service = require('../models/service.model')

const { sendCreateMatch } = require('./email.service')
const { createNotificationService } = require('./notification.service')
const { findServiceWhere } = require('./services.service')

const createMatch = async ({ userId, message, serviceId }) => {
  console.log({ userId, message, serviceId })

  const newMatch = await Match.create({ userId, message, serviceId })

  await createNotificationService({
    userId,
    refId: serviceId,
    type: 1
  })

  const service = await findServiceWhere({ id: serviceId }, 'findOne')

  await sendCreateMatch({
    email: service.user.email,
    serviceTitle: service.title,
    userFullName: service.user.firstname,
    message
  })
  return newMatch
}

const serviceMatch = async (userId) =>
  await Match.findAll({
    include: {
      model: Service,
      where: { userId },
      as: 'service'
    }
  })

const matchUser = async (userId) =>
  await Match.findAll({
    where: { userId },
    include: {
      model: Service,
      as: 'service',
      attributes: ['title', 'description']
    }
  })

const modifyMatch = async (data) => {
  console.log(data.status)
  const match = await Match.update(data, { where: { id: data.id } })

  return match
}

module.exports = {
  createMatch,
  serviceMatch,
  modifyMatch,
  matchUser
}