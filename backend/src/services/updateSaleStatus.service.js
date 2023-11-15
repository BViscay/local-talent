// const { SalesModel } = require('../models/sales.model')
const { User } = require('../models/user.model')

const updateSaleStatus = async () => {
  try {
    const user = await User.findByPk(userId)

    user.productId = 100
    user.save()

    return user
  } catch (error) {
    console.error('Error al actualizar la venta:', error)
    throw error
  }
}

module.exports = { updateSaleStatus }
