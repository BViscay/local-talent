const { createCategory } = require('../services/category.service')

const CategoryCreateController = async (req, res) => {
    try {
      const result = await createCategory(req.body)
      res.status(200).send("categoria creada con exito")
    } catch ({ message }) {
      res.status(400).json({ message })
    }
}

module.exports = {

    CategoryCreateController

}