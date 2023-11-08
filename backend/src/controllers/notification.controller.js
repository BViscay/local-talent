const {
  countNewUserNotificationsService,
  findUserNotificationService,
  updateNotificationServiceService
} = require('../services/notification.service')

const countNewUserNotificationController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const newNotifications = await countNewUserNotificationsService(userId)
    res.status(200).json({ newNotifications })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findNewsNotificationsController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await findUserNotificationService(userId, { status: 0 })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const readOneNotificationController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const { id } = req.params
    const result = await updateNotificationServiceService({ id, userId, status: 0 })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const cleanAllNotificationsController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await updateNotificationServiceService({ userId, status: 0 })
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  countNewUserNotificationController,
  findNewsNotificationsController,
  readOneNotificationController,
  cleanAllNotificationsController
}
