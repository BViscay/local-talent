const { createMach } = require('../services/mach.service')

const matchCreateController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    console.log(userId)
    const result = await createMach({ userId, ...req.body })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  matchCreateController
}
