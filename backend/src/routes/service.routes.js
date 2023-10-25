const express = require('express')

const {
  ServiceCreateController, ServiceFindController, ServiceEditController,
  ServiceFindByController, ServiceDeleteController
} = require('../controllers/serv.controller.js')

const router = express.Router()

router.get('/', ServiceFindController)
router.get('/:serviceCategory', ServiceFindByController)
router.post('/', ServiceCreateController)
router.put('/', ServiceEditController)
router.delete('/:id', ServiceDeleteController)

module.exports = router
