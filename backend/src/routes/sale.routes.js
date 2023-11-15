const express = require('express')
const { cancelSaleController } = require('../controllers/sales.controller.js')

const router = express.Router()
router.patch('/cancel', cancelSaleController)

module.exports = router