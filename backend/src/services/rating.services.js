const Rating = require('../models/rating.model')

const createRating = async ({ userId, score, type, matchId }) => {
  const newRating = await Rating.create({ userId, score, type, matchId })
  return newRating
}

module.exports = {
  createRating
}
