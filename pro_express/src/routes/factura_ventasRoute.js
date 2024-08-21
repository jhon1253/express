const express = require("express");
const {
  FacturaGet,
  FacturaPost,
  FacturasPut,
  FacturasDelete,
} = require("../controller/factura_ventasController");

const router = express.Router();

router.get("/", FacturaGet);
router.post("/", FacturaPost);
router.put("/", FacturasPut);
router.delete("/", FacturasDelete);

module.exports = router;
