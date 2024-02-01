const Pedido = require('../model/Pedido');

class PedidoController {
  static async createPedido(req, res) {
    try {
      const { title, text, userId, value, date } = req.body;

      if(!title) return res.status(400).json({ menssage: "title é obrigatório" });

      if(!text) return res.status(400).json({ menssage: "text é obrigatório" });

      if(!userId) return res.status(400).json({ menssage: "userId é obrigatório" });

      if(!value) return res.status(400).json({ menssage: "value é obrigatório" });

      if(!date) return res.status(400).json({ menssage: "date é obrigatório" });

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

      const savedPedido = await newPedido.save();
      res.status(201).json(savedPedido);
    } catch (error) {
      console.error('Error creating Pedido:', error);
      res.status(500).send('Error creating Pedido.');
    }
  }
}

module.exports = PedidoController;
