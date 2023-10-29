const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const { matchCreateController, matchSeeServiceController, matchModifyController } = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', validateToken, matchCreateController)
router.get('/:serviceId', validateToken, matchSeeServiceController)
router.put('/', validateToken, matchModifyController)

module.exports = router
