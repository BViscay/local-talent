const express = require('express')
const router = express.Router()
const PaymentController = require('../controllers/payment.controller.js')
const PaymentService = require('../services/payment.service.js')
const PaymentInstance = new PaymentController(new PaymentService())

const SalesModel = require('../models/sales.model.js')

router.get('/', function (req, res, next) {
  return res.json({
    '/payment': 'generate a payment link',
    '/subscription': 'generate a subscription link'
  })
})

router.get('/payment', function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res)
})

router.get('/subscriptiongold', function (req, res, next) {
  PaymentInstance.getSubscriptionLinkGold(req, res)
})

router.get('/subscriptionsilver', function (req, res, next) {
  PaymentInstance.getSubscriptionLinkSilver(req, res)
})

router.get('/success/:user_id/:product_id', async function (req, res, next) {
  const { user_id, product_id } = req.params
  const newSale = await SalesModel.create({
    user_id,
    product_id,
    period: 3
  })

  res.redirect('https://pg-henry-local-talent.vercel.app/')
})
module.exports = router
