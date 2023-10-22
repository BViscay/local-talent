const express = require('express')

const {
  ServiceCreateController, ServiceFindController, ServiceEditController,
  ServiceFindByController
} = require('../controllers/serv.controller.js')

const router = express.Router()

router.get('/findAllService', ServiceFindController)
router.get('/findServicesBy/:serviceCategory', ServiceFindByController)
router.post('/createService', ServiceCreateController)
router.put('/editService', ServiceEditController)

module.exports = router
