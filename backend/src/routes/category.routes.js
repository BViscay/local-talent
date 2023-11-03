const express = require('express')

const { categoryCreateController, findCategoriesController } = require('../controllers/category.controller.js')

const router = express.Router()

router.get('/', findCategoriesController)
router.post('/', categoryCreateController)

module.exports = router
