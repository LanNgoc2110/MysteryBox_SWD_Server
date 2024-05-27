'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mysterybox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mysterybox.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    priceAvarage: DataTypes.STRING,
    description: DataTypes.STRING,
    qrCode: DataTypes.STRING,
    quantityProInBox: DataTypes.STRING,
    status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Mysterybox',
  });
  return Mysterybox;
};