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

  User.hasMany(Service)
  Service.belongsTo(User)

  Category.hasMany(Service, { foreignKey: 'categoryId' })
<<<<<<< HEAD
  // Service.belongsTo(Category)
=======
>>>>>>> 0358e5fbc591a4b9a44c258b958858bbccd2a159
  Service.belongsTo(Category, { foreignKey: 'categoryId' })

  User.hasMany(Match)
  Match.belongsTo(User)

  Service.hasMany(Match)
  Match.belongsTo(Service)

  sequelize.sync({ force })
    .then(() => console.log('db is conected'))
    .catch(error => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
