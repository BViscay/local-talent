const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Service extends Model {}

Service.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER
  },
  category_id: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING,
    require: true
  },
  price: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  city: {
    type: DataTypes.STRING,
    defaultValue: 0
  },
  latitude: {
    type: DataTypes.FLOAT
  },
  longitude: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  score: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
},
{
  sequelize,
  modelName: 'service'
})

module.exports = Service
