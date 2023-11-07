const express = require('express')

const { validateToken } = require('../middlewares/auth.middleware.js')

const {
  ServiceCreateController,
  findUserServicesController,
  ServiceEditController,
  ServiceSearchController,
  ServiceDeleteController,

  ServiceFindALLController,
  CreateRatingService
} = require('../controllers/service.controller.js')

const router = express.Router()

router.get('/search', ServiceSearchController)

// Rutas del ususario
router.get('/', validateToken, findUserServicesController)
router.post('/', validateToken, ServiceCreateController)
router.patch('/:id', validateToken, ServiceEditController)
router.delete('/:id', validateToken, ServiceDeleteController)
router.post('/:id/rating/:matchId', validateToken, CreateRatingService)

// Rutas a pedido FRONT
router.get('/allservices', ServiceFindALLController)

module.exports = router
