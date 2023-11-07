const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const router = express.Router()

const { createRatingController, ratingServiceController, ratingUserController, ratingController } = require('../controllers/ratings.controller')

router.post('/', validateToken, createRatingController)
router.get('/service', validateToken, ratingServiceController)
router.get('/user', validateToken, ratingUserController)
router.get('/', validateToken, ratingController)

module.exports = router
