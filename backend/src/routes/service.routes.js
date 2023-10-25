const express = require('express')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  ServiceCreateController,
  ServiceFindController,
  ServiceEditController,
  ServiceFindByController,
  ServiceDeleteController
} = require('../controllers/service.controller.js')

const router = express.Router()

router.get('/search', ServiceFindByController)

router.get('/', validateToken, ServiceFindController)
router.post('/', validateToken, ServiceCreateController)
router.put('/', validateToken, ServiceEditController)
router.delete('/:id', validateToken, ServiceDeleteController)

module.exports = router
