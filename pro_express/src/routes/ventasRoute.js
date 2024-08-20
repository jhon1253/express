const express = require("express");
const {
  VentasGet,
  VentasPost,
} = require("../controller/ventasController");

const router = express.Router();

router.get("/", VentasGet);
router.post("/", VentasPost);

module.exports = router;
