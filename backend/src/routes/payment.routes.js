const express = require('express')
const router = express.Router()
const PaymentController = require('../controllers/payment.controller.js')
const { saleCreateController } = require('../controllers/sales.controller.js')

const PaymentService = require('../services/payment.service.js')
const PaymentInstance = new PaymentController(new PaymentService())

const { validateToken } = require('../middlewares/auth.middleware.js')


router.get('/', function (req, res, next) {
  return res.json({
    '/payment': 'generate a payment link',
    '/subscription': 'generate a subscription link'
  })
})

router.get('/payment', function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res)
})

router.get('/subscriptiongold', validateToken, function (req, res, next) {
  PaymentInstance.getSubscriptionLinkGold(req, res)
})

router.get('/subscriptionsilver', validateToken, function (req, res, next) {
  PaymentInstance.getSubscriptionLinkSilver(req, res)
})

router.get('/success/:product/:userId', saleCreateController)

module.exports = router
