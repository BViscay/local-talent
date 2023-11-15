const Sale = require('../models/sales.model.js')
const User = require('../models/user.model')
const Product = require('../models/product.model.js')
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

const cancelSale = async (userId) => {

    const user = await User.findByPk(userId)
    user.productId = PRODUCTS_TYPES.NO_SUBSCRIPTION
    user.save()

    await Sale.destroy({ where: { userId } })
    
    return user
}

const allSales = async () => {
    const sales = await Sale.findAll({
      attributes: { exclude: ['deletedAt','updatedAt'] },
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['description']
        },
        {
          model: User,
          as: 'user',
          attributes: ['firstname', 'lastname', 'email']
        }
      ]      
    })
    const salesCount = await Sale.count();
    return { sales, salesCount }
}

module.exports = {
    createSale,
    cancelSale,
    allSales
}
