const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
} = require("../controller/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);

module.exports = router;
