const { createCategory, findCategoriesServices } = require('../services/category.service')

const categoryCreateController = async (req, res) => {
  try {
    console.log(req.body)
    const result = await createCategory(req.body)
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findCategoriesController = async (req, res) => {
  try {
    const result = await findCategoriesServices()
    res.status(200).json(result)
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

module.exports = {
  findCategoriesController,
  categoryCreateController
}
