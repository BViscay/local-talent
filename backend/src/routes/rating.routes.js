const express = require('express')
const router = express.Router()

const {
  createUserRatingController,
  createServiceRatingController,
  ratingController,
  avgRatingController
} = require('../controllers/ratings.controller')

router.get('/:refId', avgRatingController)

router.post('/service', createServiceRatingController)
router.post('/user', createUserRatingController)

router.get('/', ratingController)

module.exports = router
