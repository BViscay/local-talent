const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const { matchCreateController, matchSeeServiceController, matchModifyController } = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', validateToken, matchCreateController)
router.get('/service', validateToken, matchSeeServiceController)
// router.get('/user/:matchId')
router.put('/', validateToken, matchModifyController)
// router

module.exports = router
