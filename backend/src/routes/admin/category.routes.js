const express = require('express')

const { createCategoryController, findAllCagoriesService, updateCategoryController, deleteCategoryController } = require('../../controllers/category.controller.js')

const router = express.Router()

router.get('/', findAllCagoriesService)
router.post('/', createCategoryController)
router.patch('/:id', updateCategoryController)
router.delete('/:id', deleteCategoryController)

module.exports = router
