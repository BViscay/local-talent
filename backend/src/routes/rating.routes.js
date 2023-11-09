const express = require('express')
const router = express.Router()

const {
  createUserRatingController,
  createServiceRatingController,
  ratingServiceController,
  ratingUserController,
  ratingController,
  avgRatingController
} = require('../controllers/ratings.controller')

router.get('/service', ratingServiceController)
router.get('/user', ratingUserController)

router.get('/:refId', avgRatingController)

router.post('/service', createServiceRatingController)
router.post('/user', createUserRatingController)

router.get('/', ratingController)

module.exports = router
