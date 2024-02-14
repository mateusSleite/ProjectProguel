const express = require('express');
const PedidoController = require('../controller/Pedido');
const router = express.Router();

router
    .post("/create", PedidoController.createPedido)
    .post("/like/:id", PedidoController.likePedido)
    .get("/pedidos", PedidoController.getAll)
module.exports = router;
