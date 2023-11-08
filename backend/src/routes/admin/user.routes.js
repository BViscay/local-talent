const express = require('express')

const { findAllUsersController, findOneUserController, userUpdateController } = require('../../controllers/user.controller.js')

const router = express.Router()

router.get('/', findAllUsersController)
router.get('/:id', findOneUserController)
router.patch('/:id', userUpdateController)

module.exports = router
