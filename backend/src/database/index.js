const { Sequelize } = require('sequelize')

const database = process.env.DB_DATABASE
const userName = process.env.DB_USERNAME
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize(database, userName, password, {
  host,
  dialect: 'postgres'
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
})

const connectionDatabase = (force) => {
  const User = require('../models/user.model')
  const Service = require('../models/service.model')

  User.hasMany(Service)
  Service.belongsTo(User)

  sequelize.sync({ force })
    .then(() => console.log('db is conected'))
    .catch(error => console.error('Unable to connect to the database', error.message))
}

module.exports = { sequelize, connectionDatabase }
