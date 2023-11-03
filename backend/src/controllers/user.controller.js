const { userImage } = require('../services/user.service')

const userImageController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await userImage(req.files, userId)
    res.status(201).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  userImageController

}
