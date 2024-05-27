'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    gender: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    origin: DataTypes.STRING,
    status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};