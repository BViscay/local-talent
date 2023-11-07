const express = require('express')

const { findAllCagoriesService } = require('../controllers/category.controller.js')

const router = express.Router()

router.get('/', findAllCagoriesService)

module.exports = router
