const CarritoCompra = require("../models/carrito_Compras");

const CarritoGet = async (req, res) => {
  try {
    const carritos = await CarritoCompra.findAll();
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CarritoPost = async (req, res) => {
  const { 
    id_carrito,
    id_producto,
    id_usuario
     } = req.body;

  try {
    const NewCarrito = await CarritoCompra.create({
      id_carrito,
      id_producto,
      id_usuario,
    });

    res.status(200).json(NewCarrito);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { CarritoGet, CarritoPost };
