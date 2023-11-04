const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const {
  matchCreateController,
  matchServiceController,
  matchUserController,
  matchModifyController
} = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', validateToken, matchCreateController)
router.get('/service', validateToken, matchServiceController)
router.get('/user', validateToken, matchUserController)
router.patch('/', validateToken, matchModifyController)

module.exports = router
