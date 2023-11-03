const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware.js')
const { userImageController } = require('../controllers/user.controller.js')

const router = express.Router()

router.put('/image', validateToken, userImageController)

module.exports = router
