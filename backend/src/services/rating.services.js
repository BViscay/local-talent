const Rating = require('../models/rating.model')

const createRating = async ({ score, comment, type, matchId, userId }) => {
  const newRating = await Rating.create({ score, comment, type, matchId, userId })
  return newRating
}

// const serviceRating = async ({ userId, matchId, type }) => {
//   const rating = await Rating.findAll({where: { }})

// }

module.exports = {
  createRating
}
