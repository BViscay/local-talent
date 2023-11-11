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

const matchAccept = async ({ userId, serviceId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match, serviceId)

  if (match.service.userId !== userId) throw new Error('MATCH_NOT_FOUND 4')

  await modify(MATCH_STATUS.ACCEPT, match.id)
}

const matchCancelService = async ({ userId, serviceId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match, serviceId)

  if (match.service.userId !== userId) throw new Error('MATCH_NOT_FOUND 4')

  await modify(MATCH_STATUS.CANCEL, match.id)
}

const matchCancelUser = async ({ userId, serviceId, matchId }) => {
  const match = await findOneMatchService(matchId)

  await verify(match, serviceId)

  if (match.userId !== userId) throw new Error('MATCH_NOT_FOUND 4')

  await modify(MATCH_STATUS.CANCEL, match.id)
}

const verify = async (match, serviceId) => {
  if (!match) throw new Error('MATCH_NOT_FOUND 1')
  if (match.serviceId !== serviceId) throw new Error('MATCH_NOT_FOUND 2')
  if (match.status !== MATCH_STATUS.CREATE) throw new Error('MATCH_NOT_FOUND 3')
}

const modify = async (status, id) => {
  await Match.update({ status }, { where: { id } })
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
