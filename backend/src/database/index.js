const { Sequelize } = require('sequelize')

const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
  logging: false,
  dialectModule: require('pg')
})

const connectionDatabase = (force) => {
  const User = require('../models/user.model')
  const Service = require('../models/service.model')
  const Category = require('../models/category.model')
  const ProductModel = require('../models/product.model')
  const SalesModel = require('../models/sales.model')

  User.hasMany(Service, { foreignKey: 'user_id' }) // User puede tener muchos Services
  Service.belongsTo(User, { foreignKey: 'user_id' }) // Cada Service pertenece a un User

  Category.hasMany(Service, { foreignKey: 'category_id' }) // Category puede tener muchos Services
  Service.belongsTo(Category, { foreignKey: 'category_id' }) // Cada Service pertenece a una Category

  SalesModel.belongsTo(User, { foreignKey: 'user_id' }) // Cada Sale pertenece a un User
  SalesModel.belongsTo(ProductModel, { foreignKey: 'product_id' }) // Cada Sale pertenece a un ProductModel

  sequelize
    .sync({ force })
    .then(() => console.log('db is conected'))
    .catch((error) => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
