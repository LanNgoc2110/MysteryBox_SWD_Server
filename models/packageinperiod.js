"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PackageInPeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PackageInPeriod.init(
    {
      periodId: DataTypes.UUID,
      boxId: DataTypes.UUID,
      packageOrderId: DataTypes.INTEGER,
      endBy: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "FINISHED"],
      },
    },
    {
      sequelize,
      modelName: "PackageInPeriod",
    }
  );
  return PackageInPeriod;
};
