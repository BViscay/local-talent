const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./user.model')

class Service extends Model {}

Service.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  refId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
},
{
  sequelize,
  modelName: 'notification'
})

module.exports = Service
