const { findOneMatchService } = require('../services/match.service')

const verifyUserMatch = async (req, res, next) => {
  try {
    // const { userId } = req.session
    const { matchId } = req.body

    const match = await findOneMatchService(matchId)

    res.json(match)
  } catch ({ message }) {
    res.status(403).json({ message })
  }
}

module.exports = { verifyUserMatch }
