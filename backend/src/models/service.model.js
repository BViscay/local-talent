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
  image_public_id: {
    type: DataTypes.STRING
  },
  image_secure_url: {
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
