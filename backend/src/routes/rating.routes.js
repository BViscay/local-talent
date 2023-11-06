const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const router = express.Router()

const { createRatingController, serviceRatingController } = require('../controllers/ratings.controller')

router.post('/', validateToken, createRatingController)
router.get('/service', validateToken, serviceRatingController)

module.exports = router
