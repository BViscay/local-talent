// const Match = require('../models/match.model')
const Rating = require('../models/rating.model')
const { Sequelize } = require('sequelize')
const Service = require('../models/service.model')
const { findOneMatchService } = require('./match.service')
const { MATCH_STATUS, MATCH_TYPES } = require('../config/constants')
const User = require('../models/user.model')
const uuid = require('uuid');


const createServiceRatingService = async (userId, values) => {
  const { matchId, score, comment } = values

  const match = await findOneMatchService(matchId)
  console.log(match.toJSON())
  if (!match) throw new Error('MATCH_NOT_FOUND')
  //if (match.userId !== userId) throw new Error('INVALID_USER_MATCH')
  //if (match.status !== MATCH_STATUS.ACCEPT) throw new Error('INVALIDA_STATUS_MATCH')

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

  // Actualizo el rating del servicio de forma asyncrona
  // ! Esto se podría reemplazar por un trigger
  avgRatingReference(match.serviceId).then(
    newRating => Service.update(newRating, { where: { id: match.serviceId } })
  )

  return rating
}

const createUserRatingService = async (userId, values) => {
  const { matchId, score, comment } = values

  const match = await findOneMatchService(matchId)

  if (!match) throw new Error('MATCH_NOT_FOUND')
  //if (match.service.userId !== userId) throw new Error('INVALID_USER_MATCH')
  //if (match.status !== MATCH_STATUS.QUALIFY_USER) throw new Error('INVALIDA_STATUS_MATCH')

  const rating = await Rating.create({
    userId, // Soy yo como Service calificador
    matchId,
    type: MATCH_TYPES.USER,
    refId: match.userId,
    score,
    comment
  })

  match.status = MATCH_STATUS.FINISHED
  match.save()

  // Actualizo el rating del servicio
  // ! Esto se podría reemplazar por un trigger
  const newRating = await avgRatingReference(match.userId)
  await User.update(newRating, { where: { id: match.userId } })

  return rating
}

const avgRatingReference = async (refId) => {
  const res = await Rating.findOne({
    where: { refId },
    attributes: [
      [Sequelize.fn('avg', Sequelize.col('score')), 'score'],
      [Sequelize.fn('count', Sequelize.col('id')), 'rating']
    ],
    raw: true,
    group: ['refId']
  })
  return res
}

const findRatinsService = async (refId) => await Rating.findAll({
  where: { refId },
  attributes: ['id', 'score', 'comment', 'createdAt'],
  include: {
    model: User,
    as: 'user',
    attributes: ['firstname', 'lastname', 'email', 'id']
  }
})

module.exports = {
  createServiceRatingService,
  avgRatingReference,
  findRatinsService,
  createUserRatingService

}
