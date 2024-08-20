const express = require("express");
const {
  FacturaGet,
  FacturaPost,
} = require("../controller/factura_ventasController");

const router = express.Router();

router.get("/", FacturaGet);
router.post("/", FacturaPost);

module.exports = router;
