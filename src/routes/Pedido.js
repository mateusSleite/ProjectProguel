const express = require('express');
const PedidoController = require('../controller/Pedido');
const router = express.Router();

router
    .post('/create', PedidoController.createPedido)

module.exports = router;
