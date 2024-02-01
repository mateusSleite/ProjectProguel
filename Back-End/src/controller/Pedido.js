const Pedido = require("../model/Pedido");

class PedidoController {
  static async createPedido(req, res) {
    const { title, text, userId, value, date } = req.body;

    if (!title) return res.status(400).json({ menssage: "title é obrigatório" });

    if (!text) return res.status(400).json({ menssage: "text é obrigatório" });

    if (!userId) return res.status(400).json({ menssage: "userId é obrigatório" });

    if (!value) return res.status(400).json({ menssage: "value é obrigatório" });

    if (!date) return res.status(400).json({ menssage: "date é obrigatório" });

    const newPedido = new Pedido({
      title,
      text,
      user: userId,
      value,
      date: new Date(date),
      likes: 0,
      likedBy: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    });

    try {
      await Pedido.create(newPedido);
      res.status(201).json({ menssage: "Pedido cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: "Erro ao cadastrar pedido", data: error.message });
    }
  }

  static async likePedido(req, res) {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).send({ message: "Nenhum Usuário Logado!" });
    }

    if (!id) return res.status(400).send({ message: "No id provider" });
    try {
      const pedido = await Pedido.findById(id);
      if (pedido.likedBy.includes(userId)) {
        pedido.likedBy = pedido.likedBy.filter((c) => c != userId);
        await pedido.save();
        await Pedido.findByIdAndUpdate(
          { _id: id },
          { likes: pedido.likedBy.length }
        );
        return res.status(201).send({ message: "Você deu DeskLike!" });
      }
      pedido.likedBy.push(userId);
      await pedido.save();
      await Pedido.findByIdAndUpdate(
        { _id: id },
        { likes: pedido.likedBy.length }
      );
      return res.status(201).send({ message: "Você deu Like!" });
    } catch (error) {
      return res
        .status(500)
        .send({ error: "Falha ao curtir", data: error.message });
    }
  }

  static async getAll(req, res){
    let page = req.params.page;
    let limit = 10;
    let skip = limit * (page -1);

    try{
      const pedidos = await Pedido.find().skip(skip).limit(limit);
      return res.status(200).send(pedidos);
    } catch(error){
      return res.status(500).send({ menssag: "Falha em carregar os pedidos" })
    }
  }


}

module.exports = PedidoController;
