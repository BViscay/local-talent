const { Router } = require('express')

const { validateAdminRol, validateToken } = require('../middlewares/auth.middleware')

const router = Router()

router.use('/admin', validateAdminRol, require('./admin.routes'))

router.use('/auth', require('./auth.routes'))

router.use('/service', require('./service.routes'))

router.use('/category', require('./category.routes'))

router.use('/match', validateToken, require('./match.routes'))

//! VER ESTO QUE NO ESTA BIEN
router.use('/pay', require('./payment.routes'))

router.use('/notification', validateToken, require('./notification.routes'))

router.use('/user', require('./user.routes'))

router.use('/rating', validateToken, require('./rating.routes'))

router.use('/sales', validateToken, require('./sale.routes'))

module.exports = router
