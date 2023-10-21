const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => { res.send('hola mundo ( Diego3 )') })

module.exports = router
