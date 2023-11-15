const Sale = require('../models/sales.model.js')
const User = require('../models/user.model')
const { PRODUCTS_TYPES } = require('../config/constants')

const createSale = async (userId, product) => {
  console.log('estoy en el controller')
  const user = await User.findByPk(userId)
  newSale = await Sale.create({
    userId,
    productId: PRODUCTS_TYPES[product]
  })

  user.productId = newSale.productId
  user.save()
  return (newSale)
}

module.exports = {
  createSale
}
