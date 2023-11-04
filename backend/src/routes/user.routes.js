const express = require('express')
const { validateToken } = require('../middlewares/auth.middleware.js')
const { userImageController, userModifyController } = require('../controllers/user.controller.js')

const router = express.Router()

router.put('/image', validateToken, userImageController)
router.put('/', validateToken, userModifyController)

module.exports = router
