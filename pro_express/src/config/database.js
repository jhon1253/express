const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("Poryecto_ Final", "sebastian", "sebastian1253", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});

const ConexionDB () => {
    sequelize
    .sync()
    .then(() => console.log("conectando ala base de datos"))
    .catch((err) => console.log("error al conectar con la base de datos"))
}

module.export(ConexionDB, sequelize)