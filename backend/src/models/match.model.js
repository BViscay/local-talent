const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Match extends Model {}

Match.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
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
