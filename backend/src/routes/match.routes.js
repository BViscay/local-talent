const express = require('express')

const {
  matchCreateController,
  matchServiceController,
  matchUserController,
  matchModifyController
} = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', matchCreateController)
router.get('/service', matchServiceController)
router.get('/user', matchUserController)
router.patch('/', matchModifyController)

module.exports = router
