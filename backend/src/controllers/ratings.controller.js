const { createRating, getRatings } = require('../services/ratings.service')

const createRatingController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createRating({ userId, ...req.body })
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ratingAllController = async (req, res) => {
  try {
    const result = await getRatings(req.params)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

// const userRatingController = async (req, res) => {
//   try {
//     const { userId } = req.headers.session
//     const result = await userRating(userId)
//     res.status(200).json(result)
//   } catch ({ message }) {
//     res.status(400).json({ message })
//   }
// }

module.exports = {
  createRatingController,
  ratingAllController
}
