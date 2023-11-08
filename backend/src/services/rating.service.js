// const Match = require('../models/match.model')
const Rating = require('../models/rating.model')
const { Op } = require('sequelize')
const Service = require('../models/service.model')
const Match = require('../models/match.model')
const { findOneMatchService } = require('./match.service')
const { MATCH_STATUS, MATCH_TYPES } = require('../config/constants')
const { updateScoreService } = require('./services.service')

const createRating = async ({ score, comment, type, matchId, userId, refId }) => {
  const newRating = await Rating.create({ score, comment, type, matchId, userId, refId })
  return newRating
}

// const serviceRating = async ({ serviceId }) => {
//   const ratings = await Rating.findAll({
//     where: { [Op.and]: [{ refId: serviceId }, { type: 'user' }] }

//   })

//   return ratings
// }

const serviceRating = async (userId) => {
  const ratings = await Service.findAll({
    where: { userId },
    include: [
      { model: Match, as: 'match' }
    ]
  })

  return ratings
}

const userRating = async ({ matchId }) => {
  const ratings = await Rating.findAll({
    where: { [Op.and]: [{ matchId }, { type: 'service' }] }

  })

  return ratings
}

// const getRatings = async ({ id, type }) => {
//   const whereClause = type === 'service' ? { serviceId: id } : { matchId: id }
//   console.log('hola', whereClause, type)
//   const ratings = await Match.findAll({
//     where: whereClause,
//     include: [{
//       model: Rating,
//       as: 'rating',
//       where: { type },
//       attributes: ['id', 'score', 'comment']
//     }]
//   })
//   console.log(ratings)
//   return ratings
// }

const createServiceRatingService = async (userId, values) => {
  const { matchId, score, comment } = values

  const match = await findOneMatchService(matchId)
  if (!match) throw new Error('MATCH_NOT_FOUND')
  if (match.userId !== userId) throw new Error('MATCH_NOT_FOUND')
  if (match.status !== MATCH_STATUS.ACCEPT) throw new Error('MATCH_NOT_FOUND')

  const rating = await Rating.create({
    userId, // Soy yo como usuario calificador
    matchId,
    type: MATCH_TYPES.SERVICE,
    refId: match.serviceId,
    score,
    comment
  })

  match.status = MATCH_STATUS.QUALIFY_USER
  match.save()

  await updateScoreService(match.serviceId)

  return rating
}

module.exports = {
  createRating,
  serviceRating,
  userRating,
  createServiceRatingService
}
