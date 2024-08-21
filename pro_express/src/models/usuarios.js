const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Usuario = sequelize.define(
  "usuarios",
  {
    uid_usuario: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    nombre_completo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true, // Opcional
    },
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: true, // Opcional
    },
    estado_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false, // No manejar timestamps automáticamente
  }
);

module.exports = Usuario;
