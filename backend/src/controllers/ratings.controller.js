const { ratingCreate } = require('../services/ratings.servce')

const ratingCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await ratingCreate({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

// const ratingScore = async (req, res) => {

// }

module.exports = {
  ratingCreateController
}
