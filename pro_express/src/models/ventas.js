const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Venta = sequelize.define(
  "venta",
  {
    id_venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "factura_ventas",
        key: "id_factura",
      },
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "ventas",
    timestamps: false,
  }
);

module.exports = Venta;
