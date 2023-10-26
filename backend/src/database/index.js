const { Sequelize } = require('sequelize')

const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: 'postgres',
  logging: false
})

const connectionDatabase = (force) => {
  const User = require('../models/user.model')
  const Service = require('../models/service.model')
  const Category = require('../models/category.model')

  User.hasMany(Service)
  Service.belongsTo(User)

  Category.hasMany(Service, { foreignKey: 'categoryId' })
  Service.belongsTo(Category, { foreignKey: 'categoryId' })

  sequelize.sync({ force })
    .then(() => console.log('db is conected'))
    .catch(error => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
