const express = require('express')

const {
  userImageController,
  userUpdateController,
  changePasswordController,
  userRatingController
} = require('../controllers/user.controller.js')
const { validToken } = require('../libs/handleToken.js')

const router = express.Router()

// rutas publicas
router.get('/:id/rating', userRatingController)

// rutas privadas
router.put('/image', validToken, userImageController)
router.put('/', validToken, userUpdateController)
router.patch('/password', validToken, changePasswordController)

module.exports = router
