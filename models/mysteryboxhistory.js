'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MysteryBoxHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MysteryBoxHistory.init({
    name: DataTypes.STRING,
    compatibility_percentage: DataTypes.STRING,
    feedback: DataTypes.STRING,
    price: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'MysteryBoxHistory',
  });
  return MysteryBoxHistory;
};