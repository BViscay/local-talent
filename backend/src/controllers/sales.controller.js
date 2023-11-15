
const { createSale, cancelSale, allSales } = require('../services/sale.service')


const saleCreateController = async (req, res) => {
  try {
    const { product, userId } = req.params
    const newSale = await createSale(userId, product)
    res.redirect('https://pg-henry-local-talent.vercel.app/')
  } catch ({ message }) {
    res.status(400).json({ message })
  }
}


const cancelSaleController = async (req, res) => {
  try {
    const { userId } = req.headers.session
    const result = await cancelSale(userId)
    res.status(200).json(result)

  } catch ({ message }) {
    res.status(400).json({ message })
  }
}

const findALLsalesController = async (req, res) => {
  try {
    const result = await allSales()
    res.status(200).json(result)

  } catch ({ message }) {
    res.status(400).json({ message })
  }
}



module.exports = {
    saleCreateController,
    cancelSaleController,
    findALLsalesController

}
