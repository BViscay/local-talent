const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Rating extends Model {}

Rating.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  score: {
    type: DataTypes.ENUM,
    values: ['1', '2', '3', '4', '5']
  },
  comment: {
    type: DataTypes.TEXT
  },
  type: {
    type: DataTypes.ENUM,
    values: ['user', 'service']
  }
},
{
  sequelize,
  modelName: 'rating'
})

module.exports = Rating
