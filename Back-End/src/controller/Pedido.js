const Pedido = require("../model/Pedido");

class PedidoController {
  static async createPedido(req, res) {
    const { userId, title, text, difficulty, language, precoMin, precoMax } = req.body;

    if (!title) return res.status(400).json({ menssage: "title é obrigatório" });

    if (!text) return res.status(400).json({ menssage: "text é obrigatório" });

    if (!userId) return res.status(400).json({ menssage: "userId é obrigatório" });


    const newPedido = new Pedido({
      title,
      text,
      userId: userId,
      difficulty,
      language,
      precoMin,
      precoMax,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    })

    console.log(newPedido);

    try {
      await Pedido.create(newPedido);
      res.status(201).json({ menssage: "Pedido cadastrado com sucesso" });
      console.log("aaa");
    } catch (error) {
      console.log("bbb");
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

  static async getAll(req, res) {
    try {
      const pedidos = await Pedido.find();
      return res.status(200).send(pedidos);
    } catch (error) {
      return res.status(500).send({ mensagem: "Falha em carregar os pedidos" });
    }
  }

  static async getId(req, res) {
    const { id } = req.params;
    try {
      const pedido = await Pedido.findById(id);

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      return res.status(200).json(pedido);
    } catch (error) {
      return res.status(500).json({ message: "Falha ao buscar o pedido", error: error.message });
    }
  }

  static async deletePedido(req, res) {
    const { id } = req.params;

    try {
      const pedido = await Pedido.findById(id);
      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      await Pedido.findByIdAndDelete(id);

      return res.status(200).json({ message: "Pedido excluído com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Falha ao excluir o pedido", error: error.message });
    }
  }
}

module.exports = PedidoController;
