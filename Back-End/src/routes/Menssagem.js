const express = require("express");
const MenssagemController = require("../controller/Menssagem");
const route = express.Router();

const menssagemControllerInstance = new MenssagemController();

route
  .get("/socket", (req, res) => {
    menssagemControllerInstance.configureSocket(req.server);
    res.send("Socket configurado com sucesso");
  })
  .post("/send", (req, res) => {
    menssagemControllerInstance.configureSocket(req.server);
    res.send("Mensagem enviada com sucesso");
  })
  .get("/get/:grupoId", async (req, res) => {
    const grupoId = req.params.grupoId;

    try {
      const mensagensAnteriores = await Menssage.find({
        receiver: grupoId,
      }).sort({ createdAt: 1 });
      res.json(mensagensAnteriores);
    } catch (error) {
      console.error("Erro ao buscar as mensagens anteriores:", error);
      res.status(500).send("Erro ao buscar mensagens");
    }
  });

module.exports = route;
