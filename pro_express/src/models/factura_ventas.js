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
      type: DataTypes.INTEGER,
      allowNull: true, // Opcional, ya que en SQL no se especifica NOT NULL
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
    id_producto: {
      type: DataTypes.JSONB, // JSONB para PostgreSQL
      allowNull: true, // Opcional, ya que en SQL no se especifica NOT NULL
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
