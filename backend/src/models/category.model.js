const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    require: true
  },
  description: {
    type: DataTypes.TEXT
  },
  icon: {
    type: DataTypes.STRING,
    require: true
  }

},
{
  sequelize,
  modelName: 'category'
})

module.exports = Category
