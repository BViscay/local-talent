const Match = require('../models/match.model')
const Rating = require('../models/rating.model')

const createRating = async ({ score, comment, type, matchId, userId }) => {
  const newRating = await Rating.create({ score, comment, type, matchId, userId })
  return newRating
}

// const serviceRating = async (serviceId, type) => {
//   const ratings = await Match.findAll({
//     where: { serviceId },
//     include: [{ model: Rating, as: 'rating', where: { type } }]
//   })
//   return ratings
// }

// const userRating = async (matchId, type) => {
//   const ratings = await Match.findAll({
//     where: { matchId },
//     include: [{ model: Rating, as: 'rating', where: { type } }]
//   })
//   return ratings
// }

const getRatings = async (id, type) => {
  const whereClause = type === 'service' ? { serviceId: id } : { matchId: id }
  const ratings = await Match.findAll({
    where: whereClause,
    include: [{
      model: Rating,
      as: 'rating',
      where: { type },
      attributes: ['id', 'score', 'comment']
    }]
  })
  return ratings
}

module.exports = {
  createRating,
  getRatings
}
