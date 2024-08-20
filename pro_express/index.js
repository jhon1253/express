const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const routerUsuarios = require("./src/routes/usuariosRoute");
const routerVentas = require("./src/routes/ventasRoute");
const routerCarritoCompras = require("./src/routes/carrito_comprasRoute");
const routerFacaturaVentas = require("./src/routes/factura_ventasRoute");
const { ConexionDB } = require("./src/config/database");

ConexionDB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json);

app.use("/usuarios", routerUsuarios);
app.use("/ventas", routerVentas);
app.use("/carrito_compras", routerCarritoCompras);
app.use("/factura_ventas", routerFacaturaVentas);

app.listen(port, () => {
  console.log(`ejecutando en http://localhost:${port}`);
});
