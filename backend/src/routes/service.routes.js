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
  findServiceRatingController,
  serviceImagenModifyController
} = require('../controllers/service.controller.js')
const { ValidateCreateService } = require('../validators/service.validator.js')

const router = express.Router()

// Rutas públicas
router.get('/allservices', ServiceFindALLController)
router.get('/search', ServiceSearchController)
router.get('/:id', findServiceByIdController)
router.get('/:id/rating', findServiceRatingController)

// Rutas del ususario
router.get('/', validateToken, findUserServicesController)
router.post('/', validateToken, ValidateCreateService, ServiceCreateController)
router.patch('/:id', validateToken, ServiceEditController)
router.patch('/image/:id', validateToken, serviceImagenModifyController)
router.delete('/:id', validateToken, ServiceDeleteController)

module.exports = router
