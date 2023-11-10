const express = require('express')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  ServiceCreateController,
  findUserServicesController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController,
  ServiceFindALLController,
  findServiceByIdController,
  findServiceRatingController
} = require('../controllers/service.controller.js')
const { ValidateCreateService } = require('../validators/service.validator.js')

const router = express.Router()

// Rutas públicas
router.get('/search', ServiceSearchController)
router.get('/:id', findServiceByIdController)
router.get('/:id/rating', findServiceRatingController)

// Rutas del ususario
router.get('/', validateToken, findUserServicesController)
router.post('/', ValidateCreateService, validateToken, ServiceCreateController)
router.patch('/:id', validateToken, ServiceEditController)
router.delete('/:id', validateToken, ServiceDeleteController)

// Rutas a pedido FRONT
router.get('/allservices', ServiceFindALLController)

module.exports = router
