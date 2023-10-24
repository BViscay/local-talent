const express = require('express')

const {
  ServiceCreateController, ServiceFindController, ServiceEditController,
  ServiceFindByController, ServiceDeleteController
} = require('../controllers/serv.controller.js')

const router = express.Router()

router.get('/findAllService', ServiceFindController)
router.get('/findServicesBy/:serviceCategory', ServiceFindByController)
router.post('/createService', ServiceCreateController)
router.put('/editService', ServiceEditController)
router.delete('/:id', ServiceDeleteController)

module.exports = router
