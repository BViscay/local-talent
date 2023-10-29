const { Router } = require('express')

const router = Router()

router.use('/auth', require('./auth.routes'))
router.use('/service', require('./service.routes'))
router.use('/category', require('./category.routes'))
router.use('/match', require('./match.routes'))

module.exports = router
