const Match = require('../models/match.model')
const Service = require('../models/service.model')
const User = require('../models/user.model')
const Category = require('../models/category.model')

const { sendCreateMatch } = require('./email.service')
const { createNotificationService } = require('./notification.service')
const { findServiceWhere } = require('./services.service')

const { MATCH_STATUS } = require('../config/constants')

const createMatch = async ({ userId, message, serviceId }) => {
  const service = await findServiceWhere({ id: serviceId }, 'findOne')

  if (!service) throw new Error('INVALID_SERVICE')

  const newMatch = await Match.create({ userId, message, serviceId })

  await createNotificationService({
    userId: service.userId,
    refId: serviceId,
    type: 1
  })

  await sendCreateMatch({
    email: service.user.email,
    serviceTitle: service.title,
    userFullName: service.user.firstname,
    message
  })
  return newMatch
}

const serviceMatch = async (userId) => {
  const result = await Match.findAll({
    include: [
      {
        model: Service,
        as: 'service',
        where: { userId },
        include: [
          {
            model: Category,
            as: 'category'
          }

        ]
      },
      {
        model: User,
        as: 'user',
        attributes: ['id', 'firstname', 'lastname', 'email', 'whatsapp', 'image', 'score', 'rating', 'status']
      }
    ]
  })
  return result
}

const matchUser = async (userId) => {
  const matches = await Match.findAll({
    where: { userId },
    include: [
      {
        model: Service,
        as: 'service',
        attributes: ['title', 'description'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['id', 'firstname', 'lastname', 'email', 'whatsapp', 'image', 'score', 'rating', 'status']
          },
          {
            model: Category,
            as: 'category'

          }
        ]
      }
    ]
  })

  return matches
}

const modifyMatch = async (data) => {
  console.log(data)
  const match = await Match.update(data, { where: { id: data.id } })
  return match
}

const matchAccept = async ({ serviceId, matchId, userId }) => {
  const match = await findOneMatchService(matchId)
  if (!match) throw new Error('MATCH_NOT_FOUND')
  if (match.serviceId !== serviceId) throw new Error('MATCH_NOT_FOUND')
  if (match.service.userId !== userId) throw new Error('MATCH_NOT_FOUND')
  if (match.status !== MATCH_STATUS.CREATE) throw new Error('MATCH_NOT_FOUND')

  const modify = await Match.update({ status: MATCH_STATUS.ACCEPT }, { where: { id: match.id } })
  return modify
}

const matchCancel = async ({ serviceId, matchId }) => {
  const match = await findOneMatchService(matchId)
  if (!match) throw new Error('MATCH_NOT_FOUND')
  if (match.serviceId !== serviceId) throw new Error('MATCH_NOT_FOUND')
  if (match.status !== MATCH_STATUS.CREATE) throw new Error('MATCH_NOT_FOUND')

  const modify = await Match.update({ status: MATCH_STATUS.CANCEL }, { where: { id: match.id } })
  return modify
}

const findAllMatch = async (where) => await Match.findAll({ where })

const findOneMatchService = async (id) => await Match.findByPk(id, {
  include: {
    model: Service,
    as: 'service',
    attributes: ['userId']
  }
})

module.exports = {
  createMatch,
  serviceMatch,
  modifyMatch,
  matchUser,
  findAllMatch,
  findOneMatchService,
  matchAccept,
  matchCancel

}
