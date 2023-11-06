const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const router = express.Router()

const { createRatingController, ratingAllController } = require('../controllers/ratings.controller')

router.post('/', validateToken, createRatingController)
router.get('/', validateToken, ratingAllController)
// router.get('/user', validateToken, userRatingController)

module.exports = router
