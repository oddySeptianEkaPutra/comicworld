'use strict';

const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Transaction, {foreignKey: 'UserId'})
      User.hasOne(models.Profile, {foreignKey: 'UserId'})
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(data, option){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt)
        data.password = hash
      }
    }
  });
  return User;
};