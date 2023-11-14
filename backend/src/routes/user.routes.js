const express = require('express')

const {
  userImageController,
  userUpdateController,
  changePasswordController,
  userRatingController
} = require('../controllers/user.controller.js')
// const { validToken } = require('../libs/handleToken.js')
const { validateToken } = require('../middlewares/auth.middleware.js')

const router = express.Router()

// rutas publicas
router.get('/:id/rating', userRatingController)

// rutas privadas
router.put('/image', validateToken, userImageController)
router.put('/', validateToken, userUpdateController)
router.patch('/password', validateToken, changePasswordController)

module.exports = router
