const {Sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")

const ususario = Sequelize.define(
  "usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false, // Considera si este campo debería ser obligatorio
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false, // Considera si este campo debería ser obligatorio
      unique: true, // Puedes agregar una restricción de unicidad si cada correo debe ser único
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true, // Puedes hacer este campo opcional si no siempre se proporciona
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true, // Puedes hacer este campo opcional si no siempre se proporciona
    },
    estado_cuenta: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // Considera si este campo debería ser obligatorio
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false, // Considera si este campo debería ser obligatorio
      defaultValue: DataTypes.NOW, // Puedes establecer un valor predeterminado si aplica
    },
  },
  {
    tableName: "usuarios",
    timestamps: false, // Configura esto según si deseas que Sequelize maneje timestamps automáticamente
  }
);

module.export(ususario)