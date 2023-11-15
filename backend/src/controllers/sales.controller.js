// sales.controller.js

const { createSale } = require('../services/sale.service')
const { updateSaleStatus } = require('../services/updateSaleStatus.service.js')

const saleCreateController = async (req, res) => {
  try {
    const { product, userId } = req.params
    const newSale = await createSale(userId, product)
    res.redirect('https://pg-henry-local-talent.vercel.app/')
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateSaleStatusController = async (req, res) => {
  try {
    console.log('estoy en el controller')
    const { userId } = req.headers.session
    const updatedSale = await updateSaleStatus(userId)
    
    res.status(200).json(updatedSale)
  } catch (error) {
    console.error('Error al cancelar la suscripcion:', error)
    res.status(500).json({ error: true, msg: 'Failed to update sale status' })
  }
}

module.exports = {
  saleCreateController,
  updateSaleStatusController
}
