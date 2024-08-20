const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const CarritoCompra = sequelize.define(
  "carrito_compra",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_carrito: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: "usuarios",
        key: "uid_usuario",
      },
    },
  },
  {
    tableName: "carrito_compras",
    timestamps: false,
  }
);

module.exports = CarritoCompra;
