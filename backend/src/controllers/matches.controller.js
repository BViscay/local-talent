const { createMach, serviceMatch, modifyMatch } = require('../services/mach.service')

const matchCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await createMach({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchSeeServiceController = async (req, res) => {
  try {
    const { serviceId } = req.params
    const result = await serviceMatch(serviceId)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const matchModifyController = async (req, res) => {
  try {
    console.log(req.query)
    const result = await modifyMatch({ ...req.query })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  matchCreateController,
  matchSeeServiceController,
  matchModifyController

}
