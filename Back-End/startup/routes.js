const express = require("express");
const user = require("../src/routes/User");
const pedido = require("../src/routes/Pedido");
const mensagem = require("../src/routes/Menssagem")


module.exports = function (app){
    app.use(express.json())
        .use("/api/user", user)
        .use("/api/pedido", pedido)
        .use("/api/menssagem", mensagem)
}