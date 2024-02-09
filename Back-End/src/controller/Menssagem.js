const socketIO = require('socket.io');
const Menssagem = require('../model/Menssagem');

class MenssagemController {
  static configureSocket(server) {
    const io = socketIO(server);
    console.log("AQUII");
    io.on('connection', (socket) => {
      socket.on('message', async (receiverId, mensagem, senderId) => {
        try {
          const novaMensagem = await Menssagem.create({
            content: mensagem,
            senderId: senderId,
            receiverId: receiverId,
            createdAt: new Date(),
          });

          const mensagemObj = {
            content: mensagem,
            senderId: senderId,
            receiverId: receiverId,
            createdAt: new Date(),
          };

          io.to(receiverId).emit('message', mensagemObj);
          console.log('Mensagem criada e emitida com sucesso:', novaMensagem);
        } catch (error) {
          console.error('Erro ao salvar e emitir a mensagem:', error.message);
        }
      });
    });
  }
}

module.exports = MenssagemController;
