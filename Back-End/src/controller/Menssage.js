const socketIO = require('socket.io');
const menssage = require('../model/Menssage');

class MenssageController {
  static configureSocket(server) {
    const io = socketIO(server);

    io.on('connection', (socket) => {
      console.log('Cliente conectado');

      socket.on('join', async (grupoId) => {
        socket.join(grupoId);
        console.log(`Cliente entrou no grupo ${grupoId}`);

        try {
          const mensagensAnteriores = await menssage.find({ grupoId: grupoId }).sort({ createdAt: 1 });
          socket.emit('previousMessages', mensagensAnteriores);
        } catch (error) {
          console.error('Erro ao buscar as mensagens anteriores:', error);
        }
      });

      socket.on('message', async (grupoId, mensagem, user) => {
        console.log(`Nova mensagem recebida no grupo ${grupoId}: ${mensagem} pelo usuário ${user}`);
        const mensagemObj = {
          content: mensagem,
          sender: user,
          createdAt: new Date(),
        };
        io.to(grupoId).emit('message', mensagemObj);

        try {
          await menssage.create({
            content: mensagem,
            sender: user,
            createdAt: new Date(),
            grupoId: grupoId,
          });
        } catch (error) {
          console.error('Erro ao salvar a mensagem:', error);
        }
      });

      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });
    });
  }
}

module.exports = MenssageController;
