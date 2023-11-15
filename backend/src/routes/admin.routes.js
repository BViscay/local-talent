const express = require('express')

const router = express.Router()

router.use('/user', require('./admin/user.routes'))
router.use('/category', require('./admin/category.routes'))
router.use('/service', require('./admin/service.routes'))
router.use('/sales', require('./admin/sale.routes'))

module.exports = router
