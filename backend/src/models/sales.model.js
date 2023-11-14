const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./user.model')
const Product = require('./product.model')

class SalesModel extends Model {}

SalesModel.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  period: {
    type: DataTypes.INTEGER,
  },
  quanty: {
    type: DataTypes.DECIMAL,
    validate: { min: 0 }
  },
  trakerId: {
    type: DataTypes.CHAR,
    unique: 'traker'
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
},
{
  sequelize,
  modelName: 'sales'
}
)

module.exports = SalesModel
