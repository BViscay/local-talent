const { createRating } = require('../services/rating.services')

const createRatingController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createRating({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  createRatingController
}
