const express = require('express')

const { ServiceFindALLController, deleteServiceController } = require('../../controllers/service.controller')

const router = express.Router()

router.get('/', ServiceFindALLController)
router.delete('/:id', deleteServiceController)

module.exports = router
