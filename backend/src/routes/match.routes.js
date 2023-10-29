const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware')
const { matchCreateController } = require('../controllers/matches.controller')

const router = express.Router()

router.post('/', validateToken, matchCreateController)

module.exports = router
