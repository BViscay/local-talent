const express = require('express')

const {
  userImageController,
  userUpdateController,
  changePasswordController
} = require('../controllers/user.controller.js')

const router = express.Router()

router.put('/image', userImageController)
router.put('/', userUpdateController)
router.patch('/password', changePasswordController)

module.exports = router
