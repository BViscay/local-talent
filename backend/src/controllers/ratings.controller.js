const { createRating, serviceRating, userRating } = require('../services/rating.service')

const createRatingController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createRating({ userId, ...req.body })
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ratingServiceController = async (req, res) => {
  try {
    const result = await serviceRating({ ...req.query })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ratingUserController = async (req, res) => {
  try {
    const result = await userRating({ ...req.query })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const ratingController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await serviceRating(userId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  createRatingController,
  ratingServiceController,
  ratingUserController,
  ratingController

}
