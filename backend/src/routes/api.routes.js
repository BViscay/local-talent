const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => { res.send('hola mundo') })
router.use('/auth', require('./auth.routes'))

module.exports = router
