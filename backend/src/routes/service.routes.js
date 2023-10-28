const express = require('express')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  ServiceCreateController,
  ServiceFindController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController
} = require('../controllers/service.controller.js')

const router = express.Router()

router.get('/search', ServiceSearchController)

// Rutas del ususario
router.get('/', validateToken, ServiceFindController)
router.post('/', validateToken, ServiceCreateController)
router.patch('/:id', validateToken, ServiceEditController)
router.delete('/:id', validateToken, ServiceDeleteController)

module.exports = router
