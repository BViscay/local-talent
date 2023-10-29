const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frequency_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaction_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    currency_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    back_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payer_email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'product'
  }
)

module.exports = ProductModel
