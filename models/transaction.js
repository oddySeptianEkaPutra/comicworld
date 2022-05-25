'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: 'UserId' })
      Transaction.belongsTo(models.Comic, { foreignKey: 'ComicId' })
    }
  }
  Transaction.init({
    transactionNumber: DataTypes.STRING,
    dateTransaction: DataTypes.DATE,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    ComicId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};