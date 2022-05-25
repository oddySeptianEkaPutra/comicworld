'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comic.hasMany(models.Transaction, {foreignKey: 'ComicId'})
    }
  }
  Comic.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    totalPage: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    imgurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comic',
  });
  return Comic;
};