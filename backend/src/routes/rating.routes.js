const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const router = express.Router()

const { createRatingController } = require('../controllers/ratings.controller')

router.post('/', validateToken, createRatingController)

module.exports = router
