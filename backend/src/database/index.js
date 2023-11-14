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
  const Match = require('../models/match.model')
  const Rating = require('../models/rating.model')
  const ProductModel = require('../models/product.model')
  const SalesModel = require('../models/sales.model')

  // CAMBIOS DIEGO
  User.hasMany(Service, {
    foreignKey: 'userId',
    as: 'services' // Este es el alias que usaremos para acceder a los servicios de un usuario
  })
  Service.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user' // Este es el alias que usaremos para acceder al modelo User en la consulta
  })

  User.hasMany(Match)
  Match.belongsTo(User)

  Service.hasMany(Match)
  Match.belongsTo(Service, { foreignKey: 'serviceId' })
  Match.belongsTo(User, { foreignKey: 'userId' })

  Match.hasMany(Rating, { foreignKey: 'matchId' })
  Rating.belongsTo(Match, { foreignKey: 'matchId' })
  Rating.belongsTo(User, { foreignKey: 'userId' })

  Category.hasMany(Service, { foreignKey: 'categoryId' }) // Category puede tener muchos Services
  Service.belongsTo(Category, { foreignKey: 'categoryId' }) // Cada Service pertenece a una Category

  SalesModel.belongsTo(User, { foreignKey: 'userId' }) // Cada Sale pertenece a un User
  SalesModel.belongsTo(ProductModel, { foreignKey: 'productId' }) // Cada Sale pertenece a un ProductModel

  sequelize
    .sync({ force })
    .then(() => console.log('db is conected'))
    .catch((error) => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
