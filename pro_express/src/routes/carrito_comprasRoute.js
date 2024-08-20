const express = require("express");
const {
  CarritoGet,
  CarritoPost,
} = require("../controller/carrito_comprasController");

const router = express.Router();

router.get("/", CarritoGet);
router.post("/", CarritoPost);

module.exports = router;
