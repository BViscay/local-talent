const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')

class Service extends Model {}

Service.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  image: {
    type: DataTypes.STRING
  },
  imageId: {
    type: DataTypes.STRING
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
