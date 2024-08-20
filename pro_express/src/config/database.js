const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "Proyecto_Final", // Nombre de la base de datos
  "sebastian", // Usuario
  "sebastian1253", // Contraseña
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

const ConexionDB = () => {
  sequelize
    .sync()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) =>
      console.log("Error al conectar con la base de datos:", err)
    );
};

module.exports = { ConexionDB, sequelize };
