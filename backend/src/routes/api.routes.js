const { Router } = require('express')

const router = Router()

router.use('/auth', require('./auth.routes'))
router.use('/service', require('./service.routes'))
router.use('/category', require('./category.routes'))
router.use('/match', require('./match.routes'))
router.use('/pay', require('./payment.routes'))
router.use('/notification', require('./notification.routes'))
router.use('/rating', require('./rating.routes'))

module.exports = router
