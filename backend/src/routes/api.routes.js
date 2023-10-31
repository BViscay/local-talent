const { Router } = require('express')

const router = Router()

router.use('/auth', require('./auth.routes'))
router.use('/service', require('./service.routes'))
router.use('/category', require('./category.routes'))
router.use('/pay', require('./payment.routes'))

module.exports = router
