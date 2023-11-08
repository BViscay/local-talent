const { createCategoryService, findCategoriesServices, updateCategoryService } = require('../services/category.service')

const createCategoryController = async (req, res) => {
  try {
    const result = await createCategoryService(req.body)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findAllCagoriesService = async (req, res) => {
  try {
    const result = await findCategoriesServices()
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params
    const result = await updateCategoryService(req.body, id)
    res.status(200).json({ message: result })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  findAllCagoriesService,
  createCategoryController,
  updateCategoryController
}
