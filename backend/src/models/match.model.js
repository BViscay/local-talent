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
  status: {
    type: DataTypes.ENUM,
    values: ['create', 'cancelar', 'aceptar', 'calificar']
  }
},
{
  sequelize,
  modelName: 'match'
}
)

module.exports = Match