const express = require('express')

const {
  matchCreateController,
  matchServiceController,
  matchUserController,
  matchAcceptController,
  matchCancelServiceController,
  matchCancelUserController
} = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', matchCreateController)
router.get('/service', matchServiceController)
router.get('/user', matchUserController)

router.patch('/accept', matchAcceptController)
router.patch('/cancel/service', matchCancelServiceController)
router.patch('/cancel/user', matchCancelUserController)

module.exports = router
