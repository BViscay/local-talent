const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    whatsapp: {
      type: DataTypes.STRING
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    score: {
      type: DataTypes.FLOAT
    },
    rating: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
