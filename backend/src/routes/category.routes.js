const express = require('express')

const { CategoryCreateController } = require('../controllers/category.controller.js')

const router = express.Router()

router.post('/createCategory', CategoryCreateController)

module.exports = router