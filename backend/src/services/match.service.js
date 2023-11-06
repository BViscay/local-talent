const Match = require('../models/match.model')
const Service = require('../models/service.model')
const User = require('../models/user.model')
const Category = require('../models/category.model')

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
        as: 'user'
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

module.exports = {
  createMatch,
  serviceMatch,
  modifyMatch,
  matchUser
}
