const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class ProductModel extends Model {}

ProductModel.init({
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
  }
},
{
  sequelize,
  modelName: 'product'
}
)

module.exports = ProductModel
