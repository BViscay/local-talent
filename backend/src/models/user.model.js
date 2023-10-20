const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const bcrypt = require('bcrypt')

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
  }
},
{
  hooks: {
    beforeCreate: async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10)
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
