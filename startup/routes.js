const express = require("express");
const user = require("../src/routes/User");
const pedido = require("../src/routes/Pedido");
const menssage = require("../src/model/Menssage");


module.exports = function (app){
    app.use(express.json())
        .use("/api/user", user)
        .use("/api/pedido", pedido)
        .use("/api/menssage", menssage)
}