const { createSale } = require('../services/sale.service')

const saleCreateController = async (req, res) => {
  try {
    const { product, userId } = req.params
    await createSale(userId, product)
    res.redirect('https://pg-henry-local-talent.vercel.app/')
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
    saleCreateController
}
