const { Router } = require('express')
const { createSubscription } = require('../controllers/payment.controller')

const router = Router()

router.get('/create-subscription', createSubscription)

// router.get('/success', (req, res) => {
//   res.send('creating success')
// })

// router.get('/webhook', (req, res) => {
//   res.send('creating subscription')
// })

module.exports = router
