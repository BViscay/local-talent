const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class SalesModel extends Model {}

SalesModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  period: {
    type: DataTypes.DATEONLY,
    defaultValue: new Date()
  },
  quanty: {
    type: DataTypes.DECIMAL,
    validate: { min: 0 }
  },
  traker_id: {
    type: DataTypes.CHAR,
    unique: 'traker'
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  create_ad: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  }
},
{
  sequelize,
  modelName: 'sales'
}
)

module.exports = SalesModel
