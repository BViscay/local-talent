const { createMatch, serviceMatch, matchUser, modifyMatch } = require('../services/match.service')

const matchCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createMatch({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchServiceController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await serviceMatch(userId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchUserController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await matchUser(userId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchModifyController = async (req, res) => {
  try {
    const result = await modifyMatch({ ...req.query })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  matchCreateController,
  matchServiceController,
  matchUserController,
  matchModifyController
}
