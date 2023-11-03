const express = require('express')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  countNewUserNotificationController,
  findNewsNotificationsController
} = require('../controllers/notification.controller.js')

const router = express.Router()

// Rutas del ususario
router.get('/look', validateToken, countNewUserNotificationController)
router.get('/news', validateToken, findNewsNotificationsController)
router.patch('/:id', validateToken, findNewsNotificationsController)

module.exports = router
