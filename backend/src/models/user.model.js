const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const bcrypt = require('bcrypt')
const { hashPassword } = require('../libs/handleEncrynpt')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    require: true,
    unique: true
  },
  whatsapp: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    require: true
  },
  image: {
    type: DataTypes.STRING
  },
  score: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  validator: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  rol: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user'
  }
},
{
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await hashPassword(user.password)
      user.password = hashedPassword
    }
  },
  sequelize,
  modelName: 'user'
})

User.prototype.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = User
