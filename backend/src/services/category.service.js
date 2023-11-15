const Category = require('../models/category.model')

const createCategoryService = async (data) => {
  const { id, name, description, icon } = data
  // Creamos una nueva categoria
  const newCategory = Category.create({ id, name, description, icon })
  return newCategory
}

const findCategoriesServices = async (where) => await Category.findAll()

const updateCategoryService = async (values, categoryId) => {
  const result = await Category.update(values, { where: { id: categoryId } })
  if (result[0] === 0) throw new Error('CATEGORY_NOT_FOUND')
  return true
}

module.exports = {
  createCategoryService,
  findCategoriesServices,
  updateCategoryService
}
