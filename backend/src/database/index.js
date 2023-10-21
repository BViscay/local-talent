const { Sequelize } = require('sequelize')
const service = require('../models/services.model')
// const User = require('../models/user.model')

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
  //! planetscale no permite foreignKey
  /* const Character = require('../models/character.model')
  const Collection = require('../models/collection.model')

  Character.hasMany(Collection, {
    foreignKey: {
      name: 'idCharacter',
      allowNull: false
    },
    onDelete: 'CASCADE'
  })

  Collection.belongsTo(Character, { foreignKey: 'idCharacter' }) */

  service(sequelize)
  sequelize.sync({force})
    .then(() => console.log('db is conected'))
    .catch(error => console.error('Unable to connect to the database', error.message))
}



module.exports = { sequelize, connectionDatabase }
