const Category = require('../models/category.model')

const createCategory = async (data) => {
  console.log(data)
  const { name, description, icon } = data

  // Creamos una nueva categoria
  const newCategory = Category.create({ name, description, icon })
  return newCategory
}

const findCategoriesServices = async (where) => await Category.findAll()

module.exports = {
  createCategory,
  findCategoriesServices
}
