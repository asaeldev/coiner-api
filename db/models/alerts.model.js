const { Model, DataTypes } = require("sequelize");

const ALERTS_TABLE = "alerts";

const AlertsSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  assetId: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telegramId: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  desiredPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
};

class Alerts extends Model {
  static associate(models) {
    // this.belongsTo(models.Users, {
    //   as: "User",
    //   foreignKey: {
    //     allowNull: false,
    //   },
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ALERTS_TABLE,
      modelName: "Alerts",
      timestamps: true,
    };
  }
}

module.exports = { ALERTS_TABLE, Alerts, AlertsSchema };
