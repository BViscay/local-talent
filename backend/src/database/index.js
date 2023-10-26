const { Sequelize } = require('sequelize')

const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
logging: false,
dialectModule: require('pg'),
})

//const database = process.env.DB_DATABASE
//const userName = process.env.DB_USERNAME
//const host = process.env.DB_HOST
//const password = process.env.DB_PASSWORD

//const sequelize = new Sequelize(database, userName, password, {
//  host,
//  dialect: 'postgres',
//   dialectModule: pg,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
//})

const connectionDatabase = (force) => {
  const User = require('../models/user.model')
  const Service = require('../models/service.model')
  const Category = require('../models/category.model')

  User.hasMany(Service)
  Service.belongsTo(User)

  Category.hasMany(Service, { foreignKey: 'category_id' })
  // Service.belongsTo(Category)

  Service.belongsTo(Category, { foreignKey: 'category_id' })

  sequelize.sync({ force })
    .then(() => console.log('db is conected'))
    .catch(error => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
