const express = require('express')
const{findALLsalesController} = require('../../controllers/sales.controller')

const router = express.Router()

router.get('/', findALLsalesController)

module.exports = router
