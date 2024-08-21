const express = require("express");
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosPut,
  UsuariosDelete,
} = require("../controller/usuariosController");

const router = express.Router();

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.put("/", UsuariosPut);
router.delete("/", UsuariosDelete)


module.exports = router;
