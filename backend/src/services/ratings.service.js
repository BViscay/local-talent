const Rating = require('../models/rating.model')
const { modifyMatch } = require('./match.service')

const ratingCreate = async (data) => {
  const { status, id, ...restData } = data
  await modifyMatch({ status, id })
  const rating = await Rating.create({ id, restData })
  return rating
}

module.exports = {
  ratingCreate
}
