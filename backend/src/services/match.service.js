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
  if (service.userId === userId) throw new Error('INVALID_SERVICE')

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

const matchAccept = async ({ userId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match)


  if (match.service.userId !== userId) throw new Error('INVALID_USER_MATCH')


  const result = await modify(MATCH_STATUS.ACCEPT, match.id)
  return result
}

const matchCancelService = async ({ userId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match)

  if (match.service.userId !== userId) throw new Error('INVALID_USER_MATCH')

  const result = await modify(MATCH_STATUS.CANCEL, match.id)
  return result
}

const matchCancelUser = async ({ userId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match)

  if (match.userId !== userId) throw new Error('INVALID_USER_MATCH')

  const result = await modify(MATCH_STATUS.CANCEL, match.id)
  return result
}

const verify = async (match) => {
  if (!match) throw new Error('MATCH_NOT_FOUND')
  if (match.status !== MATCH_STATUS.CREATE) throw new Error('INVALID_STATUS_MATCH')
}

const modify = async (status, id) => {
  const modify = await Match.update({ status }, { where: { id } })
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
  matchUser,
  findAllMatch,
  findOneMatchService,
  matchAccept,
  matchCancelService,
  matchCancelUser

}
