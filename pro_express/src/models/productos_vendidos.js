const { Sequelize, DataTypes } = require("../config/database");

const ProductosVendidos = Sequelize.define(
  "productos_vendidos",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "factura_ventas", // Nombre de la tabla referenciada
        key: "id_factura", // Nombre de la columna referenciada
      },
      primaryKey: true, // Parte de la clave primaria compuesta
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, // Parte de la clave primaria compuesta
    },
    precio_unidad: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cantidad_vendida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "productos_vendidos",
    timestamps: false, // Configura esto según si deseas que Sequelize maneje timestamps automáticamente
  }
);

module.export(ProductosVendidos)