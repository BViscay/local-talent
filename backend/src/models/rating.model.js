const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = require('./user.model')
const Match = require('./match.model')
const Service = require('./service.model')

class Rating extends Model {}

Rating.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  matchId: {
    type: DataTypes.UUID,
    references: {
      model: Match,
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  },
  type: {
    type: DataTypes.ENUM,
    values: ['user', 'service']
  },
  refId: {
    type: DataTypes.UUID,
    references: {
      model: Service,
      key: 'id'
    }
  },
  score: {
    type: DataTypes.INTEGER
  },
  comment: {
    type: DataTypes.TEXT
  }
},
{
  sequelize,
  modelName: 'rating'
})

module.exports = Rating
