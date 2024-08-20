const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const FacturaVenta = sequelize.define(
  "factura_venta",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_factura: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha_pedido: {
      type: DataTypes.DATE,
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
    precio_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "factura_ventas",
    timestamps: false,
  }
);

module.exports = FacturaVenta;
