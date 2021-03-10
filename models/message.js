const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class Message extends Model {}

Message.init(
  {
    // Model attributes are defined here
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    ts: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Message", // We need to choose the model name
    timestamps: false,
  }
);

// Sincroniza las tablas existentes
Message.sync();

module.exports = Message;