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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title is required!'
        },
        notNull: {
          msg: 'Title is required!'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Price is required!'
        },
        notNull: {
          msg: 'Price is required!'
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Genre is required!'
        },
        notNull: {
          msg: 'Genre is required!'
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Author is required!'
        },
        notNull: {
          msg: 'Author is required!'
        }
      }
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'ISBN is required!'
        },
        notNull: {
          msg: 'ISBN is required!'
        }
      }
    },
    totalPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Total Page is required!'
        },
        notNull: {
          msg: 'Total Page is required!'
        }
      }
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Publisher is required!'
        },
        notNull: {
          msg: 'Publisher is required!'
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Stock is required!'
        },
        notNull: {
          msg: 'Stock is required!'
        }
      }
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Image URL is required!'
        },
        notNull: {
          msg: 'Image URL is required!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Comic',
  });
  return Comic;
};