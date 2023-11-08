const Notification = require('../models/notification.model')

const createNotificationService = async ({ userId, refId, type }) =>
  await Notification.create({ userId, refId, type })

const findUserNotificationService = async (userId, query) =>
  await Notification.findAll({
    where: { userId, ...query }
  })

const countNewUserNotificationsService = (userId) =>
  Notification.count({ where: { userId, status: 0 } })

const clearNewUserNotificationsService = (userId) =>
  Notification.update({ status: 1 }, { userId })

const updateNotificationServiceService = (where) => {
  const res = Notification.update({ status: 1 }, { where })
  if (!res) throw new Error('NOTIFICATION_NOT_FOUND')
  return res
}

module.exports = {
  createNotificationService,
  findUserNotificationService,
  countNewUserNotificationsService,
  clearNewUserNotificationsService,
  updateNotificationServiceService
}
