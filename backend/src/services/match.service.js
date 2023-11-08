const Match = require('../models/match.model')
const Service = require('../models/service.model')
const User = require('../models/user.model')
const Category = require('../models/category.model')

const { sendCreateMatch } = require('./email.service')
const { createNotificationService } = require('./notification.service')
const { findServiceWhere } = require('./services.service')

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
  findOneMatchService
}
