const express = require('express')

const { validateId } = require('../validators/notification.validator.js')
const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  countNewUserNotificationController,
  findNewsNotificationsController,
  readOneNotificationController,
  cleanAllNotificationsController
} = require('../controllers/notification.controller.js')

const router = express.Router()

// Rutas de notificaciones
router.get('/look', validateToken, countNewUserNotificationController)
router.get('/news', validateToken, findNewsNotificationsController)
router.patch('/:id', validateId, validateToken, readOneNotificationController)
router.patch('/', validateToken, cleanAllNotificationsController)

module.exports = router
