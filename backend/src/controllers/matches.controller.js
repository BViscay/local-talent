const { createMatch, serviceMatch, matchUser, matchAccept, matchCancelService, matchCancelUser } = require('../services/match.service')

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

const matchAcceptController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await matchAccept({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchCancelServiceController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await matchCancelService({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchCancelUserController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await matchCancelUser({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  matchCreateController,
  matchServiceController,
  matchUserController,
  matchAcceptController,
  matchCancelServiceController,
  matchCancelUserController

}
