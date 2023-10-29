const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const Category = require('./category.model');

class Service extends Model {}

Service.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
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
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category', // Nombre del modelo de la categoría
      key: 'id', // Nombre del campo en la tabla de la categoría
    }
    },
  price: {
    type: DataTypes.DOUBLE,
    defaultValue: 0
  },
  city: {
    type: DataTypes.STRING,
    defaultValue: 0
  },
  latitude: {
    type: DataTypes.DOUBLE
  },
  longitude: {
    type: DataTypes.DOUBLE,
    defaultValue: 0
  },
  /* location: {
    type: DataTypes.GEOMETRY('POINT'),
    allowNull: false
  }, */
  score: {
    type: DataTypes.DOUBLE,
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
