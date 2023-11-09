const express = require('express')

const { validateId } = require('../validators/notification.validator.js')

const {
  countNewUserNotificationController,
  findNewsNotificationsController,
  readOneNotificationController,
  cleanAllNotificationsController
} = require('../controllers/notification.controller.js')

const router = express.Router()

// Rutas de notificaciones
router.get('/look', countNewUserNotificationController)
router.get('/news', findNewsNotificationsController)
router.patch('/:id', validateId, readOneNotificationController)
router.patch('/', cleanAllNotificationsController)

module.exports = router
