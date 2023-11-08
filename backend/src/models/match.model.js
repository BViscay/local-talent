const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Service = require('./service.model')
const User = require('./user.model')

class Match extends Model {}

Match.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  serviceId: {
    type: DataTypes.UUID,
    references: {
      model: Service,
      key: 'id'
    }
  },
  message: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM,
    values: ['create', 'cancel', 'accept', 'qualifyUser', 'qualifyServ', 'finished'],
    defaultValue: 'create',
    allowNull: false
  }

},
{
  sequelize,
  modelName: 'match'
}
)

module.exports = Match
